import {
  HomeIcon,
  SubjectIcon,
  AssignmentIcon,
  PersonIcon,
  ContactPhoneIcon,
} from "../components/Material/Icons";

const menuItems = [
  {
    id: "home",
    label: "Home",
    url: "/",
    icon: <HomeIcon />,
  },
  {
    id: "blog",
    label: "Blog",
    url: "/blog",
    icon: <SubjectIcon />,
  },
  {
    id: "projects",
    label: "Projects",
    url: "/projects",
    icon: <AssignmentIcon />,
  },
  {
    id: "about-me",
    label: "About Me",
    url: "/about-me",
    icon: <PersonIcon />,
  },
  {
    id: "contact-us",
    label: "Contact Us",
    url: "/contact-us",
    icon: <ContactPhoneIcon />,
  },
];

export default menuItems;
