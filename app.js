/*const button = document.querySelector('button')

button.addEventListener('click', () => {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.querySelector('#message').innerHTML = this.response
        }
    }
    
    xhr.open('GET', "https://jsonplaceholder.typicode.com/posts/1")
    xhr.responseType = "txt"
    xhr.send()
})


fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json));

  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));







//definir un objet de promes
const p = new Promise((resolve, reject) => {
  reject('5')
})


console.log(p);






*//*const xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
  console.log("xhr");
}
xhr.open('get' ,'demo.txt');
xhr.send();

console.log("hello");





fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json));

  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));*/

