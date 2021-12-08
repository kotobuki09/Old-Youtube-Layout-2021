// ==UserScript==
// @name			7ktTube | 2016 REDUX
// @namespace STILL_ALIVE
// @version 3.3.6
// @description Modification interface(API) included | Customizable thumbnail size | Customizable video player size | Grey-out + Blur watched video thumbnails | Hide suggestions blocks | Hide  all video-filter bars (tags) | And much more!
// @author 7KT-SWE
// @icon data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAACnVBMVEUAAAD////////94+PX19f+8fH/////////+fn83Nz////////////////////////////////////////////////////////////829vS0tL////////////////////////////////////////////////y8vLp6en95+f////////////sKCgAAADpCQnqDg7pBgbqCwvsHh7sICDsIyPtKirsJibrGhr1kZHyaGjrGBjnAAD81tbrHBz3oqLsJSXxX1/qEBDp6enxZGSysrIVFRX2k5PxWVnqEhK0tLT1gYHtLCzqFBTybW3wUlLtMDDtMjLz8/PuOzvqFxcHBwf95eX0iIjxYGDvQEDpAQF/f3/wU1PuNTX+7e394+PuODgfHx///f3+9PT6xMT4qKilpaX1i4v82dnvR0f/+vr+8vLj5OT2nJzzcnLzcHDwS0vvRETrFRXx8fH7z8/5urrsk5N2dnbxVlbwT08iIiL83d380dH7ycmqqqr1jo70fHx0dHT7JSX6+vr39/f/9vb+8/P+6ur83Nz71NTR0dH5tLT3paX2mZn1iIj1hYXxXFwFBQXNzc33r6/3n5+JiYmFhYV6enrzeHhJSUkiPDzpDw8LDAz95+f7zc36vr68vLyUlJTzdXVra2vyamo0NDTrJib8ICD5Hh4dHR0RERHf39/Y2Nj7zs7Gxsb6v7+2trbvra2Xl5eQkJDybGxeXl5XV1dMTExHR0c7OzsdNjYuLi4SLS38KiopKSn9/Pzv+vr839+8yMj5wMDxuLi4uLj4qqruqqqgoKB8fHwGICDyFxfsFhbV4uL7y8vyx8f6wMCvvb3tt7e3t7eur6+Yr6+OpaXuoKA2U1NRUVE0UVEYMTETMDDyKSkMJye13jY6AAAALHRSTlMAavLy8vJi9PLy4vru2L6UhGs1JRAI5VEb8vLo3qyqfHpIRUA/Eg/y8vJTHBug3AoAAAhOSURBVGjevZqF39JAGIDt7u5uD7fBSoeIM1GwwADBDmzB7u7u7u7u7u7Ov8WLsaAUnD4/f+x27rvnu727947vlkOlTL6qRYvkzxWjQaU8eirVz/WH5C9StFq+ejniKVsiPzDQu8ma7hpNmnQAmZC/RFlj+6UKgTg2NTHSBmRGoVL69suDBHrHCU6DTCmvtV8HmCwg1FbDWwUkMudvbhGhUF1FUBwkYe3ZIZgOG4hgN8ic4qT90oVBOtrg9o+OzEJQuDQW1ABpmYQFB0A2VEftVygG0nIZCy5kJShWAQpqlQPpGNcfC87B0rhu4+bDmlvjunVrNW8e/FRA1cmpXBMK8oG0LCUxfgBaXTt6pMkGWPOkSf81W8CeJkf6KxxpshGkIB8U5EwvmInb3z4SjNwOj5MAaNUWHvcYH+N9IAU5oaAk+KMYk4Z7A3AWHq7heo05IAUldT1IH2NNcAV14E8FOX8rmD8Vt7BBFeyGn/3HATDy5NqR53D4R649OTJ7wVo1E2HBRnARf2KgDPIOlbIXDMHtdz8WC+68NXBUtwKEDjhJZS/QYnwNKIIhSDgHmCjYggUXY4KNW1BaMlEwn4zjjTHBVDh5HulmlkAbxx2IQKGNWQItxsc1gckxIAnh5gCD4IqJAhLjL0AVkIfWHIE2jntrgu1r4MdM0wRLlahqgg2XUfI0TUBy9ZrjqmAq2Idyq2mCTSTG81TBJPAYG80SkBhfAqpgA7lrj00SdCMxfqIISLgPoOnBDIEW45l6AQ7CTZMEM4lgqV5AKteaIyAxnjrfIDiGJv+z5gguqTHWBGRSvmiKYB6J8SaDgPRr6jwzBCdJCIbgE3VdBB6oi+33+BHIXvDm59WtW79tfUHObn+9vvXpR1T4DAsfUNXd71evXr+bsWD4wD6LetwJL5n+6u39+2cerVu2fPDgwctHjZoIWbF+1KgWuNQCVrb4dObMowmDXu8cPz28uO+OPiOGD/idoO/6McFhfm+/kJsX2B83btyYO3fu820ul0veJh8+dPjQs20yTQqwctvzuRCbT2I5J+/uGvL6h01pNutEGkGP0YKVkqNRSRJFh81mY1mWgzjhvwRgPfxAsCy81OEQJUmKumhK6jwolWAdx4iC5S8RWIqefSupYCjjspgBbwt0XphEsCLg4C3mIATaxwsGgJcuH28xC2egZ0IPplC8xTwkxxJNgDswgebg3Yta6Ti4eK1bxNew7vQGZm9cD8ZQsGOWKZM7GwhO7gK9Blh/r8nB4OSuXHqBLzTCIFjg98CflQaBeILW+F+tHa5vRqUXcNFTBkFzwQYrPff+WND6NwKBXmEQzGBZJEBWI50TBE3/UDDUIBjkYHEPTBR0NAiW+Tgo8CXGYDLFZynYaxAsl50ojayePXr0/jE9AGJUy9Gj927uZ8uuBxa6mUGwghZQFnExFGW3jyfhtVMUxXDubAWrDYKmSECwsc11D6LAIYRYwakJeJvs0oYh65FlH6sTyJ0NgpUpBDxH07JMO3ilIPKKoFmAcYyNuGhscDsYqd+wYf2kgKgaPWOH6wUdUwg8UwbtmjBh52iPZywqnJjtUgRj7ZvDAJzwUzxsn/asaj4QgIFLVjqsfEwQWaAXbE4hoFrjcguKaokLgylFMHsZmb/9NO+W2enqnBiilKD5/Av1gk60JbmAtNvOam1PTIpgQGx23yU7HZ6dukld8JA+SP36/I1AY5iLWaU/H8UoCdtrELTOWDBIGZTn7Za+6Dii4xhy7OrDzYhdd+gFLTMVDLYHSBTG2NsrIntQn2fFLj30gl6ZCoIB+2hc6GTHSacP57OJi8naIROBNZWgF0V1VASz0GExZ2NFnAJmMYIZgtaaAM/v0w7CldqSzHtA9fpDwWIfLdPjsxD8cQ/gz+l6YL5geF/I8H8oIPwXQdOkgpZ/KxgwcOFAxAKwMulA2/+3gjshdz+Mt4uT5KLQor9JdomPqYfy+SiGYQKSO1k2HfNXAjLQLJauIUgXIVk2nU0Lfy2w2WaAESNATyrZhNPRFEFY9xT5IgP1glm/E9CpBUMTk13ipN8uvWAlYx8Wl66ZQCxd4wltESexUlg30FxBoBesp53pkt1yO/XQKJhlty9XJpzWJH/b7RFSwSRbeK2TuXQ9GL5sPDAKwGBoJD0gXzV2tJ4cxhV+FxHsNwh2SckFLn9s+WAUaIylmeX683WUQBa/mw2bRDNsbFIBJ08AmAHTFiQVzPBxri59tPMRIZknglWGTaLxnLqKFvm+pO/oXvJ0hHSh41hl4RUYRVLaDPXLKU8NGwgUFvoZt4UIZsV6kA+vl9xiTOBwLwvPmLEz3B4Pbp7pDH+/Rc3s/mnNp09ftFK2zl40fXrzvl5mBexSn8kMvoZvgTsxYrAl9nXCSbfAG3XqVuNY2aIiRiUpGuXIpbyVbdmSg8+2KDocIsvznOiAWKRAl16rWcrCo2s8jDC2ZcspPONyx260bTzealQ3S1cyavsCxyJiA4N3WK0OnhdsCPQ9CBecvEVC9eovRVuttCSo5zIeN8Uaq9u9YVa0mIjArCDbvdqG9eyAie3zVu9wsmGtbbkv9FK8ae1L9Cm85W54aSDMUaa1z4wiLw0YX3tY0iXAmnL/rfR68tpD/IsbfZrRlMgJiCybFgTORjN+srJvlOTVk0Gt3VHaCqHRVz6Xy+PxSAiR4FAQFSQIvAT9UVKmaStC5qa0wEmlXKnkL8/smLB+6KqOe8ecb92yfXDysAj8G6fXG+rSFePm3QienHbp6oVEIpEpnYOrVzfbP3pzx1Xt1jUfYHx5JtXrP4QCBQrkhTTMTShYsSCiYm4F9H/wklxGjK///ALA2h/WmqCBcwAAAABJRU5ErkJggg==
// @icon64 data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAACNFBMVEUAAAD////////4rKyYmJj////3pqb7zMz4trb////////////////////////819f5wMD////////////83d36xMT5urqOjo7/////////////+Pj+8vL96+v95+f95eX84+O6urr4r6+qqqr3qKj////////////////sKCgAAADsJCTsKSnrICDpCgrrHh7qERHsIiLpBQX+8PDrGxvrGBjqDg7pBwfrFRURERH/+fn82Nh7e3vtLS3809PwXFztLi7pAADs7e381tb7zs7uMzPqDAz96urvR0f82trtMDD+8/PwUVHwS0v95+f3o6P4qan3oKDyamr/+/v+7u7zbW3xV1fvQ0M5OTnqCgrmAADn5+f7yMj6wcH6vLz2mZn2kZHzdHRhYWFaWlruPj7uOzvuODguLi7+9/f/9fXx8fH95ub95eX84OD7y8vExMT7w8O6urr3nJz0gIDwVFT/NDQJCwv94uL83t7V1dX70NC+vr62trb4rq6ZmZn2lZWKiopqampoaGjyZGTxXFxPT0//QUHuQEDtFhbe3t73trb1s7Nzi4v1iYmIiIj0g4N5eXmjc3PzcnJCQkL/OTkpKSkdHR39///t///u7u7q6urf39/IyMj6vr7NpaWkpKSQkJCBgYHzd3ewcnJubm7xZWWiZGTxYWFXV1cAGRkYGBjd+fn19fXh4eGsrKzQl5fHlpatgoKkfHy0dnaqa2tiYmJdXV3/RkYjPDwXMzP/MDD+KSmHIHNsAAAAKHRSTlMAv/Dw8Ljw8PDj05JnMQbw8NxdR/Dw8PC5Q0Lw8PDw8PDw8PDw3V5JgcnJaAAABWxJREFUWMOl14dX00AcB3D33nvvcZdc1tE0EUQboQXBKqVIbQUBBVRERMC999577733+uf8XdKkDa/aoN/3SJMr9+nl7jKum5khg3r372Fl+theVsbO7PGX9O89aEg3JyOHIyeXODsv0d8zfKRdf0R68REHWIuyZYRVfzD6VwANNoEBrrIdu3ft2rXpIAArsgMDWP0JKEMeA3AAZc94AAaiDLkCwF4PwEAAemcoX8lBdqADzw80odtrjmw+sWa1meebkDvjAOieAdgM9eeha7BtQis47sRuLpn7yJ3ufwD2m334eh4oizjuCLpnA/c8Amvgfw+iRQx4wHG30Y0dtw5Aya0dTR6BtawPGXBl5dXkcJ7luLPwkRVI9eEmBlw6y3ZY5nPcfM8A68OtNxhw9SqchXfA3YcMgHhvgbsPvzjAg64Da9mIO8ClLgMrt0K1XRaw4gq3tckj4O7DmxZwAi6r3V0F9ls3A2si7eW4896BVB9+tYE3cBregVQf7k8CUfSS4256BlLzcHMSaGLteds1wLx2VyaBRawTDsLBeegLj8BpqP8dQa6/4F5cR6+2cj+umaWnswLrSis2bNx+9+OHC+9bq6vvnHr09NGpVXc+Pf18srr63YULdxcUbN/YXJSzLjNwanm4viEYIPjyt6NHt6i6qh/fcnnLcdnc6vqvo0d/SgomgWBjQ/GhSG5nYHGYUllXVZ9PkgRBYeHTYhYIgiRJPlXVZc0IrnIDO30GT7DnEBynZelAEdas6t4JXWxJAx4aAcUv2/HrhKR+S/bL9rFLoMUpoIhX+WC42E74GI/t8KQ4bB+7w8dbHWBPHPuXoFRadAUnowZLEcqTBJyhCeccoEbD/nAasCAdgAHbngnAYrkD1Go43pEGNKcDOQgVZAYOOUC7htX6SKT2JFSuaKtZdk7iPQChSge4qOF8RdMSMdZ8w9BkNnEwUSAWIEi6jmEkoEyX1eSMkcMOsFy02rQQgDxBwsQH883a6gzIo7S+URRgMDW1IRb0+wkj9FjUBp7EXYAi7NlZWB2Qy3YWVmEegNZAWXR9rczztLwwF1WcjGkmUL/OBg6HXIDgK4KdErqNbSUAlkYR5KFGLyIz0ZgIgtqYYwOV/k7AAoRyAmIhQrn5Qo4zuEYJgmyAvwJZYf1bYQNLsgDrKw/DbNhmtMP3dWIZsmr4Soq8AgsSWjNc8XQZjLKUYHN2Of0rILkBaDG/AQANfnsjb3QwQCNdBJaaLQBATMSyA74/A6Vlbav+B7Bzkf4zUMqSWy66gErvwIbG/CDPJ6+zitRM9AxsUzUfD4J7Jh4SPQPNxKhcX7qOnYLeUGoD5RmAihJa5Uwkv9KcmgeVbD5SAI7l2kBdJ0AqgBaEEgU2kJegRQDQCPShkmBAOXXdD9q1TkAe7OwrQzYQPVOL2LVQB9tIfRVsYzLG/g4HqHUDvGY9txzASpXB24/VVRoMRPxZ+l2ZhZYjuPIkiYTCCHJmO2wCEiurQpCOkNhhPVN3KjpJ3ZV7w3NBtAa2uGZfzTk2RuKzlpYnRl2kbR/h97VF6uT2wqpDcUK0+pqWgtYzkpzPngvt1oJjIMwOxceAfIlSKhKCCQmpqohlSjVMNEplicIxgchUlWTqg/qYF+FEByYXXcsNknwSWp/sjpzccx8TrAi8tacdi8KiK7nsWyqFAO1KiEqrYdnnLDxbZQq658C5GG1s4Zla+hY2GJpuv57wfwh7S5EkeFyIBr8HKs1xLb4jhxtK8jEvwPc6e0lgCZkxd6FI11WfBF0QaFxSCzNz9lyrdmr5P3Hy1FFDh/btO3rYmH79ZvSEzOrD0pOlX78xw4aN7tt36KhpUyalLf9/A5nj/LZRV7kLAAAAAElFTkSuQmCC
// @license      GPL-3.0-only
// @homepageURL     https://7kttube.tk/
// @downloadURL	    https://7kttube.tk/install/7ktTube.user.js
// @supportURL      https://discord.gg/7WRjXHMfXJ
// @contributionURL https://www.paypal.com/donate/?hosted_button_id=2EJR4DLTR4Y7Q
// @require https://unpkg.com/vue@2.6.12/dist/vue.js
// @require https://unpkg.com/xfetch-js@0.5.0/dist/xfetch.min.js
// @match *://*.youtube.com/*
// @match *://*.youtu.be/*
// @grant GM_addStyle
// @grant GM_getValue
// @grant GM.getValue
// @grant GM.setValue
// @grant GM_setValue
// @grant GM_registerMenuCommand
// @grant unsafeWindow
// @run-at document-start
// @compatible Chrome >=55 + Tampermonkey + Violentmonkey
// @compatible Firefox >=56 + Tampermonkey + Violentmonkey
// @compatible Opera + Tampermonkey + Violentmonkey
// @compatible Edge + Tampermonkey + Violentmonkey
// ==/UserScript==
/*jshint esversion: 6 */
// fix GM_addStyle

