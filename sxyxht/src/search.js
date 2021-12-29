function execute(key, page) {
    var doc= fetch("https://m.sxyxht.com/home/search", {
    "method": "POST",
    "headers": {
        "authority": "m.sxyxht.com",
        "cache-control": "max-age=0",
        "sec-ch-ua": "\"CocCoc\";v=\"95\", \"Chromium\";v=\"95\", \";Not A Brand\";v=\"99\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "upgrade-insecure-requests": "1",
        "origin": "https://m.sxyxht.com",
        "content-type": "application/x-www-form-urlencoded",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.84 Safari/537.36",
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "sec-fetch-site": "same-origin",
        "sec-fetch-mode": "navigate",
        "sec-fetch-user": "?1",
        "sec-fetch-dest": "document",
        "referer": "https://m.sxyxht.com/home/search",
        "accept-language": "vi,fr-FR;q=0.9,fr;q=0.8,en-US;q=0.7,en;q=0.6",
        "cookie": "Hm_lvt_3e06ef77a076a231f7202874f48e5e9a=1640786836; PHPSESSID=uqf61rp609d0v5pkme7t8d5pev; Hm_lpvt_3e06ef77a076a231f7202874f48e5e9a=1640786979"
    },
    "body": {
        "action": "search",
        "q": key
    }
    }).html()
    var books=doc.select(".ptm-card").last().select(".ptm-card-content .ptm-list-view-cell")
    var listBook=[]
    books.forEach(book => listBook.push({
        name: book.select(".imgarea > a").attr("title"),
        link: book.select(".imgarea > a").attr("href"),
        cover: book.select(".imgarea > a img").attr("src"),
        description: book.select(".ptm-img-body .pt-name a").text(),
        host: "https://m.sxyxht.com"                  
    }))
    return Response.success(listBook)
    //return Response.success(books)
}