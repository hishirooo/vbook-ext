function execute(url) {
    if(url.indexOf("m.feiszw.com")!=-1){
        var bookid =  url.match(/(\d+)/)[1]
        url = "https://www.feiszw.com/Html/" + bookid + "/index.html"
    }
    var doc = Http.get(url).html()
    
    return Response.success({
        name: doc.select(".info p").get(0).select("a").text(),
        cover: "https://www.feiszw.com" + doc.select(".bookimg a img").attr("src"),
        author: doc.select(".info p").get(0).select("span").text(),
        description: doc.select(".intro").text(),
        detail: "",
        host: "https://www.feiszw.com/",
    });
}