if (typeof GM_addStyle !== "function") {
   function GM_addStyle(css) {
      let style = document.createElement('style');
      style.type = 'text/css';
      style.appendChild(document.createTextNode(css));
      const head = document.getElementsByTagName('head')[0];
      if (head) head.appendChild(style);
      else document.documentElement.appendChild(style);
   }
}

const yt_lib_custom = {
   removeEl: selector => {
      let e = document.querySelector(selector);
      e && e.parentNode.removeChild(e);
   },
   getQueryURL: (query, url) => new URLSearchParams((url ? new URL(url) : location).search).get(query),
}

// remove el
window.addEventListener('load', () => {
   document.querySelectorAll("#masthead-ad,#root").forEach(e => e.remove()); // ad
   document.body.addEventListener("yt-navigate-finish", () => {
      yt_lib_custom.removeEl('ytp-miniplayer');
      yt_lib_custom.removeEl('.ytp-miniplayer-button');
      if (window.location.pathname != "/watch") yt_lib_custom.removeEl('#movie_player video');
     
   });
});

function restore_appbar_links() {
	var trendingData = {
	  "navigationEndpoint": {
		"clickTrackingParams": "CBwQtSwYASITCNqYh-qO_fACFcoRrQYdP44D9Q==",
		"commandMetadata": {
		  "webCommandMetadata": {
			"url": "/feed/trending",
			"webPageType": "WEB_PAGE_TYPE_BROWSE",
			"rootVe": 6827,
			"apiUrl": "/youtubei/v1/browse"
		  }
		},
		"browseEndpoint": {
		  "browseId": "FEtrending"
		}
	  },
	  "icon": {
		"iconType": "TRENDING"
	  },
	  "trackingParams": "CBwQtSwYASITCNqYh-qO_fACFcoRrQYdP44D9Q==",
	  "formattedTitle": {
		"simpleText": "Trending"
	  },
	  "accessibility": {
		"accessibilityData": {
		  "label": "Trending"
		}
	  },
	  "isPrimary": true
	};

	var guidetemplate = `<ytd-guide-entry-renderer class="style-scope ytd-guide-section-renderer" is-primary="" line-end-style="none"><!--css-build:shady--><a id="endpoint" class="yt-simple-endpoint style-scope ytd-guide-entry-renderer" tabindex="-1" role="tablist"><tp-yt-paper-item role="tab" class="style-scope ytd-guide-entry-renderer" tabindex="0" aria-disabled="false"><!--css-build:shady--><yt-icon class="guide-icon style-scope ytd-guide-entry-renderer" disable-upgrade=""></yt-icon><yt-img-shadow height="24" width="24" class="style-scope ytd-guide-entry-renderer" disable-upgrade=""></yt-img-shadow><yt-formatted-string class="title style-scope ytd-guide-entry-renderer"><!--css-build:shady--></yt-formatted-string><span class="guide-entry-count style-scope ytd-guide-entry-renderer"></span><yt-icon class="guide-entry-badge style-scope ytd-guide-entry-renderer" disable-upgrade=""></yt-icon><div id="newness-dot" class="style-scope ytd-guide-entry-renderer"></div></tp-yt-paper-item></a><yt-interaction class="style-scope ytd-guide-entry-renderer"><!--css-build:shady--><div class="stroke style-scope yt-interaction"></div><div class="fill style-scope yt-interaction"></div></yt-interaction></ytd-guide-entry-renderer>`;
	document.querySelector(`#items > ytd-guide-entry-renderer:nth-child(1)`).insertAdjacentHTML("afterend", guidetemplate);
	document.querySelector(`#items > ytd-guide-entry-renderer:nth-child(2)`).data = trendingData;
	document.querySelector(`#items > ytd-guide-entry-renderer:nth-child(3)`).remove();

	document.querySelector("ytd-guide-section-renderer.style-scope:nth-child(1)").data.items[1].guideEntryRenderer = trendingData;


/*	if (yt.config_.LOGGED_IN)
	{
		function getAccountId()
		{
			var yourVideosIndex = document.querySelector("ytd-guide-collapsible-section-entry-renderer.style-scope #section-items");

			for (i = 0; i < yourVideosIndex.children.length; i++)
			{
				if (yourVideosIndex.children[i].querySelector("yt-icon path").getAttribute("d") == "M18.4 5.6v12.8H5.6V5.6h12.8zm0-1.8H5.6a1.8 1.8 0 0 0-1.8 1.8v12.8a1.8 1.8 0 0 0 1.8 1.9h12.8a1.8 1.8 0 0 0 1.9-1.9V5.6a1.8 1.8 0 0 0-1.9-1.8z")
				{
					return yourVideosIndex.children[i].querySelector("#endpoint").href.replace(/(https:\/\/)|(studio.youtube.com)|(\/channel\/)|(\/videos)/g, "");
				}
			}
		}

		var channelData = {
		  "navigationEndpoint": {
			"clickTrackingParams": "CBwQtSwYASITCNqYh-qO_fACFcoRrQYdP44D9Q==",
			"commandMetadata": {
			  "webCommandMetadata": {
				"url": "/channel/",
				"webPageType": "WEB_PAGE_TYPE_CHANNEL",
				"rootVe": 6827,
				"apiUrl": "/youtubei/v1/browse"
			  }
			},
			"browseEndpoint": {
			  "browseId": 
			}
		  },
		  "icon": {
			"iconType": "ACCOUNT_BOX"
		  },
		  "trackingParams": "CBwQtSwYASITCNqYh-qO_fACFcoRrQYdP44D9Q==",
		  "formattedTitle": {
			"simpleText": "My channel"
		  },
		  "accessibility": {
			"accessibilityData": {
			  "label": "My channel"
			}
		  },
		  "isPrimary": true
		};

		var guidetemplate = `<ytd-guide-entry-renderer class="style-scope ytd-guide-section-renderer" is-primary="" line-end-style="none"><!--css-build:shady--><a id="endpoint" class="yt-simple-endpoint style-scope ytd-guide-entry-renderer" tabindex="-1" role="tablist"><tp-yt-paper-item role="tab" class="style-scope ytd-guide-entry-renderer" tabindex="0" aria-disabled="false"><!--css-build:shady--><yt-icon class="guide-icon style-scope ytd-guide-entry-renderer" disable-upgrade=""></yt-icon><yt-img-shadow height="24" width="24" class="style-scope ytd-guide-entry-renderer" disable-upgrade=""></yt-img-shadow><yt-formatted-string class="title style-scope ytd-guide-entry-renderer"><!--css-build:shady--></yt-formatted-string><span class="guide-entry-count style-scope ytd-guide-entry-renderer"></span><yt-icon class="guide-entry-badge style-scope ytd-guide-entry-renderer" disable-upgrade=""></yt-icon><div id="newness-dot" class="style-scope ytd-guide-entry-renderer"></div></tp-yt-paper-item></a><yt-interaction class="style-scope ytd-guide-entry-renderer"><!--css-build:shady--><div class="stroke style-scope yt-interaction"></div><div class="fill style-scope yt-interaction"></div></yt-interaction></ytd-guide-entry-renderer>`;
		document.querySelector(`#items > ytd-guide-entry-renderer:nth-child(1)`).insertAdjacentHTML("afterend", guidetemplate);
		document.querySelector(`#items > ytd-guide-entry-renderer:nth-child(2)`).data = channelData;
		document.querySelector("ytd-guide-section-renderer.style-scope:nth-child(1)").data.items[1].guideEntryRenderer = channelData;
  }*/
}

