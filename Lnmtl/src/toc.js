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
    const next=0;
    var total_page_in_vol=0;
    for(var id in list_id_volume){
        // volume
        var volume_id = list_id_volume[id];
        
        //load page 1

        var doc = Http.get("https://lnmtl.com/chapter?page="+ page +"&volumeId="+ volume_id).string();
        var json = JSON.parse(doc);

        if(parseInt(page)==1)
            total_page_in_vol = parseInt(json.last_page);

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
    Console.log(total_page_in_vol)
    if(parseInt(page)<total_page_in_vol) next = parseInt(page) + 1;
    return Response.success(list_chapter,next)
}