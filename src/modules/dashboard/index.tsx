import {Suspense,lazy} from 'react';
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import LocalId from './localid'
const NotFound=lazy(()=>import('../dashboard/exceptions/404'));

const Dashboard=()=>{
    return <>
    
        <header>Header</header>
        <aside>aside</aside>
        <main>
            <div>
            <Suspense fallback={<></>}>
                <Switch>
                <Redirect  exact  from="/dashboard" to="/dashboard/localid">
                </Redirect>
     
                    <Route  path="/dashboard/localid">
                        <LocalId />
                    </Route>
                   
                    <Route>
                    <NotFound />
                    </Route>
                </Switch>
               </Suspense>
            </div>
        </main>
        <footer>footer</footer>
    
        
    </>
}
export default Dashboard;