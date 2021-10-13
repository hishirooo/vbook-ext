function execute(url) {
    //var doc = Http.get(url + "/").html()
    var listChapter = []
    listChapter.push({
        name : "Read now",
        url : url,
        host : "https://hentaifox.com"
    })

	return Response.success(listChapter)
}

//https://hentaifox.com/gallery/88692/
//https://hentaifox.com/g/88692/1/