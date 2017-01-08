/*global demo, Backbone, JST*/

demo.Views = demo.Views || {};

(function () {
    'use strict';

    demo.Views.NewsView = Backbone.View.extend({
            el: '#news',

            initialize: function (state, options) {
                //TODO:check args...
                var that = this;
                that.state = state;
                that.state.on('change:value', that.onStateChanged, that);
                that.$toggleButton = that.$('#cmd_less_more');
                that.$newsListItemsMore = that.$('ul li.more');
            },

            events: {
                'click #cmd_less_more': 'evtLessOrMore'
            },

            evtLessOrMore: function (e) {
                e.preventDefault();
                var that = this;
                var currState = that.state.get('value');
                if (currState === 'full') {
                    that.state.set({value: 'less'});
                }
                else {
                    that.state.set({value: 'full'});
                }
            },

            onStateChanged: function (newState) {
                var that = this;
                if (newState.get('value') === 'full') {
                    that.$newsListItemsMore.slideDown();
                    that.$toggleButton.text('Show less news');
                }
                else {
                    that.$newsListItemsMore.slideUp();
                    that.$toggleButton.text('Show more news');
                }
            }
        });

})();
