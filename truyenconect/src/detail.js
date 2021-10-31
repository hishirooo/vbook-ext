function execute(url) {
    var doc = Http.get(url).html()
    var author = doc.select(".post-title meta").attr("content")
    var ongoing = doc.select(".post-status .summary-content").text()
    return Response.success({
        name : doc.select(".post-title h1").text(),
        cover : doc.select(".summary_image a img").attr("data-src"),
        host : "https://truyenconect.com",
        author : author,
        description : doc.select(".description-summary .summary__content p"),
        ongoing : ongoing.indexOf('Đang tiến hành')!=-1,
        detail : doc.select(".post-content .post-content_item").text().replace('Lượt xem','Lượt xem:').replace('Số chap','<br>Số chap:').replace('Tác giả','<br>Tác giả:').replace('Họa sĩ','<br>Họa sĩ:').replace('Thể Loại','<br>Thể Loại:').replace('Type','<br>Type:')
        ,
    });
}