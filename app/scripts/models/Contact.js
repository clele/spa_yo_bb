/*global demo, Backbone*/

demo.Models = demo.Models || {};

(function () {
    'use strict';

    demo.Models.ContactModel = Backbone.Model.extend({
            url: function () {
                return 'api/1.0/contacts';
            },
            validate: function (attrs) {
                //TODO: model validation...
                if (!attrs.name) {
                    return 'Invalid name.';
                }
            }
        });

})();
