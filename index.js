module.exports = function(params) {
	return {
		launchPortable: function(params) {
			var chromePath = __dirname + "/GoogleChromePortable/App/Chrome-bin/deskshell-chrome.exe";
			var appUrl = "http://localhost:80/" + (params.appStart || '');
			args = [
				'--app='+appUrl
				,'--disable-translate'
			]
			require('child_process')
				.exec(chromePath + " " + args.join(' ') + ' ' + appUrl,function(error,stdout,stderr) {
					if (error) console.log("chrome errror:",error);
				});
		}
	}
}