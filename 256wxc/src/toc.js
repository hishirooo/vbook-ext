function execute(url) {
    var doc = Http.get(url + "/").html();

    var list_chapter = [];

    var allChapter = doc.select("#nr1 a");
    for (var i = 0 ; i < allChapter.size() ; i++) {
        var chapter = allChapter.get(i);
        list_chapter.push({
            name: chapter.text(),
            url: chapter.attr("href"),
            host: "https://www.256wenku.com"

        });
    }
    return Response.success(list_chapter);
}