/*---------------------------------------------------------------------

Template Name: 	Administry
Version:	 	1.1
Release Date: 	July 24, 2010

File:       	administry.js
Updated:    	2010-07-24

Copyright (c) 2010 Zoran Juric - http://themeforest.net/user/zoranjuric

-----------------------------------------------------------------------

WARNING! DO NOT EDIT THIS FILE UNLESS YOU KNOW WHAT YOU ARE DOING!

---------------------------------------------------------------------*/

// Preload images
imageObj = new Image();
imgs = ["http://static.hukumonline.n1/frontend/default/images/toggle.gif", "http://static.hukumonline.n1/frontend/default/images/ajaxLoader.gif", "http://static.hukumonline.n1/frontend/default/images/prev.gif", "http://static.hukumonline.n1/frontend/default/images/next.gif"];
for (i = 0; i < imgs.length; i++) imageObj.src = imgs[i];

// Administry object setup
if (!Administry) var Administry = {}

// scrollToTop() - scroll window to the top
Administry.scrollToTop = function (e) {
    jQuery(e).hide().removeAttr("href");
    if (jQuery(window).scrollTop() != "0") {
        jQuery(e).fadeIn("slow")
    }
    var scrollDiv = jQuery(e);
    jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() == "0") {
            jQuery(scrollDiv).fadeOut("slow")
        } else {
            jQuery(scrollDiv).fadeIn("slow")
        }
    });
    jQuery(e).click(function () {
        jQuery("html, body").animate({
            scrollTop: 0
        }, "slow")
    })
}

// setup() - Administry init and setup
Administry.setup = function () {
    // Open an external link in a new window
    jQuery('a[href^="http://"]').filter(function () {
        return this.hostname && this.hostname !== location.hostname;
    }).attr('target', '_blank');
	
    // build animated dropdown navigation
//	jQuery('#menu ul').supersubs({
//		minWidth:    12,   // minimum width of sub-menus in em units
//		maxWidth:    27,   // maximum width of sub-menus in em units
//		extraWidth:  1     // extra width can ensure lines don't sometimes turn over
//						   // due to slight rounding differences and font-family
//	}).superfish();
	
    // build an animated footer
    jQuery('#animated').each(function () {
        jQuery(this).hover(function () {
            jQuery(this).stop().animate({
                opacity: 0.9
            }, 400);
        }, function () {
            jQuery(this).stop().animate({
                opacity: 0.0
            }, 200);
        });
    });

    // scroll to top on request
    if (jQuery("a#totop").length) Administry.scrollToTop("a#totop");

    // setup content boxes
    if (jQuery(".content-box").length) {
        jQuery(".content-box header").css({
            "cursor": "s-resize"
        });
        // Give the header in content-box a different cursor	
        jQuery(".content-box header").click(
        function () {
            jQuery(this).parent().find('section').toggle(); // Toggle the content
            jQuery(this).parent().toggleClass("content-box-closed"); // Toggle the class "content-box-closed" on the content
        });
    }
	
	// setup nyro popup window
//	jQuery.nyroModalSettings({
//		debug: false,
//		processHandler: function(settings) {
//			var url = settings.url;
//			if (url && url.indexOf('http://www.youtube.com/watch?v=') == 0) {
//				jQuery.nyroModalSettings({
//					type: 'swf',
//					height: 355,
//					width: 425,
//					url: url.replace(new RegExp("watch\\?v=", "i"), 'v/')
//				});
//			}
//		}
//	});
    
	// custom tooltips to replace the default browser tooltips for <a title=""> <div title=""> and <span title="">
    jQuery("a[title], div[title], span[title]").tipTip();
	
	// find closeable boxes and add a "close" action
	jQuery('.closeable').each(function(index){
		jQuery(this).prepend(
			jQuery('<a></a>')
				.attr({href: '#', title: 'Close'})
				.addClass('close')
				.text('x')
				.click(function() {
					jQuery(this).parent().fadeOut();
					return false;
				})
		);
	});
}

// progress() - animate a progress bar "el" to the value "val"
Administry.progress = function (el, val, max) {
    var duration = 400;
    var span = jQuery(el).find("span");
    var b = jQuery(el).find("b");
    var w = Math.round((val / max) * 100);
    jQuery(b).fadeOut('fast');
    jQuery(span).animate({
        width: w + '%'
    }, duration, function () {
        jQuery(el).attr("value", val);
        jQuery(b).text(w + '%').fadeIn('fast');
    });
}

// videoSupport() - <video> tag support for older browsers through flash player embedding
Administry.videoSupport = function (wrapper, videoURL, width, height) {
    var v = document.createElement("video"); // Are we dealing with a browser that supports <video> tag? 
    if (!v.play) { // If no, use Flash.
        var vobj = jQuery('#' + wrapper).find('video');
        var poster = jQuery(vobj).attr("poster");
        var params = {
            allowfullscreen: "true",
            allowscriptaccess: "always"
        };
        var flashvars = {
            file: videoURL,
            image: poster
        };
        swfobject.embedSWF("player.swf", wrapper, width, height, "9.0.0", "expressInstall.swf", flashvars, params);
    }
}

// dateInput() - <input type="date"> support with fallback
Administry.dateInput = function (e) {
    var i = document.createElement("input"); 
	i.setAttribute("type", "date");
	if (i.type == "text") {
		// No native date picker support :(
		// We shall use jQuery datepick
                jQuery(e).datepick({dateFormat: 'yyyy-mm-dd'});
	}    
}

// expandableRows() - expandable table rows
Administry.expandableRows = function () {
    var titles_total = jQuery('td.title').length;
    if (titles_total) { /* setting z-index for IE7 */
        jQuery('td.title').each(function (i, e) {
            jQuery(e).children('div').css('z-index', String(titles_total - i));
        });

        jQuery('td.title').find('a:first').click(function () {
            // hide previously opened containers
            jQuery('.opened').hide();
            // remove highlighted class from rows
            jQuery('td.highlighted').removeClass('highlighted');

            // locate the row we clicked onto
            var tr = jQuery(this).parents("tr");
            var div = jQuery(this).parent().find('.listingDetails');

            if (!jQuery(div).hasClass('opened')) {
                jQuery(div).addClass('opened').width(jQuery(tr).width() - 2).show();
                jQuery(tr).find('td').addClass('highlighted');
            } else {
                jQuery(div).removeClass('opened');
                jQuery(tr).find('td').removeClass('highlighted');
            }
            return false;
        });
    }
}