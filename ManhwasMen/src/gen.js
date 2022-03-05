function execute(url, page) {
    if(!page) page="1"
    var listBook = []
    if(url=="home"){
        var doc = Http.get("https://manhwas.men/").html()
        
        var books = doc.select(".hot-thumbnails .span3")
        books.forEach(book =>{
        listBook.push({
            name: book.select(".manga-name a").text(),
            link: book.select(".thumbnail").attr("href"),
            cover: book.select(".thumbnail img").attr("src"),
            description: book.select(".well").text(),
            host: "https://manhwas.men"    
            })
        })

        return Response.success(listBook)
    }
    else{
        var doc =  Http.get("https://manhwas.men/filterList?page=" + page + "&cat=&alpha=&sortBy=name&asc=true&author=&artist=&tag=").html()
        var books =  doc.select(".media")
        books.forEach(book =>{
        listBook.push({
            name: book.select(".media-heading strong").text(),
            link: book.select(".media-left a").attr("href"),
            cover: book.select("img").attr("src"),
            description: book.select(".media-body div").last().text().replace("#","Chapter: "),
            host: "https://manhwas.men"    
            })
        })
        if (listBook.length == 0) next = ""; 
        else next = (parseInt(page) + 1).toString();
        return Response.success(listBook, next)
    }
    //return Response.success(doc)
}