function execute() {
    var doc = Http.get("https://allporncomic.com/home-3/").html()
    
    var genres = doc.select(".sub-nav_list li").get(1).select(".sub-menu li a")
    //return Response.success(genres)
    var listGenre = []
    genres.forEach(genre => listGenre.push({
        title : genre.select("span").text(),
		input : genre.attr("href"),
		script: "gen.js"   
    }))
    listGenre.shift()
    return Response.success(listGenre)
}