function execute(url) {
    var doc = Http.get(url+"/").html()
    var listchapter = []
    var chapters = doc.select(".list-chapter tbody tr")
    chapters.forEach(chap =>listchapter.push({
        name: chap.select("a").text().replace(/\u2013 Demo| Download/,'').trim(),
        url: chap.select("a").attr("href"),
        host: "https://dragonballwiki.net/"
    }))
    return Response.success(listchapter)
}