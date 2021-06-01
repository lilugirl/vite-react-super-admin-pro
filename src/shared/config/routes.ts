import { lazy } from 'react';
import {IRoute} from '../utils/types/router';
import Dashboard from '../../modules/dashboard';
import Login from '../../modules/login';
const Docs = lazy(()=>import("../../modules/docs"));
const NotFound=lazy(()=>import("../../modules/exceptions/404"));
const NoRight=lazy(()=>import('../../modules/exceptions/403'));
const routes:IRoute[]=[
    {
        from:'/',
        to:'/dashboard',
    },{
        path:'/dashboard',
        component:Dashboard,
        authority: ["admin","sysadmin"],
        redirectPath: "/login",
    },{
        path:'/docs',
        component:Docs,
        authority: ["user", "admin","sysadmin"],
        redirectPath: "/login",
    },{
        path:'/login',
        component:Login
    },
    {
       path:'/403',
       component:NoRight
    },{
        path:'/404',
        component:NotFound
    },
    {
        path:'*',
        component:NotFound
    }
]
export default routes