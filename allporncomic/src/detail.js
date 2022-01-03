function execute(url) {
    var doc = Http.get(url + "/").html()
    //return Response.success(doc.select(".post-content .genres-content").text())
    var artist = doc.select(".post-content .artist-content").text()
    var genre = doc.select(".post-content .genres-content").text()
    //return Response.success(doc.select(".description-summary .summary__content p").text())
    return Response.success({
        name : doc.select(".post-title h1").text(),
        cover : doc.select(".summary_image a img").attr("data-src"),
        host : "https://allporncomic.com",
        author : artist,
        description : doc.select(".description-summary .summary__content p").text(),
        //ongoing : ongoing,
        detail :  "Artist: " + artist + "<br>" + "Genre: " + genre 
    })
}
//https://allporncomic.com/porncomic/kennys-new-lieutenant-bleach-super-melons/