function execute(url) {
    var doc = Http.get(url).html();
    if (doc){
        var content = "<p>" + doc.select(".chapter-content__title").html() + "</p>" + doc.select(".cp-content").html()
        content =  content.replace("<p> This novel has been translated by JPMTL.com and if you are reading this somewhere, they have stolen our translation. <\/p>","")
        
        return Response.success(content);
    }   
     return null;
}