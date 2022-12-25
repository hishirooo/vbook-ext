function execute(url) {
    var doc = Http.get(url).html()
    var content = doc.select("#nr1 p")

    return Response.success(content)
}