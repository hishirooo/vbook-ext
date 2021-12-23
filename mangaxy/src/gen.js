function execute(url, page) {
    if(!page) page = "1"
    var doc = Http.get(url + page).html()
    var element = doc.select("#tblChap .thumb")
    //return Response.success(element)
    var listBook = []

    element.forEach(book=>{
        var checkCover = book.select("img").attr("style")
        if(checkCover.indexOf('jpg')!=-1|checkCover.indexOf('png')!=-1|checkCover.indexOf('jpeg')!=-1)
            cover = checkCover.match(/image: url\('\/\/(.+)\'\)/)[1]
        else
            cover = "i.imgur.com/FbaKQ0k.jpg"
        listBook.push({
            name: book.select("a.name").text(),
            link: book.select("a.name").attr("href").replace("https://nhomdich.com",""),
            cover: "https://" + cover,
            description: book.select("a.chap").text().replace("C MỚI","Chapter:"),
            host: "https://nhomdich.com"      
        });
    })
    return Response.success(listBook)
}