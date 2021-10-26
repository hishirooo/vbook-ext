function execute(url) {
    var doc = Http.get(url + "/").html()
    var chapters = doc.select(".chapter-list .row")

    var listChapter = []
    for(var i=chapters.size()-1;i>=0;i--){
        listChapter.push({
            name: chapters[i].select("span")[0].select("a").text(),
            url: chapters[i].select("span")[0].select("a").attr("href"),
            host: "https://truyendep.net"
        })       
    }
    return Response.success(listChapter)
}