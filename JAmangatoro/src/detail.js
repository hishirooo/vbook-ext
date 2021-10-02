function execute(url) {
    var doc = Http.get(url).html()
    var ongoing = doc.select(".list-info .status p").last().text()
    return Response.success({
        name : doc.select("h1.title-detail").text(),
        cover : doc.select(".col-image img").attr("src"),
        host : "https://ja.mangatoro.com",
        author : doc.select(".list-info .othername").last().select("a").text(),
        description : doc.select(".detail-content > p").text(),
        ongoing : ongoing.indexOf('Ongoing')!=-1,
        detail : "Other name: "+ doc.select(".list-info li").first().text() + "<br>"
        + "Author: " + doc.select(".list-info .othername").last().select("a").text() + "<br>"
        + "Status: "+ doc.select(".list-info .status p").last().text() + "<br>"
        + "Genre: " + doc.select(".list-info .kind p").last().text() + "<br>"
        + doc.select(".list-info li").last().text().replace('View','View:')
    });
}