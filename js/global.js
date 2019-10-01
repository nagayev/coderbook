/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/* app version */
var appVersion = "1.3.7";

/* onload page */
window.onload = function ()
{
	setColorList();
	changeColor();
}

/* back url */
function goBack() { window.history.back(); }

/* device detect */
var deviceType = (navigator.userAgent.match(/iPad/i))  == "iPad" ? "iPad" : (navigator.userAgent.match(/iPhone/i))  == "iPhone" ? "iPhone" : (navigator.userAgent.match(/Android/i)) == "Android" ? "Android" : (navigator.userAgent.match(/BlackBerry/i)) == "BlackBerry" ? "BlackBerry" : "null";

function OpenAppMarket()
{
	if (deviceType == "iPad" || deviceType == "iPhone")
	{
		window.open('https://itunes.apple.com/us/app/coder-book/id1209010667?l=ru&ls=1&mt=8', '_system');
	}

	else if (deviceType == "Android")
	{
		window.open('https://play.google.com/store/apps/details?id=com.the.coder.book', '_system');
	}
}

/* lang */
if (localStorage.getItem("language") >= 0)
{
	var language = localStorage.getItem("language");
}

/* set app language */
if (language == 1) { document.getElementById("appLanguage").innerHTML = "Русский"; }
else { document.getElementById("appLanguage").innerHTML = "Не определен (временно)"; }

/* set color */
function SetColor1() { localStorage.setItem("colorSheme", 1); changeColor(); setColorList(); }
function SetColor2() { localStorage.setItem("colorSheme", 2); changeColor(); setColorList(); }
function SetColor3() { localStorage.setItem("colorSheme", 3); changeColor(); setColorList(); }

function setColorList()
{
	localStorage.setItem("#000000", "#000000");
	localStorage.setItem("#212121", "#212121");
	localStorage.setItem("#939393", "#939393");
	localStorage.setItem("#f0f0f0", "#f0f0f0");
	localStorage.setItem("#404040", "#404040");
	localStorage.setItem("#efefef", "#efefef");
	localStorage.setItem("#6f6654", "#6f6654");
	localStorage.setItem("#efe4d0", "#efe4d0");
	localStorage.setItem("#484746", "#484746");
	localStorage.setItem("#333333", "#333333");
	localStorage.setItem("favBut2", "rgba(255, 255, 255, 0.15)");
	localStorage.setItem("favBut1", "rgba(255, 255, 255, 0.7)");
	localStorage.setItem("favBut3", "rgba(111, 102, 84, 0.5)");
}