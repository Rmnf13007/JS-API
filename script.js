const row = document.querySelector('.row');

async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

for (let i = 1; i <= 100; i++) {
  fetchData(`https://jsonplaceholder.typicode.com/posts/${i}`)
    .then((postData) => {
      return fetchData(`https://jsonplaceholder.typicode.com/photos/${i}`)
        .then((photoData) => {
          const card = document.createElement('div');
          card.className = 'col';
          card.innerHTML = `
            <div class="card shadow-sm">
              <img src="${photoData.url}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${postData.title}</h5>
                <p class="card-text">${postData.body}</p>
              </div>
            </div>`;
          row.appendChild(card);
        });
    })
    .catch((error) => {
      console.error("Erreur :", error);
    });
}
















/*const row = document.querySelector('.row');

for (let i = 1; i <= 100; i++) {
  // Requête pour les posts
  let xhrPost = new XMLHttpRequest();
  xhrPost.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const postData = JSON.parse(this.response);

      // Requête pour les photos
      let xhrPhoto = new XMLHttpRequest();
      xhrPhoto.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          const photoData = JSON.parse(this.response);

          // Création de la carte
          const card = document.createElement('div');
          card.className = '.col';
          card.innerHTML = `
          <div class="col">
            <div class="card shadow-sm">
                <img src="${photoData.url}" class="card-img-top" alt="...">
                  <div class="card-body text-center">
                    <h5 class="card-title">${postData.title}</h5>
                    <p class="card-text">${postData.body}</p>
                 
                  </div>
              </div>
          </div>  `;
          row.appendChild(card);
        }
      };
      xhrPhoto.open('GET', `https://jsonplaceholder.typicode.com/photos/${i}`);
      xhrPhoto.send();
    }
  };
  xhrPost.open('GET', `https://jsonplaceholder.typicode.com/posts/${i}`);
  xhrPost.send();
}  

<div class="card" style="width: 18rem;">
<img src="{photoData.url}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${postData.title}</h5>
  <p class="card-text">${postData.body}</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>*/