/*
// request the first url
// parse it to get the next
// request the next url
var url = 'http://localhost:3000/data/tango.json';
var req = new XMLHttpRequest();
req.open('GET', url, true);
req.addEventListener('load', function() {
  console.log(req.status, req.responseText);
  var data = JSON.parse(req.responseText);
  console.log(data.url);
  var req2 = new XMLHttpRequest();
  req2.open('GET', data.url, true);
  req2.addEventListener('load', function() {
    console.log(req2.status, req2.responseText);
    var data2 = JSON.parse(req2.responseText);
    console.log(data2.url);
  });
  req2.send();
});

req.send();
*/
function get(url, cb) {
  var req = new XMLHttpRequest();
  console.log('getting ', url);
  req.open('GET', url, true);
  req.addEventListener('load', function() {
    console.log('success!', req.responseText);
    cb(req.responseText);
  });
  req.send();
}

function extractURL(json) {
  var data = JSON.parse(json);
  return data.url;
}

var url = 'http://localhost:3000/data/tango.json';
get(url, function(responseText) {
  var url2 = extractURL(responseText);
 get(url, function(responseText) {
  var url2 = extractURL(responseText);
  console.log(url2);
});
});










