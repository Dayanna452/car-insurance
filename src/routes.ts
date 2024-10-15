import Home from "./pages";
import Quotation from "./pages/Quotation";
import Thankyou from "./pages/Thankyou";
import NotFound from "./pages/NotFound";

export const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/quotation",
    exact: true,
    component: Quotation,
  },
  {
    path: "/thankyou",
    component: Thankyou,
  },
  {
    path: "*",
    component: NotFound,
  },
];
