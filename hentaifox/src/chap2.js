function execute(url) {
    var doc = Http.get(url + "/").string()
    var totalPage = parseInt(doc.match(/load_pages.+value="(\d+)"/)[1])
    var listImage = []
    //----load page 1
    var newUrl = url.replace('gallery','g')
    var doc = Http.get(newUrl + "/1/").html()
    var image = doc.select("#gimg").attr("data-src")
    listImage.push(image)
    var splitUrl = image.match(/(.+)(\d+)(.jpg|.jpeg|.png)/) 
    
    //return Response.success(doc)
    
    for(var i=2 ; i<=totalPage;i++){
        listImage.push(splitUrl[1] + i + splitUrl[3])
    }
    return Response.success(listImage)
}