function execute(url,page) {
    var idBook = url.match(/(\d+)/)[1]
    var requestUrl = url.replace('http://webtruyenonlinez.com','')
    if(!page) page ="-1"
    var doc = Http.post("http://webtruyenonlinez.com/index.php?truyen/fff.20982/get-chapters")
    .params({
        "book_id": idBook,
        "index": page,
        "type": "next",
        "_xfRequestUri": requestUrl,
        "_xfNoRedirect": "1",
        "_xfResponseType": "json",
    }).string()

    var json = JSON.parse(doc)
    var chapters = json.data

    var list_chapter = []
    chapters.forEach(chapter => list_chapter.push({
            name: chapter.name,
            url: url + "/chuong-" + chapter.chapter_index,
            host: "http://webtruyenonlinez.com"
        })
    )
    if (list_chapter.length == 0) next = ""; 
    else next = (parseInt(page) + 20).toString();

    return Response.success(list_chapter,next)
}