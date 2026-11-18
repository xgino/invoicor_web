import { LANG_STORAGE_KEY, LOCALES } from "./config";

/**
 * Language memory (ROADMAP 37). Runs as the first thing in <body>, before anything is painted, when
 * the <head> with its `hreflang` links is already parsed.
 *   1. First visit: pick the first browser language Invoicor speaks (navigator.languages; no/nn →
 *      nb) and remember it (localStorage). That's the only time the browser language is used.
 *   2. Every page load: if the remembered language isn't this page's language and the page exists
 *      in it (an hreflang link), go there with location.replace, on the current host (hreflang URLs
 *      are absolute production URLs; staging must stay staging). Choosing a language in the switcher
 *      changes what's remembered, so the visitor is always in charge.
 *   3. Exception: arriving from another site (a Google result, a link) on a translated page keeps
 *      that page. Someone who clicks a German result gets German, whatever they chose before.
 * Client-side navigation (Next.js links) doesn't reload the page: <LanguageMemory> does step 2 there.
 *
 * Never for search engines, previews or test browsers (navigator.webdriver, bot user agents):
 * Google crawls every language version as it is, which is what keeps this safe for SEO.
 * Location isn't used: the browser language is the better signal (expats, Belgium, Switzerland).
 */
export const AUTO_LANGUAGE_SCRIPT = `(function(){try{
var K=${JSON.stringify(LANG_STORAGE_KEY)},S=${JSON.stringify(LOCALES)},s=window.localStorage;
var u=navigator.userAgent||"";
if(navigator.webdriver||/bot|crawl|spider|slurp|preview|facebookexternalhit|lighthouse|headless|pagespeed|inspect/i.test(u))return;
var cur=document.documentElement.lang||"en",p=s.getItem(K),first=false;
if(S.indexOf(p)<0){first=true;p=null;var l=navigator.languages||[navigator.language||""];
for(var i=0;i<l.length&&!p;i++){var c=String(l[i]).toLowerCase().split("-")[0];if(c==="no"||c==="nn")c="nb";if(S.indexOf(c)>-1)p=c;}
s.setItem(K,p||cur);}
if(!p||p===cur)return;
if(!first&&cur!=="en"&&document.referrer){try{if(new URL(document.referrer).host!==location.host)return;}catch(e){}}
var a=document.querySelector('link[rel="alternate"][hreflang="'+p+'"]');
if(a&&a.href){var to=new URL(a.href).pathname;if(to===location.pathname)return;if(first){try{sessionStorage.setItem(K+"-auto",cur+">"+p)}catch(e){}}location.replace(to+location.search+location.hash);}
}catch(e){}})();`;
