import { LANG_STORAGE_KEY, LOCALES } from "./config";

/**
 * One-time automatic language switch (ROADMAP 37, your choice: "switch automatically once").
 *
 * Runs as the first thing in <body>, before anything is painted, when the <head> with its
 * `hreflang` links is already parsed. On a visitor's very first visit:
 *   1. pick the first browser language Invoicor speaks (navigator.languages; no/nn → nb),
 *   2. remember it (localStorage), so this never runs again and the switcher always wins,
 *   3. if the page exists in that language (an hreflang link), go there with location.replace,
 *      on the current host (hreflang URLs are absolute production URLs; staging must stay staging).
 *
 * Never for search engines, previews or test browsers (navigator.webdriver, bot user agents):
 * Google crawls every language version as it is, which is what keeps this safe for SEO.
 * Location isn't used: the browser language is the better signal (expats, Belgium, Switzerland).
 */
export const AUTO_LANGUAGE_SCRIPT = `(function(){try{
var K=${JSON.stringify(LANG_STORAGE_KEY)},S=${JSON.stringify(LOCALES)},s=window.localStorage;
if(s.getItem(K))return;
var u=navigator.userAgent||"";
if(navigator.webdriver||/bot|crawl|spider|slurp|preview|facebookexternalhit|lighthouse|headless|pagespeed|inspect/i.test(u))return;
var cur=document.documentElement.lang||"en",l=navigator.languages||[navigator.language||""],p=null;
for(var i=0;i<l.length&&!p;i++){var c=String(l[i]).toLowerCase().split("-")[0];if(c==="no"||c==="nn")c="nb";if(S.indexOf(c)>-1)p=c;}
s.setItem(K,p||cur);
if(!p||p===cur)return;
var a=document.querySelector('link[rel="alternate"][hreflang="'+p+'"]');
if(a&&a.href){var to=new URL(a.href).pathname;if(to===location.pathname)return;try{sessionStorage.setItem(K+"-auto",cur+">"+p)}catch(e){}location.replace(to+location.search+location.hash);}
}catch(e){}})();`;
