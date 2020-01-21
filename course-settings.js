const courseSettings = {
  language: "en",
  name: "Java Programming",
  siteUrl: "https://java-programming.mooc.fi",
  subtitle: "A free online course on learning Java",
  slug: "java-programming-i",
  tmcCourse: "java-programming-i",
  quizzesId: "TODO",
  tmcOrganization: "mooc",
  bannerPath: "banner.svg",
  sidebarEntries: [
    {
      title: "About the course",
      path: "/",
    },
    {
      title: "Frequently asked questions",
      path: "/faq",
    },
    { separator: true, title: "Introduction to programming" },
  ],
  sidebarFuturePages: [], // { title: "Osa 14", tba: "19.4.2019" },
  splitCourses: false,
  useNewPointsVisualization: false
}

module.exports = {
  default: courseSettings,
}
