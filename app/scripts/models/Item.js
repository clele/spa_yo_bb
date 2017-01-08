/*global demo, Backbone*/

demo.Models = demo.Models || {};

(function () {
    'use strict';

    demo.Models.ItemModel = Backbone.Model.extend({
            url:function(){
                return 'data/' + this.id + '.json';
            },
            parse:function(response,options){
               return response.item;
            }
        });

})();
