function execute(url, page) {
    if(!page) page = "1"
    var url = "https://hentaifox.com/"
	if(page!="1"){
        if(page=="2")
            url = "https://hentaifox.com/page/2/"
        else
            url = "https://hentaifox.com/pag/" + page + "/"
    }
	//var doc = Http.get(url + page + "/").html()

        
    var doc = Http.get(url).html()
	var books = doc.select(".lc_galleries > div")
	var listBook = []
	books.forEach(book => listBook.push({
		name: book.select(".caption a").text(),
		link: book.select(".caption a").attr("href"),
		cover: book.select(".inner_thumb img").attr("src"),
		description: "",
		host: "https://hentaifox.com"
	}))
    if (listBook.length == 0) next = ""; 
    else next = (parseInt(page) + 1).toString();

    return Response.success(listBook,next)
}
//https://hentaifox.com/gallery/88707/