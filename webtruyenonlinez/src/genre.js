function execute() {
    var doc = Http.get("http://webtruyenonlinez.com").html()
    var genres = doc.select(".navbar-nav .dropdown-menu")[0].select("li a")
    var listGenre = []
    genres.forEach(gen => listGenre.push({
            title : gen.text(),
            input : gen.attr("href"),
            srcipt: "gen.js"
        })
    )
    return Response.success(listGenre)
}