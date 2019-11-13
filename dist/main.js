const render = new renderer
const hService = new httpService


$("#show").on("click", function () {
    let input = $("#movie-input").val()
    // let cityExist = tempmanager.cityData.some(x => x.name && (x.name.toLowerCase() == input.toLowerCase()));
    // if (cityExist == true) {
        // alert(`${input} already exist`); //לא יאפשר להציג את אותה עיר יותר מפעם אחת
    // } else {
        handleSearch(input)
    // }
})


const handleSearch = async function (input) {
    let data = await hService.getMovieData(input)
    render.rendererData(hService.movieData)
    $("#movie-input").val("")
}


const loadFavorite = async () => {
    await hService.getDataFromDB()
    render.rendererData(hService.favoriteData)
}

$("#container").on("click", "#favoriteMovies", function () {
    loadFavorite()
})



$("#data").on("click", "#saveMovie", function () {
    let movieID = $(this).closest(".movie").find("#movieID").text()
    let movieName = $(this).closest(".movie").find("#movieName").text()

    console.log(movieID)
    console.log(movieName)

    hService.saveMovie(movieID)
    alert(`${movieName} saved in DB`)

})


$("#data").on("click", "#deleteMovie", function () {
    let movieID = $(this).closest(".movie").find("#movieID").text()
    let movieName = $(this).closest(".movie").find("#movieName").text()

    hService.removeMovie(movieID)
    render.rendererData(hService.movieData)
})
