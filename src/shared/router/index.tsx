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
            <Route key={v.path} path={v.path} render={(props:any)=>{
              if(v.title && v.subtitle){
                props.location.state={
                  ...props.location.state,
                  title:v.title,
                  subtitle:v.subtitle
                }
              }
              return  <v.component  {...props}></v.component>
            }}>
             
            </Route>
          );
        })}
      </Switch>
    </>
  );
};
export default RouterView;
