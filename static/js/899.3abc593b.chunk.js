(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[899],{899:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>l});r(43);var n=r(475),i=r(551),s=r(446),a=r.n(s),c=r(579);const u=t=>{let{data:e}=t;return(0,c.jsx)("div",{className:"cell-container",children:(0,c.jsxs)("article",{className:"mini-post",children:[(0,c.jsxs)("header",{children:[(0,c.jsx)("h3",{children:(0,c.jsx)("a",{href:e.link,children:e.title})}),(0,c.jsx)("time",{className:"published",children:a()(e.date).format("MMMM, YYYY")})]}),(0,c.jsx)("a",{href:e.link,className:"image",children:(0,c.jsx)("img",{src:"".concat("/personal-website").concat(e.image),alt:e.title})}),(0,c.jsx)("div",{className:"description",children:(0,c.jsx)("p",{children:e.desc})})]})})},o=[{title:"Direct Cardiac Reprogramming to replenish lost cardiomyocytes",image:"/images/projects/am_profile.png",link:"/projects/project1",desc:"Human fibroblasts which have been reprogrammed into cardiomyocyte-like cells with a combination of Ascl1 and Mef2c."},{title:"Charting Postnatal Heart Development Using In Vivo Single-Cell Functional Genomics",image:"/images/projects/heartatlas_profile.png",link:"/projects/project2",desc:"Posnatal Heart atlas with Spatial and Temporal resolution."},{title:"Epigenetic regulation of postnatal cardiomyocyte maturation",image:"/images/projects/carm1_profile.png",link:"/projects/project3",desc:"Epigenetic Regulation of Cardiomyocyte Maturation by Arginine Methyltransferase CARM1."}],l=()=>(0,c.jsx)(i.A,{title:"Projects",description:"Learn about Haofei's projects.",children:(0,c.jsxs)("article",{className:"post",id:"projects",children:[(0,c.jsx)("header",{children:(0,c.jsxs)("div",{className:"title",children:[(0,c.jsx)("h2",{children:(0,c.jsx)(n.N_,{to:"/projects",children:"Projects"})}),(0,c.jsx)("p",{children:"A selection of projects that I am Working on"})]})}),o.map((t=>(0,c.jsx)(u,{data:t},t.title)))]})})},446:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,r=36e5,n="millisecond",i="second",s="minute",a="hour",c="day",u="week",o="month",l="quarter",h="year",d="date",f="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],r=t%100;return"["+t+(e[(r-20)%10]||e[r]||e[0])+"]"}},g=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},M={s:g,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),i=r%60;return(e<=0?"+":"-")+g(n,2,"0")+":"+g(i,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),i=e.clone().add(n,o),s=r-i<0,a=e.clone().add(n+(s?-1:1),o);return+(-(n+(r-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:o,y:h,w:u,d:c,D:d,h:a,m:s,s:i,ms:n,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",v={};v[y]=p;var D="$isDayjsObject",j=function(t){return t instanceof x||!(!t||!t[D])},w=function t(e,r,n){var i;if(!e)return y;if("string"==typeof e){var s=e.toLowerCase();v[s]&&(i=s),r&&(v[s]=r,i=s);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var c=e.name;v[c]=e,i=c}return!n&&i&&(y=i),i||!n&&y},S=function(t,e){if(j(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new x(r)},b=M;b.l=w,b.i=j,b.w=function(t,e){return S(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var x=function(){function p(t){this.$L=w(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[D]=!0}var g=p.prototype;return g.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match($);if(n){var i=n[2]-1||0,s=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)}}return new Date(e)}(t),this.init()},g.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},g.$utils=function(){return b},g.isValid=function(){return!(this.$d.toString()===f)},g.isSame=function(t,e){var r=S(t);return this.startOf(e)<=r&&r<=this.endOf(e)},g.isAfter=function(t,e){return S(t)<this.startOf(e)},g.isBefore=function(t,e){return this.endOf(e)<S(t)},g.$g=function(t,e,r){return b.u(t)?this[e]:this.set(r,t)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(t,e){var r=this,n=!!b.u(e)||e,l=b.p(t),f=function(t,e){var i=b.w(r.$u?Date.UTC(r.$y,e,t):new Date(r.$y,e,t),r);return n?i:i.endOf(c)},$=function(t,e){return b.w(r.toDate()[t].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),r)},m=this.$W,p=this.$M,g=this.$D,M="set"+(this.$u?"UTC":"");switch(l){case h:return n?f(1,0):f(31,11);case o:return n?f(1,p):f(0,p+1);case u:var y=this.$locale().weekStart||0,v=(m<y?m+7:m)-y;return f(n?g-v:g+(6-v),p);case c:case d:return $(M+"Hours",0);case a:return $(M+"Minutes",1);case s:return $(M+"Seconds",2);case i:return $(M+"Milliseconds",3);default:return this.clone()}},g.endOf=function(t){return this.startOf(t,!1)},g.$set=function(t,e){var r,u=b.p(t),l="set"+(this.$u?"UTC":""),f=(r={},r[c]=l+"Date",r[d]=l+"Date",r[o]=l+"Month",r[h]=l+"FullYear",r[a]=l+"Hours",r[s]=l+"Minutes",r[i]=l+"Seconds",r[n]=l+"Milliseconds",r)[u],$=u===c?this.$D+(e-this.$W):e;if(u===o||u===h){var m=this.clone().set(d,1);m.$d[f]($),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f]($);return this.init(),this},g.set=function(t,e){return this.clone().$set(t,e)},g.get=function(t){return this[b.p(t)]()},g.add=function(n,l){var d,f=this;n=Number(n);var $=b.p(l),m=function(t){var e=S(f);return b.w(e.date(e.date()+Math.round(t*n)),f)};if($===o)return this.set(o,this.$M+n);if($===h)return this.set(h,this.$y+n);if($===c)return m(1);if($===u)return m(7);var p=(d={},d[s]=e,d[a]=r,d[i]=t,d)[$]||1,g=this.$d.getTime()+n*p;return b.w(g,this)},g.subtract=function(t,e){return this.add(-1*t,e)},g.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),s=this.$H,a=this.$m,c=this.$M,u=r.weekdays,o=r.months,l=r.meridiem,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].slice(0,s)},d=function(t){return b.s(s%12||12,t,"0")},$=l||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(m,(function(t,n){return n||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return b.s(e.$y,4,"0");case"M":return c+1;case"MM":return b.s(c+1,2,"0");case"MMM":return h(r.monthsShort,c,o,3);case"MMMM":return h(o,c);case"D":return e.$D;case"DD":return b.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(r.weekdaysMin,e.$W,u,2);case"ddd":return h(r.weekdaysShort,e.$W,u,3);case"dddd":return u[e.$W];case"H":return String(s);case"HH":return b.s(s,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return $(s,a,!0);case"A":return $(s,a,!1);case"m":return String(a);case"mm":return b.s(a,2,"0");case"s":return String(e.$s);case"ss":return b.s(e.$s,2,"0");case"SSS":return b.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(n,d,f){var $,m=this,p=b.p(d),g=S(n),M=(g.utcOffset()-this.utcOffset())*e,y=this-g,v=function(){return b.m(m,g)};switch(p){case h:$=v()/12;break;case o:$=v();break;case l:$=v()/3;break;case u:$=(y-M)/6048e5;break;case c:$=(y-M)/864e5;break;case a:$=y/r;break;case s:$=y/e;break;case i:$=y/t;break;default:$=y}return f?$:b.a($)},g.daysInMonth=function(){return this.endOf(o).$D},g.$locale=function(){return v[this.$L]},g.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=w(t,e,!0);return n&&(r.$L=n),r},g.clone=function(){return b.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},p}(),k=x.prototype;return S.prototype=k,[["$ms",n],["$s",i],["$m",s],["$H",a],["$W",c],["$M",o],["$y",h],["$D",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),S.extend=function(t,e){return t.$i||(t(e,x,S),t.$i=!0),S},S.locale=w,S.isDayjs=j,S.unix=function(t){return S(1e3*t)},S.en=v[y],S.Ls=v,S.p={},S}()}}]);
//# sourceMappingURL=899.3abc593b.chunk.js.map