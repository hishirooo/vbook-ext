function execute(url) {
    var doc = Http.get(url + "/").html()
    var chapters =  doc.select(".list-chapter .table-row .chapter a")
    var listChapter =  []

    for(var i=chapters.size()-1;i>=0; i--){
        listChapter.push({
            name: chapters[i].text(),
            url: chapters[i].attr("href"),
            host: "https://dichtruyen.org"
        })
    }

    return Response.success(listChapter)
}