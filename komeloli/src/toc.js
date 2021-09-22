function execute(url) {
    var doc = Http.get(url).html();

    if (doc){
        var list_chapter = [];

        var el = doc.select("#list-chapter a");
        for (var i = el.size()-1 ; i >= 0 ; i--) {
            var e = el.get(i);
            list_chapter.push({
                name: e.attr("title"),
                url: e.attr("href"),
                host: "https://komeloli.net"

            });
        }
    }
    return Response.success(list_chapter);
}