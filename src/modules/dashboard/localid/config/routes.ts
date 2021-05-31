import NotFound from "../../exceptions/404"
import Add from "../add";
import List from '../list';

const routes=[
    {
        from:'/dashboard/localid',
        to:'/dashboard/localid/list',
    },{
        path:'/dashboard/localid/list',
        component:List
    },,{
        path:'/dashboard/localid/add',
        component:Add
    },{
        path:'*',
        component:NotFound
    }
]
export default routes