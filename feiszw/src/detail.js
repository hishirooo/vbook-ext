function execute(url) {
    url = url.replace("feiszw.com","feiazw.com")
    if(url.indexOf("m.feiazw.com")!=-1){
        var bookid =  url.match(/(\d+)/)[1]
        url = "https://www.feiazw.com/Html/" + bookid + "/index.html"
    }
    var doc = Http.get(url).html()
    
    return Response.success({
        name: doc.select(".info p").get(0).select("a").text(),
        cover: "https://images.weserv.nl/?url=https://www.feiazw.com"  + doc.select(".bookimg a img").attr("src") + "&output=jpg",
        author: doc.select(".info p").get(0).select("span").text(),
        description: doc.select(".intro").text(),
        detail: "",
        host: "https://www.feiazw.com/",
    });
}
