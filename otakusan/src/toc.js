function execute(url) {//khi gửi đi nó clear mất /
    var doc = Http.get(url).html();
    //var idtruyen = url.match(/http.*book\/(\d+)/)[1];
    //Console.log(idtruyen);
    if (doc){
        var list_chapter = [];
        //var el = doc.select(".content div.fd-list_chapter").get(3).select('a')
        var el = doc.select("#chapter > table > tbody tr td a.thrilldown");
        for (var i = el.size()-1 ; i >= 0 ; i--) {
            var e = el.get(i);
            list_chapter.push({
                name: e.text(),
                url: e.attr("href"),
                //url: idtruyen+"/"+ e.attr("href"),
                host: "https://otakusan.net"
                //host: "https://www.xklxsw.com/book/"
            });
        }
    }
    return Response.success(list_chapter);
}