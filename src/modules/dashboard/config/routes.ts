import {lazy} from 'react';
import NotFound from "../exceptions/404";
const NoRight =lazy(()=>import('../exceptions/403'));
import User from '../user';
import Product from '../product';
import {IRoute} from '../../../shared/utils/types/router';



const routes:IRoute[]=[
    {
        from:'/dashboard',
        to:'/dashboard/user',
    },{
        path:'/dashboard/user',
        component:User,
        title:'用户管理',
        subtitle:'用户列表',
        authority: ["sysadmin"],
        redirectPath: "/dashboard/403",
    },{
        path:'/dashboard/product',
        component:Product,
        title:'产品管理',
        subtitle:'产品列表',
        authority: ["admin","sysadmin"],
        redirectPath: "/login",
    },
    {
        path:'/dashboard/403',
        component:NoRight

    },
    {
        path:'*',
        component:NotFound
    }
]
export default routes