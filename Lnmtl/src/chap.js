function execute(url) {
//books/
    var doc = Http.get(url).html();
    if (doc){
        //var content = doc.select(".container div div.chapter-body sentence.translated").toString().replace(/<w/g,"<t").replace(/w>/g,"t>");
        var content = doc.select(".container div div.chapter-body sentence.translated").toString()
        var text = content.replace(/<[^>\n]*>/g,"")
        return Response.success(text);
    }   
    return null;
}