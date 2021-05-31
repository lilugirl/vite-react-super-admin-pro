import { Suspense } from 'react';
import RouterView from '../../../shared/router';
import routes from './config/routes';
const Product=()=>{
    return <div>
        <Suspense fallback={<>loading</>}>
         <RouterView routes={routes}></RouterView>
       </Suspense>
    </div>
}
export default Product;