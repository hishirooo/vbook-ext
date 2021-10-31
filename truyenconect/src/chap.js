function execute(url) {
    var doc = Http.get(url).html()
    var text = doc.select(".reading-content p")
    return Response.success(text)
}
