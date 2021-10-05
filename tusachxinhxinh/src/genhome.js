function execute(url, page) {
    //var genre = url.match(/the-loai.(.+)\//)[1]

    // khai bao params theo url-----------
    var orderby = "meta_value_num"
    var order = "desc"
    var meta_key = ""
    if(url=='latest'){ meta_key = "_latest_update" }
    else{
        if(url=='trending'){ meta_key = "_wp_manga_week_views_value" }
        else{
            if(url=='a-z'){
                orderby = "post_title"
                order = "ASC"
                meta_key = ""
            }
            else{
                if(url=='mostview'){
                    meta_key = "_wp_manga_views"
                    order = ""
                }
                else{
                    orderby = "date"
                    meta_key =""
                    order =""
                }
            }
        }
    }
    //------------
    if(!page) page="0"
    var doc = Http.post("https://tusachxinhxinh.com/wp-admin/admin-ajax.php")
    .params({
        "action": "madara_load_more",
        "page": page,
        "template": "madara-core/content/content-search",
        "vars[orderby]": orderby,
        "vars[paged]": "1",
        "vars[template]": "search",
        "vars[meta_query][0][relation]": "AND",
        "vars[meta_query][relation]": "OR",
        "vars[post_type]": "wp-manga",
        "vars[post_status]": "publish",
        "vars[meta_key]": meta_key,
        "vars[order]": order,
        "vars[manga_archives_item_layout]": "default"
    }).html();
    var listBook = []
    var books = doc.select(".c-tabs-item__content .c-image-hover")
    books.forEach(function(book){
        listBook.push({
            name: book.select("a").attr("title"),
            link: book.select("a").attr("href"),
            cover: book.select("img").attr("src"),
            description: "",
            host: "https://tusachxinhxinh.com"    
        })
    })
    if (listBook.length == 0) next = ""; 
    else next = (parseInt(page) + 1).toString();
    return Response.success(listBook,next)
}