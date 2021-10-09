function execute(url,page) {
    var idBook = url.match(/(\d+)/)[1]
    var requestUrl = url.replace('http://webtruyenonlinez.com','')
    var doc = Http.post("http://webtruyenonlinez.com/index.php?truyen/fff.20982/get-chapters")
    .params({
        "book_id": idBook,
        "index": "-1",
        "type": "next",
        "_xfRequestUri": requestUrl,
        "_xfNoRedirect": "1",
        "_xfResponseType": "json",
    }).string()
    var json = JSON.parse(doc)
    var total  = json.total
    var chapters = json.data

    var listChapter = []
    // index : -1 ; 19 ; 39 ; 59 ;79
    chapters.forEach(chapter => listChapter.push({
            name: chapter.name,
            url: url + "/chuong-" + chapter.chapter_index,
            host: "http://webtruyenonlinez.com"
        })
    )
    for(var i=1;i<total/20;i++){
        page = i*20-1
        var doc = Http.post("http://webtruyenonlinez.com/index.php?truyen/fff.20982/get-chapters")
        .params({
            "book_id": idBook,
            "index": page,
            "type": "next",
            "_xfRequestUri": requestUrl,
            "_xfNoRedirect": "1",
            "_xfResponseType": "json",
        }).string()
        json = JSON.parse(doc)
        chapters = json.data
        chapters.forEach(chapter => listChapter.push({
        name: chapter.name,
        url: url + "/chuong-" + chapter.chapter_index,
        host: "http://webtruyenonlinez.com"
        })
        )
    }

    return Response.success(listChapter)    
}
    
