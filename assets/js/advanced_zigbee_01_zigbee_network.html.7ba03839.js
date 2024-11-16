"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[93403],{56206:(e,t,n)=>{n.r(t),n.d(t,{comp:()=>G,data:()=>N});var i=n(24691);const a={style:{"text-align":"left"}},l={style:{"text-align":"left"}},r={style:{"text-align":"left"}},s={style:{"text-align":"left"}},o={style:{"text-align":"left"}},d={style:{"text-align":"left"}},c={style:{"text-align":"left"}},h={style:{"text-align":"left"}},g={style:{"text-align":"left"}},p={style:{"text-align":"left"}},u={style:{"text-align":"left"}},k={style:{"text-align":"left"}},y={style:{"text-align":"left"}},f={style:{"text-align":"left"}},m={style:{"text-align":"left"}},b={style:{"text-align":"left"}},v={style:{"text-align":"left"}},L={style:{"text-align":"left"}},x={style:{"text-align":"left"}},w={style:{"text-align":"left"}},Z={style:{"text-align":"left"}},T={style:{"text-align":"left"}},P={style:{"text-align":"left"}},Y={style:{"text-align":"left"}},_={style:{"text-align":"left"}},E={style:{"text-align":"left"}},W={style:{"text-align":"left"}},I={style:{"text-align":"left"}},C={style:{"text-align":"left"}},S={style:{"text-align":"left"}},F={style:{"text-align":"left"}},M={},G=(0,n(88242).A)(M,[["render",function(e,t){const n=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[t[134]||(t[134]=(0,i.Fv)('<h1 id="zigbee-network" tabindex="-1"><a class="header-anchor" href="#zigbee-network"><span>Zigbee network</span></a></h1><h2 id="device-types" tabindex="-1"><a class="header-anchor" href="#device-types"><span>Device types</span></a></h2><p>In Zigbee, there are three different types of devices: end device, router, and coordinator. A Zigbee network always has <strong>one</strong> (and no more) coordinator, and can have multiple routers and end devices. In the case of Zigbee2MQTT, the coordinator is your CC2531 USB stick.</p><h3 id="end-device" tabindex="-1"><a class="header-anchor" href="#end-device"><span>End Device</span></a></h3><p>End devices do not route traffic. They may also sleep, which makes end devices a suitable choice for battery operated devices. An end device only has one parent, either the coordinator or a router, generally the closest device when it was paired. All communications to and from the end device is via their parent. If a parent router goes offline all traffic to its children will cease until those end devices time out and attempt to find a new parent. Some models of end device, notably Xiaomi, don&#39;t attempt to find a new parent so will remain isolated until re-paired with the network.</p><p><em>Examples: WXKG01LM, RTCGQ01LM, MCCGQ11LM</em></p><h3 id="router" tabindex="-1"><a class="header-anchor" href="#router"><span>Router</span></a></h3><p>Routers are responsible for routing traffic between different nodes. Routers may not sleep. As such, routers are not a suitable choice for battery operated devices. Routers are also responsible for receiving and storing messages intended for their children. In addition to this, routers are the gate keepers to the network. They are responsible for allowing new nodes to join the network.</p><p><em>Examples: LED1545G12, 7146060PH, ZNCZ02LM, <a href="https://github.com/Koenkk/Z-Stack-firmware/tree/master/router/Z-Stack_Home_1.2/bin" target="_blank" rel="noopener noreferrer">CC2531 USB sniffer flashed with the router firmware</a>, <a href="https://www.zigbee2mqtt.io/devices/ZBDongle-E.html" target="_blank" rel="noopener noreferrer">SONOFF ZBDongle-E-based router</a></em></p><p><em>Note: Some devices advertising router functionality in a Zigbee network perform poorly and can thus effectively lower the stability of your Zigbee network.</em></p><h3 id="coordinator" tabindex="-1"><a class="header-anchor" href="#coordinator"><span>Coordinator</span></a></h3><p>A coordinator is a special router. In addition to all of the router capabilities, the coordinator is responsible for forming the network. To do that, it must select the appropriate channel, PAN ID, and extended network address. It is also responsible for selecting the security mode of the network.</p><p><em>Examples: <a href="https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_Home_1.2/bin/default" target="_blank" rel="noopener noreferrer">CC2531 USB sniffer flashed with the coordinator firmware</a></em></p><h3 id="finding-out-the-type-of-your-device" tabindex="-1"><a class="header-anchor" href="#finding-out-the-type-of-your-device"><span>Finding out the type of your device</span></a></h3><p>Zigbee2MQTT logs the device type of your devices on startup, e.g.:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">2018-5-28 20:39:46 INFO 0x00158d00018255df (0x00158d00018255df): ZNCZ02LM - Xiaomi Mi power plug ZigBee (Router)</span>\n<span class="line">2018-5-28 20:39:46 INFO 0x00158d0001b79111 (0x00158d0001b79111): WSDCGQ01LM - Xiaomi MiJia temperature &amp; humidity sensor (EndDevice)</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="green-power-devices" tabindex="-1"><a class="header-anchor" href="#green-power-devices"><span>Green Power devices</span></a></h3><p>Zigbee Green Power devices are special end devices that are designed to be very energy efficient. Messages from Green Power devices cannot be &quot;understood&quot; by normal Zigbee devices, therefore they need to be &quot;translated&quot; first by a Green Power &quot;proxy&quot;. This means the Green Power device must be in range of a regular Zigbee device that supports the Green Power proxy role. Examples are Philips Hue and (at least some) Ikea Tradfri bulbs.</p><p>Green Power devices don&#39;t support binding and are not included in network scans.</p>',19)),(0,i.Lk)("p",null,[t[1]||(t[1]=(0,i.eW)("When pairing a Green Power device, you must choose whether translated messages should be re-transmitted by unicast or broadcast. Only ")),(0,i.bF)(n,{to:"/guide/usage/pairing_devices.html"},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)("enable join")]))),_:1}),t[2]||(t[2]=(0,i.eW)(' on a specific device to use unicast for this Green Power device. Enable join on all devices to use broadcast. Do note that each proxy will generate a unique broadcast for each Green Power event, and a single keypress may generate more than one event (e.g. "key down" then "key up"). If there are multiple proxies paired with a Green Power device, this may generate ')),t[3]||(t[3]=(0,i.Lk)("em",null,"a lot",-1)),t[4]||(t[4]=(0,i.eW)(" of traffic."))]),t[135]||(t[135]=(0,i.Lk)("p",null,[(0,i.Lk)("em",null,"Example Green Power devices: PTM 215Z, SR-ZGP2801K-5C, SR-ZGP2801K2-DIM, SR-ZGP2801K4-DIM")],-1)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[t[6]||(t[6]=(0,i.eW)("Note: Heavy use of broadcasts can negatively impact performance of your network (See ")),(0,i.bF)(n,{to:"/advanced/zigbee/02_improve_network_range_and_stability.html"},{default:(0,i.k6)((()=>t[5]||(t[5]=[(0,i.eW)("Broadcasts")]))),_:1}),t[7]||(t[7]=(0,i.eW)(")."))])]),t[136]||(t[136]=(0,i.Lk)("h4",{id:"gp-proxies-sinks",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#gp-proxies-sinks"},[(0,i.Lk)("span",null,"GP Proxies & Sinks")])],-1)),t[137]||(t[137]=(0,i.Lk)("p",null,"The following Zigbee routers have already been confirmed to support (at least some) ZGP features. Other devices very likely also work without issues, they just haven't been added to this table yet.",-1)),(0,i.Lk)("table",null,[t[133]||(t[133]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th",{style:{"text-align":"left"}},"Zigbee Router"),(0,i.Lk)("th",{style:{"text-align":"center"}},"GP Proxy"),(0,i.Lk)("th",{style:{"text-align":"center"}},"GP Sink"),(0,i.Lk)("th",{style:{"text-align":"center"}},"Unicast")])],-1)),(0,i.Lk)("tbody",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("td",a,[(0,i.bF)(n,{to:"/devices/ti.router.html"},{default:(0,i.k6)((()=>t[8]||(t[8]=[(0,i.eW)("Custom devices (DiY) TI Router")]))),_:1})]),t[9]||(t[9]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1)),t[10]||(t[10]=(0,i.Lk)("td",{style:{"text-align":"center"}},"N",-1)),t[11]||(t[11]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1))]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",l,[(0,i.bF)(n,{to:"/devices/E1603_E1702_E1708.html"},{default:(0,i.k6)((()=>t[12]||(t[12]=[(0,i.eW)("IKEA E1603/E1702/E1708")]))),_:1})]),t[13]||(t[13]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1)),t[14]||(t[14]=(0,i.Lk)("td",{style:{"text-align":"center"}},"N",-1)),t[15]||(t[15]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1))]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",r,[(0,i.bF)(n,{to:"/devices/E2204.html"},{default:(0,i.k6)((()=>t[16]||(t[16]=[(0,i.eW)("IKEA E2204")]))),_:1})]),t[17]||(t[17]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1)),t[18]||(t[18]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1)),t[19]||(t[19]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1))]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",s,[(0,i.bF)(n,{to:"/devices/ICPSHC24-10EU-IL-1_ICPSHC24-10EU-IL-2.html"},{default:(0,i.k6)((()=>t[20]||(t[20]=[(0,i.eW)("IKEA ICPSHC24-10EU-IL-2")]))),_:1}),t[21]||(t[21]=(0,i.eW)("²"))]),t[22]||(t[22]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1)),t[23]||(t[23]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1)),t[24]||(t[24]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1))]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",o,[(0,i.bF)(n,{to:"/devices/LED2101G4.html"},{default:(0,i.k6)((()=>t[25]||(t[25]=[(0,i.eW)("IKEA LED2101G4")]))),_:1})]),t[26]||(t[26]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1)),t[27]||(t[27]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1)),t[28]||(t[28]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1))]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",d,[(0,i.bF)(n,{to:"/devices/LED2103G5.html"},{default:(0,i.k6)((()=>t[29]||(t[29]=[(0,i.eW)("IKEA LED2103G5")]))),_:1})]),t[30]||(t[30]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1)),t[31]||(t[31]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1)),t[32]||(t[32]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1))]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",c,[(0,i.bF)(n,{to:"/devices/LED2109G6.html"},{default:(0,i.k6)((()=>t[33]||(t[33]=[(0,i.eW)("IKEA LED2109G6")]))),_:1})]),t[34]||(t[34]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1)),t[35]||(t[35]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1)),t[36]||(t[36]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1))]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",h,[(0,i.bF)(n,{to:"/devices/LED2107C4.html"},{default:(0,i.k6)((()=>t[37]||(t[37]=[(0,i.eW)("IKEA LED2107C4")]))),_:1})]),t[38]||(t[38]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1)),t[39]||(t[39]=(0,i.Lk)("td",{style:{"text-align":"center"}},"N",-1)),t[40]||(t[40]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1))]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",g,[(0,i.bF)(n,{to:"/devices/1742930P7.html"},{default:(0,i.k6)((()=>t[41]||(t[41]=[(0,i.eW)("Philips 1742930P7")]))),_:1})]),t[42]||(t[42]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1)),t[43]||(t[43]=(0,i.Lk)("td",{style:{"text-align":"center"}},"N",-1)),t[44]||(t[44]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1))]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",p,[(0,i.bF)(n,{to:"/devices/3216131P5.html"},{default:(0,i.k6)((()=>t[45]||(t[45]=[(0,i.eW)("Philips 3216131P5")]))),_:1})]),t[46]||(t[46]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1)),t[47]||(t[47]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1)),t[48]||(t[48]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Nⁱ",-1))]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",u,[(0,i.bF)(n,{to:"/devices/3261030P7.html"},{default:(0,i.k6)((()=>t[49]||(t[49]=[(0,i.eW)("Philips 3261030P7")]))),_:1})]),t[50]||(t[50]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1)),t[51]||(t[51]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1)),t[52]||(t[52]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Nⁱ",-1))]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",k,[(0,i.bF)(n,{to:"/devices/3261031P6.html"},{default:(0,i.k6)((()=>t[53]||(t[53]=[(0,i.eW)("Philips 3261031P6")]))),_:1})]),t[54]||(t[54]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1)),t[55]||(t[55]=(0,i.Lk)("td",{style:{"text-align":"center"}},"N",-1)),t[56]||(t[56]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1))]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",y,[(0,i.bF)(n,{to:"/devices/3261331P7.html"},{default:(0,i.k6)((()=>t[57]||(t[57]=[(0,i.eW)("Philips 3261331P7")]))),_:1})]),t[58]||(t[58]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1)),t[59]||(t[59]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1)),t[60]||(t[60]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Nⁱ",-1))]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",f,[(0,i.bF)(n,{to:"/devices/3418931P6.html"},{default:(0,i.k6)((()=>t[61]||(t[61]=[(0,i.eW)("Philips 3418931P6")]))),_:1})]),t[62]||(t[62]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1)),t[63]||(t[63]=(0,i.Lk)("td",{style:{"text-align":"center"}},"N",-1)),t[64]||(t[64]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1))]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",m,[(0,i.bF)(n,{to:"/devices/4023330P7.html"},{default:(0,i.k6)((()=>t[65]||(t[65]=[(0,i.eW)("Philips 4023330P7")]))),_:1})]),t[66]||(t[66]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1)),t[67]||(t[67]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1)),t[68]||(t[68]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Nⁱ",-1))]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",b,[(0,i.bF)(n,{to:"/devices/4034031P7.html"},{default:(0,i.k6)((()=>t[69]||(t[69]=[(0,i.eW)("Philips 4034031P7")]))),_:1})]),t[70]||(t[70]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1)),t[71]||(t[71]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1)),t[72]||(t[72]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Nⁱ",-1))]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",v,[(0,i.bF)(n,{to:"/devices/4090230P9.html"},{default:(0,i.k6)((()=>t[73]||(t[73]=[(0,i.eW)("Philips 4090230P9")]))),_:1})]),t[74]||(t[74]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1)),t[75]||(t[75]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1)),t[76]||(t[76]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Nⁱ",-1))]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",L,[(0,i.bF)(n,{to:"/devices/5047130P9.html"},{default:(0,i.k6)((()=>t[77]||(t[77]=[(0,i.eW)("Philips 5047130P9")]))),_:1})]),t[78]||(t[78]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1)),t[79]||(t[79]=(0,i.Lk)("td",{style:{"text-align":"center"}},"N",-1)),t[80]||(t[80]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1))]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",x,[(0,i.bF)(n,{to:"/devices/5062131P7.html"},{default:(0,i.k6)((()=>t[81]||(t[81]=[(0,i.eW)("Philips 5062131P7")]))),_:1})]),t[82]||(t[82]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1)),t[83]||(t[83]=(0,i.Lk)("td",{style:{"text-align":"center"}},"N",-1)),t[84]||(t[84]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1))]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",w,[(0,i.bF)(n,{to:"/devices/9290024896.html"},{default:(0,i.k6)((()=>t[85]||(t[85]=[(0,i.eW)("Philips 9290024896")]))),_:1})]),t[86]||(t[86]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1)),t[87]||(t[87]=(0,i.Lk)("td",{style:{"text-align":"center"}},"N",-1)),t[88]||(t[88]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1))]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",Z,[(0,i.bF)(n,{to:"/devices/9290022166.html"},{default:(0,i.k6)((()=>t[89]||(t[89]=[(0,i.eW)("Philips 9290022166")]))),_:1})]),t[90]||(t[90]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1)),t[91]||(t[91]=(0,i.Lk)("td",{style:{"text-align":"center"}},"N",-1)),t[92]||(t[92]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Nⁱ",-1))]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",T,[(0,i.bF)(n,{to:"/devices/9290022169.html"},{default:(0,i.k6)((()=>t[93]||(t[93]=[(0,i.eW)("Philips 9290022169")]))),_:1})]),t[94]||(t[94]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1)),t[95]||(t[95]=(0,i.Lk)("td",{style:{"text-align":"center"}},"N",-1)),t[96]||(t[96]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1))]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",P,[(0,i.bF)(n,{to:"/devices/929001953301.html"},{default:(0,i.k6)((()=>t[97]||(t[97]=[(0,i.eW)("Philips 929001953301")]))),_:1})]),t[98]||(t[98]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1)),t[99]||(t[99]=(0,i.Lk)("td",{style:{"text-align":"center"}},"N",-1)),t[100]||(t[100]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1))]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",Y,[(0,i.bF)(n,{to:"/devices/8718696548738.html"},{default:(0,i.k6)((()=>t[101]||(t[101]=[(0,i.eW)("Philips 8718696548738")]))),_:1})]),t[102]||(t[102]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1)),t[103]||(t[103]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1)),t[104]||(t[104]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Nⁱ",-1))]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",_,[(0,i.bF)(n,{to:"/devices/8719514491106.html"},{default:(0,i.k6)((()=>t[105]||(t[105]=[(0,i.eW)("Philips 8719514491106")]))),_:1})]),t[106]||(t[106]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1)),t[107]||(t[107]=(0,i.Lk)("td",{style:{"text-align":"center"}},"N",-1)),t[108]||(t[108]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1))]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",E,[(0,i.bF)(n,{to:"/devices/ZBDongle-E.html"},{default:(0,i.k6)((()=>t[109]||(t[109]=[(0,i.eW)("Sonoff ZBDongle-E")]))),_:1})]),t[110]||(t[110]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1)),t[111]||(t[111]=(0,i.Lk)("td",{style:{"text-align":"center"}},"N",-1)),t[112]||(t[112]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1))]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",W,[(0,i.bF)(n,{to:"/devices/SR-ZG9040A_ZG9041A-D.html"},{default:(0,i.k6)((()=>t[113]||(t[113]=[(0,i.eW)("Sunricher R-ZG9040A-ZG9041A-D")]))),_:1})]),t[114]||(t[114]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1)),t[115]||(t[115]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1)),t[116]||(t[116]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1))]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",I,[(0,i.bF)(n,{to:"/devices/SR-ZG9101SAC-HP-SWITCH-2CH.html"},{default:(0,i.k6)((()=>t[117]||(t[117]=[(0,i.eW)("Sunricher SR-ZG9101SAC-HP-SWITCH-2CH")]))),_:1})]),t[118]||(t[118]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1)),t[119]||(t[119]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1)),t[120]||(t[120]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1))]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",C,[(0,i.bF)(n,{to:"/devices/C4.html"},{default:(0,i.k6)((()=>t[121]||(t[121]=[(0,i.eW)("Ubisys C4")]))),_:1})]),t[122]||(t[122]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1)),t[123]||(t[123]=(0,i.Lk)("td",{style:{"text-align":"center"}},"N",-1)),t[124]||(t[124]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1))]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",S,[(0,i.bF)(n,{to:"/devices/S2.html"},{default:(0,i.k6)((()=>t[125]||(t[125]=[(0,i.eW)("Ubisys S2")]))),_:1})]),t[126]||(t[126]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1)),t[127]||(t[127]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1)),t[128]||(t[128]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1))]),(0,i.Lk)("tr",null,[(0,i.Lk)("td",F,[(0,i.bF)(n,{to:"/devices/VES-ZB-SWI-015.html"},{default:(0,i.k6)((()=>t[129]||(t[129]=[(0,i.eW)("Vesternet VES-ZB-SWI-015")]))),_:1})]),t[130]||(t[130]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1)),t[131]||(t[131]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1)),t[132]||(t[132]=(0,i.Lk)("td",{style:{"text-align":"center"}},"Y",-1))])])]),t[138]||(t[138]=(0,i.Fv)('<p><em>ⁱ ZGP frames are always being re-transmitted as broadcast, even if unicast was requested by the coordinator. Might be a <a href="https://github.com/Koenkk/zigbee2mqtt/issues/22897#issuecomment-2158291085" target="_blank" rel="noopener noreferrer">firmware bug</a>.</em></p><p><em>² Only ICPSHC24-10EU-IL-2 (new version) is able to translate ZGP frames.</em></p><h2 id="zigbee-networking" tabindex="-1"><a class="header-anchor" href="#zigbee-networking"><span>Zigbee networking</span></a></h2><p>This section is an overview of how the Zigbee protocol stack divides into layers (See <a href="https://en.wikipedia.org/wiki/Internet_protocol_suite#Layer_names_and_number_of_layers_in_the_literature" target="_blank" rel="noopener noreferrer">Wikipedia - IP layers</a> ). The number of layers in this type of description often varies; this discussion uses 4:</p><ol><li>the physical and MAC layers,</li><li>the network and transport layer,</li><li>the application layer, and</li><li>the Zigbee2MQTT layer.</li></ol><p>Most of the focus will be on the last two layers.</p><h3 id="physical-and-mac-layers" tabindex="-1"><a class="header-anchor" href="#physical-and-mac-layers"><span>Physical and MAC layers</span></a></h3><p>The Physical and MAC layers of the Zigbee protocol are defined by <a href="https://en.wikipedia.org/wiki/IEEE_802.15.4" target="_blank" rel="noopener noreferrer">IEEE 802.15.4</a>. This is a common set of standards that are used by multiple protocol stacks, including Zigbee, 6LoWPAN, Thread and Z-Wave. There are actually a few different frequency bands that IEEE 802.15.4 can use; the same 2.4 GHz band that WiFi can use, and then an 800 MhZ and a 900MhZ band whose use varies by country. In general, devices using one stack choose one of these and avoid the others. For example, Zigbee devices generally use the 2.4 GHz band and Z-Wave devices generally use the 8/900 MHz bands (depending on country).</p><h3 id="the-network-and-transport-layers" tabindex="-1"><a class="header-anchor" href="#the-network-and-transport-layers"><span>The Network and Transport layers</span></a></h3><p>The Network and Transport layers are where the routing, security and transport between the various nodes in a Zigbee network are defined. This includes things like the network encryption model. This is also where the difference between the controller, routers and end-nodes is defined in the Zigbee network - see <a href="#device-types">device types</a>. There is one other Zigbee concept that I’ll put at the transport layer; the concept of Endpoints. Similar to ports in TCP/IP, Endpoints allow each physical device to have multiple virtual devices on the network. For example, a 3-gang Zigbee switch might have a single radio, and hence only one MAC address and only one Zigbee network address, but have three endpoints - one for each switch. Each endpoint can then run a single ‘switch’ interface.</p><h3 id="the-application-layer" tabindex="-1"><a class="header-anchor" href="#the-application-layer"><span>The application layer</span></a></h3><p>Zigbee is more than just a networking technology; it defines a bunch of standard applications that run on the network. These applications are defined in the Zigbee Cluster Library specification (see <a href="https://github.com/Koenkk/zigbee-herdsman/blob/master/docs/07-5123-08-Zigbee-Cluster-Library.pdf" target="_blank" rel="noopener noreferrer">Zigbee Cluster Library Specification v7</a>). Each ‘cluster’ defines one type of application communication. Each cluster type has its own integer ID, and comes in two flavours; client and server. There are clusters for low-level information gathering - getting the device model number, listing the endpoints and the clusters each endpoint implements (each endpoint can implement multiple clusters). There are clusters for simple network setup purposes, such as the Identify cluster which allows someone to ask a device to identify itself, e.g. a light asked to identify itself might start pulsing. There are clusters for on/off light control, where a light might implement the on/off server cluster and a switch might implement the on/off client cluster. There are clusters for configuration that allow a controller to configure devices in various ways.</p><p>As noted above, each cluster comes in two flavours; client and server. Generally the server is the endpoint that is running more frequently, and the client chooses to connect to the server. In many cases this isn’t clear-cut when considering the cluster functionality, so the spec decides pretty much arbitrarily.</p><p>The Zigbee controller can ‘bind’ the clusters for two endpoints together. It will connect one endpoint that implements the client variant of a cluster to another endpoint that implements the server variant of the same cluster.</p><p>There are also some special clusters. The ‘group’ cluster allows the definition of ‘groups’ - each defined by a small integer. If an endpoint implements the group cluster then it can be configured to be part of some number of groups. The device remembers which groups it is a member of. A group can then be treated like a virtual endpoint. Messages sent to a particular group ID are broadcast over the network and all devices that are part of that group will respond to the message. Similarly, a client can be bound to a group rather than another endpoint, so that, for example, a single switch can control a whole group of lights.</p><p>Similarly, the scene cluster allows a device to be configured to remember parameters from other clusters implemented on that device. A light might remember brightness. A roller blind might remember a set height. Each device can remember a small number of scenes, identified by ID.</p><p>Scenes and groups are designed to work together. One might imagine setting up a bunch of different devices, then joining them all into a group, then sending the group a ‘remember scene’ command. One could then send a ‘recall scene’ command to the group with the appropriate scene ID to cause many devices to configure themselves in a given way with minimal network traffic, and hence minimal latency.</p><h3 id="zigbee2mqtt" tabindex="-1"><a class="header-anchor" href="#zigbee2mqtt"><span>Zigbee2MQTT</span></a></h3><p>The Zigbee stack has a certain amount of home automation protocol already defined; as discussed, devices can be formed into groups and scenes defined, switches can be bound to those groups. In such a setup the Zigbee controller might help configure the network, but afterwards it is passive at the application level.</p><p>If more flexibility is required than comes in the pre-defined Zigbee clusters, for example “Turn on the fan when the relative humidity is over 70%.”, then you need more clever control. It is here that Zigbee2MQTT comes in. It translates between Zigbee and MQTT.</p><p>When a device is added to the network with a Zigbee-Herdsman controller, the controller uses the low-level configuration clusters to interview the device and find out what the device is, what endpoints it has, and what clusters each of those endpoints implements. The Zigbee-Herdsman-Converters then record, for each model of device, which clusters the controller should bind to, and how the conversion to MQTT should be handled. Most devices in Zigbee-Herdsman-Converters use generic converters that bind to each Zigbee cluster and provide a standard MQTT interface for that cluster.</p><p>With this setup, when a switch is activated, it sends a message to the Zigbee2MQTT controller. The controller then sends out an MQTT message. The MQTT controller (which is different to the Zigbee controller. e.g. the Home Assistant package) then decides what to do based on that message. It might, for example, decide to turn on a particular light, so it would send an MQTT message requesting the light to turn on. Zigbee2MQTT would receive that message, then send a Zigbee message to the light’s endpoint using the appropriate Zigbee cluster.</p><p>This system is significantly more flexible than the base Zigbee system. But it also has higher latency (it takes longer for the system to react to a switch being toggled) and it has more points of failure. With the base Zigbee setup, not even the controller is involved once setup is complete. With the Zigbee2MQTT setup there are two Zigbee messages, two MQTT messages, and three extra processing steps (the main controller deciding what to do, and MQTT processing the messages in each direction).</p><p>Note that in some commercial Zigbee systems, such as Phillips Hue, the controller node in the Zigbee network is also the automation controller that can add additional smarts on top of the base Zigbee setup. Zigbee2MQTT inserts MQTT between the two, allowing them to be decoupled.</p>',24))])}]]),N=JSON.parse('{"path":"/advanced/zigbee/01_zigbee_network.html","title":"Zigbee network","lang":"en-US","frontmatter":{"pageClass":"content-page"},"headers":[{"level":2,"title":"Device types","slug":"device-types","link":"#device-types","children":[{"level":3,"title":"End Device","slug":"end-device","link":"#end-device","children":[]},{"level":3,"title":"Router","slug":"router","link":"#router","children":[]},{"level":3,"title":"Coordinator","slug":"coordinator","link":"#coordinator","children":[]},{"level":3,"title":"Finding out the type of your device","slug":"finding-out-the-type-of-your-device","link":"#finding-out-the-type-of-your-device","children":[]},{"level":3,"title":"Green Power devices","slug":"green-power-devices","link":"#green-power-devices","children":[]}]},{"level":2,"title":"Zigbee networking","slug":"zigbee-networking","link":"#zigbee-networking","children":[{"level":3,"title":"Physical and MAC layers","slug":"physical-and-mac-layers","link":"#physical-and-mac-layers","children":[]},{"level":3,"title":"The Network and Transport layers","slug":"the-network-and-transport-layers","link":"#the-network-and-transport-layers","children":[]},{"level":3,"title":"The application layer","slug":"the-application-layer","link":"#the-application-layer","children":[]},{"level":3,"title":"Zigbee2MQTT","slug":"zigbee2mqtt","link":"#zigbee2mqtt","children":[]}]}],"git":{"updatedTime":1731778636000},"filePathRelative":"advanced/zigbee/01_zigbee_network.md"}')}}]);