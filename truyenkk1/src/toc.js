function execute(url) {
    var doc = Http.get(url + "/").html()
    var checkListChapter = doc.select("#dsc")
    var listchapter = []
    if(checkListChapter!=""){
        var phantrang = doc.select("#id_pagination")
        if(phantrang!=""){
            var totalPage = phantrang.select("li").size()-1
            var chapters = doc.select(".listchap li .crop-text a")
            //- page 1
            chapters.forEach(chap => listchapter.push({
                name: chap.text(),
                url: chap.attr("href"),
                host: "https://truyenkk1.com"
            }))    
            for( var i=2; i<=totalPage; i++){
                var docPage = Http.get(url + i +"/#dsc").html()
                var chapters2 = docPage.select(".listchap li .crop-text a")
                chapters2.forEach(chap2 => listchapter.push({
                name: chap2.text(),
                url: chap2.attr("href"),
                host: "https://truyenkk1.com"
            }))   
            }
            //return Response.success(totalPage)
        }
        else{
            var chapters = doc.select(".listchap li .crop-text a")
            chapters.forEach(chap => listchapter.push({
                name: chap.text(),
                url: chap.attr("href"),
                host: "https://truyenkk1.com"
            }))
        }
    }
    else{
        var idBook = doc.toString().match(/data-id="(.+)" data-slug/)[1]
        var docHtml = Http.post("https://truyenkk1.com/wp-admin/admin-ajax.php").params({
            "action": "all_chap",
            "id": idBook
        }).html()
        var chapters = docHtml.select("a")
        chapters.forEach(chap => listchapter.push({
            name: chap.text(),
            url: chap.attr("href"),
            host: "https://truyenkk1.com"
        }))
    }

    return Response.success(listchapter)

}