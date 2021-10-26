function execute() {
    return Response.success([
        { title : "Hot", input: "https://truyendep.net/hot/", script: "gen.js"},
        { title : "Full", input: "https://truyendep.net/full/", script: "gen.js"},
        { title : "Latest", input: "https://truyendep.net/moi-cap-nhat/", script: "gen.js"},
        { title : "New", input: "https://truyendep.net/moi-dang/", script: "gen.js"},
        { title : "Top View", input: "https://truyendep.net/top-view/", script: "gen.js"},
    ])
}