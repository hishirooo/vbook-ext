function execute(url) {
	var doc = Http.get(url + "/").html()
	var infos = doc.select(".lt_infocomic > div")
	var ongoing = infos[3].select("a").text()
    var genres = String(doc.select(".comicinfo .lt_cate a")).replace(/<[^>]+>/g,'').replace(/\n/g,', ')
    return Response.success({
        name : doc.select(".comictitle").text(),
        cover : doc.select(".ts_sticker > .img_load div").attr("data-bg"),
        host : "https://dichtruyen.org",
        author : infos[1].select("span a").text(),
        description : doc.select(".lt_info99 > div span").text().replace(/ \.{2,}| Xem thêm/g,""),
        ongoing : ongoing.indexOf('Đang tiến hành')!=-1,
        detail : "Author: " + infos[1].select("span a").text() + "<br>"
        + "Status : " + ongoing + "<br>"
        + "Genre: " + genres
    });
}