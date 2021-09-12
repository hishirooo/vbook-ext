function execute(url) {
    //贪欢（军婚）  https://yushuwuy.com/read/104136.html
    var doc = Http.get(url).html();
    var el = doc.select("body#nr_body")
    if (doc) {
        //return Response.success(doc.select(".info-holder .info div").get(0));
        return Response.success({
            name: el.select(".yzwHead .h_nav_items li").get(1).text(),
            cover: "",
            host: "https://yushuwuy.com",
            author: el.select("#novelMain .lb_fm table tbody tr td div").get(0).select("h2 a").text(),
            ///html/body/div[4]/div[3]/div/pre/p
            description: el.select("#novelMain div pre p"),//#novelMain > div:nth-child(4) > div
            detail: el.select("#novelMain .lb_fm table tbody tr td div").get(1).text()
            
        });

    }
    return null;
}