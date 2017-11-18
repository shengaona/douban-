function go(url, data, _callback) {
				$.ajax({
					type: "get", //jquey是不支持post方式跨域的
					async: false,
					url: url, //跨域请求的URL
					dataType: "jsonp",
					data: JSON.stringify(data),
					//传递给请求处理程序，用以获得jsonp回调函数名的参数名(默认为:callback)
					jsonp: "callback",
					//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
					jsonpCallback: "success_jsonpCallback",
					//成功获取跨域服务器上的json数据后,会动态执行这个callback函数
					success: function(r) {
						var d = r;
						_callback.call(null, d);
					}
				})
			}
function getQueryString(name) {
				var url = location.href;
				var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
				var paraObj = {}
				for (i = 0; j = paraString[i]; i++) {
					paraObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length);
				}
				var returnValue = paraObj[name.toLowerCase()];
				if (typeof (returnValue) == "undefined") {
					return "";
				} else {
					return returnValue;
				}
			}