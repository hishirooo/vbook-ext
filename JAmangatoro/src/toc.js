function execute(url) {
    var doc = Http.get(url).html()
    var chapters = doc.select("#nt_listchapter .chapter a")
    var listChapter = []
    for(var i=chapters.size()-1; i>=0; i--){
        var chapter = chapters[i]
        listChapter.push({
            name:chapter.text(),
            host: "https://ja.mangatoro.com",
            url: chapter.attr("href")
        })
    }
    return Response.success(listChapter)

}