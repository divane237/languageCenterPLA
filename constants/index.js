import EnglandFlag from "@/components/EnglandFlag";
import FranceFlag from "@/components/FranceFlag";
import GermanFlag from "@/components/GermanFlag";
import {
  BookOpenCheck,
  Home,
  Languages,
  Notebook,
  Settings,
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
    image: "/images/english-ielts-logo.png",
  },
  {
    title: "TOEFL",
    image: "/images/english-toefl-logo.png",
  },
  {
    title: "CAMBRIDGE",
    image: "/images/english-cambridge-logo.png",
  },
  {
    title: "CELPIP",
    image: "/images/english-celpip-logo.png",
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
    cambridge: {
      category: [
        {
          name: "First Certificate in English (FCE)",
          value: "FCE",
        },
        {
          name: "Certificate in Advanced English (CAE)",
          value: "CAE",
        },
        {
          name: "Certificate of Proficiency (CPE)",
          value: "CPE",
        },
        {
          name: "Business English Certificate (BEC)",
          value: "BEC",
        },
      ],
    },
    toefl: {
      category: [
        {
          name: "Internet-based Test",
          value: "Internet-based Test (iBT)",
        },
        {
          name: "Essentials",
          value: "Essentials",
        },
      ],
    },
    celpip: {
      category: [
        {
          name: "General",
          value: "General",
        },
        {
          name: "General LS",
          value: "General LS",
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
