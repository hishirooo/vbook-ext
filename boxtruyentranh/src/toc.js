function execute(url) {
    var doc = Http.get(url + "/").html()
    var chapters = doc.select("#chapterlist ul .eph-num a")
    var listChapter = []
    for(var i = chapters.size()-1;i>=0; i--){
        listChapter.push({
            name: chapters[i].attr("title"),
            url: chapters[i].attr("href"),
            host: "https://boxtruyentranh.net"   
        })
    }
    return Response.success(listChapter)
}