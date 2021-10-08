function execute(url) {
    var doc = Http.get(url).html()
    return Response.success({
        name : doc.select(".book-cat-name").text(),
        cover : doc.select(".cat-item .col-md-3 img").attr("src"),
        host : "http://webtruyenonlinez.com/",
        author : doc.select(".cat-author a").text(),
        description : doc.select(".book-desc").text(),
        detail : "Info:" + doc.select(".cat-item .col-md-9").text().match(/(Tác giả:.+)Bình chọn.*/)[1].replace('Thể loại','<br>Thể loại').replace('Đăng bởi','<br>Đăng bởi').replace('Chương','<br>Chương').replace('Lượt xem','<br>Lượt xem')
    });
}