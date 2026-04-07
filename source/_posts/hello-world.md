---
title: 如何快速制作自己的个人博客
date: 2026-04-07 15:30:00
tags: [博客制作]
categories: [技术实战] 
---
##  该有一个自己的网络空间了！
我总觉得需要一个能完全自己掌控的“数字基地”。于是，便有了现在这个被命名为“孙淮洲的小基地”的博客。

不依赖笨重的传统 CMS，这次我选择了纯静态、高自由度的极客路线。以下是我整个建站过程的复盘与踩坑记录。
### 🛠️ 第一步：选型与基础搭建
#### 核心框架： 选用了高效的静态博客框架 Hexo，一切皆文件（Markdown），本地渲染，极度契合开发者的书写直觉。

#### 主题外观： 选择了目前生态极其丰富的 Butterfly 主题。虽然它配置项多得像开飞机，但给足了自定义的余地。

#### 部署平台：抛弃了国内需要繁琐备案的服务器，直接采用 GitHub + Cloudflare Pages 的现代化工作流，实现了代码推送即自动构建全球 CDN 发布的丝滑体验。

## 教学正式开始（跟着一步步弄就行，不会的拿截图报错问ai）

## 1.准备工作（下载与环境）
在开始之前，需确保电脑已安装以下软件：

Node.js: 官网下载 LTS 版本（内置 npm 包管理器）。

Git: 官网下载（用于版本控制和代码上传）。

Windows 权限解锁（PowerShell 执行）：
若运行脚本受限，输入以下命令并选 Y：

Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

## 2. 初始化 Hexo 框架
打开终端（PowerShell），依次输入以下命令：
安装 Hexo 命令行工具：
npm install -g hexo-cli

创建博客目录（建议路径如 D:\my-blog）：
hexo init my-blog

进入目录并安装依赖：
cd my-blog
npm install

本地启动预览：
hexo s（访问 http://localhost:4000）

## 3. 安装并切换 Butterfly 主题
安装主题包及渲染器（必须安装渲染器，否则页面空白）：   
npm i hexo-theme-butterfly hexo-renderer-pug hexo-renderer-stylus --save
## 4.修改站点配置：
打开根目录 _config.yml，找到并修改 theme 项：
theme: butterfly

提取主题配置文件（用于后续修改）：

cp node_modules/hexo-theme-butterfly/_config.yml _config.butterfly.yml

## 5. 建立 GitHub 远程仓库
新建仓库：在 GitHub 创建一个名为 my-blog 的空仓库。
本地推送到云端：（在powershall管理员模式中运行）（确保目录在blog文件夹）

git init  
git add .  
git commit -m "First Commit"  
git branch -M main  
git remote add origin https://github.com/你的用户名/my-blog.git  
git push -u origin main
 
## 6.Cloudflare Pages 自动化部署
注册/登录：访问 Cloudflare Dashboard。  
创建项目：进入 Workers 和 Pages -> 创建应用程序 -> Pages -> 连接到 Git。  （一定要选page！！！）  
构建设置：
Framework preset: 选择 None（手动填写）。  
Build command: npx hexo generate（手动填写）  
Build output directory: public（手动填写）  
环境变量（必须）：  
点击 高级设置 -> 添加变量：  
变量名：NODE_VERSION  
值：20（或 18 以上）。  
保存并部署：完成后即可获得以 .pages.dev 结尾的永久公网网址。  

### 到这里你的个人博客就正式公网部署了，可以自己添加喜欢的元素了！
## 7.日常维护常用命令
新建文章：hexo new "文章标题"  
清理缓存：hexo clean  
生成文件：hexo g  
本地预览：hexo s  
同步更新：  
git add .  
git commit -m "update"  
git push origin main（推送后云端会自动触发构建并更新）  

如果觉得对你有帮助，欢迎你在我的https://github.com/nz12138/my-blog仓库留下一颗小心心，有什么环境问题也可以在github上留言，站主会积极回复滴~~~~~







