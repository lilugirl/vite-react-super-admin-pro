import NotFound from "../../exceptions/404"
import Add from "../add";
import List from '../list';

const routes=[
    {
        from:'/dashboard/user',
        to:'/dashboard/user/list',
    },{
        path:'/dashboard/user/list',
        component:List,
        title:'用户管理',
        subtitle:'用户列表'
    },,{
        path:'/dashboard/user/add',
        component:Add,
        title:'用户管理',
        subtitle:'添加用户'
    },{
        path:'*',
        component:NotFound
    }
]
export default routes