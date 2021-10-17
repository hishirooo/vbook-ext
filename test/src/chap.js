function execute(url) {
    // var browser = Engine.newBrowser()
    var host = url.split('/truyen/')[0];
    var params = url.split('/truyen/')[1].split('/');
    var bookid = params[2];
    var currentid = params[3];
    var bookhost = params[0];
    var booksty = params[1];
    var currentidc = '';
    var params = {
        'sajax': 'readchapter',
        'sty': booksty,
        'c': currentid,
        'h': bookhost,
        'bookid': bookid,
        'c2': currentidc
    };

    var request = Http.post(host)
    .headers({
        'Content-type': 'application/x-www-form-urlencoded',
        'Referer': url
        })
    .params({
        'sajax': 'readchapter',
        'sty': booksty,
        'c': currentid,
        'h': bookhost,
        'bookid': bookid,
        'c2': currentidc
    });
    var data = request.string();
    var str = JSON.parse(data).data;

    str = str.replace(/<[^i\/]/g, "&gt;").replace(/[\n]+/g, "<br><br>");
    str = str.replace(/ ([,\.!\?:”]+)/g, "$1");
    str = str.replace(/<\/p>\r\n<p>/g, "<br><br>");
    str = str.replace(/đạo ?<\/i>:/g, "nói</i>:");
    str = str.replace(/&nbsp;&nbsp;&nbsp;&nbsp;/g, "<br>");
    str = str.replace(/\n/g, "<br>");
    str = str.replace(/(\w) \./g, "$1.");
    str = str.replace(/((\w\.{1}[ \t])|(\w[!?]+(”|】)?))/g, "$1<br><br>");
    str = str.replace(/<br( ?\/)?>/ig, "<br><br>");
    str = str.replace(/(<br>(|\n|\t|\r| )*)+/g, "<br><br>");
    str = str.replace(/([\w>])“/g, "$1 “");
    str = str.replace(/(\w)<\/i><br>“/g, "$1</i>.<br>");
    str = str.replace(/ ”/g, "”");
    str = str.replace(/<div class="ad_content">.*?<\/div>/g, "");
    str = str.replace(/<img.*?src="\/novel\/images.*?>/g, "");
    str = str.replace(/<span>.*?<\/span>/g, "");
    str = str.replace(/<a href=.*?<\/a>/g, "");
    str = str.replace(/<br><br>([\)” 】!?]+)(<br>|$)/g, "$1$2");
    str = str.replace(/ ([,’]) /g, "$1 ");
    str = str.replace(/ ‘ /g, " ‘");
    str = str.replace("<a&nbsp;href=\"http:", "");
    str = str.replace(/<br>/g, "<br>\n");
    str = str.replace(/<br>\n([^“][^\n“]*?)”<br>/g, "<br>“$1”<br>");
    str = str.replace(/<br>\n/g, "<br>");
    str = str.replace(/<\/p><br><br><p>/g, "<br><br>");
    str = str.replace(/ ([,\.!\?”]+)/g, "$1");
    str.replace("\ufffe", "");

    Console.log(str);

    return Response.success(str);
}