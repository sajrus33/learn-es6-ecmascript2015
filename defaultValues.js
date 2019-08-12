
// rest operator
const movies = {
    "pirates": {
        title: "Pirates of the Carabara",
        cast: []
    }
}
// here
const setCast = (movies, name, ...actors) => {
    actors.forEach(actor => {
        movies[name].cast.push(actor);
    })
}
setCast(movies, "pirates", "John Wick", "John Travolta");
console.log(movies);

