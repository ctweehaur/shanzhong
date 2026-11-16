// ==========================================================================
// 📚 《山中》课文词典与诗行数据集 (data.js) - 4行逐句对齐古诗词黄金版
// 格式：["字词", "拼音", "EN 英文", "BM 马来文", "古义/本义：...\n今义：...", "u (可选:专名下划线)"]
// 结构：共 4 个区块（1–4 对应五言绝句四句），与 analysis.js 1–4 完全对齐
// ==========================================================================

const lessonTitle = "山中";

const lessonData = [
    // ===== 区块 1：首句（起句） =====
    ["荆溪", "jīng xī", "Jing Stream (in Lantian, Shaanxi)", "Anak Sungai Jing", "水名：本名长水，又称浐水，源出陕西蓝田县西南秦岭山中，北流汇入灞水", "u"],
    ["白石", "bái shí", "white pebbles / stones", "batu-batu putih", "偏正短语：溪底洁白的石头"],
    ["出", "chū", "emerge / become visible", "timbul / kelihatan jelas", "古义：显露出来（初冬水浅退落，故溪石显露）\n今义：由内向外走出"],
    ["，", "", "", "", ""],

    ["\n", "", "", "", ""], // 👈 区块 2：次句（承句）

    ["天", "tiān", "the weather", "cuaca", "名词：天气、时令"],
    ["寒", "hán", "grows cold", "bertambah dingin", "形容词：寒冷（点明深秋初冬之交的时节）"],
    ["红叶", "hóng yè", "red maple leaves", "daun-daun merah", "偏正短语：秋天经霜变红的枫叶"],
    ["稀", "xī", "sparse / few", "jarang / sedikit", "古义：稀少、零落（形容词）\n今义：稀有、稀薄"],
    ["。", "", "", "", ""],

    ["\n", "", "", "", ""], // 👈 区块 3：第三句（转句）

    ["山路", "shān lù", "the mountain path", "lorong di gunung", "偏正短语：山间蜿蜒的小路"],
    ["元", "yuán", "originally / in fact", "pada asalnya / sebenarnya", "古义：通“原”，本来、原本（副词）\n今义：第一、元旦或货币单位"],
    ["无", "wú", "has no", "tiada", "动词：没有"],
    ["雨", "yǔ", "rain", "hujan", "名词：雨水"],
    ["，", "", "", "", ""],

    ["\n", "", "", "", ""], // 👈 区块 4：末句（合句）

    ["空翠", "kōng cuì", "misty green mountain shade", "warna gunung hijau yang berkabus", "古义：空濛青翠的山色与山岚水汽\n今义：仅用于古诗文语境"],
    ["湿", "shī", "moistens / dampens", "membasahi / melembapkan", "古义：使……沾湿、浸润（形容词使动用法）\n今义：潮湿，与“干”相对（形容词）"],
    ["人", "rén", "people's / traveller's", "orang punya", "名词：山中行人、游人"],
    ["衣", "yī", "clothes / garments", "pakaian", "名词：衣裳"],
    ["。", "", "", "", ""],

    ["\n", "", "", "", ""], // 👈 出处（自动右对齐落款）

    ["（〔", "", "", "", ""],
    ["唐", "táng", "Tang Dynasty", "Dinasti Tang", "朝代名，唐朝", "u"],
    ["〕", "", "", "", ""],
    ["王维", "wáng wéi", "Wang Wei (approx. 701–761)", "Wang Wei", "唐代山水田园诗派代表诗人、画家，字摩诘，世称“王右丞”，有“诗佛”之誉", "u"],
    ["《", "", "", "", ""],
    ["山中", "shān zhōng", "In the Mountains", "Di Dalam Gunung", "五言写景绝句，作于隐居蓝田辋川山庄之时"],
    ["》）", "", "", "", ""]
];
