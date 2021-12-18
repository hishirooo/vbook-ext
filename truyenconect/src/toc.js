function execute(url) {
    var doc = Http.get(url).html()

    var listChapter = []

    var checkVolume = doc.select("#chaptermore > .has-child")
    if(checkVolume!=""){
        //Console.log("volume")
        //https://truyenconect.com/truyen/dokuzetsu-shojo-no-tame-ni-kitakubu-yamemashita.html
        //https://truyenconect.com/truyen/ichiokunen-button-o-renda-shita-ore-wa-kizuitara-saikyou-ni-natteitarakudai-kenshi-no-gakuin-musou.html
        //https://truyenconect.com/truyen/isekai-de-miryoku-cheat-wo-tsukatte-dorei-harem-wo-tsukutte-mita.html
        //https://truyenconect.com/truyen/re-zero-kara-hajimeru-isekai-seikatsu-web-novel.html

        var firstIDChap = doc.select('#init-links a').first().attr('href').split('-').pop();
        var allVol = Html.parse(JSON.parse(Http.get('https://truyenconect.com/truyen/get-chap-selector?chap='+firstIDChap).string()).eps_selector);
        var el = allVol.select('option');
        var listChapter = [];
        // for (var e in el){
        //     var vol = el[e]
        //     //Console.log(vol.attr('value'))
        //     var allChap = Html.parse(JSON.parse(Http.get('https://truyenconect.com/truyen/getreadingchapAction').params({
        //         dataEpisodes : vol.attr('value'),
        //         datastory : vol.attr('data-story'),
        //         dataNavigation : vol.attr('data-navigation')
        //     }).string()).html)
        //     //Console.log(allChap)
        //     allChap.select('option').first().remove();
        //     //return Response.success(allChap)
        //     var al = allChap.select('option');
        //     //Console.log(al)
        //     for(var i = al.size()-1; i >=0; i--){
        //         var chap = al.get(i);
        //         url = chap.attr("value").match(/(.+)\/(\d+)-(.+)/)
        //         listChapter.push({
        //             name: chap.text(),
        //             url: url[1] + "/" + url[3] + "-" + url[2],
        //             host: "https://truyenconect.com"
        //         })
        //     }
        // }
        el.forEach(vol=>{
            var allChap = Html.parse(JSON.parse(Http.get('https://truyenconect.com/truyen/getreadingchapAction').params({
                dataEpisodes : vol.attr('value'),
                datastory : vol.attr('data-story'),
                dataNavigation : vol.attr('data-navigation')
            }).string()).html)
            //Console.log(allChap)
            allChap.select('option').first().remove();
            //return Response.success(allChap)
            var al = allChap.select('option');
            //Console.log(al)
            for(var i = al.size()-1; i >=0; i--){
                var chap = al.get(i);
                url = chap.attr("value").match(/(.+)\/(\d+)-(.+)/)
                listChapter.push({
                    name: chap.text(),
                    url: url[1] + "/" + url[3] + "-" + url[2],
                    host: "https://truyenconect.com"
                })
            }
        })

        // 
    }else{
        //Console.log("ko volume")
        //https://truyenconect.com/truyen/tu-chan-lieu-thien-quan.html
        var idChapter = doc.select("#chaptermore li h3 a").get(0).attr("href").match(/(\d+)$/)[1]
        var jsonChapterS = Http.get("https://truyenconect.com/truyen/get-chap-selector?chap=" +  idChapter).string()
        var chapterS = Html.parse(JSON.parse(jsonChapterS).chap_selector).select("option")
        for( var i = chapterS.size()-1; i>=0; i--){
            listChapter.push({
                name: chapterS.get(i).text(),
                url: chapterS.get(i).attr("value"),
                host: "https://truyenconect.com"
            })
        }
        //return Response.success(listChapter)
    }
    return Response.success(listChapter)
}
