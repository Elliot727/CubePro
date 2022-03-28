var gridImages  = document.getElementById("gridImages");
var gridCaption  = document.getElementById("gridCaptions");
const selectedImage = document.getElementById('selectedImage')


fetch("js/Grid.json").then(function(res){
  if (!res.ok) {
    alert("No json found.");
    throw new Error("No json found.");
  }
  res.json().then(function(json){
    json.forEach(function(el){
      var image = document.createElement('img'); 
      image.setAttribute("class", "gallery");
      image.setAttribute("src", el.imageSrc);
      image.setAttribute("alt", el.caption);
      image.setAttribute("title", el.caption);
      gridImages.appendChild(image);

      image.addEventListener('click', () => {
        popup.style.transform = 'translateY(0)'
        selectedImage.src = image.src
      })
      
    })

  })
})

popup.addEventListener('click', () => {
  popup.style.transform = 'translateY(-100%)'
  popup.src = ''
  popup.alt = ''
  popup.title = ''
})
