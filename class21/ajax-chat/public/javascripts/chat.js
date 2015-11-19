document.addEventListener('DOMContentLoaded', init);

function init() {
  var req = new XMLHttpRequest(),
    url = 'http://localhost:3000/api/messages';
  req.open('GET', url, true);
  req.addEventListener('load', handleMessageLoad);
  req.send();
  var btn = document.querySelector('#message-submit');
  btn.addEventListener('click', handleClick);
}

function handleMessageLoad() {
  console.log(this.responseText);
  if(this.status >= 200 && this.status < 400) {
    var div = document.querySelector('#message-list') ;
    var data = JSON.parse(this.responseText);
    data.forEach(function(msg) {
      div.appendChild(document.createElement('p')).textContent = (new Date(msg.date)).toLocaleString() + ' - ' + msg.text;
    });
  }
}

function handleClick() {
  var msg = document.querySelector('#message').value;
  var req = new XMLHttpRequest();
  url = 'http://localhost:3000/api/message';
  req.open('POST', url, true);
  //req.setRequestHeader('ContentType', 'application/x-www-form-urlencoded; charset=UTF-8');
  req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

  req.send('message=' + msg);
  console.log(msg);
}



