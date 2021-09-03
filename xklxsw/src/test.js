function execute(url) {
    var doc = Http.get(url).html();
    var el = doc.select(".content .fd-list").get(3).select('a')
    const list = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        list.push({
            name: e.select("a").text(),
            url: e.attr("href"),
            host: "www.xklxsw.com"
        })
    }
    return Response.success(list);
}