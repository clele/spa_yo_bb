/*global demo, Backbone, JST*/

demo.Views = demo.Views || {};

(function () {
    'use strict';

    demo.Views.ContactUsView = Backbone.View.extend({
            el: '#contact_us',

            initialize: function (options) {
                //TODO:check args...
                var that = this;
                that.$form = that.$('form');
                that.$name = that.$('#name');
                that.$email = that.$('#email');
                that.$phone = that.$('#phone');

                that.$form.validate({
					errorClass: 'control-group error',
                    rules: {
                        email: {
                            required: true,
                            email: true
                        },
                        phone: {
                            digits: true,
							maxlength: 11
                        }
                    },
                    debug: true
                });
            },

            isValid: function () {
                var that = this;
                return that.$form.valid();
            },
            events: {
                'submit form': 'evtSubmit'
            },

            evtSubmit: function (e) {
                e.preventDefault();
                var that = this;
                if (that.isValid()) {
					/* I think a NEW model instance is creating here... */
                    var newContact = new demo.Models.ContactModel({
                        name: that.$name.val(),
                        email: that.$email.val(),
                        phone: that.$phone.val()
                    });
                    newContact.save().then(function () {
                        alert('Successfully sent!');
                    }).always(function(){
						that.$name.val('');
						that.$email.val('');
						that.$phone.val('');
					});
                }
            }
        });

})();
