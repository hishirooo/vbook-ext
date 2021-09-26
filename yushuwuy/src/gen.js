function execute(url,page) {
    if(!page) page = "1"
    var doc = Http.get(url + "_" + page).html();

    var gen = [];
    // lấy page trong index select cuối cùng. trả về là mảng.
    var next = doc.select("#indexselect option").last().text().match(/第(\d+)页/)[1];
    next = parseInt(next)
    if(doc){
        var all_book = doc.select(".common-bookele");
        
        for(var i in all_book){
            Console.log(all_book.size())
            var book = all_book[i];
            //Console.log(book.select("h3 a").attr("href"))
            gen.push({
                name: book.select("h3 a").text(),
                link: book.select("h3 a").attr("href"),
                cover: "https://i.imgur.com/FbaKQ0k.jpg",
                description: book.select(".lastupdate").text(),
                host: 'https://yushuwuy.com'
            });
        }
        return Response.success(gen,next);
    }
}