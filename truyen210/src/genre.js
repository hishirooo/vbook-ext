function execute() {
	var doc = Http.get("https://truyen210.net/").html()
	var genres = doc.select(".manga-box-cat-content a")
	// <a title="3D Hentai" href="https://truyen210.net/the-loai/3d-hentai-158"> 3D Hentai</a>
	var listGenre = []
	genres.forEach( gen => listGenre.push({
		title : gen.text(),
		input : gen.attr("href") + "?page=",
		script : "gen.js"
	}))
	return Response.success(listGenre)

}