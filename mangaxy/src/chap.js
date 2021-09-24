function execute(url) {
    var doc = Http.get(url).html()
    var listImage = []
    var image = doc.select(".page-chapter img")
    for(var i in image){
        listImage.push(image[i].attr("src"))
    }

    return Response.success(listImage)
}