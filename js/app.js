/*
https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=yourkey
https://api.nytimes.com/svc/topstories/v2/home.json?api-key=yourkey
https://api.nytimes.com/svc/topstories/v2/science.json?api-key=yourkey
https://api.nytimes.com/svc/topstories/v2/us.json?api-key=yourkey
https://api.nytimes.com/svc/topstories/v2/world.json?api-key=yourkey
https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=yourkey

*/
let url = 'https://api.nytimes.com/svc/topstories/v2/world.json?api-key=BNKXXa0ffmeXthwPi5MZYz4G5cuzYMe6';
const container = document.querySelector("#newyork-row");

fetch(url)
    .then(resp => resp.json())
    .then(data => {

        let contenHTML = "";
        data.results.forEach(function(datos) {

            console.log(datos);
            contenHTML += `   
                 <div class="jumbotron">
  <h3 class="display-5">${datos.title}</h3>


   <img src="${datos.multimedia[0].url}" alt="" class="img-thumbnail" />
  <p class="lead">${datos.abstract}</p><small>${datos.byline}</small>
  <hr class="my-4">
  <a class="btn btn-primary  m-2" href="${datos.short_url}" role="button" target="_blank">Learn more</a>

  </div>   
 
   `;
        });
        container.innerHTML = contenHTML;



        //  data.results.map(article => {
        //   console.log(article.title);

        // })
    })

//<img src="${results.thumbnail.path}.${results.thumbnail.extension}" class="card-img-top" alt="${results.name}">