function gen_aspect_fix() {
  "use strict";
  var vidfix = {
    inject: function(is_user_script) {
      var modules;
      var vidfix_api;
      var user_settings;
      var default_language;
      var send_settings_to_page;
      var receive_settings_from_page;
      modules = [];
      vidfix_api = {
        initializeBypasses: function() {
          var ytd_watch;
          var sizeBypass;
          if (ytd_watch = document.querySelector("ytd-watch, ytd-watch-flexy")) {
            sizeBypass = function() {
              var width;
              var height;
              var movie_player;
              if (!ytd_watch.theater && !document.querySelector(".iri-full-browser") && (movie_player = document.querySelector("#movie_player"))) {
                width = movie_player.offsetWidth;
                height = Math.round(movie_player.offsetWidth / (16 / 9));
                if (ytd_watch.updateStyles) {
                  ytd_watch.updateStyles({
                    "--ytd-watch-flexy-width-ratio": 1,
                    "--ytd-watch-flexy-height-ratio": 0.5625
                  });
                  ytd_watch.updateStyles({
                    "--ytd-watch-width-ratio": 1,
                    "--ytd-watch-height-ratio": 0.5625
                  });
                }
              }
              else {
                width = window.NaN;
                height = window.NaN;
              }
              return {
                width: width,
                height: height
              };
            };
            if (ytd_watch.calculateCurrentPlayerSize_) {
              if (!ytd_watch.calculateCurrentPlayerSize_.bypassed) {
                ytd_watch.calculateCurrentPlayerSize_ = sizeBypass;
                ytd_watch.calculateCurrentPlayerSize_.bypassed = true;
              }
              if (!ytd_watch.calculateNormalPlayerSize_.bypassed) {
                ytd_watch.calculateNormalPlayerSize_ = sizeBypass;
                ytd_watch.calculateNormalPlayerSize_.bypassed = true;
              }
            }
          }
        },
        initializeSettings: function(new_settings) {
          var i;
          var j;
          var option;
          var options;
          var loaded_settings;
          var vidfix_settings;
          if (vidfix_settings = document.getElementById("vidfix-settings")) {
            loaded_settings = JSON.parse(vidfix_settings.textContent || "null");
            receive_settings_from_page = vidfix_settings.getAttribute("settings-beacon-from");
            send_settings_to_page = vidfix_settings.getAttribute("settings-beacon-to");
            vidfix_settings.remove();
          }
          user_settings = new_settings || loaded_settings || user_settings || {};
          for (i = 0; i < modules.length; i++) {
            for (options in modules[i].options) {
              if (modules[i].options.hasOwnProperty(options)) {
                option = modules[i].options[options];
                if (!(option.id in user_settings) && "value" in option) {
                  user_settings[option.id] = option.value;
                }
              }
            }
          }
        },
        initializeModulesUpdate: function() {
          var i;
          for (i = 0; i < modules.length; i++) {
            if (modules[i].onSettingsUpdated) {
              modules[i].onSettingsUpdated();
            }
          }
        },
        initializeModules: function() {
          var i;
          for (i = 0; i < modules.length; i++) {
            if (modules[i].ini) {
              modules[i].ini();
            }
          }
        },
        initializeOption: function() {
          var key;
          if (this.started) {
            return true;
          }
          this.started = true;
          for (key in this.options) {
            if (this.options.hasOwnProperty(key)) {
              if (!(key in user_settings) && this.options[key].value) {
                user_settings[key] = this.options[key].value;
              }
            }
          }
          return false;
        },
        initializeBroadcast: function(event) {
          if (event.data) {
            if (event.data.type === "settings") {
              if (event.data.payload) {
                if (event.data.payload.broadcast_id === this.broadcast_channel.name) {
                  this.initializeSettings(event.data.payload);
                  this.initializeModulesUpdate();
                }
              }
            }
          }
        },
        ini: function() {
          this.initializeSettings();
          this.broadcast_channel = new BroadcastChannel(user_settings.broadcast_id);
          this.broadcast_channel.addEventListener("message", this.initializeBroadcast.bind(this));
          document.documentElement.addEventListener("load", this.initializeSettingsButton, true);
          document.documentElement.addEventListener("load", this.initializeBypasses, true);
          if (this.isSettingsPage) {
            this.initializeModules();
          }
        }
      };
      vidfix_api.ini();
    },
    isAllowedPage: function() {
      var current_page;
      if (current_page = window.location.pathname.match(/\/[a-z-]+/)) {
        current_page = current_page[0];
      }
      else {
        current_page = window.location.pathname;
      }
      return ["/tv", "/embed", "/live_chat", "/account", "/account_notifications", "/create_channel", "/dashboard", "/upload", "/webcam"].indexOf(current_page) < 0;
    },
    generateUUID: function() {
      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11)
        .replace(/[018]/g, function(point) {
          return (point ^ window.crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> point / 4)
            .toString(16);
        });
    },
    saveSettings: function() {
      if (this.is_user_script) {
        this.GM.setValue(this.id, JSON.stringify(this.user_settings));
      }
      else {
        chrome.storage.local.set({
          vidfixSettings: this.user_settings
        });
      }
    },
    updateSettingsOnOpenWindows: function() {
      this.broadcast_channel.postMessage({
        type: "settings",
        payload: this.user_settings
      });
    },
    settingsUpdatedFromOtherWindow: function(event) {
      if (event.data && event.data.broadcast_id === this.broadcast_channel.name) {
        this.user_settings = event.data;
        this.saveSettings();
      }
    },
    contentScriptMessages: function(custom_event) {
      var updated_settings;
      if ((updated_settings = custom_event.detail.settings) !== undefined) {
        this.saveSettings();
      }
    },
    initializeScript: function(event) {
      var holder;
      this.user_settings = event[this.id] || event;
      if (!this.user_settings.broadcast_id) {
        this.user_settings.broadcast_id = this.generateUUID();
        this.saveSettings();
      }
      this.broadcast_channel = new BroadcastChannel(this.user_settings.broadcast_id);
      this.broadcast_channel.addEventListener("message", this.settingsUpdatedFromOtherWindow.bind(this));
      event = JSON.stringify(this.user_settings);
      holder = document.createElement("vidfix-settings");
      holder.id = "vidfix-settings";
      holder.textContent = event;
      holder.setAttribute("style", "display: none");
      holder.setAttribute("settings-beacon-from", this.receive_settings_from_page);
      holder.setAttribute("settings-beacon-to", this.send_settings_to_page);
      document.documentElement.appendChild(holder);
      holder = document.createElement("script");
      holder.textContent = "(" + this.inject + "(" + this.is_user_script.toString() + "))";
      document.documentElement.appendChild(holder);
      holder.remove();
      this.inject = null;
      delete this.inject;
    },
    main: function(event) {
      var now;
      var context;
      now = Date.now();
      this.receive_settings_from_page = now + "-" + this.generateUUID();
      this.send_settings_to_page = now + 1 + "-" + this.generateUUID();
      window.addEventListener(this.receive_settings_from_page, this.contentScriptMessages.bind(this), false);
      if (!event) {
        if (this.is_user_script) {
          context = this;
          // javascript promises are horrible
          this.GM.getValue(this.id, "{}")
            .then(function(value) {
              event = JSON.parse(value);
              context.initializeScript(event);
            });
        }
      }
      else {
        this.initializeScript(event);
      }
    },
    ini: function() {
      if (this.isAllowedPage()) {
        this.is_settings_page = window.location.pathname === "/vidfix-settings";
        this.id = "vidfixSettings";
        if (typeof GM === "object" || typeof GM_info === "object") {
          this.is_user_script = true;
          // GreaseMonkey 4 polly fill
          // https://arantius.com/misc/greasemonkey/imports/greasemonkey4-polyfill.js
          if (typeof GM === "undefined") {
            this.GM = {
              setValue: GM_setValue,
              info: GM_info,
              getValue: function() {
                return new Promise((resolve, reject) => {
                  try {
                    resolve(GM_getValue.apply(this, arguments));
                  }
                  catch (e) {
                    reject(e);
                  }
                });
              }
            };
          }
          else {
            this.GM = GM;
          }
          this.main();
        }
        else {
          this.is_user_script = false;
          chrome.storage.local.get(this.id, this.main.bind(this));
        }
      }
    }
 };

  vidfix.ini();

  function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) {
      return;
    }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
  }
  addGlobalStyle('.html5-video-player { background-color: #000!important; }');

   }

