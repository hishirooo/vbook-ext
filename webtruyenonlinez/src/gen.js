function execute(url, page) {
    //http://webtruyenonlinez.com/the-loai/do-thi.38/?page=4&type=view_count
    if(!page) page = "1"
    if(url.indexOf('page')== -1){
        // genre  url : the-loai/ngon-tinh.23/
        Console.log("A")
        var doc =  Http.get("http://webtruyenonlinez.com/" + url + "?page=" + page + "&type=view_count").html()
    }
    else{
        // home  url : http://webtruyenonlinez.com/truyen-moi-cap-nhat/?page=
        Console.log("B")
        var doc = Http.get(url + page).html()
    }
    var listBook =[]
    var books = doc.select(".pageContent .cat-item")
    
    books.forEach(function(book){
        var status = ""
        listBook.push({
            name: book.select(".book-cat-name a").text(),
            link: book.select(".book-cat-name a").attr("href"),
            cover: book.select("img").attr("src"),  //http://webtruyenonlinez.com/media/posters/c_n_lu_n.jpeg
            description: book.select(".col-md-8 p").toString(),//.match(/(Chương : (\d+)[\/NA|<span]).+(Lượt xem : ([^<]+))/),
            host: "http://webtruyenonlinez.com"    
        })
    })

    return Response.success(listBook)
}