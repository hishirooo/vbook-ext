function execute(url,page) {

    var data_id = Http.get(url).string().match(/lnmtl.volumes = \[(.*?)\]/)[1].match(/\"id\":(\d+),\"novel_id/g);
    var list_id_volume = [];
    for(var i in data_id)
    {
        list_id_volume.push(data_id[i].match(/\d+/)[0])
        Console.log(data_id[i].match(/\d+/)[0])
    }

    // get list chapter in volume_id
    const list_chapter=[];
    if(!page) page="1";
    const lastpage = 1;
    for(var id in list_id_volume){
        // volume
        var volume_id = list_id_volume[id];
        
        //load page 1
        var doc = Http.get("https://lnmtl.com/chapter?page="+ page +"&volumeId="+ volume_id).string();
        var json = JSON.parse(doc);
        Console.log(json)
        lastpage = parseInt(json.last_page);
        Console.log("lastpage="+json.last_page)
        var json_data = json.data
        for(var dt in json_data){
            var data_chapter = json_data[dt];
            list_chapter.push({
                name: data_chapter.slug,
                url: data_chapter.site_url,
                host: "https://lnmtl.com"
            });
        }
        if(lastpage>1)
            for(page =2; page<=lastpage; page++){
                var doc = Http.get("https://lnmtl.com/chapter?page="+ parseString(page) +"&volumeId="+ volume_id).string();
                var json = JSON.parse(doc);

                var json_data = json.data
                for(var dt in json_data){
                    var data_chapter = json_data[dt];
                    list_chapter.push({
                        name: data_chapter.slug,
                        url: data_chapter.site_url,
                        host: "https://lnmtl.com"
                    });
                }
            }
        
    }
    return Response.success(list_chapter)
}