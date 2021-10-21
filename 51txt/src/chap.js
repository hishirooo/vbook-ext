function execute(url) {
    var page = "1"
    var newUrl = url.match(/(.+)(.html)/)
    var doc = Http.get(newUrl[1] + "_" + page + ".html").html()
    var text = ""
    while(doc.select("#next_url").attr("href").indexOf('_')!=-1){
        doc = Http.get(newUrl[1] + "_" + page + ".html").html()
        text2 =doc.select("#article").html()
        text2 = text2.replace(/<script>[^>]+>/g,'')
        text2 = text2.replace(/<\/p><p>|<p>|<\/p>/g,'<br>')
        text = text + text2
        page = (parseInt(page) + 1).toString()
    }
    return Response.success(text)
}