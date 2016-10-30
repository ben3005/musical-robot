"use strict";
const router_1 = require('@angular/router');
const map_component_1 = require('../app/map.component');
// Route Configuration
exports.routes = [
    {
        path: 'maps',
        component: map_component_1.MapComponent
    }
];
exports.mapsRouting = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=routes.components.maps.js.map