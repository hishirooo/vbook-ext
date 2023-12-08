//load chương
//kelexsw
function execute(url) { //khi gửi đi nó clear mất /
    if (url.indexOf('m.kelexsw') != -1)
        url = url.replace('m.kelexsw', 'kelexsw')
    var doc = Http.get(url + '/').html();
    var idtruyen = url.match(/http.*book\/(\d+)/)[1];
    Console.log(idtruyen);
    if (doc) {
        var list = [];
        //var el = doc.select(".content div.fd-list").get(3).select('a')
        var el = doc.select(".content div.fd-list").get(3).select("span.item.chapter a");
        for (var i = 0; i <= el.size() - 1; i++) {
            var e = el.get(i);
            list.push({
                name: e.text(),
                url: "https://www.kelexsw.com/book/" + idtruyen + "/" + e.attr("href"),
                //url: idtruyen+"/"+ e.attr("href"),
                host: "https://www.kelexsw.com"
                //host: "https://www.xklxsw.com/book/"
            });

        }

    }
    return Response.success(list);
}

//Okie rồi đó chạy thử đi