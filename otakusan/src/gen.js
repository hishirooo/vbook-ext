function execute(url, page) {
    if(!page) page = 1;
    var filter = url.match(/otakusan.net\/[A-Za-z].+\/(.+)Newest/)[1];

    var doc = Http.post(url).params({
        "Lang": "vn",
        "Page": page,
        "Type": "Include",
        "Dir": "NewPostedDate",
        "FilterCategory%5B0%5D": filter
    }).html()

    var listBook = [];

    var allBook = doc.select('.picture-card')
    for(var i in allBook){
        var book = allBook[i]
        listBook.push({
            name: book.select(".mdl-card__title img").attr("title"),
            link: book.select(".mdl-card__title a").attr("href"),
            cover: book.select(".mdl-card__title img").attr("src"),
            description: "",
            host: "https://otakusan.net"
        });
        
    }
    if (listBook.length == 0) next = ""; 
    else next = (parseInt(page) + 1).toString();

    return Response.success(listBook,next)
}

//https://otakusan.net/manga-detail/10455/voi-himeno-chan-thi-yeu-con-la-qua-som-do