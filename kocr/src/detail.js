function execute(url) {
    var doc = Http.get(url + "/").html()
    var ongoing = doc.select(".post-status .summary-content").text()=="Đang tiến hành"
    return Response.success({
        name : doc.select(".container .post-title h1").text(),
        cover : doc.select(".tab-summary .summary_image img").attr("src"),
        host : "https://kocr.net",
        author : doc.select(".post-content .author-content a").text(),
        description : doc.select(".manga-excerpt p").text(),
        ongoing : ongoing,
        detail : String(doc.select(".post-content > .post-content_item")).trim().replace(/<[^>]+>/g,'').replace(/(\s*\n){1,}/g,'').replace('Tên khác','<br>Tên khác:').replace('Tác giả','<br>Tác giả:').replace('Nhóm dịch','<br>Nhóm dịch:').replace('Thể loại','<br>Thể loại:').replace(/(\s){2,}/g,' ')
    })
}