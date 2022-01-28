function execute(url, page) {
    var doc = fetch(url, {
        method: "GET",
    }).html()
    var books = doc.select("#archive-list-table li")
    //return Response.success(books)
    var listBook = []
    
    books.forEach(book =>{
        listBook.push({
            name: book.select("img").attr("alt"),
            link: book.select("a").attr("href"),
            cover: book.select("img").attr("src"),
            description: "View: "+ book.select(".badge").attr("data-cat"),
            host: "https://tusachxinhxinh.com"    
        })
    })
  return Response.success(listBook)
}