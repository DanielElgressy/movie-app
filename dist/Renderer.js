
class renderer { 

    rendererData( movieData ) { 
        $("#data").empty()
        const source = $("#result-template").html()
        const template = Handlebars.compile(source)
        const someHTML = template( { movieData } )
        $("#data").append(someHTML)

    }
}


