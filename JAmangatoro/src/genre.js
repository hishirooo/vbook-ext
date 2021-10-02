function execute() {

	var doc = Http.get("https://ja.mangatoro.com/genres").html()
    var genres = doc.select(".dropdown-genres option")
    var genre = []
    for(var i in genres){
        genre.push({
            title: genres[i].text(),
            input: genres[i].attr("value"),
            script: "gen.js"
        })
    }
	return Response.success(genre)

}