function execute(url) {
    var page = "1"
    var newUrl = url.match(/(.+)(.html)/)
    var doc = Http.get(newUrl[1] + "_" + page + ".html").html()
    var text = ""
    while(doc.select("#next_url").attr("href").indexOf('_')!=-1){
        doc = Http.get(newUrl[1] + "_" + page + ".html").html()
        text =doc.select("#article").html()
        text = text.replace(/<script>[^>]+>/g,'')
        text = text.replace(/<\/p><p>|<p>|<\/p>/g,'<br>')
        text = text + text
        page = (parseInt(page) + 1).toString()
    }
    doc = Http.get(newUrl[1] + "_" + page + ".html").html()
    textLastPage = doc.select("#article").html()
    textLastPage = textLastPage.replace(/<script>[^>]+>/g,'')
    textLastPage = textLastPage.replace(/<\/p><p>|<p>|<\/p>/g,'<br>')  
    text = text + textLastPage
    return Response.success(text)
}