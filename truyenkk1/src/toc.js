function execute(url) {
    var doc = Http.get(url + "/").html()
    var chapters = doc.select(".listchap li .crop-text a")
    var listchapter = []
    chapters.forEach(chap => listchapter.push({
        name: chap.text(),
        url: chap.attr("href"),
        host: "https://truyenkk1.com"
    }))
    return Response.success(listchapter)
}