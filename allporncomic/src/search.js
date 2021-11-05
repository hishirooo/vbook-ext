function execute(key, page) {
    if(!page) page = "1"
    var doc = Http.get("https://allporncomic.com/page/" + page + "/?s="+ key +"&post_type=wp-manga&op&author&artist&release&adult")
    .headers({
        "authority": "allporncomic.com",
        "sec-ch-ua": "\"Chromium\";v=\"94\", \" Not A;Brand\";v=\"99\", \"Whale\";v=\"2\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "upgrade-insecure-requests": "1",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.118 Whale/2.11.126.23 Safari/537.36",
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "sec-fetch-site": "same-origin",
        "sec-fetch-mode": "navigate",
        "sec-fetch-user": "?1",
        "sec-fetch-dest": "document",
        "referer": "https://allporncomic.com",
        "accept-language": "en-US,en;q=0.9,vi;q=0.8,ko;q=0.7,ja;q=0.6",
        "cookie": "_ga=GA1.2.330496037.1635943635; _gid=GA1.2.827157916.1635943635; __cf_bm=v_tJasdo_6cOwrewtg8GNpSxBbKRsrMarhOJjD0Mh3s-1636126370-0-AdwjWTDw0Y1nf3OUmviI3TRVNllP+DjkA1KpWM3cw/8P5avL8P2iVsIniiB49ZEa8eXzPJscvFE5NlAQGUEyVM5OYThsuDu2ZB9duDNh/4oB2n1T3KgFTJA5UdK1dPnNEw=="
    }).html()
    //https://allporncomic.com/page/3/?s=schoolgirl&post_type=wp-manga&op&author&artist&release&adult

    var books = doc.select(".c-tabs-item .c-tabs-item__content")
    var listBook = []
    books.forEach(book => listBook.push({
        name: book.select(".post-title h3 a").text(),
        link: book.select(".post-title h3 a").attr("href"),
        cover: book.select(".c-image-hover img").attr("data-src"),
        description: book.select(".summary-content").first().select("a").text(),
        host: "https://allporncomic.com"           
    }))
    if (listBook.length == 0) next = ""; 
    else next = (parseInt(page) + 1).toString();
    return Response.success(listBook,next)
}