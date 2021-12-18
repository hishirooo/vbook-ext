function execute(url) {
    var doc = Http.get(url + "/").html()
    var info = doc.select(".bigcontent.nobigcover")
    var ongoing = info.select(".tsinfo .imptdt i a").text()
    var author = info.select(".flex-wrap").get(0).select("span a").text()
    if(!author) author = "Đang cập nhật"
    //return Response.success(info.select(".flex-wrap")[0].select("span a"))
    return Response.success({
        name : info.select(".entry-title").text(),
        cover : info.select(".thumbook img").attr("src"),
        host : "https://truyentranhdammyhay.com/",
        author : author,
        description : info.select(".wd-full").get(0).select("p"),
        ongoing : ongoing.indexOf('Đang tiến hành')!=-1,
        detail : "Tác giả: " + author + "<br>" +
        "Lượt xem: " + info.select(".flex-wrap").get(0).select("span").get(1).text() + "<br>" +
        "Thể loại: " + String(info.select(".wd-full").get(0).select(".mgen")).replace(/a> <a/g,'a>, <a').replace(/<[^>]+>/g,'').trim(),
    });
}