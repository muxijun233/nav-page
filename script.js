const STORE_KEY = 'nav-page-data-v1';
const WP_KEY = 'nav-page-wallpaper';
const CUSTOM_WP_KEY = 'nav-page-custom-wp';
const NAME_KEY = 'nav-page-name';

const ICONS = {
  globe:   'M12 3v16M3 8h18M5 8a7 7 0 0 0 7 7 7 7 0 0 0 7-7',
  search:  'M11 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM21 21l-6-6',
  book:    'M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z',
  code:    'm8 6-6 6 6 6M16 6l6 6-6 6',
  doc:     'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6',
  mail:    'M4 4h16v16H4zM4 6l8 6 8-6',
  translate:'M4 5h7M7.5 3v2M6 20l4-8 4 8M8 17h4M15 5l2-3 2 3M16 4h3M15 12l3-5 3 5M16 20l2-3 2 3',
  map:     'M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11zM12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
  weather: 'M6 20a4 4 0 0 1-.5-7.97A5 5 0 0 1 15 10a4 4 0 0 1 0 8z',
  video:   'M12 3v3M12 3l-2-2M12 3l2-2M4 7h16v12H4zM9 11v3M15 11v3',
  music:   'M9 18V6l10-2v12M6 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  cart:    'M6 6l2-3M18 6l-2-3M4 6h16l-1.5 14H5.5z',
  bag:     'M6 6h12l-1 12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2zM9 6a3 3 0 0 1 6 0',
  train:   'M3 5a2 2 0 0 1 2-2h14v14H5a2 2 0 0 1-2-2zM3 9h16M7 3v18',
  shield:  'M12 3l8 4v5c0 4.5-3 8.5-8 10-5-1.5-8-5.5-8-10V7z',
  star:    'M12 3l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8L6.6 19.6l1-6L3.3 9.4l6-.9z',
  qa:      'M4 5h10M9 3v2M8 21l5-7M8 13h6',
  at:      'M12 12a3 3 0 1 0-3-3M14 8a12 12 0 0 1 5 10',
  chat:    'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
  check:   'M20 6L9 17l-5-5'
};
const ICON_NAMES = {
  globe:'地球', search:'搜索', book:'书本', code:'代码', doc:'文档', mail:'邮箱',
  translate:'翻译', map:'地图', weather:'天气', video:'视频', music:'音乐',
  cart:'购物车', bag:'购物袋', train:'火车', shield:'安全', star:'星星',
  qa:'问答', at:'@', chat:'聊天', check:'对勾'
};

const WALLPAPERS = [
  {id:'light',  name:'晴空蓝', dark:false, bg:'radial-gradient(1100px 500px at 50% -8%, rgba(47,107,255,.07), transparent 60%), #f4f6fb'},
  {id:'green',  name:'薄荷绿', dark:false, bg:'radial-gradient(1100px 500px at 50% -8%, rgba(34,197,94,.09), transparent 60%), #f1f7f1'},
  {id:'warm',   name:'暖阳橙', dark:false, bg:'radial-gradient(1100px 500px at 50% -8%, rgba(251,146,60,.12), transparent 60%), #fbf5ef'},
  {id:'purple', name:'暮云紫', dark:false, bg:'radial-gradient(1100px 500px at 50% -8%, rgba(147,51,234,.09), transparent 60%), #f4f1fb'},
  {id:'pink',   name:'蜜桃粉', dark:false, bg:'radial-gradient(1100px 500px at 50% -8%, rgba(236,72,153,.08), transparent 60%), #fbf1f6'},
  {id:'night',  name:'深海夜', dark:true,  bg:'radial-gradient(1100px 500px at 50% -8%, rgba(100,116,255,.16), transparent 60%), #0e1220'}
];

