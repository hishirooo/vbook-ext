function execute(url) {
    var doc = Http.get(url).string();

    // if (doc){
    //     var list_chapter = [];
    var idBook = doc.match(/href.+p=(\d+)/)[1]
    var docChapters = Http.post("https://tusachxinhxinh.com/wp-admin/admin-ajax.php").params({
        "action":"manga_get_chapters",
        "manga": idBook
    }).html()

    var  list_chapter = []
    var  chapters = docChapters.select(".version-chap li a")
    Console.log(chapters.size())
    for(var i = chapters.size()-1 ; i>=0 ; i--){
        var chapter = chapters[i]
        list_chapter.push({
            name: chapter.text(),
            url: chapter.attr("href"),
            host: "https://tusachxinhxinh.com"
        });
    }
    return Response.success(list_chapter);
}
    