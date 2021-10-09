function execute(url) {
    var doc = Http.get(url + "/").html()
    var content = doc.select("#contents > div")[1].html()
    content = content.replace(/(<br>\s*){2,}/gm, '<br>');
    return Response.success(content)
}