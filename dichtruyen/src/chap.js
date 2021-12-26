load('crypto.js')
function execute(url){
    //var encdesbase = 'N3kcr]y[)th7PEe?';
    //var imgscode = 'CmklCZ3c6O0nRxeINT0lYIWKMVUwE3YdbfVX5U0XgWOrUV0oCaxnxO+KKp3z7f62gNYVFCl9F9SdrOZ0rOnvZyX0z5tuJpszn1hoXIu0xK4=';
    var doc = fetch(url).text()
    //Console.log(doc)
    var enc = doc.match(/var encdesbase = \'(.+)\';.+var allowImageToCanvas/)[1] + doc.match(/encdesbase \+= \'(.+)\';.+function get_comic/)[1]
    //var decode = DTEncDesAesDecrypt(imgscode, enc);
    //Console.log(enc)
    // list data
    var listImage = []
    var html = Html.parse(doc)
    //var htmlClear = Html.clean(html, ["script"])
    var datas = html.select(".reading-content img")
    //return Response.success(datas)
    if(datas!=""){

        datas.forEach(data => listImage.push(DTEncDesAesDecrypt(data.attr("data-encdes"), enc)))
        return Response.success(listImage)
    }
    else{
        var htmlClear = Html.clean(html, ["script"])
        var matchLink = htmlClear.match(/<script> var.+<\/script>/)[0]
        var matchNameJson=String(matchLink).match(/var.(.+) =/)[1]
        var matchDataJson=matchLink.match(/<script> var .+ = "(.+)";<\/script>/)[1]
        //return Response.success(matchDataJson.replace(/\\/g,''))
        //Console.log(matchDataJson)
         //Console.log(htmlClear)
        var ctchaploadinf = JSON.parse(matchDataJson.replace(/\\/g,''))
        //return Response.success(matchDataJson.replace(/\\/g,'').split(',')[4].match(/\"(.+)\":/)[1])
        if(typeof ctchaploadinf[matchNameJson]=="object"){
            var htmlctchaptemp = " ";	
            var iitemp = 0;	
            var imguri = " ";	
            var imgdtbase = " ";	
            var titleimg = " ";	
            var lbdatasrcenc = " ";	
            var climg = " ";	
            var typeline = " ";	
            var nameImgLine = " ";	
            var defaultImgLine = " ";	
            var defaultImgLine2 = " ";	
            var lbdatasrcenc = "data-encdes ";
            var keyimgdtbase=matchDataJson.replace(/\\/g,'').split(',')[4].match(/\"(.+)\":/)[1]
            Console.log(keyimgdtbase)
            //return Response.success(ctchaploadinf[matchNameJson][3])
            ctchaploadinf[matchNameJson].forEach(ctchaploadinf_index=>{
                
                imguri = "";	
                imgdtbase = "";	
                // climg = "lazy-load ";	
                // if (typeof(ctchaploadinf_index.cl) != "undefined") {	
                //     climg = ctchaploadinf_index.cl;	
                // }	
                // typeline = "";	
                // if (typeof(ctchaploadinf_index.t) != "undefined") {
                //     typeline = ctchaploadinf_index.t;	
                // }	
                // nameImgLine = "";
                // if (typeof(ctchaploadinf_index.fn) != "undefined") {	
                //     nameImgLine = ctchaploadinf_index.fn;	
                // }	
                // if (typeof(ctchaploadinf_index.imgdt) != "undefined") {	
                //     imguri = DTencrypt.decrypt(ctchaploadinf_index.imgdt);	
                // } 
                // else 
                if (typeof(ctchaploadinf_index[keyimgdtbase]) != "undefined") {	
                    imgdtbase = ctchaploadinf_index[keyimgdtbase];	
                } 
                else {	
                    imguri = ctchaploadinf_index.img;	
                }	
                // if (typeof(ctchaploadinf_index.titledt) != "undefined") {	
                //     titleimg = DTencrypt.decrypt(ctchaploadinf_index.titledt);	
                // } 
                // else {	
                //     titleimg = ctchaploadinf_index.title;	
                // }	
                if(imgdtbase!="")
                    listImage.push(DTEncDesAesDecrypt(imgdtbase, enc))
                    // listImage.push({
                    //     climg:climg,
                    //     typeline:typeline,
                    //     nameImgLine:nameImgLine,
                    //     imguri:imguri,
                    //     imgdtbase:DTEncDesAesDecrypt(imgdtbase, enc),
                    //     titleimg:titleimg,
                    //     html:'<p style="text-align: center; " class=" ' + climg + ' "><img alt=" ' + titleimg + ' " class="lazy " src=" ' + defaultImgLine + ' " data-src=" ' + imguri + ' " ' + lbdatasrcenc + '=" ' + imgdtbase + ' " /></p><p style="opacity: 0;height: 0; "><img alt=" ' + titleimg + ' " class="lazy " src=" ' + defaultImgLine + ' " data-src=" ' + defaultImgLine2 + ' " /></p>'
                    // })
            //)
                    
           //https://b.dtimg.xyz/fansubup/up/21492/2021/1638351730/21492-damenzu-kon-kono-kekkon-wa-auto-desuka-chap-da81fc.jpg
           //https://image.dichtruyen.org/img/damenzu-kon-kono-kekkon-wa-auto-desuka-chap-4-9.jpg
            })
            return Response.success(listImage)
        }
    }

}
//https://dichtruyen.org/truyen/6385-thu-ky-cua-alexandros-dai-de/c210862-chap-2/?t=1640440241
//https://dichtruyen.org/truyen/19267-nyotaika-yankee-gakuen/c558216-chap-21/
//https://b.dtimg.xyz/fansubup/up/21492/2021/1638351729/21492-damenzu-kon-kono-kekkon-wa-auto-desuka-chap-5df232.jpg
//https://b.dtimg.xyz/fansubup/up/21492/2021/1638351729/21492-damenzu-kon-kono-kekkon-wa-auto-desuka-chap-5df232.jpg

//https://b.dtimg.xyz/fansubup/up/21492/2021/1636084456/21492-damenzu-kon-kono-kekkon-wa-auto-desuka-chap-2-c679be.jpg
//https://b.dtimg.xyz/cis/6385/210862/6385-th-k-ca-alexandros-i-chap-2-1-b00e.jpg