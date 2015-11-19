/*
console.log('Example 1: Make my eyes bleed / Building a tiny pyramid / Do not do this');
var url = 'http://localhost:3000/data/tango.json';
req1 = new XMLHttpRequest();
req1.open('GET', url, true);
req1.addEventListener('load', function() {
  console.log('loading req1');
  if(req1.status >= 200 && req1.status < 400) {
    console.log(req1.responseText);
    var data1 = JSON.parse(req1.responseText) 
    console.log(data1.url);
    req2 = new XMLHttpRequest();
    req2.open('GET', data1.url, true);
    req2.addEventListener('load', function() {
      console.log('loading req2');
      if(req2.status >= 200 && req2.status < 400) {
        console.log(req2.responseText);
        var data2 = JSON.parse(req2.responseText) 
        console.log(data2.url);
        req3 = new XMLHttpRequest();
        req3.open('GET', data2.url, true);
        req3.addEventListener('load', function() {
          console.log('loading req3');
          if(req3.status >= 200 && req3.status < 400) {
            console.log(req3.responseText);
            console.log('done');  
          }
        });
        req3.send();
      }
    });
    req2.send();
  }
});
req1.send();
*/


/*
console.log('Example 2: Naming functions / Move repeated code into functions');
function get(url, cb) {
  console.log('getting ', url);
  req = new XMLHttpRequest();
  req.open('GET', url, true);
  req.addEventListener('load', function() {
    console.log('loading req');
    if(req.status >= 200 && req.status < 400) {
      console.log(req.responseText);
      cb(req.responseText);
    }
  });
  req.send();
}

function extractURL(json) {
  var data = JSON.parse(json) 
  console.log(data.url);
  return data.url;
}

var url = 'http://localhost:3000/data/tango.json';

get(url, function(responseText) {
  var url2 = extractURL(responseText); 
  get(url2, function(responseText) {
    var url3 = extractURL(responseText); 
    get(url3, function(responseText) {
      console.log('done'); 
    });
  });
});

//console.log('Example 2, alternative: one more function');
//function getAndExtract(url) {
//  get(url, function(responseText) {
//    var url = extractURL(responseText); 
//    if(url) {
//      getAndExtract(url);
//    } else {
//      console.log('done'); 
//    }
//  });
//}
//
//getAndExtract(url);
//
*/

/*
var url = 'http://localhost:3000/data/tango.json';

function extractURL(json) {
  var data = JSON.parse(json) 
  console.log(data.url);
  return data.url;
}

function get(url) {
  return new Promise(function(succeed, fail) { 
    console.log('getting ', url);
    req = new XMLHttpRequest();
    req.open('GET', url, true);
    req.addEventListener('load', function() {
      console.log('loading req');
      if(req.status >= 200 && req.status < 400) {
        console.log(req.responseText);
        succeed(req.responseText);
      }
    });
    req.send();
  });
}

get(url)
  .then(extractURL)
  .then(get)
  .then(extractURL)
  .then(get)
  .then(extractURL)
  .then(function(val){
    console.log(val);
    console.log('done');
  });
*/
