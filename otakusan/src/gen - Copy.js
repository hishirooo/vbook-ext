function execute(url) {
    var doc = Http.get(url).html()
    if(doc){
        var el = doc.select("#daily-view-ranking .grid a ")
        
    }
}