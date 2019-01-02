 function sliderJS(index, slider) { // slide
  let ul = $(slider).find("ul");
  let bl = $(slider).find("li[data-slide=" + index + "]");
  let step = $(bl).width();
 
  $(slider)
  .find("span").removeClass("on")
  .end()
  .find("span[data-slide=" + index + "]").addClass("on");
 
  $(ul).animate({
  marginLeft: "-" + step * index
  }, 500);
 }
 
$(document).on("click", ".slider .nav span", function(e) { // slider click navigate
  e.preventDefault();
  let slider = $(this).closest(".slider");
  let index = $(this).data("slide");
 
  sliderJS(index, slider);
 });