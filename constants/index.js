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

export const userData = {
  firstName: "Divane",
  lastName: "Djoumetio Jeugo",
  email: "didjoumetio@gmail.com",
  address: "Mvog gada, Yaounde, CE",
  country: "Cameroon",
  document: "ID Card",
  idNumber: "123456",
  dateOfBirth: "1995-06-21",
};

export const dashboardMenuList = [
  {
    title: "Profile",
    logo: <UserRound size={28} strokeWidth={1.5} />,
    route: "/dashboard",
  },
  {
    title: "English",
    logo: <EnglandFlag />,
    route: "/dashboard/english",
  },
  {
    title: "French",
    logo: <FranceFlag />,
    route: "/dashboard/french",
  },
  {
    title: "German",
    logo: <GermanFlag />,
    route: "/dashboard/german",
  },
  {
    title: "Exam Results",
    logo: <BookOpenCheck size={28} strokeWidth={1.5} />,
    route: "/dashboard/results",
  },
  {
    title: "Settings",
    logo: <Settings />,
    route: "/dashboard/settings",
  },
];
