import {Switch ,Route,Redirect} from 'react-router-dom';
import List from './list';
import Add from './add';
import Edit from './edit';
import { Suspense } from 'react';
import NotFound from '../exceptions/404';
const LocalId=()=>{
    return <div>
        <Suspense fallback={<>loading</>}>
       <Switch>
           <Redirect exact from="/dashboard/localid" to="/dashboard/localid/list" >

           </Redirect>
           <Route exact path="/dashboard/localid/list">
               <List/>
           </Route>
           <Route exact path="/dashboard/localid/add">
               <Add/>
           </Route>
           <Route>
               <NotFound/>
           </Route>
       </Switch>
       </Suspense>
    </div>
}
export default LocalId;