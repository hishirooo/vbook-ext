function execute(url) {
    var doc = Http.get(url).html()
    var author = doc.select(".info-main > div > div")[0].select("span a").text().replace(/作 者：/,'')
    return Response.success({
        name : doc.select(".info-main h1").text(),
        cover : doc.select(".info-main > img").attr("src"),
        host : "https://www.51txt.cc/",
        author : author,
        description : doc.select(".info-main-intro").text(),
        detail : doc.select(".w100.dispc span a").text() + "<br>"
        + doc.select(".w100.dispc > a").text() 
             
    })
    
}