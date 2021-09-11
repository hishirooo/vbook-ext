function execute(url,page) {
    if(!page) page = "1"
    var doc = Http.get(url + "_" + page).html();

    var gen = [];
    // lấy page trong index select cuối cùng. trả về là mảng.
    var next = doc.select("#indexselect option").last().text().match(/第(\d+)页/)[1];
    next = parseInt(next)
    if(doc){
        var all_book = doc.select("body#nr_body div").get(2).select("div");
        
        for(var i in all_book){
            var book = all_book[i];
            Console.log(book.select("h3 a").attr("href"))
            gen.push({
                name: book.select("h3 a").text(),
                link: book.select("h3 a").attr("href"),
                cover: "",
                description: book.select("span a").text(),
                host: 'https://yushuwuy.com'
            });
        }
        return Response.success(gen,next);
    }
}