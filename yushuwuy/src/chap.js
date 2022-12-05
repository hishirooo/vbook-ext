function execute(url) {
    let cvData ="";
    let part1 = url.replace("https://yushuwuy.com", "").replace(".html","");
    var next = part1;
    while (next.includes(part1)) {
        let response = fetch("https://yushuwuy.com" + next +".html");
        if (response.ok) {
            let doc = response.html();
            next = doc.select(".next").last().attr("href").replace(".html","");
            let htm = doc.select("#nr1").html();
            htm = htm.replace(/\&nbsp;/g, "");
            cvData = cvData + htm;
        } else {
            break;
        }
    }
    if (cvData) {
        return Response.success(cvData);
    }
    return null;
}