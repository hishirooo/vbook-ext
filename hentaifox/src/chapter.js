function execute(url) {
    var doc = Http.get(url + "/").string()
    var totalPage = parseInt(doc.match(/load_pages.+value="(\d+)"/)[1])
    var listImage = []
    //----load page 1
    //var newUrl = url.replace('gallery','g')
    //var doc = Http.get(newUrl + "/1/").html()
    var docHtml = Html.parse(doc)
    var imageS = docHtml.select("#append_thumbs .gallery_thumb a img")
    imageS.forEach(image => listImage.push(image.attr("data-src")))
    //-- loadmore image
    var u_id = url.match(/(\d+)/)[1]
    var g_id = doc.match(/id="load_id" value="(\d+)"/)[1]
    //return Response.success(totalPage)
    
    var loadmoreImage = Http.post("https://hentaifox.com/includes/thumbs_loader.php")
    .headers({
    "authority": "hentaifox.com",
    "sec-ch-ua": "\"Chromium\";v=\"94\", \" Not A;Brand\";v=\"99\", \"Whale\";v=\"2\"",
    "accept": "*/*",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "x-requested-with": "XMLHttpRequest",
    "sec-ch-ua-mobile": "?0",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Whale/2.11.126.19 Safari/537.36",
    "sec-ch-ua-platform": "\"Windows\"",
    "origin": "https://hentaifox.com",
    "sec-fetch-site": "same-origin",
    "sec-fetch-mode": "cors",
    "sec-fetch-dest": "empty",
    "referer": "https://hentaifox.com/gallery/88292/",
    "accept-language": "en-US,en;q=0.9,vi;q=0.8,ko;q=0.7,ja;q=0.6",
    "cookie": "_ga=GA1.2.366498071.1634128502; PHPSESSID=sr1g9opjvpaoa0lfhigmqnr5ev; _gid=GA1.2.1061720532.1635510205; _gat_gtag_UA_8082650_35=1"
    }).params({
        "u_id": u_id,
        "g_id": g_id,
        "img_dir": "003",
        "visible_pages": "10",
        "total_pages": totalPage,
        "type": "2"
    }).html()
    var imageS = loadmoreImage.select(".gallery_thumb a img")
    imageS.forEach(image => listImage.push(image.attr("data-src")))
    return Response.success(listImage)
}