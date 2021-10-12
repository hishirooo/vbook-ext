function execute(url) {
	var doc = Http.get(url).html()
	var images = doc.select(".box-chapter-content img")
    var listImage = []
    images.forEach(image => listImage.push(image.attr("src")))
	return Response.success(listImage)
}