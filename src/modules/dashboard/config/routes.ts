import NotFound from "../exceptions/404"
import User from '../user';
import Product from '../product';

const routes=[
    {
        from:'/dashboard',
        to:'/dashboard/user',
    },{
        path:'/dashboard/user',
        component:User
    },{
        path:'/dashboard/product',
        component:Product
    },{
        path:'*',
        component:NotFound
    }
]
export default routes