function execute(url) {
    var newURL=""
    var count = (url.replace("https://manhwas.men/","").match(/\//g) || []).length
    if(count=="2") // mangalist
    {
        newURL= url.replace(url.split("/").pop(),"")
    }
    else
        newURL = url + "/"
    var doc = Http.get(newURL).html()
    var chapters = doc.select(".wp-manga-chapter a")
    var listChapter = []
    chapters.forEach(chap => listChapter.push({
        name: chap.select("p").text(),
        url: chap.attr("href"),
        host: "https://manhwas.men"   
    }))
    return Response.success(listChapter.reverse())
}