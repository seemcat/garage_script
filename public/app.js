/* Get memes file every second & display */
const getMemesFile = () => {
  $.get('/memes', (srcData) => {
    const content = $('#memes');
    let memes = '';
    srcData.forEach((e) => {
      /* POST request to get img data */
      $.ajax({
        type: 'POST',
        url: '/memeData',
        data: JSON.stringify({
          fileName: e
        }),
        success: (data) => {
          memes = memes + `<img src = '${data}' height = '200' width = '200'><br />`;
          content.html(memes);
        },
        contentType: 'application/json'
      });
    });
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
