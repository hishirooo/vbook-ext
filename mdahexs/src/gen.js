function execute(url, page) {

    if(!page) page = "1"
    var newUrl =  ""
    if(url.indexOf('full')!=-1){
        //https://m.dahexs.net/full/
        newUrl = url + "/" + page + "/"
    } 
    else{
        //https://m.dahexs.net/top/lastupdate_
        newUrl = url + page + "/"
    }
    var doc = Http.get(newUrl).html()
    var books = doc.select(".user_content .content_link")

    var listBook = []
    books.forEach(book => listBook.push({
        name: book.select(".p2 a").text(),
        link: book.select(".p2 a").attr("href"),
        cover: "",
        description: book.select(".p3 a").text(),
        host: "https://m.dahexs.net"
    }))
    if (listBook.length == 0) next = ""; 
	else next = (parseInt(page) + 1).toString();
    return Response.success(listBook,next)
}
// https://m.dahexs.net/332_332683