function execute(key, page) {
    var doc = Http.get("https://www.feiszw.com/book/search.aspx?SearchKey=" + key + "&SearchClass=1&SeaButton=").html()

    return Response.success(doc)
}

//https://www.feiszw.com/book/search.aspx?SearchKey=%C8%AB%C7%F2&SearchClass=1&SeaButton=