function execute(url) {
    var doc = Http.get(url).html()
    var images = doc.select(".img-center")
    var listImage = [] 
    images.forEach(image => listImage.push(image.attr("data-echo")))
    return Response.success(listImage)
}