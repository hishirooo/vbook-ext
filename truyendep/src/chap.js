function execute(url) {
    var doc = Http.get(url + "/").html()
    var chapterName = url.match(/https:\/\/truyendep.net\/(.+)/)[1]
    var nameBook = chapterName.match(/(.+)-chap.+/)[1]
    var content = String(doc.select("#content-chap")).match(/content=\[(.+),\]/)[1].replace(/\"/g,'').split(',')
    var intContent = content.length
    var listImage = []
    for(var i=0;i<intContent;i++){
        listImage.push("https://1.truyentranhmanga.com/images/" + nameBook + "/" + chapterName + "/" + i + ".jpg")
    }
    return Response.success(listImage)
}