function gen_history() {
   /*
     - Grey out watched video thumbnails info:
     - Use ALT+LeftClick or ALT+RightClick on a video list item to manually toggle the watched marker. The mouse button is defined in the script and can be changed.
     - For restoring/merging history, source file can also be a YouTube's history data JSON (downloadable from https://support.google.com/accounts/answer/3024190?hl=en). Or a list of YouTube video URLs (using current time as timestamps).
   */
  //=== config start ===
  var maxWatchedVideoAge   = 5 * 365; //number of days. set to zero to disable (not recommended)
  var contentLoadMarkDelay = 600;     //number of milliseconds to wait before marking video items on content load phase (increase if slow network/browser)
  var markerMouseButtons   = [0, 1];  //one or more mouse buttons to use for manual marker toggle. 0=left, 1=right, 2=middle. e.g.:
                                      //if `[0]`, only left button is used, which is ALT+LeftClick.
                                      //if `[1]`, only right button is used, which is ALT+RightClick.
                                      //if `[0,1]`, any left or right button can be used, which is: ALT+LeftClick or ALT+RightClick.
  //=== config end ===
 
  var watchedVideos, ageMultiplier = 24 * 60 * 60 * 1000, xu = /\/watch(?:\?|.*?&)v=([^&]+)|\/shorts\/([^\/\?]+)/;
 
  function getVideoId(url) {
    var vid = url.match(xu);
    if (vid) vid = vid[1] || vid[2];
    return vid;
  }
 
  function watched(vid) {
    return !!watchedVideos.entries[vid];
  }
 
  function processVideoItems(selector) {
    var items = document.querySelectorAll(selector), i, link;
    for (i = items.length-1; i >= 0; i--) {
      if (link = items[i].querySelector("A")) {
        if (watched(getVideoId(link.href))) {
          items[i].classList.add("watched");
        } else items[i].classList.remove("watched");
      }
    }
  }
 
  function processAllVideoItems() {
    //home page
    processVideoItems(".yt-uix-shelfslider-list>.yt-shelf-grid-item");
    processVideoItems("#contents.ytd-rich-grid-renderer>ytd-rich-item-renderer,#contents.ytd-rich-shelf-renderer ytd-rich-item-renderer.ytd-rich-shelf-renderer");
    //subscriptions page
    processVideoItems(".multirow-shelf>.shelf-content>.yt-shelf-grid-item");
    //history:watch page
    processVideoItems('ytd-section-list-renderer[page-subtype="history"] .ytd-item-section-renderer>ytd-video-renderer');
    //channel/user home page
    processVideoItems("#contents>.ytd-item-section-renderer>.ytd-newspaper-renderer,#items>.yt-horizontal-list-renderer"); //old
    processVideoItems("#contents>.ytd-channel-featured-content-renderer,#contents>.ytd-shelf-renderer>#grid-container>.ytd-expanded-shelf-contents-renderer"); //new
    //channel/user video page
    processVideoItems(".yt-uix-slider-list>.featured-content-item,.channels-browse-content-grid>.channels-content-item,#items>.ytd-grid-renderer");
    //channel/user playlist page
    processVideoItems(".expanded-shelf>.expanded-shelf-content-list>.expanded-shelf-content-item-wrapper,.ytd-playlist-video-renderer");
    //channel/user playlist item page
    processVideoItems(".pl-video-list .pl-video-table .pl-video,ytd-playlist-panel-video-renderer");
    //channel/user search page
    if (/^\/(?:c|channel|user)\/.*?\/search/.test(location.pathname)) {
      processVideoItems(".ytd-browse #contents>.ytd-item-section-renderer"); //new
    }
    //search page
    processVideoItems("#results>.section-list .item-section>li,#browse-items-primary>.browse-list-item-container"); //old
    processVideoItems(".ytd-search #contents>ytd-video-renderer,.ytd-search #contents>ytd-playlist-renderer,.ytd-search #items>ytd-video-renderer"); //new
    //video page
    processVideoItems(".watch-sidebar-body>.video-list>.video-list-item,.playlist-videos-container>.playlist-videos-list>li"); //old
    processVideoItems(".ytd-compact-video-renderer,.ytd-compact-radio-renderer"); //new
  }
 
  function addHistory(vid, time, noSave, i) {
    if (!watchedVideos.entries[vid]) {
      watchedVideos.index.push(vid);
    } else {
      i = watchedVideos.index.indexOf(vid);
      if (i >= 0) watchedVideos.index.push(watchedVideos.index.splice(i, 1)[0])
    }
    watchedVideos.entries[vid] = time;
    if (!noSave) GM_setValue("watchedVideos", JSON.stringify(watchedVideos));
  }
 
  function delHistory(index, noSave) {
    delete watchedVideos.entries[watchedVideos.index[index]];
    watchedVideos.index.splice(index, 1);
    if (!noSave) GM_setValue("watchedVideos", JSON.stringify(watchedVideos));
  }
 
  var dc, ut;
  function parseData(s, a, i, j, z) {
    try {
      dc = false;
      s = JSON.parse(s);
      //convert to new format if old format.
      //old: [{id:<strVID>, timestamp:<numDate>}, ...]
      //new: {entries:{<stdVID>:<numDate>, ...}, index:[<strVID>, ...]}
      if (Array.isArray(s) && (!s.length || (("object" === typeof s[0]) && s[0].id && s[0].timestamp))) {
        a = s;
        s = {entries: {}, index: []};
        a.forEach(o => {
          s.entries[o.id] = o.timestamp;
          s.index.push(o.id);
        });
      } else if (("object" !== typeof s) || ("object" !== typeof s.entries) || !Array.isArray(s.index)) return null;
      //reconstruct index if broken
      if (s.index.length !== (a = Object.keys(s.entries)).length) {
        s.index = a.map(k => [k, s.entries[k]]).sort((x, y) => x[1] - y[1]).map(v => v[0]);
        dc = true;
      }
      return s;
    } catch(z) {
      return null;
    }
  }
 
  function parseYouTubeData(s, a) {
    try {
      s = JSON.parse(s);
      //convert to native format if YouTube format.
      //old: [{titleUrl:<strUrl>, time:<strIsoDate>}, ...] (excludes irrelevant properties)
      //new: {entries:{<stdVID>:<numDate>, ...}, index:[<strVID>, ...]}
      if (Array.isArray(s) && (!s.length || (("object" === typeof s[0]) && s[0].titleUrl && s[0].time))) {
        a = s;
        s = {entries: {}, index: []};
        a.forEach((o, m, t) => {
          if (o.titleUrl && (m = o.titleUrl.match(xu))) {
            if (isNaN(t = (new Date(o.time)).getTime())) t = (new Date()).getTime();
            s.entries[m[1] || m[2]] = t;
            s.index.push(m[1] || m[2]);
          }
        });
        s.index.reverse();
        return s;
      } else return null;
    } catch(a) {
      return null;
    }
  }
 
  function mergeData(o, a) {
    o.index.forEach(i => {
      if (watchedVideos.entries[i]) {
        if (watchedVideos.entries[i] < o.entries[i]) watchedVideos.entries[i] = o.entries[i];
      } else watchedVideos.entries[i] = o.entries[i];
    });
    a = Object.keys(watchedVideos.entries);
    watchedVideos.index = a.map(k => [k, watchedVideos.entries[k]]).sort((x, y) => x[1] - y[1]).map(v => v[0]);
  }
 
  function getHistory(a, b) {
    a = GM_getValue("watchedVideos");
    if (a === undefined) {
      a = '{"entries": {}, "index": []}';
    } else if ("object" === typeof a) a = JSON.stringify(a);
    if (b = parseData(a)) {
      watchedVideos = b;
      if (dc) b = JSON.stringify(b);
    } else b = JSON.stringify(watchedVideos = {entries: {}, index: []});
    GM_setValue("watchedVideos", b);
  }
 
  function doProcessPage() {
    //get list of watched videos
    getHistory();
 
    //remove old watched video history
    var now = (new Date()).valueOf(), changed, vid;
    if (maxWatchedVideoAge > 0) {
      while (watchedVideos.index.length) {
        if (((now - watchedVideos.entries[watchedVideos.index[0]]) / ageMultiplier) > maxWatchedVideoAge) {
          delHistory(0, false);
          changed = true;
        } else break;
      }
      if (changed) GM_setValue("watchedVideos", JSON.stringify(watchedVideos));
    }
 
    //check and remember current video
    if ((vid = getVideoId(location.href)) && !watched(vid)) addHistory(vid, now);
 
    //mark watched videos
         processAllVideoItems();
  }
  function processPage() {
    setTimeout(doProcessPage, Math.floor(contentLoadMarkDelay / 2));
  }
 
  function delayedProcessPage() {
    setTimeout(doProcessPage, contentLoadMarkDelay);
  }
 
  function toggleMarker(ele, i) {
    if (ele) {
      if (ele.href) {
        i = getVideoId(ele.href);
      } else {
        ele = ele.parentNode;
        while (ele) {
          if (ele.tagName === "A") {
            i = getVideoId(ele.href);
            break;
          }
          ele = ele.parentNode;
        }
      }
      if (i) {
        if ((ele = watchedVideos.index.indexOf(i)) >= 0) {
          delHistory(ele);
        } else addHistory(i, (new Date()).valueOf());
        processAllVideoItems();
      }
    }
  }
  
 
  var rxListUrl = /\/\w+_ajax\?|\/results\?search_query|\/v1\/v1\/(browse|next|search)\?/;
  var xhropen = XMLHttpRequest.prototype.open, xhrsend = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.open = function(method, url) {
    this.url_mwyv = url;
    return xhropen.apply(this, arguments);
  };
  XMLHttpRequest.prototype.send = function(method, url) {
    if (rxListUrl.test(this.url_mwyv) && !this.listened_mwyv) {
      this.listened_mwyv = 1;
      this.addEventListener("load", delayedProcessPage);
    }
    return xhrsend.apply(this, arguments);
  };
 
  var fetch_ = unsafeWindow.fetch;
  unsafeWindow.fetch = function(opt) {
    let url = opt.url || opt;
    if (rxListUrl.test(opt.url || opt)) {
      return fetch_.apply(this, arguments).finally(delayedProcessPage);
    } else return fetch_.apply(this, arguments);
  };
 
  addEventListener("DOMContentLoaded", sty => {
    sty = document.createElement("STYLE");
    sty.innerHTML = `
    
`;
    document.head.appendChild(sty);
    var nde = Node.prototype.dispatchEvent;
    Node.prototype.dispatchEvent = function(ev) {
      if (ev.type === "yt-service-request-completed") {
        clearTimeout(ut);
        ut = setTimeout(doProcessPage, contentLoadMarkDelay / 2)
      }
      return nde.apply(this, arguments)
    };
  });
 
  var lastFocusState = document.hasFocus();
  addEventListener("blur", () => {
    lastFocusState = false;
  });
  addEventListener("focus", () => {
    if (!lastFocusState) processPage();
    lastFocusState = true;
  });
  addEventListener("click", (ev) => {
    if ((markerMouseButtons.indexOf(ev.button) >= 0) && ev.altKey) toggleMarker(ev.target);
  });
 
  if (markerMouseButtons.indexOf(1) >= 0) {
    addEventListener("contextmenu", (ev) => {
      if (ev.altKey) toggleMarker(ev.target);
    });
  }
  if (window["body-container"]) { //old
    addEventListener("spfdone", processPage);
    processPage();
  } else { //new
    var t = 0;
    function pl() {
      clearTimeout(t);
      t = setTimeout(processPage, 300);
    }
    (function init(vm) {
      if (vm = document.getElementById("visibility-monitor")) {
        vm.addEventListener("viewport-load", pl);
      } else setTimeout(init, 100);
    })();
    (function init2(mh) {
      if (mh = document.getElementById("masthead")) {
        mh.addEventListener("yt-rendererstamper-finished", pl);
      } else setTimeout(init2, 100);
    })();
    addEventListener("load", delayedProcessPage);
    addEventListener("spfprocess", delayedProcessPage);
  }
 
  GM_registerMenuCommand("Display History Statistics", () => {
    function sum(r, v) {
      return r + v;
    }
    function avg(arr) {
      return arr && arr.length ? Math.round(arr.reduce(sum, 0) / arr.length) : "(n/a)";
    }
    var pd, pm, py, ld = [], lm = [], ly = [];
    getHistory();
    Object.keys(watchedVideos.entries).forEach((k, t) => {
      t = new Date(watchedVideos.entries[k]);
      if (!pd || (pd !== t.getDate())) {
        ld.push(1);
        pd = t.getDate();
      } else ld[ld.length - 1]++;
      if (!pm || (pm !== (t.getMonth() + 1))) {
        lm.push(1);
        pm = t.getMonth() + 1;
      } else lm[lm.length - 1]++;
      if (!py || (py !== t.getFullYear())) {
        ly.push(1);
        py = t.getFullYear();
      } else ly[ly.length - 1]++;
    });
    if (watchedVideos.index.length) {
      pd = (new Date(watchedVideos.entries[watchedVideos.index[0]])).toLocaleString();
      pm = (new Date(watchedVideos.entries[watchedVideos.index[watchedVideos.index.length - 1]])).toLocaleString();
    } else {
      pd = "(n/a)";
      pm = "(n/a)";
    }
    alert(`\
Number of entries: ${watchedVideos.index.length}
Oldest entry: ${pd}
Newest entry: ${pm}
 
Average viewed videos per day: ${avg(ld)}
Average viewed videos per month: ${avg(lm)}
Average viewed videos per year: ${avg(ly)}\
`);
  });
 
  GM_registerMenuCommand("Backup History Data", (a, b) => {
    document.body.appendChild(a = document.createElement("A")).href = URL.createObjectURL(new Blob([JSON.stringify(watchedVideos)], {type: "application/json"}));
    a.download = `MarkWatchedYouTubeVideos_${(new Date()).toISOString()}.json`;
    a.click();
    a.remove();
    URL.revokeObjectURL(a.href);
  });
 
  GM_registerMenuCommand("Restore History Data", (a, b) => {
    function askRestore(o) {
      if (confirm(`Selected history data file contains ${o.index.length} entries.\n\nRestore from this data?`)) {
        if (mwyvrhm_ujs.checked) {
          mergeData(o);
        } else watchedVideos = o;
        GM_setValue("watchedVideos", JSON.stringify(watchedVideos));
        a.remove();
        doProcessPage();
      }
    }
    if (window.mwyvrh_ujs) return;
    (a = document.createElement("DIV")).id = "mwyvrh_ujs";
      a.innerHTML = `<style>
       #mwyvrh_ujs {display:flex;position:fixed;z-index:99999;left:0;top:0;right:0;bottom:0;margin:0;border:none;padding:0;background:rgb(0,0,0,0.5);color:#000;font-family:sans-serif;font-size:12pt;line-height:12pt;font-weight:normal;cursor:pointer}
       #mwyvrhb_ujs {margin:auto;border:.3rem solid #007;border-radius:.3rem;padding:.5rem .5em;background-color:#fff;cursor:auto}
       #mwyvrht_ujs {margin-bottom:1rem;font-size:14pt;line-height:14pt;font-weight:bold}
       #mwyvrhmc_ujs {margin:.5em 0 1em 0;text-align:center}
       #mwyvrhi_ujs {display:block;margin:1rem auto .5rem auto;overflow:hidden}
       </style>
<div id="mwyvrhb_ujs">
  <div id="mwyvrht_ujs">Mark Watched YouTube Videos</div>
  Please select a file to restore history data from.
  <div id="mwyvrhmc_ujs"><label><input id="mwyvrhm_ujs" type="checkbox" checked /> Merge history data instead of replace.</label></div>
  <input id="mwyvrhi_ujs" type="file" multiple />
</div>`;
    a.onclick = e => {
      (e.target === a) && a.remove();
    };
    (b = a.querySelector("#mwyvrhi_ujs")).onchange = r => {
      r = new FileReader();
      r.onload = (o, t) => {
        if (o = parseData(r = r.result)) { //parse as native format
          if (o.index.length) {
            askRestore(o);
          } else alert("File doesn't contain any history entry.");
        } else if (o = parseYouTubeData(r)) { //parse as YouTube format
          if (o.index.length) {
            askRestore(o);
          } else alert("File doesn't contain any history entry.");
        } else { //parse as URL list
          o = {entries: {}, index: []};
          t = (new Date()).getTime();
          r = r.replace(/\r/g, "").split("\n");
          while (r.length && !r[0].trim()) r.shift();
          if (r.length && xu.test(r[0])) {
            r.forEach(s => {
              if (s = s.match(xu)) {
                o.entries[s[1] || s[2]] = t;
                o.index.push(s[1] || s[2]);
              }
            });
            if (o.index.length) {
              askRestore(o);
            } else alert("File doesn't contain any history entry.");
          } else alert("Invalid history data file.");
        }
      };
      r.readAsText(b.files[0]);
    };
    document.documentElement.appendChild(a);
    b.click();
  });
}

