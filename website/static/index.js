

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

function getSuggestion(){
    
const http = require("https");

const options = {
	"method": "GET",
	"hostname": "deezerdevs-deezer.p.rapidapi.com",
	"port": null,
	"path": `/search?q=${genre}`,
	"headers": {
		"x-rapidapi-key": "1a2d1b9da3msh9abb25a9f1905b0p1f1ed3jsn028fbae89631",
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"useQueryString": true
	}
};

    const req = http.request(options, function (res) {
        const chunks = [];
        
        res.on("data", function (chunk) {
            chunks.push(chunk);
        });
        
        res.on("end", function () {
            const body = Buffer.concat(chunks);
            console.log(body.toString());
        });
    });
    
    req.end();
}

