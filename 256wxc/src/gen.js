function execute(url, page) {
    if(!page) page = "1"
    if (page === "1"){
        var doc = Http.get(url).html()
    }else{
        var doc = Http.get(url +"index_"+ page +".html").html()
    }
    var element = doc.select(".main_left header")
    var listBook = []
    element.forEach(book=> listBook.push({
        name: book.select("h3").text(),
        link: book.select("h3 a").attr("href"),
        cover: "https://i.imgur.com/FbaKQ0k.jpg",
        description: null,
        host: "https://www.256wenku.com"     
    }))
    if (listBook.length == 0) next = ""; 
    else next = (parseInt(page) + 1).toString();

    return Response.success(listBook,next)
}