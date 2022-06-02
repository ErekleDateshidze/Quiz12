// country = {
//     name: "შვეიცარია",
//     languages: ["გერმანული", "ფრანგული", "იტალიური"],
//     capital: {
//         name: "ბერნი",
//         population: 123123
//     },
//     cities: [
//         { name: "ცურიხი", population: 31232131 },
//         { name: "ჟენევა", population: 12313 },
//         { name: "რამე", population: 13123211231 }
//     ]
// }

// document.write("შვეიცარიის ოფიციალური ენებია" + ": ");
// for (var i = 0; i < country.languages.length; i++) {
//     document.write(country.languages[i] + " ");
// }

// document.write("</br>" + "შვეიცარიის დედაქალაქია" + " :");
// document.write(country.capital.name + " " + country.capital.population)

// document.write("</br>" + "ქალაქები" + ": ");
// for (var i = 0; i < country.cities.length; i++) {
//     document.write(country.cities[i].name + " " + country.cities[i].population + " ");
// }


film = {
    name: "Cavea Cinemas",
    languages: ["English", "Russian", "Georgian"],
    premiere: {
        name: "Cavea City Mall",
        attendance: 100000
    },
    movies: [
        { name: "Top Gun Maverick", imdb: 9.2 },
        { name: "Doctor Strange", imdb: 8.7 },
        { name: "Batman", imdb: 6.2 }
    ]
}


for (var i = 0; i < film.movies.length - 2; i++) {
    document.getElementById("movie1").innerHTML = film.movies[i].name + ": " + film.movies[i].imdb;
}
for (var i = 0; i < film.movies.length - 1; i++) {
    document.getElementById("movie2").innerHTML = film.movies[i].name + ": " + film.movies[i].imdb;
}

for (var i = 0; i < film.movies.length; i++) {
    document.getElementById("movie3").innerHTML = film.movies[i].name + ": " + film.movies[i].imdb;
}




// document.write("</br>" + "Language Options" + ":");
// for (var i = 0; i < film.languages.length; i++) {
//     document.write(film.languages[i] + " ");
// }

// document.write("</br>" + "Grand Premiere" + ":");
// document.write(film.premiere.name + " " + film.premiere.attendance);

// document.write("</br>" + "Movies" + ":");
// for (var i = 0; i < film.movies.length; i++) {
//     document.write(film.movies[i].name + "-" + film.movies[i].imdb + " ");
// }




