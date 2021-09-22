function execute(url, page) {
    if(!page) page = "1";

    var doc = Http.get(url + page).html()
    var listBook = []
    var allBook = doc.select(".thumb-item-flow")
    for(var i in allBook){
        var book = allBook[i]
        listBook.push({
            name: book.select(".info-botttom .series-title h3 a").attr("title"),
            link: book.select(".info-botttom .series-title h3 a").attr("href").replace("https://komeloli.net",""),
            cover: book.select(".a6-ratio img").attr("data-src"),
            description: book.select(".text-truncate span").text(),
            host: "https://komeloli.net"
        });
        
    }
    if (listBook.length == 0) next = ""; 
    else next = (parseInt(page) + 1).toString();

    return Response.success(listBook,next)
}

//https://komeloli.net/manga/me-toi-la-sinh-vien-dai-hoc