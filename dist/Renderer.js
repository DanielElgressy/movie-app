
class renderer { 

    rendererData( movieData ) { 
        $("#data").empty()
        const source = $("#result-template").html()
        const template = Handlebars.compile(source)
        const someHTML = template( { movieData } )
        $("#data").append(someHTML)

    }



    rendererChosen( movieData ) { 
        $("#chosenData").empty()
        const source = $("#chosen-template").html()
        const template = Handlebars.compile(source)
        const someHTML = template( { movieData } )
        $("#chosenData").append(someHTML)

    }
}


