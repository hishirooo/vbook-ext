function execute(url, page) {
    if(!page) page = "1"
    var doc = Http.get(url + "/page/" + page).html()
    var listBook = []
    if(url.indexOf('moi-cap-nhat')!=-1){
        var books = doc.select(".wrap_update .update_item")
        books.forEach(book => listBook.push({
            name: book.select(".update_image a").attr("title"),
            link: book.select(".update_image a").attr("href"),
            cover: book.select(".update_image img").attr("src"),
            description: book.select("> a")[0].attr("title").match(/(chap.+)/)[1] + ", " + book.select("h3 em").text(),
            host: "https://truyendep.net"
        }))
    }
    else{
        var books = doc.select(".danh_sach .update_item")
        books.forEach(book => listBook.push({
            name: book.select("> a").attr("title"),
            link: book.select("> a").attr("href"),
            cover: book.select("> a img").attr("src"),
            description: String(book.select("> .item2_theloai a")).replace(/<[^>]+>/g,'').replace(/\n/g,', '),
            host: "https://truyendep.net"
        }))
    }
    if (listBook.length == 0) next = ""; 
	else next = (parseInt(page) + 1).toString();
    return Response.success(listBook,next)
}

// link genre : https://truyendep.net/adult/
// link rq : https://truyendep.net/adult/page/
// link home : https://truyendep.net/top-view/