function execute(url) {
    var doc = Http.get(url + "/").html();

    var list_chapter = [];

    var el = doc.select("#ChapList a");
    for (var i = el.size()-1 ; i >= 0 ; i--) {
        var e = el.get(i);
        list_chapter.push({
            name: e.select(".episode-title").text(),
            url: e.select(".episode-item").attr("href"),
            host: "https://mangaxy.com"

        });
    }
    return Response.success(list_chapter);
}