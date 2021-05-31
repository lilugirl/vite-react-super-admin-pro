import { Switch, Route, Redirect } from "react-router-dom";
const RouterView = ({ routes }: any) => {
  const componentList = routes.filter((v: any) => v.component);
  const redirectList = routes.filter((v: any) => v.to);
  return (
    <>
      <Switch>
        {redirectList.map((v: any, i: number) => {
          return <Redirect exact from={v.from} to={v.to} key={i}></Redirect>;
        })}
        {componentList.map((v: any, i: number) => {
          return (
            <Route key={v.path} path={v.path}>
              <v.component></v.component>
            </Route>
          );
        })}
      </Switch>
    </>
  );
};
export default RouterView;
