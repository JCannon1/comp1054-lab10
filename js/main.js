/* STEP 2a - DOM ready*/
$(function(){
    // console.log("DOM is ready.");
    /* STEP 2b - script to add class to nav when header is scrolled off screen */
    // Persistent navigation
    //add additional necessary offset for Webkit
    var navTop = $('#floatingbar').offset().top;
    // console.log(navTop);
    // Scroll function
    $(window).scroll(function(){
        // console.log("Window scolled!");
        // Once window has scrolled past top of nav, add class .floater
        if ($(window).scrollTop() > navTop){
            // add class .floater
            $('#floatingbar').addClass('floater');
            // show the back to top button
            $('footer p a.top').fadeIn(100);
        }
        else {
            // remove class .floater
            $('#floatingbar').removeClass('floater');
            // hide the back to top button
            $('footer p a.top').fadeOut(100);
        }
    });
            /* STEP 6c - sticky footer button appear */
            /* STEP 6d - sticky footer button dissappear */
    /* STEP 6e - click handler to animate scroll to top */
    $('footer p a.top').click(function(event){
        /* stop default anchor behavior */
        event.preventDefault();
        // animate the whole page up to the scroll top over x milliseconds 
        $('html, body').animate({scrollTop: 0}, 300);
    });
        
    /* STEP 3 - script to duplicate pullquote text */
    // Pullquotes
    $('span.pullquote').each(function(){
        // Grab the parent element (paragraph)
        var $parentElem = $(this).parent('p');
        // Clone the span element inside it, add a special class for CSS, and inject it into the HTML
        $(this).clone().addClass('pullquote2').prependTo($parentElem);
    })
});
// end DOM ready