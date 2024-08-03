$(document).ready(function() {
    // Smooth scrolling for navigation links
    $('a.nav-link').click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 800);
    });

    // Scroll animations
    $(window).on('scroll', function() {
        $('.fade-in').each(function() {
            var elementTop = $(this).offset().top;
            var viewportBottom = $(window).scrollTop() + $(window).height();
            if (elementTop < viewportBottom - 100) {
                $(this).addClass('visible');
            }
        });
    });

    // Contact form validation
    $('form').submit(function(event) {
        var isValid = true;
        $('.form-control').each(function() {
            if ($(this).val().trim() === '') {
                isValid = false;
                $(this).addClass('is-invalid');
            } else {
                $(this).removeClass('is-invalid');
            }
        });

        if (!isValid) {
            event.preventDefault();
            alert('Please fill out all fields.');
        }
    });
});
