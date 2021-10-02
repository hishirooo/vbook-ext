function execute(key) {
    var doc = Http.get("https://ja.mangatoro.com/Comic/Services/SuggestSearch.ashx").params({q:key}).string()
    doc = Html.parse(doc)
    var element = doc.select("li")
    var listBook = []
    for(var i in element){
        var book = element[i]
        listBook.push({
            name: book.select("h3").text(),
            link: book.select("a").attr("href"),
            cover: book.select("img").attr("src"),
            description: "Last chapter: " + book.select("i").first().text(),
            host: "https://ja.mangatoro.com"
        });
        
    }

    return Response.success(listBook)
}