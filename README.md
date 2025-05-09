// checkpoint of debugging 
the issues i found and fixed in the movie app
1- i found that the images of movies were not showing because movie.posterUrl was undefined. addMovie() was adding posterURL, not posterUrl. so i changed the movie.posterURl to movie.posterUrl
2- same for rating , i wrote it wrong but i fixed it. the filter based on rating was not working because in my movieData.js there was rate but i wrote rating in the filter component .
