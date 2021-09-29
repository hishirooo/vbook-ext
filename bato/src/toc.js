function execute(url) {
    var doc = Http.get(url).html();

    var list_chapter = [];

    var el = doc.select("a.visited.chapt");
    for (var i = el.size()-1 ; i >= 0 ; i--) {
        var e = el.get(i);
        list_chapter.push({
            name: e.select("b").text(),
            url: e.attr("href"),
            host: "https://bato.to"

        });
    }
    return Response.success(list_chapter);
}