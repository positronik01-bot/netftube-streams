document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById('netftube-player');
    if (container) {
        var iframe = document.createElement('iframe');
        iframe.src = "https://streamxhd.sbs/live1.php?stream=winsports&t=" + Date.now();
        iframe.setAttribute("allowfullscreen", "true");
        iframe.setAttribute("webkitallowfullscreen", "true");
        iframe.setAttribute("mozallowfullscreen", "true");
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("sandbox", "allow-scripts allow-same-origin allow-presentation");
        container.appendChild(iframe);
    }
});
