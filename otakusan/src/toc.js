function execute(url) {
    var doc = fetch(url).html();

    let listChapter = doc.select(".chapter-list tbody > .chapter").map(chapter => ({
        name: chapter.select(".read-chapter").get(1).select("a").attr("alt"),
        url: chapter.select(".read-chapter").get(1).select("a").attr("href"),
        host: "https://otakusan.net"
    }))
    return Response.success(listChapter);
}
//https://otakusan.net/chapter/1268234/voi-himeno-chan-thi-yeu-con-la-qua-som-do-chap-34