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
    //return Response.success(JSON.parse(json).view)
    var linkImage = JSON.parse(json).view.split(',')
    
    var listLinkImage = []
    var link = ""
    if(linkImage[0].indexOf('ON')!=-1){
        var browser = Engine.newBrowser()
        browser.launch(url, 10000);

        browser.waitUrl(".*/ExtendContent.*[jpg|png|jpeg]?", 30000);
        //var urlRQ=browser.urls()
        var doc = browser.html()
        browser.close()
        var listLink =  doc.select("#rendering .image-wraper img.wide-pic")
        Console.log(listLink.size())
        for(var i in listLink){
            Console.log(listLink[i])
            var image = listLink[i].attr("src")
            listLinkImage.push(image)
        }
        //return Response.success(listLinkImage);

    }
    else{
        //Console.log("http")
        var str_sync ="https://image.otakuscan.net/api/Value/ImageSyncing?url="
        for(var i in linkImage){
            if(linkImage[i].indexOf('http')!=-1)
                link = linkImage[i].match(/(http.+[jpg|png|jpeg])/)[0]
            // if(linkImage[i].indexOf('ON')!=-1)
            //     link = str_sync + linkImage[i].match(/.ON(\d+).+[jpg|png|jpeg]/)[0]
            if(link.search('blogtruyen')>0)
                link = str_sync + link;
            listLinkImage.push(link)
        }
    }
    return Response.success(listLinkImage);
}
