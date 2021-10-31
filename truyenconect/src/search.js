function execute(key, page) {
    if(!page) page = "1"
    var doc = Http.get("https://truyenconect.com/tim-kiem").params({
        "key": key,
        "page": page
    }).html()

    var books = doc.select(".c-tabs-item .c-tabs-item__content")
    var listBook = []
    books.forEach(book => listBook.push({
        name: book.select("> .col-4 .c-image-hover a").attr("title"),
        link: book.select("> .col-4 .c-image-hover a").attr("href"),
        cover: book.select("> .col-4 .c-image-hover a img").attr("src"),
        description: book.select("> .col-8 .tab-summary .mg_genres .summary-content").text(),
        host: "https://truyenconect.com"          
    }))
    if (listBook.length == 0) next = ""; 
    else next = (parseInt(page) + 1).toString();
    return Response.success(listBook,next)
}