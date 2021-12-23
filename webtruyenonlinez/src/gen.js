function execute(url, page) {

    if(!page) page = "1"

    var listBook =[]

    if(url.indexOf('page')== -1){
        var doc =  Http.get("http://webtruyenonlinez.com/" + url + "?page=" + page + "&type=view_count").html()
        var books = doc.select(".pageContent .cat-item")

        books.forEach(function(book){
            var info = book.select(".col-md-8 p").text().match(/Chương : (\d+)(\/|)(NA|Full|.(\d+)) Lượt xem : (.+)/)
            var status = info[3] == "Full" || info[3]== info[1] ? "Full" : "NA"
            listBook.push({
                name: book.select(".book-cat-name a").text(),
                link: book.select(".book-cat-name a").attr("href"),
                cover: book.select("img").attr("src"),
                description: "Chapter: "+ info[1] + ", " + "Status: " + status + ", " + "Views: " + info[5].replace(',',''),
                host: "http://webtruyenonlinez.com/"    
            })
        })
    }
    else{

        var doc = Http.get(url + page).html()
        
        var books = doc.select(".books-item")
        books.forEach(function(book){
           
            listBook.push({
                name: book.select("img").attr("alt"),
                link: book.select(".col-md-4 a").attr("href"),
                cover: book.select("img").attr("src"),  
                description: book.select(".index-author").text(),
                host: "http://webtruyenonlinez.com/"    
            })
        })
    }
    if (listBook.length == 0) next = ""; 
    else next = (parseInt(page) + 1).toString();
    return Response.success(listBook,next)
}

//http://webtruyenonlinez.com/truyen/nam-than-o-phong-ben-canh.2630/