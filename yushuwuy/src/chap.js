function execute(url,page) {
//books/
    var content = []
    var doc = Http.get(url).html();
    var checkpage = doc.select("td.next a").attr("href").match(/(\d+).html/)[1]
    if(parseInt(checkpage)>0) 
        Console.log(checkpage)
    content = content + doc.select("div#nr div#nr1 p");
    return Response.success(content,page);
}