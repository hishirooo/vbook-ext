function execute(url, page) {
    if(!page) page = "2"

    var listBook = []

    var doc = Http.get(url + page ).html()
    //var doc = Http.get(url).params({page: page}).string()
    var element = doc.select(".series-list > div.item")
    //Console.log(element.size())
    
    // for(var i in element){
    //     var book = element[i]
    //     listBook.push({
    //         name: book.select(".item-title").text(),
    //         link: book.select(".item-text a").attr("href").replace("https://bato.to",""),
    //         cover: book.select("img").attr("src"),
    //         description: book.select(".item-genre span").text().replace(/ /g,', '),
    //         host: "https://bato.to"      
    //     });
    // }
    element.forEach(book => listBook.push({
        name: book.select(".item-title").text(),
        link: book.select(".item-text a").attr("href").replace("https://bato.to",""),
        cover: book.select("img").attr("src"),
        description: book.select(".item-genre span").text().replace(/ /g,', '),
        host: "https://bato.to"      
    }))


    if (listBook.length == 0) next = ""; 
    else next = (parseInt(page) + 1).toString();

    return Response.success(listBook,next)
}

//https://bato.to/series/84900/the-flower-dances-and-the-wind-sings