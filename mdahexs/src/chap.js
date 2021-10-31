function execute(url) {
    var page = "1"
    var newUrl = url.match(/(.+)(.html)/)[1]

    var content =""
    var doc = Http.get(newUrl + "_" + page + ".html").html()

    var pageAll = parseInt(String(doc).match(/var pageAll = '(\d+)'/)[1])
    for(var i=1;i<=pageAll;i++){
        var docPage = Http.get(newUrl + "_" + i.toString() + ".html").html()

        var textDecode =String(docPage).match(/html\(decodeURIComponent\(.(.+).\)\)/)[1]
        var text = decodeURIComponent(textDecode);

        text = text.replace(/&nbsp;/g,'')
        text = text.replace(/\[\]/g,'')
        text = text.replace(/<br\/><br\/>/g,'<br>')
        content = content + text
    }
    return Response.success(content)
}