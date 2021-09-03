function execute(url) {

    var doc = Http.get(url).html();

    var gen = [];
    if (doc) {
        var el = doc.select(".content .sortItem");
        for (var i = 0; i < el.size(); i++) {
            var e = el.get(i);
            gen.push({
                title: e.select("span.name a").attr("title"),
                link: e.select("span.name a").attr("href"),
                author: e.select(".author").text(),
                description: e.select(".say").text(),
                script: "detail.js"
            });
            
        }
        return Response.success(gen);
    }
}