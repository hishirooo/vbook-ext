function execute(key, page) {
    //https://hentaifox.com/search/?q=public&page=3
    if(!page) page="1"
    var doc = Http.get("https://hentaifox.com/search/?q="+ key +"&page=" + page).html()

    if(doc){
        var books = doc.select(".lc_galleries > div")
        var listBook = []
        books.forEach(book => listBook.push({
            name: book.select(".caption a").text(),
            link: book.select(".caption a").attr("href"),
            cover: book.select(".inner_thumb img").attr("src"),
            description: "",
            host: "https://hentaifox.com"
        }))
        if (listBook.length == 0) next = ""; 
        else next = (parseInt(page) + 1).toString();

        return Response.success(listBook,next)
    }
}