function execute() {
    return Response.success([
        { title: "Home", input: "home", script: "gen.js" }, 
        { title: "Manga List", input: "mangalist", script: "gen.js" }, 
        //https://manhwas.men/manga-list/
    ])
}