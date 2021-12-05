load('aes.js');
load('Base64.js');
function execute(url) {
    var doc = fetch(url).text();
    
    var csrf_token =  doc.match(/csrf_token.+"(.+)"/)[1]
    var chapterID = doc.match(/chapter_id = "(\d+)"/)[1]
    
    // var content = JSON.parse(Http.post("https://komeloli.net/api/get-content/" + chapterID ).string()).content

    var content = JSON.parse(fetch("https://komeloli.net/api/get-content/" + chapterID, {method: "POST"}).text()).content
    //return Response.success(content)
    var linkImage = aes_de(content, md5(csrf_token + csrf_token));
    var listImage = []
    for(var i in linkImage){
        var image = linkImage[i]
        listImage.push(image);
    }
    return Response.success(listImage)
}
function md5(e) {
    return CryptoJS.MD5(e).toString()
}
function aes_de(e, t) {
    return JSON.parse(CryptoJS.AES.decrypt(e, t, {
        format: CryptoJSAesJson
    }).toString(CryptoJS.enc.Utf8))
}


var CryptoJSAesJson = {
    stringify: function(e) {
        var t = {
            ct: e.ciphertext.toString(CryptoJS.enc.Base64)
        };
        return e.iv && (t.iv = e.iv.toString()),
        e.salt && (t.s = e.salt.toString()),
        JSON.stringify(t)
    },
    parse: function(e) {
        var t = JSON.parse(e)
          , e = CryptoJS.lib.CipherParams.create({
            ciphertext: CryptoJS.enc.Base64.parse(t.ct)
        });
        return t.iv && (e.iv = CryptoJS.enc.Hex.parse(t.iv)),
        t.s && (e.salt = CryptoJS.enc.Hex.parse(t.s)),
        e
    }
}
