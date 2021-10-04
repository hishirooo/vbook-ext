function execute(url, page) {
    var url = "https://tusachxinhxinh.com/the-loai/action/"
    var genre = url.match(/the-loai.(.+)\//)[1]
    if(!page) page="0"
    var request = Http.get(url)
    var doc = Http.post("https://tusachxinhxinh.com/wp-admin/admin-ajax.php")
  .headers({
    "authority": "tusachxinhxinh.com",
    "accept": "*/*",
    "sec-fetch-dest": "empty",
    "x-requested-with": "XMLHttpRequest",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Whale/2.7.100.20 Safari/537.36",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "origin": "https://tusachxinhxinh.com",
    "sec-fetch-site": "same-origin",
    "sec-fetch-mode": "cors",
    "referer": url,
    "accept-language": "en-US,en;q=0.9,ko;q=0.8,vi;q=0.7",
    "cookie": request.cookie(),
    "Authorization": "Bearer null"
  })
  .params({
    "action": "madara_load_more",
    "page": page,
    "template": "madara-core%2Fcontent%2Fcontent-archive",
    "vars%5Bwp-manga-genre%5D": genre,
    "vars%5Bp%5D": "0",
    "vars%5Battachment_id%5D": "0",
    "vars%5Bpage_id%5D": "0",
    "vars%5Bday%5D": "0",
    "vars%5Bmonthnum%5D": "0",
    "vars%5Byear%5D": "0",
    "vars%5Bw%5D": "0",
    "vars%5Bpaged%5D": "1",
    "vars%5Bmeta_key%5D": "_latest_update",
    "vars%5Bignore_sticky_posts%5D": "false",
    "vars%5Bsuppress_filters%5D": "false",
    "vars%5Bcache_results%5D": "false",
    "vars%5Bupdate_post_term_cache%5D": "true",
    "vars%5Blazy_load_term_meta%5D": "true",
    "vars%5Bupdate_post_meta_cache%5D": "true",
    "vars%5Bpost_type%5D": "wp-manga",
    "vars%5Bposts_per_page%5D": "12",
    "vars%5Bnopaging%5D": "false",
    "vars%5Bcomments_per_page%5D": "50",
    "vars%5Bno_found_rows%5D": "false",
    "vars%5Btaxonomy%5D": "wp-manga-genre",
    "vars%5Bterm%5D": "comedy",
    "vars%5Border%5D": "desc",
    "vars%5Borderby%5D": "meta_value_num",
    "vars%5Btemplate%5D": "archive",
    "vars%5Bsidebar%5D": "right",
    "vars%5Bpost_status%5D": "publish",
    "vars%5Bmeta_query%5D%5Brelation%5D": "OR"
  }).html();

  return Response.success(doc)
}