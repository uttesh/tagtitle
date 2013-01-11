(function($) {

    $.tagtitle = {
    
        defaults: {
            hideToolTip: true,
            tagfontSize: "15",
			position : "middle"
        }
    }
    
    $.fn.extend({
        tagtitle:function(config) {
            var config = $.extend({}, $.tagtitle.defaults, config);
         
            return this.each(function() {
            
                var component    = $(this),
                    hideToolTip = config.hideToolTip,
                    tagfontSize = config.tagfontSize;
					position = 'tag-title-'+ config.position;
					
                component.wrap("<div class='tag-title-div'>")
                    .parent()
                    .append("<span class='tag-title "+position+"'>&nbsp;</span>")
                    .find("span")
                    .html(component.attr('title'))
                    .wrapInner("<span style='font-size:" + tagfontSize + "px;'></span>")
                if (hideToolTip) {
                     component.removeAttr("title");
                }

            
            })
        
        
        }
    
    })


})(jQuery);