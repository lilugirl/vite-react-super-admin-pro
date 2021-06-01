import NotFound from "../../exceptions/404";
import Add from "../add";
import List from "../list";

const routes = [
  {
    from: "/dashboard/product",
    to: "/dashboard/product/list",
  },
  {
    path: "/dashboard/product/list",
    component: List,
    title: "产品管理",
    subtitle: "产品列表",
  },
  ,
  {
    path: "/dashboard/product/add",
    component: Add,
    title: "产品管理",
    subtitle: "添加产品",
  },
  {
    path: "*",
    component: NotFound,
  },
];
export default routes;
