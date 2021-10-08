function execute(url, page) {
    //http://webtruyenonlinez.com/the-loai/do-thi.38/?page=4&type=view_count
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
                host: "http://webtruyenonlinez.com"    
            })
        })
    }
    else{

        var doc = Http.get(url + page).html()
        var books = doc.select(".books-item")
        books.forEach(function(book){
            var genres = book.select(".index-genre a")//.replace(/\n/,',')
            var genre =""
            for(var i=0; i<genres.size(); i++){
                genre = i==genres.size()-1 ? genre + genres[i].text() + "." : genre + genres[i].text() + ", "
            }
            
            listBook.push({
                name: book.select("img").attr("alt"),
                link: book.select(".col-md-4 a").attr("href"),
                cover: book.select("img").attr("src"),  
                description: genre,
                host: "http://webtruyenonlinez.com"    
            })
        })
    }
    
    return Response.success(listBook)
}

//http://webtruyenonlinez.com/truyen/nam-than-o-phong-ben-canh.2630/