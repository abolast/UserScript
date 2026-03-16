// ==UserScript==
// @name         网页管家
// @namespace    airbash/WebManager
// @author       airbash
// @homepageURL  https://github.com/AirBashX/UserScript
// @version      0.0.1
// @description  网页管家
// @match        *://*.aichatos.xyz/*
// @license      GPL-3.0
// @run-at       document-end
// ==/UserScript==

(function () {
    "use strict";

    //删除腾讯新闻调用元宝样式
    let items = document.querySelectorAll(".qnt-link");
    for (let item of items) {
        //去除查询符号 删除紧邻的下一个<i>元素
        /** @type {HTMLElement} */
        let nextElement = item.nextElementSibling;
        if (nextElement && nextElement.tagName === "I") {
            nextElement.remove();
            //去除查询下划线 删除类名
            item.classList.remove("qnt-link");
        }
    }
})();
