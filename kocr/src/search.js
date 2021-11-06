function execute(key, page) {
    if(!page) page = "1"
    var doc = Http.get("https://kocr.net/page/" + page + "?s=" + key + "&post_type=wp-manga").html()
    var books = doc.select(".c-tabs-item .c-tabs-item__content")
    var listBook = []
    books.forEach(book => listBook.push({
        name: book.select(".post-title a").text(),
        link: book.select(".post-title a").attr("href"),
        cover: book.select(".c-image-hover img").attr("src"),
        description: book.select(".mg_author .summary-content").text(),
        host: "https://kocr.net"           
    }))
    if (listBook.length == 0) next = ""; 
    else next = (parseInt(page) + 1).toString();
    return Response.success(listBook,next)
}