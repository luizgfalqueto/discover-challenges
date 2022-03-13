import {
  API_URL,
  IMG_URL,
  language,
} from './api.js'

document.getElementById('generator').addEventListener('click', () => {
  getMovie(API_URL)
})

function getMovie(url) {
  fetch(url).then(res => res.json()).then(data => {
    showMovie(data.results)
  })
}

const poster = document.querySelector('.poster')
const details = document.querySelector('.details')


function showMovie(data) {


  poster.innerHTML = ''
  details.innerHTML = ''

  const ramdon = Math.floor(Math.random() * (19 - 0 + 1) + 0);
  
  const title = data[ramdon].title
  const overview = data[ramdon].overview
  const movie_poster = IMG_URL + data[ramdon].poster_path

  poster.innerHTML = `<img src="${movie_poster}" alt="${title}">`
  details.innerHTML = `
  <h2>${title}</h2>
  <p>${overview}</p>
  `
}