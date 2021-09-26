function execute(url) {

    var doc1 = Http.get(url).html();
    var url2 = url.replace(".html","_2.html")
    //Console.log(url2)
    var text = doc1.select("div#nr div#nr1 p");
    var checkNext = doc1.select("td.next a").attr("href").match(/(\d+).html/)[1]
    //Console.log(checkNext)
    if(parseInt(checkNext)>0){
        var doc_page2 = Http.get(url2).html();
        var text2 = doc_page2.select("div#nr div#nr1 p");
        text = text + text2
    }

    text = text.replace(/<\//g,"<")
    text = text.replace(/<p>\n<p>|<p>/g,'<br>')
    return Response.success(text); 
}