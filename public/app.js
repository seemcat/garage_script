/* up button */
$('#up').click(() => {
  $.ajax({
    type: 'POST',
    url: '/move',
    contentType: 'application/json',
    data: JSON.stringify({
      direction: 'up'
    }),
    success: (data) => {
      console.log('Successful POST Request: ', data);
    }
  });
});

/* down button */
$('#down').click(() => {
  $.ajax({
    type: 'POST',
    url: '/move',
    contentType: 'application/json',
    data: JSON.stringify({
      direction: 'down'
    }),
    success: (data) => {
      console.log('Successful POST Request: ', data);
    }
  });
});

/* left button */
$('#left').click(() => {
  $.ajax({
    type: 'POST',
    url: '/move',
    contentType: 'application/json',
    data: JSON.stringify({
      direction: 'left'
    }),
    success: (data) => {
      console.log('Successful POST Request: ', data);
    }
  });
});

/* right button */
$('#right').click(() => {
  $.ajax({
    type: 'POST',
    url: '/move',
    contentType: 'application/json',
    data: JSON.stringify({
      direction: 'right'
    }),
    success: (data) => {
      console.log('Successful POST Request: ', data);
    }
  });
});

/* get img position */
const getImgPos = () => {
  $.get('/imgPos', (data) => {
    $('#kona').css({ 
      marginTop: data.top,
      marginLeft: data.left
    });
  });
}

window.setInterval(getImgPos, 500);

