function execute(url) {
    var doc = Http.get(url + "/").html()
    //return Response.success(doc.select(".comic-intro-text"))

    var genres = String(doc.select(".comic-info .tags a"))
    .replace(/\n/g,', ')
    .replace(/(<([^>]+)>)/g,'')
    var details = String(doc.select(".comic-intro-text"))
    .replace(/(<([^>]+)>)/g,'')
    .replace("Tác giả:","<br>Tác giả:")
    .replace("Minh họa:","<br>Minh họa:")
    .replace("Nhóm dịch:","<br>Nhóm dịch:")
    .replace("Tình trạng:","<br>Tình trạng:")
    .replace(/Ngày thêm.+Thể loại/g,'Thể loại')
    .replace("Thể loại:","<br>Thể loại:")
    .replace(/\s+<br>/g,'<br>')
    + genres
    
    var description = doc.select(".intro-container .text-justify p").text()
    
    var author = String(doc.select(".comic-intro-text")).replace(/(<([^>]+)>)/g,'').match(/Tác giả:(.+)Minh họa:/)[1].trim()
    

    return Response.success({
        name : doc.select(".info-title").text(),
        cover : doc.select(".img-thumbnail").attr("src"),
        host : "https://tusachxinhxinh.com",
        author : author,
        description : description,
        ongoing : String(doc.select(".comic-intro-text")).indexOf('Đang tiến hành')!=-1,
        detail : details
    })
}