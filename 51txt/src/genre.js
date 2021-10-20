function execute() {
    var doc = Http.get("https://www.51txt.cc/").html()
    var genres = doc.select("nav.dispc a")
    var listGenre =  []
    Console.log(genres.size())
    for(var i =0; i< genres.size()-1; i++){
        var genre = genres[i]
        if(genre.attr("href")!="/"){
            listGenre.push({
                title : genre.text(),
                input : "https://www.51txt.cc" + genre.attr("href"),
                script : "gen.js" 
            })
        }
    }
    return Response.success(listGenre)
}

