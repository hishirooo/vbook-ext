function execute(url) {
	var doc = Http.get(url).html()
	var chapters = doc.select(".chapter-list span a")

    var listChapter = []
    for(var i=chapters.size()-1; i>=0; i--){
        listChapter.push({
            name : chapters[i].text(),
            url : chapters[i].attr("href"),
            host : "https://truyen210.net"
        })
    }

	return Response.success(listChapter)

}