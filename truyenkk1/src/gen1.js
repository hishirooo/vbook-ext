function execute(url, page) {
    if (!page) page = "1"
    var listBook = []
    var newUrl = "https://truyenkkz.com/wp-admin/admin-ajax.php"
    var action = "rank_bxh_truyen";
    if(url === "ticket"){
        action = "load_more_rank";
    }
    var doc = fetch(newUrl, {
        method: "POST",    // GET, POST, PUT, DELETE, PATCH
        body: {
            "action": action,
            "slug": "all",
            "time": "week",
            "type": url,
            "page": page,
        }
    }).html()
    var books = doc.select("h2")
    var imgs = doc.select("img")
    for (let i = 0; i < books.size(); i++) {
        let e = books.get(i);
        let e1 = imgs.get(i);
        listBook.push({
            name: e.select("h2 a").attr("title"),
            link: e.select("h2 a").attr("href"),
            cover: e1.select("img").attr("src"),
            host: "https://truyenkkz.com"
        })
    }
    if (listBook.length == 0) next = "";
    else next = (parseInt(page) + 1).toString();
    return Response.success(listBook, next)

}