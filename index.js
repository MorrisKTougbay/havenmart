//alert("Hello and Welcome to Haven Mart");

$(document).ready(function() {

    //banner owl carousel
    $("#banner-area .owl-carousel").owlCarousel({
        dots: true,

        items: 1






    });



});

// TOP SALE OWL CAROUSEL
$(document).ready(function() {

    $("#top-sale .owl-carousel").owlCarousel({

        loop: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            },

        }








    });


    // isotope filter
    var $grid = $(".grid").isotope({
        itemselector: '.grid-item',
        layoutMode: 'fitRows'
    });

    // filter items on button click
    $(".button-group").on("click", "button", function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });

    })


    $("#new-products .owl-carousel").owlCarousel({

        loop: true,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            },

        }

    });

    //Blogs owl carousel

    $("#blogs .owl-carousel").owlCarousel({

        loop: true,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },


        }



    });


    // Qty session
    let $qty_up = $(".qty .qty-up");
    let $qty_down = $(".qty .qty-down");


    // click on qty-up button
    $qty_up.click(function(e) {
        let $input = $(`.qty_input[data-id='${$(this).data("id")}']`);
        if ($input.val() >= 1 && $input.val() <= 19) {
            $input.val(function(i, oldval) {
                return ++oldval;
            });

        }

    });

    // click on qty-up button
    $qty_down.click(function(e) {
        let $input = $(`.qty_input[data-id='${$(this).data("id")}']`);
        if ($input.val() > 1 && $input.val() <= 20) {
            $input.val(function(i, oldval) {
                return --oldval;
            });

        }

    });


});