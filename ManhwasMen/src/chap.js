function execute(url) {
    var doc = Http.get(url).html()
    var imgs= doc.select("#all img")
    var listImg = []
    imgs.forEach(img=>listImg.push(
        img.attr("data-src").trim()
    ))
    return Response.success(listImg)
}