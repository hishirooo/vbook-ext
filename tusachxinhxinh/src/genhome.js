function execute(url, page) {
    //col-md-9
    if(!page) page="1"
    
    if(url=='latest'){
        var doc = Http.get('https://tusachxinh.info/page/'+page+'/').html()
        var books = doc.select('.col-md-9 .comic-item-box').map(book=>({
            name: book.select("a").attr("title"),
            link: book.select("a").attr("href"),
            cover: book.select("img").attr("src"),
            description: "View: " + book.select(".follow-count").attr("title"),
            host: "https://tusachxinh.info"  
        }))
        if (books.length == 0) next = ""; 
        else next = (parseInt(page) + 1).toString();
        return Response.success(books,next)
        
    }else{
        if(url=='a-z')
            var doc = Http.get('https://tusachxinh.info/danh-sach-truyen/page/'+page+'/').html()
        if(url=='hot')
            var doc = Http.get('https://tusachxinh.info/truyen-hot-nhat/').html()
        if(url=='mostview')
            var doc = Http.get('https://tusachxinh.info/nhieu-xem-nhat/').html()
        else
            var doc = Http.get('https://tusachxinh.info/tron-bo/').html()
        var books = doc.select('.comic-list-page .most-views .position-relative ').map(book=>({
            name: book.select("img").attr("alt"),
            link: book.select(".super-title a").attr("href"),
            cover: book.select("img").attr("src"),
            description: "View: " + String(book.select(".cat-score")).match(/fas fa-eye\"><\/span> (.+) <span class=\"fas fa-bookmark/)[1],//.attr("title"),
            host: "https://tusachxinh.info"  
        }))
        
    }
    return Response.success(books)
    // books.forEach(function(book){
    //     listBook.push({
    //         name: book.select("a").attr("title"),
    //         link: book.select("a").attr("href"),
    //         cover: book.select("img").attr("src"),
    //         description: "",
    //         host: "https://tusachxinh.info"    
    //     })
    // })
    // if (listBook.length == 0) next = ""; 
    // else next = (parseInt(page) + 1).toString();
    // return Response.success(listBook,next)
}