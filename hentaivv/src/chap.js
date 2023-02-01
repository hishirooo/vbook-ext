function execute(url) {
    url = url.replace("hentaivv.com","hentaivv1.com")
    var doc = Http.get(url).html()
    var images = doc.select(".img-center")
    console.log(images.get(2).attr("src"))
    var listImage = []
    if(images.get(1).attr("data-echo").includes('img.hentaivv')){
        images.forEach(image => listImage.push(image.attr("data-echo")))
    } else {
        images.forEach(image => listImage.push(image.attr("src")))
    }
    return Response.success(listImage)
}