const DEFAULT_DATA = [
  { id:'g0', title:'常用', links:[
    {name:'必应', url:'https://www.bing.com', desc:'搜索', icon:'globe'},
    {name:'百度', url:'https://www.baidu.com', desc:'搜索', icon:'search'},
    {name:'谷歌', url:'https://www.google.com', desc:'搜索', icon:'globe'},
    {name:'GitHub', url:'https://github.com', desc:'代码', icon:'code'},
    {name:'Yandex', url:'https://yandex.com', desc:'搜索', icon:'globe'}
  ]},
  { id:'g1', title:'学习', links:[
    {name:'GitHub', url:'https://github.com', desc:'代码', icon:'code'},
    {name:'CSDN', url:'https://www.csdn.net', desc:'技术', icon:'doc'},
    {name:'菜鸟教程', url:'https://www.runoob.com', desc:'文档', icon:'book'},
    {name:'MDN', url:'https://developer.mozilla.org/zh-CN/', desc:'Web', icon:'globe'}
  ]},
  { id:'g2', title:'工具', links:[
    {name:'QQ邮箱', url:'https://mail.qq.com', desc:'邮件', icon:'mail'},
    {name:'网易邮箱', url:'https://mail.163.com', desc:'邮件', icon:'mail'},
    {name:'谷歌邮箱', url:'https://mail.google.com', desc:'邮件', icon:'mail'},
    {name:'知网翻译', url:'https://dict.cnki.net', desc:'翻译', icon:'translate'},
    {name:'高德地图', url:'https://ditu.amap.com', desc:'出行', icon:'map', app:'androidamap://'},
    {name:'百度地图', url:'https://map.baidu.com', desc:'出行', icon:'map', app:'baidumap://'},
    {name:'天气', url:'https://tianqi.qq.com', desc:'预报', icon:'weather'}
  ]},
  { id:'g3', title:'娱乐', links:[
    {name:'哔哩哔哩', url:'https://www.bilibili.com', desc:'视频', icon:'video', app:'bilibili://'},
    {name:'抖音', url:'https://www.douyin.com', desc:'短视频', icon:'video', app:'snssdk1128://'},
    {name:'油管', url:'https://www.youtube.com', desc:'视频', icon:'video', app:'youtube://'},
    {name:'微博', url:'https://weibo.com', desc:'热点', icon:'at', app:'sinaweibo://'},
    {name:'小红书', url:'https://www.xiaohongshu.com', desc:'笔记', icon:'star', app:'xhsdiscover://'}
  ]},
  { id:'g4', title:'生活', links:[
    {name:'京东', url:'https://www.jd.com', desc:'购物', icon:'cart', app:'openapp.jdmobile://'},
    {name:'淘宝', url:'https://www.taobao.com', desc:'购物', icon:'bag', app:'taobao://'},
    {name:'拼多多', url:'https://www.pinduoduo.com', desc:'购物', icon:'bag', app:'pinduoduo://'},
    {name:'美团', url:'https://www.meituan.com', desc:'生活', icon:'shield', app:'imeituan://'},
    {name:'铁路12306', url:'https://www.12306.cn', desc:'出行', icon:'train', app:'cn.12306://'}
  ]},
  { id:'g5', title:'学术', links:[
    {name:'百度学术', url:'https://xueshu.baidu.com', desc:'论文', icon:'book'},
    {name:'谷歌学术', url:'https://scholar.google.com', desc:'文献', icon:'globe'},
    {name:'知网', url:'https://www.cnki.net', desc:'数据库', icon:'doc'},
    {name:'万方', url:'https://www.wanfangdata.com.cn', desc:'数据库', icon:'doc'},
    {name:'X-MOL', url:'https://www.x-mol.com', desc:'文献', icon:'book'},
    {name:'Web of Science', url:'https://www.webofscience.com', desc:'文献', icon:'doc'},
    {name:'ACS', url:'https://pubs.acs.org', desc:'期刊', icon:'doc'},
    {name:'Elsevier', url:'https://www.sciencedirect.com', desc:'期刊', icon:'doc'}
  ]},
  { id:'g6', title:'Agent', links:[
    {name:'ChatGPT', url:'https://chatgpt.com', desc:'AI', icon:'chat'},
    {name:'豆包', url:'https://www.doubao.com/chat', desc:'AI', icon:'chat'},
    {name:'DeepSeek', url:'https://chat.deepseek.com', desc:'AI', icon:'chat'},
    {name:'Gemini', url:'https://gemini.google.com', desc:'AI', icon:'chat'},
    {name:'Grok', url:'https://grok.com', desc:'AI', icon:'chat'}
  ]},
  { id:'g7', title:'学校官网与综合平台', links:[
    {name:'吉林大学官网', url:'https://www.jlu.edu.cn', desc:'官网', icon:'globe'},
    {name:'电子校务平台', url:'https://oa.jlu.edu.cn', desc:'办公OA', icon:'doc'},
    {name:'网上办事大厅', url:'https://ehall.jlu.edu.cn', desc:'办事', icon:'doc'},
    {name:'个人融合门户', url:'https://i.jlu.edu.cn', desc:'智慧校园', icon:'globe'},
    {name:'大数据和网络管理中心', url:'https://nic.jlu.edu.cn', desc:'网络', icon:'globe'}
  ]},
  { id:'g8', title:'教学与教务', links:[
    {name:'教务管理系统', url:'https://iedu.jlu.edu.cn', desc:'教务', icon:'doc'},
    {name:'选课平台', url:'https://icourses.jlu.edu.cn', desc:'选课', icon:'book'},
    {name:'学在吉大', url:'https://ilearntec.jlu.edu.cn', desc:'课程回放', icon:'video'},
    {name:'在线学堂', url:'http://jlu.benke.chaoxing.com', desc:'网课', icon:'video'},
    {name:'本科教学信息网', url:'http://jwc.jlu.edu.cn', desc:'教务处', icon:'doc'},
    {name:'研究生院', url:'http://yjsy.jlu.edu.cn', desc:'研究生', icon:'doc'},
    {name:'研究生教育管理', url:'http://gim.jlu.edu.cn', desc:'研究生', icon:'doc'},
    {name:'教学质量管理平台', url:'https://ievaluate.jlu.edu.cn', desc:'教评', icon:'doc'},
    {name:'开放性创新实验', url:'https://oep.jlu.edu.cn', desc:'实验', icon:'doc'},
    {name:'考试中心', url:'http://kszx.jlu.edu.cn', desc:'考试', icon:'doc'},
    {name:'南岭大物实验选课', url:'http://nldwsy.jlu.edu.cn:8080', desc:'实验', icon:'doc'},
    {name:'毕业论文管理系统', url:'https://jlu.co.cnki.net', desc:'毕业论文', icon:'doc'}
  ]},
  { id:'g9', title:'学生服务与资助', links:[
    {name:'智慧学工', url:'https://zhxg.jlu.edu.cn', desc:'学工', icon:'doc'},
    {name:'迎新服务网', url:'https://yx.jlu.edu.cn', desc:'迎新', icon:'globe'},
    {name:'学生工作部', url:'http://xsc.jlu.edu.cn', desc:'学工', icon:'doc'},
    {name:'学生资助中心', url:'http://xszz.jlu.edu.cn', desc:'资助', icon:'doc'},
    {name:'心理健康指导中心', url:'http://psy.jlu.edu.cn', desc:'心理', icon:'shield'},
    {name:'就业网', url:'https://jdjyw.jlu.edu.cn', desc:'就业', icon:'globe'}
  ]},
  { id:'g10', title:'财务与缴费', links:[
    {name:'缴费平台', url:'https://cwsf.jlu.edu.cn/payment', desc:'缴费', icon:'cart'},
    {name:'财务信息网', url:'http://cw.jlu.edu.cn', desc:'财务', icon:'doc'},
    {name:'校园一卡通自助平台', url:'http://dsf.jlu.edu.cn', desc:'一卡通', icon:'doc'},
    {name:'校园卡查询系统', url:'http://xyk.jlu.edu.cn', desc:'一卡通', icon:'doc'}
  ]},
  { id:'g11', title:'网络与信息化服务', links:[
    {name:'WEBVPN系统', url:'https://vpn.jlu.edu.cn', desc:'VPN', icon:'shield'},
    {name:'校园网络自助营业厅', url:'https://ip.jlu.edu.cn/pay', desc:'网络', icon:'doc'},
    {name:'学生邮箱', url:'https://mails.jlu.edu.cn', desc:'邮箱', icon:'mail'},
    {name:'正版软件服务平台', url:'http://zbhrj.jlu.edu.cn', desc:'软件', icon:'doc'},
    {name:'吉大云盘', url:'https://cloud.jlu.edu.cn', desc:'云盘', icon:'doc'},
    {name:'开源镜像站', url:'https://mirrors.jlu.edu.cn', desc:'镜像', icon:'code'}
  ]},
  { id:'g12', title:'图书馆与文献资源', links:[
    {name:'图书馆官网', url:'http://lib.jlu.edu.cn', desc:'图书馆', icon:'book'},
    {name:'鼎新图书馆预约', url:'https://libzwyy.jlu.edu.cn', desc:'预约', icon:'book'},
    {name:'学位论文系统', url:'http://xwlw.jlu.edu.cn', desc:'论文', icon:'doc'}
  ]},
  { id:'g13', title:'其他常用网站', links:[
    {name:'招生网', url:'https://zsb.jlu.edu.cn', desc:'招生', icon:'globe'},
    {name:'国际合作与交流处', url:'http://oic.jlu.edu.cn', desc:'合作', icon:'globe'},
    {name:'校医院', url:'http://xyy.jlu.edu.cn', desc:'医疗', icon:'shield'},
    {name:'保卫处', url:'http://bwc.jlu.edu.cn', desc:'保卫', icon:'shield'},
    {name:'新闻中心', url:'https://news.jlu.edu.cn', desc:'新闻', icon:'globe'},
    {name:'信息公开网', url:'https://gongkai.jlu.edu.cn', desc:'公开', icon:'doc'},
    {name:'书记信箱', url:'https://sjxx.jlu.edu.cn', desc:'信箱', icon:'mail'},
    {name:'校长信箱', url:'http://presidentmail.jlu.edu.cn', desc:'信箱', icon:'mail'},
    {name:'继续教育学院', url:'http://dec.jlu.edu.cn', desc:'学院', icon:'book'}
  ]}
];

