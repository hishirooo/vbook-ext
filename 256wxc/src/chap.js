function execute(url) {
    var doc = Http.get(url).html()
    var content = doc.select(".book_con p")

    return Response.success(content)
}