function execute(url) {
    const idBook = url.match(/\d+/)[0];
    var doc = Http.get("https://jpmtl.com/v2/chapter/" + idBook + "/list?state=published&structured=true&direction=false").string();
    var data = JSON.parse(doc);
    
    const list_Chapter = [];
    for(var x in data){
        var vol = data[x].chapters;//lay all chapter cua vol
        for(var y in vol){
            var chapter = vol[y];
            list_Chapter.push({
                name: chapter.title,
                url: "/books/" + idBook + "/" + chapter.id,
                host:"https://jpmtl.com"              
            })
        }
    } 
    return Response.success(list_Chapter);//okie
}

// link chapter : https://jpmtl.com/books/1244/704048
//link request : https://jpmtl.com/v2/chapter/1244/list?state=published&structured=true&direction=false

// data : host :  name :  urlho https://jpmtl.com/books/907link nhieu bôk đó
