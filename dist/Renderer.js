
class renderer { 

    rendererData( movieData ) { 
        $("#data").empty()
        const source = $("#results-template").html()
        const template = Handlebars.compile(source)
        const someHTML = template( { movieData } )
        $("#data").append(someHTML)

    }

    rendererDataFavo( movieData ) { 
        $("#favoData").empty()
        const source = $("#results-template").html()
        const template = Handlebars.compile(source)
        const someHTML = template( { movieData } )
        $("#favoData").append(someHTML)

    }



    rendererChosen( movieData ) { 
        $("#chosenData").empty()
        const source = $("#result-template").html()
        const template = Handlebars.compile(source)
        const someHTML = template( { movieData } )
        $("#chosenData").append(someHTML)

    }
}


