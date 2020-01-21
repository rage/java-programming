const GraphQLString = require("gatsby/graphql").GraphQLString
const GraphQLList = require("gatsby/graphql").GraphQLList
const GraphQLObjectType = require("gatsby/graphql").GraphQLObjectType

const quizRegex = /<\s*quiz\s*id\s*=\s*['"]\s*([\w-]+)\s*['"]\s*>/gm
const crowdsorcererRegex = /<\s*crowdsorcerer\s*id\s*=\s*['"]\s*(\w+)\s*['"].*>/gm
const programmingExerciseTagRegex = /<\s*programming-exercise\s+(.*)\s*>/gm
const programmingExerciseNameRegex = /\bname\s*=\s*(["].*?["]|['].*?['])/gm
const moodleRegex = /<\s*moodle-exercise\s*name\s*=\s*['"]\s*(.*)\s*['"]\s*>/gm
const sqlTrainerRegex = /<\s*sqltrainer-exercise\s*name\s*=\s*['"]\s*(.*)\s*['"]\s*>/gm
const commentRegex = /<!--.*?-->/mgs


function getMatches(string, regex, index) {
  index || (index = 1) // default to the first capturing group
  var matches = []
  var match
  while ((match = regex.exec(string))) {
    const location = match.index
    matches.push({ match: match[index], location })
  }
  return matches
}

const ExerciseType = new GraphQLObjectType({
  name: `Exercise`,
  fields: {
    id: {
      type: GraphQLString,
      resolve(details) {
        return details.id
      },
    },
    type: {
      type: GraphQLString,
      resolve(details) {
        return details.type
      },
    },
    parentPagePath: {
      type: GraphQLString,
      resolve(details) {
        return details.parentPagePath
      },
    },
  },
})

exports.setFieldsOnGraphQLNodeType = ({ type }) => {
  if (type.name === `MarkdownRemark`) {
    return {
      moocfiExercises: {
        type: GraphQLList(ExerciseType),
        resolve: (node, _fieldArgs) => {
          // nuke commented text
          const source = (node.rawMarkdownBody || "").replace(commentRegex, "")
          const quizzes = getMatches(source, quizRegex, 1).map(res => {
            return {
              id: res.match,
              location: res.location,
              type: "quiz",
              parentPagePath: node.frontmatter.path,
            }
          })
          const programmingExercises = getMatches(
            source,
            programmingExerciseTagRegex,
            1,
          ).map(res => {
            let id = "unknown"
            try {
              const match = getMatches(
                res.match,
                programmingExerciseNameRegex,
                1,
              )[0].match
              id = match.substr(1, match.length - 2)
            } catch (e) {}
            return {
              id,
              location: res.location,
              type: "programming-exercise",
              parentPagePath: node.frontmatter.path,
            }
          })

          const crowdsorcerers = getMatches(source, crowdsorcererRegex, 1).map(
            res => {
              return {
                id: res.match,
                location: res.location,
                type: "crowdsorcerer",
                parentPagePath: node.frontmatter.path,
              }
            },
          )

          const moodles = getMatches(source, moodleRegex, 1).map(res => {
            return {
              id: res.match,
              location: res.location,
              type: "moodle-exercise",
              parentPagePath: node.frontmatter.path,
            }
          })

          const sqlTrainers = getMatches(source, sqlTrainerRegex, 1).map(
            res => {
              return {
                id: res.match,
                location: res.location,
                type: "sqltrainer-exercise",
                parentPagePath: node.frontmatter.path,
              }
            },
          )

          return programmingExercises
            .concat(quizzes)
            .concat(crowdsorcerers)
            .concat(moodles)
            .concat(sqlTrainers)
            .sort(function(a, b) {
              return a.location - b.location
            })
        },
      },
    }
  }

  // by default return empty object
  return {}
}
