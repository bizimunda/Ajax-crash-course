document.getElementById('button').addEventListener('click', loadText);

function loadText() {
  //create XHR object
  var xhr = new XMLHttpRequest();
  //open - type, url/file, async true/false
  xhr.open('GET', 'simple.txt', true);

  xhr.onload = function() {
    if (this.status == 200) {
      console.log(this.responseText);
      document.getElementById('text').innerHTML = this.responseText;
    } else if (this.status == 404) {
      console.log(this.responseText);
      document.getElementById('text').innerHTML = 'Not found';
    }
  };

  //sends requests
  xhr.send();
}

// HTTP: status
// 200: OK
// 403: forbidden
// 404: not found
