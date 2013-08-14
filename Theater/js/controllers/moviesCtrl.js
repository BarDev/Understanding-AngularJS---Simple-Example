theaterApp.controller("MoviesCtrl", function ($scope, moviesService){
    //Executes when the controller is created
    $scope.movies = moviesService.movies;

    moviesService.getMovies();

    $scope.addNewMovie = function(movieName){
        var movie = {name: movieName};
        moviesService.addNewMovie(movie);
    }
});



