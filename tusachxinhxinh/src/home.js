function execute(){
    return Response.success([
        { title: "Latest", input: "latest", script: "genhome.js" }, 
        { title: "A-Z", input: "a-z", script: "genhome.js" }, 
        { title: "Trending", input: "trending", script: "genhome.js" }, 
        { title: "Most views", input: "mostview", script: "genhome.js" }, 
        { title: "New", input: "new", script: "genhome.js" }
    ]);
}