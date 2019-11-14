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
    // $("#data").empty()
    let data = await hService.getMovieData(input)
    render.rendererData(hService.movieData)
    $("#movie-input").val("")
}


const loadFavorite = async () => {
    await hService.getDataFromDB()
    render.rendererDataFavo(hService.favoriteData)
}

$("#container").on("click", "#favoriteMovies", function () {
    loadFavorite()
})



$("#chosenData").on("click", "#saveMovie1", function () {
    let movieID = $(this).closest(".movies").find("#movieID1").text()
    let movieName = $(this).closest(".movies").find("#movieName1").text()

    console.log(movieID)
    console.log(movieName)

    hService.saveMovie(movieID)
    alert(`${movieName} saved in DB`)

})


$("#chosenData").on("click", "#deleteMovie", function () {
    let movieID = $(this).closest(".movie").find("#movieID").text()
    let movieName = $(this).closest(".movie").find("#movieName").text()

    hService.removeMovie(movieID)
    render.rendererData(hService.movieData)
})




$("#data").on("click", "#img", function () {
    let movieID = $(this).closest(".movie").find("#movieID").text()

    // console.log(movieIMG)
    console.log(movieID)

    let dataChosen = hService.getChosenData(movieID)
    render.rendererChosen(hService.chosenData)


    // hService.saveMovie(movieID)
    // alert(`${movieName} saved in DB`)

})

