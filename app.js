$('.form').on("submit", function (e) {
    e.preventDefault();
    let title = $('.title').val();
    let rating = $('.rating').val();

    $('.list').append(`<li>${title} - ${rating} <button class="remove">X</button></li>`);

    $('.remove').on("click", function () {
        $(this).parent().remove();
    });

    $('.form').trigger('reset')

})


