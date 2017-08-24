/* Submit name & comment text; send to a file */
console.log(document.getElementById('submitButton');

/* Get chat file every second & display */
const getInboxFile = () => {
  $.get('/inbox.txt', (data) => {
    const content = $('#messages')[0];
    content.innerHTML = data;
  });
}
window.setInterval(getInboxFile, 1000);

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

/* Take a picture */
$('#takePicButton')[0].click(() => {
  const name = $('#name')[0];
  const message = $('#message')[0];

  // Setting up the camera
  const canvas = $('#canvas')[0];
  const context = canvas.getContext('2d');
  context.drawImage(video, 0, 0);
  const dataURL = canvas.toDataURL('image/png');

  // POST request when takePicButton is clicked
  $.ajax({
    type: 'POST',
    url: '/pics',
    data: JSON.stringify({
      canvas: dataURL,
      name,
      comment
    }),
    success: (data) => {
      console.log('Success: ', data);
    },
    dataType: 'application/json'
  });
});
 spark discussion.
