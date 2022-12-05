function execute(url) {
    var doc = Http.get(url).html()
    var imgs= doc.select("#chapter_imgs img")
    var listImg = []
    imgs.forEach(img=>listImg.push(
        img.attr("src").trim()
    ))
    return Response.success(listImg)
}