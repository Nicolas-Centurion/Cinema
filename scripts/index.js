$.get("https://students-api.2.us-1.fl0.io/movies", (data) => movies(data));


class Peliculas {
    constructor (title, year, director, duration, genre, rate, poster) {
        this.title = title;
        this.year = year;
        this.director = director;
        this.duration = duration;
        this.genre = genre;
        this.rate = rate;
        this.poster = poster;
    }

}

class Pelicula {
    constructor () {
        this.peliculas = [];
    }

    createPelicula (title, year, director, genre, rate, poster) {
        const newPelicula = new Peliculas (title, year, director, genre, rate, poster);
        this.peliculas.push (newPelicula);
    }
}

const portapeliculas = document.getElementById("portapeliculas");
const movies = (data) => {
    console.log(data)
    data.forEach((newPelicula) => {
        const { title, year, director, genre, rate, poster } = newPelicula;
        const nuevaPeli = document.createElement("div");
        nuevaPeli.innerHTML = `
            <br>
            <div class="pelicula mb-3">
            <img src=${poster}/ class="mb-2 transition">
            <div class="textoPeli mb-3">
            <h3 class="mt-1 fs-4">${title}</h3>
            <p class="mt-2 mb-0">AÑO:</p> 
            <p>${year} </p>
            <p class="mb-0">DIRECTOR:</p> 
            <p>${director}</p>
            <p class="mb-0">GENERO:</p>
            <p>${genre}</p>
            <p class="mb-0">PUNTUACION:</p> 
            <p>${rate}</p>
            </div>
            </div>
            `;

        portapeliculas.appendChild(nuevaPeli);
    });
}


