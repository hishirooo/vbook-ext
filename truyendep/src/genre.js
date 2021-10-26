function execute() {
    var doc = Http.get("https://truyendep.net/").html()

    var genres =  doc.select(".theloai tr td a")
    var listGenre =  []

    genres.forEach(genre => listGenre.push({
        title : genre.select("a").text(),
		input : genre.attr("href"),
		script: "gen.js"
    }))

    return Response.success(listGenre)
}