---
title: 动态
layout: page
comments: true
---

<style>
/* 针对动态页面的特定样式，融入全局通透玻璃态 */
#speak-timeline-wrapper {
  margin-top: 20px;
}
#speak-timeline-wrapper .loading-text {
  padding: 40px 20px;
  text-align: center;
  color: var(--text-p3);
  font-size: 15px;
}
/* 动态卡片整体样式 */
#speak-timeline-wrapper .speak-card {
  background: var(--card); /* 随主题变色的半透明背景 */
  backdrop-filter: blur(10px) saturate(150%);
  -webkit-backdrop-filter: blur(10px) saturate(150%);
  border: 1px solid var(--card-border);
  border-radius: 16px;
  padding: 20px 24px;
  margin-bottom: 24px;
  transition: all 0.3s;
  box-shadow: var(--shadow-soft);
}
#speak-timeline-wrapper .speak-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(0,0,0,0.08);
}
/* 顶部元信息：时间与日期 */
.speak-card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 15px;
  border-bottom: 1px solid rgba(120, 120, 120, 0.1);
  padding-bottom: 12px;
}
.speak-card-header i {
  color: #1BCDFC;
  font-size: 18px;
}
.speak-card-date {
  font-size: 14px;
  font-weight: bold;
  color: var(--text-p1);
}
.speak-card-time {
  font-size: 12px;
  color: var(--text-p3);
  background: rgba(120, 120, 120, 0.1);
  padding: 2px 8px;
  border-radius: 12px;
}
/* 动态正文 */
.speak-card-body {
  font-size: 15px;
  color: var(--text-p1);
  line-height: 1.8;
  word-wrap: break-word;
}
.speak-card-body p {
  margin: 0 0 10px 0;
}
.speak-card-body p:last-child {
  margin-bottom: 0;
}
.speak-card-body img {
  max-width: 100%;
  border-radius: 12px;
  margin-top: 15px;
  border: 1px solid rgba(255,255,255,0.1);
}
</style>

<div id="speak-timeline-wrapper">
  <div class="loading-text"><i class="fa-solid fa-satellite-dish fa-spin"></i> 正在连接信号源，获取最新动态...</div>
</div>

<script>
document.addEventListener("DOMContentLoaded", function() {
  // 强制确保有 Iconify 或者 FontAwesome 可用
  if (!document.querySelector('link[href*="font-awesome"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(link);
  }

  fetch('/api/timeline.json?t=' + new Date().getTime())
    .then(res => res.json())
    .then(data => {
      const wrapper = document.getElementById('speak-timeline-wrapper');
      
      if (!data || data.length === 0) {
        wrapper.innerHTML = '<div class="loading-text">宇宙深处一片寂静，暂时没有新信号。</div>';
        return;
      }

      let htmlStr = '';
      // 遍历渲染所有动态
      data.forEach(item => {
        // 简单处理 content 中的换行符为 <br> 或者 <p>
        let contentHtml = item.content.replace(/\n/g, '<br>');

        htmlStr += `
          <div class="speak-card">
            <div class="speak-card-header">
              <i class="fa-solid fa-paper-plane"></i>
              <div class="speak-card-date">${item.date}</div>
              <div class="speak-card-time">${item.time}</div>
            </div>
            <div class="speak-card-body">
              ${contentHtml}
            </div>
          </div>
        `;
      });

      wrapper.innerHTML = htmlStr;
    })
    .catch(err => {
      console.error(err);
      document.getElementById('speak-timeline-wrapper').innerHTML = '<div class="loading-text" style="color: #ef4444;"><i class="fa-solid fa-triangle-exclamation"></i> 信号中断，无法获取动态内容。</div>';
    });
});
</script>
