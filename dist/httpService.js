
class httpService { 

    constructor() {
        this.movieData = []
        this.favoriteData = []
        this.chosenData = []
    }


    async getDataFromDB() { 
        const res = await $.get(`/movies`)
        this.favoriteData = res
    }


    async getMovieData(movieName) { 
        const res = await $.get(`/movie/${movieName}`)
            this.movieData = []

        for (let movie of res){
            if(movie.poster_path){
               this.movieData.push({
                    id: movie.id,
                    title: movie.title,
                    rating: movie.vote_average,
                    poster: movie.poster_path
                })}
            }
            console.log(this.movieData)
    }


    async getChosenData(movieID) { 
        const res = await $.get(`/movies/${movieID}`)
            this.chosenData = []

            this.chosenData.push({
                    id: res.id,
                    title: res.title,
                    rating: res.vote_average,
                    poster: res.poster_path
                })}
   

    async saveMovie(movieID) {  
        for (let movie of this.movieData) {
            if (movie.id == movieID) {
                await $.post(`/movie`, movie) 
                return //making sure a movie will be saved once when pressing save 
            }
        }
    } 


    removeMovie(movieID) { 
        let checking = this.favoriteData.findIndex(m => m.id == movieID)
        console.log(checking)
        this.favoriteData.splice(checking, 1) //will remove from visual browser search array

        $.ajax({
            method: 'DELETE',
            url: "/movie/" + movieID,
            type: "json",
            success: function (result) {
                console.log(result)
            },
            error: function (xhr, text, error) {
                console.log(error)
            }
        })
    }
}

