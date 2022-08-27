$(function () {
    /* Fixed header */
    let nav = $("#nav")
    let header = $(".header")

    let scrollPos = $(window).scrollTop()

    $(window).on("scroll load", () => {
        scrollPos = $(this).scrollTop()
        let headerH = header.innerHeight()
        if (scrollPos > headerH - 82) {
            nav.addClass("fixed")
        } else {
            nav.removeClass("fixed")
        }
    })

    /* Smooth scroll */
    /*     $('[data-scroll]').on('click', function(event) {
        event.preventDefault();
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
        $('html, body').animate({
            scrollTop: elementOffset - 81
        }, 700)
    });
    // через использование jQuery*/

    const navLinks = document.querySelectorAll(".nav__links")
    navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault()
            const ID = event.target.getAttribute("data-scroll").substr(1)

            document.getElementById(ID).scrollIntoView({
                behavior: "smooth",
                block: "center",
            })
        })
    }) // нативный JS

    /* Burger */
    $(".burger").click(function () {
        if ($(".nav__nav").is(":hidden")) {
            $(".nav__nav").fadeIn(600)
            $(".burger__item").addClass("open")
        } else {
            $(".nav__nav").fadeOut(600)
            $(".burger__item").removeClass("open")
        } //вариант с разными способами показать/скрыть навигацию

        /*  $('.nav__nav').slideToggle(600); */
    })
}) // end of ready
