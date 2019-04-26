$('.nav-item').mouseover(function () {
  $(this).css('color',"rgb(77,37,90)")
})
$('.nav-item').mouseout(function () {
  $(this).css('color',"rgb(247,173,10)")
})

// $('.pics').mouseover(function () {
//
//   $(this).css('border-radius','15px')
//   $(this).css('background','rgb(77,37,90)')
// })
// $('.pics').mouseout(function () {
//   $(this).css('border','0px')
//   $(this).css('border-radius','5px')
//   $(this).css("background",'rgb(247,173,10)')
// })
$('.pics').mouseover(function () {
  $(this).toggleClass('tog')
})
$('.pics').mouseout(function () {
  $(this).toggleClass('tog')
})

//resize images in carousel to match row height
$(document).ready(function () {


  $(window).resize(function() { //size each row to the same height as the cards
    var height = $('#weddingRow').height()
    $('.weddingCakeImg').height(height)


  }).resize();// This will simulate a resize to trigger the initial run.
})

/////////////////////////////////////

//display multiple items at once on carousel and move one at a time
$('.carousel .carousel-item').each(function(){
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i=0;i<2;i++) {
        next=next.next();
        if (!next.length) {
        	next = $(this).siblings(':first');
      	}

        next.children(':first-child').clone().appendTo($(this));
      }
});






//display carousel item in the big image when hovered

// $('.weddingCakeImg').each(function () {
//   $(this).click(function () {
//     var source = $(this).attr('src')
//     $('#weddingBigImg').attr('src',source )
//   })
// })

$('.weddingCakeImg').each(function () {
  $(this).hover(function () {
    var source = $(this).attr('src')
    $('#weddingBigImg').attr('src',source )
  })
})
