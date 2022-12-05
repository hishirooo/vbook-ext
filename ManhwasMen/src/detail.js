function execute(url) {
    var newURL=""
    var count = (url.replace("https://manhwas.men/","").match(/\//g) || []).length
    console.log(count)
    if(count=="2") // mangalist
    {
        newURL= url.replace(url.split("/").pop(),"")
    }
    else
        newURL = url + "/"
    var doc = Http.get(newURL).html()
    var details = doc.select("#nav-info > div > div.post-content > div:nth-child(5) > div.summary-content").text()
    return Response.success({
        name : doc.select(".post-title h1").first().text(),
        cover : doc.select(".summary_image img").attr("src"),
        host : "https://manhwas.men",
        author : "",
        description : doc.select(".summary-content").text(),
        detail : details
    })
}