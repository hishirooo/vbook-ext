function execute() {
    var doc = fetch("https://komeloli.net/").html()
    var element =  doc.select(".nav-theloai .dropdown-menu a")

    var listGenre = []

    element.forEach(genre => listGenre.push({
        title: genre.attr("data-title"),
        input: "https://komeloli.net/manga?genre[]=" + genre.attr("href").match(/genres\/([0-9A-Za-z].+)/)[1] + "&page=",
        script: 'gen.js'
    }))
    return Response.success(listGenre)
}