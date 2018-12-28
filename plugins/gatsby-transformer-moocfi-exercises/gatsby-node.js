const GraphQLString = require('gatsby/graphql').GraphQLString
const GraphQLList = require('gatsby/graphql').GraphQLList
const GraphQLObjectType = require('gatsby/graphql').GraphQLObjectType

const quiznatorRegex = /<\s*quiznator\s*id\s*=\s*['"]\s*(\w+)\s*['"]\s*>/gm
const programmingExerciseTagRegex = /<\s*programming-exercise\s+(.*)\s*>/gm
const programmingExerciseNameRegex = /\bname\s*=\s*(["].*?["]|['].*?['])/gm

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
  },
})

exports.setFieldsOnGraphQLNodeType = ({ type }) => {
  if (type.name === `MarkdownRemark`) {
    return {
      moocfiExercises: {
        type: GraphQLList(ExerciseType),
        resolve: (node, _fieldArgs) => {
          const source = node.rawMarkdownBody
          const quizzes = getMatches(source, quiznatorRegex, 1).map(res => {
            return { id: res.match, location: res.location, type: 'quiznator' }
          })
          const programmingExercises = getMatches(
            source,
            programmingExerciseTagRegex,
            1
          ).map(res => {
            let id = 'unknown'
            try {
              const match = getMatches(
                res.match,
                programmingExerciseNameRegex,
                1
              )[0].match
              id = match.substr(1, match.length - 2)
            } catch (e) {}
            return { id, location: res.location, type: 'programming-exercise' }
          })

          return programmingExercises.concat(quizzes).sort(function(a, b) {
            return a.location - b.location
          })
        },
      },
    }
  }

  // by default return empty object
  return {}
}
