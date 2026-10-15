---
title: 关于我
date: 2026-04-01
top_img: /img/3.jpg
---

<style>
/* 隐藏主题默认 Banner */
.article.banner.top { display: none !important; }
article.md-text.content { padding-top: 0 !important; margin-top: 0 !important; }

/* 画布 */
.hz {
--mono: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
--sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
--c1: #0f172a; --c2: #334155; --c3: #64748b; --c4: #94a3b8;
--accent: #0284c7; --gold: #b45309; --green: #059669;
max-width: 720px;
margin: 0 auto;
padding: 1rem 0 4rem;
font-family: var(--sans);
color: var(--c2);
}
:root[data-theme="dark"] .hz, html[data-theme="dark"] .hz {
--c1: #f1f5f9; --c2: #cbd5e1; --c3: #94a3b8; --c4: #64748b;
--accent: #38bdf8; --gold: #fbbf24; --green: #34d399;
}

/* ===== 头部 Hero：左右平衡 ===== */
.hz-hero {
display: flex !important;
align-items: center !important;
justify-content: space-between !important;
gap: 1.5rem !important;
margin-bottom: 1.6rem !important;
}
.hz-hero-text {
min-width: 0;
flex: 1;
}
.hz-avatar {
width: 68px !important;
height: 68px !important;
border-radius: 50% !important;
object-fit: cover !important;
display: block !important;
margin: 0 !important;
flex-shrink: 0 !important;
border: 2px solid rgba(0, 0, 0, 0.06);
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease;
}
:root[data-theme="dark"] .hz-avatar, html[data-theme="dark"] .hz-avatar {
border-color: rgba(255, 255, 255, 0.1);
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
}
.hz-avatar:hover {
transform: scale(1.05);
box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}
.hz-name {
font-size: 2.2rem;
font-weight: 900;
letter-spacing: -0.04em;
color: var(--c1);
margin: 0 0 0.3rem;
line-height: 1.15;
}
.hz-sub {
font-size: 0.95rem;
color: var(--c3);
margin: 0;
line-height: 1.5;
}

/* ===== 联系：按钮组 ===== */
.hz-links {
display: flex;
flex-wrap: wrap;
gap: 0.65rem;
margin-bottom: 3.2rem;
padding-bottom: 2.8rem;
border-bottom: 1px solid rgba(0,0,0,0.06);
}
:root[data-theme="dark"] .hz-links, html[data-theme="dark"] .hz-links {
border-bottom-color: rgba(255,255,255,0.06);
}
.hz-btn {
display: inline-flex;
align-items: center;
gap: 0.45rem;
height: 36px;
padding: 0 1rem;
border-radius: 10px;
background: rgba(0, 0, 0, 0.035);
border: 1px solid rgba(0, 0, 0, 0.06);
font-size: 0.84rem;
font-weight: 600;
color: var(--c2) !important;
text-decoration: none !important;
cursor: pointer;
user-select: none;
transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}
:root[data-theme="dark"] .hz-btn, html[data-theme="dark"] .hz-btn {
background: rgba(255, 255, 255, 0.04);
border-color: rgba(255, 255, 255, 0.08);
color: var(--c2) !important;
}
.hz-btn:hover {
background: rgba(2, 132, 199, 0.08);
border-color: var(--accent);
color: var(--accent) !important;
transform: translateY(-1.5px);
box-shadow: 0 4px 12px rgba(2, 132, 199, 0.12);
}
.hz-btn svg {
width: 14px;
height: 14px;
fill: currentColor;
opacity: 0.8;
}

/* ===== 荣誉：干净的左边线强调 ===== */
.hz-honor {
border-left: 3px solid var(--gold);
padding: 0.1rem 0 0.1rem 1.2rem;
margin-bottom: 3.2rem;
}
.hz-honor-label {
font-family: var(--mono);
font-size: 0.72rem;
font-weight: 600;
letter-spacing: 0.08em;
text-transform: uppercase;
color: var(--gold);
margin: 0 0 0.45rem;
}
.hz-honor-title {
font-size: 1.2rem;
font-weight: 800;
color: var(--c1);
margin: 0 0 0.35rem;
letter-spacing: -0.02em;
line-height: 1.35;
}
.hz-honor-meta {
font-size: 0.86rem;
color: var(--c3);
margin: 0;
line-height: 1.6;
}

