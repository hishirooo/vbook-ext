function execute() {
    return Response.success([
        { title: "Latest", input: "https://mangapl.com/page/", script: "gen.js" },
        { title: "Trending", input: "trending", script: "gen.js" },
        { title: "Alphabet", input: "alphabet", script: "gen.js" },
        { title: "Rating", input: "rating", script: "gen.js" },
        { title: "Views", input: "views", script: "gen.js" },
        { title: "New manga", input: "new-manga", script: "gen.js" },

    ]);
}