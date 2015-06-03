module.exports = function() {
	return {
		launchPortable: function() {
			var chromePath = __dirname + "/DeskshellChrome/App/Chrome-bin/deskshell-chrome.exe";
			var appUrl = "http://localhost:80/";
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