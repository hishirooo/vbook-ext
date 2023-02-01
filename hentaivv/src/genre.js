function execute() {
	var doc = Http.get("https://hentaivv1.com/").html()
	var genres = doc.select(".navbar-nav > .dropdown").get(1).select("ul li a")
    var listGenre  = []

    genres.forEach(genre => listGenre.push({
		title : genre.text(),
		input : "https://hentaivv1.com" + genre.attr("href"),
		script: "gen.js"
    }))

	return Response.success(listGenre)
}

//https://truyenkk1.com/keyword/bo-chong-nang-dau/