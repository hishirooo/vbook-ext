function execute(url) {
//books/
    var doc = Http.get(url).html();
    if (doc){
        var content = doc.select("#chapter-content p");
        //content.select("script").remove();
        //content.select("ins").remove();
        //content = content.text();
        return Response.success(content);
    }   
    return null;
}

// https://novelfull.com/my-pick-up-artist-system/chapter-1-prologue-the-perfect-protagonist.html   -- toc.js
// https://novelfull.com/the-legendary-mechanic.html   -- gen.js