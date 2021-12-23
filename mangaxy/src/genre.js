function execute() {
    var doc = Http.get("https://nhomdich.com/").html()
    var element = doc.select(".megalist > ul.col4 a")
    //return Response.success(element)
    var listGenre = []
    // for(var el in element){
    //     var book = element[el]

    //     listGenre.push({
    //         title: book.text(),
    //         input: book.attr("href") + "page=",
    //         script: "gen.js"
    //     });
    // }
    element.forEach(book=>{
        listGenre.push({
            title: book.text(),
            input: book.attr("href") + "page=",
            script: "gen.js"
        });       
    })
    return Response.success(listGenre)
}
// https://mangaxy.com/search.php?andor=and&cat=71&page=3&view=thumb&act=timnangcao