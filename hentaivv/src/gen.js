function execute(url, page) {
	if(!page) page = "1"
    var listBook = []
    var newUrl = ""
    if(url.indexOf("https")==-1){
        newUrl = "https://hentaivv.com/"
        if(url=="truyen-hot"){
            var doc = Http.get(newUrl).html()
            var books = doc.select("#hotest .hotest-col a")
            books.forEach(book => listBook.push({
                name: book.select("a").attr("title"),
                link: book.select("a").attr("href"),
                cover: book.select("img").attr("src"),
                description: book.select("p.crop-text-2").text(),
                host: "https://hentaivv.com"
            }))
            return Response.success(listBook)

        }
        else{
            var doc = Http.get("https://hentaivv.com/tim-kiem/page/" + page + "/").html()
            var books = doc.select(".theloai-thumlist li")
            books.forEach(book => listBook.push({
                name: book.select("a").attr("title"),
                link: book.select("a").attr("href"),
                cover: book.select("img").attr("data-src"),
                description: book.select(".content > p.crop-text-2").text(),
                host: "https://hentaivv.com"
            }))
            if (listBook.length == 0) next = ""; 
            else next = (parseInt(page) + 1).toString();
            return Response.success(listBook,next)
        }
    }
    else{
        newUrl = "https://hentaivv.com/wp-admin/admin-ajax.php"
        var action = "load_more_tax"
        var term_slug = url.match(/keyword\/(.+)/)[1]
        var doc = Http.post(newUrl)
        .params({
            "action" : action,
            "current_page_tax" : page,
            "term[slug]": term_slug,
        }).html()
        var books = doc.select("li")
        books.forEach(book => listBook.push({
            name: book.select("a").attr("title"),
            link: book.select("a").attr("href"),
            cover: book.select("img").attr("src"),
            description: book.select("p.crop-text-2").text(),
            host: "https://hentaivv.com"
        }))

        if (listBook.length == 0) next = ""; 
        else next = (parseInt(page) + 1).toString();
        return Response.success(listBook,next)
    }

    
}