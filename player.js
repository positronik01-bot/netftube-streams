<div class="netftube-video-container" id="netftube-secure-player"></div>

<script>
    // El enlace "https://streamxhd.sbs/live1.php?stream=winsports" cifrado en Base64:
    var encodedUrl = "aHR0cHM6Ly9zdHJlYW14aGQuc2JzL2xpdmUxLnBocD9zdHJlYW09d2luc3BvcnRz";
    
    document.addEventListener("DOMContentLoaded", function() {
        var container = document.getElementById('netftube-secure-player');
        if (container) {
            var decodedUrl = atob(encodedUrl);
            var iframe = document.createElement('iframe');
            iframe.src = decodedUrl;
            iframe.allowFullscreen = true;
            iframe.frameBorder = "0";
            container.appendChild(iframe);
        }
    });
</script>

<style>
    .netftube-video-container {
        position: relative;
        width: 100%;
        padding-bottom: 56.25%;
        height: 0;
        background-color: #141414;
        overflow: hidden;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.5);
    }
    .netftube-video-container iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: none;
    }
</style>
