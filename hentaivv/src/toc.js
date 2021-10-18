function execute(url) {
    var doc = Http.get(url + "/").html()
    var checkListChapter = doc.select("#dsc")
    var listchapter = []
    if(checkListChapter!=""){
        var chapters = doc.select(".listchap li .crop-text a")
    }
    else{
        var idBook = doc.toString().match(/data-id="(.+)" data-slug/)[1]
        var docHtml = Http.post("https://hentaivv.com/wp-admin/admin-ajax.php").params({
            "action": "all_chap",
            "id": idBook
        }).html()
        var chapters = docHtml.select("a")
    }
    chapters.forEach(chap => listchapter.push({
        name: chap.text(),
        url: chap.attr("href"),
        host: "https://hentaivv.com"
    }))
    return Response.success(listchapter)

}