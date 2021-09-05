function execute(url) {
    //https://jpmtl.com/books/296
    const idBook = url.match(/\d+/)[0];
    var doc = Http.get("https://jpmtl.com/v2/book/"+ idBook).string();
    var detail = JSON.parse(doc);
    if(detail){
        return Response.success({
            name: detail.title,
            cover: detail.cover ,
            host: "https://jpmtl.com",
            author: detail.author,
            description: detail.synopsis,
            detail: "Status: "+ detail.status +"\\nChapter: "+ detail.chapter_count,  
        });        
    }
} 
//oki
