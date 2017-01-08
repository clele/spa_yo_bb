/*global demo, Backbone*/

demo.Routers = demo.Routers || {};

(function () {
    'use strict';

    demo.Routers.FourThingsRouter = Backbone.Router.extend({
            routes: {
                'items/:id': 'items'
            },

            items: function (id) {
                demo.fourThings = demo.fourThings || new demo.Views.FourThingsView({});
                demo.fourThings.setCurrent(id);
            }
        });
})();
