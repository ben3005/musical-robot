"use strict";
const router_1 = require('@angular/router');
const list_component_1 = require('../app/list.component');
// Route Configuration
exports.routes = [
    {
        path: 'list',
        component: list_component_1.ListComponent
    }
];
exports.listRoutes = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=routes.components.list.js.map