function execute(url) {
    //https://m.dahexs.net/248_248771_1/#all
    var doc = Http.get(url + "/").html()
    var listPage = doc.select(".listpage .middle option")
    var listChapter = []
    for(var i in listPage){
        var page = Http.get("https://m.dahexs.net" + listPage.get(i).attr("value")).html()
        var chapterS = page.select("ul.p2")[1].select("li a")
        chapterS.forEach(chapter => listChapter.push({
            name: chapter.text(),
            url: chapter.attr("href"),
            host: "https://m.dahexs.net"
        }))
        //Console.log(listPage.get(i).attr("value"))
    }
    return Response.success(listChapter)
}
// https://m.dahexs.net/248_248771/38743724.html