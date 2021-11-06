function execute() {
    return Response.success([
        {title : "List Truyện", input : "listtruyen", script : "gen.js"},
        {title : "Xem Nhiều", input : "views", script : "gen.js"},
        {title : "A-Z", input : "alphabet", script : "gen.js"},
        {title : "Mới", input : "new-manga", script : "gen.js"},
    ])
}