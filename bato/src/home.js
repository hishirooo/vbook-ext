function execute() {
    return Response.success([
        { title: "Latest", input: "https://bato.to/latest?page=", script: "gen.js" },
    ]);
}