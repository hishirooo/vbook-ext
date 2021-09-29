load('AES.js');
function execute(url) {
    var doc  = Http.get(url).html().toString()
    var batojs = doc.match(/batojs = (.+);    const subjectIid/)[1]
    var key = eval(batojs)
    var server = doc.match(/server = \"(.+)\";    const images/)[1]
    var decrypted = CryptoJS.AES.decrypt(server , key).toString(CryptoJS.enc.Utf8).replace(/\"/g,"");
    var images = doc.match(/images = .(.+)];    const pages/)[1].replace(/\"/g,"").split(',')
    var listImage =[]
    for(var i in images){
        listImage.push(decrypted + images[i])
    }

    return Response.success(listImage)
}