function execute() {
    return Response.success([
        {title : "Latest", input :".lastupdate",script : "genhome.js"},
        {title : "Popular", input :".popular",script : "genhome.js"},
    ])
}