function clone(o){ return JSON.parse(JSON.stringify(o)); }
let data = clone(DEFAULT_DATA);
let editing = location.hash === '#edit';

try {
  const raw = localStorage.getItem(STORE_KEY);
  if (raw){ const p = JSON.parse(raw); if (Array.isArray(p) && p.length) data = p; }
} catch(e){}

function svg(iconKey){
  const d = ICONS[iconKey] || ICONS.globe;
  return '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="'+d+'"/></svg>';
}
function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function uid(prefix){ return prefix + Date.now() + Math.floor(Math.random()*1e4); }

const grid = document.getElementById('grid');

// ===== 分组 HTML =====
function groupViewHTML(g){
  return '<section class="group" data-gid="'+g.id+'"><h2><span class="dot"></span>'+esc(g.title)+'</h2><div class="links">'+
    g.links.map(l =>
      '<a class="link" href="'+esc(l.url)+'"'+(l.app?' data-app="'+esc(l.app)+'"':'')+' target="_blank" rel="noopener">'+
      '<span class="ic">'+svg(l.icon)+'</span>'+
      '<span class="nm">'+esc(l.name)+'</span>'+
      (l.desc ? '<span class="ds">'+esc(l.desc)+'</span>' : '')+
      '</a>'
    ).join('')+'</div></section>';
}

