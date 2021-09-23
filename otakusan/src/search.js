function execute(key, page) {
    if(!page) page = "1"
    var doc =  Http.get("https://otakusan.net/Home/Search?search=" + key).html()

    var listBook = []
    var element = doc.select(".picture-card")
for(var i in element){
        var book = element[i]
        listBook.push({
            name: book.select(".mdl-card__title a").attr("title"),
            link: book.select(".mdl-card__title a").attr("href"),
            cover: book.select(".mdl-card__title img").attr("src"),
            description: "Last chapter: " + book.select(".mdl-card__actions a").text(),
            host: "https://otakusan.net"
        });
        
    }
    return Response.success(listBook)
}