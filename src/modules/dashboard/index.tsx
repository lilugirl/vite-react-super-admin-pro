import {Suspense,lazy, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import RouterView from '../../shared/router';
import BreadCrumb from './components/breadcrumb';
import routes from './config/routes';
import { setTitle ,setSubTitle} from './store/slice/navSlice';

const Dashboard=(props:any)=>{
    const dispatch=useDispatch();
    useEffect(() => {
        if(props?.location?.state?.title){
           dispatch(setTitle(props?.location?.state?.title))
        }
  
        if(props?.location?.state?.subtitle){
          dispatch(setSubTitle(props?.location?.state?.subtitle))
       }
     }, [props?.location])
    return <>
     
        <header>Header</header>
        <aside>
            <Link to="/dashboard/user" >User</Link>
            <Link to="/dashboard/product">Product</Link>
        </aside>
        <main>
            <div>
              <BreadCrumb />
              <Suspense fallback={<></>}>
                <RouterView routes={routes} ></RouterView>
              </Suspense>
              
            </div>
        </main>
        <footer>footer</footer> 
        
    </>
}
export default Dashboard;