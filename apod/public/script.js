var pictureOpen = false;

var siteTitle = document.getElementById("siteTitle");
var title = document.getElementById("title");
var date = document.getElementById("date");
var contentHr = document.getElementById("contentHr");
var explanation = document.getElementById("explanation");
var image = document.getElementById("image");
var button = document.getElementById("randomButton");
var footer = document.getElementById("footer");



function pictureClicked() {
  if (pictureOpen) {
    closePicture();
  } else {
    openPicture();
  }
}

function closePicture() {
  siteTitle.style.display = "block";
  title.style.display = "block";
  date.style.display = "block";
  contentHr.style.display = "block";
  explanation.style.display = "block";
  image.style.width = "80%";
  image.style.cursor="zoom-out";
  button.style.display = "inline-block";
  footer.style.display = "block";
  pictureOpen = false;
}
function openPicture() {
  siteTitle.style.display = "none";
  title.style.display = "none";
  date.style.display = "none";
  contentHr.style.display = "none";
  explanation.style.display = "none";
  image.style.width = "100%";
  image.style.cursor="zoom-in";
  button.style.display = "none";
  footer.style.display = "none";
  pictureOpen = true;
}



async function loadData(){
  let data;

  const url = '/api/random';
  const options = {
	method: 'GET'
  };

  try {
	  const response = await fetch(url, options);
	  const result = await response.text();
	  data = JSON.parse(result);
  } catch (error) {
	  console.error(error);
  }

  title.innerHTML = data.title;
  date.innerHTML = data.date;
  explanation.innerHTML = data.explanation;
  image.src = data.hdurl;
  
}
