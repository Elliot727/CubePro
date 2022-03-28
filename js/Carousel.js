

var caption  = document.getElementById("captions");
var prev = document.getElementById("prev");
var next  = document.getElementById("next");


var images = document.getElementsByTagName("img");
fetch("js/Images.json").then(function(res){
  if (!res.ok) {
    alert("No json found.");
    throw new Error("No json found.");
  }
  res.json().then(function(json){
    let i = 0;
    json.forEach(function(el){

      images[i].setAttribute("src", el.imageSrc);
      images[i].setAttribute("alt", el.caption);
      images[i].setAttribute("title", el.caption);
  
      i += 1;
    })

    console.log(images);
  })
})


var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 