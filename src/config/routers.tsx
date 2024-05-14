import { lazy } from "react";

// Interface
import { Routers } from "@interfaces/router.interface";

// ==> Pages
const Home = lazy(() => import("@pages/Home"));
const SignIn = lazy(() => import("@pages/Login/SignIn"));
const Error404 = lazy(() => import("@src/pages/Error/Error404"));

const pages: Routers[] = [
  {
    path: "/",
    element: <Home />,
    type: "private",
    access: "Authenticated",
  },
  {
    path: "/login",
    element: <SignIn />,
    type: "public",
    access: "UnAuthenticated",
  },
  {
    path: "/404",
    element: <Error404 />,
    type: "public",
    access: "UnAuthenticated",
  },
  {
    path: "*",
    element: <Error404 />,
    type: "public",
    access: "UnAuthenticated",
  },
];

export { pages };
