
//1
$(document).ready(function () {
    console.log("Let's get ready to party with jQuery!")
});

//2
$('article img').addClass('image-center');

//3
$('article p:last-child').remove();

//4
$('h1').css('font-size', Math.round(Math.random() * 100));

//5 
$('ol').append('<li>That puppy so smol </li>');

//6
$('.col-sm-4 ol').remove();
$('aside').append('<p> Apologies, that list was dumb </p>');

//7
$('.form-control').on('keyup', function () {
    let red = $('.form-control').eq(0).val();
    let blue = $('.form-control').eq(1).val();
    let green = $('.form-control').eq(2).val();
    $('body').css('background-color', 'rgb(' + red + ', ' + blue + ',' + green + ')')

});

//8
$('img').on('click', function () {
    this.remove();
})


