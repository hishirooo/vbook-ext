function execute(url, page) {
    if(!page) page = "1"

    var listBook = []
    
    if(page=="1"){
        var doc = Http.get( url + page ).html()
        //var doc = Http.get(url).params({page: page}).string()
        var element = doc.select(".series-list > div.item")        
    }
    else{
        var doc = Http.get( url + page ).string()
        var html = JSON.parse(doc).res.html
        doc = Html.parse(html)
        var element = doc.select(".line-b")   
    }

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