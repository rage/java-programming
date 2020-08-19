const courseSettings = {
  language: "en",
  name: "Introduction To Programming",
  siteUrl: "https://rowtricker.github.io",
  subtitle: "An introductory programming course on Java",
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
  ], 
  splitCourses: false,
  useNewPointsVisualization: false
}

module.exports = {
  default: courseSettings,
}
