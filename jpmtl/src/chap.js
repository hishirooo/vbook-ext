function execute(url) {
//books/
    const idBook = url.match(/\d+/)[0];
    url = "https://jpmtl.com/books/"+ idBook;
    var doc = Http.get(url).html();
    if (doc){
        var content = doc.select(".cp-content").html();
        content =  content.replace("<p> This novel has been translated by JPMTL.com and if you are reading this somewhere, they have stolen our translation. <\/p>","")
        content = content.replace("<p> This novel has been translated by JPMTL.com and if you are reading this somewhere, they have stolen our translation. <\/p>","")
        
        return Response.success(content);
    }   
    return null;
}