function execute(url) {
    var doc = Http.get(url+"/").html()
    var images = doc.select(".page-break img")
    var listImage = []
    images.forEach(image => listImage.push(image.attr("data-src").trim()))
    return Response.success(listImage)
}