function execute(url) {
    var doc = Http.get(url + "/").html()
    var chapters = doc.select(".listing-chapters_wrap ul li")
    var listChapter = []
    chapters.forEach(chapter => listChapter.push({
        name: chapter.select("a").text(),
        url: chapter.select(".thumblink").attr("href"),
        host: "https://kocr.net"
    }))
    return Response.success(listChapter.reverse())
}