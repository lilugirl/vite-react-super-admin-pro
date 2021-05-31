import {Switch,Route} from 'react-router-dom';
const RouterView=({routes}:any)=>{
  return (  
    <Switch>
    {routes.map((route:any)=>{
        <Route exact key={route.path} path={route.path}></Route>
    })}
    </Switch>
    )

  }
export default RouterView;