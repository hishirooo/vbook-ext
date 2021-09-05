function execute(url) {
//books/
    var doc = Http.get(url).html();
    if (doc){
        var content = doc.select(".cp-content").html();
        content =  content.replace("<p> This novel has been translated by JPMTL.com and if you are reading this somewhere, they have stolen our translation. <\/p>","")
        content = content.replace("<p> This novel has been translated by JPMTL.com and if you are reading this somewhere, they have stolen our translation. <\/p>","")
        
        return Response.success(content);
    }   
    return null;
}
// đay nhe. hoi xau xi ti nhung chay neu url như trên.