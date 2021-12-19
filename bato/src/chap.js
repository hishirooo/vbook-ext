load('AES.js');
function execute(url) {
    var doc  = fetch(url+"/").text()
    Console.log(doc)
    //return Response.success(doc)
    var batojs = doc.match(/batojs.=.(.+);/)[1]
    var key = eval(batojs)
    var server = doc.match(/server = \"(.+)\";/)[1]
    //return Response.success(server)  
    var decrypted = CryptoJS.AES.decrypt(server , key).toString(CryptoJS.enc.Utf8).replace(/\"/g,"");
    var images = doc.match(/images = \["(.+)\];/)[1].replace(/\"/g,"").split(',')
     
    var listImage =[]
    // for(var i in images){
    //     listImage.push(decrypted + images[i])
    // }
    images.forEach(img=>listImage.push(decrypted + img))

    return Response.success(listImage)
}