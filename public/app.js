/* Submit name & comment text; send to a file */
$('#submitButton').click(() => {
  const name = $('#name').val();
  const message = $('#message').val();
  $.ajax({
    type: 'POST',
    url: '/submit',
    contentType: 'application/json',
    data: JSON.stringify({
      name,
      message
    }),
    success: (data) => {
      console.log('Success: ', data);
    }
  });
});

/* Get chat file every second & display */
const getInboxFile = () => {
  $.get('/inbox.txt', (data) => {
    const content = $('#messages').val();
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
$('#takePicButton').click(() => {
  const name = $('#name').val();
  const message = $('#message').val();

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
      message
    }),
    success: (data) => {
      console.log('Success: ', data);
    },
    contentType: 'application/json'
  });
});

