function execute() {
    var listGenre = []
    listGenre = [{
        "input": "ticket",
        "title": "Top Đề Cử",
        "script": "gen1.js"
    },
    {
        "input": "view",
        "title": "Top Lượt Xem",
        "script": "gen1.js"
    },
    ]
    return Response.success(listGenre)
}
