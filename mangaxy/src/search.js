function execute(key, page) {
    if(!page) page = "1"
    var doc = Http.get("https://mangaxy.com/search.php?andor=and&q=" + key + "&page="+ page + "&view=thumb&act=timnangcao&ajax=true").html()
    var listBook = []
    var element = doc.select(".thumb")
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
    if (listBook.length == 0) next = ""; 
    else next = (parseInt(page) + 1).toString();

    return Response.success(listBook,next)
}
    

//