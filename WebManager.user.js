// ==UserScript==
// @name         网页管家
// @namespace    airbash/WebManager
// @author       airbash
// @homepageURL  https://github.com/AirBashX/UserScript
// @version      0.0.1
// @description  删除`腾讯新闻`文章中点击后在元宝查询的样式
// @match        *://news.qq.com/*
// @license      GPL-3.0
// @run-at       document-end
// ==/UserScript==

(function () {
    "use strict";

    const items = document.querySelectorAll('[dt-eid="em_huaci"]');
    for (let item of items) {
        const pureText = item.textContent.trim();
        item.textContent = pureText;
    }
})();
