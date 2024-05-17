import Add from "../pages/admin/Add/Add";
import AdminRoot from "../pages/admin/AdminRoot";
import Products from "../pages/admin/Products/Products";
import Basket from "../pages/site/Basket/Basket";
import Detail from "../pages/site/Detail/Detail";
import Home from "../pages/site/Home/Home";
import SiteRoot from "../pages/site/SiteRoot";



const ROUTES=[
    {
path:'/',
element:<SiteRoot/>,
children:[
    {
path:"",
element:<Home/>,
    },
    {
path:"basket",
element:<Basket/>,
    },
    {
path:"detail/:id",
element:<Detail/>
    }
]
},
{
    path:"/admin",
    element:<AdminRoot/>,
    children:[
{
    path:"",
    element:<Add/>,
},{
    path:"products",
element:<Products/>
}
    ]

}]
export default ROUTES;