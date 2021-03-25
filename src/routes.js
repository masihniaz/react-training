import {
  Home,
  Blog,
  Projects,
  AboutMe,
  ContactUs,
  Login,
  SignUp,
  ForgotPassword,
  Profile,
  NotFound,
} from "./pages";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
    isProtedcted: false,
  },
  {
    path: "/blog",
    component: Blog,
    exact: true,
    isProtedcted: false,
  },
  {
    path: "/projects",
    component: Projects,
    exact: true,
    isProtedcted: false,
  },
  {
    path: "/about-me",
    component: AboutMe,
    exact: true,
    isProtedcted: false,
  },
  {
    path: "/contact-us",
    component: ContactUs,
    exact: true,
    isProtedcted: false,
  },
  {
    path: "/login",
    component: Login,
    exact: true,
    isProtedcted: false,
  },
  {
    path: "/sign-up",
    component: SignUp,
    exact: true,
    isProtedcted: false,
  },
  {
    path: "/forgot-password",
    component: ForgotPassword,
    exact: true,
    isProtedcted: false,
  },
  {
    path: "/profile",
    component: Profile,
    exact: true,
    isProtedcted: true,
  },
  {
    path: "/not-found",
    component: NotFound,
    exact: true,
    isProtedcted: false,
  },
];

export default routes;
