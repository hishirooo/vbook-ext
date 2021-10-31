function execute() {
    var doc = Http.get("https://m.dahexs.net/top/lastupdate_1/").html()
    var genreS = doc.select(".user_list .ranking a")
    var listGenre = []
    genreS.forEach(genre => listGenre.push({
        title : genre.text(),
		input : "https://m.dahexs.net" + genre.attr("href").split("_")[0] + "_",
		script: "gen.js"        
    }))
    return Response.success(listGenre)
}