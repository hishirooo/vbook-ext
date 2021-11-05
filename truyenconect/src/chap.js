function execute(url) {
    var doc = Http.get(url).html()
    var text = doc.select(".reading-content .text-left")
    text.select("h2").remove()
    text.select("script").remove()
    text.select("ins").remove()
    text = text.html()

    text = text.replace(/&lt;br&gt;/g,'<br>')
    text = text.replace(/(<br>){2,}/g,'<br>')
    text = text.replace(/(<br>\s*){2,}/g,'<br>')
    return Response.success(text)
}
