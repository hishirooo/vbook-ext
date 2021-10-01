function execute(url) {
    var doc = Http.get(url).html()
    var images = doc.select(".reading-content img")
    var listImage = []
    for(var image in images){
        listImage.push(images[image].attr("data-src").replace(/\t|\n/g,''))
    }
    return Response.success(listImage)
}