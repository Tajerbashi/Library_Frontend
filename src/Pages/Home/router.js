import IndexComponent from "./Index/IndexComponent";
import NavComponent from "./Nav/navComponent";

let HomeRoutes = [
    {
        url:'',
        path:'./Index/IndexComponent',
        component:<IndexComponent/>,
    },
    {
        url:'-nav',
        path:'./nav/navComponent.js',
        component:<NavComponent/>,
    },
];

export default HomeRoutes;