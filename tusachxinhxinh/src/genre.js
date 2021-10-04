function execute() {
    var doc = Http.get("http://tusachxinhxinh.com/").html()
    var genres = doc.select(".list-unstyled li a")
    var listGenre = []
    genres.forEach(function(genre){
        listGenre.push({
            title : genre.text(),
            input : genre.attr("href"),
            script : "gen.js"
        })
    });
    return Response.success(listGenre)
}