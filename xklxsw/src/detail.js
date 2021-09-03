function execute(url) {
    var doc = Http.get(url).html();
    if (doc) {
        return Response.success({
            name: doc.select(".content .fd-list .bookimg img").attr("alt"),
            cover: doc.select(".content .fd-list .bookimg img").attr("data-original"),
            host: "https://www.xklxsw.com/",
            author: doc.select(".content .fd-list").text().match(/作者：(.+?)\s字数/)[1],
            //author: doc.select(".content .fd-list h1").text(),
            description: doc.select(".content .fd-list").text().match(/简介：(.*?)。 《/)[1]+"\n"+ doc.select(".content .fd-list").text().match(/状态：(.+?) 简介/)[1],
        });
    }
    return null;
}