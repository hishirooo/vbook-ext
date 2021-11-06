function execute(url, page) {
    
    var listBook = []
    if(url.indexOf('bl')!=-1){
        // genre
        if(!page) page = "0"
        var doc = Http.post("https://kocr.net/wp-admin/admin-ajax.php")
        .params({
            "action" : "madara_load_more",
            "page" : page,
            "template" : "madara-core/content/content-archive",
            "vars[orderby]" : "date",
            "vars[paged]" : "1",
            "vars[posts_per_page]" : "10",
            "vars[tax_query][0][taxonomy]" : "wp-manga-genre",
            "vars[tax_query][0][terms]" : url,
            "vars[tax_query][0][field]" : "slug",
            "vars[tax_query][relation]" : "OR",
            "vars[meta_query][0][relation]" : "AND",
            "vars[meta_query][relation]" : "AND",
            "vars[post_type]" : "wp-manga",
            "vars[post_status]" : "publish",
            "vars[sidebar]" : "full",
            "vars[manga_archives_item_layout]" : "simple",
        }).html()
        var books = doc.select(".row-eq-height .item-summary #custom-thumb")
        books.forEach(book => listBook.push({
            name: book.select("a").attr("title"),
            link: book.select("a").attr("href"),
            cover: book.select("img").attr("src"),
            description: "",
            host: "https://kocr.net"           
        }))

    }
    else{
        if(url=='listtruyen'){
            if(!page) page = "0"
            var doc = Http.post("https://kocr.net/wp-admin/admin-ajax.php")
            .params({
                "action" : "madara_load_more",
                "page" : page,
                "template" : "madara-core/content/content-archive",
                "vars[orderby]" : "meta_value_num",
                "vars[paged]" : "1",
                "vars[posts_per_page]" : "8",
                "vars[tax_query][relation]" : "OR",
                "vars[meta_query][0][relation]" : "AND",
                "vars[meta_query][relation]" : "AND",
                "vars[post_type]" : "wp-manga",
                "vars[post_status]" : "publish",
                "vars[meta_key]" : "_latest_update",
                "vars[order]" : "desc",
                "vars[sidebar]" : "right",
                "vars[manga_archives_item_layout]" : "simple"
            }).html()
            var books = doc.select(".row-eq-height .item-summary #custom-thumb")
            books.forEach(book => listBook.push({
                name: book.select("a").attr("title"),
                link: book.select("a").attr("href"),
                cover: book.select("img").attr("src"),
                description: "",
                host: "https://kocr.net"           
            }))
        }
        else{
            if(!page) page = "1"
            var doc = Http.get("https://kocr.net/page/" + page + "/?post_type=wp-manga&m_orderby=" + url).html()
            var books = doc.select(".page-item-detail")
            books.forEach(book => listBook.push({
                name: book.select(".c-image-hover a").attr("title"),
                link: book.select(".clm-custom a").attr("href"),
                cover: book.select(".c-image-hover img").attr("src"),
                description: "",
                host: "https://kocr.net"           
            }))
        }

        //https://kocr.net/page/2/?post_type=wp-manga&m_orderby=trending
    }
    if (listBook.length == 0) next = ""; 
    else next = (parseInt(page) + 1).toString();
    return Response.success(listBook,next)
}