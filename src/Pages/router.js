
import ADMRoutes from './ADMIN/router'
import SECRoutes from './SEC/router'
import HomeRoutes from './Home/router'

const routes = [
    ...ADMRoutes,
    ...SECRoutes,
    ...HomeRoutes
];
export default routes;

