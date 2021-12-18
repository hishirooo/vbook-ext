function execute(url) {
    var doc = Http.get(url + "/").html()
    var info = doc.select(".catalog")
    return Response.success({
        name : info.select(".catalog1 h1").text(),
        cover : info.select(".tu img").attr("src")||"https://m.dahexs.net/17mb/css/noimg.jpg",
        host : "https://m.dahexs.net",
        author : info.select(".tab .p1 a").text(),
        description : info.select(".jj").text(),
        //ongoing : ongoing,
        detail : info.select(".tab p").get(0).text() + "<br>"
        + info.select(".tab p").get(1).text() + "<br>" 
        + info.select(".tab p").get(2).text()     
    })
}