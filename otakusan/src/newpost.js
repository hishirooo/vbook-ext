function execute(url, page) {
    if(!page) page = 1;
    //var filter = url.match(/otakusan.net\/[A-Za-z].+\/Newest/)[1];

    var doc = Http.post(url).params({
        "Lang": "vn",
        "Page": page,
        "Type": "Include",
        "Dir": "CreatedDate",
    }).html()

    var listBook = [];

    //var next = doc.select(".place-holder > form > input").get(1).attr("value");
    // var next = doc.select(".place-holder > form > input")
    // if(next!=null)
    //     next = (parseInt(page) + 1).toString()    

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