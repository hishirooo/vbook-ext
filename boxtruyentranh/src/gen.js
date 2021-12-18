function execute(url, page) {
    if(!page) page = "1"
    var doc = Http.get(url + "/" + page).html()
    var books = doc.select(".listupd > div")
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