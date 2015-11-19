var req = new XMLHttpRequest();
req.open('GET', '/hello.json', true);
req.addEventListener('load', handleLoad);
req.addEventListener('error', handleError);
req.send();
function handleLoad(data) {
  if (req.status >= 200 && req.status <= 400) {
    var messages = JSON.parse(req.responseText);
    messages.forEach(function(message) {
      document.body.appendChild(document.createElement('div')).textContent = message.message;
    });
  }
}
function handleError(err) {
}
