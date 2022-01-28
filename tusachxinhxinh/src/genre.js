function execute() {
    var doc = Http.get("http://tusachxinhxinh.com/").html()
    //return Response.success(doc)
    var genres = doc.select("#nav-tags .tags a")
    //return Response.success(genres)
    var listGenre = []
    genres.forEach(genre => {
        listGenre.push({
            title : genre.text(),
            input : genre.attr("href"),
            script : "gen.js"
        })
    });
    return Response.success(listGenre)
}
// ok