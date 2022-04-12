function execute(url, page) {
    if(!page) page = "1"
    if(parseInt(page)==1)
        url = url + ".html"
    else
        url = url + "_" + page + ".html"
    var doc = Http.get(url).html()
    
    //Console.log(url + index + page + ".html")
    var element = doc.select(".list li")
    //return Response.success(element)
    var listBook = []
    var rd = Math.floor(Math.random() * 100);
    Console.log(rd)
    // for(var el in element){
    //     var book = element[el]
    //     listBook.push({
    //             name: book.select("h2 a").text(),
    //             link: book.select("h2 a").attr("href").replace(/\d+.html/,""),
    //             cover: "https://i.imgur.com/FbaKQ0k.jpg",
    //             description: "",
    //             host: "https://www.256wxc.com"     
    //     })
    // }
    element.forEach(book=> listBook.push({
        name: book.select("h2 a").text(),
        link: book.select("h2 a").attr("href").replace(/\d+.html/,""),
        cover: "https://i.imgur.com/FbaKQ0k.jpg",
        description: "",
        host: "https://www.256wenku.com"     
    }))
    if (listBook.length == 0) next = ""; 
    else next = (parseInt(page) + 1).toString();

    return Response.success(listBook,next)
}