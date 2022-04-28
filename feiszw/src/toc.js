function execute(url) {
    var doc = fetch(url).html()
    var firstURL = url.replace("index.html","")
    Console.log(firstURL)
    var chapters = doc.select(".chapterlist ul li a")
    var listchapter = []
    chapters.forEach(chapter => listchapter.push({
        name: chapter.text(),
        url: firstURL + chapter.attr("href"),
        host: "https://www.feiszw.com/"
    }))
    return Response.success(listchapter)
}
//https://www.feiszw.com/Html/23671/20526869.html