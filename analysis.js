// ==========================================================================
// 📖 《山中》深度文本赏析数据库 (analysis.js) - 4行逐句对齐古诗词黄金版
// 键值 1–4 对应《山中》首句、次句、第三句、末句
// ==========================================================================

const U_TAG = (text) => `<span class="proper-noun">${text}</span>`;

const GRAMMAR_TAG = (type, text) => 
    `<span style="display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.22); padding:2px 8px; margin:2px 4px 2px 0; border-radius:5px; font-size:12px; font-weight:800; vertical-align:top;">${type}：${text}</span>`;

const ANCIENT_MODERN_TAG = (word, ancient, modern) => 
    `<div style="display:inline-flex; flex-direction:column; background:var(--notebook-bg); border:1px solid rgba(43,76,101,0.22); padding:5px 10px; margin:3px 6px 3px 0; border-radius:6px; font-size:12px; line-height:1.55; vertical-align:middle;">` +
        `<div style="color:var(--primary-color); font-weight:800;">🔹 【${word}】古义：${ancient}</div>` +
        `<div style="color:var(--text-muted); font-weight:600; border-top:1px dashed var(--input-border); margin-top:2px; padding-top:2px;">🔸 【${word}】今义：${modern}</div>` +
    `</div>`;

const lessonTeacherAnalysis = {
    overview: "<strong>【全诗白话译文】</strong><br>" +
        "<span style='font-weight:500; display:inline-block; margin-top:6px; line-height:1.95;'>" +
        U_TAG("荆溪") + "水落，水底洁白的石头显露出来；天气转寒，霜染的红叶变得稀疏凋零。山间的小路原本没有下雨，但那满山空濛青翠的浓浓雾气，却仿佛沾湿了行人的衣衫。" +
        "</span><br><br>" +
        "<strong>【创作背景与艺术特色（“诗佛”王维的诗中有画）】</strong><br>" +
        "<span style='font-weight:500; display:inline-block; margin-top:4px;'>《山中》是盛唐山水田园诗派代表人物" + U_TAG("王维") + "（字摩诘，世称“王右丞”，有“诗佛”之称）隐居蓝田辋川山庄时创作的一首五言写景绝句。北宋" + U_TAG("苏轼") + "曾盛赞他：<strong>“味摩诘之诗，诗中有画；观摩诘之画，画中有诗。”</strong>在这首短短二十字的绝句中，诗人以<strong>溪底白石、枝头红叶、满山空翠</strong>三组意象，调配出白、红、翠三色交融的明净画卷，更以“山路元无雨，空翠湿人衣”化视觉为触觉，把初冬山林的清幽空灵与自己闲适恬淡的隐逸心境表现得淋漓尽致。</span>",

    paragraphs: {
        1: "<strong>【首句（起句）赏析：溪落石出，勾勒初冬近景】</strong>" +
           "<div style='margin-top:8px; padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
               "<div style='color:var(--text-color); font-weight:800;'>" +
                   "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                   U_TAG("荆溪") + "[白石][出]，" +
               "</div>" +
               "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                   "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                   U_TAG("荆溪") + "水位浅落，[水底洁白的石头]✓[显露出来]✓，" +
               "</div>" +
               "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                   ANCIENT_MODERN_TAG("出", "显露出来（水落石出）", "走出、出去") +
                   GRAMMAR_TAG("俯视近景与时令", "入冬枯水期溪流变浅，清澈见底，故水底白石嶙峋显露，以“白”色定下明净基调") +
               "</div>" +
           "</div>",

        2: "<strong>【次句（承句）赏析：天寒叶稀，点染初冬远景】</strong>" +
           "<div style='margin-top:8px; padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
               "<div style='color:var(--text-color); font-weight:800;'>" +
                   "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                   "天寒[红叶][稀]。" +
               "</div>" +
               "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                   "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                   "天气转寒，[经霜变红的枫叶]✓变得[稀疏凋零]✓。" +
               "</div>" +
               "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                   ANCIENT_MODERN_TAG("稀", "稀少、零落（形容词）", "稀有、稀薄") +
                   GRAMMAR_TAG("诗中有画（色彩对比）", "仰视高处枝头稀疏的“红叶”，与首句低处溪中“白石”高低相映、红白对照，画面明朗清澈") +
               "</div>" +
           "</div>",

        3: "<strong>【第三句（转句）赏析：山路无雨，欲扬先抑】</strong>" +
           "<div style='margin-top:8px; padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
               "<div style='color:var(--text-color); font-weight:800;'>" +
                   "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                   "山路[元]无雨，" +
               "</div>" +
               "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                   "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                   "山间的小路[原本]✓没有下雨，" +
               "</div>" +
               "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                   ANCIENT_MODERN_TAG("元", "通“原”，本来、原本（副词）", "第一、元旦、货币单位") +
                   GRAMMAR_TAG("章法转折（欲扬先抑）", "先平实交代“山路本来无雨”的客观事实，为末句“湿人衣”的奇妙错觉蓄足气势") +
               "</div>" +
           "</div>",

        4: "<strong>【末句（合句）赏析：空翠湿衣，化视觉为触觉（全诗诗眼）】</strong>" +
           "<div style='margin-top:8px; padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
               "<div style='color:var(--text-color); font-weight:800;'>" +
                   "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                   "[空翠][湿]人衣。" +
               "</div>" +
               "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                   "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                   "但那满山[空濛青翠的山色与山岚雾气]✓，却仿佛[浸润沾湿]✓了行人的衣衫。" +
               "</div>" +
               "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                   ANCIENT_MODERN_TAG("空翠", "空濛青翠的山色与山岚水汽", "仅用于古诗文语境") +
                   ANCIENT_MODERN_TAG("湿", "使……沾湿（形容词使动用法）", "潮湿（形容词）") +
                   GRAMMAR_TAG("理解与探究第1题（核心考点）", "虚实结合、化视觉为触觉（通感）！将视觉所见的青翠山色转化为触觉的湿润凉意，写尽深山空灵幽静") +
               "</div>" +
           "</div>"
    }
};
