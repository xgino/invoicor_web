"use client";

import Script from "next/script";
import { useEffect, useSyncExternalStore } from "react";
import { ANALYTICS_ENABLED, GA_MEASUREMENT_ID, POSTHOG_HOST, POSTHOG_KEY } from "@/lib/config";
import { getServerConsent, readConsent, subscribeConsent } from "@/lib/consent";
import { ClickTracker } from "./ClickTracker";

/**
 * Website analytics (decision D4: GA4 + PostHog). Nothing loads until the visitor accepts
 * cookies in the consent banner (decision D5). Both services are US-based (see privacy policy).
 */
export function Analytics() {
  const consent = useSyncExternalStore(subscribeConsent, readConsent, getServerConsent);

  useEffect(() => {
    // Withdrawn after accepting: stop PostHog for the rest of this visit.
    if (consent === "denied") window.posthog?.opt_out_capturing?.();
  }, [consent]);

  if (!ANALYTICS_ENABLED || consent !== "granted") return null;

  return (
    <>
      {/* Google Analytics 4, IP anonymized by GA4 by default */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'granted'});gtag('js',new Date());gtag('config','${GA_MEASUREMENT_ID}');`}
      </Script>

      {/* PostHog (official loader snippet) */}
      <Script id="posthog-init" strategy="afterInteractive">
        {`!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug getPageViewId".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);posthog.init('${POSTHOG_KEY}',{api_host:'${POSTHOG_HOST}',defaults:'2025-05-24',person_profiles:'identified_only',disable_session_recording:true});`}
      </Script>

      <ClickTracker />
    </>
  );
}
