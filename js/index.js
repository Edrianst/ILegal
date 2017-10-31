var city = $('.city');

$('#city').click(function(){

    city.addClass('active');
});

$('.close-modal').click(function(){
    city.removeClass('active');
});

var family = $('.family');

$('#family').click(function(){

    family.addClass('active');
});

$('.close-modal').click(function(){
    family.removeClass('active');
});

var work = $('.work');

$('#work').click(function(){

    work.addClass('active');
});

$('.close-modal').click(function(){
    work.removeClass('active');
});

var other = $('.other');

$('#other').click(function(){

    other.addClass('active');
});

$('.close-modal').click(function(){
    other.removeClass('active');
});

//плавный скроллинг

$(document).ready(function(){

		$("#menu").on("click","a", function (event) {
				event.preventDefault();
				var id  = $(this).attr('href'),
						top = $(id).offset().top;
				$('body,html').animate({scrollTop: top}, 700);
		});
});
