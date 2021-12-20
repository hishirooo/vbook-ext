function execute(url) {
    var doc = Http.get(url + "/").html()
    var chapters =  doc.select(".table-content .chapter a")
    //return Response.success(chapters)
    var listChapter =  []

    for(var i=chapters.size()-1;i>=0; i--){
        listChapter.push({
            name: chapters.get(i).text(),
            url: chapters.get(i).attr("href"),
            host: "https://dichtruyen.org"
        })
    }

    return Response.success(listChapter)
}
///https://dichtruyen.org/truyen/18099-cong-chua-be-bong/c638429-chap-82/?t=1640002443
///https://dichtruyen.org/truyen/18099-cong-chua-be-bong/c638429-chap-82/?t=1639999850
