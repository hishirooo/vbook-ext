function execute(url) {
    var doc = Http.get(url + "/").html()
    var checkCover = doc.select(".detail-top-right img").attr("style")
    if(checkCover.indexOf('jpg')!=-1|checkCover.indexOf('png')!=-1|checkCover.indexOf('jpeg')!=-1)
        cover = checkCover.match(/image: url\('\/\/(.+)\'\)/)[1]
    else
        cover = ""
    return Response.success({
        name: doc.select("h1.comics-title").text(),
        cover: "https://" + cover,
        host: "",
        author: doc.select(".created-by a").text(),
        description: doc.select(".manga-info p"),
        detail: "Athor: " + doc.select(".created-by a").text() + "<br>"
        + doc.select(".manga-info ul li").get(0).text() + "<br>"
        // + "Dịch: " + doc.select(".manga-info ul li").get(1).text() + "<br>"
        // + "Tình trạng: " + doc.select(".manga-info ul li").get(1).text()
        
    });
}
//http://i.truyentranh8.net/305x457/2012/0519/727-Tan_Tac_Long_Ho_Mon.jpg