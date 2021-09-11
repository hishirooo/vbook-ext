function execute(url) {
    
    var doc = Http.get('https://yushuwuy.com').html();
    var tab = parseInt(url);
    var gentop = [];
    if(doc){
        var all_book = doc.select(".visit-top div.chapterList div").get(tab).select("ul");
        
        for(var i in all_book){
            var book = all_book[i];
            Console.log(book.select("li a").text())
            gentop.push({
                name: book.select("li a").text(),
                link: book.select("li a").attr("href"),
                cover: "",
                description: "Genre: " + book.select("li").text().match(/【(.+)】/)[1],
                host: 'https://yushuwuy.com'
            });
        }

        return Response.success(gentop);
    }
}