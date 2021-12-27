function execute(url) {

    var idBook = url.match(/(\d+)/)[0];

    var page = "1";
    var doc = Http.get("https://yushuwuy.com/indexlist/" + idBook + "/" + page).html();
    var list_chapter =[];
    var all_chapter = doc.select("#jsList1 li a")
    var num_page = doc.select("#pagelink option")
    var total_page =num_page.size()
    // Console.log(num_page)
    // for(var i in all_chapter){
    //     var e = all_chapter[i];

    //     list_chapter.push({
    //         name: e.text(),
    //         url: e.attr("href"),
    //         host: "https://yushuwuy.com"
    //     })
    // }
    all_chapter.forEach(e=>list_chapter.push({
            name: e.text(),
            url: e.attr("href"),
            host: "https://yushuwuy.com"
    }))
    if(total_page>1){
        for(var j = 2; j <= total_page; j++){

            var page2 = parseInt(j)
            var doc2 = Http.get("https://yushuwuy.com/indexlist/" + idBook + "/" + page2).html();
            var all_chapter2 = doc2.select("#jsList1 li a")

            // for(var i2 in all_chapter2){
            //     var e2 = all_chapter2[i2];

            //     list_chapter.push({
            //         name: e2.text(),
            //         url: e2.attr("href"),
            //         host: "https://yushuwuy.com"
            //     })
            // }
            all_chapter2.forEach(e2=>list_chapter.push({
                    name: e2.text(),
                    url: e2.attr("href"),
                    host: "https://yushuwuy.com"
            }))                
        }
    }
    return Response.success(list_chapter);
}