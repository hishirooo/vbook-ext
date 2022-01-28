function execute(){
    return Response.success([
        { title: "Latest", input: "latest", script: "genhome.js" }, 
        { title: "A-Z", input: "a-z", script: "genhome.js" }, 
        { title: "Hot", input: "hot", script: "genhome.js" },
        { title: "Most views", input: "mostview", script: "genhome.js" }, 
        { title: "Full", input: "full", script: "genhome.js" }
    ]);
}