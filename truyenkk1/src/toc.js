function execute(url) {
    var doc = Http.get(url + "/").html()
    var listchapter = []
    var idBook = doc.toString().match(/data-id="(.+)" data-slug/)[1]
    var docHtml = Http.post("https://truyenkkz.com/wp-admin/admin-ajax.php").params({
        "action": "all_chap",
        "id": idBook,
    }).html()
    if (docHtml.text().length < 1000) {
        docHtml = Http.post("https://truyenkkz.com/wp-admin/admin-ajax.php").params({
            "action": "user_chap_full",
            "id": idBook,
        }).html()
    }
    var chapters = docHtml.select("a")
    chapters.forEach(chap => listchapter.push({
        name: chap.text(),
        url: chap.attr("href").replace("../","https://truyenkkz.com/"),
        host: "https://truyenkkz.com"
    }))

    return Response.success(listchapter)

}