load('config.js');
function execute(key) {
    var doc = Http.post(BASE_URL + "wp-admin/admin-ajax.php")
    .headers({
        "content-type" : "application/x-www-form-urlencoded; charset=UTF-8"
    }).
    params({
        "action": "searchtax",
        "keyword": key
    }).string()
    var json = JSON.parse(doc).data
    var listBook = []
    for(var i in json){
        var book = json[i]
    	listBook.push({
        name: book.title,
        link: book.link,
        cover: book.img,
        description: "Star: " + book.star + ", Vote: " + book.vote,
        host: BASE_URL      
        });
    }
    return Response.success(listBook)
}