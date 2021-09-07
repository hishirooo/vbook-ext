function execute(url) {
    //var url_split=url.slice(0,url.length()-1);
    var doc = Http.get(url).html();
    var el = doc.select(".container .media")
    if (doc) {
        //return Response.success(doc.select(".info-holder .info div").get(0));
        return Response.success({
            name: doc.select(".media-body h2 span").text(),
            cover: doc.select(".media-left img").attr("src"),
            host: "https://novelfull.com",
            author: doc.select("div.col-lg-3.col-md-4 div.panel").get(0).select("dd").get(0).text(),
            description: doc.select(".description").text(),
            detail: "Author: " + doc.select("div.col-lg-3.col-md-4 div.panel").get(0).select("dd").get(0).text()
        });

    }
    return null;
}