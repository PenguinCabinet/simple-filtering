// ==UserScript==
// @name         simple-filtering
// @namespace    https://github.com/PenguinCabinet
// @version      v0.0.1
// @description  The simple tool filtering websites.
// @author       PenguinCabinet
// @match        http://*/*
// @match        https://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

//CONFIG
let URL_blacklist = [

];
let Keyword_blacklist = [

];
//CONFIG



const redirect_URL = "https://example.com";
function block_redirect() {
    location.replace(redirect_URL);
}

(function () {
    URL_blacklist.forEach(function (e) {
        if (location.href.includes(e))
            block_redirect();
    });

    Keyword_blacklist.forEach(function (e) {
        if (document.body.textContent.includes(e))
            block_redirect();
    });

    'use strict';

    // Your code here...
})();