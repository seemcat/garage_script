/* Get memes file every second & display */
const getMemesFile = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', '/memes');
  //  const cacheBust = Math.floor(Math.random() * 1000000);
  const canvas = $('#memes')[0];
  const context = canvas.getContext('2d');

  // load the images
  const loadImages = (sources, callback) => {
    var images = [];
    var loadedImages = 0;
    var numImages = sources.length;

    sources.forEach((e) => {
      var img = new Image;
      img.src = e;
      img.onload = () => {
        if(++loadedImages >= numImages){
          callback(images);
        }
      }
      images.push(img);
    })
  }

  // load the images once the user clicks submit
  xhttp.onreadystatechange = () => {
    if(xhttp.responseText){
      loadImages((xhttp.responseText), (images) => {
        context.drawImage(images, 0, 0);
      });
    }
  }
  xhttp.send();
}

window.setInterval(getMemesFile, 1000);

/* Camera */
const video = $('#video')[0];
navigator.mediaDevices.getUserMedia({
  video: true,
  audio: false
}).then((mediaStream) => {
  video.srcObject = mediaStream;
  video.play();
}).catch((err) => {
  console.log('Video Error: ', err);
});

/* Take a pic, grab the name & comment to generate a meme */
$('#takePicButton').click(() => {
  const name = $('#name').val();
  const message = $('#message').val();

  /* Set up the camera */
  const canvas = $('#canvas')[0];
  const context = canvas.getContext('2d');
  context.drawImage(video, 0, 0);
  const dataURL = canvas.toDataURL('image/png');

  /* POST request when takePicButton is clicked */
  $.ajax({
    type: 'POST',
    url: '/memes',
    data: JSON.stringify({
      canvas: dataURL,
      name,
      message
    }),
    success: (data) => {
      console.log('Success: ', data);
    },
    contentType: 'application/json'
  });
});
