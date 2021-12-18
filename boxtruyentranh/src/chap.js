function execute(url) {
    var doc = Http.get(url + "/").html()
    var chapterName = url.match(/https:\/\/truyentranhdammyhay.com\/(.+)/)[1]
    var nameBook = chapterName.match(/(.+)-chap.+/)[1]
    var content = String(doc.select("#content-chap-0")).match(/content = \[(.+),.+\]/)[1].replace(/\"/g,'').split(',')
    var intContent = content.length
    var listImage = []

    for(var i=0;i<intContent;i++){
        listImage.push("https://gocdoctruyen.net/images/" + nameBook + "/" + chapterName + "/" + i + ".jpg")
    }
    return Response.success(listImage)
}
