export const navMenu = [
  {
    title: "Home",
    title2: "",
    route: "/home",
    special: false,
  },
  {
    title: "Classes",
    title2: "",
    route: ["/english", "/french", "/german"],
    english: {
      subTitle: "English Classes",
      description:
        "Level up your language skill from a beginner A1 to an expert C1 english speaker with a learning program of your choice. We prepare you for IELTS, TOEFL, Cambridge Exams and many more.",
      route: "/english",
      imageSource: "/icons/english_link_image.svg",
    },
    french: {
      subTitle: "French Classes",
      description:
        "Take your language skill to another level and attempt any french exam (TCF, TEC). We give you the exam result you need for your immigration and various universities.",
      route: "/french",
      imageSource: "/icons/french_link_image.svg",
    },
    german: {
      subTitle: "German Classes",
      description:
        "German language has never been made this easy with us. We emphasize on all the aspect of the german language, primarily; Grammar, Vocabulary and Pronunciation. Making your german fluent and natural.",
      route: "/german",
      imageSource: "/icons/german_link_image.svg",
    },

    special: true,
  },
  {
    title: "About Us",
    title2: "",
    route: "/about",
    special: false,
  },

  {
    title: "Sign In",
    title2: "/ Sign Up",
    route: "/sign-in",
    special: false,
  },
];

export const options = [
  {
    name: "Passport",
    value: "passport",
  },
  {
    name: "National ID",
    value: "nationalId",
  },
  {
    name: "Driver's License",
    value: "driverLicense",
  },
];
