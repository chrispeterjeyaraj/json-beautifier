window.addEventListener("message", function (event) { if (event.data.type == "real_json") { window.json = event.data.msg; console.log('%c[JSON Formatter] %cType %cjson%c to access original JSON.', "color:purple;font-weight:bold;", "", "color:rgb(26, 115, 232);font-style:italic;font-weight:bold;",""); } }, false);