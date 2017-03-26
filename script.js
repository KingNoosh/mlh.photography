var CHANGE_INTERVAL = 6000;

function getPhoto() {
  // Return a file name string for image
  var images = [
      "images/1.jpg",
      "images/2.jpg",
      "images/3.jpg",
      "images/4.jpg"
  ]
  var randomPhoto = images[Math.floor(Math.random() * images.length)];
  console.log(randomPhoto);
  document.getElementById("image").src=randomPhoto;
  return randomPhoto;
}

function getCaption() {
  // Return a random caption - string
  var quotes = [
      "Ballin' on a budget",
      "<insert name here> for MVP",
      "Looking forward to <insert hackathon here> this weekend",
      "My drone's so heavy",
      "You wanna coem see my drone?",
      "I should probably take some pictures",
      "I'm the official MLH photographer",
      "Do you want to go to the pub later?",
      "#dronephotography",
      "#ballin",
  ]
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  console.log(randomQuote);
  return randomQuote;
}

document.addEventListener("DOMContentLoaded", function(event) {
  setInterval(function() {
    document.getElementById("image").style.background = "url('" + getPhoto() + "')";
    document.getElementById("caption").innerHTML = getCaption();
  }, CHANGE_INTERVAL);
});
