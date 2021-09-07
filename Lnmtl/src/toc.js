function execute(url,page) {

    var data_id = Http.get(url).string().match(/lnmtl.volumes = \[(.*?)\]/)[1].match(/\"id\":(\d+),\"novel_id/g);
    var list_id_volume = [];
    for(var i in data_id)
    {
        list_id_volume.push(data_id[i].match(/\d+/)[0])
        //Console.log(data_id[i].match(/\d+/)[0])
    }

    // get list chapter in volume_id
    const list_chapter=[];
    if(!page) page="1";
    
    for(var id in list_id_volume){
        // volume
        var volume_id = list_id_volume[id];
        
        //load page 1
        var doc = Http.get("https://lnmtl.com/chapter?page="+ page +"&volumeId="+ volume_id).string();
        var json = JSON.parse(doc);
        const lastpage = parseInt(json.last_page);
        Console.log("lastpage="+ lastpage)
        var json_data = json.data
        for(var dt in json_data){
            var data_chapter = json_data[dt];
            list_chapter.push({
                name: data_chapter.slug,
                url: data_chapter.site_url,
                host: "https://lnmtl.com"
            });
        }
        Console.log(lastpage>0)
        if(lastpage>0){
            
            for(var p=2; p<=lastpage; p++){

                var doc2 = Http.get("https://lnmtl.com/chapter?page="+ p.toString() +"&volumeId="+ volume_id).string();
                Console.log("https://lnmtl.com/chapter?page="+ p.toString() +"&volumeId="+ volume_id)
                var json2 = JSON.parse(doc2);
                //const json2 = JSON.parse(doc2);

                var json_data2 = json2.data
                for(var dt2 in json_data2){
                    var data_chapter2 = json_data2[dt2];
                    list_chapter.push({
                        name: data_chapter2.slug,
                        url: data_chapter2.site_url,
                        host: "https://lnmtl.com"
                    });
                }

            }
            
        }

    }
    return Response.success(list_chapter)
}

///