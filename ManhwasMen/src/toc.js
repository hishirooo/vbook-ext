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
    var chapters = doc.select(".chapters li .chapter-title-rtl")
    var listChapter = []
    chapters.forEach(chap => listChapter.push({
        name: chap.select("a").text(),
        url: chap.select("a").attr("href"),
        host: "https://manhwas.men"   
    }))
    return Response.success(listChapter.reverse())
}