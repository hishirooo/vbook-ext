function execute(url, page) {
    if(!page) page = "1"
    var splitUrl = url.match(/(.+)(\d+)(.html)/)
    var newUrl = splitUrl[1] + page + splitUrl[3]
    var doc = Http.get(newUrl).html()

    var listBook = []

    var books = doc.select(".lastupdate a")
    books.forEach(book => listBook.push({
        name: book.select("span em")[1].text(),
		link: book.select("a").attr("href"),
		cover: "",
		description: book.select("span em")[2].text(),
		host: "https://www.51txt.cc"
    }))

    if (listBook.length == 0) next = ""; 
	else next = (parseInt(page) + 1).toString();

    return Response.success(listBook,next)
}
// https://www.51txt.cc/info/112461.html