function execute(url, page) {
    if(!page) page = "1"
    var listBook = []
    if(url.indexOf('http')!=-1){
        // genre
        var doc = Http.get(url + page + ".html").html()
        var books = doc.select(".ptm-card")[1].select(".ptm-card-content ul li")
        //return Response.success(books)
        books.forEach(book => listBook.push({
            name: book.select(".pt-cover a").attr("title"),
            link: book.select(".pt-cover a").attr("href"),
            cover: book.select(".pt-cover a").select("img").attr("src"),
            description: book.select(".pt-author a")[0].text(),
            host: "https://m.sxyxht.com"                  
        }))
        if (listBook.length == 0) next = ""; 
        else next = (parseInt(page) + 1).toString();
        return Response.success(listBook,next)    

    }
    else{
        //home
        if(url=="moi-cap-nhat"){
            var doc = Http.get("https://m.sxyxht.com/").html()
            var books = doc.select(".ptm-content > .ptm-card")[4].select(".ptm-card-content > ul > li")
            books.forEach(book => listBook.push({
                name: book.select(".pt-cover > a").attr("title"),
                link: book.select(".pt-cover > a").attr("href"),
                cover: book.select(".pt-cover > a img").attr("src"),
                description: book.select(".pt-novel .pt-author")[1].select("a").attr("title"),
                host: "https://m.sxyxht.com"                  
            }))
            return Response.success(listBook)
        }
        else{
            if(url=="de-nghi"){
                var doc = Http.get("https://sxyxht.com/").html()
                var listHome = doc.select("#wrapper .container")
                var books = listHome[1].select(".details .item-img")
                books.forEach(book => listBook.push({
                    name: book.select("a")[0].select("img").attr("alt"),
                    link: book.select("a")[0].attr("href"),
                    cover: book.select("a")[0].select("img").attr("src"),
                    description: book.select("p").text(),
                    host: "https://m.sxyxht.com"                  
                }))
                return Response.success(listBook)
            }
            else{
                    var doc = Http.get("https://m.sxyxht.com/xiaoshuodaquan/page_"+ page + ".html").html()
                    var books = doc.select(".ptm-card")[1].select(".ptm-card-content ul li")
                    //return Response.success(books)
                    books.forEach(book => listBook.push({
                        name: book.select(".pt-cover a").attr("title"),
                        link: book.select(".pt-cover a").attr("href"),
                        cover: book.select(".pt-cover a").select("img").attr("src"),
                        description: book.select(".pt-author a")[0].text(),
                        host: "https://m.sxyxht.com"                  
                    }))
                    if (listBook.length == 0) next = ""; 
                    else next = (parseInt(page) + 1).toString();
                    return Response.success(listBook,next)                 
                }
            }
        }
        
    }
//https://m.sxyxht.com/dushu/16483/
