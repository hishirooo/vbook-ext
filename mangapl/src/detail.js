function execute(url) {
    var doc = Http.get(url).html()
    return Response.success({
        name: doc.select(".post-title h1").text(),
        cover: doc.select(".summary_image img").attr("data-src"),
        host: "https://mangapl.com/",
        author: doc.select(".post-content > .post-content_item").get(3).select(".author-content").text(),
        description: "",
        detail: "Rank: "+ doc.select(".post-content > .post-content_item").get(1).select(".summary-content").text() + "<br>" 
        + "Author: " + doc.select(".post-content > .post-content_item").get(3).select(".author-content").text() + "<br>" 
        + "Genre: " + doc.select(".post-content > .post-content_item").get(5).select(".genres-content").text()

    });
}