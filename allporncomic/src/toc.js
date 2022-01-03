function execute(url) {
    var doc = Http.get(url + "/").html()
    var chapters = doc.select(".listing-chapters_wrap ul li")
    var listChapter = []
    chapters.forEach(chapter => listChapter.push({
        name: chapter.select("a").text(),
        url: chapter.select("a").attr("href"),
        host: "https://allporncomic.com"  
    }))
    return Response.success(listChapter.reverse())

}