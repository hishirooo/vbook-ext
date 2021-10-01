function execute(url) {
    //https://mangapl.com/manga/step-father-raw/
    var getID = Http.get(url).html()
    var bookId = getID.select("#manga-chapters-holder").attr("data-id")
    var doc = Http.post("https://mangapl.com/wp-admin/admin-ajax.php")
    .params({
        "action": "manga_get_chapters",
        "manga": bookId
    }).html()
    var chapters = doc.select(".wp-manga-chapter")
    var listChapter = []
    for (var i = chapters.size()-1 ; i >= 0 ; i--) {
        var e = chapters.get(i);
        listChapter.push({
            name: e.select("a").text(),
            url: e.select("a").attr("href"),
            host: "https://mangapl.com"
        });
    }
    return Response.success(listChapter);
}