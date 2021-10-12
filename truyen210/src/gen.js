   
function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get(url + page ).html()

    var books = doc.select(".category-content .manga-list ul")[0].select("li")

    var listBook = [];

    books.forEach(book => listBook.push({
        name: book.select(".manga-thumb img").attr("alt"),
        link: book.select(".manga-info h3 a").attr("href"),
        cover: book.select(".manga-thumb img").attr("data-original"),
        description: book.select(".box-manga-info a").text() + ", " + book.select(".box-manga-info .time").text(),
        host: "https://truyen210.net/"
    }))

    if (listBook.length == 0) next = ""; 
    else next = (parseInt(page) + 1).toString();
    return Response.success(listBook, next)
}