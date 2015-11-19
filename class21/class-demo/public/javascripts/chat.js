var button = document.querySelector('button');

button.addEventListener('click', function() {
  var msg = document.querySelector('#message').value;
  var req = new XMLHttpRequest();

  // configures request with url and method
  req.open('POST', 'http://localhost:3000/messages', true);

  // what to do when we get back a response from the server
  req.addEventListener('load', function() {
    console.log(req.status, req.responseText);
  })

  req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

  // make the request
  req.send('messageText=' + msg);
});
