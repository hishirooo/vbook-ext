function execute(key, page) {

	if(!page) page = "1"
    var doc = Http.get("https://mangapl.com/page/"+ page +"/")
    .params({
    	"s" : key,
    	"post_type" : "wp-manga"
    }).html()

    var books = doc.select(".c-tabs-item__content")
    var listBook = []
    
    for(var i in books){
    	var book = books[i]
  
    	listBook.push({
        name: book.select(".h4 a").text(),
        link: book.select(".h4 a").attr("href"),
        cover: book.select(".c-image-hover img").attr("data-src"),
        description: book.select(".tab-meta .chapter a").text(),
        host: "https://mangapl.com"      
        });
    }

    if (listBook.length == 0) next = ""; 
    else next = (parseInt(page) + 1).toString();

    return Response.success(listBook,next)
}