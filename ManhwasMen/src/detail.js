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
    var details = doc.select(".dl-horizontal").text().replace("Type","Type: ").replace("Status","<br>Status: ").replace("Other names","<Br>Other names: ").replace("Views","<br>Views: ").replace("Rating","<br>Rating: ")
    return Response.success({
        name : doc.select(".widget-title").first().text(),
        cover : doc.select(".img-responsive").attr("src"),
        host : "https://manhwas.men",
        author : "",
        description : doc.select(".well p").text(),
        detail : details
    })
}