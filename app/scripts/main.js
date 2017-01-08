/*global demo, $*/


window.demo = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';

		/* lifecycle and disposing are not needed: all the stuff lives with the load/unload of the whole document */
		new demo.Views.NewsView(new Backbone.Model({value: 'full'}));
        new demo.Views.ContactUsView();
        new demo.Routers.FourThingsRouter();

		/* starting the game */
        Backbone.history.start();
    }
};

$(document).ready(function () {
    'use strict';

	$('.slides').bxSlider({
		minSlides:1,
		maxSlides:3,
		slideWidth: 960
	  });

	  $.validator.setDefaults({
		highlight: function(element) {
			$(element).closest('.form-group').addClass('has-error');
		},
		unhighlight: function(element) {
			$(element).closest('.form-group').removeClass('has-error');
		},
		errorElement: 'span',
		errorClass: 'help-block',
		errorPlacement: function(error, element) {
			if(element.parent('.input-group').length) {
				error.insertAfter(element.parent());
			} else {
				error.insertAfter(element);
			}
		}
	});

    demo.init();
});
