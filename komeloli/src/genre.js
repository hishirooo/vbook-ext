function execute() {
    var doc = Http.get("https://komeloli.net/").html()
    var element =  doc.select(".nav-theloai .dropdown-menu a")
    var listGenre = []
    for(var i in element){
        var el = element[i]
        //var genre = el.attr("href").replace("/genres/","")
        var genre = el.attr("href").match(/genres\/([0-9A-Za-z].+)/)[1];
        listGenre.push({
            title: el.attr("data-title"),
            input: "https://komeloli.net/manga?genre[]=" + genre + "&page=",
            script: 'gen.js'
        }); 

    }
    return Response.success(listGenre)
}