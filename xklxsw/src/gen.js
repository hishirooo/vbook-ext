function execute(url, page) {
    if(!page) page = '1';
    var doc = Http.get(url).html();

    var gen = [];
    if (doc) {
        var el = doc.select(".content .sortItem");
        for (var i = 0; i < el.size(); i++) {
            var e = el.get(i);
            gen.push({
                name: e.select("span.name a").attr("title"),
                link: e.select("span.name a").attr("href"),
                cover: "https://www.kelexsw.com" + e.select("span.img a img").attr("data-original"),
                description: e.select(".say").text(),//Cái desc này nên để chapter hoặc tác giả
                host: 'https://www.kelexsw.com'
            });
        }
        return Response.success(gen);
    }
}
//Okie >>  detail.js ông làm từng file theo sơ đồ tui vẽ thì sẽ đỡ nhầm đata