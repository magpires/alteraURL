document.getElementById("urlLocal").onclick = function() {trocaURL("http://127.0.0.1:5500")};
document.getElementById("urlProducao").onclick = function() {trocaURL("http://www.banestes.com.br")};

function trocaURL(url) {
    chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
        function(tabs){
            var URLAtual = tabs[0].url;
            (function(){var n="wroot/",o = ""+URLAtual;o=o.substring(o.indexOf(n)>0?o.indexOf(n)+n.length-1:8); var novaURL=o.replace(o.substring(0,o.indexOf("/")),url); chrome.tabs.update({url: novaURL})})();
        }
    );
}