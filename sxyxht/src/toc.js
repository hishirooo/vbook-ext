function execute(url) {
    var doc = Http.get(url + "/").html()
    var chapterS = doc.select("#chapterlist li a")
    var listChapter = []
    chapterS.forEach(chapter => listChapter.push({
        name: chapter.text(),
        url: chapter.attr("href"),
        host: "https://m.sxyxht.com"        
    }))
    return Response.success(listChapter)
}
//https://m.sxyxht.com/dushu/12350_157.html