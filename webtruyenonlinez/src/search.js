function execute(key) {
    var doc = Http.get('http://webtruyenonlinez.com/tim-truyen/?keyword=' + key).html()

    var listBook = []

    var books = doc.select(".pageContent .cat-item")
    books.forEach(function(book){
        var info = book.select(".col-md-8 p").text().match(/Chương : (\d+)(\/|)(NA|Full|.(\d+)) Lượt xem : (.+)/)
        var status = info[3] == "Full" || info[3]== info[1] ? "Full" : "NA"
        listBook.push({
            name: book.select(".book-cat-name a").text(),
            link: book.select(".book-cat-name a").attr("href"),
            cover: book.select("img").attr("src"),
            description: "Chapter: "+ info[1] + ", " + "Status: " + status + ", " + "Views: " + info[5].replace(',',''),
            host: "http://webtruyenonlinez.com"    
        })
    })
    //Console.log(listBook.length)
    return Response.success(listBook)
}