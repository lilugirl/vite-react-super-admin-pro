import NotFound from "../exceptions/404"
import User from '../user';
import Product from '../product';

const routes=[
    {
        from:'/dashboard',
        to:'/dashboard/user',
    },{
        path:'/dashboard/user',
        component:User,
        title:'用户管理',
        subtitle:'用户列表'
    },{
        path:'/dashboard/product',
        component:Product,
        title:'产品管理',
        subtitle:'产品列表'
    },{
        path:'*',
        component:NotFound
    }
]
export default routes