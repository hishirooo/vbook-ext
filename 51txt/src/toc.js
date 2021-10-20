function execute(url) {
    var doc = Http.get(url).html()
    var chapters =  doc.select(".container.border3-2.mt8.mb20 > .info-chapters a")
    //var properties = Object.keys(chapters).reverse()
    var listChapter = []
    chapters.forEach(chapter => listChapter.push({
        name: chapter.text(),
        url: chapter.attr("href"),
        host: "https://www.51txt.cc/"       
    }))
    return Response.success(listChapter)
}
