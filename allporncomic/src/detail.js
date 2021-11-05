function execute(url) {
    var doc = Http.get(url + "/").html()
    var artist = doc.select(".post-content .post-content_item")[doc.select(".post-content .post-content_item").size()-3].select(".artist-content a").text()
    var genre = doc.select(".post-content .post-content_item")[doc.select(".post-content .post-content_item").size()-2].select(".genres-content").text()
    return Response.success({
        name : doc.select(".post-title h1").text(),
        cover : doc.select(".summary_image a img").attr("data-src"),
        host : "https://allporncomic.com",
        author : artist,
        description : genre,
        //ongoing : ongoing,
        detail :  "Artist: " + artist + "<br>" + "Genre: " + genre 
    })
}