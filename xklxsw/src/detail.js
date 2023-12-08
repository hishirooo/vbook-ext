function execute(url) {
    if(url.indexOf('m.kelexsw')!=-1)
        url = url.replace('m.kelexsw','kelexsw')
    var doc = Http.get(url+"/").html();
    if (doc) {
        return Response.success({
            name: doc.select(".content .fd-list .bookimg img").attr("alt"),
            cover: doc.select(".content .fd-list .bookimg img").attr("data-original"),
            host: "https://www.kelexsw.com",
            author: doc.select(".content .fd-list").text().match(/作者：(.+?)\s字数/)[1],
            description: doc.select(".content .fd-list").text().match(/简介：(.*?)[。 |！]《/)[1],
            detail: "Author: " + doc.select(".content .fd-list").text().match(/作者：(.+?)\s字数/)[1]

        });

    }
    return null;
}

//Detail okie thì tới toc.js (CHô này có chú ý nhỏ là toc.js lấy link từ gen.js gưi tới detail.js để load chap luôn. Nên nhiều khi nó phần trang thì phải xử lý kiểu khác )