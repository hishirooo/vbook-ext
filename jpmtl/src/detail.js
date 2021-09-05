function execute(url) {
    //https://jpmtl.com/books/296
    const idBook = url.match(/\d+/)[0];
    var doc = Http.get("https://jpmtl.com/v2/book/"+ idBook).string();
    var book_detail = JSON.parse(doc);
    if(book_detail){
        return Response.success({
            name: book_detail.title,
            cover: book_detail.cover ,
            host: "https://jpmtl.com",
            author: book_detail.author,
            description: book_detail.synopsis, 
            detail: "Author: "+ book_detail.author + "<br>Chapter: "+ book_detail.chapter_count + "<br>Status: "+ book_detail.status,  
        });        
    }
} 
//oki
