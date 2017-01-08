/*global demo, Backbone, JST*/

demo.Views = demo.Views || {};

(function () {
    'use strict';

    demo.Views.FourThingsView = Backbone.View.extend({
            el: '#four_things',

            initialize: function (options) {
                var that = this;
                that.template = _.template($('#tpl_item').html());//JST['app/scripts/templates/Item.ejs'];
                that.cachedItems = {};
                that.$itemContainer = that.$('#current');
            },

            setCurrent: function (id) {
                //TODO:check args...
                var that = this;
                that.ensureItem(id).then(
                    function (item) {
                        that.currentItem = item;
                        that.renderCurrent();
                    }
                );
            },

            ensureItem: function (id) {
                var that = this;
                var dfd = new jQuery.Deferred();
                if (id) {
                    if (!that.cachedItems[id]) {
                        var newItem = new demo.Models.ItemModel({id: id});
                        newItem.fetch().done(function () {
                            that.cachedItems[id] = newItem;
                            dfd.resolve(newItem);
                        });
                    }
                    else {
                        dfd.resolve(that.cachedItems[id]);
                    }
                }
                else {
                    dfd.reject('invalid item');
                }

                return dfd.promise();
            },

            renderCurrent: function () {
                var that = this;
                var dto = that.currentItem.attributes;
                var html = that.template(dto);
                that.$itemContainer.empty();
                that.$itemContainer.append(html);
            }
        });

})();
