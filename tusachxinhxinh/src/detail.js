function execute(url) {
    var doc = Http.get(url + "/").html()
    //----------------
    var ratingCount = doc.select(".vote-details > span")[1].text() + "<br>"

    var otherName =  doc.select(".post-content_item")[2].text() + "<br>"
    if(otherName.indexOf('Other name: ')==-1)
        otherName = ""
    var content = doc.select(".site-content > div > div")[1].select(".summary__content").text()
 
    var rank = doc.select(".post-content_item")[1].text() + "<br>"

    var  author = doc.select(".author-content a").text()
    if(author=="") author ="Updating" + "<br>"

    var ongoing = doc.select(".post-status").text()
    //----------------
    
    return Response.success({
        name : doc.select(".post-title h1").text(),
        cover : doc.select(".summary_image img").attr("src"),
        host : "https://tusachxinhxinh.com",
        author : author,
        description : content,
        ongoing : ongoing.indexOf('Đang tiến hành')!=-1,
        detail :"Rate: " + ratingCount + rank + otherName + "Author: " + author + "<br>Status: " + ongoing
    })
}