/* ===== 章节标题 ===== */
.hz-section-label {
font-family: var(--mono);
font-size: 0.72rem;
font-weight: 600;
letter-spacing: 0.08em;
text-transform: uppercase;
color: var(--c4);
margin: 0 0 1.4rem;
}

/* ===== 项目列表：无框极简 ===== */
.hz-projects {
list-style: none;
padding: 0;
margin: 0 0 3rem;
}
.hz-proj {
padding: 1.15rem 0;
border-bottom: 1px solid rgba(0,0,0,0.05);
cursor: pointer;
transition: background 0.15s;
}
:root[data-theme="dark"] .hz-proj, html[data-theme="dark"] .hz-proj {
border-bottom-color: rgba(255,255,255,0.05);
}
.hz-proj:first-child {
border-top: 1px solid rgba(0,0,0,0.05);
}
:root[data-theme="dark"] .hz-proj:first-child {
border-top-color: rgba(255,255,255,0.05);
}

.hz-proj-head {
display: flex;
align-items: baseline;
justify-content: space-between;
gap: 1rem;
}
.hz-proj-left {
display: flex;
align-items: baseline;
gap: 0.9rem;
min-width: 0;
flex: 1;
}
.hz-proj-num {
font-family: var(--mono);
font-size: 0.78rem;
font-weight: 600;
color: var(--c4);
flex-shrink: 0;
}
.hz-proj-name {
font-size: 1rem;
font-weight: 700;
color: var(--c1);
margin: 0;
letter-spacing: -0.01em;
line-height: 1.4;
}
.hz-proj-right {
display: flex;
align-items: center;
gap: 0.8rem;
flex-shrink: 0;
}
.hz-proj-status {
font-size: 0.78rem;
font-weight: 500;
color: var(--c4);
white-space: nowrap;
}
.hz-proj-status.live { color: var(--green); }
.hz-proj-status.online { color: var(--accent); }
.hz-proj-status.wip { color: var(--gold); }
.hz-proj-arrow {
width: 16px; height: 16px;
color: var(--c4);
transition: transform 0.3s cubic-bezier(0.16,1,0.3,1), color 0.15s;
display: flex; align-items: center; justify-content: center;
}
.hz-proj-arrow svg { width: 12px; height: 12px; fill: currentColor; }
.hz-proj.is-open .hz-proj-arrow { color: var(--accent); }

/* 展开内容 */
.hz-proj-body {
height: 0; opacity: 0; overflow: hidden;
}
.hz-proj-inner {
padding: 0.9rem 0 0.4rem 2.2rem;
}
.hz-proj-desc {
font-size: 0.9rem;
line-height: 1.75;
color: var(--c2);
margin: 0 0 0.8rem;
max-width: 600px;
}
.hz-proj-link {
font-size: 0.84rem;
font-weight: 600;
color: var(--accent) !important;
text-decoration: none !important;
transition: opacity 0.15s;
}
.hz-proj-link:hover { opacity: 0.7; }
.hz-proj-link svg {
width: 11px; height: 11px; fill: currentColor;
vertical-align: -1px; margin-left: 3px;
}
.hz-proj-wip-note {
font-family: var(--mono);
font-size: 0.8rem;
color: var(--gold);
}

/* Toast */
.hz-toast-el {
position: fixed; bottom: 2rem; left: 50%;
transform: translateX(-50%) translateY(20px);
background: var(--c1); color: #fff;
font-size: 0.84rem; font-weight: 600;
padding: 0.5rem 1.2rem; border-radius: 9999px;
opacity: 0; pointer-events: none; z-index: 99999;
}
:root[data-theme="dark"] .hz-toast-el, html[data-theme="dark"] .hz-toast-el {
background: #f8fafc; color: #0f172a;
}

/* ===== 移动端 ===== */
@media (max-width: 640px) {
.hz { padding: 0.5rem 0 3rem; }
.hz-hero { gap: 1rem !important; margin-bottom: 1.4rem !important; }
.hz-avatar { width: 58px !important; height: 58px !important; }
.hz-name { font-size: 1.85rem; margin-bottom: 0.25rem; }
.hz-sub { font-size: 0.88rem; }
.hz-links { gap: 0.5rem; margin-bottom: 2.4rem; padding-bottom: 2rem; }
.hz-btn { height: 34px; padding: 0 0.85rem; font-size: 0.8rem; }
.hz-honor { margin-bottom: 2.6rem; }
.hz-honor-title { font-size: 1.08rem; }
.hz-proj-head { flex-wrap: wrap; gap: 0.3rem 0.8rem; }
.hz-proj-name { font-size: 0.94rem; }
.hz-proj-inner { padding-left: 1.8rem; }
}
</style>

