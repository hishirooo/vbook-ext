function execute(url, page) {
    if(!page) page="1"
    var listBook = []
        var doc =  Http.get("https://manhwas.men/" + url +"?page=" + page).html()
        var books =  doc.select(".col-6.col-sm-6.col-md-4.col-xl-2")
        books.forEach(book =>{
        listBook.push({
            name: book.select(".series-box").text(),
            link: book.select(".series-box a").attr("href"),
            cover: book.select(".thumb-img").attr("src"),
            description: null,
            host: "https://manhwas.men"    
            })
        })
        if (listBook.length == 0) next = ""; 
        else next = (parseInt(page) + 1).toString();
        return Response.success(listBook, next)
}