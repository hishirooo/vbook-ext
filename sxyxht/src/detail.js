function execute(url) {
    var doc = Http.get(url + "/").html()
    var info = doc.select(".baseinfo")
    return Response.success({
        name : info.select(".pt-novel .pt-name a").text(),
        cover : info.select("img").attr("src")||"/Public/images/nocover.jpg",
        host : "https://m.sxyxht.com",
        author : info.select(".pt-info")[0].select("a").text(),
        description : doc.select(".intro").text().replace(/&nbsp;/g,''),
        //ongoing : ongoing,
        detail : String(info.select(".pt-info")).replace(/<[^>]+>/g,'').replace(/\n/g,'').replace('分类：','<br>分类：').replace('更新：','<br>更新：').replace('热度：','<br>热度：')      
    })
}