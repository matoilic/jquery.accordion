;(function($) {
    var fixIE = ($.browser.msie && parseInt($.browser.version) < 8),
        closed = {
            height: 0,
            marginBottom: 0,
            marginTop: 0,
            paddingBottom: 0,
            paddingTop: 0
        };
        
    if(fixIE) closed.opacity = 0;
    
    function initialize(element, options) {
        var $element = $(element);
        $element.on('click accordion.open', options.handle, options, onHandleClick);
        
        $element.find('>li>' + options.panel).each(function() {
            var $panel = $(this), original, $wrapper;
            $wrapper = $panel.closest('li');
            
            if($wrapper.hasClass(options.staticClass)) return;
            
            original = {
                height: $panel.height(),
                marginBottom: $panel.css("marginBottom"),
                marginTop: $panel.css("marginTop"),
                overflow: $panel.css('overflow'),
                paddingBottom: $panel.css("paddingBottom"),
                paddingTop: $panel.css("paddingTop")
            };

            if(fixIE) original.opacity = 1;

            $.data($wrapper[0], 'original', original);
            $panel.css(closed).css({overflow: 'hidden'});
        });
        
        if(options.start > -1) {
            $element.find('>li:nth-child(' + options.start + ')>' + options.handle).trigger('accordion.open');
        }
    }
    
    function onHandleClick(event) {
        var $new = $(this).closest('li'), 
            $current,
            original,
            properties = {
                duration: event.data.duration,
                easing: event.data.easing,
                queue: false
            };
            
        $current = $new.closest('ul').find('>.' + event.data.openClass);
        
        if($new.hasClass(event.data.staticClass) || ($new.is($current) && !event.data.toggle)) return;

        if(!event.data.multiple) {
            $current.removeClass(event.data.openClass);
            properties.complete = function() { $(this).hide(); };
            $current.find('>' + event.data.panel).css({overflow: 'hidden'}).animate(closed, properties);
        } else if($new.hasClass(event.data.openClass)) {
            $new.removeClass(event.data.openClass);
            properties.complete = function() { $(this).hide(); };
            $new.find('>' + event.data.panel).css({overflow: 'hidden'}).animate(closed, properties);

        }
        
        if(!$new.is($current)) {
            $new.addClass(event.data.openClass);
            original = $.data($new[0], 'original');
            properties.complete = function() { $(this).css({overflow: original.overflow}); };
            $new.find('>' + event.data.panel).show().animate(original, properties)
        }
    }
    
    $.fn.accordion = function() {
        var options = $.extend({
            handle: '.handle',
            panel: '.panel',
            openClass: 'open',
            staticClass: 'static',
            easing: 'linear',
            duration: 200,
            multiple: false,
            toggle: false,
            start: 1
        }, arguments[0] || {});
        
        options.toggle = options.multiple || options.toggle;
        this.each(function() { initialize(this, options); });
        
        return this;
    }
})(jQuery);
