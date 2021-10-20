function execute(url, page) {
    var doc = Http.get("https://www.51txt.cc/").html()

    var listBook = []

    var books = doc.select(url).select("a")
    if(url==".lastupdate"){
        books.forEach(book => listBook.push({
            name: book.select("span em")[1].text(),
            link: book.select("a").attr("href"),
            cover: "",
            description: book.select("span em")[2].text(),
            host: "https://www.51txt.cc"
        }))
    }
    else{
        books.forEach(book => listBook.push({
            name: book.select("span")[0].text(),
            link: book.select("a").attr("href"),
            cover: "",
            description: "Author: "+ book.select(".gray").text(),
            host: "https://www.51txt.cc"
        }))
    }
    

    return Response.success(listBook)
}