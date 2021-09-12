function execute(url) {

    var doc = Http.get(url).html();

    var lasted_update = [];

    if(doc){
        var all_book = doc.select(".s_m ul .last_li");
        
        for(var i in all_book){
            var book = all_book[i];
            //Console.log(all_book)
            lasted_update.push({
                name: book.select("a").text(),
                link: book.select("a").attr("href"),
                cover: "",
                description: book.select("div").text().match(/(作者：.+) (类型：.+) (时间：.+)/)[1] + "<br>" + 
                book.select("div").text().match(/(作者：.+) (类型：.+) (时间：.+)/)[2] + "<br>" + 
                book.select("div").text().match(/(作者：.+) (类型：.+) (时间：.+)/)[3],
                host: 'https://yushuwuy.com'
            });
        }
        return Response.success(lasted_update);
    }
}