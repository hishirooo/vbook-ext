function execute(url, page) {
    if(!page) page="1"
    if(url.indexOf('status')!=-1){
        var doc = Http.get(url + "&page=" + page).html()
        //Console.log("a")
    }
    else{
        var doc = Http.get(url + "?page=" + page).html()
        //Console.log(url + "?page=" + page)        
    }

    var books = doc.select(".items .item")
    var listBook = []
    for(var i in books){
        var book = books[i]
        Console.log(book)
        listBook.push({
            name: book.select("h3 a").text(),
            link: book.select("h3 a").attr("href"),
            cover: book.select(".image img").attr("data-original"),
            description: book.select("li.chapter a").attr("title") + ", "+ book.select(".chapter .time").first().text(),
            host: "https://ja.mangatoro.com"
        });  
    }
    if (listBook.length == 0) next = ""; 
    else next = (parseInt(page) + 1).toString()
    return Response.success(listBook,next)
}