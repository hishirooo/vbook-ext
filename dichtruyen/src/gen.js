function execute(url, page) {
	if(!page) page = "1"
	var doc =  Http.get(url + "/page-" + page + "/").html()
    
	var books =  doc.select(".m_l_col .mcol_ct > .mcol_pos")
	var listBook = []

	books.forEach(book => listBook.push({
		name: book.select(".tss_e a").attr("title"),
		link: book.select(".tss_e a").attr("href"),
		cover: book.select(".img_load .img_link").attr("data-bg"),
		description: book.select(".ct_info span").first().text(),
		host: "https://dichtruyen.org"
	}))

	if (listBook.length == 0) next = ""; 
	else next = (parseInt(page) + 1).toString();

	return Response.success(listBook,next)

}

//https://dichtruyen.org/truyen/18099-cong-chua-be-bong/

// https://dichtruyen.org/truyen/6385-thu-ky-cua-alexandros-dai-de/