<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>

<div class="hz">

<div class="hz-hero">
<div class="hz-hero-text">
<h1 class="hz-name">孙淮洲</h1>
<p class="hz-sub">努力学习全栈ing</p>
</div>
<img class="hz-avatar" src="/img/my-avatar.jpg" alt="孙淮洲" />
</div>

<div class="hz-links">
<a class="hz-btn" href="mailto:n12138z@163.com" title="发送邮件">
<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
<span>Email</span>
</a>
<a class="hz-btn" href="https://github.com/nz12138" target="_blank" rel="noopener noreferrer" title="访问 GitHub">
<svg viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
<span>GitHub</span>
</a>
<div class="hz-btn" onclick="hzCopy('1766656358')" title="点击复制 QQ">
<svg viewBox="0 0 448 512"><path d="M433.754 420.445c-11.526 1.393-44.86-52.741-44.86-52.741 0 31.345-16.136 72.247-51.051 101.786 16.842 5.192 54.843 19.167 45.803 34.421-7.316 12.343-125.51 7.881-159.632 4.037-34.122 3.844-152.316 8.306-159.632-4.037-9.045-15.25 28.918-29.214 45.783-34.415-34.92-29.539-51.059-70.445-51.059-101.792 0 0-33.334 54.134-44.859 52.741-5.37-.65-12.424-29.644 9.347-99.704 10.261-33.024 21.995-60.478 40.144-105.779C60.683 98.063 108.982.006 224 0c113.737.006 163.156 96.133 160.264 214.963 18.118 45.223 29.912 72.85 40.144 105.778 21.768 70.06 14.716 99.053 9.346 99.704z"/></svg>
<span>QQ</span>
</div>
</div>

<div class="hz-honor">
<div class="hz-honor-label">荣誉</div>
<div class="hz-honor-title">中南民族大学首届智能体大赛 · 一等奖</div>
<p class="hz-honor-meta">单人参赛独立开发，基于 MaxKB 构建校园矩阵式 AI 智能体工作站</p>
</div>

<div class="hz-section-label">项目</div>

<div class="hz-projects">

<div class="hz-proj" onclick="hzToggle(this)">
<div class="hz-proj-head">
<div class="hz-proj-left">
<span class="hz-proj-num">01</span>
<h3 class="hz-proj-name">中南民族大学异常返校检测系统</h3>
</div>
<div class="hz-proj-right">
<span class="hz-proj-status live">学校项目</span>
<span class="hz-proj-arrow"><svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg></span>
</div>
</div>
<div class="hz-proj-body">
<div class="hz-proj-inner">
<p class="hz-proj-desc">微服务架构，单人全栈独立主导。深度整合学生返校数据流与核验通道，实现全校级别的精准异常返校行为分析与自动化排查监控。</p>
</div>
</div>
</div>

<div class="hz-proj" onclick="hzToggle(this)">
<div class="hz-proj-head">
<div class="hz-proj-left">
<span class="hz-proj-num">02</span>
<h3 class="hz-proj-name">校园服务类智能体工作站</h3>
</div>
<div class="hz-proj-right">
<span class="hz-proj-status online">线上运行</span>
<span class="hz-proj-arrow"><svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg></span>
</div>
</div>
<div class="hz-proj-body">
<div class="hz-proj-inner">
<p class="hz-proj-desc">智能体大赛一等奖作品。基于 MaxKB 构建多 Agent 协同工作站矩阵，打破校园信息孤岛，实现多场景一站式智能问答与服务。</p>
<a class="hz-proj-link" href="https://scmu-agent.pages.dev/home" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()">访问系统<svg viewBox="0 0 24 24"><path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg></a>
</div>
</div>
</div>

