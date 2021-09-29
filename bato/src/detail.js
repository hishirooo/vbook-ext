function execute(url) {
    var doc = Http.get(url).html()

    var el = doc.select(".detail-set")
    var rank = doc.select(".attr-item").get(0).select("span").text()
    var author = doc.select(".attr-item").get(1).select("a").text()
    var genre = doc.select(".attr-item").get(2).select("span span").text().replace(/ /g,", ")
    return Response.success({
        name: doc.select("h3.item-title a").text(),
        cover: el.select(".attr-cover img").attr("src"),
        host: "https://bato.to",
        author: author,
        description: doc.select(".limit-html").text(),
        detail: "Rank: "+ rank + "<br>" + "Author: " + author + "<br>" + "Genre: " + genre
    
    });
}