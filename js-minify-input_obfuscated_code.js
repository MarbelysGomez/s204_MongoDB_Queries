function qt(n, e, r, i) { 
 var t; 
 if (Array.isArray(e)) k.each(e, function(e, t) { 
 r || Nt.test(n) ? i(n, t) : qt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i) 
 }); 
 else if (r || "object" !== w(e)) i(n, e); 
 else 
 for (t in e) qt(n + "[" + t + "]", e[t], r, i) 
 }