<div class="hz-proj" onclick="hzToggle(this)">
<div class="hz-proj-head">
<div class="hz-proj-left">
<span class="hz-proj-num">03</span>
<h3 class="hz-proj-name">双零团队线下抽奖系统</h3>
</div>
<div class="hz-proj-right">
<span class="hz-proj-status online">线上运行</span>
<span class="hz-proj-arrow"><svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg></span>
</div>
</div>
<div class="hz-proj-body">
<div class="hz-proj-inner">
<p class="hz-proj-desc">高质感移动端 H5 抽奖应用。CSS3 3D 视角跟随全息卡牌动效与平滑手势滑动，搭配服务端防作弊与并发风控。</p>
<a class="hz-proj-link" href="https://shuang00.cn:83" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()">访问系统<svg viewBox="0 0 24 24"><path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg></a>
</div>
</div>
</div>

<div class="hz-proj" onclick="hzToggle(this)">
<div class="hz-proj-head">
<div class="hz-proj-left">
<span class="hz-proj-num">04</span>
<h3 class="hz-proj-name">远程控制电脑开关机系统</h3>
</div>
<div class="hz-proj-right">
<span class="hz-proj-status online">线上运行</span>
<span class="hz-proj-arrow"><svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg></span>
</div>
</div>
<div class="hz-proj-body">
<div class="hz-proj-inner">
<p class="hz-proj-desc">跨网络远程电源控制系统，支持远程唤醒、开机、安全关机与硬件运行状态监控。</p>
<a class="hz-proj-link" href="https://n12138z.netlify.app/" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()">访问系统<svg viewBox="0 0 24 24"><path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg></a>
</div>
</div>
</div>

<div class="hz-proj" onclick="hzToggle(this)">
<div class="hz-proj-head">
<div class="hz-proj-left">
<span class="hz-proj-num">05</span>
<h3 class="hz-proj-name">话匣子 AI 陪伴日记 WebApp</h3>
</div>
<div class="hz-proj-right">
<span class="hz-proj-status wip">开发中</span>
<span class="hz-proj-arrow"><svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg></span>
</div>
</div>
<div class="hz-proj-body">
<div class="hz-proj-inner">
<p class="hz-proj-desc">结合大模型情感感知与自我反思的陪伴型日记应用，倾听情绪波动并生成专属记忆胶囊。</p>
<span class="hz-proj-wip-note">核心交互打磨中...</span>
</div>
</div>
</div>

</div>

<div class="hz-toast-el" id="hzT"></div>

</div>

<script>
window.hzToggle = function(el) {
var body = el.querySelector('.hz-proj-body');
var arrow = el.querySelector('.hz-proj-arrow');
var open = el.classList.contains('is-open');
document.querySelectorAll('.hz-proj.is-open').forEach(function(o) {
if (o !== el) {
var ob = o.querySelector('.hz-proj-body');
var oa = o.querySelector('.hz-proj-arrow');
if (typeof gsap !== 'undefined') {
gsap.to(ob, {height:0, opacity:0, duration:0.25, ease:"power2.inOut"});
gsap.to(oa, {rotation:0, duration:0.2, ease:"power2.out"});
} else { ob.style.height='0'; ob.style.opacity='0'; oa.style.transform='rotate(0)'; }
o.classList.remove('is-open');
}
});
if (open) {
if (typeof gsap !== 'undefined') {
gsap.to(body, {height:0, opacity:0, duration:0.25, ease:"power2.inOut"});
gsap.to(arrow, {rotation:0, duration:0.2, ease:"power2.out"});
} else { body.style.height='0'; body.style.opacity='0'; arrow.style.transform='rotate(0)'; }
el.classList.remove('is-open');
} else {
el.classList.add('is-open');
if (typeof gsap !== 'undefined') {
body.style.height='auto'; var h=body.scrollHeight; body.style.height='0px';
gsap.to(body, {height:h, opacity:1, duration:0.32, ease:"power2.out", onComplete:function(){body.style.height='auto';}});
gsap.to(arrow, {rotation:180, duration:0.25, ease:"power2.out"});
} else { body.style.height='auto'; body.style.opacity='1'; arrow.style.transform='rotate(180deg)'; }
}
};
window.hzCopy = function(t) {
if (navigator.clipboard) navigator.clipboard.writeText(t);
var el = document.getElementById('hzT');
if (!el) return;
el.innerText = 'QQ 已复制';
if (typeof gsap !== 'undefined') {
gsap.killTweensOf(el);
gsap.timeline()
.to(el, {y:0, opacity:1, duration:0.25, ease:"power2.out"})
.to(el, {y:20, opacity:0, duration:0.2, ease:"power2.in", delay:1.5});
}
};
</script>