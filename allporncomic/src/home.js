function execute() {
    return Response.success([
        {title : "Latest", input : "latest", script : "gen.js"},
        {title : "A-Z", input : "alphabet", script : "gen.js"},
        {title : "Rating", input : "rating", script : "gen.js"},
        {title : "Trending", input : "trending", script : "gen.js"},
        {title : "Most Views", input : "views", script : "gen.js"},
        {title : "New", input : "new-manga", script : "gen.js"},
    ])
}