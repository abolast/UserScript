// ==UserScript==
// @name         网页管家
// @namespace    airbash/WebManager
// @author       airbash
// @homepageURL  https://github.com/AirBashX/UserScript
// @version      0.0.2
// @description  删除`腾讯新闻`文章中跳转元宝查询的样式;删除`澎湃新闻`文章背景
// @match        *://news.qq.com/*
// @match        *://www.thepaper.cn/*
// @license      GPL-3.0
// @run-at       document-end
// ==/UserScript==

(function () {
    "use strict";
    if (location.href.indexOf("news.qq.com") != -1) {
        const items = document.querySelectorAll('[dt-eid="em_huaci"]');
        for (let item of items) {
            const pureText = item.textContent.trim();
            item.textContent = pureText;
        }
    }

    if (location.href.indexOf("www.thepaper.cn") != -1) {
        //让main元素的background属性不再生效
        document.querySelector("main").style.background = "none";
    }
})();
