$(document).ready(function()
{
	$('.closeable').each(function(index){
		$(this).prepend(
			$('<a></a>')
				.attr({href: '#', title: 'Close'})
				.addClass('close')
				.text('x')
				.click(function() {
					$(this).parent().fadeOut();
					return false;
				})
		);
	});
	
    $('#tabs').tabs();
    
    slideShow();
});

var hid = function(x) { return document.getElementById(x); };
function focus_text(msg, id){
    if(hid(id).value == msg){
        hid(id).value="";
    }
}
function blur_text(msg, id){
    if(hid(id).value.length < 1){
        hid(id).value=msg;
    }
}

function slideShow()
{
    $('#gallery a').css({opacity: 0.0});
    $('#gallery a:first').css({opacity: 1.0});
    $('#gallery .caption').css({opacity: 0.7});
    $('#gallery .caption').css({width: $('#gallery a').find('img').css('width')});
    $('#gallery .content').html($('#gallery a:first').find('img').attr('rel'))
    .animate({opacity: 0.7}, 400);
    setInterval('gallery()',6000);
}

function gallery()
{
    var current = ($('#gallery a.show')?  $('#gallery a.show') : $('#gallery a:first'));
    var next = ((current.next().length) ? ((current.next().hasClass('caption'))? $('#gallery a:first') :current.next()) : $('#gallery a:first'));
    var caption = next.find('img').attr('rel');
    next.css({opacity: 0.0})
    .addClass('show')
    .animate({opacity: 1.0}, 1000);
    current.animate({opacity: 0.0}, 1000)
    .removeClass('show');
    $('#gallery .caption').animate({opacity: 0.0}, { queue:false, duration:0 }).animate({height: '1px'}, { queue:true, duration:300 });
    $('#gallery .caption').animate({opacity: 0.7},100 ).animate({height: '100px'},500 );
    $('#gallery .content').html(caption);
}

