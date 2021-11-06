function execute() {
    return Response.success([
        {title : "Manga", input : "bl-manga", script : "gen.js"},
        {title : "Manhwa", input : "bl-manhwa", script : "gen.js"},
        {title : "Manhua", input : "bl-manhua", script : "gen.js"},
        {title : "Short", input : "bl-short", script : "gen.js"},
    ])
}