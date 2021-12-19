function execute(url) {
	var doc = Http.get(url).html()
	var infoBook = doc.select(".wapper-content > div")
    return Response.success({
        name: infoBook.first().select(".headline h1").text(),
        cover: infoBook.first().select(".big-thumb img").attr("data-original"),
        host: "https://truyen210.net/",
        author: infoBook.first().select(".mt-author a").text(),
        description: "",
        ongoing : infoBook.select(".manga-col-item .col-full .meta-data").get(2).text().indexOf('Hoàn thành')>=0,
        detail: "Author: " + infoBook.select(".manga-col-item .col-full .meta-data").first().select("ul li a").text() + "<br>"
        + infoBook.select(".manga-col-item .col-full .meta-data").get(1).text() + "<br>"
        + infoBook.select(".manga-col-item .col-full .meta-data").get(2).text() + "<br>"
        + infoBook.select(".manga-col-item .col-full .meta-data").get(3).text() + "<br>"
        + "Genre: " + String(infoBook.select(".manga-col-item .col-full .meta-data").get(4)).replace(/(<[^>]+>)/g,'').trim().replace(/\n /g,',')
         
    })

}

// https://stackoverflow.com/questions/5612787/converting-an-object-to-a-string