function execute() {
    return Response.success([
        { title: "Latest", input: "https://ja.mangatoro.com/", script: "gen.js" },
        { title: "New", input: "https://ja.mangatoro.com/genres?status=-1&sort=15", script: "gen.js" },
        { title: "Top Day", input: "https://ja.mangatoro.com/genres?status=-1&sort=13", script: "gen.js" },
        { title: "Top Week", input: "https://ja.mangatoro.com/genres?status=-1&sort=12", script: "gen.js" },
        { title: "Top Month", input: "https://ja.mangatoro.com/genres?status=-1&sort=11", script: "gen.js" },
        { title: "Top All", input: "https://ja.mangatoro.com/genres?status=-1&sort=10", script: "gen.js" },
    ]);
}