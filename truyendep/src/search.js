function execute(key, page) {
    if(!page) page = "1"
    var doc = Http.get("https://truyendep.net/page/" + page + "?s=" + key + "&q=" + key).html()
    var books = doc.select(".danh_sach .update_item")
    var listBook = []
    books.forEach(book => listBook.push({
        name: book.select("> a").attr("title"),
        link: book.select("> a").attr("href"),
        cover: book.select("> a img").attr("src"),
        description: String(book.select("> .item2_theloai a")).replace(/<[^>]+>/g,'').replace(/\n/g,', '),
        host: "https://truyendep.net"
    }))
    if (listBook.length == 0) next = ""; 
	else next = (parseInt(page) + 1).toString();
    return Response.success(listBook,next)

}