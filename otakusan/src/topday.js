function execute(url) {
    var doc = Http.get("https://otakusan.net/Home/ViewDailyRanking?region=vn").html()
    var listID = []
    var allID = doc.select(".rank")
    for(var i in allID){
        var id = allID[i].attr("data-super-id")
        listID.push({
        id: id,
        link: allID[i].attr("href").replace(/chapter\/\d+/,"manga-detail/"+id).replace(/-chap-(\d+)/,'')
        })
    }
    var listBook = []
    for(var bookID in listID){
        var getInfo = Http.get("https://otakusan.net/Manga/PopupDetail/" + listID[bookID].id ).html()

        listBook.push({
            name: getInfo.select(".header").text(),
            link: listID[bookID].link,
            cover: getInfo.select(".img-contain img").attr("src"),
            description: getInfo.select(".summary").text(),
            host: "https://otakusan.net",
            script: "chapter.js"
        });
    }
    return Response.success(listBook)
    
}


