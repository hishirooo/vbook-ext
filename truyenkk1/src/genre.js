function execute() {
    var listGenre = []
    var doc = Http.get("https://truyenkkz.com/").html()
    var genres = doc.select(".navbar-nav > .dropdown").get(1).select("ul li a")

    genres.forEach(genre => listGenre.push({
        title: genre.text(),
        input: "https://truyenkkz.com" + genre.attr("href"),
        script: "gen.js"
    }))

    return Response.success(listGenre)
}
