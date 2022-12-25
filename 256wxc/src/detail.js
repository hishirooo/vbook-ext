function execute(url) {
    var doc = Http.get(url).html()
    var info = doc.select("#text")//
    // bình tĩnh. 
    return Response.success({
        name: info.select(".art_tit").text(),
        cover: "https://i.imgur.com/FbaKQ0k.jpg",
        author: info.select("span.bookinfo").get(0).text(),
        description: info.select("#smalltext").text(),
        detail: info.select("span.bookinfo").get(0).text() + "<br>"
        + info.select("time.bookinfo").text() + "<br>"
        + info.select("span.bookinfo").get(1).text() + "<br>",
        //ongoing : ,
        host: "https://www.256wenku.com/",
    });
}
// https://www.256wxc.com/read/74342/

function execute(url) {
    const doc = Http.get(url).html()
    return Response.success({
        name: doc.select(".art_tit").text(),
        cover: "https://i.imgur.com/FbaKQ0k.jpg",
        description: doc.select('#nr_history').text(),
        detail: doc.select("#text time").html(),
        category: null,
        host: "https://www.256wenku.com/"
    });
}