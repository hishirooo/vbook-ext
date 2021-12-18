function execute(key, page) {
    if(!page) page = "1"
    var doc = Http.get("https://truyentranhdammyhay.com/page/" + page + "?s=" + key + "&q=" + key).html()
    var books = doc.select(".listupd .bs")
    var listBook = []
    books.forEach(book => listBook.push({
        name: book.select("a").attr("title"),
        link: book.select("a").attr("href"),
        cover: book.select("img").attr("src"),
        description: book.select(".adds .epxs").text(),
        host: "https://truyentranhdammyhay.com/"  
    }))
    if (listBook.length == 0) next = ""; 
    else next = (parseInt(page) + 1).toString();
    return Response.success(listBook,next)
}