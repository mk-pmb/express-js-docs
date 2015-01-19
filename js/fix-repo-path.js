/* -*- coding: UTF-8, tab-width: 2 -*- */
/*jslint indent: 2, maxlen: 80, browser: true */
(function () {
  'use strict';
  var jq = window.jQuery, logoLink = jq('#logo a:first')[0], llpn, llpnLen;
  logoLink.href = String(jq('link[rel=stylesheet]:first')[0].href
    ).replace(/\/css\/[a-z]+\.css$/, '/');
  llpn = String(logoLink.pathname || '/');
  if (llpn === '/') { return; }
  llpnLen = llpn.length;
  jq('a').each(function (opn, lnk) {
    if (lnk.href === logoLink.href) { return; }
    if (lnk.host !== logoLink.host) { return; }
    opn = lnk.pathname;
    if (opn.substr(0, llpnLen) === llpn) { return; }
    lnk.pathname = opn.replace(/^\/*/, llpn);
  });
}());
