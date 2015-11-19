// create object
var req = new XMLHttpRequest();

// configure it using open
req.open('GET', 'http://localhost:3000/list', true);

// define some callbacks for load and error
req.addEventListener('load', handleLoad);
req.addEventListener('error', handleError);

function handleLoad() {
    console.log(req.status, req.responseText);
}

function handleError(err) {
  console.log(err);
}

req.send();
