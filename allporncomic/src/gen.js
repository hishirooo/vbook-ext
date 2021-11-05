function execute(url, page) {
    
    if(!page) page = "1"
    if(url.indexOf('http')!=-1){
        // https://allporncomic.com/porncomic-genre/big-breasts
        var doc = Http.get(url + "/page/"+ page + "/").html()
    }
    else{
        // https://allporncomic.com/porncomic/page/4/?m_orderby=new-manga
        var doc = Http.get("https://allporncomic.com/porncomic/page/" + page + "/?m_orderby=" + url).html()
    }
    var books = doc.select(".page-content-listing .page-item-detail > .item-thumb")
    var listBook = []
    books.forEach(book => listBook.push({
        name: book.select("a").attr("title"),
        link: book.select("a").attr("href"),
        cover: book.select("img").attr("data-src"),
        description: "",
        host: "https://allporncomic.com"                  
    }))
    if (listBook.length == 0) next = ""; 
    else next = (parseInt(page) + 1).toString();
    return Response.success(listBook,next)    
}