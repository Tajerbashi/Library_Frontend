import React from "react";
import Loadable from "react-loadable";
function Loading({ error }) {
  if (error) {
    return 'Oh nooess!';
  } else {
    return <h3>Loading...</h3>;
  }
}
export default [
  {
    path: "/",
    component: Loadable({
      loader: () => import("./Home/HomeComponent"),
      loading: Loading
    }),
  },
  {
    path: "/Dashboard",
    component: Loadable({
      loader: () => import("./Dashboard/DashboardComponent"),
      loading: Loading
    }),
  },
];