const iconOpts = Object.keys(ICONS).map(k => '<option value="'+k+'">'+ICON_NAMES[k]+'</option>').join('');

function linkEditRowHTML(gid, l, li){
  const sel = iconOpts.replace('<option value="'+l.icon+'">', '<option value="'+l.icon+'" selected>');
  return '<div class="e-link" data-gid="'+gid+'" data-li="'+li+'">'+
    '<input class="e-nm" value="'+esc(l.name)+'" placeholder="名称">'+
    '<input class="e-url" value="'+esc(l.url)+'" placeholder="网址 https://…">'+
    '<input class="e-app" value="'+esc(l.app||'')+'" placeholder="手机APP scheme(可选)">'+
    '<input class="e-desc" value="'+esc(l.desc||'')+'" placeholder="描述(可选)">'+
    '<div class="e-icon"><select>'+sel+'</select>'+
    '<span class="icon-pv">'+svg(l.icon)+'</span></div>'+
    '<button class="btn ghost l-del" type="button">删除</button>'+
    '</div>';
}

function groupEditHTML(g){
  return '<section class="group editing" data-gid="'+g.id+'"><div class="g-head">'+
    '<input class="g-title" value="'+esc(g.title)+'">'+
    '<button class="btn g-save" data-save-group="'+g.id+'" type="button">保存本组</button>'+
    '<button class="btn ghost g-del" data-del-group="'+g.id+'" type="button">删除分组</button>'+
    '</div><div class="links">'+
    g.links.map((l, li) => linkEditRowHTML(g.id, l, li)).join('')+
    '<button class="add-link" data-add-link="'+g.id+'" type="button">+ 添加链接</button>'+
    '</div></section>';
}

