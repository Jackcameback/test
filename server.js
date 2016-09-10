var imdb = require('imdb-api');
var input = process.argv[2];
var movie;

imdb.getReq({ name: input }, function(err, things) {
    movie = things;
    console.log(movie);
});

