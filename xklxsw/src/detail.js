function execute(url) {
    //var url_split=url.slice(0,url.length()-1);
    var doc = Http.get(url).html();
    if (doc) {
        return Response.success({
            name: doc.select(".content .fd-list .bookimg img").attr("alt"),
            cover: doc.select(".content .fd-list .bookimg img").attr("data-original"),
            host: "https://www.xklxsw.com",
            author: doc.select(".content .fd-list").text().match(/作者：(.+?)\s字数/)[1],
            //author: doc.select(".content .fd-list h1").text(),
            description: doc.select(".content .fd-list").text().match(/简介：(.*?)[。 |！]《/)[1]
            
        });
        //return Response.success(doc)
    }
    return null;
}

//Detail okie thì tới toc.js (CHô này có chú ý nhỏ là toc.js lấy link từ gen.js gưi tới detail.js để load chap luôn. Nên nhiều khi nó phần trang thì phải xử lý kiểu khác )