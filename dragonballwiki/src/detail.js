function execute(url) {
    var doc = Http.get(url+"/").html()
    var info = doc.select('.info div')
    return Response.success({
        name: doc.select(".title").text(),
        cover: doc.select(".wrap-image img").attr('src').replace('https://dragonballwiki.net/doctruyen/wp-content/themes/truyenfull/timthumb.php?src=','').replace(/&.*/,''),
        author: String(info.first()).replace("<h3>Tác giả:<\/h3>",'').replace(/(<([^>]+)>)/g,'').trim(),
        description: doc.select('.desc-text').text(),
        detail: info.text().replace('Thể loại:','<br>Thể loại:').replace('Nhóm dịch:','<br>Nhóm dịch:').replace('Trạng thái:','<br>Tình trạng:').replace('Lượt xem:','<br>Lượt xem:'),
        host: "https://dragonballwiki.net/"
    });
}