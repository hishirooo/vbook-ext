function execute(url, page) {

	var listBook = []

	if(url.indexOf('xem-nhieu')!=-1||url.indexOf('moi-cap-nhat')!=-1){
		var doc = Http.get("https://truyenconect.com/").html()
        var xem_nhieu = ".entry-content_wrap .c-page .grid9 .item"
        var moi_cap_nhat = ".c-tabs-item .page-listing-item .badge-pos-2"
        var textSelect = url.indexOf('xem-nhieu')!=-1 ? xem_nhieu : moi_cap_nhat
		var bookS = doc.select(textSelect)
		bookS.forEach(book =>listBook.push({
            name: book.select(".item-summary .post-title h3 a").text(),
            link: book.select(".item-summary .post-title h3 a").attr("href"),
            cover: book.select(".item-thumb a img").attr("data-src"),
            description: book.select(".item-summary meta").attr("content") + ",Genre: " + book.select(".item-summary .genres a").text(),
            host: "https://truyenconect.com"

		}))     
        return Response.success(listBook)
	}
	else{
        if(!page) page = "1"
        var doc = Http.get(url + page).html()
		if(url.indexOf('the-loai')!=-1){
            var bookS = doc.select(".row-eq-height .badge-pos-1")

            bookS.forEach(book => listBook.push({
                name: book.select(".item-summary .post-title h2 a").text(),
                link: book.select(".item-summary .post-title h2 a").attr("href"),
                cover: book.select(".item-thumb a img").attr("data-src"),
                description: book.select(".item-summary meta").attr("content"),
                host: "https://truyenconect.com"
            }))
		}
		else{
            var bookS = doc.select(".left-content .manga-chapters-listing tr")

            bookS.forEach(book => listBook.push({
                name: book.select("td").get(0).select("a img").attr("alt"),
                link: book.select("td").get(0).select("a").attr("href"),
                cover: book.select("td").get(0).select("a img").attr("data-src"),
                description:  String(book.select("td").get(1).select(".category")).replace(/<[^>]+>/g,'').trim().replace(/&nbsp;/g,'').replace(/\s{2,}\n/g,','),
                host: "https://truyenconect.com"
            }))
            return Response.success(listBook)
		}
        if (listBook.length == 0) next = ""; 
        else next = (parseInt(page) + 1).toString();
        return Response.success(listBook,next)
	}
    
}