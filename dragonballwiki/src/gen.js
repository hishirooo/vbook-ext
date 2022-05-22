function execute(url, page) {

    //https://dragonballwiki.net/doctruyen/

    if(!page) page ="1"

    //if(url.indexOf('theloai')!=-1)

    var doc = Http.get("https://dragonballwiki.net/doctruyen/" + url + "?trang=" + page).html()
    var listBook = doc.select(".section-content .comic-item .media")
    var books = []
    listBook.forEach(book =>{
         books.push({
            name: book.select(".name").text(),
            link: book.select(".media-body a").attr('href'),
            cover: book.select(".media-left .image").attr('src').replace('https://dragonballwiki.net/doctruyen/wp-content/themes/truyenfull/timthumb.php?src=','').replace(/&.*/,''),
            description: book.select('.author').text(),
            host: 'https://dragonballwiki.net/doctruyen/'
        })
        
    })
    if (books.length == 0) next = ""; 
    else next = (parseInt(page) + 1).toString();
    return Response.success(books,next)
}