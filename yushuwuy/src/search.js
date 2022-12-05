function execute(key,page) {
    var doc = fetch("https://yushuwuy.com/search/", {
        method: "POST",
        body: {
            searchkey: key,
            searchtype: "all"
        }
    }).html()
    var books  = doc.select(".SHsectionThree-middle p")
    Console.log(books)
    var listBook = []
    books.forEach(book => listBook.push({
		name: book.select("span:nth-child(2) > a").attr("title"),
		link: book.select("span:nth-child(2) > a").attr("href"),
		cover: null,
		description: book.select("span:nth-child(3) > a").text(),
		host: "https://yushuwuy.com"
	}))
    return Response.success(listBook)
}