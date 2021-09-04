function execute(url, page) {
    
    if(!page) page = '1';
    var json = Http.get(url+page).string();//
    var item = null;
    if(!structured) item = JSON.parse(json).book;
    else item = item=JSON.parse(json);
    const bookList = [];
    for (var i in item) {
        var book = item[i];
        bookList.push({
            cover : book.cover,
            name : book.title,
            link: '/books/'+ book.id,
            //link: book.id,
            description: book.author,
            host: 'https://jpmtl.com'
        });
    }

    var next  = parseInt(page) + 1  // load next page
    return Response.success(bookList,next.toString());

} 