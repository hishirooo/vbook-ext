function execute(url) {
    var doc = fetch(url).html()
    var text = doc.select(".chaptercontent")
    text = Html.clean(text, ["p"])
    text = text.replace(/(<([^>]+)>)/g,'')
    text =  text.replace(/\n/g,'<br>')
    text = text.replace(/\u201c|\u201d|\u2014/g,'')
    return Response.success(text)
}