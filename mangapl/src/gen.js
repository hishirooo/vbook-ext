function execute(key, page) {
    if(!page) page = "1"
    if(key.indexOf('mangapl')>-1)
        var url = key + page
    else
        var url = "https://mangapl.com/manga/page/" + page + "/?m_orderby=" + key

    var doc = Http.get(url).html()
    var element = doc.select(".page-item-detail")

    var listBook = []

    for(var i in element){
        var book = element[i]
        listBook.push({
            name: book.select(".h5 a").text(),
            link: book.select(".h5 a").attr("href").replace("https://mangapl.com",""),
            cover: book.select(".item-thumb a img").attr("data-src"),
            description: book.select(".chapter").get(0).select("a").text(),
            host: "https://mangapl.com"      
        });
    }
    if (listBook.length == 0) next = ""; 
    else next = (parseInt(page) + 1).toString();
    return Response.success(listBook,next)
}
// https://mangapl.com/manga/fitness-uncensored/