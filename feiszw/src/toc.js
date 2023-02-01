function execute(url) {
    url = url.replace("feiszw.com","feiazw.com")
    if(url.indexOf("m.feiazw.com")!=-1){
        var bookid =  url.match(/(\d+)/)[1]
        url = "https://www.feiazw.com/Html/" + bookid + "/index.html"
    }
    var doc = fetch(url).html()
    var firstURL = url.replace("index.html","")
    Console.log(firstURL)
    var chapters = doc.select(".chapterlist ul li a")
    var listchapter = []
    chapters.forEach(chapter => listchapter.push({
        name: chapter.text(),
        url: firstURL + chapter.attr("href"),
        host: "https://www.feiazw.com/"
    }))
    return Response.success(listchapter)
}
//https://www.feiazw.com/Html/23671/20526869.html