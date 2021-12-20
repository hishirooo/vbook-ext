load('crypto.js')
function execute(url) {
    //var encdesbase = 'N3kcr]y[)th7PEe?';
    //var imgscode = 'CmklCZ3c6O0nRxeINT0lYIWKMVUwE3YdbfVX5U0XgWOrUV0oCaxnxO+KKp3z7f62gNYVFCl9F9SdrOZ0rOnvZyX0z5tuJpszn1hoXIu0xK4=';
    var doc = fetch(url).text()
    //Console.log(doc)
    var enc = doc.match(/encdesbase = '(.+)';	var allowImageToCanvas/)[1] + doc.match(/encdesbase \+= '(.+)'.+get_comic/)[1]
    //var decode = DTEncDesAesDecrypt(imgscode, enc);
    Console.log(enc)
    // list data
    var listImage = []
    var html = Html.parse(doc)
    var datas =  html.select(".chapter-content img")
    datas.forEach(data => listImage.push(DTEncDesAesDecrypt(data.attr("data-encdes"), enc)))

    /*
        <img alt=\"Bạn Thời Thơ Ấu chap 19\" src=\"https://assets.dichtruyen.org/images/hinh-dau-chap-org.jpg\">\n<img alt=\"Bạn Thời Thơ Ấu chap 19 - 1\" class=\"lazy\" src=\"https://assets.dichtruyen.org/images/hinh-loading-org.jpg\" data-encdes=\"CmklCZ3c6O0nRxeINT0lYIWKMVUwE3YdbfVX5U0XgWOrUV0oCaxnxO+KKp3z7f62NhXvDA94z0ze4dMoBeTM/vAeON+eFF916Vm1REycNsU=\">
    */


    return Response.success(listImage)
}

