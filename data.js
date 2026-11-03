/* ============================================================
   MICHAEL JACKSON 作品档案 · 数据文件
   所有文案为原创 / 公开事实信息。
   图片均为原作品真实封面 / 海报 / 人物照片，来自公开渠道：
   - 专辑/单曲封面：Apple Music / iTunes 预览图（mzstatic.com）
   - 专辑/电影海报：Wikipedia（upload.wikimedia.org）
   - 人物照片：Wikimedia Commons（自由许可，CC / Public Domain）
   仅作非商业影迷欣赏使用，权利归各自权利人所有，可随时移除。
   - VIDEOS   : 视听馆（yt=YouTube ID / bv=B 站 BV 号）
   - CONCERTS : 现场演唱会
   ============================================================ */
(function () {
  "use strict";

  var ALBUMS = [
    { id: "gotobe", title: "Got to Be There", en: "1972 · Motown 首专", year: "1972", tag: "起点", poster: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/6c/3c/86/6c3c860b-0e0a-f016-1adc-44d8e3ff0144/00602537386796.rgb.jpg/1000x1000bb.jpg", desc: "Motown 时代首张个人专辑，青涩却已显光芒。", facts: ["13 岁发行的首张个人专辑", "同名曲与《Rockin’ Robin》走红"], songs: "代表作：Got to Be There · Rockin’ Robin" },
    { id: "ben", title: "Ben", en: "1972 · 冠军主题曲", year: "1972", tag: "冠军", poster: "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/8c/45/7d/8c457ddb-685c-ea0a-9d39-190a5e7e0e03/00602537386840.rgb.jpg/1000x1000bb.jpg", desc: "同名主题曲《Ben》登顶，成为他首支个人冠军单曲。", facts: ["《Ben》获奥斯卡最佳歌曲提名", "首支个人冠军单曲"], songs: "代表作：Ben" },
    { id: "musicme", title: "Music & Me", en: "1973 · 抒情时期", year: "1973", tag: "转型", poster: "https://upload.wikimedia.org/wikipedia/en/1/19/Mjmusicandme.jpg", desc: "Motown 抒情时期的温柔之作，少年声线渐渐变化。", facts: ["变声期的珍贵记录", "《With a Child’s Heart》为亮点"], songs: "代表作：With a Child’s Heart" },
    { id: "forever", title: "Forever, Michael", en: "1975 · Motown 告别", year: "1975", tag: "告别", poster: "https://upload.wikimedia.org/wikipedia/en/8/8a/Forever%2C_Michael.png", desc: "Motown 时期最后一张个人专辑，声线已渐成熟。", facts: ["离开 Motown 前的告别专辑", "成人化转型的关键一步"], songs: "代表作：We’re Almost There · One Day in Your Life" },
    { id: "otw", title: "Off the Wall", en: "1979 · 首张个人专辑", year: "1979", tag: "起点", poster: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/0c/fe/a3/0cfea324-57c1-d530-5248-9bb591bbd7bf/074643574525.jpg/1000x1000bb.jpg", desc: "从童星到成人巨星的第一声，Disco 与 R&B 的优雅融合。", facts: ["制作人：Quincy Jones", "4 首打入 Top 10 的单曲", "格莱美年度专辑提名"], songs: "代表作：Don’t Stop ’Til You Get Enough · Rock With You" },
    { id: "thriller", title: "Thriller", en: "1982 · 流行之巅", year: "1982", tag: "巅峰", poster: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/32/4f/fd/324ffda2-9e51-8f6a-0c2d-c6fd2b41ac55/074643811224.jpg/1000x1000bb.jpg", desc: "史上最畅销专辑，专辑时代的顶点，每一首都是金曲。", facts: ["全球销量常被引用为 1 亿+", "7 首打入 Top 10", "获 8 项格莱美提名、7 项获奖"], songs: "代表作：Billie Jean · Beat It · Thriller" },
    { id: "bad", title: "Bad", en: "1987 · 硬朗回归", year: "1987", tag: "征服", poster: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/d5/5f/28/d55f28f4-610c-ee81-dc16-a01cda46bbc4/886443546264.jpg/1000x1000bb.jpg", desc: "硬朗节奏与电影级叙事，向全世界的质疑正面回应。", facts: ["首张拥有 5 首冠军单曲的专辑", "与 Martin Scorsese 合作《Bad》短片", "世界巡演横跨 15 国 123 场"], songs: "代表作：Bad · Smooth Criminal · Man in the Mirror" },
    { id: "dangerous", title: "Dangerous", en: "1991 · 视觉革命", year: "1991", tag: "革新", poster: "https://upload.wikimedia.org/wikipedia/en/1/11/Michaeljacksondangerous.jpg", desc: "New Jack Swing 的巅峰，短篇电影的视觉革命。", facts: ["《Black or White》首播全球 5 亿观众", "次年开启 69 场世界巡演", "《Dangerous》同名曲收录于 HIStory"], songs: "代表作：Black or White · Remember the Time · Heal the World" },
    { id: "history", title: "HIStory", en: "1995 · 双碟史诗", year: "1995", tag: "史诗", poster: "https://upload.wikimedia.org/wikipedia/en/3/35/MJ-HIStory.jpg", desc: "双碟自传式史诗，一半新歌、一半精选。", facts: ["首周即登顶多国榜单", "《Scream》与妹妹 Janet 合唱", "同名世界巡演票房创纪录"], songs: "代表作：Scream · Earth Song · They Don’t Care About Us" },
    { id: "botdf", title: "Blood on the Dance Floor", en: "1997 · 混音与新歌", year: "1997", tag: "惊悚", poster: "https://upload.wikimedia.org/wikipedia/en/9/9f/Blood_on_the_dancefloor.jpg", desc: "《HIStory》后的混音 + 新歌专辑，《Ghosts》短片姊妹篇。", facts: ["收录 5 首全新曲目", "同名主打与《Ghosts》联动"], songs: "代表作：Blood on the Dance Floor · Ghosts" },
    { id: "invincible", title: "Invincible", en: "2001 · 世纪回归", year: "2001", tag: "宣言", poster: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/dc/02/ef/dc02eff2-027c-a468-7d7b-aa9404e74f1a/mzi.mgytcnob.jpg/1000x1000bb.jpg", desc: "最后的录音室宣言，R&B 与流行的高规格制作。", facts: ["发行首周登顶美国专辑榜", "与多位当代制作人合作", "《You Rock My World》为先行单曲"], songs: "代表作：You Rock My World · Butterflies" },
    { id: "michael", title: "Michael", en: "2010 · 遗作", year: "2010", tag: "遗作", poster: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/2f/3a/ed/2f3aed36-237b-22ec-752e-2a877ad06069/196589271624.jpg/1000x1000bb.jpg", desc: "离世后整理发行的第一张录音室专辑。", facts: ["收录 2000 年代未发行录音", "《Hold My Hand》与 Akon 合作"], songs: "代表作：Hold My Hand · Hollywood Tonight" },
    { id: "xscape", title: "Xscape", en: "2014 · 遗作重制", year: "2014", tag: "重制", poster: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/83/15/cc/8315ccdd-5a8d-8344-fa15-72e4cb64145e/886444533171.jpg/1000x1000bb.jpg", desc: "未公开素材重获新生，新旧双版本对照。", facts: ["双版本概念：原曲 + 当代重制", "Timbaland 等参与制作"], songs: "代表作：Love Never Felt So Good · Xscape" },
    { id: "n1", title: "Number Ones", en: "2003 · 精选", year: "2003", tag: "精选", poster: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/67/c6/c9/67c6c9b0-e879-7e4d-fcda-dc52f758ec43/888880457066.jpg/1000x1000bb.jpg", desc: "18 支冠军单曲的官方精选。", facts: ["一张浓缩的巅峰路线图", "各国版本曲目略有不同"], songs: "代表作：Billie Jean · Beat It · Black or White" },
    { id: "essential", title: "The Essential MJ", en: "2005 · 双碟精选", year: "2005", tag: "精选", poster: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/3d/9d/38/3d9d3811-71f0-3a0e-1ada-3004e56ff852/827969428726.jpg/1000x1000bb.jpg", desc: "横跨 Jackson 5 到 Invincible 的双碟精选。", facts: ["覆盖最广的入门精选之一", "收录《Wanna Be Startin’ Somethin’》等"], songs: "代表作：I Want You Back · Wanna Be Startin’ Somethin’" },
    { id: "kop", title: "King of Pop", en: "2008 · 歌迷票选", year: "2008", tag: "精选", poster: "https://upload.wikimedia.org/wikipedia/en/b/b5/Michael-jackson-king-of-pop-442285.jpg", desc: "由全球歌迷票选曲目组成的致敬精选。", facts: ["多个国家/地区版本", "歌迷亲自选择曲目"], songs: "代表作：由你的选择决定" },
    { id: "thisisit", title: "This Is It (OST)", en: "2009 · 纪录电影原声", year: "2009", tag: "原声", poster: "https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/2a/82/a5/2a82a59b-6e79-7c39-761a-c1d3b82e93cb/dj.dzbxcmnk.jpg/1000x1000bb.jpg", desc: "告别巡演排练纪录电影的原声合辑。", facts: ["含未曝光排练录音", "见证最后的舞台准备"], songs: "代表作：This Is It · Billie Jean (Live)" },
    { id: "scream", title: "Scream", en: "2017 · 节奏精选", year: "2017", tag: "精选", poster: "https://upload.wikimedia.org/wikipedia/en/4/49/Michael_Jackson_Scream_Album_Cover.png", desc: "围绕节奏与律动的精选辑，致敬他的节拍灵魂。", facts: ["黑胶双碟形式发行", "主打强劲节拍曲目"], songs: "代表作：Scream · They Don’t Care About Us" },
    { id: "farewell", title: "Farewell My Summer Love", en: "1984 · Motown 补遗", year: "1984", tag: "补遗", poster: "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/f6/e2/f9/f6e2f9be-af5e-7627-18fe-98e959727153/00602537386888.rgb.jpg/1000x1000bb.jpg", desc: "Motown 时期未收录曲目的补遗合辑。", facts: ["收录 70 年代未发行录音", "1984 年以单曲再获热度"], songs: "代表作：Farewell My Summer Love · Don’t Let It Get You Down" },
    { id: "originalsoul", title: "The Original Soul of MJ", en: "1987 · Motown 精选", year: "1987", tag: "Motown", poster: "https://upload.wikimedia.org/wikipedia/en/8/80/Original_soul_of_mjackson.jpg", desc: "Motown 告别曲合辑，收录 80 年代重制版。", facts: ["覆盖早期 Motown 代表作", "含重新混音的旧录音"], songs: "代表作：Got to Be There · Ben · Rockin’ Robin" },
    { id: "immortal", title: "Immortal", en: "2011 · 巡演原声", year: "2011", tag: "巡演原声", poster: "https://upload.wikimedia.org/wikipedia/en/5/52/Michael_jackson_immortal_album_cover.jpg", desc: "太阳马戏团《不朽巡回秀》原声，经典重新编曲。", facts: ["由传奇原声团队重新混编", "配合致敬舞台演出"], songs: "代表作：Immortal Megamix · Thriller (Immortal)" },
    { id: "bad25", title: "Bad 25", en: "2012 · 25 周年", year: "2012", tag: "周年", poster: "https://is1-ssl.mzstatic.com/image/thumb/Features124/v4/0b/fb/b5/0bfbb592-e2ce-065a-a098-09f55cee22db/dj.iziroksp.jpg/1000x1000bb.jpg", desc: "《Bad》25 周年纪念版，重制专辑 + 未公开现场与样带。", facts: ["附 1988 温布利完整现场", "全新修复与未发行曲目"], songs: "代表作：I Just Can’t Stop Loving You (Live) 等" },
    { id: "wembley", title: "Live at Wembley", en: "1988 · 温布利现场", year: "1988", tag: "现场", poster: "https://upload.wikimedia.org/wikipedia/en/9/99/Badliveatwembley.jpg", desc: "1988 年 7 月 16 日 Bad 巡演伦敦温布利现场，官方完整实况。", facts: ["首次官方发行的完整巡演现场", "万人合唱的名场面"], songs: "代表作：Man in the Mirror · The Way You Make Me Feel" },
    { id: "thriller40", title: "Thriller 40", en: "2022 · 40 周年", year: "2022", tag: "周年", poster: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/73/8c/e1/738ce1db-60bd-eb25-0059-18778c1ca9b3/196589412409.jpg/1000x1000bb.jpg", desc: "《Thriller》40 周年纪念版，附未发行样带与现场。", facts: ["追加数十首未公开录音", "经典重新打磨发行"], songs: "代表作：Thriller (40th Anniversary) 等" }
  ];
  /* ---------- 视听馆 ---------- */
  var VIDEOS = [
    { id: "v1", title: "Don’t Stop ’Til You Get Enough", year: "1979", kind: "mv", "img": "https://i.ytimg.com/vi/yURRmWtbTbo/hqdefault.jpg", note: "单飞后首支个人单曲，迪斯科的华丽开场。", yt: "yURRmWtbTbo", bv: "BV1Sy4y1S7MJ", kw: "迈克尔杰克逊 Don't Stop Til You Get Enough 官方MV" },
    { id: "v2", title: "Billie Jean", year: "1983", kind: "mv", "img": "https://i.ytimg.com/vi/Zi_XLOBDo_Y/hqdefault.jpg", note: "月光下的地砖发光，传奇的开始。", yt: "Zi_XLOBDo_Y", bv: "BV1EzRLB5EAm", kw: "迈克尔杰克逊 Billie Jean 官方MV" },
    { id: "v3", title: "Beat It", year: "1983", kind: "mv", "img": "https://i.ytimg.com/vi/oRdxUFDoQe0/hqdefault.jpg", note: "街头帮派与群舞的暴力美学。", yt: "oRdxUFDoQe0", bv: "BV1wbGNekERR", kw: "迈克尔杰克逊 Beat It 官方MV" },
    { id: "v4", title: "Thriller", year: "1983", kind: "mv", "img": "https://i.ytimg.com/vi/sOnqjkJTMaA/hqdefault.jpg", note: "改变行业的恐怖舞剧，定义了音乐短片。", yt: "sOnqjkJTMaA", bv: "BV19g411i76E", kw: "迈克尔杰克逊 Thriller 官方MV" },
    { id: "v5", title: "Bad", year: "1987", kind: "mv", "img": "https://i.ytimg.com/vi/dsUXAEzaC3Q/hqdefault.jpg", note: "地铁站里的对峙与群舞。", yt: "dsUXAEzaC3Q", bv: "BV1gz4y1U7UR", kw: "迈克尔杰克逊 Bad 官方MV" },
    { id: "v6", title: "Smooth Criminal", year: "1988", kind: "mv", "img": "https://i.ytimg.com/vi/h_D3VFfhvs4/hqdefault.jpg", note: "45 度倾斜与黑帮电影感。", yt: "h_D3VFfhvs4", bv: "BV11rByYTETk", kw: "迈克尔杰克逊 Smooth Criminal 完整版" },
    { id: "v7", title: "Man in the Mirror", year: "1988", kind: "mv", "img": "https://i.ytimg.com/vi/PivWY9wn5ps/hqdefault.jpg", note: "一首关于改变世界的宣言。", yt: "PivWY9wn5ps", bv: "BV1ZbuC6yEkk", kw: "迈克尔杰克逊 Man in the Mirror 官方MV" },
    { id: "v8", title: "Black or White", year: "1991", kind: "mv", "img": "https://i.ytimg.com/vi/F2AitTPI5U0/hqdefault.jpg", note: "全球人脸渐变的经典转场。", yt: "F2AitTPI5U0", bv: "BV1bY4y1m7gu", kw: "迈克尔杰克逊 Black or White 官方MV" },
    { id: "v9", title: "Remember the Time", year: "1992", kind: "mv", "img": "https://i.ytimg.com/vi/LeiFF0gvqcc/hqdefault.jpg", note: "古埃及宫廷的巨星阵容。", yt: "LeiFF0gvqcc", bv: "BV1cs8z6sEhC", kw: "迈克尔杰克逊 Remember the Time 官方MV" },
    { id: "v10", title: "Heal the World", year: "1992", kind: "mv", "img": "https://i.ytimg.com/vi/BWf-eARnf6U/hqdefault.jpg", note: "纯真的儿童视角，治愈与希望。", yt: "BWf-eARnf6U", bv: "BV1ZvHNzJEtu", kw: "迈克尔杰克逊 Heal the World 官方MV" },
    { id: "v11", title: "Scream", year: "1995", kind: "mv", "img": "https://i.ytimg.com/vi/0P4A1K4lXDo/hqdefault.jpg", note: "与妹妹 Janet 的未来主义对峙。", yt: "0P4A1K4lXDo", bv: "BV1au411x7Y4", kw: "迈克尔杰克逊 Scream 官方MV" },
    { id: "v12", title: "Earth Song", year: "1995", kind: "mv", "img": "https://i.ytimg.com/vi/XAi3VTSdTxU/hqdefault.jpg", note: "环保主题的震撼史诗。", yt: "XAi3VTSdTxU", bv: "BV1fE411F7pa", kw: "迈克尔杰克逊 Earth Song 官方MV" },
    { id: "v13", title: "经典合集（Greatest Hits / 官方MV全集）", year: "—", kind: "mv", "img": "https://i.ytimg.com/vi/07GHdlabCtg/hqdefault.jpg", note: "海外为 Greatest Hits 合辑，大陆为 4K 官方 MV 全集。", yt: "07GHdlabCtg", bv: "BV1PnYDzmEuR", kw: "迈克尔杰克逊 官方MV全集" },
    { id: "v14", title: "1992 布加勒斯特·危险之旅", year: "1992", kind: "live", img: "https://i.ytimg.com/vi/Hxgo-Qu-ZZE/hqdefault.jpg", note: "Dangerous 世界巡演罗马尼亚站，现场教科书。", yt: "Hxgo-Qu-ZZE", bv: "BV147411H7Pp", kw: "迈克尔杰克逊 1992 布加勒斯特 演唱会" },
    { id: "v15", title: "1993 超级碗中场秀", year: "1993", kind: "live", img: "https://i.ytimg.com/vi/LOnTuSqrvbM/hqdefault.jpg", note: "被誉为史上最佳中场秀之一。", yt: "LOnTuSqrvbM", bv: "BV1eUZZYBEsV", kw: "迈克尔杰克逊 超级碗 1993 中场秀" },
    { id: "v16", title: "1995 MTV VMA 15 分钟串烧", year: "1995", kind: "live", img: "https://i.ytimg.com/vi/ECyzgLM9Gu4/hqdefault.jpg", note: "教科书级的神级现场。", yt: "ECyzgLM9Gu4", bv: "BV1mr4y1w7Jy", kw: "迈克尔杰克逊 1995 MTV 颁奖礼 表演" },
    { id: "v17", title: "1997 HIStory 巡演·Billie Jean", year: "1997", kind: "live", img: "https://i.ytimg.com/vi/pgRBrAfVttQ/hqdefault.jpg", note: "历史巡演中的完美现场。", yt: "pgRBrAfVttQ", bv: "BV1j341137Nu", kw: "迈克尔杰克逊 1997 HIStory Billie Jean 现场" },
    { id: "v18", title: "2001 三十周年演唱会", year: "2001", kind: "live", img: "https://i.ytimg.com/vi/IxbbBVewB7w/hqdefault.jpg", note: "麦迪逊广场花园的世纪重聚。", yt: "IxbbBVewB7w", bv: "BV1544y1L7FA", kw: "迈克尔杰克逊 2001 30周年演唱会" },
    { id: "v19", title: "2009《就是这样》预告 · Smooth Criminal 重制", year: "2009", kind: "doc", img: "https://i.ytimg.com/vi/EwYX2DyZRG0/hqdefault.jpg", note: "告别巡演预告（YouTube 直连；大陆端提供 B 站搜索直达，站内暂无同源预告搬运）。", yt: "EwYX2DyZRG0", bv: "", kw: "迈克尔杰克逊 This Is It 预告 Smooth Criminal" }
  ];

  /* ---------- 幕后 / 综艺花絮（第一批评选，双端可播） ---------- */
  var BTS = [
    { title: "Making of Thriller · 拍摄幕后", year: "1983", kind: "bts", img: "https://i.ytimg.com/vi/fpN9hmS3gE0/hqdefault.jpg", yt: "fpN9hmS3gE0", bv: "BV1TMRuB3E2V", note: "《Thriller》短片完整拍摄幕后，定义音乐录像带的一页。", kw: "迈克尔杰克逊 Thriller 拍摄幕后" },
    { title: "Oprah 专访 1993 · 梦幻庄园", year: "1993", kind: "bts", img: "https://i.ytimg.com/vi/6MGnsLJU_mc/hqdefault.jpg", yt: "6MGnsLJU_mc", bv: "BV1Ju4m1u7zG", note: "与奥普拉的独家深度访谈，罕见的私人一面。", kw: "迈克尔杰克逊 奥普拉 1993 专访" },
    { title: "This Is It 排练 · Earth Song", year: "2009", kind: "bts", img: "https://i.ytimg.com/vi/jk0MXvM8Ff0/hqdefault.jpg", yt: "jk0MXvM8Ff0", bv: "BV1Bk4y1m7xH", note: "告别巡演最后一次彩排：Earth Song 的舞台力量。", kw: "迈克尔杰克逊 This Is It Earth Song 彩排" },
    { title: "百事可乐 1984 广告", year: "1984", kind: "bts", img: "https://i.ytimg.com/vi/B9HSotu5OIE/hqdefault.jpg", yt: "B9HSotu5OIE", bv: "BV1f3SsBREsX", note: "经典广告与其未公开版本，见证商业史名场面。", kw: "迈克尔杰克逊 百事可乐 1984 广告" },
    { title: "Bad 幕后（音乐版）", year: "1987", kind: "bts", img: "https://i.ytimg.com/vi/zQqpUtbYuOA/hqdefault.jpg", yt: "zQqpUtbYuOA", bv: "BV1Mshg6REeF", note: "《Bad》短片拍摄幕后：排练、灯光与群舞现场。", kw: "迈克尔杰克逊 Bad 幕后花絮" },
    { title: "Black or White 拍摄幕后", year: "1991", kind: "bts", img: "https://i.ytimg.com/vi/bc7e4wt_zx8/hqdefault.jpg", yt: "bc7e4wt_zx8", bv: "BV1DotiemEwd", note: "《Black or White》短片拍摄幕后：群像与转场。", kw: "迈克尔杰克逊 Black or White 幕后花絮" },
    { title: "They Don’t Care About Us 制作花絮", year: "1996", kind: "bts", img: "https://i.ytimg.com/vi/n4z0YSPhnUk/hqdefault.jpg", yt: "n4z0YSPhnUk", bv: "BV1vpd3BaEoe", note: "巴西监狱版拍摄幕后（MTV 制作特辑）。", kw: "迈克尔杰克逊 They Don't Care About Us 制作花絮" },
    { title: "This Is It 排练 · Billie Jean", year: "2009", kind: "bts", img: "https://i.ytimg.com/vi/L5VSnVNlSHc/hqdefault.jpg", yt: "L5VSnVNlSHc", bv: "BV1Fi4y1x72N", note: "告别巡演 Billie Jean 彩排：最后一支舞的准备。", kw: "迈克尔杰克逊 This Is It Billie Jean 彩排" },
    { title: "Scream 拍摄幕后（1995）", year: "1995", kind: "bts", img: "https://i.ytimg.com/vi/pncdZc_IaYc/hqdefault.jpg", yt: "pncdZc_IaYc", bv: "BV1Le8U6uEPR", note: "史上最贵 MV 的诞生全过程：兄妹合作的幕后。", kw: "迈克尔杰克逊 Scream 拍摄幕后" },
    { title: "Beat It 拍摄幕后", year: "1983", kind: "bts", img: "https://i.ytimg.com/vi/JgnnPwewqEk/hqdefault.jpg", yt: "JgnnPwewqEk", bv: "BV177411e7sp", note: "《Beat It》短片幕后（海外 YouTube / 大陆 B 站直连）。", kw: "迈克尔杰克逊 Beat It 幕后" },
    { title: "Motown 25 排练幕后", year: "1983", kind: "bts", img: "https://i.ytimg.com/vi/9JECLRVbNXU/hqdefault.jpg", yt: "9JECLRVbNXU", bv: "BV1ss4y147RL", note: "传奇之夜前的排练影像（海外 YouTube / 大陆 B 站直连）。", kw: "迈克尔杰克逊 Motown 25 排练幕后" },
    { title: "Ghosts · 拍摄幕后（完整纪录）", year: "1997", kind: "bts", img: "https://i.ytimg.com/vi/Rx0n0j-oH5s/hqdefault.jpg", yt: "Rx0n0j-oH5s", bv: "BV1iW411c7Vn", note: "35 分钟恐怖短片《Ghosts》的完整拍摄幕后。", kw: "迈克尔杰克逊 Ghosts 拍摄幕后" },
    { title: "Earth Song 幕后（This Is It）", year: "2009", kind: "bts", img: "https://i.ytimg.com/vi/jK3wGENE3r0/hqdefault.jpg", yt: "jK3wGENE3r0", bv: "", note: "为 Earth Song 舞台做的幕后与编排记录。", kw: "迈克尔杰克逊 Earth Song 幕后" }
  ];

  /* ---------- 生活 / 新闻 / 纪录片（第三批） ---------- */
  var DOCS = [
    { title: "Journey from Motown to Off the Wall（纪录片）", year: "2016", kind: "doc", img: "https://i.ytimg.com/vi/oCEkMfW1cAA/hqdefault.jpg", yt: "oCEkMfW1cAA", bv: "BV1LHnuzQE4J", note: "Spike Lee 执导：从摩城到《疯狂》的成长之路。", kw: "迈克尔杰克逊 Journey from Motown 纪录片" },
    { title: "The Life of an Icon · 偶像的一生", year: "2011", kind: "doc", img: "https://i.ytimg.com/vi/JtOcePhdb10/hqdefault.jpg", yt: "JtOcePhdb10", bv: "BV1qZ4y1G7sT", note: "家族与友人视角的纪录长片精选。", kw: "迈克尔杰克逊 偶像的一生 纪录片" },
    { title: "2009 追思会 · 斯台普斯中心", year: "2009", kind: "doc", img: "https://i.ytimg.com/vi/C5v4SIgJ8JE/hqdefault.jpg", yt: "C5v4SIgJ8JE", bv: "BV1FF4m1N77i", note: "全球告别现场：家人、歌迷与巨星合唱的记忆。", kw: "迈克尔杰克逊 2009 追思会" }
  ];

  /* A批补充：HIStory 全场等 */
  var EXTRA = [
    { title: "HIStory 巡演 · 约翰内斯堡全场", year: "1997", kind: "live", img: "https://i.ytimg.com/vi/LcpgwROvVoI/hqdefault.jpg", yt: "LcpgwROvVoI", bv: "BV1Dz4y1c7DZ", note: "南非约翰内斯堡 1997 全场（海外 YouTube / 大陆 B 站直连）。", kw: "迈克尔杰克逊 HIStory 巡演 约翰内斯堡 全场" },
    { title: "HIStory 巡演 · 慕尼黑 1997", year: "1997", kind: "live", img: "https://i.ytimg.com/vi/XMcb07ZYXlo/hqdefault.jpg", yt: "XMcb07ZYXlo", bv: "BV1n9AozWE2E", note: "慕尼黑 HIStory 现场（海外 YouTube / 大陆 B 站直连）。", kw: "迈克尔杰克逊 HIStory 慕尼黑 1997" },
    { title: "HIStory（短片版）· History 30 特辑", year: "1995", kind: "live", img: "https://i.ytimg.com/vi/gcuWo6l-HrQ/hqdefault.jpg", yt: "gcuWo6l-HrQ", bv: "BV1dZ4y1K7HQ", note: "《HIStory》影片式特辑（海外 YouTube / 大陆 B 站直连）。", kw: "迈克尔杰克逊 HIStory 短片 特辑" },
    { title: "Blood on the Dance Floor TV 预告（1997）", year: "1997", kind: "bts", img: "https://i.ytimg.com/vi/nMTzilHZDzw/hqdefault.jpg", yt: "nMTzilHZDzw", bv: "BV1jV411R7Kq", note: "官方电视预告短片（海外 YouTube / 大陆 B 站直连）。", kw: "迈克尔杰克逊 Blood on the Dance Floor 预告" },
    { title: "Dangerous 巡演 · 东京 1992", year: "1992", kind: "live", img: "https://i.ytimg.com/vi/n_prwDOmmWw/hqdefault.jpg", yt: "n_prwDOmmWw", bv: "BV1GK4y1T7J6", note: "东京巨蛋 Dangerous 现场精选（海外 YouTube / 大陆 B 站直连）。", kw: "迈克尔杰克逊 东京 1992 Dangerous" },
    { title: "Blood on the Dance Floor（官方 MV）", year: "1997", kind: "mv", img: "https://i.ytimg.com/vi/F5hg0elhWPE/hqdefault.jpg", yt: "F5hg0elhWPE", bv: "BV1yf4y167zk", note: "同名歌曲官方影像（海外 YouTube / 大陆 B 站直连）。", kw: "迈克尔杰克逊 Blood on the Dance Floor 官方MV" },
    { title: "Dangerous 巡演 · 东京 1992（另一场完整记录）", year: "1992", kind: "live", img: "https://i.ytimg.com/vi/PtuNbVUCzSg/hqdefault.jpg", yt: "PtuNbVUCzSg", bv: "", note: "东京站另一场的完整记录（YouTube 直连；大陆端提供 B 站搜索直达）。", kw: "迈克尔杰克逊 东京 1992 完整" },
    { title: "HIStory 巡演 · 慕尼黑 Earth Song（修复版）", year: "1997", kind: "live", img: "https://i.ytimg.com/vi/Z-dEhAXhPko/hqdefault.jpg", yt: "Z-dEhAXhPko", bv: "", note: "慕尼黑专场的 Earth Song 名场面（同场完整见上）（YouTube 直连；大陆端提供 B 站搜索直达）。", kw: "迈克尔杰克逊 慕尼黑 1997 Earth Song" },
    { title: "Dangerous 巡演 · 东京 12/1992（修复版）", year: "1992", kind: "live", img: "https://i.ytimg.com/vi/9jYogtPyvv0/hqdefault.jpg", yt: "9jYogtPyvv0", bv: "BV1UDMx6kEuV", note: "东京站 1992 年 12 月场（海外 YouTube / 大陆 B 站直连）。", kw: "迈克尔杰克逊 东京 1992 12月" },
    { title: "Blood on the Dance Floor（8mm 版）", year: "1997", kind: "mv", img: "https://i.ytimg.com/vi/GeTx0SaIF6Y/hqdefault.jpg", yt: "GeTx0SaIF6Y", bv: "", note: "8mm 胶片质感的另一版影像（YouTube 直连；大陆走 B 站搜索直达）。", kw: "迈克尔杰克逊 Blood on the Dance Floor 8mm" },
    { title: "Dangerous 巡演 · 慕尼黑 1992（素材合集）", year: "1992", kind: "live", img: "https://i.ytimg.com/vi/VkMlqFcmfcs/hqdefault.jpg", yt: "VkMlqFcmfcs", bv: "BV1JU4y147nB", note: "慕尼黑 1992 现场素材合集（海外 YouTube / 大陆 B 站直连）。", kw: "迈克尔杰克逊 慕尼黑 1992 合集" }
  ];

  VIDEOS = VIDEOS.concat(BTS).concat(DOCS).concat(EXTRA);

  /* ---------- 现场演唱会 ---------- */
  var CONCERTS = [
    { title: "The Jackson 5 / The Jacksons 巡演时代", years: "1970s — 1984", desc: "从俱乐部、电视综艺到体育馆：Jackson 5 时代一路巡演的起点。（主影像为 1972 巴黎欧洲巡演整场选段）", tag: "家族", img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fe/The_Jackson_5_1972.JPG/960px-The_Jackson_5_1972.JPG", kw: "杰克逊五兄弟 1972 巴黎演唱会", yt: "2nlHMJ_8gJ8", bv: "BV1mx411V7uN" },
    { title: "Bad World Tour", years: "1987 — 1989", desc: "首个个人世界巡演：123 场、横跨 15 国；1988 温布利两晚由官方完整发行。", tag: "首个", img: "https://i.ytimg.com/vi/9shByOh8fVE/hqdefault.jpg", kw: "迈克尔杰克逊 1988 温布利 Bad 巡回演唱会", yt: "9shByOh8fVE", bv: "BV1aG411i7Pw" },
    { title: "Dangerous World Tour", years: "1992 — 1993", desc: "69 场；1992 布加勒斯特现场被奉为经典，首演电光舞步与经典串烧。", tag: "巅峰", img: "https://i.ytimg.com/vi/Hxgo-Qu-ZZE/hqdefault.jpg" , kw: "迈克尔杰克逊 1992 布加勒斯特 危险之旅 全场", yt: "Hxgo-Qu-ZZE", bv: "BV147411H7Pp" },
    { title: "HIStory World Tour", years: "1996 — 1997", desc: "82 场、票房纪录级巡演；慕尼黑 / 布鲁内 / 哥本哈根等现场均有高清记录。", tag: "纪录", img: "https://i.ytimg.com/vi/XMcb07ZYXlo/hqdefault.jpg" , kw: "迈克尔杰克逊 1997 慕尼黑 HIStory 全场", yt: "XMcb07ZYXlo", bv: "BV1n9AozWE2E" },
    { title: "MJ & Friends", years: "1999", desc: "韩国首尔与德国慕尼黑慈善双城演出，与众星同台的世纪同框。（主影像为 1999.6.27 慕尼黑 MJ 主秀段）", tag: "慈善", img: "https://i.ytimg.com/vi/WeoFEKFBpQ4/hqdefault.jpg", kw: "迈克尔杰克逊 MJ and Friends 慕尼黑 1999", yt: "WeoFEKFBpQ4", bv: "BV1Qw411F7ST" },
    { title: "United We Stand: What More Can I Give", years: "2001 · 华盛顿", desc: "911 慈善赈灾演出，MJ 登台合唱《What More Can I Give》。", tag: "慈善", img: "https://i.ytimg.com/vi/hydljtnt7B8/hqdefault.jpg", kw: "迈克尔杰克逊 United We Stand 2001 What More Can I Give", yt: "hydljtnt7B8", bv: "BV1ms411b7x5" },
    { title: "30th Anniversary Celebration", years: "2001 · 纽约 MSG", desc: "入行 30 周年双夜庆典：麦迪逊广场花园的世纪重聚（MSG 2001 现场整场）。", tag: "庆典", img: "https://i.ytimg.com/vi/jaDEmw2ER0w/hqdefault.jpg", kw: "迈克尔杰克逊 2001 30周年演唱会 MSG 全场", yt: "jaDEmw2ER0w", bv: "BV1CgrRBbEyy" },
    { title: "This Is It", years: "2009 宣布", desc: "计划中的伦敦 50 场告别演出；排练影像最终集结为纪录电影。", tag: "告别", img: "https://i.ytimg.com/vi/jk0MXvM8Ff0/hqdefault.jpg" , kw: "迈克尔杰克逊 This Is It 彩排", yt: "jk0MXvM8Ff0", bv: "BV1Bk4y1m7xH" },
    { title: "Motown 25 · 月球漫步之夜", years: "1983 · 电视特辑", desc: "Motown 25 周年特别节目首秀月球漫步——流行文化史上的一夜。（实况 Billie Jean 现场）", tag: "电视特辑", img: "https://i.ytimg.com/vi/CauNjt2j-BM/hqdefault.jpg", kw: "迈克尔杰克逊 Motown 25 Billie Jean 1983 月球漫步", yt: "CauNjt2j-BM", bv: "BV1nwydBvExp" },
    { title: "Super Bowl XXVII 中场秀", years: "1993", desc: "被称为史上最佳超级碗中场秀之一：从人海战歌到传世定格。", tag: "电视特辑", img: "https://i.ytimg.com/vi/LOnTuSqrvbM/hqdefault.jpg" , kw: "迈克尔杰克逊 1993 超级碗中场秀", yt: "LOnTuSqrvbM", bv: "BV1eUZZYBEsV" },
    { title: "MTV VMA 1995 · 十五分钟封神", years: "1995", desc: "从颁奖到串烧舞台的教科书级 15 分钟。", tag: "电视特辑", img: "https://i.ytimg.com/vi/ECyzgLM9Gu4/hqdefault.jpg" , kw: "迈克尔杰克逊 1995 MTV VMA 15分钟 现场", yt: "ECyzgLM9Gu4", bv: "BV1mr4y1w7Jy" },
    { title: "World Music Awards 1996 · Earth Song", years: "1996 · 摩纳哥", desc: "获奖后以《Earth Song》现场震撼全场的历史性演出。（B 站暂缺可靠同场源，大陆端走站内搜索）", tag: "电视特辑", img: "https://i.ytimg.com/vi/8swpZpWNkZI/hqdefault.jpg", kw: "迈克尔杰克逊 1996 World Music Awards Earth Song", yt: "8swpZpWNkZI", bv: "" }
  ];

  /* ---------- 背景音乐轮播（双端源 + 时长自动切歌） ---------- */
  var MUSIC = [
    { title: "Billie Jean", year: "1983", yt: "Zi_XLOBDo_Y", bv: "BV1EzRLB5EAm", durSec: 294 },
    { title: "Thriller", year: "1983", yt: "sOnqjkJTMaA", bv: "BV19g411i76E", durSec: 357 },
    { title: "Beat It", year: "1983", yt: "oRdxUFDoQe0", bv: "BV1wbGNekERR", durSec: 258 },
    { title: "Smooth Criminal", year: "1988", yt: "h_D3VFfhvs4", bv: "BV11rByYTETk", durSec: 257 },
    { title: "Bad", year: "1987", yt: "dsUXAEzaC3Q", bv: "BV1gz4y1U7UR", durSec: 247 },
    { title: "Black or White", year: "1991", yt: "F2AitTPI5U0", bv: "BV1bY4y1m7gu", durSec: 274 },
    { title: "Man in the Mirror", year: "1988", yt: "PivWY9wn5ps", bv: "BV1ZbuC6yEkk", durSec: 319 },
    { title: "Heal the World", year: "1992", yt: "BWf-eARnf6U", bv: "BV1ZvHNzJEtu", durSec: 384 },
    { title: "Earth Song", year: "1995", yt: "XAi3VTSdTxU", bv: "BV1fE411F7pa", durSec: 406 },
    { title: "Don’t Stop ’Til You Get Enough", year: "1979", yt: "yURRmWtbTbo", bv: "BV1Sy4y1S7MJ", durSec: 363 }
  ];

  /* ---------- 现场与历史影像图集（Wikimedia Commons 自由许可 / 官方海报） ---------- */
  var GALLERY = [
    { img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/08/Michael_Jackson_-_High_Res_version_%284518221965%29.jpg/960px-Michael_Jackson_-_High_Res_version_%284518221965%29.jpg", title: "1988 宣传影像", sub: "Michael Jackson, 1988 · CC BY 2.0", src: "https://commons.wikimedia.org/wiki/File:Michael_Jackson_-_High_Res_version_(4518221965).jpg" },
    { img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/Michael_Jackson%2C_1988_%283662753958%29.jpg/960px-Michael_Jackson%2C_1988_%283662753958%29.jpg", title: "1988 现场时刻", sub: "Michael Jackson, 1988 · CC BY 2.0", src: "https://commons.wikimedia.org/wiki/File:Michael_Jackson,_1988_(3662753958).jpg" },
    { img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c0/Michael_Jackson%2C_1988_%283662754910%29.jpg/960px-Michael_Jackson%2C_1988_%283662754910%29.jpg", title: "1988 舞台剪影", sub: "Michael Jackson, 1988 · CC BY 2.0", src: "https://commons.wikimedia.org/wiki/File:Michael_Jackson,_1988_(3662754910).jpg" },
    { img: "https://upload.wikimedia.org/wikipedia/en/9/99/Badliveatwembley.jpg", title: "1988 温布利现场（官方海报）", sub: "Live at Wembley · 官方发行", src: "https://en.wikipedia.org/wiki/File:Badliveatwembley.jpg" },
    { img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/Michael_Jackson_-_High_Res_version_%284518178333%29.jpg/960px-Michael_Jackson_-_High_Res_version_%284518178333%29.jpg", title: "舞台上的他", sub: "Michael Jackson · CC BY 2.0", src: "https://commons.wikimedia.org/wiki/File:Michael_Jackson_-_High_Res_version_(4518178333).jpg" },
    { img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/Michael_Jackson_-_High_Res_version_%284518178333%29.jpg/960px-Michael_Jackson_-_High_Res_version_%284518178333%29.jpg", title: "现场一瞬", sub: "Michael Jackson · CC BY 2.0", src: "https://commons.wikimedia.org/wiki/File:Michael_Jackson_-_High_Res_version_(4518178333).jpg" },
    { img: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/32/4f/fd/324ffda2-9e51-8f6a-0c2d-c6fd2b41ac55/074643811224.jpg/600x600bb.jpg", title: "巡演时代 · Thriller", sub: "专辑视觉 · Apple Music", src: "https://music.apple.com" },
    { img: "https://upload.wikimedia.org/wikipedia/en/1/11/Michaeljacksondangerous.jpg", title: "巡演时代 · Dangerous", sub: "Dangerous 专辑视觉 · Wikipedia", src: "https://en.wikipedia.org/wiki/Dangerous_(Michael_Jackson_album)" },
    { img: "https://upload.wikimedia.org/wikipedia/en/3/35/MJ-HIStory.jpg", title: "巡演时代 · HIStory", sub: "HIStory 专辑视觉 · Wikipedia", src: "https://en.wikipedia.org/wiki/HIStory:_Past,_Present_and_Future,_Book_I" },
    { img: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/d5/5f/28/d55f28f4-610c-ee81-dc16-a01cda46bbc4/886443546264.jpg/600x600bb.jpg", title: "巡演时代 · Bad", sub: "Bad 专辑视觉 · Apple Music", src: "https://music.apple.com" },
    { img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fe/The_Jackson_5_1972.JPG/960px-The_Jackson_5_1972.JPG", title: "1972 · Jackson 5", sub: "The Jackson 5, 1972 · PD", src: "https://commons.wikimedia.org/wiki/File:The_Jackson_5_1972.JPG" }
  ];

  /* ---------- 经典名场面（大播放区轮播；双端源 + 幕布海报） ---------- */
  var MOMENTS = [
    { title: "Billie Jean · 月球漫步之夜", sub: "1983 · Motown 25 现场", yt: "Zi_XLOBDo_Y", bv: "BV1EzRLB5EAm", poster: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/32/4f/fd/324ffda2-9e51-8f6a-0c2d-c6fd2b41ac55/074643811224.jpg/1000x1000bb.jpg" },
    { title: "Thriller · 音乐短片革命", sub: "1983 · Official Video", yt: "sOnqjkJTMaA", bv: "BV19g411i76E", poster: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/32/4f/fd/324ffda2-9e51-8f6a-0c2d-c6fd2b41ac55/074643811224.jpg/1000x1000bb.jpg" },
    { title: "1992 布加勒斯特 · 危险之旅现场", sub: "Dangerous Tour · Romania", yt: "Hxgo-Qu-ZZE", bv: "BV147411H7Pp", poster: "https://upload.wikimedia.org/wikipedia/en/1/11/Michaeljacksondangerous.jpg" },
    { title: "1995 MTV VMA · 十五分钟封神现场", sub: "MTV Video Music Awards", yt: "ECyzgLM9Gu4", bv: "BV1mr4y1w7Jy", poster: "https://upload.wikimedia.org/wikipedia/en/3/35/MJ-HIStory.jpg" },
    { title: "1993 超级碗中场秀", sub: "Super Bowl XXVII", yt: "LOnTuSqrvbM", bv: "BV1eUZZYBEsV", poster: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/d5/5f/28/d55f28f4-610c-ee81-dc16-a01cda46bbc4/886443546264.jpg/1000x1000bb.jpg" },
    { title: "Beat It · 街舞对决", sub: "1983 · Official Video", yt: "oRdxUFDoQe0", bv: "BV1wbGNekERR", poster: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/32/4f/fd/324ffda2-9e51-8f6a-0c2d-c6fd2b41ac55/074643811224.jpg/1000x1000bb.jpg" },
    { title: "Smooth Criminal · 45°", sub: "1988 · Official Video", yt: "h_D3VFfhvs4", bv: "BV11rByYTETk", poster: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/d5/5f/28/d55f28f4-610c-ee81-dc16-a01cda46bbc4/886443546264.jpg/1000x1000bb.jpg" },
    { title: "Black or White", sub: "1991 · Official Video", yt: "F2AitTPI5U0", bv: "BV1bY4y1m7gu", poster: "https://upload.wikimedia.org/wikipedia/en/1/11/Michaeljacksondangerous.jpg" },
    { title: "Remember the Time", sub: "1992 · Official Video", yt: "LeiFF0gvqcc", bv: "BV1cs8z6sEhC", poster: "https://upload.wikimedia.org/wikipedia/en/1/11/Michaeljacksondangerous.jpg" },
    { title: "Man in the Mirror", sub: "1988 · Official Video", yt: "PivWY9wn5ps", bv: "BV1ZbuC6yEkk", poster: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/d5/5f/28/d55f28f4-610c-ee81-dc16-a01cda46bbc4/886443546264.jpg/1000x1000bb.jpg" },
    { title: "Scream · 兄妹对决", sub: "1995 · Official Video", yt: "0P4A1K4lXDo", bv: "BV1au411x7Y4", poster: "https://upload.wikimedia.org/wikipedia/en/3/35/MJ-HIStory.jpg" },
    { title: "Earth Song", sub: "1995 · Official Video", yt: "XAi3VTSdTxU", bv: "BV1fE411F7pa", poster: "https://upload.wikimedia.org/wikipedia/en/3/35/MJ-HIStory.jpg" },
    { title: "Don’t Stop ’Til You Get Enough", sub: "1979 · Official Video", yt: "yURRmWtbTbo", bv: "BV1Sy4y1S7MJ", poster: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/0c/fe/a3/0cfea324-57c1-d530-5248-9bb591bbd7bf/074643574525.jpg/1000x1000bb.jpg" },
    { title: "Heal the World", sub: "1992 · Official Video", yt: "BWf-eARnf6U", bv: "BV1ZvHNzJEtu", poster: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/c5/8d/b1/c58db1f1-0249-7a52-b58c-6f4eb145b06a/884977149166.jpg/1000x1000bb.jpg" },
    { title: "1997 慕尼黑 · Billie Jean", sub: "HIStory Tour", yt: "pgRBrAfVttQ", bv: "BV1j341137Nu", poster: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/dc/02/ef/dc02eff2-027c-a468-7d7b-aa9404e74f1a/mzi.mgytcnob.jpg/1000x1000bb.jpg" }
  ];

  /* ---------- 首页人物像轮播（真实影像 / 专辑封面；Ken Burns 自动切换） ---------- */
  var HERO_SLIDES = [
    { img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/08/Michael_Jackson_-_High_Res_version_%284518221965%29.jpg/960px-Michael_Jackson_-_High_Res_version_%284518221965%29.jpg", cap: "1988 · 经典宣传照", sub: "Wikimedia Commons · CC BY 2.0" },
    { img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/Michael_Jackson%2C_1988_%283662753958%29.jpg/960px-Michael_Jackson%2C_1988_%283662753958%29.jpg", cap: "1988 · 舞台上的他", sub: "Wikimedia Commons · CC BY 2.0" },
    { img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c0/Michael_Jackson%2C_1988_%283662754910%29.jpg/960px-Michael_Jackson%2C_1988_%283662754910%29.jpg", cap: "1988 · 王者姿态", sub: "Wikimedia Commons · CC BY 2.0" },
    { img: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/32/4f/fd/324ffda2-9e51-8f6a-0c2d-c6fd2b41ac55/074643811224.jpg/1000x1000bb.jpg", cap: "1982 · Thriller", sub: "史上最畅销专辑 · Apple Music" },
    { img: "https://upload.wikimedia.org/wikipedia/en/1/11/Michaeljacksondangerous.jpg", cap: "1991 · Dangerous", sub: "视觉革命 · Wikipedia" },
    { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Michael_Jackson_-_High_Res_version_%284518178333%29.jpg/960px-Michael_Jackson_-_High_Res_version_%284518178333%29.jpg", cap: "1988 · 镜头内外", sub: "Wikimedia Commons · CC BY 2.0" },
    { img: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/d5/5f/28/d55f28f4-610c-ee81-dc16-a01cda46bbc4/886443546264.jpg/800x800bb.jpg", cap: "1987 · Bad 时代", sub: "专辑视觉 · Apple Music" },
    { img: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/0c/fe/a3/0cfea324-57c1-d530-5248-9bb591bbd7bf/074643574525.jpg/800x800bb.jpg", cap: "1979 · Off the Wall", sub: "专辑视觉 · Apple Music" },
    { img: "https://is1-ssl.mzstatic.com/image/thumb/Music/y2005/m01/d20/h14/s05.bkornbke.jpg/800x800bb.jpg", cap: "1985 · We Are the World", sub: "单曲封面 · Apple Music" },
    { img: "https://upload.wikimedia.org/wikipedia/en/9/99/Badliveatwembley.jpg", cap: "1988 · 温布利现场", sub: "Live at Wembley · 官方" },
    { img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fe/The_Jackson_5_1972.JPG/960px-The_Jackson_5_1972.JPG", cap: "1972 · Jackson 5", sub: "Wikimedia Commons · PD" }
  ];

  /* ---------- 颁奖现场（影响与荣誉 · 双端可播） ---------- */
  var AWARDS = [
    { title: "MTV VMA 1995 · 从颁奖到封神现场", year: "1995", img: "https://i.ytimg.com/vi/ECyzgLM9Gu4/hqdefault.jpg", yt: "ECyzgLM9Gu4", bv: "BV1mr4y1w7Jy", note: "MTV 颁奖礼现场：十五分钟传奇串烧，教科书级舞台。" },
    { title: "格莱美 1984 · Thriller 之夜", year: "1984", img: "https://i.ytimg.com/vi/x1mgsRLPVzc/hqdefault.jpg", yt: "x1mgsRLPVzc", bv: "BV1U4421A7kd", note: "《Thriller》横扫的一夜：年度专辑与 8 项大奖回顾。" },
    { title: "全美音乐奖 AMA 1984 · 与 Diana Ross 同台", year: "1984", img: "https://i.ytimg.com/vi/IUQUI_6mTAE/hqdefault.jpg", yt: "IUQUI_6mTAE", bv: "BV1sW411A7Fe", note: "1984 全美音乐奖现场：当年的王者时刻。" },
    { title: "摇滚名人堂 2001 入选", year: "2001", img: "https://i.ytimg.com/vi/tVLXEwUK-1M/hqdefault.jpg", yt: "tVLXEwUK-1M", bv: "BV1ys411p7JL", note: "以独唱艺人身份二度入选摇滚名人堂的感言现场。" },
    { title: "格莱美传奇奖 1993 · Janet 颁发", year: "1993", img: "https://i.ytimg.com/vi/MH7VL7j_H_4/hqdefault.jpg", yt: "MH7VL7j_H_4", bv: "BV1mS4y1W7JV", note: "妹妹 Janet 颁发传奇奖，罕见的深情感言现场。" },
    { title: "世界音乐奖 2006 · 钻石奖", year: "2006", img: "https://i.ytimg.com/vi/-jDPYz6vN_Q/hqdefault.jpg", yt: "-jDPYz6vN_Q", bv: "BV1dZ4y1P7nj", note: "荣获钻石奖并以《We Are the World》收场的经典现场。" },
    { title: "1988 格莱美现场 · 双曲连唱", year: "1988", img: "https://i.ytimg.com/vi/qNvrsoqZnuA/hqdefault.jpg", yt: "qNvrsoqZnuA", bv: "BV1sT41127R8", note: "《The Way You Make Me Feel》与《Man in the Mirror》的经典连唱。" },
    { title: "AMA 1989 · Eddie Murphy 颁发", year: "1989", img: "https://i.ytimg.com/vi/2NyQUW9GQWg/hqdefault.jpg", yt: "2NyQUW9GQWg", bv: "BV1NJ411b7Ef", note: "全美音乐奖颁奖现场（海外 YouTube / 大陆 B 站直连）。" },
    { title: "千禧音乐奖 2000", year: "2000", img: "https://i.ytimg.com/vi/6wFqeVuE2So/hqdefault.jpg", yt: "6wFqeVuE2So", bv: "BV1Px411H7aH", note: "世纪之交的颁奖舞台（海外 YouTube / 大陆 B 站直连）。" },
    { title: "MTV Video Vanguard 先锋奖", year: "1988", img: "https://i.ytimg.com/vi/c0OPQXn9I0o/hqdefault.jpg", yt: "c0OPQXn9I0o", bv: "BV1F541147eH", note: "获颁 MTV 先锋奖的现场（海外 YouTube / 大陆 B 站直连）。" },
    { title: "Radio Music Awards 2003", year: "2003", img: "https://i.ytimg.com/vi/cjRivp06ms4/hqdefault.jpg", yt: "cjRivp06ms4", bv: "BV1P94y127po", note: "电台音乐奖现场（海外 YouTube / 大陆 B 站直连）。" },
    { title: "World Music Awards 2000", year: "2000", img: "https://i.ytimg.com/vi/C6UMDlmT63g/hqdefault.jpg", yt: "C6UMDlmT63g", bv: "BV1bE411Y7a3", note: "千禧年世界音乐奖现场（海外 YouTube / 大陆 B 站直连）。" },
    { title: "MTV VMA 2002 舞台（归档）", year: "2002", img: "https://i.ytimg.com/vi/3mbFQRWUKEk/hqdefault.jpg", yt: "3mbFQRWUKEk", bv: "BV1fKRRYfEc5", note: "2002 MTV 颁奖舞台片段（海外 YouTube / 大陆 B 站直连）。" },
    { title: "EMA 2009 · 致敬时刻", year: "2009", img: "https://i.ytimg.com/vi/wfl6h-NK7kM/hqdefault.jpg", yt: "wfl6h-NK7kM", bv: "", note: "欧洲音乐录影带奖 2009 对 MJ 的致敬现场（YouTube 直连；大陆走 B 站搜索直达）。" }
  ];

  window.MJ_DATA = { ALBUMS: ALBUMS, VIDEOS: VIDEOS, CONCERTS: CONCERTS, MUSIC: MUSIC, GALLERY: GALLERY, MOMENTS: MOMENTS, HERO_SLIDES: HERO_SLIDES, AWARDS: AWARDS };
})();
