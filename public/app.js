/* Get memes file every second & display */
const getMemesFile = () => {
  $.get('/memes', (data) => {
    const content = $('#memes');
    let memes = '';
    data.forEach((e) => {
      memes = memes + `<img src = "https://vimgirl.com/memes/${e}" height = "200" width = "200">`;
    });
    content.html(memes);
  });
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
