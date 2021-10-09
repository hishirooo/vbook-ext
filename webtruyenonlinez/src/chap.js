function execute(url) {
    var doc = Http.get(url + "/").html()
    var content = doc.select("#contents > div")[1].text().replace(/\./g,'.<br>').replace(/.<br>.<br>.<br>/g,'...')
    return Response.success(content)
}