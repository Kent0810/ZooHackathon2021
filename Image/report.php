<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./index.css">
    <link rel="stylesheet" href="./animation.css">
    <link rel="stylesheet" href="./mediaQuery.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
    <link rel="stylesheet" href="./report.css">
    <script src="https://kit.fontawesome.com/4eea540a2f.js" crossorigin="anonymous"></script>
    <title>Document</title>
</head>

<body>
    <div class="transition transition-2 is-active rptransition"></div>
    <section class="showcase">
        <header>
            <h2 class="logo">#TEAMWILDLIFE</h2>
            <ul class="infromation">
                <li><a href="#">Main Menu</a></li>
                <li><a href="#">Our Programs</a></li>
                <li><a href="#">The Latest</a></li>
            </ul>
            <div class="toggle"><i class="fas fa-bars"></i></div>
        </header>
        <div class="sidebar">
            <header>
                <i class="fas fa-chevron-right"></i>
                <a class="title" href="#">First Function</a>
                <a class="title" href="#">Second Function</a>
                <a class="title" href="#">Third Function</a>
                <a class="title" href="#">Fourth Function</a>
            </header>
        </div>
        <video src="./Video/videoplayback_4.mp4" muted loop autoplay></video>
        <div class="overlay"></div>
    </section>
    <form action="upload.php" method="post" enctype="multipart/form-data">
        Select image to upload:
        <input type="file" name="fileToUpload" id="fileToUpload">
        <input type="submit" value="Upload Image" name="submit">
    </form>
<!-- Code injected by live-server -->
<script type="text/javascript">
	// <![CDATA[  <-- For SVG support
	if ('WebSocket' in window) {
		(function () {
			function refreshCSS() {
				var sheets = [].slice.call(document.getElementsByTagName("link"));
				var head = document.getElementsByTagName("head")[0];
				for (var i = 0; i < sheets.length; ++i) {
					var elem = sheets[i];
					var parent = elem.parentElement || head;
					parent.removeChild(elem);
					var rel = elem.rel;
					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
						elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
					}
					parent.appendChild(elem);
				}
			}
			var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
			var address = protocol + window.location.host + window.location.pathname + '/ws';
			var socket = new WebSocket(address);
			socket.onmessage = function (msg) {
				if (msg.data == 'reload') window.location.reload();
				else if (msg.data == 'refreshcss') refreshCSS();
			};
			if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
				console.log('Live reload enabled.');
				sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
			}
		})();
	}
	else {
		console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
	}
	// ]]>
</script></body>
<script src="./JS/report.js"></script>

</html>