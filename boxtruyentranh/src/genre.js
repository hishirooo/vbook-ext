function execute() {
    var doc = Http.get("https://truyentranhdammyhay.com/").html()
    var genreS = doc.select(".genre li a")
    var listGenre = []
    genreS.forEach(genre => listGenre.push({
        title : genre.text(),
		input : genre.attr("href") + "page/",
		script: "gen.js"
    }))
    return Response.success(listGenre)
}