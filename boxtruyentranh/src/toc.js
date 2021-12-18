function execute(url) {
    var doc = Http.get(url + "/").html()
    var chapters = doc.select("#chapterlist ul .eph-num a")
    var listChapter = []
    for(var i = chapters.size()-1;i>=0; i--){
        listChapter.push({
            name: chapters.get(i).attr("title"),
            url: chapters.get(i).attr("href"),
            host: "https://truyentranhdammyhay.com/"   
        })
    }
    return Response.success(listChapter)
}