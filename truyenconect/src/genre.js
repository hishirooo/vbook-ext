function execute() {
	var doc = Http.get("https://truyenconect.com/").html()
	var genreS = doc.select(".sub-nav_list li a")
	var listGenre = []
	genreS.forEach(genre => {
		if(genre.attr("href")!="#"){
			listGenre.push({
				title : genre.text(),
				input : genre.attr("href") + "?page=",
				script: "gen.js"
			})
		}
	})
	return Response.success(listGenre)
}
//https://truyenconect.com/the-loai/do-thi?page=2