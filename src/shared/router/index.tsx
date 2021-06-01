import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRole } from "../store/slice/authSlice";
import { IRoute } from "../utils/types/router";
const RouterView = ({ routes }: any) => {
  const role = useSelector(selectRole);
  const componentList = routes.filter((v: any) => v.component);
  const redirectList = routes.filter((v: any) => v.to);

  return (
    <>
      <Switch>
        {redirectList.map((v: any, i: number) => {
          return <Redirect exact from={v.from} to={v.to} key={i}></Redirect>;
        })}
        {componentList.map((v: IRoute, i: number) => {
          return (
            <Route
              key={v.path}
              path={v.path}
              render={(props: any) => {
                if (v.title && v.subtitle) {
                  props.location.state = {
                    ...props.location.state,
                    title: v.title,
                    subtitle: v.subtitle,
                  };
                }

                if (v.authority && v.authority.length > 0) {
                  if (!role || !v.authority.includes(role)) {
                    return (
                      <Redirect
                        from={v.path}
                        to={v.redirectPath || "/login"}
                      ></Redirect>
                    );
                  }
                }

                return <v.component {...props}></v.component>;
              }}
            ></Route>
          );
        })}
      </Switch>
    </>
  );
};
export default RouterView;
