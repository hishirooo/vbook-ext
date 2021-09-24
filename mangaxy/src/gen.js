function execute(url, page) {
    if(!page) page = "1"
    var doc = Http.get(url + page).html()
    var element = doc.select("#tblChap .thumb")
    var listBook = []
    for(var el in element){
        var book = element[el]
        var checkCover = book.select("img").attr("style")
        if(checkCover.indexOf('jpg')!=-1|checkCover.indexOf('png')!=-1|checkCover.indexOf('jpeg')!=-1)
            cover = checkCover.match(/image: url\('\/\/(.+)\'\)/)[1]
        else
            cover = ""
        listBook.push({
            name: book.select("a.name").text(),
            link: book.select("a.name").attr("href").replace("https://mangaxy.com",""),
            cover: "https://" + cover,
            description: book.select("a.chap").text().replace("C MỚI","Chapter:"),
            host: "https://mangaxy.com"      
        });
    }
    return Response.success(listBook)
}