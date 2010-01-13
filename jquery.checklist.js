(function(window, $, undef) {

	$.fn.checklist = function(options) {
		options = $.extend({
			rootCls		: 'checklistJS',
			checkCls	: 'checked'
		}, options);

		var clickHandler = function(e) {
			var li = e.target.tagName === 'LI' ? $(e.target) : $(e.target).filter('li *').parents('li:first'),
			check = !li.hasClass(options.checkCls);
			li
				[check ? 'addClass' : 'removeClass'](options.checkCls)
				.children('input[type=checkbox]')
					.attr('checked', check);
			return e.target.tagName === 'INPUT';
		};

		return this
			.addClass(options.rootCls)
			.click(clickHandler)
			.children('li')
				.filter(function() {
					return !!$(this)
						.children('input[type=checkbox]:checked')
							.length;
				})
					.addClass(options.checkCls)
				.end()
			.end();
	};

})(this, this.jQuery);