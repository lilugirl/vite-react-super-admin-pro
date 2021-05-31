import NotFound from "../exceptions/404"
import LocalId from "../localid"

const routes=[
    {
        from:'/dashboard',
        to:'/dashboard/localid',
    },{
        path:'/dashboard/localid',
        component:LocalId
    },{
        path:'*',
        component:NotFound
    }
]
export default routes