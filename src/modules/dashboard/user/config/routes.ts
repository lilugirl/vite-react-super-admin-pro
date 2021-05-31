import NotFound from "../../exceptions/404"
import Add from "../add";
import List from '../list';

const routes=[
    {
        from:'/dashboard/user',
        to:'/dashboard/user/list',
    },{
        path:'/dashboard/user/list',
        component:List
    },,{
        path:'/dashboard/user/add',
        component:Add
    },{
        path:'*',
        component:NotFound
    }
]
export default routes