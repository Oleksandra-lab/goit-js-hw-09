!function(){var t=document.body,n=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop"),a=null;n.addEventListener("click",(function(){n.disabled=!0,a=setInterval((function(){t.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),e.addEventListener("click",(function(){n.disabled=!1,clearInterval(a)}))}();
//# sourceMappingURL=01-color-switcher.c65b5c25.js.map