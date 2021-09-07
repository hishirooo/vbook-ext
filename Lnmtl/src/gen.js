function execute(url,page) {
    if(!page) page="1";
    var doc = Http.get(url+ page).html();
    var bookList=[];

    if(doc){
        var allBook = doc.select(".container .media");
        Console.log(allBook.size());
        var next = doc.select(".container .text-center .pagination li a").last().attr("href").match(/page=(\d+)/);
        if (next) next = next[1];
        Console.log(next);
        for(var i=0; i < allBook.size(); i++){
            var e = allBook.get(i);
            bookList.push({
                name: e.select(".media-body h4 a").text(),
                link: e.select(".media-body h4 a").attr("href"),
                cover: e.select(".media-left img").attr("src"),
                description: "Author: " + e.select(".media-body p span").get(0).text()+"<br>"
                + "Genre: " + doc.select(".media-body ul").get(0).text(),
                host: "https://lnmtl.com"

            });
        }
         
    }
    return Response.success(bookList);   
}
//https://lnmtl.com/novel/library-of-heaven-s-path