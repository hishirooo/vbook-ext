function execute() {
    var doc = Http.get("https://manhwas.men/manga-list/").html()
    var genres =  doc.select(".image-version-sidebar .list-category li a")
    var listBook = []
    genres.forEach(genre=>listBook.push({
        title : genre.text(),
        input : genre.attr("href"),
        script : "gen.js"
        }
    ))

    return Response.success(listBook)
}