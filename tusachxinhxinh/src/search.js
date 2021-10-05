function execute(key, page) {
    if(!page) page = "0"

    var doc = Http.post("https://tusachxinhxinh.com/wp-admin/admin-ajax.php").params({
        "action": "madara_load_more",
        "page": page,
        "template": "madara-core/content/content-search",
        "vars[s]": key,
        "vars[paged]": "1",
        "vars[template]": "search",
        "vars[meta_query][0][relation]": "AND",
        "vars[meta_query][relation]": "OR",
        "vars[post_type]": "wp-manga",
        "vars[post_status]": "publish",
        "vars[manga_archives_item_layout]": "default",
    }).html()
    var listBook = []
    var books = doc.select(".c-image-hover")
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