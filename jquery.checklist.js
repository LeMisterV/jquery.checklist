/**
 * jQuery plugin to manage a list of checkboxes
 *
 * Use :
 * $(selector for the UL).checklist();
 * $(selector for the UL).checklist(options);
 *
 * Options :
 *   rootCls        : (default: checklistJS) CSS className added to the root UL of the list
 *   checkCls       : (default: checked) CSS className added to each LI containing a checked checkbox
 *
 *
 * Free to use, free to study, free to change, free to redistribute
 *
 * @author  : Nicolas Deveaud <nicolas@deveaud.fr>
 * @version : 1.0 (realease date: jan 13 2010)
 */
 
(function (window, Error, $, undef) {
    if ($ === undef) {
        throw new Error('Dépendence non satisfaite : jQuery');
    }

    function checklist(options) {
        options = $.extend({
            rootCls   : 'checklistJS',
            checkCls  : 'checked'
        }, options);

        function clickHandler(e) {
            var li = e.target.tagName === 'LI' ? $(e.target) : $(e.target).filter('li *').parents('li:first'),
            check = !li.hasClass(options.checkCls);
            li
                [check ? 'addClass' : 'removeClass'](options.checkCls)
                .children('input[type=checkbox]')
                    .attr('checked', check);
            return e.target.tagName === 'INPUT';
        }

        return this
            .addClass(options.rootCls)
            .click(clickHandler)
            .children('li')
                .filter(function () {
                    return !!$(this)
                        .children('input[type=checkbox]:checked')
                            .length;
                })
                    .addClass(options.checkCls)
                .end()
            .end();
    }

    $.fn.checklist = $.fn.checklist || checklist;

}(this, this.Error, this.jQuery));