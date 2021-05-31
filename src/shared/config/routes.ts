import { lazy } from 'react';
import Dashboard from '../../modules/dashboard/container';
import Login from '../../modules/login';
const Docs = lazy(()=>import("../../modules/docs/container"));
const NotFound=lazy(()=>import("../../modules/dashboard/exceptions/404"))
const routes=[
    {
        from:'/',
        to:'/dashboard',
    },{
        path:'/dashboard',
        component:Dashboard
    },{
        path:'/docs',
        component:Docs
    },{
        path:'/login',
        component:Login
    },{
        path:'*',
        component:NotFound
    }
]
export default routes