// ===== 渲染 =====
function renderView(){
  grid.innerHTML = data.map(groupViewHTML).join('');
}
function renderEdit(){
  grid.innerHTML = data.map(groupEditHTML).join('');
}
// 只重绘单个分组（替换对应 section），不影响其他分组正在编辑的内容
function renderGroup(gid, asEdit){
  const gi = data.findIndex(d => d.id === gid);
  if (gi < 0) return;
  const el = grid.querySelector('[data-gid="'+gid+'"]');
  if (!el) return;
  el.outerHTML = asEdit ? groupEditHTML(data[gi]) : groupViewHTML(data[gi]);
}

function render(){
  grid.classList.toggle('editing', editing);
  document.getElementById('editBar').hidden = !editing;
  document.getElementById('editHint').hidden = !editing;
  if (editing) renderEdit(); else renderView();
}

function toast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.hidden = false;
  requestAnimationFrame(function(){ t.classList.add('show'); });
  clearTimeout(window.__toastT);
  window.__toastT = setTimeout(function(){ t.classList.remove('show'); t.hidden = true; }, 1800);
}

// ===== 编辑事件 =====
document.getElementById('editBtn').addEventListener('click', function(){ editing = true; render(); });

document.getElementById('saveBtn').addEventListener('click', function(){
  const newData = [];
  grid.querySelectorAll('.editing').forEach(groupEl => {
    const title = groupEl.querySelector('.g-title').value.trim();
    const group = { id: groupEl.dataset.gid, title: title || '未命名分组', links: [] };
    groupEl.querySelectorAll('.e-link').forEach(row => {
      const nm = row.querySelector('.e-nm').value.trim();
      const url = row.querySelector('.e-url').value.trim();
      const desc = row.querySelector('.e-desc').value.trim();
      const app = row.querySelector('.e-app').value.trim();
      const icon = row.querySelector('.e-icon select').value;
      if (nm && url) group.links.push({ name: nm, url: url, desc: desc, icon: icon, app: app });
    });
    newData.push(group);
  });
  data = newData.filter(g => g.links.length > 0);
  try { localStorage.setItem(STORE_KEY, JSON.stringify(data)); } catch(e){}
  editing = false; render();
  toast('已保存全部更改');
});

document.getElementById('cancelBtn').addEventListener('click', function(){
  try { const raw = localStorage.getItem(STORE_KEY); data = raw ? JSON.parse(raw) : clone(DEFAULT_DATA); }
  catch(e){ data = clone(DEFAULT_DATA); }
  editing = false; render();
});

document.getElementById('resetBtn').addEventListener('click', function(){
  if (!confirm('确定恢复默认链接吗？你自定义的内容将被清除。')) return;
  data = clone(DEFAULT_DATA);
  try { localStorage.removeItem(STORE_KEY); } catch(e){}
  editing = false; render();
});

// 委托：分组/链接的局部操作（不整体重绘，保护其他分组正在编辑的内容）
grid.addEventListener('click', function(e){
  const t = e.target;

  // 保存本组
  if (t.dataset.saveGroup !== undefined){
    const gid = t.dataset.saveGroup;
    const groupEl = grid.querySelector('.editing[data-gid="'+gid+'"]');
    const gi = data.findIndex(d => d.id === gid);
    if (gi < 0) return;
    const title = groupEl.querySelector('.g-title').value.trim();
    const group = { id: gid, title: title || '未命名分组', links: [] };
    groupEl.querySelectorAll('.e-link').forEach(row => {
      const nm = row.querySelector('.e-nm').value.trim();
      const url = row.querySelector('.e-url').value.trim();
      const desc = row.querySelector('.e-desc').value.trim();
      const app = row.querySelector('.e-app').value.trim();
      const icon = row.querySelector('.e-icon select').value;
      if (nm && url) group.links.push({ name: nm, url: url, desc: desc, icon: icon, app: app });
    });
    data[gi] = group;
    try { localStorage.setItem(STORE_KEY, JSON.stringify(data)); } catch(e){}
    renderGroup(gid, true);
    toast('已保存「'+group.title+'」');
    return;
  }

  // 删除分组：只移除该 section
  if (t.dataset.delGroup !== undefined){
    const gid = t.dataset.delGroup;
    const gi = data.findIndex(d => d.id === gid);
    if (gi >= 0) data.splice(gi, 1);
    const el = grid.querySelector('.editing[data-gid="'+gid+'"]');
    if (el) el.remove();
    return;
  }

  // 添加链接：只在该分组末尾插入新编辑行
  if (t.dataset.addLink !== undefined){
    const gid = t.dataset.addLink;
    const gi = data.findIndex(d => d.id === gid);
    if (gi < 0) return;
    data[gi].links.push({ name:'新链接', url:'https://', desc:'', icon:'globe' });
    t.insertAdjacentHTML('beforebegin', linkEditRowHTML(gid, data[gi].links[data[gi].links.length - 1], data[gi].links.length - 1));
    return;
  }

  // 删除链接：按 DOM 顺序定位，只移除该行
  if (t.classList.contains('l-del')){
    const row = t.closest('.e-link');
    const groupEl = row.closest('.editing');
    const gid = groupEl.dataset.gid;
    const gi = data.findIndex(d => d.id === gid);
    const li = Array.from(groupEl.querySelectorAll('.e-link')).indexOf(row);
    if (gi >= 0 && li >= 0) data[gi].links.splice(li, 1);
    row.remove();
    return;
  }

  // 添加分组：只在网格末尾追加新分组
  if (t.id === 'addGroupBtn'){
    const g = { id: uid('g'), title:'新分组', links:[{ name:'新链接', url:'https://', desc:'', icon:'globe' }] };
    data.push(g);
    grid.insertAdjacentHTML('beforeend', groupEditHTML(g));
    return;
  }
});

