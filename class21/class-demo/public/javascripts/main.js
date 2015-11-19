document.addEventListener('DOMContentLoaded', init);

function init() {
  var limitBtn = document.querySelector('#limit-btn');
  limitBtn.addEventListener('click', handleClick);

  var repoBtn = document.querySelector('#repo-btn');
  repoBtn.addEventListener('click', handleRepoClick);
}

function handleRepoClick() {
  var username = document.querySelector('input').value;
  var url = 'https://api.github.com/users/' + username + '/repos';
  console.log(url);

  var req = new XMLHttpRequest();
  req.open('GET', url, true);
  req.addEventListener('load', handleReposLoad);
  req.send();
}

function handleClick() {
  var req = new XMLHttpRequest(),
//url = 'https://api.github.com/rate_limit';
  url = 'http://cs.nyu.edu/~jversoza';

  req.open('GET', url, true);
  req.addEventListener('load', handleLimitLoad);
  req.send();
}

function handleReposLoad() {
  console.log(this.status);
  if(this.status >= 200 && this.status < 400) {
    console.log(this.responseText);
    var data = JSON.parse(this.responseText); 
    var ul = document.querySelector('#content');
    console.log(data);
    data.forEach(function(repo) {
      ul.appendChild(document.createElement('li')).textContent = repo.name; 
    })
  }
}

function handleLimitLoad() {
  console.log(this.status);
  if(this.status >= 200 && this.status < 400) {
    console.log(this.responseText);
    var data = JSON.parse(this.responseText); 
    console.log(data);

  }
}