function gen_setting_page() {
   let fix_version = '3.1.1';	// as close to header as possible: in hopes to not forget
   if (window.YTEngine2) return; // in-development kill-switch
   if (document.location.pathname == '/error') return;


   // Test storage for saving user-settings
  
   let settings = {}, ls;

   try {
      function lsTest(st, v) {
         st.setItem('__storage_test__', v);
         return st.getItem('__storage_test__') == v;
        
      };
      let _s = window.localStorage;
      if (lsTest(_s, 'qwe') && lsTest(_s, 'rty')) { 
         ls = _s;
         settings = JSON.parse(ls.getItem('__storage__settings__')) || {};
      }
   }
   catch (e) { }
   // delete old settings
   if ("default_player_640" in settings) {
      settings.default_player = settings.default_player_640 ? 3 : 0;
      delete settings.default_player_640;
   }
   if ("reduce_thumbnail" in settings) {
      settings.thumbnail_size = settings.reduce_thumbnail ? 2 : 0;
      delete settings.reduce_thumbnail;
   }
   // set script default values
   if (!("inst_ver" in settings)) settings.inst_ver = fix_version;
   if (!("old_player" in settings)) settings.old_player = true;
   if (!("classic_logo" in settings)) settings.classic_logo = true;
   if (!("search_left" in settings)) settings.search_left = true;
   if (!("thumb_preview" in settings)) settings.thumb_preview = false;
   if (!("profile_picture" in settings)) settings.profile_picture = true;
   if (!("grey_watched" in settings)) settings.grey_watched = true;
   if (!("blur_watched" in settings)) settings.blur_watched = true;
   if (!("hide_filters" in settings)) settings.hide_filters = true;
   if (!("hide_queue" in settings)) settings.hide_queue = false;
   if (!("default_player" in settings)) settings.default_player = 2;
   if (!("hide_guide" in settings)) settings.hide_guide = false;
   if (!("hide_yt_suggested_blocks" in settings)) settings.hide_yt_suggested_blocks = true;
   if (!("logo_target" in settings)) settings.logo_target = "";
   if (!("thumbnail_size" in settings)) settings.thumbnail_size = 193;
   if (!("thumbnail_size_m" in settings)) settings.thumbnail_size_m = 720;
   if (!("search_thumbnail" in settings)) settings.search_thumbnail = 1;
   if (!("clear_search" in settings)) settings.clear_search = true;
   if (!("channel_top" in settings)) settings.channel_top = 0;
   if (!("video_quality" in settings)) settings.video_quality = 0;
   // catch "settings" page
   console.log('fix settings:', settings);
   if (document.location.pathname == '/7kttube-settings') {

      let back = document.createElement('div');
      back.className = 'ytfixback';
      let e1, e2, e3, e4, plane = document.createElement('div');
      plane.className = 'ytfix';
      let style = document.createElement('style');
      style.type = 'text/css';
      style.innerHTML = [
         'ytfix_line2 {background: #575757;color: white;padding: 5px;}.ytfix_line span, .ytfix_line checkbox {text-transform: full-size-kana; border-bottom: 1px dotted;}.ytfix{font-size: 13px;position:absolute;left:0;top:0;right:0;padding:3em;background: #eee url(https://i.ibb.co/jgXjyZn/7kttube.png) no-repeat;background-size:570px;background-repeat-y: no-repeat;background-position-x: 300px;background-position-y: 20px;}', '.ytfix_line{margin-bottom: 9px;text-shadow: 1px 0px 0px #b0b0b0;}', '.ytfix_line span,.ytfix_line input,.ytfix_line select{margin-right:0.3em}', 'form{padding-left: 10px;}', '.ytfix_field{font-size:13px; padding:0.2em;border:1px solid #888}', '.ytfix_button{color: #fff;font-weight: bold;background: #ec2828;padding:0.6em;border:1px solid #fff;margin-bottom: 10px;}', '.ytfix_button:hover {background: #525252;cursor: pointer}', '.ytfix_hide{display:none}', '.ytfixback{position:absolute;left:0;top:0;right:0;height:100%;background:#eee}', '.ytfix donate{padding:0;border:1px solid #888}', 'h2{text-decoration: underline; font-variant: all-petite-caps; font-family: YouTube Noto, Roboto, arial, sans-serif !important; font-size:24px;}', 'h5{font-style: italic}', 'paypal{padding-left: 60px; font-size: 13px; font-weight: bold;}'
      ].join('');
      plane.appendChild(style);
    e4 = document.createElement('br')
         e4 = document.createElement('ytfix_line2')
         e4.appendChild(document.createTextNode('7ktTube Video Downloader & 7ktTube old icons script now available!'));
     AddLine(e4);
         e4 = document.createElement('br')
         e4 = document.createElement('span')
         e2 = document.createElement('input');
         e2.type = 'button';
         e2.className = 'ytfix_button';
         e2.value = 'DOWNLOAD PAGE';
         e2.addEventListener('click', () => location.href = 'https://7kttube.tk/downloads');
         e3 = document.createElement('input');
         AddLine(e2);
      e1 = document.createElement('h2');
      e1.appendChild(document.createTextNode('7ktTube²⁰¹⁶ REDUX settings'));
      AddLine(e1);

      if (!ls) {
         e1 = document.createElement('span');
         e1.style = 'color:red';
         e1.appendChild(document.createTextNode('Cannot edit settings: no access to local storage.'));
         AddLine(e1);
         e1 = document.createElement('span');
         e1.appendChild(document.createTextNode('If you are using Firefox, allow cookies for this site.'));
         AddLine(e1);
      }
     
      else {
         let ess = {};

         function MakeDesc(desc) {
            let e = document.createElement('span');
            e.appendChild(document.createTextNode(desc));
            return e;
         }

         function MakeBoolElement(nm) {
            let e = document.createElement('input');
            e.type = 'checkbox';
            e.checked = settings[nm];
            ess[nm] = e;
            return e;
         }

         function MakeListElement(nm, opts) {
            let e = document.createElement('select');
            e.className = 'ytfix_field';
            ess[nm] = e;
            for (let i = 0, L = opts.length; i < L; ++i) {
               let o = document.createElement('option');
               o.appendChild(document.createTextNode(opts[i]));
               //if (i == val)
               //  o.setAttribute ('selected', '');
               e.appendChild(o);
            }
            e.selectedIndex = settings[nm];
            return e;
         }
var delayInMilliseconds = 0; //1 second

setTimeout(function() {
window.parent.document.title = "𝟳𝗸𝘁𝗧𝘂𝗯𝗲 𝗥𝗘𝗗𝗨𝗫 : sᴇᴛᴛɪɴɢs";
}, delayInMilliseconds);
         function MakeTextElement(nm) {
            let e = document.createElement('input');
            e.className = 'ytfix_field';
            e.value = settings[nm];
            ess[nm] = e;
            return e;
         }
         AddLine(MakeBoolElement("old_player"), MakeDesc("YouTube old player style(smaller buttons and menu)"));
         AddLine(MakeBoolElement("classic_logo"), MakeDesc("YouTube classic logo"));
         AddLine(MakeBoolElement("search_left"), MakeDesc('Align searchbar to the left'));
         AddLine(MakeBoolElement("hide_guide"), MakeDesc('Auto-close side-bar to compact'));
         AddLine(MakeBoolElement("profile_picture"), MakeDesc("Square profile-pictures"));
         AddLine(MakeBoolElement("thumb_preview"), MakeDesc("Disable video previews on :hover"));
         AddLine(MakeBoolElement("hide_queue"), MakeDesc("Hide queue button on thumbnails"));
         AddLine(MakeBoolElement("hide_filters"), MakeDesc('Hide all filter by category bars'));
         AddLine(MakeBoolElement("hide_yt_suggested_blocks"), MakeDesc('Hide suggestion blocks on main page (recommended playlists, latest posts, etc)'));
         AddLine(MakeBoolElement("clear_search"), MakeDesc("Hide suggestion blocks on search page (for you, people also watched, etc)"));
         AddLine(MakeBoolElement("grey_watched"), MakeDesc("Make already watched video thumbnails: Black & white"));
         AddLine(MakeBoolElement("blur_watched"), MakeDesc("Make already watched video thumbnails: Back & white +blurred"));

         let tsm = MakeTextElement("thumbnail_size_m");
         tsm.className = settings.thumbnail_size == 5 ? 'ytfix_field' : 'ytfix_hide';
         let tsi = MakeListElement("thumbnail_size", ['default', '193px', '240px', '360px', '480px', 'manual']);
         tsi.addEventListener('change', function () {
            ess.thumbnail_size_m.className = ess.thumbnail_size.selectedIndex == 5 ? 'ytfix_field' : 'ytfix_hide';
         });
         AddLine(MakeDesc('Set thumbnails width for front page'), tsi, tsm);
         AddLine(MakeDesc('Set thumbnails width for search page'), MakeListElement("search_thumbnail", ['default', '240px', '360px']));
         AddLine(MakeDesc('Set video player size:'), MakeListElement("default_player", ['Flexible', '640x360px', '853x480px', '1280x720px']));
         AddLine(MakeDesc('Force video quality'), MakeListElement('video_quality', ['Auto (default)', '144p', '240p', '360p', '480p', '720p', '1080p (HD)', '1440p (HD)', '2160p (4K)']));
         AddLine(MakeDesc("Modify channels' pages behaviour"), MakeListElement('channel_top', ['default', 'hide banner with scrolling', 'hide banner on load']));
         AddLine(MakeDesc("Change YT logo target to https://www.youtube.com/..."), MakeTextElement("logo_target"));
         e1 = document.createElement('input');
         e1.type = 'button';
         e1.className = 'ytfix_button';
         e1.value = 'Save settings and close tab';
         e1.addEventListener('click', function () {
            settings.old_player = ess.old_player.checked;
            settings.classic_logo = ess.classic_logo.checked;
            settings.search_left = ess.search_left.checked;
            settings.thumb_preview = ess.thumb_preview.checked;
            settings.profile_picture = ess.profile_picture.checked;
            settings.grey_watched = ess.grey_watched.checked;
            settings.blur_watched = ess.blur_watched.checked;
            settings.hide_filters = ess.hide_filters.checked;
            settings.hide_queue = ess.hide_queue.checked;
            settings.hide_guide = ess.hide_guide.checked;
            settings.thumbnail_size = ess.thumbnail_size.selectedIndex;
            if (settings.thumbnail_size == 5) {
               let v = ess.thumbnail_size_m.value;
               if (!/^\d+$/.test(v)) return alert('Error: invalid value for thumbnails size');
               settings.thumbnail_size_m = parseInt(v);
            }
            settings.search_thumbnail = ess.search_thumbnail.selectedIndex;
            settings.default_player = ess.default_player.selectedIndex;
            settings.hide_yt_suggested_blocks = ess.hide_yt_suggested_blocks.checked;
            settings.channel_top = ess.channel_top.selectedIndex;
            settings.logo_target = ess.logo_target.value;
            settings.clear_search = ess.clear_search.checked;
            settings.video_quality = ess.video_quality.selectedIndex;
            ls.setItem('__storage__settings__', JSON.stringify(settings));
            alert('Settings saved');
            window.close();
         });
         e2 = document.createElement('input');
         e2.type = 'button';
         e2.className = 'ytfix_button';
         e2.value = 'Close tab & Return to YouTube without saving';
         e2.addEventListener('click', () => window.close());
         e3 = document.createElement('input');
         e3.type = 'button';
         e3.className = 'ytfix_button';
         e3.value = 'DONATE PayPal';
         e3.addEventListener('click', () => location.href = 'https://www.paypal.com/donate?hosted_button_id=2EJR4DLTR4Y7Q');
         AddLine(e1, e2);
         e4 = document.createElement('b');
         e4.appendChild(document.createElement("br"));
         e4.appendChild(document.createTextNode('Do you like this script?'));
         AddLine(e4);
         e4 = document.createElement('h5');
         e4.appendChild(document.createTextNode('Please donate to support this project & the developer!'));

         AddLine(e4);
         e4 = document.createElement('paypal');
         e4.appendChild(document.createTextNode('PayPal'));
         AddLine(e4);
         e4.innerHTML += "<form action='https://www.paypal.com/donate' method='post' target='_top'><input type='hidden' name='hosted_button_id' value='2EJR4DLTR4Y7Q' /><input type='image' src='https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif' border='0' name='submit' title='PayPal - The safer, easier way to pay online!' alt='Donate with PayPal button' /><img alt='' border='0' src='https://www.paypal.com/en_US/i/scr/pixel.gif' width='1' height='1' /></form>";
      }

      let int = setInterval(function () {
         if (!document.body) return;
         clearInterval(int);
         document.body.appendChild(back);
         document.body.appendChild(plane);
      }, 1);

      function AddLine() {
         let q = document.createElement('div');
         q.className = 'ytfix_line';
         for (let i = 0, L = arguments.length; i < L; ++i) q.appendChild(arguments[i]);
         plane.appendChild(q);
         return q;
      }
   }
   // apply settings
  let styles = [], intervals = [];

   function addInterval(period, func, params) {
      if (!period) period = 1;

      intervals.push({
         cnt: period,
         period: period,
         call: func,
         params: params || []
      });
   }
   if (settings.hide_guide)
      addInterval(1, function (info) {
         if (info.act == 0) { // observe location change
            let url = document.location.toString();
            if (url != info.url) info.act = 1;
         }
         if (info.act == 1) { // wait for sorp page load completion
            let Q = document.querySelector('yt-page-navigation-progress');
            if (!Q) return;
            if (Q.hasAttribute('hidden')) info.act = 2;
         }
         if (info.act == 2) { // wait for button and press it if necessary
            let guide_button = document.getElementById('guide-button');
            if (!guide_button) return;

            let tmp = guide_button.querySelector('button');
            if (!tmp || !tmp.hasAttribute('aria-pressed')) return;

            if (tmp.attributes['aria-pressed'].value == 'true') guide_button.click();
            else {
               info.url = document.location.toString();
               info.act = 0;
            }
         }
      }, [{ act: 2 }]);
   // old engine:
   //if (document.getElementById ('appbar-guide-button'))
   //  document.documentElement.classList.remove ('show-guide');
    /*player*/

     if (settings.old_player) {
      styles.push(`
      .ytp-volume-slider {
          height: 100%;
          min-height: 40px;
          margin-top: -3px;
          }
      .ytp-larger-tap-buttons .ytp-chrome-controls .ytp-button.ytp-mute-button {
          padding: 2px!important
      }
      .ytp-chrome-bottom {
          height:36px!important
      }
      .ytp-big-mode .ytp-chrome-bottom {
          height:48px!important
      }
      .ytp-progress-bar-container, .ytp-exp-bigger-button-like-mobile.ytp-small-mode .ytp-progress-bar-container {
          bottom:35px!important
      }
      .ytp-big-mode .ytp-progress-bar-container {
          bottom:44px!important
      }
      .ytp-button[data-tooltip-target-id="ytp-autonav-toggle-button"], .ytp-miniplayer-button {
          display:none!important
      }
      .ytp-chrome-controls {
      height:40px!important
      }
      
      .ytp-chrome-controls .ytp-button {
          height:36px!important
      }
      .ytp-big-mode .ytp-chrome-controls .ytp-button {
          height:54px!important
      }
      .ytp-time-display, .ytp-exp-bigger-button-like-mobile.ytp-small-mode .ytp-time-display {
      line-height:36px!important
      }
      .ytp-big-mode .ytp-time-display {
          line-height:54px!important
      }
          /*volume*/
      .ytp-volume-slider-handle {
          width: 4px!important;
          height: 13px!important;
          background: #fff;
          border-radius:0!important;
          margin-top:-5px!important
      }
      .ytp-big-mode .ytp-volume-slider-handle {
          width:6px!important;
          height:20px!important;
          margin-top:-10px!important
      }
      .ytp-volume-slider-handle::before {
          background:#f12b24!important
      }
      .ytp-volume-slider-handle::before, .ytp-volume-slider-handle::after {
          width:58px!important
      }
      .ytp-big-mode .ytp-volume-slider-handle::before, .ytp-big-mode .ytp-volume-slider-handle::after {
          height:5px!important
      }
      .ytp-big-mode .ytp-volume-slider-handle::before {
          width:86px!important
      }
      .ytp-volume-slider-active .ytp-volume-panel {
          width:44px!important
      }
      .ytp-big-mode .ytp-volume-slider-active .ytp-volume-panel {
          width:66px!important
      }
      /*settings*/
      .ytp-popup {
          background: rgba(28,28,28,0.8)!important;
          text-shadow: 0 0 2px rgb(0 0 0 / 50%)!important;
          border-radius: 0!important
      }
      .ytp-settings-menu {
          bottom:40px!important
      }
      .ytp-big-mode .ytp-settings-menu {
          bottom:50px!important
      }
      .ytp-panel-menu {
          padding:0!important;
          font-weight:normal!important
      }
      .ytp-settings-menu, .ytp-panel-menu {
          color:#bbb!important
      }
      .ytp-menuitem-icon {
          display:none
      }
      .ytp-panel-header {
          padding:0!important
      }
      .ytp-menuitem-label {
          padding:0 10px!Important;
          font-size:100%!important
      }
      .ytp-menuitem, .ytp-panel-header {
          height:27px!important
      }
      .ytp-big-mode .ytp-menuitem, .ytp-big-mode .ytp-panel-header {
          height:37px!important
      }
      .ytp-menuitem[aria-haspopup=true] .ytp-menuitem-content {
          padding-left:0!important
      }
      .ytp-menuitem[role=menuitemradio] .ytp-menuitem-label {
          padding-left:35px!important
      }
      .ytp-big-mode .ytp-menuitem[role=menuitemradio] .ytp-menuitem-label {
          padding-left:45px!important
      }
      .ytp-panel {
          min-width:100px!important
      }
      .ytp-big-mode .ytp-panel {
          min-width:115px!important
      }
          /*slider handle*/
      .ytp-slider-handle {
          border-radius:0!important;
          width:6px!important
      }
      .ytp-slider-handle:before {
          width:150px!important
      }
      .ytp-slider-handle:before {
          left:-150px!important;
          background-color:#f12b24!important
      }
      .ytp-slider-handle:after {
          left:0!important
      }
      .ytp-chapter-container {
          float: right!important;
          padding: 2px 5px 0 0;
          line-height:40px!important
      }`);
     (function() {
    'use strict';

    function fixPlayer () {
document.querySelector(".ytp-exp-bigger-button-like-mobile").setAttribute("class","html5-video-player ytp-transparent ytp-hide-info-bar")
}


function waitForElementToDisplay(selector, callback, checkFrequencyInMs, timeoutInMs) {
  var startTimeInMs = Date.now();
  (function loopSearch() {
    if (document.querySelector(selector) != null) {
      callback();
      return;
    }
    else {
      setTimeout(function () {
        if (timeoutInMs && Date.now() - startTimeInMs > timeoutInMs)
          return;
        loopSearch();
      }, checkFrequencyInMs);
    }
  })();
}

waitForElementToDisplay(`.ytp-exp-bigger-button-like-mobile`,function(){fixPlayer();},1000,20000);
})();
   }
   if (settings.thumb_preview) {
      styles.push(`
      #avatar-link.ytd-rich-grid-media, #avatar-link.ytd-rich-grid-video-renderer, #avatar.ytd-c4-tabbed-header-renderer, #masthead-ad, #offer-module, #play.fade-in.ytd-moving-thumbnail-renderer, #play.show.ytd-moving-thumbnail-renderer, #selectionBar.paper-tabs, #thumbnail.ytd-moving-thumbnail-renderer, .not-visible.paper-tabs, .ytp-miniplayer-button, [id*=skeleton], paper-ripple, ytd-compact-movie-renderer.ytd-watch-next-secondary-results-renderer, ytd-compact-promoted-item-renderer, ytd-search ytd-video-renderer[use-prominent-thumbs] #channel-info.ytd-video-renderer>a>yt-img-shadow.ytd-video-renderer {
         display: none!important
      }

      #details.ytd-rich-grid-video-renderer {
         cursor: auto!important;
         pointer-events: none!important
      }

      #details.ytd-rich-grid-video-renderer *>a, #details.ytd-rich-grid-video-renderer *>button.yt-icon-button {
         cursor: pointer!important;
         pointer-events: initial!important
      }`);
   }
   if (settings.classic_logo) {
      styles.push(`
      ytd-masthead #logo-icon-container, #contentContainer #logo-icon-container, ytd-topbar-logo-renderer>#logo {
         content:var(--logo-light-header) !important;
         width: 71px !important;
         height: 30px !important;
         padding:0px 15px 0px!important;
      }

      ytd-masthead[dark] #logo-icon-container, html[dark] #contentContainer #logo-icon-container, ytd-masthead[dark] ytd-topbar-logo-renderer>#logo, html[dark] ytd-topbar-logo-renderer>#logo {
         content:var(--logo-dark-header) !important;
         width: 71px !important;
         height: 30px !important;
      }

      #start>#masthead-logo, #masthead>#masthead-logo {
         content:var(--logo-dark-header) !important;
         width: 71px !important;
         height: 30px !important;
      }

      html[dark] #start>#masthead-logo, html[dark] #masthead>#masthead-logo {
         content:var(--logo-dark-header) !important;
         width: 71px !important;
         height: 30px !important;
      }

      html:not([dark]) ytd-guide-entry-renderer[active]>#endpoint.yt-simple-endpoint.ytd-guide-entry-renderer, html:not([dark]) ytd-guide-entry-renderer[active]>#endpoint.yt-simple-endpoint.ytd-guide-entry-renderer:hover {
         background-color: #cc181e !important
      }

      #country-code.ytd-topbar-logo-renderer {
         padding: 0px!important;
         margin: 0px -10px 0px !important;   
      }
      
      html:not([dark]) #guide-section-title.ytd-guide-section-renderer {
         color: #cc181e!important;
      }   
      ytd-mini-guide-entry-renderer[is-active] .guide-icon.ytd-mini-guide-entry-renderer {
      color: #cc181e!important;
      } 
      html:not([dark]) ytd-guide-collapsible-section-entry-renderer.ytd-guide-section-renderer:not(:first-child):before {
      color: #cc181e!important; 
      }`);
   }
   if (settings.profile_picture) {
      styles.push(`
      #thumbnail.ytd-profile-column-user-info-renderer,
      yt-img-shadow.ytd-channel-renderer,
      #avatar.ytd-active-account-header-renderer,
      #avatar.ytd-video-owner-renderer,
      #avatar.ytd-c4-tabbed-header-renderer,
      yt-img-shadow.ytd-channel-avatar-editor,
      yt-img-shadow.ytd-guide-entry-renderer,
      #author-thumbnail.ytd-commentbox,
      #author-thumbnail.ytd-comment-renderer yt-img-shadow.ytd-comment-renderer,
      #author-thumbnail.ytd-comment-simplebox-renderer,
      #avatar.ytd-video-owner-renderer, .ytd-comment-action-buttons-renderer:nth-of-type(2),
      #hearted-thumbnail.ytd-creator-heart-renderer,
      .thumbnail.ytd-notification-renderer,
      ytd-commentbox[is-reply][is-backstage-comment] #author-thumbnail.ytd-commentbox, #author-thumbnail.ytd-backstage-post-renderer yt-img-shadow.ytd-backstage-post-renderer {
         border-radius: 0%!important;
      }`);
   }
   if (settings.hide_filters) {
      styles.push(`
      #header.ytd-rich-grid-renderer {
         display: none!important
      }

      yt-related-chip-cloud-renderer {
         display: none!important
      }`);
   }
   if (settings.hide_queue) {
      styles.push(`
      .ytd-thumbnail[top-right-overlay] ~ .ytd-thumbnail[top-right-overlay] {
         display:none;
      } `);
   }
     if (settings.search_left) {
      styles.push(`
      #center.ytd-masthead {
         margin-right: auto;    

      } `);
   }
   if (settings.blur_watched) {
      styles.push(`
      .watched yt-img-shadow.ytd-thumbnail {
         transition: ease-in;
         transition-duration: 0.2s;
         filter: blur(2.2px) grayscale(1)!important;
         }
         .watched yt-img-shadow.ytd-thumbnail:hover {
         transition: ease-out;
         transition-duration: 0.7s;
         filter: blur(0px) grayscale(0)!important;
      }`);
   }
   if (settings.grey_watched) {
      styles.push(`
      .watched ytd-thumbnail #thumbnail.ytd-thumbnail yt-img-shadow.ytd-thumbnail {
         transition: ease-in;
         transition-duration: 0.2s;
         opacity: 0.4 !important;
         filter: grayscale(1);
      }

      .watched ytd-thumbnail #thumbnail.ytd-thumbnail yt-img-shadow.ytd-thumbnail:hover {
         transition: ease-out;
         transition-duration: 0.7s;
         opacity: 1.0 !important;
         filter: grayscale(0);
      }`);
   }
   if (settings.thumbnail_size)
      styles.push(`div#contents.style-scope.ytd-rich-grid-renderer {display:block!important}
          ytd-rich-grid-row.style-scope.ytd-rich-grid-renderer {display:inline!important}
          ytd-rich-grid-row.style-scope.ytd-rich-grid-renderer > div {display:inline!important;margin:0!important}
          ytd-rich-grid-row.style-scope.ytd-rich-grid-renderer > div > ytd-rich-item-renderer {display:inline-block!important;width:${[0, 193, 240, 360, 480, settings.thumbnail_size_m] [settings.thumbnail_size]}px!important;contain:none!important}
       }`);
   if (settings.hide_yt_suggested_blocks)
      styles.push(`div#contents.ytd-rich-grid-renderer ytd-rich-section-renderer {
         display: none!important;  
         }         
         ytd-thumbnail-overlay-endorsement-renderer {
         display: hidden !important;
      }`);

   if (settings.search_thumbnail) {
      let sz = [1, 240, 360][settings.search_thumbnail] + 'px !important';
      // min-width defaults to 240px, max-width defaults to 360px
      // sizes for: videos, playlists, channels, mixes
      styles.push(`ytd-video-renderer[use-prominent-thumbs] ytd-thumbnail.ytd-video-renderer, ytd-playlist-renderer[use-prominent-thumbs] ytd-playlist-thumbnail.ytd-playlist-renderer, ytd-channel-renderer[use-prominent-thumbs] #avatar-section.ytd-channel-renderer, ytd-radio-renderer[use-prominent-thumbs] ytd-thumbnail.ytd-radio-renderer {
         min-width: ${sz}!important;
         max-width: ${sz}important!;
      }`);
   }
   if (settings.clear_search) {
      styles.push(`
      ytd-two-column-search-results-renderer ytd-shelf-renderer.style-scope.ytd-item-section-renderer, ytd-two-column-search-results-renderer ytd-horizontal-card-list-renderer.style-scope.ytd-item-section-renderer {
         display: none!important
      }`);
   }

   const sizes = [undefined, { w: 640, h: 360 }, { w: 854, h: 480 }, { w: 1280, h: 720 }];
   let size_norm = sizes[settings.default_player];
   if (size_norm) {
      styles.push(`
      #primary.ytd-watch-flexy, #player-container-outer {
         --ytd-watch-flexy-min-player-width: ${size_norm.h}px !important;
         min-width: --ytd-watch-flexy-min-player-width: 100% !important;
         max-width: ${size_norm.w}px !important
      }

      ytd-watch-flexy[flexy_][is-two-columns_][is-extra-wide-video_] #primary.ytd-watch-flexy, ytd-watch-flexy[flexy_][is-two-columns_][is-four-three-to-sixteen-nine-video_] #primary.ytd-watch-flexy {
         min-width: ${size_norm.w}px!important
      }

      ytd-watch-flexy[flexy_][flexy-large-window_]:not([is-extra-wide-video_]), ytd-watch-flexy[flexy_][flexy-large-window_][transcript-opened_][is-two-columns_]:not([is-extra-wide-video_]), ytd-watch-flexy[flexy_][flexy-large-window_][playlist][is-two-columns_]:not([is-extra-wide-video_]), ytd-watch-flexy[flexy_][flexy-large-window_][should-stamp-chat][is-two-columns_]:not([is-extra-wide-video_]) {
         --ytd-watch-flexy-min-player-height: ${size_norm.h}px !important;`);

      addInterval(1, function (sn, st) {
         let eq = document.getElementsByTagName("ytd-watch-flexy");
         if (!eq.length) return;
         let s = eq[0].hasAttribute('size_norm') ? st : sn;
         if (!s) return;
         let ep = document.getElementById("movie_player");
         if (ep && ep.setInternalSize && ep.isFullscreen && ep.getPlayerSize && !ep.isFullscreen() && ep.getPlayerSize()
            .width != s[0])
            ep.setInternalSize(s[0], s[1]);
      }, [size_norm]);
   }
   if (settings.logo_target) {
      let X = settings.logo_target;
      if (X[0] != '/') X = '/' + X;
      X = document.location.origin + X;
      addInterval(1, function (url) {
         let l = document.querySelectorAll('a#logo');
         for (let i = l.length; --i >= 0;) {
            let Q = l[i];
            let D = Q.data;
            if (D && D.commandMetadata && Q.href != url) {
               Q.href = url;
               D.commandMetadata.webCommandMetadata.url = url;
            }
         }
      }, [X]);
   }
   if (settings.channel_top)
      styles.push('app-header#header.style-scope.ytd-c4-tabbed-header-renderer{transform:none!important;position:absolute;left:0px!important;top:0px;margin-top:0px}');
   if (settings.channel_top > 1) {
      styles.push('div#contentContainer.style-scope.app-header-layout{padding-top:148px!important}');
      styles.push('div#contentContainer.style-scope.app-header{height:148px!important}');
      styles.push('div.banner-visible-area.style-scope.ytd-c4-tabbed-header-renderer{display:none!important}');
   }
   if (settings.video_quality) {
      const qv = ['', 'tiny', 'small', 'medium', 'large', 'hd720', 'hd1080', 'hd1440', 'hd2160'];
      function IsQualityAvailable(qq, q) {
         for (let i = qq.length; --i >= 0;) if (q == qq[i]) return true;
         return false;
      }
      function UpdateVideoQuality(st) {
         let ep = document.getElementById("movie_player");
         if (!ep || !ep.getPreferredQuality || !ep.getAvailableQualityLevels || !ep.setPlaybackQualityRange || !ep.getVideoData || ep.getPreferredQuality() != 'auto') return;
         let vid = ep.getVideoData().video_id;
         if (st.fail == vid) return;	// last time on this video we've issues

         let qq = ep.getAvailableQualityLevels();
         if (!qq || !qq.length) return;
         let det = settings.video_quality;
         while (det < qv.length && !IsQualityAvailable(qq, qv[det])) ++det;
         if (det == qv.length) {
            console.log('Unknown video qualities in list: ', qq);
            st.fail = vid;
            return;
         }
         ep.setPlaybackQualityRange(qv[det], qv[det]);
      };
      addInterval(1, UpdateVideoQuality, [{}]);
   }
  
   // "settings" button
  
     let settingsButtonMark;

     function createSettingsButton() {
      if (settingsButtonMark && settingsButtonMark.parentNode) return;
      let toolBar = document.getElementsByTagName('ytd-topbar-menu-button-renderer');
      let _1st = toolBar[0];
      if (!_1st) return;
      toolBar = _1st.parentNode;
      let sb = document.createElement('ytd-topbar-menu-button-renderer');
      sb.className = 'style-scope ytd-masthead style-default';
      sb.setAttribute('use-keyboard-focused', '');
      sb.setAttribute('is-icon-button', '');
      sb.setAttribute('has-no-text', '');
      toolBar.insertBefore(sb, toolBar.childNodes[0]);
      let mark = document.createElement('fix-settings-mark');
      mark.style = 'display:none';
      toolBar.insertBefore(mark, sb); // must be added to parent node of buttons in order to Polymer dropped it on soft reload
      let icb = document.createElement('yt-icon-button');
      icb.id = 'button';
      icb.className = 'style-scope ytd-topbar-menu-button-renderer style-default';
      let aa = document.createElement('a');
      aa.className = 'yt-simple-endpoint style-scope ytd-topbar-menu-button-renderer';
      aa.setAttribute('tabindex', '-1');
      aa.href = '/7kttube-settings';
      aa.target = '_blank';
      aa.appendChild(icb);
      sb.getElementsByTagName('div')[0].appendChild(aa); // created by YT scripts
      let bb = icb.getElementsByTagName('button')[0]; // created by YT scripts
      bb.setAttribute('aria-label', 'fixes settings');
      let ic = document.createElement('yt-icon');
      ic.className = 'style-scope ytd-topbar-menu-button-renderer';
      bb.appendChild(ic);
      let gpath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      gpath.className.baseVal = 'style-scope yt-icon';
      gpath.setAttribute('d', 'M1 20l6-6h2l11-11v-1l2-1 1 1-1 2h-1l-11 11v2l-6 6h-1l-2-2zM13 15l2-2 8 8v1l-1 1h-1zM9 11l2-2-2-2 1.5-3-3-3h-2l3 3-1.5 3-3 1.5-3-3v2l3 3 3-1.5z');
      let svgg = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      svgg.className.baseVal = 'style-scope yt-icon';
      svgg.appendChild(gpath);
      let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.className.baseVal = 'style-scope yt-icon';
      svg.setAttributeNS(null, 'viewBox', '0 0 24 24');
      svg.setAttributeNS(null, 'preserveAspectRatio', 'xMidYMid meet');
      svg.setAttribute('focusable', 'false');
      svg.setAttribute('style', 'pointer-events: none; display: block; width: 100%; height: 100%;');
      svg.appendChild(svgg);
      ic.appendChild(svg); // YT clears *ic
      settingsButtonMark = mark;
   }
   addInterval(1, createSettingsButton, []);

   GM_addStyle(styles.join(''));
   // intervals
   setInterval(function () {
      for (let i = intervals.length; --i >= 0;) {
         let Q = intervals[i];
         if (--Q.cnt > 0) continue;
         Q.call.apply(this, Q.params);
         Q.cnt = Q.period;
      }
   }, 1000);
   console.log('Fixed loaded');
}

