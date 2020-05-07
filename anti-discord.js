// ==UserScript==
// @name         Anti-Discord
// @namespace    https://xyproxy.design/
// @version      1.3
// @description  Anti-Discord.
// @copyright    Rek
// @icon         https://cdn.discordapp.com/avatars/440183187071565847/9c8af7e6708187fff54df15f291a2cee.png?size=2048
// @include      https://*.discord.com/*
// @match        https://*.discord.com/*
// @downloadURL  http://xyproxy.design/
// @updateURL    http://xyproxy.design/
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// @run-at       document-body
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    alert("Bỏ Discord một thời gian đi để mà học, học hành giờ như thế thì sau này lên coder thế lon nào được .___.")
    var password = prompt("Password gồm n kí tự =))))", "Và tất nhiên mày sẽ không nhớ nó đâu =))))");
            if (password == "5M8VXdAsN5hvhQkx2CusF7G8oopM8Yw3") {
                alert("May mắn ghê nhỉ =))) Nhưng mày vẫn nên bỏ Discord");
                window.location.replace('https://anti-discord.herokuapp.com/success.php/');
            }
            else {
                alert("Không ngoài dự tính =))) That's the wrong number =)))))");
                window.location.replace('https://anti-discord.herokuapp.com/success.php/');
            }
})();
