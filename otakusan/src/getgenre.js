function execute(url,page) {
    if(!page) page = 1
    var genreID = url.match(/(\d+)/)[1]
    var doc = Http.get("https://otakusan.net/Genre/MangaGenrePartial?id="+genreID+"&offset="+((page-1)*24).toString()+"&pagesize=24&lang=vn&key").html()
    //Console.log((page-1)*24)
    var listBook = []
    var allBook = doc.select('.picture-card')
    for(var i in allBook){
    var book = allBook[i]
        listBook.push({
            name: book.select(".mdl-card__title a").attr("title"),
            link: book.select(".mdl-card__title a").attr("href"),
            cover: book.select(".mdl-card__title img").attr("src"),
            description: "",
            host: "https://otakusan.net"
        });
    }
    if (listBook.length == 0) next = ""; 
    else next = parseInt(page) + 1

    return Response.success(listBook,next)
}