// ===== 手机端唤起 APP（PC 端正常打开网页）=====
function isMobile(){
  return /Android|webOS|iPhone|iPad|iPod|HarmonyOS|BlackBerry|Mobile/i.test(navigator.userAgent);
}
grid.addEventListener('click', function(e){
  const a = e.target.closest('a.link');
  if (!a) return;
  const app = a.dataset.app;
  if (!(isMobile() && app)) return; // PC 或无 scheme：按默认行为打开网页
  e.preventDefault();
  const webUrl = a.href;
  let done = false;
  const fallback = setTimeout(function(){
    if (!done && !document.hidden){ done = true; window.location.href = webUrl; }
  }, 1500);
  document.addEventListener('visibilitychange', function(){
    if (document.hidden) clearTimeout(fallback);
  });
  window.location.href = app;
});

// 编辑表单联动图标预览
grid.addEventListener('change', function(e){
  if (e.target.matches('.e-icon select')){
    const box = e.target.closest('.e-link').querySelector('.icon-pv');
    box.innerHTML = svg(e.target.value);
  }
});

// ===== 壁纸 =====
const wpBtn = document.getElementById('wpBtn');
const wpPanel = document.getElementById('wpPanel');

function currentWpId(){
  try { return localStorage.getItem(WP_KEY) || 'light'; } catch(e){ return 'light'; }
}
function customWpUrl(){
  try { return localStorage.getItem(CUSTOM_WP_KEY) || ''; } catch(e){ return ''; }
}
function applyWallpaper(wp, save){
  if (wp.id === 'custom'){
    const url = customWpUrl();
    if (url){
      document.body.style.background = "url('" + url + "') center/cover no-repeat fixed";
      document.body.classList.remove('dark');
    }
  } else {
    document.body.style.background = wp.bg;
    document.body.classList.toggle('dark', !!wp.dark);
  }
  if (save){ try { localStorage.setItem(WP_KEY, wp.id); } catch(e){} }
}
function renderWpPanel(){
  const cur = currentWpId();
  const customUrl = customWpUrl();
  let html = WALLPAPERS.map(w =>
    '<button class="wp-swatch'+(w.id === cur ? ' active' : '')+'" data-wp="'+w.id+'" style="background:'+w.bg+'" title="'+w.name+'"><span class="nm">'+w.name+'</span></button>'
  ).join('');
  html += '<button class="wp-swatch wp-custom'+(cur === 'custom' ? ' active' : '')+'" data-wp="custom"'+
    (customUrl ? ' style="background:url(\''+customUrl+'\') center/cover no-repeat"' : '')+
    ' title="自定义壁纸"><span class="nm">自定义</span></button>';
  html += '<button class="wp-upload" data-wp="upload" type="button">'+
    '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M17 8l-5-5-5 5"/><path d="M12 3v12"/></svg>'+
    '上传图片</button>';
  wpPanel.innerHTML = html;
}
function setWpPanel(show){
  if (show) renderWpPanel();
  wpPanel.hidden = !show;
}
wpBtn.addEventListener('click', function(e){
  e.stopPropagation();
  setWpPanel(wpPanel.hidden);
});
wpPanel.addEventListener('click', function(e){
  const sw = e.target.closest('[data-wp]');
  if (!sw) return;
  if (sw.dataset.wp === 'upload'){
    document.getElementById('wpFile').click();
    return;
  }
  const wp = sw.dataset.wp === 'custom'
    ? { id:'custom' }
    : WALLPAPERS.find(w => w.id === sw.dataset.wp);
  if (!wp) return;
  applyWallpaper(wp, true);
  renderWpPanel();
  setWpPanel(false);
  toast('壁纸已切换：' + (wp.id === 'custom' ? '自定义' : wp.name));
});
// 上传自定义壁纸（无损：直接读原图，不做压缩）
document.getElementById('wpFile').addEventListener('change', function(){
  const f = this.files && this.files[0];
  this.value = '';
  if (!f) return;
  if (!/^image\//.test(f.type)){ toast('请选择图片文件'); return; }
  const reader = new FileReader();
  reader.onload = function(){
    const url = reader.result;
    try {
      localStorage.setItem(CUSTOM_WP_KEY, url);
      localStorage.setItem(WP_KEY, 'custom');
    } catch(err){
      toast('图片过大，本地存储约 5MB 上限，无法无损保存');
      return;
    }
    applyWallpaper({ id:'custom' }, true);
    renderWpPanel();
    setWpPanel(false);
    toast('已应用自定义壁纸');
  };
  reader.onerror = function(){ toast('读取图片失败'); };
  reader.readAsDataURL(f);
});
document.addEventListener('click', function(e){
  if (!document.getElementById('wpWrap').contains(e.target)) setWpPanel(false);
});
// 初始化壁纸
(function(){
  const id = currentWpId();
  const wp = WALLPAPERS.find(w => w.id === id) || (id === 'custom' ? { id:'custom' } : WALLPAPERS[0]);
  applyWallpaper(wp, false);
})();

// ===== 时钟与问候 =====
const week = ['日','一','二','三','四','五','六'];
function tick(){
  const now = new Date();
  let h = now.getHours(), m = now.getMinutes();
  const ampm = h < 12 ? 'AM' : 'PM';
  h = ((h + 11) % 12) + 1;
  document.getElementById('clock').innerHTML =
    String(h).padStart(2,'0') + ':' + String(m).padStart(2,'0') + '<span class="ampm">' + ampm + '</span>';
  document.getElementById('date').textContent =
    now.getFullYear()+'年'+(now.getMonth()+1)+'月'+now.getDate()+'日 星期'+week[now.getDay()];
}
setInterval(tick, 1000); tick();

const hour = new Date().getHours();
function getName(){
  try { const n = localStorage.getItem(NAME_KEY); return (n && n.trim()) ? n.trim() : ''; } catch(e){ return ''; }
}
function updateGreet(){
  const base = hour < 6 ? '夜深了，注意休息' : hour < 12 ? '早上好，欢迎回来' :
    hour < 14 ? '中午好，欢迎回来' : hour < 18 ? '下午好，欢迎回来' : '晚上好，欢迎回来';
  const name = getName() || '沐熙菌';
  document.getElementById('greet').textContent = name ? base + '，' + name : base;
}
updateGreet();
// 名字设置：点击工具栏“名字”按钮自定义欢迎语中的名字
document.getElementById('nameBtn').addEventListener('click', function(){
  const cur = getName() || '沐熙菌';
  const nm = prompt('设置欢迎语中的名字（留空则显示默认“沐熙菌”）：', cur);
  if (nm === null) return;
  try {
    if (nm.trim()) localStorage.setItem(NAME_KEY, nm.trim());
    else localStorage.removeItem(NAME_KEY);
  } catch(e){}
  updateGreet();
});

// ===== 搜索 =====
const engines = {
  bing:'https://www.bing.com/search?q=',
  baidu:'https://www.baidu.com/s?wd=',
  google:'https://www.google.com/search?q=',
  github:'https://github.com/search?q='
};
document.getElementById('searchForm').addEventListener('submit', function(e){
  e.preventDefault();
  const kw = document.getElementById('q').value.trim();
  if (!kw) return;
  window.open(engines[document.getElementById('engine').value] + encodeURIComponent(kw), '_blank', 'noopener');
});

// ===== 天气（定位显示城市 + 晴雨 + 摄氏度）=====
const W_CODE = {
  0:['晴','sun'], 1:['多云','cloud'], 2:['多云','cloud'], 3:['阴','cloud'],
  45:['雾','fog'], 48:['雾','fog'],
  51:['毛毛雨','drizzle'], 53:['毛毛雨','drizzle'], 55:['毛毛雨','drizzle'], 56:['冻雨','drizzle'], 57:['冻雨','drizzle'],
  61:['小雨','rain'], 63:['中雨','rain'], 65:['大雨','rain'], 66:['冻雨','rain'], 67:['冻雨','rain'],
  71:['小雪','snow'], 73:['中雪','snow'], 75:['大雪','snow'], 77:['雪','snow'],
  80:['阵雨','rain'], 81:['阵雨','rain'], 82:['强阵雨','rain'], 85:['阵雪','snow'], 86:['阵雪','snow'],
  95:['雷暴','thunder'], 96:['雷暴','thunder'], 99:['雷暴','thunder']
};
const W_ICON = {
  sun:'<path d="M12 3v3M12 21v3M3 12h3M18 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/><circle cx="12" cy="12" r="4"/>',
  cloud:'<path d="M6 20a4 4 0 0 1-.5-7.97A5 5 0 0 1 15 10a4 4 0 0 1 0 8z"/>',
  fog:'<path d="M6 6h12M6 10h12M6 14h12M6 18h12"/>',
  drizzle:'<path d="M6 14a4 4 0 0 1-.5-7.97A5 5 0 0 1 15 10a4 4 0 0 1 0 8zM8 18l1-2M12 18l1-2M16 18l1-2"/>',
  rain:'<path d="M6 14a4 4 0 0 1-.5-7.97A5 5 0 0 1 15 10a4 4 0 0 1 0 8zM9 19l1-3M13 19l1-3M17 19l1-3"/>',
  snow:'<path d="M6 14a4 4 0 0 1-.5-7.97A5 5 0 0 1 15 10a4 4 0 0 1 0 8zM12 18v2M12 21v1M8 19l1 1M16 19l-1 1"/>',
  thunder:'<path d="M6 14a4 4 0 0 1-.5-7.97A5 5 0 0 1 15 10a4 4 0 0 1 0 8zM11 18l-2 4h5l-2 4"/>'
};
function setWeather(code, temp, city){
  const arr = W_CODE[code] || ['晴','sun'];
  document.getElementById('wIc').innerHTML =
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+(W_ICON[arr[1]]||W_ICON.sun)+'</svg>';
  document.getElementById('wTemp').textContent = (temp === '--' || temp == null) ? '--°' : Math.round(temp) + '°';
  document.getElementById('wCity').textContent = city ? city + ' · ' + arr[0] : arr[0];
}
function fetchWeather(lat, lon, cityHint){
  const pGeo = fetch('https://geocoding-api.open-meteo.com/v1/reverse?latitude='+lat+'&longitude='+lon+'&language=zh')
    .then(function(r){ return r.json(); })
    .then(function(g){ return (g && (g.city || g.name)) ? (g.city || g.name) : (cityHint || ''); })
    .catch(function(){ return cityHint || ''; });
  const pWx = fetch('https://api.open-meteo.com/v1/forecast?latitude='+lat+'&longitude='+lon+'&current=temperature_2m,weather_code&timezone=auto')
    .then(function(r){ return r.json(); })
    .catch(function(){ return null; });
  Promise.all([pGeo, pWx]).then(function(res){
    const city = res[0]; const d = res[1];
    if (d && d.current) setWeather(d.current.weather_code, d.current.temperature_2m, city);
    else setWeather(0, '--', city || '天气获取失败');
  });
}
function loadWeather(){
  const ipFallback = function(){
    fetch('https://ipapi.co/json/').then(function(r){ return r.json(); }).then(function(d){
      if (d && typeof d.latitude === 'number'){
        fetchWeather(d.latitude, d.longitude, d.city || d.region || '');
      } else setWeather(0, '--', '无法定位');
    }).catch(function(){ setWeather(0, '--', '无法定位'); });
  };
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
      function(pos){ fetchWeather(pos.coords.latitude, pos.coords.longitude, ''); },
      ipFallback,
      { timeout: 7000 }
    );
  } else ipFallback();
}
loadWeather();

// ===== 回到顶部 =====
document.getElementById('reset').addEventListener('click', function(e){
  e.preventDefault(); window.scrollTo({top:0, behavior:'smooth'});
});

render();
