function execute(url) {
    var doc = Http.get(url).html()
    var images = doc.select(".wp-manga-chapter-img")
    var listImage = []
    images.forEach(function(image){
        listImage.push(image.attr("src").replace(/\t|\n/g,''))
    })
    return Response.success(listImage)
}