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
<<<<<<< HEAD
            detail: "Status: "+ detail.status +"\n\nChapter: "+ detail.chapter_count,  
=======
            detail:"Total chapter "+ detail.chapter_count,  
>>>>>>> parent of 44a23e7 (add Chapter)
        });        
    }
} 
//oki
