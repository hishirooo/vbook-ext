function execute(key) {
    var doc = fetch('https://tusachxinh.com/wp-admin/admin-ajax.php', {
    method: "POST", // GET, POST, PUT, DELETE, PATCH
    // headers: {
    //     "aaa": "xxx",
    //     "bbb": "yyy"
    // },
    body: {
        "action": "searchtax",
        "keyword": key
    }
    }).json()
    var books = doc.data.map(book =>({
        name: book.title,
        link: book.link,
        cover: book.img,
        description: "View: " + book.vote,
        host: "https://tusachxinh.com"
    }))
    //Console.log(doc.data)
    return Response.success(books)

}