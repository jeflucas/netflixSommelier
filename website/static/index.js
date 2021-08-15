import axios from "axios";
comedy = document.getElementById("comedy").checked
drama = document.getElementById("drama").checked
action = document.getElementById("action").checked
genre = ''

if (comedy){
    genre = "comedy"
} else if (drama) {
    genre = "drama"
} else if (action) {
    genre = "action"
}

const options = {
    method: 'GET',
    url: 'https://unogsng.p.rapidapi.com/genres',
    params: {
        genrelist: genre,
        audio: 'portuguese'
    },
    headers: {
      'x-rapidapi-key': '1a2d1b9da3msh9abb25a9f1905b0p1f1ed3jsn028fbae89631',
      'x-rapidapi-host': 'unogsng.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  });