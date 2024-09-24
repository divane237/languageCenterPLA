import EnglandFlag from "@/components/EnglandFlag";
import FranceFlag from "@/components/FranceFlag";
import GermanFlag from "@/components/GermanFlag";
import {
  BookOpenCheck,
  Home,
  Languages,
  LogIn,
  Notebook,
  Settings,
  User,
  UserRound,
} from "lucide-react";

export const navMenu = [
  {
    title: "Home",

    route: "/",
    special: false,
    logo: <Home />,
  },
  {
    title: "Classes",
    title1: "",
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
    logo: <Languages />,
  },
  {
    title: "About Us",
    route: "/about",
    special: false,
    logo: <Notebook />,
  },
];

export const dashboardMenuList = [
  {
    title: "Profile",
    logo: <UserRound size={28} strokeWidth={1.5} />,
    route: "/dashboard",
  },
  {
    title: "English",
    logo: <EnglandFlag size={28} strokeWidth={1.5} />,
    route: "/dashboard/english",
  },
  {
    title: "French",
    logo: <FranceFlag size={28} strokeWidth={1.5} />,
    route: "/dashboard/french",
  },
  {
    title: "German",
    logo: <GermanFlag size={28} strokeWidth={1.5} />,
    route: "/dashboard/german",
  },
  {
    title: "Exam Results",
    logo: <BookOpenCheck size={28} strokeWidth={1.5} />,
    route: "/dashboard/results",
  },
  {
    title: "Settings",
    logo: <Settings size={28} strokeWidth={1.5} />,
    route: "/dashboard/settings",
  },
];

export const englishLanguageTests = [
  {
    title: "IELTS",
    description:
      "You can customize various parameters related to your IELTS exam, as well as your initial language level when joining the center. Additionally, you'll be able to track and review any results or updates shared directly by the test center, ensuring you stay informed about your performance and progress.",
    image: "/images/english-ielts-logo.png",
    route: "english/ielts",
  },
  {
    title: "TOEFL",
    description:
      "You can customize various parameters related to your IELTS exam, as well as your initial language level when joining the center. Additionally, you'll be able to track and review any results or updates shared directly by the test center, ensuring you stay informed about your performance and progress.",
    image: "/images/english-toefl-logo.png",
    route: "english/toefl",
  },
  {
    title: "CAMBRIDGE",
    description:
      "You can customize various parameters related to your IELTS exam, as well as your initial language level when joining the center. Additionally, you'll be able to track and review any results or updates shared directly by the test center, ensuring you stay informed about your performance and progress.",
    image: "/images/english-cambridge-logo.png",
    route: "english/cambridge",
  },
  {
    title: "CELPIP",
    description:
      "You can customize various parameters related to your IELTS exam, as well as your initial language level when joining the center. Additionally, you'll be able to track and review any results or updates shared directly by the test center, ensuring you stay informed about your performance and progress.",
    image: "/images/english-celpip-logo.png",
    route: "english/celpip",
  },
];

export const languageExamOptions = {
  english: {
    ielts: {
      category: [
        {
          name: "Academic",
          value: "Academic",
        },
        {
          name: "General",
          value: "General",
        },
      ],
      level: [
        {
          name: "A1 Beginner(Basic User)",
          value: "A1",
        },
        {
          name: "A2 Elementary (Basic User)",
          value: "A2",
        },
        {
          name: "B1 Intermediat (Independent User)",
          value: "B1",
        },
        {
          name: "B2 Upper Intermediate (Independent User)",
          value: "B2",
        },
        {
          name: "C1 Advanced (Proficient User)",
          value: "C1",
        },
        {
          name: "C2 Proficient (Mastery)",
          value: "C2",
        },
      ],
      method: [
        {
          name: "At Home",
          value: "Home",
        },
        {
          name: "At the center",
          value: "Center",
        },
        {
          name: "Online",
          value: "Online",
        },
      ],
      tutors: [
        {
          name: "Mr Divane",
          value: "Mr Divane",
        },
        {
          name: "Mrs Sandrine",
          value: "Mrs Sandrine",
        },
        {
          name: "Dr Linus Pol",
          value: "Dr Linus Pol",
        },
      ],
    },
  },
};

export const options = [
  {
    name: "Passport",
    value: "Passport",
  },
  {
    name: "National ID",
    value: "National ID",
  },
  {
    name: "Driver's License",
    value: "Driver License",
  },
];
