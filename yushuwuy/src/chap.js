function execute(url) {
//books/
    var doc = Http.get(url).html();
    if (doc){
        var content = doc.select("div#nr div#nr1 p");

        return Response.success(content);
    }   
    return null;
}