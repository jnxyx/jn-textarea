var $ = require('jquery')
var jQuery = $

(function ($) {
    $.fn.jnTextarea = function () {
        var self = $(this);
        var maxlength = self.attr('jn-max') || 200;
        init();

        function init() {
            self.attr('maxlength', maxlength);
            self.css({
                resize: 'none',
                padding: '20px',
                height: '100%',
                width: '100%',
                borderRadius: '5px',
                boxSizing: 'border-box',
                outline: 'none'
            })
            var wrapElement = $('<div class="jn-textarea-container"></div>');
            wrapElement.css({
                position: 'relative',
                paddingTop: '20px',
                height: '100%',
                width: '100%'
            });
            self.wrap(wrapElement);
            renderWarning();
            bindEvent();
        }

        function bindEvent() {
            self.on('input', function () {
                renderWarning();
            });
        }

        function renderWarning() {
            var max = +maxlength;
            var current = +self.val().length;
            if (self.data('hasRender')) {
                var element = self.prev()
                if (element.hasClass('jn-warning')) {
                    element.text(current + '/' + max)
                }
            } else {
                var warningElement = $('<div class="jn-warning">' + current + '/' + max + '</div>');
                warningElement.css({
                    textAlign: 'right',
                    color: 'red'
                });
                self.before(warningElement);
                self.data('hasRender', true);
            }
        }
    }
})(jQuery)

$(function () {
    $('.jn-textarea').each(function () {
        $(this).jnTextarea()
    })
})

module.exports = $.fn.jnTextarea