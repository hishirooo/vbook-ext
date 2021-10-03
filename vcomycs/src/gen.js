function execute(url, page) {
    if(!page) page = "1"
    var listBook = []
    if(url.indexOf('page')!=-1){
        // https://vcomycs.com/page/2/
        var doc = Http.get(url + "/" + page).html()
        var books = doc.select(".comic-list .comic-item-box")
        for(var i in books){
            var book = books[i]
            listBook.push({
                name: book.select(".comic-img a").attr("title"),
                link: book.select(".comic-img a").attr("href").replace("https://vcomycs.com",""),
                cover: book.select(".comic-img img").attr("src"),
                description: "Views: " + book.select(".keywords-scroller span").get(1).text() + ", " + "Follow: " + book.select(".follow-count").text(),
                host: "https://vcomycs.com"      
            });
        }
        if (listBook.length == 0) next = ""; 
        else next = (parseInt(page) + 1).toString();
        return Response.success(listBook,next)
    }
    else{
        var doc = Http.get(url).html()
        if(url.indexOf('nhat')!=-1||url.indexOf('the-loai')!=-1){

            //https://vcomycs.com/nhieu-xem-nhat/
            //https://vcomycs.com/truyen-hot-nhat/

            var books = doc.select(".single-list-comic li")
            for(var i in books){
                var book = books[i]
                listBook.push({
                name: book.select("img").attr("alt"),
                link: book.select("a").attr("href").replace("https://vcomycs.com",""),
                cover: book.select("img").attr("src"),
                description: "Views: " + book.select(".cat-score").text().split(' ')[0] + ", " + "Follow: " + book.select(".cat-score").text().split(' ')[1],
                host: "https://vcomycs.com"      
                });
            }
        }
        else{
            //https://vcomycs.com/  --- hot tháng 
            
            var books = doc.select(".comic-carousel-item")
            for(var i in books){
                var book = books[i].select("a").first()
                listBook.push({
                name: book.attr("title"),
                link: book.attr("href").replace("https://vcomycs.com",""),
                cover: book.select("img").attr("data-src"),
                description: "",
                host: "https://vcomycs.com"      
                });
            }
        }
        return Response.success(listBook)
    }
}
// https://vcomycs.com/truyen-tranh/lai-mot-lan-nua-huong-ve-anh-sang/