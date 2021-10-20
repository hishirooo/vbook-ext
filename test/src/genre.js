function execute() {
    var doc = Http.get("https://hentaivv.com/").html()
    // tạo 1 select để tạo genre :
    var genres = doc.select("#hotest-category option")

    return Response.success(genres)

}