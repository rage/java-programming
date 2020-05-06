const courseSettings = {
  language: "en",
  name: "Java Programming",
  siteUrl: "https://java-programming.mooc.fi",
  subtitle: "A free online course on learning Java",
  slug: "java-programming-i",
  tmcCourse: "java-programming-i",
  quizzesId: "6a635a2d-4e4b-49cc-8487-8d9cab6a74e7",
  tmcOrganization: "mooc",
  bannerPath: "banner.svg",
  sidebarEntries: [
    {
      title: "About the course",
      path: "/",
    },
    {
      title: "Support and assistance",
      path: "/support-and-assistance",
    },
    {
      title: "Grading and exams",
      path: "/grading-and-exams",
    },
    {
      title: "Frequently asked questions",
      path: "/faq",
    },
    { separator: true, title: "Java Programming I" },
  ],
  sidebarFuturePages: [
    { title: "Part 12", tba: "Coming Soon" }, // 21.4.
    { title: "Part 13", tba: "Coming Soon" }, // 28.4.
    { title: "Part 14", tba: "Coming Soon" }, // 5.5.
  ], // { title: "Osa 14", tba: "19.4.2019" },
  splitCourses: false,
  useNewPointsVisualization: false
}

module.exports = {
  default: courseSettings,
}
