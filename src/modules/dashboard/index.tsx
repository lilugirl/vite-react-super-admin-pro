import {Suspense,lazy} from 'react';
import RouterView from '../../shared/router';
import routes from './config/routes';
const NotFound=lazy(()=>import('../dashboard/exceptions/404'));

const Dashboard=()=>{
    return <>
        <header>Header</header>
        <aside>aside</aside>
        <main>
            <div>
              <Suspense fallback={<></>}>
                <RouterView routes={routes} ></RouterView>
               </Suspense>
            </div>
        </main>
        <footer>footer</footer>     
    </>
}
export default Dashboard;