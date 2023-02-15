
let searchStr = document.querySelector('#text-search');


const get = async () => {
  try {
    const responce = await fetch('http://localhost:3000/movies/');
    const transformResp = await responce.json();
    for (item of transformResp) {
      if (item.speciale.search(/^[ironman\ ]{4,}$/gmi) != (-1) && searchStr.value.search(/^[ironman\ ]{4,}$/gmi) != (-1)) {
        document.querySelector('.box-02').classList.add('display-none');
        document.querySelector('.box-03').classList.add('display-none');
        document.querySelector('.box-01').classList.remove('display-none');
        document.querySelector('.box-02').innerHTML = '';
        document.querySelector('.box-03').innerHTML = '';
        document.querySelector('.box-01').innerHTML += `
            <div class="boxs">
            <div class="img">
                <img src="${item.poster}" alt="">
            </div>
            <div class="film-name">
                <h2>${item.title}</h2>
            </div>
            <div class="year">
                <h2>${item.year}</h2>
            </div>
            <div class="more-details">
                <h2>more details <span class="idea">${item.id}</span></h2>
            </div>
            </div>
            `
      }
      if (item.speciale.search(/^[batman\ ]{4,}$/gmi) != (-1) && searchStr.value.search(/^[batman\ ]{4,}$/gmi) != (-1)) {
        document.querySelector('.box-01').classList.add('display-none');
        document.querySelector('.box-02').classList.remove('display-none');
        document.querySelector('.box-01').innerHTML = '';
        document.querySelector('.box-03').innerHTML = '';
        document.querySelector('.box-02').innerHTML += `
            <div class="boxs">
            <div class="img">
                <img src="${item.poster}" alt="">
            </div>
            <div class="film-name">
                <h2>${item.title}</h2>
            </div>
            <div class="year">
                <h2>${item.year}</h2>
            </div>
            <div class="more-details">
                <h2>more details <span class="idea">${item.id}</span></h2>
            </div>
            </div>
            `
      }
      if (item.speciale.search(/^[superman\ ]{4,}$/gmi) != (-1) && searchStr.value.search(/^[superman\ ]{4,}$/gmi) != (-1)) {
        document.querySelector('.box-01').classList.add('display-none');
        document.querySelector('.box-02').classList.add('display-none');
        document.querySelector('.box-03').classList.remove('display-none');
        document.querySelector('.box-01').innerHTML = '';
        document.querySelector('.box-02').innerHTML = '';
        document.querySelector('.box-03').innerHTML += `
            <div class="boxs">
            <div class="img">
                <img src="${item.poster}" alt="">
            </div>
            <div class="film-name">
                <h2>${item.title}</h2>
            </div>
            <div class="year">
                <h2>${item.year}</h2>
            </div>
            <div class="more-details">
                <h2>more details <span class="idea">${item.id}</span></h2>
            </div>
            </div>
            `
      }
    }
    let elem = document.querySelectorAll('.more-details');
    for (let item of elem) {
      item.addEventListener('click', event => {
        let idMovies = Number(event.target.lastChild.textContent);
        for (let iter of transformResp) {
          if (idMovies == iter.id) {
            document.querySelector('.info-box').classList.add('info-box-open');
            document.querySelector('.info-box').innerHTML = `
                   <div class="box-films">
                   <div class="photo">
                     <img src="${iter.poster}" alt="">
                   </div>
                   <div class="information">
                     <h1>${iter.title}</h1>
                     <p>${iter.info}</p>
                     <p><b>Director:</b>${iter.director}</p>
                     <p><b>budget :</b>${iter.budget}</p>
                     <p><b>Writers:</b>${iter.writers}</p>
                     <p><b>Stars :</b>${iter.stars}</p>
                   </div>
                     </div>
                   `
          }
          document.querySelector('.info-box').addEventListener('click', function () {
            document.querySelector('.info-box').classList.remove('info-box-open');
          })
        }
      })
    }
  } catch (error) {
    console.log(error);
  }

}
document.querySelector('.btn-01').addEventListener('click', get);
