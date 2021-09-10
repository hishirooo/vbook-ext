function execute(url) {
    var doc = Http.get(url).html();
    if (doc){
        var content = doc.select(".chapter-content").html()
            .replace(/<p>.*\/p>/,"")
            .replace(/纯文.*com<\/b>/,"")
            .replace(/&(nbsp|amp|quot|lt|gt);/g,'');
        return Response.success(content);
    }   
     return null;
}
// doi dt xem nhu nao
// k le mang kem the