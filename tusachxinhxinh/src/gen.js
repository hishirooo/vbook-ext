function execute(url, page) {
    var genre = url.match(/the-loai.(.+)/)[1]
    if(!page) page="0"
    var doc = Http.post("https://tusachxinhxinh.com/wp-admin/admin-ajax.php")
    .params({
        "action": "madara_load_more",
        "page": page,
        "template": "madara-core/content/content-archive",
        "vars[wp-manga-genre]": genre,
        "vars[paged]": "1",
        "vars[meta_key]": "_latest_update",
        "vars[ignore_sticky_posts]": false,
        "vars[suppress_filters]": false,
        "vars[cache_results]": false,
        "vars[update_post_term_cache]": true,
        "vars[lazy_load_term_meta]": true,
        "vars[update_post_meta_cache]": true,
        "vars[post_type]": "wp-manga",
        "vars[posts_per_page]": 12,
        "vars[nopaging]": false,
        "vars[comments_per_page]": 50,
        "vars[no_found_rows]": false,
        "vars[taxonomy]": "wp-manga-genre",
        "vars[term]": genre,
        "vars[order]": "desc",
        "vars[orderby]": "meta_value_num",
        "vars[template]": "archive",
        "vars[sidebar]": "right",
        "vars[post_status]": "publish",
        "vars[meta_query][relation]": "OR",
    }).html();
    var listBook = []
    var books = doc.select(".page-item-detail .c-image-hover")
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