function patch_css() {
   // patch css
   GM_addStyle(`
   f:root {
      --dgyt-bg-color-dark: rgb(15, 15, 15);
      --dgyt-bg-color-medium: rgb(33, 33, 33);
      --dgyt-cell-bg-color: rgba(0, 0, 0, 0.2);
      --dgyt-menu-bg-color: rgba(21, 21, 21, 0.8);
      --dgyt-button-color: rgba(255, 255, 255, 0.1);
      --dgyt-button-color-hover: rgba(255, 255, 255, 0.22);
      --dgyt-border-color: rgba(0, 0, 0, 0.2);
      --dgyt-text-main: rgb(192, 192, 192);
      --dgyt-text-secondary: rgb(142, 142, 142);
      --dgyt-text-highlight: rgb(255, 255, 255);
      --dgyt-color-red: rgb(204, 24, 30);
      --dgyt-color-blue: rgb(22, 122, 198);
      --dgyt-color-yellow: rgb(245, 213, 98);
      --dgyt-color-orange: rgb(255, 85, 0);
      --dgyt-color-purple: rgb(156, 39, 176);
      --dgyt-color-green: rgb(76, 175, 80);
   }

   :root {
      --yt-link-letter-spacing: 0!important;
      --ytd-user-comment_-_letter-spacing: 0!important;
   }

   tp-yt-paper-tabs.ytd-c4-tabbed-header-renderer {
      letter-spacing: 0
   }

   html:not(.style-scope)[typography-spacing] {
      --yt-subheadline-letter-spacing: 0;
      --yt-subheadline-link-letter-spacing: 0;
      --yt-link-letter-spacing: .25px;
      --yt-thumbnail-attribution-letter-spacing: 0;
      --yt-user-comment-letter-spacing: 0;
      --yt-guide-highlight-letter-spacing: 0;
      --yt-caption-letter-spacing: 0;
      --yt-badge-letter-spacing: 0;
      --yt-tab-system-letter-spacing: 0;
     
   }
   .html5-video-player {
      background-color: #000!important; 
   }
   
   #avatar-link.ytd-rich-grid-media {
      height: 0px!important;
      margin-top: 0px!important;
      margin-right: 0px!important;
      visibility: hidden!important;
      position: fixed!important;
   }
   yt-live-chat-message-input-renderer {
      margin-bottom: -1px;
   }

   #chat.ytd-watch-flexy {
      margin-bottom: var(--ytd-margin-3x)!important;
      margin-left: -14px;
      margin-right: 14px;
   }

   #chat-container.ytd-watch-flexy:not([chat-collapsed]) {
      width: var(--ytd-watch-flexy-chat-max-width);
      margin-left: -14px;
      margin-right: 14px;
      margin-bottom: 10px;
   }

   ytd-watch-flexy[flexy] #chat.ytd-watch-flexy:not([collapsed]).ytd-watch-flexy, ytd-watch-flexy[flexy] #chat-container.ytd-watch-flexy:not([chat-collapsed]).ytd-watch-flexy {
      min-height: 591px !important;
   }

   ytd-watch-flexy[flexy][theater] #columns.ytd-watch-flexy {
      min-width: 100%!important
   }

   ytd-watch-flexy[is-two-columns_][theater] #columns.ytd-watch-flexy {
      min-width: 100%;
   }

   ytd-watch-flexy[flexy][is-two-columns_][theater] #primary.ytd-watch-flexy, ytd-watch-flexy[flexy][is-two-columns_] #primary.ytd-watch-flexy {
      justify-content: flex-start;
      max-width: var(--ytd-watch-flexy-max-player-width);
      min-width: 80%;
   }

   ytd-watch-flexy[flexy][is-two-columns_][theater][is-four-three-to-sixteen-nine-video_] #primary.ytd-watch-flexy {
      justify-content: flex-start;
      min-width: 70%;
   }

   yt-icon.style-scope.ytd-badge-supported-renderer, ytd-author-comment-badge-renderer:not([m]) #icon.ytd-author-comment-badge-renderer {
      color: transparent;
      fill: transparent!important;
      background: no-repeat url(//s.ytimg.com/yts/imgbin/www-hitchhiker-2x-vflbdpYum.webp) -146px -556px;
      height: 9px;
      margin-bottom: 0px;
   }

   yt-icon.style-scope.ytd-badge-supported-renderer:hover, ytd-author-comment-badge-renderer #icon.ytd-author-comment-badge-renderer:hover {
      background: no-repeat url(//s.ytimg.com/yts/imgbin/www-hitchhiker-2x-vflbdpYum.webp) -732px -646px
   }

   #contents.ytd-rich-metadata-row-renderer *.ytd-rich-metadata-row-renderer {
      
      visibility: hidden!important;
      height: 0px
   }

   a {
      color: #167ac6
   }

   a:visited {
      color: #167ac6
   }

   ytd-banner-promo-renderer.banner-promo-style-type-masthead-v2 .ytd-banner-promo-renderer-background.ytd-banner-promo-renderer {
      visibility: hidden;
      height: 0px!important
   }

   ytd-action-companion-ad-renderer {
      display: none!important
   }

   #expander.ytd-comment-renderer>paper-button.ytd-expander {
      text-align: left;
   }

   .title.style-scope.ytd-video-primary-info-renderer yt-formatted-string.ytd-video-primary-info-renderer {
      font-size: 20px;
   }

   ytd-toggle-button-renderer {
      font-weight: normal !important;
   }

   #like-bar.ytd-sentiment-bar-renderer {
      background: #167ac6 !important;
   }

   author-text.yt-simple-endpoint.ytd-comment-renderer {
      border-radius: 0px!important
   }

   ytd-author-comment-badge-renderer {
      border-radius: 0px!important;
   }

   html:not([dark]) ytd-author-comment-badge-renderer {
      --ytd-author-comment-badge-name-color: #187ac6 ;
      color: #187ac6 ;
   }

   html:not([dark]) #name.ytd-author-comment-badge-renderer {
      color: #187ac6;
   }
   ytd-author-comment-badge-renderer {
      --ytd-author-comment-badge-name-color: #fff;
      color: #fff;
   }

    #name.ytd-author-comment-badge-renderer {
      color: #fff;
   }

   html:not([dark]) .more-button.ytd-comment-replies-renderer, html:not([dark]) .less-button.ytd-comment-replies-renderer {
      color: #2793e6 !important;
   }

   ytd-watch-flexy:not([theater]):not([fullscreen]) #primary.ytd-watch-flexy, ytd-watch-flexy:not([theater]):not([fullscreen]) #secondary.ytd-watch-flexy {
      padding-top: 12px !important;
   }

   ytd-expander.ytd-video-secondary-info-renderer {
      font-size: 13px !important;
      --ytd-expander-collapsed-height: 66px!important;
   }

   html:not([dark]) #vote-count-middle.ytd-comment-action-buttons-renderer {
      color: #128ee9 !important;
   }

   html[dark] #vote-count-middle.ytd-comment-action-buttons-renderer {
      color: #3ea6ff !important;
   }

   .content.ytd-metadata-row-header-renderer {
      display: none !important;
   }

   ytd-metadata-row-renderer {
      margin: 0 !important;
   }

   #title.ytd-metadata-row-renderer {
      font-size: 11px !important;
      margin: 0 !important;
   }

   .content.ytd-metadata-row-renderer {
      font-size: 11px !important;
      font-weight: normal !important;
   }

   #primary-inner.ytd-watch-flexy #title.ytd-rich-metadata-renderer, #primary-inner.ytd-watch-flexy #subtitle.ytd-rich-metadata-renderer, #primary-inner.ytd-watch-flexy #call-to-action.ytd-rich-metadata-renderer {
      font-size: 11px !important;
      line-height: 13px !important;
      margin-top: 0px !important;
   }

   #primary-inner.ytd-watch-flexy #call-to-action.ytd-rich-metadata-renderer {
      align-items: normal !important;
   }

   #primary-inner.ytd-watch-flexy #call-to-action.ytd-rich-metadata-renderer yt-icon {
      display: none;
   }

   #primary-inner.ytd-watch-flexy ytd-thumbnail.ytd-rich-metadata-renderer {
      max-width: 40px !important;
      max-height: 56px !important;
      margin: 0px 10px 0 0 !important;
   }

   #primary-inner.ytd-watch-flexy ytd-rich-metadata-renderer {
      max-width: min-content !important;
      min-width: max-content !important;
   }

   #always-shown ytd-rich-metadata-renderer {
      background: none;
   }

   ytd-watch-flexy[is-two-columns_][fullscreen] #columns.ytd-watch-flexy {
      min-width: 100%
   }

   ytd-watch-flexy[flexy][is-two-columns_][fullscreen] #primary.ytd-watch-flexy, ytd-watch-flexy[flexy][is-two-columns_] #primary.ytd-watch-flexy {
      justify-content: flex-start;
      max-width: var(--ytd-watch-flexy-max-player-width);
      min-width: 80%;
   }

   ytd-watch-flexy[flexy][is-two-columns_][fullscreen][is-four-three-to-sixteen-nine-video_] #primary.ytd-watch-flexy {
      justify-content: flex-start;
      min-width: 70%;
   }

   ytd-watch-flexy[flexy][fullscreen] #columns.ytd-watch-flexy {
      min-width: 100%!important
   }
 div#contents.style-scope.ytd-rich-grid-renderer {display:block!important}
			ytd-rich-grid-row.style-scope.ytd-rich-grid-renderer {display:inline!important}
			ytd-rich-grid-row.style-scope.ytd-rich-grid-renderer > div {display:inline!important;margin: 0!important}
			ytd-rich-grid-row.style-scope.ytd-rich-grid-renderer > div > ytd-rich-item-renderer{display:inline-block!important;width:193px
      }
   html {
      font-family: 'YouTube Noto', Roboto, arial, sans-serif!important
   }

`);
}

// init functions
//gen_setting_page();
patch_css();
//gen_history();
//gen_aspect_fix();

//delayed init functions

  var delayInMilliseconds = 2000; //1 second
setTimeout(function() {
restore_appbar_links();
}, delayInMilliseconds);
