function execute(key, page) {
    var books = fetch("https://dragonballwiki.net/doctruyen/wp-admin/admin-ajax.php?action=resultautosearch&key=" + key, {
        "method": "GET",
        "headers": {
            "authority": "dragonballwiki.net",
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9,vi;q=0.8,ko;q=0.7,ja;q=0.6,th;q=0.5",
            "cookie": "PHPSESSID=3bc72ba9c4b8cbf77551626ab3b0fce9; read_truyen=a%3A1%3A%7Bi%3A0%3Ba%3A1%3A%7Bs%3A0%3A%22%22%3Bi%3A22%3B%7D%7D",
            "referer": "https://dragonballwiki.net/doctruyen/",
            "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Whale\";v=\"3\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.151 Whale/3.14.134.62 Safari/537.36",
            "x-requested-with": "XMLHttpRequest"
        }
    }).html().select("ul a")

    var listbook = []

    books.forEach(book => listbook.push({
        name: book.attr('title'),
        link: book.attr('href'),
        cover: book.select('img').attr('src'),
        description: book.select('.comic-chapter').text(),
        host: 'https://dragonballwiki.net/doctruyen/'

    }))
    return Response.success(listbook)
}