function execute(url) {
    var request = Http.get(url);
    var doc = request.html();
    var dataChapterId = doc.select("#dataChapterId").attr("value");
    var json = Http.post("https://otakusan.net/Manga/UpdateView")
        .params({ "chapId": dataChapterId })
        .headers({ 
            "cookie": request.cookie(),
            "referer": url
        })
        .string();
    var linkImage = JSON.parse(json).view.split(',')
    var listLinkImage = []

    for(var i in linkImage){
        var link = linkImage[i].match(/(http.+[jpg|png])/)[0]
        if(link.search('blogtruyen')>0)
            link = "https://image.otakuscan.net/api/Value/ImageSyncing?url=" + link;
        listLinkImage.push(link)
    }

    return Response.success(listLinkImage);
}

// function execute(url){
//     var doc =  Http.get(url).html()
//     var el = doc.select("#chapter-container #rendering div.image-wraper")
//     var list_image = []
//     for(var i = 0; i < el.size(); i++){
//         var e = el.get(i)
//         list_image.push(e.select("img").attr("src"))

//     }
//     return Response.success(list_image)
// }

//https://image3.otakusan.net/Extend5/Manga/61996/c874ee37-3731-46ce-9e33-05582b421f13_size_900x720.jpg
// https://image3.otakusan.net/Extend5/Manga/61996/c874ee37-3731-46ce-9e33-05582b421f13_size_900x720.jpg