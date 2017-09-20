$('#buyMBTickets').click(() => {
  const MBTicketsPurchased = $('#numOfMBTickets').val();
  $.ajax({
    type: 'POST',
    url: '/buyTickets',
    contentType: 'application/json',
    data: JSON.stringify({
      MBTicketsPurchased
    }),
    success: (data) => {
      console.log('Successful POST Request: ', data);
    }
  });
});

$('#buySZTickets').click(() => {
  const SZTicketsPurchased = $('#numOfSZTickets').val();
  $.get(`http://sz.llip.life/buy?amnt=${SZTicketsPurchased}`, (data) => {
    $('numOfSZTicketsLeft').html(data);
  });
});

const getNumOfSZTickets = () => {
  $.get('http://sz.llip.life/tickets', (data) => {
    $('#numOfSZTicketsLeft').html(data);
  });
}

window.setInterval(getNumOfSZTickets, 500);

/* Get chat file every second & display */
const getNumOfMBTickets = () => {
  $.get('/ticketsLeft', (data) => {
    $('#numOfMBTicketsLeft').html(data);
  });
}

window.setInterval(getNumOfMBTickets, 500);
