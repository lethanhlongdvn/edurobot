(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const be="modulepreload",xe=function(e){return"/"+e},ae={},Z=function(t,n,i){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),r=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(n.map(l=>{if(l=xe(l),l in ae)return;ae[l]=!0;const d=l.endsWith(".css"),c=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${c}`))return;const h=document.createElement("link");if(h.rel=d?"stylesheet":be,d||(h.as="script"),h.crossOrigin="",h.href=l,r&&h.setAttribute("nonce",r),document.head.appendChild(h),d)return new Promise((u,g)=>{h.addEventListener("load",u),h.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(a){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=a,window.dispatchEvent(r),!r.defaultPrevented)throw a}return s.then(a=>{for(const r of a||[])r.status==="rejected"&&o(r.reason);return t().catch(o)})},fe=(e,t,n)=>{const i=e[t];return i?typeof i=="function"?i():Promise.resolve(i):new Promise((s,o)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(o.bind(null,new Error("Unknown variable dynamic import: "+t+(t.split("/").length!==n?". Note that variables only represent file names one level deep.":""))))})},we=Array.from({length:70},(e,t)=>{const n=t+1,i=String(n),s=i.padStart(3,"0"),o=String(Math.ceil(n/2));return{id:`science-${i}`,period:i,week:o,title:`Bài Khoa học ${i}`,topic:"Khoa học",modulePath:`./${i}/index.js`,exportName:`lesson${s}`}}),ve=Array.from({length:110},(e,t)=>{const n=t+1,i=String(n).padStart(3,"0");return{period:String(n),week:String(Math.ceil(n/5)),title:`Bài Toán ${n}`,topic:"Toán học",modulePath:`./${n}/index.js`,exportName:`lesson${i}`}}),ye=[{period:"0",week:"1",title:"⚡ BÀI HỌC MẪU (TEMPLATE)",topic:"Hướng dẫn",modulePath:"./standard_template/index.js",exportName:"lessonTemplate"},{period:"1",week:"1",title:"BÀI 1: ÔN TẬP SỐ TỰ NHIÊN",topic:"Số tự nhiên",modulePath:"./1/index.js",exportName:"lesson1"},{period:"2",week:"1",title:"BÀI 1: ÔN TẬP SỐ TỰ NHIÊN (TIẾT 2)",topic:"Số tự nhiên",modulePath:"./2/index.js",exportName:"lesson2"},{period:"3",week:"1",title:"BÀI 2: ÔN TẬP CÁC PHÉP TÍNH VỚI SỐ TỰ NHIÊN",topic:"Số tự nhiên",modulePath:"./3/index.js",exportName:"lesson3"},{period:"4",week:"1",title:"BÀI 2: ÔN TẬP CÁC PHÉP TÍNH VỚI SỐ TỰ NHIÊN (TIẾT 2)",topic:"Số tự nhiên",modulePath:"./4/index.js",exportName:"lesson4"},{period:"5",week:"1",title:"BÀI 3: ÔN TẬP VỀ PHÂN SỐ",topic:"Phân số",modulePath:"./5/index.js",exportName:"lesson5"},{period:"6",week:"2",title:"BÀI 3: ÔN TẬP VỀ PHÂN SỐ (TIẾT 2)",topic:"Phân số",modulePath:"./6/index.js",exportName:"lesson6"},{period:"7",week:"2",title:"BÀI 4: PHÂN SỐ THẬP PHÂN",topic:"Phân số",modulePath:"./7/index.js",exportName:"lesson7"},{period:"8",week:"2",title:"BÀI 5: ÔN TẬP CÁC PHÉP TÍNH VỚI PHÂN SỐ",topic:"Phân số",modulePath:"./8/index.js",exportName:"lesson8"},{period:"9",week:"2",title:"BÀI 5: ÔN TẬP CÁC PHÉP TÍNH VỚI PHÂN SỐ (TIẾT 2)",topic:"Phân số",modulePath:"./9/index.js",exportName:"lesson9"},{period:"10",week:"2",title:"BÀI 5: ÔN TẬP CÁC PHÉP TÍNH VỚI PHÂN SỐ (TIẾT 3)",topic:"Phân số",modulePath:"./10/index.js",exportName:"lesson10"},{period:"11",week:"3",title:"BÀI 6: CỘNG, TRỪ HAI PHÂN SỐ KHÁC MẪU SỐ (TIẾT 1)",topic:"Phân số",modulePath:"./11/index.js",exportName:"lesson11"},{period:"12",week:"3",title:"BÀI 6: CỘNG, TRỪ HAI PHÂN SỐ KHÁC MẪU SỐ (TIẾT 2)",topic:"Phân số",modulePath:"./12/index.js",exportName:"lesson12"},{period:"13",week:"3",title:"BÀI 7: HỖN SỐ",topic:"Phân số",modulePath:"./13/index.js",exportName:"lesson13"},{period:"14",week:"3",title:"BÀI 7: HỖN SỐ (LUYỆN TẬP)",topic:"Phân số",modulePath:"./14/index.js",exportName:"lesson14"},{period:"15",week:"3",title:"BÀI 8: ÔN TẬP HÌNH HỌC VÀ ĐO LƯỜNG (TIẾT 1)",topic:"Hình học và Đo lường",modulePath:"./15/index.js",exportName:"lesson15"},{period:"16",week:"4",title:"BÀI 8: ÔN TẬP HÌNH HỌC VÀ ĐO LƯỜNG (TIẾT 2)",topic:"Hình học và Đo lường",modulePath:"./16/index.js",exportName:"lesson16"},{period:"17",week:"4",title:"BÀI 9: LUYỆN TẬP CHUNG",topic:"Luyện tập chung",modulePath:"./17/index.js",exportName:"lesson17"},{period:"18",week:"4",title:"BÀI 9: LUYỆN TẬP CHUNG (TIẾT 2)",topic:"Luyện tập chung",modulePath:"./18/index.js",exportName:"lesson18"},{period:"19",week:"4",title:"BÀI 9: LUYỆN TẬP CHUNG (TIẾT 3)",topic:"Luyện tập chung",modulePath:"./19/index.js",exportName:"lesson19"},{period:"20",week:"4",title:"BÀI 10: KHÁI NIỆM SỐ THẬP PHÂN",topic:"Số thập phân",modulePath:"./20/index.js",exportName:"lesson20"},{period:"21",week:"5",title:"BÀI 10: KHÁI NIỆM SỐ THẬP PHÂN (TIẾT 2)",topic:"Số thập phân",modulePath:"./21/index.js",exportName:"lesson21"},{period:"22",week:"5",title:"BÀI 10: KHÁI NIỆM SỐ THẬP PHÂN (TIẾT 3 - LUYỆN TẬP)",topic:"Số thập phân",modulePath:"./22/index.js",exportName:"lesson22"},{period:"23",week:"5",title:"BÀI 11: SO SÁNH CÁC SỐ THẬP PHÂN (TIẾT 1)",topic:"Số thập phân",modulePath:"./23/index.js",exportName:"lesson23"},{period:"24",week:"5",title:"BÀI 11: SO SÁNH CÁC SỐ THẬP PHÂN (TIẾT 2 - LUYỆN TẬP)",topic:"Số thập phân",modulePath:"./24/index.js",exportName:"lesson24"},{period:"25",week:"5",title:"BÀI 12: VIẾT SỐ ĐO ĐẠI LƯỢNG DƯỚI DẠNG SỐ THẬP PHÂN",topic:"Số thập phân",modulePath:"./25/index.js",exportName:"lesson25"},{period:"26",week:"6",title:"BÀI 12: VIẾT SỐ ĐO ĐẠI LƯỢNG DƯỚI DẠNG SỐ THẬP PHÂN (TIẾT 2)",topic:"Số thập phân",modulePath:"./26/index.js",exportName:"lesson26"},{period:"27",week:"6",title:"BÀI 12: VIẾT SỐ ĐO ĐẠI LƯỢNG DƯỚI DẠNG SỐ THẬP PHÂN (TIẾT 3 - LUYỆN TẬP)",topic:"Số thập phân",modulePath:"./27/index.js",exportName:"lesson27"},{period:"28",week:"6",title:"BÀI 13: LÀM TRÒN SỐ THẬP PHÂN",topic:"Số thập phân",modulePath:"./28/index.js",exportName:"lesson28"},{period:"29",week:"6",title:"BÀI 13: LÀM TRÒN SỐ THẬP PHÂN (TIẾT 2)",topic:"Số thập phân",modulePath:"./29/index.js",exportName:"lesson29"},{period:"30",week:"6",title:"BÀI 14: LUYỆN TẬP CHUNG",topic:"Số thập phân",modulePath:"./30/index.js",exportName:"lesson30"},{period:"31",week:"7",title:"BÀI 14: LUYỆN TẬP CHUNG (TIẾT 2)",topic:"Số thập phân",modulePath:"./31/index.js",exportName:"lesson31"},{period:"32",week:"7",title:"BÀI 15: KI-LÔ-MÉT VUÔNG. HÉC-TA (TIẾT 1)",topic:"Ki-lô-mét vuông. Héc-ta",modulePath:"./32/index.js",exportName:"lesson32"},{period:"33",week:"7",title:"BÀI 15: KI-LÔ-MÉT VUÔNG. HÉC-TA (TIẾT 2)",topic:"Ki-lô-mét vuông. Héc-ta",modulePath:"./33/index.js",exportName:"lesson33"},{period:"34",week:"7",title:"BÀI 16: CÁC ĐƠN VỊ ĐO DIỆN TÍCH (TIẾT 1)",topic:"Các đơn vị đo diện tích",modulePath:"./34/index.js",exportName:"lesson34"},{period:"35",week:"7",title:"BÀI 16: CÁC ĐƠN VỊ ĐO DIỆN TÍCH (TIẾT 2 - LUYỆN TẬP)",topic:"Các đơn vị đo diện tích",modulePath:"./35/index.js",exportName:"lesson35"},{period:"36",week:"8",title:"BÀI 17: THỰC HÀNH VÀ TRẢI NGHIỆM VỚI MỘT SỐ ĐƠN VỊ ĐO ĐẠI LƯỢNG (TIẾT 1)",topic:"Thực hành và trải nghiệm",modulePath:"./36/index.js",exportName:"lesson36"},{period:"37",week:"8",title:"BÀI 17: THỰC HÀNH VÀ TRẢI NGHIỆM VỚI MỘT SỐ ĐƠN VỊ ĐO ĐẠI LƯỢNG (TIẾT 2)",topic:"Thực hành và trải nghiệm",modulePath:"./37/index.js",exportName:"lesson37"},{period:"38",week:"8",title:"BÀI 18: LUYỆN TẬP CHUNG (TIẾT 1)",topic:"Luyện tập chung",modulePath:"./38/index.js",exportName:"lesson38"},{period:"39",week:"8",title:"BÀI 18: LUYỆN TẬP CHUNG (TIẾT 2)",topic:"Luyện tập chung",modulePath:"./39/index.js",exportName:"lesson39"},{period:"40",week:"8",title:"BÀI 19: PHÉP CỘNG SỐ THẬP PHÂN (TIẾT 1)",topic:"Số thập phân",modulePath:"./40/index.js",exportName:"lesson40"},{period:"41",week:"9",title:"BÀI 19: PHÉP CỘNG SỐ THẬP PHÂN (TIẾT 2 - LUYỆN TẬP)",topic:"Số thập phân",modulePath:"./41/index.js",exportName:"lesson41"},...ve.filter(e=>e.period!=="1"&&e.period!=="2"&&e.period!=="3"&&e.period!=="4"&&e.period!=="5"&&e.period!=="6"&&e.period!=="7"&&e.period!=="8"&&e.period!=="9"&&e.period!=="10"&&e.period!=="11"&&e.period!=="12"&&e.period!=="13"&&e.period!=="14"&&e.period!=="15"&&e.period!=="16"&&e.period!=="17"&&e.period!=="18"&&e.period!=="19"&&e.period!=="20"&&e.period!=="21"&&e.period!=="22"&&e.period!=="23"&&e.period!=="24"&&e.period!=="25"&&e.period!=="26"&&e.period!=="27"&&e.period!=="28"&&e.period!=="29"&&e.period!=="30"&&e.period!=="31"&&e.period!=="32"&&e.period!=="33"&&e.period!=="34"&&e.period!=="35"&&e.period!=="36"&&e.period!=="37"&&e.period!=="38"&&e.period!=="39"&&e.period!=="40"&&e.period!=="41"&&e.period!=="42"&&e.period!=="43"&&e.period!=="44"&&e.period!=="45"&&e.period!=="46"&&e.period!=="47"&&e.period!=="48"&&e.period!=="49"&&e.period!=="50"&&e.period!=="51"&&e.period!=="52"&&e.period!=="53"&&e.period!=="54"&&e.period!=="55"&&e.period!=="56"&&e.period!=="57"&&e.period!=="58"&&e.period!=="59"&&e.period!=="60"&&e.period!=="61"&&e.period!=="62"&&e.period!=="67"&&e.period!=="68"&&e.period!=="69"&&e.period!=="70"&&e.period!=="76"&&e.period!=="77"&&e.period!=="78"&&e.period!=="79"&&e.period!=="80"&&e.period!=="81"&&e.period!=="82"&&e.period!=="83"&&e.period!=="84"&&e.period!=="85"&&e.period!=="86"&&e.period!=="87"&&e.period!=="88"&&e.period!=="89"&&e.period!=="90"&&e.period!=="92"&&e.period!=="93"&&e.period!=="94"&&e.period!=="95"&&e.period!=="96"&&e.period!=="97"&&e.period!=="98"&&e.period!=="99"&&e.period!=="100"&&e.period!=="101"&&e.period!=="102"&&e.period!=="103"&&e.period!=="104"&&e.period!=="105"&&e.period!=="106"&&e.period!=="107"&&e.period!=="108"&&e.period!=="109"&&e.period!=="110"),{period:"57",week:"12",title:"BÀI 25: HÌNH TAM GIÁC. DIỆN TÍCH HÌNH TAM GIÁC (TIẾT 2)",topic:"Hình học",modulePath:"./57/index.js",exportName:"lesson57"},{period:"58",week:"12",title:"BÀI 25: HÌNH TAM GIÁC. DIỆN TÍCH HÌNH TAM GIÁC (TIẾT 3)",topic:"Hình học",modulePath:"./58/index.js",exportName:"lesson58"},{period:"59",week:"12",title:"BÀI 25: HÌNH TAM GIÁC. DIỆN TÍCH HÌNH TAM GIÁC (TIẾT 4)",topic:"Hình học",modulePath:"./59/index.js",exportName:"lesson59"},{period:"60",week:"12",title:"BÀI 26: HÌNH THANG. DIỆN TÍCH HÌNH THANG (TIẾT 1)",topic:"Hình học",modulePath:"./60/index.js",exportName:"lesson60"},{period:"61",week:"13",title:"BÀI 26: HÌNH THANG (TIẾT 2 - VẼ HÌNH THANG)",topic:"Hình học",modulePath:"./61/index.js",exportName:"lesson61"},{period:"62",week:"13",title:"BÀI 26: HÌNH THANG. DIỆN TÍCH HÌNH THANG (TIẾT 3)",topic:"Hình học",modulePath:"./62/index.js",exportName:"lesson62"},{period:"92",week:"19",title:"BÀI 36: TỈ SỐ. TỈ SỐ PHẦN TRĂM (TIẾT 2)",topic:"Tỉ số và các bài toán liên quan",modulePath:"./92/index.js",exportName:"lesson92"},{period:"93",week:"19",title:"BÀI 37: TỈ LỆ BẢN ĐỒ VÀ ỨNG DỤNG (TIẾT 1)",topic:"Tỉ lệ bản đồ và ứng dụng",modulePath:"./93/index.js",exportName:"lesson93"},{period:"94",week:"19",title:"BÀI 37: TỈ LỆ BẢN ĐỒ VÀ ỨNG DỤNG (TIẾT 2)",topic:"Tỉ lệ bản đồ và ứng dụng",modulePath:"./94/index.js",exportName:"lesson94"},{period:"95",week:"19",title:"BÀI 38: TÌM HAI SỐ KHI BIẾT TỔNG VÀ TỈ SỐ CỦA HAI SỐ ĐÓ (TIẾT 1)",topic:"Tổng và tỉ số",modulePath:"./95/index.js",exportName:"lesson95"},{period:"96",week:"20",title:"BÀI 38: TÌM HAI SỐ KHI BIẾT TỔNG VÀ TỈ SỐ CỦA HAI SỐ ĐÓ (TIẾT 2)",topic:"Tổng và tỉ số",modulePath:"./96/index.js",exportName:"lesson96"},{period:"97",week:"20",title:"BÀI 39: TÌM HAI SỐ KHI BIẾT HIỆU VÀ TÌM TỈ SỐ CỦA HAI SỐ ĐÓ (TIẾT 1)",topic:"Hiệu và tỉ số",modulePath:"./97/index.js",exportName:"lesson97"},{period:"98",week:"20",title:"BÀI 39: TÌM HAI SỐ KHI BIẾT HIỆU VÀ TỈ SỐ CỦA HAI SỐ ĐÓ (TIẾT 2)",topic:"Hiệu và tỉ số",modulePath:"./98/index.js",exportName:"lesson98"},{period:"99",week:"20",title:"BÀI 40: TÌM TỈ SỐ PHẦN TRĂM CỦA HAI SỐ (TIẾT 1)",topic:"Tỉ số phần trăm",modulePath:"./99/index.js",exportName:"lesson99"},{period:"100",week:"20",title:"Bài 40. Tìm tỉ số phần trăm của hai số (tiết 2)",topic:"Tỉ số phần trăm",modulePath:"./100/index.js",exportName:"lesson100"},{period:"101",week:"21",title:"Bài 41. Tìm giá trị phần trăm của một số (tiết 1)",topic:"Tỉ số phần trăm",modulePath:"./101/index.js",exportName:"lesson101"},{period:"102",week:"21",title:"Bài 41. Tìm giá trị phần trăm của một số (tiết 2)",topic:"Tỉ số phần trăm",modulePath:"./102/index.js",exportName:"lesson102"},{period:"103",week:"21",title:"Bài 42. Máy tính cầm tay (tiết 1)",topic:"Máy tính cầm tay",modulePath:"./103/index.js",exportName:"lesson103"},{period:"104",week:"21",title:"Bài 42. Máy tính cầm tay (tiết 2)",topic:"Máy tính cầm tay",modulePath:"./104/index.js",exportName:"lesson104"},{period:"105",week:"21",title:"Bài 43. Thực hành và trải nghiệm sử dụng máy tính cầm tay",topic:"Máy tính cầm tay",modulePath:"./105/index.js",exportName:"lesson105"},{period:"106",week:"22",title:"Bài 44. Luyện tập chung (tiết 1)",topic:"Luyện tập chung",modulePath:"./106/index.js",exportName:"lesson106"},{period:"107",week:"22",title:"Bài 44. Luyện tập chung (tiết 2)",topic:"Luyện tập chung",modulePath:"./107/index.js",exportName:"lesson107"},{period:"108",week:"22",title:"Bài 45. Thể tích của một hình",topic:"Thể tích của một hình",modulePath:"./108/index.js",exportName:"lesson108"},{period:"109",week:"22",title:"Bài 46. Xăng-ti-mét khối. Đề-xi-mét khối (tiết 1)",topic:"Đơn vị đo thể tích",modulePath:"./109/index.js",exportName:"lesson109"},{period:"110",week:"22",title:"Bài 46. Xăng-ti-mét khối. Đề-xi-mét khối (tiết 2)",topic:"Đơn vị đo thể tích",modulePath:"./110/index.js",exportName:"lesson110"},{period:"76",week:"16",title:"BÀI 30: ÔN TẬP SỐ THẬP PHÂN (TIẾT 3)",topic:"Ôn tập số thập phân",modulePath:"./76/index.js",exportName:"lesson76"},{period:"77",week:"16",title:"BÀI 31: ÔN TẬP CÁC PHÉP TÍNH VỚI SỐ THẬP PHÂN (TIẾT 1)",topic:"Ôn tập phép tính",modulePath:"./77/index.js",exportName:"lesson77"},{period:"78",week:"16",title:"BÀI 31: ÔN TẬP CÁC PHÉP TÍNH VỚI SỐ THẬP PHÂN (TIẾT 2)",topic:"Ôn tập phép tính",modulePath:"./78/index.js",exportName:"lesson78"},{period:"79",week:"16",title:"BÀI 31: ÔN TẬP CÁC PHÉP TÍNH VỚI SỐ THẬP PHÂN (TIẾT 3)",topic:"Ôn tập phép tính",modulePath:"./79/index.js",exportName:"lesson79"},{period:"80",week:"16",title:"BÀI 31: ÔN TẬP CÁC PHÉP TÍNH VỚI SỐ THẬP PHÂN (TIẾT 4)",topic:"Ôn tập phép tính",modulePath:"./80/index.js",exportName:"lesson80"},{period:"81",week:"17",title:"BÀI 32: ÔN TẬP MỘT SỐ HÌNH PHẲNG (TIẾT 1)",topic:"Ôn tập hình học",modulePath:"./81/index.js",exportName:"lesson81"},{period:"82",week:"17",title:"BÀI 32: ÔN TẬP MỘT SỐ HÌNH PHẲNG (TIẾT 2)",topic:"Ôn tập hình học",modulePath:"./82/index.js",exportName:"lesson82"},{period:"83",week:"17",title:"BÀI 33: ÔN TẬP DIỆN TÍCH, CHU VI MỘT SỐ HÌNH PHẲNG (TIẾT 1)",topic:"Ôn tập hình học",modulePath:"./83/index.js",exportName:"lesson83"},{period:"84",week:"17",title:"BÀI 33: ÔN TẬP DIỆN TÍCH, CHU VI MỘT SỐ HÌNH PHẲNG (TIẾT 2)",topic:"Ôn tập hình học",modulePath:"./84/index.js",exportName:"lesson84"},{period:"85",week:"17",title:"BÀI 33: ÔN TẬP DIỆN TÍCH, CHU VI MỘT SỐ HÌNH PHẲNG (TIẾT 3)",topic:"Ôn tập hình học",modulePath:"./85/index.js",exportName:"lesson85"},{period:"86",week:"18",title:"BÀI 34: ÔN TẬP ĐO LƯỜNG (TIẾT 1)",topic:"Ôn tập đo lường",modulePath:"./86/index.js",exportName:"lesson86"},{period:"87",week:"18",title:"BÀI 34: ÔN TẬP ĐO LƯỜNG (TIẾT 2)",topic:"Ôn tập đo lường",modulePath:"./87/index.js",exportName:"lesson87"},{period:"88",week:"18",title:"BÀI 35: ÔN TẬP CHUNG (TIẾT 1)",topic:"Ôn tập chung",modulePath:"./88/index.js",exportName:"lesson88"},{period:"89",week:"18",title:"BÀI 35: ÔN TẬP CHUNG (TIẾT 2)",topic:"Ôn tập chung",modulePath:"./89/index.js",exportName:"lesson89"},{period:"90",week:"18",title:"BÀI 35: ÔN TẬP CHUNG (TIẾT 3)",topic:"Ôn tập chung",modulePath:"./90/index.js",exportName:"lesson90"},{period:"42",week:"9",title:"BÀI 20: PHÉP TRỪ SỐ THẬP PHÂN (TIẾT 1)",topic:"Số thập phân",modulePath:"./42/index.js",exportName:"lesson42"},{period:"43",week:"9",title:"BÀI 20: PHÉP TRỪ SỐ THẬP PHÂN (TIẾT 2)",topic:"Số thập phân",modulePath:"./43/index.js",exportName:"lesson43"},{period:"44",week:"9",title:"BÀI 21: PHÉP NHÂN SỐ THẬP PHÂN (TIẾT 1)",topic:"Số thập phân",modulePath:"./44/index.js",exportName:"lesson44"},{period:"45",week:"9",title:"BÀI 21: PHÉP NHÂN SỐ THẬP PHÂN (TIẾT 2)",topic:"Số thập phân",modulePath:"./45/index.js",exportName:"lesson45"},{period:"46",week:"10",title:"BÀI 21: PHÉP NHÂN SỐ THẬP PHÂN (TIẾT 3)",topic:"Số thập phân",modulePath:"./46/index.js",exportName:"lesson46"},{period:"47",week:"10",title:"BÀI 22: PHÉP CHIA SỐ THẬP PHÂN (TIẾT 1)",topic:"Số thập phân",modulePath:"./47/index.js",exportName:"lesson047"},{period:"48",week:"10",title:"BÀI 22: PHÉP CHIA SỐ THẬP PHÂN (TIẾT 2)",topic:"Số thập phân",modulePath:"./48/index.js",exportName:"lesson048"},{period:"49",week:"10",title:"BÀI 22: PHÉP CHIA SỐ THẬP PHÂN (TIẾT 3)",topic:"Số thập phân",modulePath:"./49/index.js",exportName:"lesson049"},{period:"50",week:"10",title:"BÀI 22: PHÉP CHIA SỐ THẬP PHÂN (TIẾT 4)",topic:"Số thập phân",modulePath:"./50/index.js",exportName:"lesson050"},{period:"51",week:"11",title:"BÀI 23: NHÂN, CHIA SỐ THẬP PHÂN VỚI 10; 100; 1 000;... HOẶC VỚI 0,1; 0,01; 0,001;... (TIẾT 1)",topic:"Số thập phân",modulePath:"./51/index.js",exportName:"lesson51"},{period:"52",week:"11",title:"BÀI 23: NHÂN, CHIA SỐ THẬP PHÂN VỚI 10; 100; 1000;... HOẶC VỚI 0,1; 0,01; 0,001… (TIẾT 2)",topic:"Số thập phân",modulePath:"./52/index.js",exportName:"lesson052"},{period:"53",week:"11",title:"BÀI 24: LUYỆN TẬP CHUNG (TIẾT 1)",topic:"Số thập phân",modulePath:"./53/index.js",exportName:"lesson53"},{period:"54",week:"11",title:"BÀI 24: LUYỆN TẬP CHUNG (TIẾT 2)",topic:"Số thập phân",modulePath:"./54/index.js",exportName:"lesson054"},{period:"55",week:"11",title:"BÀI 24: LUYỆN TẬP CHUNG (TIẾT 3)",topic:"Số thập phân",modulePath:"./55/index.js",exportName:"lesson55"},{period:"56",week:"12",title:"BÀI 25: HÌNH TAM GIÁC. DIỆN TÍCH HÌNH TAM GIÁC (TIẾT 1)",topic:"Hình học",modulePath:"./56/index.js",exportName:"lesson56"},{period:"111",week:"23",title:"BÀI 47: MÉT KHỐI",topic:"Hình học và Đo lường",modulePath:"./111/index.js",exportName:"lesson111"},{period:"112",week:"23",title:"LUYỆN TẬP: MÉT KHỐI",topic:"Hình học và Đo lường",modulePath:"./112/index.js",exportName:"lesson112"},{period:"113",week:"23",title:"LUYỆN TẬP CHUNG (Tiết 1)",topic:"Hình học và Đo lường",modulePath:"./113/index.js",exportName:"lesson113"},{period:"114",week:"23",title:"LUYỆN TẬP CHUNG (Tiết 2)",topic:"Hình học và Đo lường",modulePath:"./114/index.js",exportName:"lesson114"},{period:"115",week:"23",title:"HÌNH KHAI TRIỂN CỦA HLP, HHCN VÀ HÌNH TRỤ",topic:"Hình học và Đo lường",modulePath:"./115/index.js",exportName:"lesson115"},{period:"116",week:"24",title:"HÌNH KHAI TRIỂN CỦA HÌNH HỘP CHỮ NHẬT, HÌNH LẬP PHƯƠNG, HÌNH TRỤ",topic:"Hình học và Đo lường",modulePath:"./116/index.js",exportName:"lesson116"},{period:"117",week:"24",title:"Bài 50. Diện tích xung quanh và diện tích toàn phần của hình hộp chữ nhật (tiết 1)",topic:"Hình học và Đo lường",modulePath:"./117/index.js",exportName:"lesson117"},{period:"118",week:"24",title:"Bài 50. Diện tích xung quanh và diện tích toàn phần của hình hộp chữ nhật (tiết 2)",topic:"Hình học và Đo lường",modulePath:"./118/index.js",exportName:"lesson118"},{period:"119",week:"24",title:"Bài 50. Diện tích xung quanh và diện tích toàn phần của hình hộp chữ nhật (tiết 3)",topic:"Hình học và Đo lường",modulePath:"./119/index.js",exportName:"lesson119"},{period:"120",week:"24",title:"Bài 51. Diện tích xung quanh và diện tích toàn phần của hình lập phương (tiết 1)",topic:"Hình học và Đo lường",modulePath:"./120/index.js",exportName:"lesson120"},{period:"120B",week:"24",title:"ÔN TẬP: CỘNG, TRỪ, NHÂN, CHIA SỐ THẬP PHÂN",topic:"Số thập phân",modulePath:"./120B/index.js",exportName:"lesson120B"},{period:"120C",week:"24",title:"ÔN TẬP: CỘNG, TRỪ, NHÂN, CHIA SỐ THẬP PHÂN (NÂNG CAO)",topic:"Số thập phân",modulePath:"./120C/index.js",exportName:"lesson120C"},{period:"121",week:"25",title:"BÀI 49: LUYỆN TẬP",topic:"Hình học và Đo lường",modulePath:"./121/index.js",exportName:"lesson121"},{period:"122",week:"25",title:"THỂ TÍCH CỦA HÌNH HỘP CHỮ NHẬT",topic:"Hình học và Đo lường",modulePath:"./122/index.js",exportName:"lesson122"},{period:"123",week:"25",title:"Bài 52. Luyện tập: Thể tích hình hộp chữ nhật",topic:"Toán học",modulePath:"./123/index.js",exportName:"lesson123"},{period:"124",week:"25",title:"Bài 53. Thể tích hình lập phương",topic:"Toán học",modulePath:"./124/index.js",exportName:"lesson124"},{period:"124CD",week:"25",title:"Bài 53. Thể tích hình lập phương (Bản CD)",topic:"Toán học",modulePath:"./124CD/index.js",exportName:"lesson124CD",hidden:!0},{period:"125",week:"25",title:"BÀI 53. LUYỆN TẬP (TIẾT 2)",topic:"Hình học và Đo lường",modulePath:"./125/index.js",exportName:"lesson125"},{period:"126",week:"26",title:"BÀI 54. THỰC HÀNH TÍNH TOÁN VÀ ƯỚC LƯỢNG THỂ TÍCH MỘT SỐ HÌNH KHỐI",topic:"Hình học và Đo lường",modulePath:"./126/index.js",exportName:"lesson126"},{period:"127",week:"26",title:"BÀI 55. LUYỆN TẬP CHUNG (TIẾT 1)",topic:"Hình học và Đo lường",modulePath:"./127/index.js",exportName:"lesson127"},{period:"128",week:"26",title:"BÀI 55. LUYỆN TẬP CHUNG (TIẾT 2)",topic:"Hình học và Đo lường",modulePath:"./128/index.js",exportName:"lesson128"},{period:"129",week:"26",title:"BÀI 55. LUYỆN TẬP CHUNG (TIẾT 3)",topic:"Hình học và Đo lường",modulePath:"./129/index.js",exportName:"lesson129"},{period:"130",week:"26",title:"BÀI 56: CÁC ĐƠN VỊ ĐO THỜI GIAN",topic:"Số đo thời gian",modulePath:"./130/index.js",exportName:"lesson130"},{period:"131",week:"27",title:"BÀI 57: CỘNG, TRỪ SỐ ĐO THỜI GIAN (TIẾT 1)",topic:"Số đo thời gian",modulePath:"./131/index.js",exportName:"lesson131"},{period:"132",week:"27",title:"BÀI 57: CỘNG, TRỪ SỐ ĐO THỜI GIAN (TIẾT 2)",topic:"Số đo thời gian",modulePath:"./132/index.js",exportName:"lesson132"},{period:"133",week:"27",title:"BÀI 58: NHÂN, CHIA SỐ ĐO THỜI GIAN VỚI MỘT SỐ (TIẾT 1)",topic:"Số đo thời gian",modulePath:"./133/index.js",exportName:"lesson133"},{period:"134",week:"27",title:"BÀI 58: NHÂN, CHIA SỐ ĐO THỜI GIAN VỚI MỘT SỐ (TIẾT 2)",topic:"Số đo thời gian",modulePath:"./134/index.js",exportName:"lesson134"},{period:"135",week:"27",title:"BÀI 58: NHÂN, CHIA SỐ ĐO THỜI GIAN VỚI MỘT SỐ (TIẾT 3)",topic:"Số đo thời gian",modulePath:"./135/index.js",exportName:"lesson135"},{period:"136",week:"28",title:"BÀI 59: VẬN TỐC CỦA MỘT CHUYỂN ĐỘNG ĐỀU (TIẾT 1)",topic:"Số đo thời gian",modulePath:"./136/index.js",exportName:"lesson136"},{period:"137",week:"28",title:"BÀI 59: VẬN TỐC CỦA MỘT CHUYỂN ĐỘNG ĐỀU (TIẾT 2)",topic:"Số đo thời gian",modulePath:"./137/index.js",exportName:"lesson137"},{period:"138",week:"28",title:"BÀI 60: QUÃNG ĐƯỜNG, THỜI GIAN CỦA MỘT CHUYỂN ĐỘNG ĐỀU (TIẾT 1)",topic:"Số đo thời gian",modulePath:"./138/index.js",exportName:"lesson138"},{period:"139",week:"28",title:"BÀI 60: QUÃNG ĐƯỜNG, THỜI GIAN CỦA MỘT CHUYỂN ĐỘNG ĐỀU (TIẾT 2)",topic:"Số đo thời gian",modulePath:"./139/index.js",exportName:"lesson139"},{period:"140",week:"28",title:"BÀI 60: QUÃNG ĐƯỜNG, THỜI GIAN CỦA MỘT CHUYỂN ĐỘNG ĐỀU (TIẾT 3)",topic:"Số đo thời gian",modulePath:"./140/index.js",exportName:"lesson140"},{period:"140B",week:"28",title:"LUYỆN TẬP CHUNG: VẬN TỐC, QUÃNG ĐƯỜNG, THỜI GIAN",topic:"Số đo thời gian",modulePath:"./140B/index.js",exportName:"lesson140B"},{period:"140C",week:"28",title:"LUYỆN TẬP CHUNG: VẬN TỐC, QUÃNG ĐƯỜNG, THỜI GIAN (BÀI TẬP MỚI)",topic:"Số đo thời gian",modulePath:"./140C/index.js",exportName:"lesson140C"},{period:"141",week:"29",title:"BÀI 61: THỰC HÀNH TÍNH TOÁN VÀ ƯỚC LƯỢNG VỀ VẬN TỐC, QUÃNG ĐƯỜNG, THỜI GIAN TRONG CHUYỂN ĐỘNG ĐỀU (TIẾT 1)",topic:"Số đo thời gian",modulePath:"./141/index.js",exportName:"lesson141"},{period:"142",week:"29",title:"BÀI 61: THỰC HÀNH TÍNH TOÁN VÀ ƯỚC LƯỢNG VỀ VẬN TỐC, QUÃNG ĐƯỜNG, THỜI GIAN TRONG CHUYỂN ĐỘNG ĐỀU (TIẾT 2)",topic:"Số đo thời gian",modulePath:"./142/index.js",exportName:"lesson142"},{period:"143",week:"29",title:"BÀI 62: LUYỆN TẬP CHUNG (TIẾT 1)",topic:"Số đo thời gian",modulePath:"./143/index.js",exportName:"lesson143"},{period:"144",week:"29",title:"BÀI 62: LUYỆN TẬP CHUNG (TIẾT 2)",topic:"Số đo thời gian",modulePath:"./144/index.js",exportName:"lesson144"},{period:"145",week:"29",title:"BÀI 62: LUYỆN TẬP CHUNG (TIẾT 3)",topic:"Số đo thời gian",modulePath:"./145/index.js",exportName:"lesson145"},{period:"146",week:"30",title:"BÀI 63: THU THẬP, PHÂN LOẠI, SẮP XẾP CÁC SỐ LIỆU",topic:"Số liệu và Biểu đồ",modulePath:"./146/index.js",exportName:"lesson146"},{period:"147",week:"30",title:"BÀI 64: BIỂU ĐỒ HÌNH QUẠT TRÒN (TIẾT 1)",topic:"Số liệu và Biểu đồ",modulePath:"./147/index.js",exportName:"lesson147"},{period:"148",week:"30",title:"BÀI 64: BIỂU ĐỒ HÌNH QUẠT TRÒN (TIẾT 2)",topic:"Số liệu và Biểu đồ",modulePath:"./148/index.js",exportName:"lesson148"},{period:"149",week:"30",title:"BÀI 65: TỈ SỐ CỦA SỐ LẶP LẠI MỘT SỰ KIỆN SO VỚI TỔNG SỐ LẦN THỰC HIỆN",topic:"Số liệu và Biểu đồ",modulePath:"./149/index.js",exportName:"lesson149"},{period:"150",week:"30",title:"BÀI 66: THỰC HÀNH VÀ TRẢI NGHIỆM: THU THẬP, PHÂN TÍCH, BIỂU DIỄN CÁC SỐ LIỆU THỐNG KÊ",topic:"Số liệu và Biểu đồ",modulePath:"./150/index.js",exportName:"lesson150"},{period:"151",week:"31",title:"BÀI 66: THỰC HÀNH VÀ TRẢI NGHIỆM: THU THẬP, PHÂN TÍCH, BIỂU DIỄN CÁC SỐ LIỆU THỐNG KÊ (TIẾT 2)",topic:"Số liệu và Biểu đồ",modulePath:"./151/index.js",exportName:"lesson151"},{period:"152",week:"31",title:"BÀI 67: LUYỆN TẬP CHUNG",topic:"Số liệu và Biểu đồ",modulePath:"./152/index.js",exportName:"lesson152"},{period:"153",week:"31",title:"BÀI 68: ÔN TẬP SỐ TỰ NHIÊN (TIẾT 1)",topic:"Số tự nhiên",modulePath:"./153/index.js",exportName:"lesson153"},{period:"154",week:"31",title:"BÀI 68: ÔN TẬP VỀ PHÂN SỐ VÀ HỖN SỐ (TIẾT 2)",topic:"Phân số",modulePath:"./154/index.js",exportName:"lesson154"},{period:"155",week:"31",title:"BÀI 68: ÔN TẬP SỐ TỰ NHIÊN, PHÂN SỐ, SỐ THẬP PHÂN (TIẾT 3)",topic:"Ôn tập số thập phân",modulePath:"./155/index.js",exportName:"lesson155"},{period:"156",week:"32",title:"BÀI 69: ÔN TẬP CÁC PHÉP TÍNH VỚI SỐ TỰ NHIÊN, PHÂN SỐ, SỐ THẬP PHÂN (TIẾT 1)",topic:"Ôn tập các phép tính",modulePath:"./156/index.js",exportName:"lesson156"},{period:"157",week:"32",title:"BÀI 69: ÔN TẬP CÁC PHÉP TÍNH VỚI SỐ TỰ NHIÊN, PHÂN SỐ, SỐ THẬP PHÂN (TIẾT 2)",topic:"Ôn tập các phép tính",modulePath:"./157/index.js",exportName:"lesson157"},{period:"158",week:"32",title:"BÀI 69: ÔN TẬP CÁC PHÉP TÍNH VỚI SỐ TỰ NHIÊN, PHÂN SỐ, SỐ THẬP PHÂN (TIẾT 3)",topic:"Ôn tập các phép tính",modulePath:"./158/index.js",exportName:"lesson158"},{period:"159",week:"32",title:"BÀI 69: ÔN TẬP CÁC PHÉP TÍNH VỚI SỐ TỰ NHIÊN, PHÂN SỐ, SỐ THẬP PHÂN (TIẾT 4)",topic:"Ôn tập các phép tính",modulePath:"./159/index.js",exportName:"lesson159"},{period:"160",week:"32",title:"BÀI 70: ÔN TẬP TỈ SỐ, TỈ SỐ PHẦN TRĂM (TIẾT 1)",topic:"Ôn tập tỉ số",modulePath:"./160/index.js",exportName:"lesson160"},{period:"161",week:"33",title:"BÀI 70: ÔN TẬP TỈ SỐ, TỈ SỐ PHẦN TRĂM (TIẾT 2)",topic:"Ôn tập tỉ số",modulePath:"./161/index.js",exportName:"lesson161"},{period:"162",week:"33",title:"BÀI 71: ÔN TẬP HÌNH HỌC (TIẾT 1)",topic:"Hình học",modulePath:"./162/index.js",exportName:"lesson162"},{period:"163",week:"33",title:"BÀI 71: ÔN TẬP HÌNH HỌC (TIẾT 2)",topic:"Hình học",modulePath:"./163/index.js",exportName:"lesson163"},{period:"164",week:"33",title:"BÀI 71: ÔN TẬP HÌNH HỌC (TIẾT 3)",topic:"Hình học",modulePath:"./164/index.js",exportName:"lesson164"},{period:"165",week:"33",title:"BÀI 71: ÔN TẬP HÌNH HỌC (TIẾT 4)",topic:"Hình học",modulePath:"./165/index.js",exportName:"lesson165"},{period:"166",week:"34",title:"BÀI 72: ÔN TẬP ĐO LƯỜNG (TIẾT 1)",topic:"Đo lường",modulePath:"./166/index.js",exportName:"lesson166"},{period:"167",week:"34",title:"BÀI 72: ÔN TẬP ĐO LƯỜNG (TIẾT 2)",topic:"Đo lường",modulePath:"./167/index.js",exportName:"lesson167"},{period:"168",week:"34",title:"BÀI 73: ÔN TẬP TOÁN CHUYỂN ĐỘNG ĐỀU (TIẾT 1)",topic:"Chuyển động đều",modulePath:"./168/index.js",exportName:"lesson168"},{period:"169",week:"34",title:"BÀI 73: ÔN TẬP TOÁN CHUYỂN ĐỘNG ĐỀU (TIẾT 2)",topic:"Chuyển động đều",modulePath:"./169/index.js",exportName:"lesson169"},{period:"170",week:"34",title:"BÀI 74: ÔN TẬP THỐNG KÊ VÀ XÁC SUẤT (TIẾT 1)",topic:"Thống kê và Xác suất",modulePath:"./170/index.js",exportName:"lesson170"},{period:"171",week:"35",title:"BÀI 74: ÔN TẬP THỐNG KÊ VÀ XÁC SUẤT (TIẾT 2)",topic:"Thống kê và Xác suất",modulePath:"./171/index.js",exportName:"lesson171"},{period:"172",week:"35",title:"BÀI 75: ÔN TẬP CHUNG (TIẾT 1)",topic:"Ôn tập chung",modulePath:"./172/index.js",exportName:"lesson172"},{period:"173",week:"35",title:"BÀI 75: ÔN TẬP CHUNG (TIẾT 2)",topic:"Ôn tập chung",modulePath:"./173/index.js",exportName:"lesson173"},{period:"174",week:"35",title:"BÀI 75: ÔN TẬP CHUNG (TIẾT 3)",topic:"Ôn tập chung",modulePath:"./174/index.js",exportName:"lesson174"},{period:"175",week:"35",title:"BÀI 75: ÔN TẬP CHUNG (TIẾT 4)",topic:"Ôn tập chung",modulePath:"./175/index.js",exportName:"lesson175"}],ke=ye.map(e=>({...e,id:String(e.period)})),Te=[{id:"vn-1",period:"1",week:"1",title:"ĐỌC: THANH ÂM CỦA GIÓ",topic:"Tiếng Việt",modulePath:"./1/index.js",exportName:"lesson001"},{id:"vn-2",period:"2",week:"1",title:"LTVC: LUYỆN TẬP VỀ DANH TỪ, ĐỘNG TỪ, TÍNH TỪ",topic:"LTVC",modulePath:"./2/index.js",exportName:"lesson002"},{id:"vn-3",period:"3",week:"1",title:"VIẾT: TÌM HIỂU CÁCH VIẾT BÀI VĂN KỂ CHUYỆN SÁNG TẠO",topic:"Viết",modulePath:"./3/index.js",exportName:"lesson003"},{id:"vn-4",period:"4-5",week:"1",title:"ĐỌC: CÁNH ĐỒNG HOA",topic:"Tiếng Việt",modulePath:"./4/index.js",exportName:"lesson004"},{id:"vn-6",period:"6",week:"1",title:"VIẾT: TÌM HIỂU CÁCH VIẾT BÀI VĂN KỂ CHUYỆN SÁNG TẠO (TIẾP THEO)",topic:"Viết",modulePath:"./6/index.js",exportName:"lesson006"},{id:"vn-7",period:"7",week:"1",title:"ĐỌC MỞ RỘNG: ĐỌC CÂU CHUYỆN VỀ THẾ GIỚI TUỔI THƠ",topic:"DMR",modulePath:"./7/index.js",exportName:"lesson007"},{id:"vn-8",period:"8",week:"2",title:"ĐỌC: TUỔI NGỰA",topic:"Tiếng Việt",modulePath:"./8/index.js",exportName:"lesson008"},{id:"vn-9",period:"9",week:"2",title:"LUYỆN TỪ VÀ CÂU: ĐẠI TỪ",topic:"LTVC",modulePath:"./9/index.js",exportName:"lesson009"},{id:"vn-10",period:"10",week:"2",title:"VIẾT: LẬP DÀN Ý CHO BÀI VĂN KỂ CHUYỆN SÁNG TẠO",topic:"Viết",modulePath:"./10/index.js",exportName:"lesson010"},{id:"vn-11",period:"11-12",week:"2",title:"ĐỌC: BẾN SÔNG TUỔI THƠ",topic:"Tiếng Việt",modulePath:"./11/index.js",exportName:"lesson011"},{id:"vn-13",period:"13",week:"2",title:"VIẾT: VIẾT BÀI VĂN KỂ CHUYỆN SÁNG TẠO",topic:"Viết",modulePath:"./13/index.js",exportName:"lesson013"},{id:"vn-14",period:"14",week:"2",title:"NÓI VÀ NGHE: NHỮNG CÂU CHUYỆN THÚ VỊ",topic:"Nói & Nghe",modulePath:"./14/index.js",exportName:"lesson014"},{id:"vn-15",period:"15",week:"3",title:"ĐỌC: TIẾNG HẠT NẢY MẦM",topic:"Tiếng Việt",modulePath:"./15/index.js",exportName:"lesson015"},{id:"vn-16",period:"16",week:"3",title:"LTVC: LUYỆN TẬP VỀ ĐẠI TỪ",topic:"LTVC",modulePath:"./16/index.js",exportName:"lesson016"},{id:"vn-17",period:"17",week:"3",title:"VIẾT: ĐÁNH GIÁ, CHỈNH SỬA BÀI VĂN KỂ CHUYỆN SÁNG TẠO",topic:"Viết",modulePath:"./17/index.js",exportName:"lesson017"},{id:"vn-18",period:"18-19",week:"3",title:"ĐỌC: NGÔI SAO SÂN CỎ",topic:"Tiếng Việt",modulePath:"./18/index.js",exportName:"lesson018"},{id:"vn-20",period:"20",week:"3",title:"VIẾT: TÌM HIỂU CÁCH VIẾT BÁO CÁO CÔNG VIỆC",topic:"Viết",modulePath:"./20/index.js",exportName:"lesson020"},{id:"vn-21",period:"21",week:"3",title:"ĐỌC MỞ RỘNG: ĐỌC BÀI THƠ VIẾT VỀ TRẺ EM",topic:"DMR",modulePath:"./21/index.js",exportName:"lesson021"},{id:"vn-22",period:"22",week:"4",title:"ĐỌC: BỘ SƯU TẬP ĐỘC ĐÁO",topic:"Tiếng Việt",modulePath:"./22/index.js",exportName:"lesson022"},{id:"vn-23",period:"23",week:"4",title:"LTVC: LUYỆN TẬP VỀ ĐẠI TỪ (TIẾP THEO)",topic:"LTVC",modulePath:"./23/index.js",exportName:"lesson023"},{id:"vn-24",period:"24",week:"4",title:"VIẾT: VIẾT BÁO CÁO CÔNG VIỆC",topic:"Viết",modulePath:"./24/index.js",exportName:"lesson024"},{id:"vn-25",period:"25-26",week:"4",title:"ĐỌC: HÀNH TINH KÌ LẠ",topic:"Tiếng Việt",modulePath:"./25/index.js",exportName:"lesson025"},{id:"vn-27",period:"27",week:"4",title:"VIẾT: ĐÁNH GIÁ, CHỈNH SỬA BÁO CÁO CÔNG VIỆC",topic:"Viết",modulePath:"./27/index.js",exportName:"lesson027"},{id:"vn-28",period:"28",week:"4",title:"NÓI VÀ NGHE: NHỮNG ĐIỂM VUI CHƠI LÍ THÚ",topic:"Nói & Nghe",modulePath:"./28/index.js",exportName:"lesson028"},{id:"vn-29",period:"29",week:"5",title:"ĐỌC: TRƯỚC CỔNG TRỜI",topic:"Tiếng Việt",modulePath:"./29/index.js",exportName:"lesson029"},{id:"vn-30",period:"30",week:"5",title:"LTVC: TỪ ĐỒNG NGHĨA",topic:"LTVC",modulePath:"./30/index.js",exportName:"lesson030"},{id:"vn-31",period:"31",week:"5",title:"VIẾT: TÌM HIỂU CÁCH VIẾT BÀI VĂN TẢ PHONG CẢNH",topic:"Viết",modulePath:"./31/index.js",exportName:"lesson031"},{id:"vn-32",period:"32-33",week:"5",title:"ĐỌC: KÌ DIỆU RỪNG XANH",topic:"Tiếng Việt",modulePath:"./32/index.js",exportName:"lesson032"},{id:"vn-34",period:"34",week:"5",title:"VIẾT: TÌM HIỂU CÁCH VIẾT BÀI VĂN TẢ PHONG CẢNH (TIẾP THEO)",topic:"Viết",modulePath:"./34/index.js",exportName:"lesson034"},{id:"vn-35",period:"35",week:"5",title:"ĐỌC MỞ RỘNG: ĐỌC SÁCH BÁO KHOA HỌC VỀ ĐỘNG VẬT HOANG DÃ",topic:"DMR",modulePath:"./35/index.js",exportName:"lesson035"},{id:"vn-36",period:"36",week:"6",title:"ĐỌC: HANG SƠN ĐOÒNG – NHỮNG ĐIỀU KÌ THÚ",topic:"Tiếng Việt",modulePath:"./36/index.js",exportName:"lesson036"},{id:"vn-37",period:"37",week:"6",title:"LTVC: LUYỆN TẬP VỀ TỪ ĐỒNG NGHĨA",topic:"LTVC",modulePath:"./37/index.js",exportName:"lesson037"},{id:"vn-38",period:"38",week:"6",title:"VIẾT: VIẾT MỞ BÀI VÀ KẾT BÀI CHO BÀI VĂN TẢ PHONG CẢNH",topic:"Viết",modulePath:"./38/index.js",exportName:"lesson038"},{id:"vn-39",period:"39-40",week:"6",title:"ĐỌC: NHỮNG HÒN ĐẢO TRÊN VỊNH HẠ LONG",topic:"Tiếng Việt",modulePath:"./39/index.js",exportName:"lesson039"},{id:"vn-41",period:"41",week:"6",title:"VIẾT: QUAN SÁT PHONG CẢNH",topic:"Viết",modulePath:"./41/index.js",exportName:"lesson041"},{id:"vn-42",period:"42",week:"6",title:"NÓI VÀ NGHE: BẢO TỒN ĐỘNG VẬT HOANG DÃ",topic:"Nói & Nghe",modulePath:"./42/index.js",exportName:"lesson042"},{id:"vn-43",period:"43",week:"7",title:"ĐỌC: MẦM NON",topic:"Tiếng Việt",modulePath:"./43/index.js",exportName:"lesson043"},{id:"vn-44",period:"44",week:"7",title:"LUYỆN TỪ VÀ CÂU: TỪ ĐA NGHĨA",topic:"LTVC",modulePath:"./44/index.js",exportName:"lesson044"},{id:"vn-45",period:"45",week:"7",title:"VIẾT: LẬP DÀN Ý CHO BÀI VĂN TẢ PHONG CẢNH",topic:"Viết",modulePath:"./45/index.js",exportName:"lesson045"},{id:"vn-46",period:"46-47",week:"7",title:"ĐỌC: NHỮNG NGỌN NÚI NÓNG RẪY",topic:"Tiếng Việt",modulePath:"./46/index.js",exportName:"lesson046"},{id:"vn-48",period:"48",week:"7",title:"VIẾT: VIẾT ĐOẠN VĂN TẢ PHONG CẢNH",topic:"Viết",modulePath:"./48/index.js",exportName:"lesson048"},{id:"vn-49",period:"49",week:"7",title:"ĐỌC MỞ RỘNG: TÌM HIỂU THẾ GIỚI TỰ NHIÊN",topic:"DMR",modulePath:"./49/index.js",exportName:"lesson049"},{id:"vn-50",period:"50",week:"8",title:"ĐỌC: BÀI CA VỀ MẶT TRỜI",topic:"Tiếng Việt",modulePath:"./50/index.js",exportName:"lesson050"},{id:"vn-51",period:"51",week:"8",title:"LTVC: LUYỆN TẬP VỀ TỪ ĐA NGHĨA",topic:"LTVC",modulePath:"./51/index.js",exportName:"lesson051"},{id:"vn-52",period:"52",week:"8",title:"VIẾT: VIẾT BÀI VĂN TẢ PHONG CẢNH",topic:"Viết",modulePath:"./52/index.js",exportName:"lesson052"},{id:"vn-53",period:"53-54",week:"8",title:"ĐỌC & LTVC: XIN CHÀO, XA-HA-RA",topic:"Tiếng Việt",modulePath:"./53/index.js",exportName:"lesson053"},{id:"vn-55",period:"55",week:"8",title:"VIẾT: ĐÁNH GIÁ, CHỈNH SỬA BÀI VĂN TẢ PHONG CẢNH",topic:"Viết",modulePath:"./55/index.js",exportName:"lesson055"},{id:"vn-56",period:"56",week:"8",title:"NÓI VÀ NGHE: CẢNH ĐẸP THIÊN NHIÊN",topic:"Nói & Nghe",modulePath:"./56/index.js",exportName:"lesson056"},{id:"vn-57",period:"57",week:"9",title:"ÔN TẬP GIỮA HỌC KÌ I - TIẾT 1 - 2",topic:"Tiếng Việt",modulePath:"./57/index.js",exportName:"lesson057"},{id:"vn-58",period:"58",week:"9",title:"ÔN TẬP VÀ ĐÁNH GIÁ GIỮA HKI (TIẾT 2)",topic:"Tiếng Việt",modulePath:"./58/index.js",exportName:"lesson058"},{id:"vn-59",period:"59",week:"9",title:"ÔN TẬP GIỮA HỌC KÌ I - TIẾT 3 - 4",topic:"Tiếng Việt",modulePath:"./59/index.js",exportName:"lesson059"},{id:"vn-60",period:"60-61",week:"9",title:"ÔN TẬP VÀ ĐÁNH GIÁ GIỮA HKI (TIẾT 4+5)",topic:"Tiếng Việt",modulePath:"./61/index.js",exportName:"lesson61"},{id:"vn-62",period:"62",week:"9",title:"ĐÁNH GIÁ GIỮA HỌC KÌ I - TIẾT 6 - 7",topic:"Tiếng Việt",modulePath:"./62/index.js",exportName:"lesson062"},{id:"vn-63",period:"63",week:"9",title:"KIỂM TRA ĐỌC HIỂU – VIẾT (TIẾT 7)",topic:"Viết",modulePath:"./63/index.js",exportName:"lesson063"},{id:"vn-64",period:"64",week:"10",title:"ĐỌC: THƯ GỬI CÁC HỌC SINH",topic:"Tiếng Việt",modulePath:"./64/index.js",exportName:"lesson064"},{id:"vn-65",period:"65",week:"10",title:"LTVC: SỬ DỤNG TỪ ĐIỂN",topic:"LTVC",modulePath:"./65/index.js",exportName:"lesson065"},{id:"vn-66",period:"66",week:"10",title:"VIẾT: ĐOẠN VĂN GIỚI THIỆU NHÂN VẬT & SỔ TAY TỪ NGỮ",topic:"Viết",modulePath:"./66/index.js",exportName:"lesson066"},{id:"vn-67",period:"67-68",week:"10",title:"ĐỌC: TẤM GƯƠNG TỰ HỌC",topic:"Tiếng Việt",modulePath:"./67/index.js",exportName:"lesson067"},{id:"vn-69",period:"69",week:"10",title:"VIẾT: TÌM Ý CHO ĐOẠN VĂN GIỚI THIỆU NHÂN VẬT",topic:"Viết",modulePath:"./69/index.js",exportName:"lesson069"},{id:"vn-70",period:"70",week:"10",title:"ĐỌC MỞ RỘNG: ĐỌC CÂU CHUYỆN VỀ NHÀ TRƯỜNG, THẦY CÔ, HỌC SINH",topic:"DMR",modulePath:"./70/index.js",exportName:"lesson070"},{id:"vn-71",period:"71",week:"11",title:"ĐỌC: TRẢI NGHIỆM ĐỂ SÁNG TẠO",topic:"Tiếng Việt",modulePath:"./71/index.js",exportName:"lesson071"},{id:"vn-72",period:"72",week:"11",title:"LTVC: LUYỆN TẬP SỬ DỤNG TỪ ĐIỂN",topic:"LTVC",modulePath:"./72/index.js",exportName:"lesson072"},{id:"vn-73",period:"73",week:"11",title:"VIẾT: VIẾT ĐOẠN VĂN GIỚI THIỆU NHÂN VẬT TRONG MỘT CUỐN SÁCH",topic:"Viết",modulePath:"./73/index.js",exportName:"lesson073"},{id:"vn-74",period:"74-75",week:"11",title:"ĐỌC: KHỔ LUYỆN THÀNH TÀI",topic:"Tiếng Việt",modulePath:"./74/index.js",exportName:"lesson074"},{id:"vn-76",period:"76",week:"11",title:"VIẾT: ĐÁNH GIÁ, CHỈNH SỬA ĐOẠN VĂN GIỚI THIỆU NHÂN VẬT TRONG MỘT CUỐN SÁCH",topic:"Viết",modulePath:"./76/index.js",exportName:"lesson076"},{id:"vn-77",period:"77",week:"11",title:"NÓI & NGHE: CUỐN SÁCH TÔI YÊU",topic:"Nói & Nghe",modulePath:"./77/index.js",exportName:"lesson077"},{id:"vn-78",period:"78",week:"12",title:"ĐỌC: THẾ GIỚI TRONG TRANG SÁCH",topic:"Tiếng Việt",modulePath:"./78/index.js",exportName:"lesson078"},{id:"vn-79",period:"79",week:"12",title:"LTVC: DẤU GẠCH NGANG",topic:"LTVC",modulePath:"./79/index.js",exportName:"lesson079"},{id:"vn-80",period:"80",week:"12",title:"Viết: Tìm hiểu cách viết đoạn văn thể hiện tình cảm, cảm xúc về một câu chuyện",topic:"Viết",modulePath:"./80/index.js",exportName:"lesson080"},{id:"vn-81",period:"81-82",week:"12",title:"ĐỌC: TỪ NHỮNG CÂU CHUYỆN ẤU THƠ (TIẾT 1)",topic:"Tiếng Việt",modulePath:"./81/index.js",exportName:"lesson081"},{id:"vn-82",period:"82",week:"12",title:"ĐỌC: TỪ NHỮNG CÂU CHUYỆN ẤU THƠ (TIẾT 2)",topic:"Tiếng Việt",modulePath:"./82/index.js",exportName:"lesson82"},{id:"vn-83",period:"83",week:"12",title:"VIẾT: TÌM Ý CHO ĐOẠN VĂN THỂ HIỆN TÌNH CẢM, CẢM XÚC VỀ MỘT CÂU CHUYỆN",topic:"Viết",modulePath:"./83/index.js",exportName:"lesson083"},{id:"vn-84",period:"84",week:"12",title:"ĐỌC MỞ RỘNG (TUẦN 12)",topic:"Viết",modulePath:"./84/index.js",exportName:"lesson084"},{id:"vn-85",period:"85",week:"13",title:"ĐỌC: GIỚI THIỆU SÁCH DẾ MÈN PHIÊU LƯU KÍ",topic:"Tiếng Việt",modulePath:"./85/index.js",exportName:"lesson085"},{id:"vn-86",period:"86",week:"13",title:"LUYỆN TẬP VỀ DẤU GẠCH NGANG",topic:"LTVC",modulePath:"./86/index.js",exportName:"lesson086"},{id:"vn-87",period:"87",week:"13",title:"VIẾT ĐOẠN VĂN THỂ HIỆN TÌNH CẢM, CẢM XÚC VỀ MỘT CÂU CHUYỆN",topic:"Viết",modulePath:"./87/index.js",exportName:"lesson087"},{id:"vn-88",period:"88-89",week:"13",title:"TINH THẦN HỌC TẬP CỦA NHÀ PHI-LÍT",topic:"Tiếng Việt",modulePath:"./88/index.js",exportName:"lesson088"},{id:"vn-90",period:"90",week:"13",title:"ĐÁNH GIÁ, CHỈNH SỬA ĐOẠN VĂN THỂ HIỆN TÌNH CẢM, CẢM XÚC VỀ MỘT CÂU CHUYỆN",topic:"Viết",modulePath:"./90/index.js",exportName:"lesson090"},{id:"vn-91",period:"91",week:"13",title:"LỢI ÍCH CỦA TỰ HỌC",topic:"Tiếng Việt",modulePath:"./91/index.js",exportName:"lesson091"},{id:"vn-92",period:"92",week:"14",title:"TIẾNG ĐÀN BA-LA-LAI-CA TRÊN SÔNG ĐÀ",topic:"Tiếng Việt",modulePath:"./92/index.js",exportName:"lesson092"},{id:"vn-93",period:"93",week:"14",title:"BIỆN PHÁP ĐIỆP TỪ, ĐIỆP NGỮ",topic:"LTVC",modulePath:"./93/index.js",exportName:"lesson093"},{id:"vn-94",period:"94",week:"14",title:"TÌM HIỂU CÁCH VIẾT ĐOẠN VĂN THỂ HIỆN TÌNH CẢM, CẢM XÚC VỀ MỘT BÀI THƠ",topic:"Viết",modulePath:"./94/index.js",exportName:"lesson94"},{id:"vn-95",period:"95-96",week:"14",title:"TRÍ TƯỞNG TƯỢNG PHONG PHÚ",topic:"Tiếng Việt",modulePath:"./95/index.js",exportName:"lesson95"},{id:"vn-97",period:"97",week:"14",title:"TÌM Ý CHO ĐOẠN VĂN THỂ HIỆN TÌNH CẢM, CẢM XÚC VỀ MỘT BÀI THƠ",topic:"Viết",modulePath:"./97/index.js",exportName:"lesson97"},{id:"vn-98",period:"98",week:"14",title:"ĐỌC MỞ RỘNG: CA DAO VỀ DI TÍCH, LỄ HỘI, SẢN VẬT",topic:"DMR",modulePath:"./98/index.js",exportName:"lesson98"},{id:"vn-99",period:"99",week:"15",title:"TRANH LÀNG HỒ",topic:"Tiếng Việt",modulePath:"./99/index.js",exportName:"lesson099"},{id:"vn-100",period:"100",week:"15",title:"LUYỆN TẬP VỀ DIỆP TỪ, ĐIỆP NGỮ",topic:"LTVC",modulePath:"./100/index.js",exportName:"lesson100"},{id:"vn-101",period:"101",week:"15",title:"VIẾT ĐOẠN VĂN THỂ HIỆN TÌNH CẢM, CẢM XÚC VỀ MỘT BÀI THƠ",topic:"Viết",modulePath:"./101/index.js",exportName:"lesson101"},{id:"vn-102",period:"102-103",week:"15",title:"TẬP HÁT QUAN HỌ",topic:"Tiếng Việt",modulePath:"./102/index.js",exportName:"lesson102"},{id:"vn-104",period:"104",week:"15",title:"ĐÁNH GIÁ, CHỈNH SỬA ĐOẠN VĂN THỂ HIỆN TÌNH CẢM, CẢM XÚC VỀ MỘT BÀI THƠ",topic:"Viết",modulePath:"./104/index.js",exportName:"lesson104"},{id:"vn-105",period:"105",week:"15",title:"CHƯƠNG TRÌNH NGHỆ THUẬT EM YÊU THÍCH",topic:"Tiếng Việt",modulePath:"./105/index.js",exportName:"lesson105"},{id:"vn-106",period:"106",week:"16",title:"CHÚ ỐC SÊN BAY",topic:"Tiếng Việt",modulePath:"./106/index.js",exportName:"lesson106"},{id:"vn-107",period:"107",week:"16",title:"KẾT TỪ",topic:"LTVC",modulePath:"./107/index.js",exportName:"lesson107"},{id:"vn-108",period:"108",week:"16",title:"TÌM HIỂU CÁCH VIẾT ĐOẠN VĂN GIỚI THIỆU NHÂN VẬT TRONG MỘT BỘ PHIM HOẠT HÌNH",topic:"Viết",modulePath:"./108/index.js",exportName:"lesson108"},{id:"vn-109",period:"109-110",week:"16",title:"NGHỆ THUẬT MÚA BA LÊ",topic:"Tiếng Việt",modulePath:"./109/index.js",exportName:"lesson109"},{id:"vn-111",period:"111",week:"16",title:"TÍM Ý CHO ĐOẠN VĂN GIỚI THIỆU NHÂN VẬT TRONG MỘT BỘ PHIM HOẠT HÌNH",topic:"Tiếng Việt",modulePath:"./111/index.js",exportName:"lesson111"},{id:"vn-112",period:"112",week:"16",title:"ĐỌC MỞ RỘNG",topic:"DMR",modulePath:"./112/index.js",exportName:"lesson112"},{id:"vn-113",period:"113",week:"17",title:"MỘT NGÔI CHÙA ĐỘC ĐÁO",topic:"Tiếng Việt",modulePath:"./113/index.js",exportName:"lesson113"},{id:"vn-114",period:"114",week:"17",title:"LUYỆN TẬP VỀ KẾT TỪ",topic:"LTVC",modulePath:"./114/index.js",exportName:"lesson114"},{id:"vn-115",period:"115",week:"17",title:"VIẾT ĐOẠN VĂN GIỚI THIỆU NHÂN VẬT TRONG MỘT BỘ PHIM HOẠT HÌNH",topic:"Viết",modulePath:"./115/index.js",exportName:"lesson115"},{id:"vn-116",period:"116-117",week:"17",title:"SỰ TÍCH CHÚ TỄU",topic:"Tiếng Việt",modulePath:"./116/index.js",exportName:"lesson116"},{id:"vn-118",period:"118",week:"17",title:"ĐÁNH GIÁ, CHỈNH SỬA ĐOẠN VĂN GIỚI THIỆU NHÂN VẬT TRONG MỘT BỘ PHIM HOẠT HÌNH",topic:"Viết",modulePath:"./118/index.js",exportName:"lesson118"},{id:"vn-119",period:"119",week:"17",title:"BỘ PHIM YÊU THÍCH",topic:"Tiếng Việt",modulePath:"./119/index.js",exportName:"lesson119"},{id:"vn-120",period:"120",week:"18",title:"ÔN TẬP VÀ ĐÁNH GIÁ CUỐI HKI (TIẾT 1)",topic:"Tiếng Việt",modulePath:"./120/index.js",exportName:"lesson120"},{id:"vn-121",period:"121",week:"18",title:"ÔN TẬP VÀ ĐÁNH GIÁ CUỐI HKI (TIẾT 2)",topic:"Tiếng Việt",modulePath:"./121/index.js",exportName:"lesson121"},{id:"vn-122",period:"122",week:"18",title:"ÔN TẬP VÀ ĐÁNH GIÁ CUỐI HKI (TIẾT 3)",topic:"Tiếng Việt",modulePath:"./122/index.js",exportName:"lesson122"},{id:"vn-123",period:"123-124",week:"18",title:"ÔN TẬP VÀ ĐÁNH GIÁ CUỐI HKI (TIẾT 4+5)",topic:"Tiếng Việt",modulePath:"./123/index.js",exportName:"lesson123"},{id:"vn-125",period:"125",week:"18",title:"KIỂM TRA ĐỌC (TIẾT 6)",topic:"Tiếng Việt",modulePath:"./125/index.js",exportName:"lesson125"},{id:"vn-126",period:"126",week:"18",title:"KIỂM TRA ĐỌC HIỂU – VIẾT (TIẾT 7)",topic:"Viết",modulePath:"./126/index.js",exportName:"lesson126"},{id:"vn-127",period:"127",week:"19",title:"ĐỌC: TIẾNG HÁT CỦA NGƯỜI ĐÁ",topic:"Tiếng Việt",modulePath:"./127/index.js",exportName:"lesson127"},{id:"vn-128",period:"128",week:"19",title:"LTVC: CÂU ĐƠN VÀ CÂU GHÉP",topic:"LTVC",modulePath:"./128/index.js",exportName:"lesson128"},{id:"vn-129",period:"129",week:"19",title:"VIẾT: TÌM HIỂU CÁCH VIẾT BÀI VĂN TẢ NGƯỜI",topic:"Viết",modulePath:"./129/index.js",exportName:"lesson129"},{id:"vn-130",period:"130-131",week:"19",title:"ĐỌC: KHÚC HÁT RU NHỮNG EM BÉ LỚN TRÊN LƯNG MẸ",topic:"Tiếng Việt",modulePath:"./130/index.js",exportName:"lesson130"},{id:"vn-132",period:"132",week:"19",title:"VIẾT: VIẾT MỞ BÀI VÀ KẾT BÀI CHO BÀI VĂN TẢ NGƯỜI",topic:"Viết",modulePath:"./132/index.js",exportName:"lesson132"},{id:"vn-133",period:"133",week:"19",title:"ĐỌC MỞ RỘNG",topic:"DMR",modulePath:"./133/index.js",exportName:"lesson133"},{id:"vn-134",period:"134",week:"20",title:"ĐỌC: HẠT GẠO LÀNG TA",topic:"Tiếng Việt",modulePath:"./134/index.js",exportName:"lesson134"},{id:"vn-135",period:"135",week:"20",title:"LTVC: CÁCH NỐI CÁC VẾ CÂU GHÉP",topic:"LTVC",modulePath:"./135/index.js",exportName:"lesson135"},{id:"vn-136",period:"136",week:"20",title:"VIẾT: QUAN SÁT ĐỂ VIẾT BÀI VĂN TẢ NGƯỜI",topic:"Viết",modulePath:"./136/index.js",exportName:"lesson136"},{id:"vn-137",period:"137-138",week:"20",title:"ĐỌC: HỘP QUÀ MÀU THIÊN THANH",topic:"Tiếng Việt",modulePath:"./137/index.js",exportName:"lesson137"},{id:"vn-139",period:"139",week:"20",title:"VIẾT: LẬP DÀN Ý CHO BÀI VĂN TẢ NGƯỜI",topic:"Viết",modulePath:"./139/index.js",exportName:"lesson139"},{id:"vn-140",period:"140",week:"20",title:"NÓI VÀ NGHE: NÉT ĐẸP HỌC ĐƯỜNG",topic:"Nói & Nghe",modulePath:"./140/index.js",exportName:"lesson140"},{id:"vn-141",period:"141",week:"21",title:"ĐỌC: GIỎ HOA THÁNG NĂM",topic:"Tiếng Việt",modulePath:"./141/index.js",exportName:"lesson141"},{id:"vn-142",period:"142",week:"21",title:"LTVC: CÁCH NỐI CÁC VẾ CÂU GHÉP (TIẾP THEO)",topic:"LTVC",modulePath:"./142/index.js",exportName:"lesson142"},{id:"vn-143",period:"143",week:"21",title:"VIẾT: VIẾT ĐOẠN VĂN TẢ NGƯỜI",topic:"Viết",modulePath:"./143/index.js",exportName:"lesson143"},{id:"vn-144",period:"144-145",week:"21",title:"ĐỌC: THƯ CỦA BỐ",topic:"Tiếng Việt",modulePath:"./145/index.js",exportName:"lesson145"},{id:"vn-146",period:"146",week:"21",title:"VIẾT: VIẾT BÀI VĂN TẢ NGƯỜI (BÀI VIẾT SỐ 1)",topic:"Viết",modulePath:"./146/index.js",exportName:"lesson146"},{id:"vn-147",period:"147",week:"21",title:"ĐỌC MỞ RỘNG",topic:"DMR",modulePath:"./147/index.js",exportName:"lesson147"},{id:"vn-148",period:"148",week:"22",title:"ĐỌC: ĐOÀN THUYỀN ĐÁNH CÁ",topic:"Tiếng Việt",modulePath:"./148/index.js",exportName:"lesson148"},{id:"vn-149",period:"149",week:"22",title:"LTVC: LUYỆN TẬP VỀ CÂU GHÉP",topic:"LTVC",modulePath:"./149/index.js",exportName:"lesson149"},{id:"vn-150",period:"150",week:"22",title:"VIẾT: ĐÁNH GIÁ, CHỈNH SỬA BÀI VĂN TẢ NGƯỜI",topic:"Viết",modulePath:"./150/index.js",exportName:"lesson150"},{id:"vn-151",period:"151-152",week:"22",title:"ĐỌC: KHU RỪNG CỦA MÁT",topic:"Tiếng Việt",modulePath:"./151/index.js",exportName:"lesson151"},{id:"vn-153",period:"153",week:"22",title:"VIẾT: VIẾT BÀI VĂN TẢ NGƯỜI (BÀI VIẾT SỐ 2)",topic:"Viết",modulePath:"./153/index.js",exportName:"lesson153"},{id:"vn-154",period:"154",week:"22",title:"NÓI VÀ NGHE: NHỮNG Ý KIẾN KHÁC BIỆT",topic:"Nói & Nghe",modulePath:"./154/index.js",exportName:"lesson154"},{id:"vn-155",period:"155",week:"23",title:"ĐỌC: HỘI THỔI CƠM THI Ở ĐỒNG VÂN",topic:"Tiếng Việt",modulePath:"./155/index.js",exportName:"lesson155"},{id:"vn-156",period:"156",week:"23",title:"LTVC: LIÊN KẾT CÂU BẰNG CÁCH LẶP TỪ NGỮ",topic:"LTVC",modulePath:"./156/index.js",exportName:"lesson156"},{id:"vn-157",period:"157",week:"23",title:"VIẾT: TÌM HIỂU CÁCH VIẾT ĐOẠN VĂN THỂ HIỆN TÌNH CẢM, CẢM XÚC VỀ MỘT SỰ VIỆC",topic:"Viết",modulePath:"./157/index.js",exportName:"lesson157"},{id:"vn-158",period:"158-159",week:"23",title:"ĐỌC: NHỮNG BÚP CHÈ TRÊN CÂY CỔ THỤ",topic:"Tiếng Việt",modulePath:"./158/index.js",exportName:"lesson158"},{id:"vn-160",period:"160",week:"23",title:"VIẾT: TÌM Ý CHO ĐOẠN VĂN THỂ HIỆN TÌNH CẢM, CẢM XÚC VỀ MỘT SỰ VIỆC",topic:"Viết",modulePath:"./160/index.js",exportName:"lesson160"},{id:"vn-161",period:"161",week:"23",title:"ĐỌC MỞ RỘNG",topic:"DMR",modulePath:"./161/index.js",exportName:"lesson161"},{id:"vn-162",period:"162",week:"24",title:"ĐỌC: HƯƠNG CỐM MÙA THU",topic:"Tiếng Việt",modulePath:"./162/index.js",exportName:"lesson162"},{id:"vn-163",period:"163",week:"24",title:"LTVC: LIÊN KẾT CÂU BẰNG TỪ NGỮ NỐI",topic:"LTVC",modulePath:"./163/index.js",exportName:"lesson163"},{id:"vn-164",period:"164",week:"24",title:"VIẾT: VIẾT ĐOẠN VĂN THỂ HIỆN TÌNH CẢM, CẢM XÚC VỀ MỘT SỰ VIỆC",topic:"Viết",modulePath:"./164/index.js",exportName:"lesson164"},{id:"vn-165",period:"165-166",week:"24",title:"ĐỌC: VŨ ĐIỆU TRÊN NỀN THỔ CẨM",topic:"Tiếng Việt",modulePath:"./165/index.js",exportName:"lesson165"},{id:"vn-167",period:"167",week:"24",title:"VIẾT: ĐÁNH GIÁ, CHỈNH SỬA ĐOẠN VĂN THỂ HIỆN TÌNH CẢM, CẢM XÚC VỀ MỘT SỰ VIỆC",topic:"Viết",modulePath:"./167/index.js",exportName:"lesson167"},{id:"vn-168",period:"168",week:"24",title:"NÓI VÀ NGHE: ĐỊA ĐIỂM THAM QUAN, DU LỊCH",topic:"Nói & Nghe",modulePath:"./168/index.js",exportName:"lesson168"},{id:"vn-169",period:"169",week:"25",title:"ĐỌC: ĐÀN T'RƯNG - TIẾNG CA ĐẠI NGÀN",topic:"Tiếng Việt",modulePath:"./169/index.js",exportName:"lesson169"},{id:"vn-170",period:"170",week:"25",title:"LTVC: LIÊN KẾT CÂU BẰNG TỪ NGỮ THAY THẾ",topic:"LTVC",modulePath:"./170/index.js",exportName:"lesson170"},{id:"vn-171",period:"171",week:"25",title:"VIẾT: TÌM HIỂU CÁCH VIẾT CHƯƠNG TRÌNH HOẠT ĐỘNG",topic:"Viết",modulePath:"./171/index.js",exportName:"lesson171"},{id:"vn-172",period:"172-173",week:"25",title:"ĐỌC: ĐƯỜNG QUÊ ĐỒNG THÁP MƯỜI",topic:"Tiếng Việt",modulePath:"./172/index.js",exportName:"lesson172"},{id:"vn-174",period:"174",week:"25",title:"VIẾT: VIẾT CHƯƠNG TRÌNH HOẠT ĐỘNG (BÀI VIẾT SỐ 1)",topic:"Viết",modulePath:"./173/index.js",exportName:"lesson173"},{id:"vn-175",period:"175",week:"25",title:"ĐỌC MỞ RỘNG",topic:"DMR",modulePath:"./174/index.js",exportName:"lesson174"},{id:"vn-176",period:"176",week:"26",title:"ĐỌC: XUỒNG BA LÁ QUÊ TÔI",topic:"Tiếng Việt",modulePath:"./176/index.js",exportName:"lesson176"},{id:"vn-177",period:"177",week:"26",title:"LTVC: LUYỆN TẬP VỀ LIÊN KẾT CÂU TRONG ĐOẠN VĂN VIẾT",topic:"LTVC",modulePath:"./177/index.js",exportName:"lesson177"},{id:"vn-178",period:"178",week:"26",title:"VIẾT: ĐÁNH GIÁ, CHỈNH SỬA CHƯƠNG TRÌNH HOẠT ĐỘNG",topic:"Viết",modulePath:"./178/index.js",exportName:"lesson178"},{id:"vn-179",period:"179-180",week:"26",title:"ĐỌC: VỀ THĂM ĐẤT MŨI",topic:"Tiếng Việt",modulePath:"./179/index.js",exportName:"lesson179"},{id:"vn-181",period:"181",week:"26",title:"VIẾT: VIẾT CHƯƠNG TRÌNH HOẠT ĐỘNG (BÀI VIẾT SỐ 2)",topic:"Viết",modulePath:"./181/index.js",exportName:"lesson181"},{id:"vn-182",period:"182",week:"26",title:"NÓI VÀ NGHE: SẢN VẬT ĐỊA PHƯƠNG",topic:"Nói & Nghe",modulePath:"./182/index.js",exportName:"lesson182"},{id:"vn-183",period:"183-184",week:"27",title:"ÔN TẬP VÀ ĐÁNH GIÁ GIỮA HKII (TIẾT 1 - 2)",topic:"Tiếng Việt",modulePath:"./183/index.js",exportName:"lesson183"},{id:"vn-185",period:"185-186",week:"27",title:"ÔN TẬP VÀ ĐÁNH GIÁ GIỮA HKII (TIẾT 3 - 4)",topic:"Tiếng Việt",modulePath:"./185/index.js",exportName:"lesson185"},{id:"vn-187",period:"187",week:"27",title:"ÔN TẬP VÀ ĐÁNH GIÁ GIỮA HKII (TIẾT 5)",topic:"Tiếng Việt",modulePath:"./187/index.js",exportName:"lesson187"},{id:"vn-188",period:"188-189",week:"27",title:"ĐÁNH GIÁ GIỮA HỌC KÌ II (TIẾT 6 - 7)",topic:"Tiếng Việt",modulePath:"./188/index.js",exportName:"lesson188"},{id:"vn-190",period:"190",week:"28",title:"ĐỌC: NGHÌN NĂM VĂN HIẾN",topic:"Tiếng Việt",modulePath:"./190/index.js",exportName:"lesson190"},{id:"vn-191",period:"191",week:"28",title:"LTVC: LUYỆN TẬP VỀ ĐẠI TỪ VÀ KẾT TỪ",topic:"LTVC",modulePath:"./191/index.js",exportName:"lesson191"},{id:"vn-192",period:"192",week:"28",title:"VIẾT: TÌM HIỂU CÁCH VIẾT ĐOẠN VĂN NÊU Ý KIẾN TÁN THÀNH MỘT SỰ VIỆC, HIỆN TƯỢNG",topic:"Viết",modulePath:"./192/index.js",exportName:"lesson192"},{id:"vn-193",period:"193-194",week:"28",title:"ĐỌC: NGƯỜI THẦY CỦA MUÔN ĐỜI",topic:"Tiếng Việt",modulePath:"./193/index.js",exportName:"lesson193"},{id:"vn-195",period:"195",week:"28",title:"VIẾT: TÌM Ý CHO ĐOẠN VĂN NÊU Ý KIẾN TÁN THÀNH MỘT SỰ VIỆC, HIỆN TƯỢNG",topic:"Viết",modulePath:"./195/index.js",exportName:"lesson195"},{id:"vn-196",period:"196",week:"28",title:"ĐỌC MỞ RỘNG",topic:"DMR",modulePath:"./196/index.js",exportName:"lesson196"},{id:"vn-197",period:"197",week:"29",title:"ĐỌC: DANH Y TUỆ TĨNH",topic:"Tiếng Việt",modulePath:"./197/index.js",exportName:"lesson197"},{id:"vn-198",period:"198",week:"29",title:"LTVC: LUYỆN TẬP VỀ TỪ ĐỒNG NGHĨA VÀ TỪ ĐA NGHĨA",topic:"LTVC",modulePath:"./198/index.js",exportName:"lesson198"},{id:"vn-199",period:"199",week:"29",title:"VIẾT: VIẾT ĐOẠN VĂN NÊU Ý KIẾN TÁN THÀNH MỘT SỰ VIỆC, HIỆN TƯỢNG",topic:"Viết",modulePath:"./199/index.js",exportName:"lesson199"},{id:"vn-200",period:"200-201",week:"29",title:"ĐỌC: CỤ ĐỒ CHIỂU",topic:"Tiếng Việt",modulePath:"./200/index.js",exportName:"lesson200"},{id:"vn-202",period:"202",week:"29",title:"VIẾT: ĐÁNH GIÁ, CHỈNH SỬA ĐOẠN VĂN NÊU Ý KIẾN TÁN THÀNH...",topic:"Viết",modulePath:"./202/index.js",exportName:"lesson202"},{id:"vn-203",period:"203",week:"29",title:"NÓI VÀ NGHE: ĐỀN ƠN ĐÁP NGHĨA",topic:"Nói & Nghe",modulePath:"./203/index.js",exportName:"lesson203"},{id:"vn-204",period:"204",week:"30",title:"ĐỌC: ANH HÙNG LAO ĐỘNG TRẦN ĐẠI NGHĨA",topic:"Tiếng Việt",modulePath:"./204/index.js",exportName:"lesson204"},{id:"vn-205",period:"205",week:"30",title:"LTVC: LUYỆN TẬP VỀ CÂU GHÉP",topic:"LTVC",modulePath:"./205/index.js",exportName:"lesson205"},{id:"vn-206",period:"206",week:"30",title:"VIẾT: VIẾT ĐOẠN VĂN NÊU Ý KIẾN TÁN THÀNH MỘT SỰ VIỆC, HIỆN TƯỢNG (Bài viết số 2)",topic:"Viết",modulePath:"./206/index.js",exportName:"lesson206"},{id:"vn-207",period:"207-208",week:"30",title:"ĐỌC: BỘ ĐỘI VỀ LÀNG",topic:"Tiếng Việt",modulePath:"./207/index.js",exportName:"lesson207"},{id:"vn-209",period:"209",week:"30",title:"VIẾT: LUYỆN VIẾT ĐOẠN VĂN THỂ HIỆN TÌNH CẢM, CẢM XÚC VỀ...",topic:"Viết",modulePath:"./209/index.js",exportName:"lesson209"},{id:"vn-210",period:"210",week:"30",title:"ĐỌC MỞ RỘNG",topic:"DMR",modulePath:"./210/index.js",exportName:"lesson210"},{id:"vn-211",period:"211",week:"31",title:"ĐỌC: VỀ NGÔI NHÀ ĐANG XÂY",topic:"Tiếng Việt",modulePath:"./211/index.js",exportName:"lesson211"},{id:"vn-212",period:"212",week:"31",title:"LTVC: VIẾT HOA DANH TỪ CHUNG ĐỂ THỂ HIỆN SỰ TÔN TRỌNG ĐẶC BIỆT",topic:"LTVC",modulePath:"./212/index.js",exportName:"lesson212"},{id:"vn-213",period:"213",week:"31",title:"VIẾT: LUYỆN TẬP LẬP DÀN Ý CHO BÀI VĂN TẢ PHONG CẢNH",topic:"Viết",modulePath:"./213/index.js",exportName:"lesson213"},{id:"vn-214",period:"214-215",week:"31",title:"ĐỌC: VIỆT NAM QUÊ HƯƠNG TA",topic:"Tiếng Việt",modulePath:"./214/index.js",exportName:"lesson214"},{id:"vn-216",period:"216",week:"31",title:"VIẾT: LUYỆN VIẾT BÀI VĂN TẢ PHONG CẢNH",topic:"Viết",modulePath:"./216/index.js",exportName:"lesson216"},{id:"vn-217",period:"217",week:"31",title:"NÓI VÀ NGHE: DI TÍCH LỊCH SỬ",topic:"Nói & Nghe",modulePath:"./217/index.js",exportName:"lesson217"},{id:"vn-218",period:"218",week:"32",title:"ĐỌC: BÀI CA TRÁI ĐẤT",topic:"Tiếng Việt",modulePath:"./218/index.js",exportName:"lesson218"},{id:"vn-219",period:"219",week:"32",title:"LTVC: CÁCH VIẾT TÊN NGƯỜI VÀ TÊN ĐỊA LÍ NƯỚC NGOÀI",topic:"LTVC",modulePath:"./219/index.js",exportName:"lesson219"},{id:"vn-220",period:"220",week:"32",title:"VIẾT: LUYỆN TẬP LẬP DÀN Ý CHO BÀI VĂN TẢ NGƯỜI",topic:"Viết",modulePath:"./220/index.js",exportName:"lesson220"},{id:"vn-221",period:"221-222",week:"32",title:"ĐỌC: NHỮNG CON HẠC GIẤY",topic:"Tiếng Việt",modulePath:"./221/index.js",exportName:"lesson221"},{id:"vn-223",period:"223",week:"32",title:"VIẾT: LUYỆN VIẾT BÀI VĂN TẢ NGƯỜI",topic:"Viết",modulePath:"./223/index.js",exportName:"lesson223"},{id:"vn-224",period:"224",week:"32",title:"ĐỌC MỞ RỘNG",topic:"DMR",modulePath:"./224/index.js",exportName:"lesson224"},{id:"vn-225",period:"225",week:"33",title:"ĐỌC: MỘT NGƯỜI HÙNG THẦM LẶNG",topic:"Tiếng Việt",modulePath:"./225/index.js",exportName:"lesson225"},{id:"vn-226",period:"226",week:"33",title:"LTVC: LUYỆN TẬP VỀ DẤU GẠCH NGANG",topic:"LTVC",modulePath:"./226/index.js",exportName:"lesson226"},{id:"vn-227",period:"227",week:"33",title:"VIẾT: TÌM HIỂU CÁCH VIẾT ĐOẠN VĂN NÊU Ý KIẾN PHẢN ĐỐI MỘT SỰ VIỆC, HIỆN TƯỢNG",topic:"Viết",modulePath:"./227/index.js",exportName:"lesson227"},{id:"vn-228",period:"228-229",week:"33",title:"ĐỌC: GIỜ TRÁI ĐẤT",topic:"Tiếng Việt",modulePath:"./228/index.js",exportName:"lesson228"},{id:"vn-230",period:"230",week:"33",title:"VIẾT: TÌM Ý CHO ĐOẠN VĂN NÊU Ý KIẾN PHẢN ĐỐI MỘT SỰ VIỆC, HIỆN TƯỢNG",topic:"Viết",modulePath:"./230/index.js",exportName:"lesson230"},{id:"vn-231",period:"231",week:"33",title:"NÓI VÀ NGHE: TRẢI NGHIỆM NGÀY HÈ",topic:"Nói & Nghe",modulePath:"./231/index.js",exportName:"lesson231"},{id:"vn-232",period:"232",week:"34",title:"ĐỌC: ĐIỆN THOẠI DI ĐỘNG",topic:"Tiếng Việt",modulePath:"./232/index.js",exportName:"lesson232"},{id:"vn-233",period:"233",week:"34",title:"LTVC: LUYỆN TẬP VỀ LIÊN KẾT CÂU TRONG ĐOẠN VĂN",topic:"LTVC",modulePath:"./233/index.js",exportName:"lesson233"},{id:"vn-234",period:"234",week:"34",title:"VIẾT: VIẾT ĐOẠN VĂN NÊU Ý KIẾN PHẢN ĐỐI MỘT SỰ VIỆC, HIỆN TƯỢNG",topic:"Viết",modulePath:"./234/index.js",exportName:"lesson234"},{id:"vn-235",period:"235-236",week:"34",title:"ĐỌC: THÀNH PHỐ THÔNG MINH MÁT-XĐA",topic:"Tiếng Việt",modulePath:"./235/index.js",exportName:"lesson235"},{id:"vn-237",period:"237",week:"34",title:"VIẾT: ĐÁNH GIÁ, CHỈNH SỬA ĐOẠN VĂN NÊU Ý KIẾN PHẢN ĐỐI...",topic:"Viết",modulePath:"./237/index.js",exportName:"lesson237"},{id:"vn-238",period:"238",week:"34",title:"ĐỌC MỞ RỘNG",topic:"DMR",modulePath:"./238/index.js",exportName:"lesson238"},{id:"vn-239",period:"239",week:"35",title:"ÔN TẬP VÀ ĐÁNH GIÁ CUỐI HKII (TIẾT 1-TR.134)",topic:"Tiếng Việt",modulePath:"./239/index.js",exportName:"lesson239"},{id:"vn-240",period:"240",week:"35",title:"ÔN TẬP VÀ ĐÁNH GIÁ CUỐI HKII (TIẾT 2)",topic:"Tiếng Việt",modulePath:"./240/index.js",exportName:"lesson240"},{id:"vn-241",period:"241",week:"35",title:"ÔN TẬP VÀ ĐÁNH GIÁ CUỐI HKII (TIẾT 3)",topic:"Tiếng Việt",modulePath:"./241/index.js",exportName:"lesson241"},{id:"vn-242",period:"242-243",week:"35",title:"ÔN TẬP VÀ ĐÁNH GIÁ CUỐI HKII (TIẾT 4+5)",topic:"Tiếng Việt",modulePath:"./242/index.js",exportName:"lesson242"},{id:"vn-244",period:"244",week:"35",title:"KIỂM TRA ĐỌC (TIẾT 6)",topic:"Tiếng Việt",modulePath:"./244/index.js",exportName:"lesson244"},{id:"vn-245",period:"245",week:"35",title:"KIỂM TRA ĐỌC HIỂU - VIẾT (TIẾT 7)",topic:"Viết",modulePath:"./245/index.js",exportName:"lesson245"}],Ne=[{id:"standard-vn-template",period:"0",week:"1",title:"⚡ BÀI HỌC MẪU (BẢN GỐC)",topic:"Mẫu",modulePath:"./standard_template/index.js",exportName:"vnLessonTemplate"},...Te],Ie=Array.from({length:70},(e,t)=>{const n=t+1,i=String(n),s=i.padStart(3,"0"),o=String(Math.ceil(n/2));return{id:`history-${i}`,period:i,week:o,title:`Bài Lịch sử - Địa lý ${i}`,topic:"Lịch sử - Địa lý",modulePath:`./${i}/index.js`,exportName:`lesson${s}`}}),_={math:ke,vietnamese:Ne,science:we,history:Ie,ethics:[],experiential:[],english:[]},j=[{id:"math",name:"Toán học",shortName:"Toán 5",icon:"📐",color:"blue",desc:"Số học, Hình học & Logic"},{id:"vietnamese",name:"Tiếng Việt",shortName:"TV 5",icon:"📝",color:"pink",desc:"Văn học & Ngôn ngữ"},{id:"science",name:"Khoa học",shortName:"Khoa học 5",icon:"🧪",color:"emerald",desc:"Khám phá tự nhiên"},{id:"history",name:"Lịch sử - Địa lý",shortName:"LS-ĐL 5",icon:"🌍",color:"amber",desc:"Cội nguồn & Thế giới"}],z={injectTCStyles(){if(document.getElementById("tc-styles"))return;const e=document.createElement("style");e.id="tc-styles",e.textContent=`
            .vertical-text {
                writing-mode: vertical-rl;
                text-orientation: mixed;
                transform: rotate(180deg);
            }
            .custom-scrollbar::-webkit-scrollbar {
                width: 5px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
                background: transparent;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
                background: #cbd5e1;
                border-radius: 10px;
            }
            .timeline-line {
                position: absolute;
                left: 50%;
                top: 0;
                bottom: 0;
                width: 2px;
                background: repeating-linear-gradient(
                    to bottom,
                    #3D38FF,
                    #3D38FF 4px,
                    transparent 4px,
                    transparent 8px
                );
                transform: translateX(-50%);
                z-index: 0;
                opacity: 0.1;
            }
            .week-card.active {
                background: #3D38FF !important;
                color: white !important;
                border-color: #3D38FF !important;
            }
            .week-card.active * {
                color: white !important;
            }
            /* Toast Notification Styles */
            .toast-container {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 10000;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 12px;
                pointer-events: none;
            }
            .toast-item {
                background: white;
                padding: 20px 40px;
                border-radius: 32px;
                box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                display: flex;
                align-items: center;
                gap: 16px;
                animate: toast-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
                border: 4px solid white;
                min-width: 320px;
                pointer-events: auto;
            }
            .toast-success {
                background: linear-gradient(135deg, #10b981, #059669);
                color: white;
                border-color: #34d399;
            }
            .toast-error {
                background: linear-gradient(135deg, #ef4444, #dc2626);
                color: white;
                border-color: #f87171;
            }
            .toast-icon {
                font-size: 32px;
            }
            .toast-text {
                font-size: 20px;
                font-weight: 900;
                text-transform: uppercase;
                letter-spacing: 1px;
            }
            @keyframes toast-in {
                0% { opacity: 0; transform: scale(0.5) translateY(100px); }
                100% { opacity: 1; transform: scale(1) translateY(0); }
            }
            @keyframes toast-out {
                0% { opacity: 1; transform: scale(1) translateY(0); }
                100% { opacity: 0; transform: scale(0.8) translateY(-50px); }
            }
        `,document.head.appendChild(e)},showToast(e,t="success",n=2e3){let i=document.querySelector(".toast-container");i||(i=document.createElement("div"),i.className="toast-container",document.body.appendChild(i));const s=document.createElement("div"),o=t==="success";s.className=`toast-item ${o?"toast-success":"toast-error"}`,s.innerHTML=`
            <div class="w-12 h-12 ${o?"bg-[#10b981] text-white":"bg-rose-500 text-white"} rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg shrink-0 leading-none">
                ${o?'<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>':"E"}
            </div>
            <span class="toast-text">${e}</span>
        `,i.appendChild(s),setTimeout(()=>{s.style.animation="toast-out 0.5s ease forwards",setTimeout(()=>{s.remove(),i.children.length===0&&i.remove()},500)},n)},getColorClasses(e){const t={blue:{bg:"bg-blue-600",text:"text-blue-600 dark:text-blue-400",light:"bg-blue-50 dark:bg-blue-900/20",border:"border-blue-600",shadow:"shadow-blue-200 dark:shadow-blue-900/20",hover:"hover:border-blue-200 dark:hover:border-blue-800",hoverText:"group-hover:text-blue-600"},pink:{bg:"bg-pink-600",text:"text-pink-600 dark:text-pink-400",light:"bg-pink-50 dark:bg-pink-900/20",border:"border-pink-600",shadow:"shadow-pink-200 dark:shadow-pink-900/20",hover:"hover:border-pink-200 dark:hover:border-pink-800",hoverText:"group-hover:text-pink-600"},emerald:{bg:"bg-emerald-600",text:"text-emerald-600 dark:text-emerald-400",light:"bg-emerald-50 dark:bg-emerald-900/20",border:"border-emerald-600",shadow:"shadow-emerald-200 dark:shadow-emerald-900/20",hover:"hover:border-emerald-200 dark:hover:border-emerald-800",hoverText:"group-hover:text-emerald-600"},amber:{bg:"bg-amber-600",text:"text-amber-600 dark:text-amber-400",light:"bg-amber-50 dark:bg-amber-900/20",border:"border-amber-600",shadow:"shadow-amber-200 dark:shadow-amber-900/20",hover:"hover:border-amber-200 dark:hover:border-amber-800",hoverText:"group-hover:text-amber-600"},orange:{bg:"bg-orange-600",text:"text-orange-600 dark:text-orange-400",light:"bg-orange-50 dark:bg-orange-900/20",border:"border-orange-600",shadow:"shadow-orange-200 dark:shadow-orange-900/20",hover:"hover:border-orange-200 dark:hover:border-orange-800",hoverText:"group-hover:text-orange-600"},indigo:{bg:"bg-indigo-600",text:"text-indigo-600 dark:text-indigo-400",light:"bg-indigo-50 dark:bg-indigo-900/20",border:"border-indigo-600",shadow:"shadow-indigo-200 dark:shadow-indigo-900/20",hover:"hover:border-indigo-200 dark:hover:border-indigo-800",hoverText:"group-hover:text-indigo-600"},violet:{bg:"bg-violet-600",text:"text-violet-600 dark:text-violet-400",light:"bg-violet-50 dark:bg-violet-900/20",border:"border-violet-600",shadow:"shadow-violet-200 dark:shadow-violet-900/20",hover:"hover:border-violet-200 dark:hover:border-violet-800",hoverText:"group-hover:text-violet-600"}};return t[e]||t.blue},renderEmptyState(){return`
            <div class="py-24 text-center">
                <p class="text-gray-400 font-bold uppercase tracking-widest">Đang cập nhật dữ liệu...</p>
            </div>
        `}},Ce={renderHero(e,t,n){return`
            <section class="max-w-4xl mx-auto text-center mb-6 animate-fade-in px-4">
                ${n?`<span class="inline-block bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] mb-3 border border-blue-100/50 dark:border-blue-800/50 shadow-sm">${n}</span>`:""}
                <h2 class="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-2 tracking-tight leading-[1.1]">${e}</h2>
                <p class="text-base text-gray-400 dark:text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto">${t}</p>
            </section>
        `},renderSubjectCard(e){const t=z.getColorClasses(e.color),n=window.router&&window.router.isAdmin(),i=(e.locked||window.router&&window.router.contentLocks&&window.router.contentLocks.subjects[e.id])&&!n;return`
            <div class="subject-card group rounded-[24px] bg-white dark:bg-slate-900 p-4 border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center cursor-pointer relative overflow-hidden ${i?"opacity-60 grayscale":""}" 
                 onclick="${i?"alert('Môn học này hiện đang bị khóa!')":`router.navigateSubject('${e.id}')`}">
                <div class="absolute top-0 left-0 w-full h-1 ${t.bg} opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div class="w-12 h-12 ${t.light} dark:bg-slate-800 ${t.text} rounded-[16px] flex items-center justify-center text-2xl mb-3 shadow-inner group-hover:scale-110 transition-transform duration-500 relative">
                    ${e.icon}
                    ${i?'<span class="absolute -bottom-1 -right-1 text-sm bg-white dark:bg-slate-800 rounded-full shadow-md p-0.5">🔒</span>':""}
                </div>
                <h3 class="text-xl font-black text-gray-800 dark:text-white mb-1 tracking-tighter">${e.name}</h3>
                <p class="text-gray-400 dark:text-slate-500 font-black uppercase text-[9px] tracking-widest mb-4">${e.shortName}</p>
                <button class="mt-auto w-full py-2.5 rounded-[12px] ${t.bg} text-white font-black text-[10px] uppercase tracking-[0.2em] shadow-md ${t.shadow} transition-all active:scale-95">
                    ${i?"Đã khóa":"Học ngay"}
                </button>
            </div>
        `},renderLessonList(e,t){return e.length===0?`
                <div class="col-span-full py-6 bg-white/40 rounded-2xl border-2 border-dashed border-gray-100 text-center animate-fade-in">
                    <div class="text-3xl mb-2 opacity-20">📚</div>
                    <p class="text-gray-400 font-black italic mb-0.5 text-sm">Vùng kiến thức này đang được chuẩn bị...</p>
                    <p class="text-gray-400 text-[7px] font-black uppercase tracking-[0.3em]">EduRobot 5.0</p>
                </div>
            `:e.map(n=>this.renderLessonCard(n,t)).join("")},renderLessonCard(e,t){const n=z.getColorClasses(t),s=`${window.router&&window.router.currentSubject}_${e.period}`,o=window.router&&window.router.isAdmin(),a=(e.hidden||window.router&&window.router.contentLocks&&window.router.contentLocks.lessons[s])&&!o;return`
            <div class="clay-card p-3 flex flex-col h-full cursor-pointer group transition-all ${a?"opacity-60 grayscale":"hover:scale-[1.02] active:scale-95"}" 
                 onclick="${a?"alert('Bài học này hiện đang bị khóa!')":`router.renderLesson('${router.currentSubject}', '${e.id||e.period}')`}">
                <div class="flex justify-between items-start mb-1.5">
                    <div class="p-1.5 ${n.light} rounded-lg ${a?"":"group-hover:rotate-12"} transition-transform shadow-sm relative">
                        <span class="text-lg">📖</span>
                        ${a?'<span class="absolute -bottom-1 -right-1 text-[10px] bg-white dark:bg-slate-800 rounded-full shadow-md px-0.5">🔒</span>':""}
                    </div>
                    <span class="px-1.5 py-0.5 rounded-full ${n.bg} text-white text-[8px] font-black uppercase tracking-widest shadow-lg ${n.shadow}">
                        Tiết ${e.period}
                    </span>
                </div>
                <h3 class="text-sm font-black text-indigo-950 dark:text-white leading-tight mb-1 ${a?"":"group-hover:text-indigo-600"} transition-colors">
                    ${e.title}
                </h3>
                <p class="text-[9px] text-indigo-900/40 dark:text-indigo-200/40 font-bold mt-auto flex items-center gap-1 uppercase tracking-tighter">
                    <svg class="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    35 phút
                </p>
            </div>
        `},renderDashboard(e,t,n,i,s,o){const a=e.find(l=>l.id===t);z.getColorClasses(a.color);const r=window.router&&typeof window.router.isAdmin=="function"?window.router.isAdmin():localStorage.getItem("userRole")==="admin"||localStorage.getItem("userRole")==="teacher"||localStorage.getItem("userRole")==="teacher-admin";return`
            <div class="animate-fade-in max-w-7xl mx-auto">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-3">
                    
                    <!-- Sidebar Bento Card -->
                    <aside class="lg:col-span-3 space-y-3">
                        <div class="glass-card-premium p-3 shadow-xl shadow-indigo-500/5">
                            <h3 class="text-[8px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-3">Môn học</h3>
                            <nav class="space-y-1">
                                ${e.filter(l=>!l.externalUrl).map(l=>{const d=t===l.id,c=window.router&&window.router.isAdmin(),h=(l.locked||window.router&&window.router.contentLocks&&window.router.contentLocks.subjects[l.id])&&!c;return`
                                        <button onclick="${h?"alert('Môn học này hiện đang bị khóa!')":`router.navigateSubject('${l.id}')`}" 
                                           class="w-full text-left px-3 py-2 rounded-lg flex items-center justify-between font-black text-[10px] tracking-wide transition-all ${d?"bg-indigo-600 text-white shadow-md shadow-indigo-200 dark:shadow-none":"text-indigo-900/60 dark:text-indigo-200/60 hover:bg-white/50 dark:hover:bg-white/5"} ${h?"opacity-50 grayscale cursor-not-allowed":""}">
                                            <span class="flex items-center gap-2">
                                                <span class="text-base ${h?"grayscale":""}">${l.icon}</span>
                                                ${l.name}
                                            </span>
                                            ${d?"●":h?"🔒":""}
                                        </button>
                                    `}).join("")}
                            </nav>
                        </div>
                        
                        <!-- Star Stats Bento Card -->
                        <div class="glass-card-premium p-3 bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-xl shadow-orange-200/20 group cursor-pointer" onclick="window.location.hash = (window.router && window.router.isAdmin()) ? '#/star-admin' : '#/honors'">
                            <h3 class="text-[8px] font-black text-white/50 uppercase tracking-[0.2em] mb-1.5 flex justify-between items-center">
                                Sao chăm ngoan
                                ${r?`<span onclick="event.stopPropagation(); window.location.hash='#/star-admin'" class="hover:scale-110 transition-transform cursor-pointer">⚙️</span>`:""}
                            </h3>
                            ${(()=>{const l=window.StarService?window.StarService.getStats():{total:0,week:0};return`
                                    <div class="flex items-center gap-2 mb-1">
                                        <span class="text-2xl animate-bounce-slow">⭐</span>
                                        <div>
                                            <p class="text-xl font-black leading-none">${l.total}</p>
                                            <p class="text-[7px] font-bold text-white/70 uppercase">Tổng số Sao chăm ngoan</p>
                                        </div>
                                    </div>
                                    <div class="flex justify-between items-center text-[8px] font-bold border-t border-white/20 pt-1.5" onclick="event.stopPropagation()">
                                        <span>Tuần này: +${l.week}</span>
                                        <span onclick="document.getElementById('dashboard-leaderboard-card').classList.toggle('hidden')" class="bg-white/20 px-1.5 py-0.5 rounded cursor-pointer hover:bg-white/40 active:scale-95 transition-transform select-none">
                                            Vinh danh 🏆
                                        </span>
                                    </div>
                                `})()}
                        </div>
 
                        <!-- Leaderboard Bento Card (Top 30%) - Mặc định ẩn, bấm Vinh danh mới hiện -->
                        <div id="dashboard-leaderboard-card" class="glass-card-premium p-3 shadow-xl shadow-indigo-500/5 hidden transition-all" onclick="event.stopPropagation()">
                            <h3 class="flex justify-between items-center mb-3 cursor-pointer select-none" onclick="document.getElementById('dashboard-leaderboard-card').classList.add('hidden')">
                                <span class="text-[8px] font-black text-indigo-400 uppercase tracking-[0.2em]">Bảng Vàng Tuần</span>
                                <div class="flex items-center gap-1.5">
                                    <select id="dashboard-class-filter" onclick="event.stopPropagation()" class="bg-indigo-50/50 dark:bg-slate-800 border border-indigo-100 dark:border-slate-700 text-[8px] font-bold text-indigo-600 px-1 py-0.5 rounded outline-none w-[60px]" onchange="window.DashboardUtils && window.DashboardUtils.loadLeaderboard(this.value)">
                                        <option value="">Lớp...</option>
                                    </select>
                                    <span class="text-gray-400 text-xs hover:text-indigo-600 transition-colors">✕</span>
                                </div>
                            </h3>
                            <div id="dashboard-leaderboard-list" class="space-y-2 min-h-[120px] relative">
                                <div class="absolute inset-0 flex items-center justify-center text-[10px] italic text-indigo-300">Đang tải...</div>
                            </div>
                        </div>
                    </aside>

                    <!-- Main Dashboard Bento -->
                    <div class="lg:col-span-9 space-y-3">
                        <!-- Filters Header -->
                        <div class="glass-card-premium p-2 flex flex-wrap gap-1 justify-center items-center shadow-indigo-500/5">
                            ${Object.keys(router.periodRanges).map(l=>`
                                <button onclick="router.selectDashboardPeriod('${l}')" 
                                    class="shrink-0 h-8 px-3 rounded-md text-[8px] font-black uppercase tracking-wider transition-all ${n===l?"bg-indigo-600 text-white shadow-sm shadow-indigo-200":"text-indigo-900/40 dark:text-indigo-200/40 hover:text-indigo-600 hover:bg-white/50 dark:hover:bg-white/5"}">
                                    ${l}
                                </button>
                            `).join("")}
                        </div>

                        <!-- Week Timeline Bento -->
                        <div class="glass-card-premium p-3 shadow-indigo-500/5">
                            <div class="flex items-center justify-between mb-2 overflow-x-auto no-scrollbar gap-2 px-1">
                                ${i.map(l=>{const d=router.currentWeek===l;return`
                                        <button onclick="router.selectDashboardWeek(${l})" 
                                           class="flex items-center gap-1.5 shrink-0 px-3 py-1.5 rounded-xl transition-all ${d?"bg-indigo-600 text-white shadow-md shadow-indigo-200 scale-105":"bg-white/50 dark:bg-white/5 text-indigo-900/40 dark:text-indigo-200/40 border border-indigo-50 dark:border-white/5 opacity-50 hover:opacity-100"}">
                                            <span class="text-[8px] font-black uppercase ${d?"text-indigo-200":"text-indigo-400"}">Tuần</span>
                                            <span class="text-sm font-black">${l}</span>
                                        </button>
                                    `}).join("")}
                            </div>
                            
                            <div class="flex items-center gap-2 border-t border-indigo-50 dark:border-white/5 pt-2">
                                <div class="w-6 h-6 rounded-md bg-orange-100 flex items-center justify-center text-xs">📅</div>
                                <div>
                                    <h4 class="text-[8px] font-black text-indigo-900/40 dark:text-indigo-200/40 uppercase tracking-widest leading-none">Đang học</h4>
                                    <p class="text-sm font-black text-indigo-950 dark:text-white capitalize">${a.name} - Tuần ${router.currentWeek}</p>
                                </div>
                            </div>
                        </div>

                        <!-- Lesson List Bento Grid -->
                        <div id="dashboard-lesson-list" class="bento-grid !p-0">
                            ${this.renderLessonList(s,a.color)}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bottom Tab Bar (Mobile Only) -->
            <nav class="fixed bottom-0 left-0 right-0 md:hidden glass-card-premium !rounded-t-xl !rounded-b-none border-t border-white/20 px-2 py-1.5 flex justify-around items-center z-50 shadow-[0_-8px_32px_rgba(79,70,229,0.15)]">
                ${e.filter(l=>!l.externalUrl).map(l=>{const d=t===l.id,c=window.router&&window.router.isAdmin(),h=(l.locked||window.router&&window.router.contentLocks&&window.router.contentLocks.subjects[l.id])&&!c;return`
                        <button onclick="${h?"alert('Môn học này hiện đang bị khóa!')":`router.navigateSubject('${l.id}')`}" 
                           class="flex flex-col items-center gap-0.5 min-w-[48px] relative ${h?"opacity-50 grayscale cursor-not-allowed":""}">
                            <div class="h-7 w-7 flex items-center justify-center rounded-lg transition-all ${d?"bg-indigo-600 text-white shadow-md shadow-indigo-200 scale-105":"text-indigo-900/40 dark:text-indigo-200/40"}">
                                <span class="text-base">${l.icon}</span>
                                ${h?'<span class="absolute -top-1 -right-1 text-[8px]">🔒</span>':""}
                            </div>
                            <p class="text-[7px] font-black uppercase tracking-widest ${d?"text-indigo-600":"text-indigo-900/40"}">
                                ${l.shortName.split(" ")[0]}
                            </p>
                        </button>
                    `}).join("")}
            </nav>
        `},initDashboard(){window.DashboardUtils||(window.DashboardUtils={allStudents:[],currentClass:"",initData:async()=>{try{if(window.DashboardUtils.allStudents.length===0)if(window.StarAdmin&&window.StarAdmin.allStudents&&window.StarAdmin.allStudents.length>0)window.DashboardUtils.allStudents=window.StarAdmin.allStudents;else{const o=window.location.pathname.includes("/games/")?"../":"",a=await fetch(`${o}students_data.json`);window.DashboardUtils.allStudents=await a.json()}const e=window.DashboardUtils.allStudents;let t=[...new Set(e.map(o=>o.studentClass))].sort();const n=localStorage.getItem("userRole"),i=JSON.parse(localStorage.getItem("admin_assigned_classes")||"[]");n==="teacher"?i.length>0?t=t.filter(o=>i.includes(o)):t=[]:i.length>0&&(t=t.filter(o=>i.includes(o)));const s=document.getElementById("dashboard-class-filter");if(s)if(t.length===0)s.innerHTML='<option value="">(Chưa phân công lớp)</option>',window.DashboardUtils.loadLeaderboard("");else{s.innerHTML=t.map(r=>`<option value="${r}">Lớp ${r}</option>`).join("");const o=localStorage.getItem("eduMathClass"),a=localStorage.getItem("edurobot_board_class");o&&t.includes(o)?window.DashboardUtils.currentClass=o:a&&t.includes(a)?window.DashboardUtils.currentClass=a:window.DashboardUtils.currentClass=t[0],s.value=window.DashboardUtils.currentClass,window.DashboardUtils.loadLeaderboard(window.DashboardUtils.currentClass)}}catch(e){console.error("Lỗi khi tải danh sách Bảng Vàng:",e)}},loadLeaderboard:e=>{window.DashboardUtils.currentClass=e,localStorage.setItem("edurobot_board_class",e);const t=document.getElementById("dashboard-leaderboard-list");if(!t)return;const i=window.DashboardUtils.allStudents.filter(a=>a.studentClass===e).map(a=>({...a,stars:window.StarService?window.StarService.getStudentStars(a.email):0}));i.sort((a,r)=>r.stars-a.stars);const s=Math.ceil(i.length*.3)||5,o=i.slice(0,Math.max(s,5));if(o.length===0){t.innerHTML='<div class="text-center text-[9px] text-gray-400 py-4 absolute inset-0 flex items-center justify-center">Chưa có dữ liệu</div>';return}t.innerHTML=o.map((a,r)=>{const l=r+1;let d="";return l===1?d="🥇":l===2?d="🥈":l===3?d="🥉":d=`<span class="text-gray-400">${l}</span>`,`
                            <div class="flex items-center justify-between gap-2">
                                <div class="flex items-center gap-1.5 overflow-hidden">
                                    <span class="text-xs shrink-0 w-4 text-center">${d}</span>
                                    <span class="text-[9px] font-bold truncate text-indigo-900/60 dark:text-indigo-200/60">
                                        ${a.name}
                                    </span>
                                </div>
                                <span class="text-[9px] font-black text-orange-500 shrink-0">${a.stars}⭐</span>
                            </div>
                        `}).join("")}}),setTimeout(()=>{window.DashboardUtils&&window.DashboardUtils.initData()},50)}};let G=null;typeof window<"u"&&(window.playSegmentAudio=function(e){G&&!G.paused&&(G.pause(),G.src.endsWith(e))||(G=new Audio(e),G.play().catch(t=>console.log("Audio segment play failed:",t)))});const ee={toggleAccordion(e){const t=e.closest(".question-item");if(!t)return;const n=t.querySelector(".answer-block"),i=t.querySelector(".icon-expand");n&&n.classList.toggle("hidden"),i&&i.classList.toggle("rotate-180")},submitEssayAI(e,t){const n=document.getElementById(`essay-input-${e}`),i=n?n.value:"";if(!i.trim()){alert("Thầy E nhắc: Em hãy viết câu trả lời trước khi nộp bài nhé! ✏️");return}const s=`Câu hỏi:
${t}

Bài làm của học sinh:
${i}`,o=`

[HƯỚNG DẪN DÀNH RIÊNG CHO AI/EDUROBOT]:
Em hãy đóng vai Thầy E - một giáo viên Tiểu học tâm huyết, vui tính và cực kỳ giỏi về Công nghệ & Đời sống.
Nhiệm vụ của em là:
1. Nhận xét bài làm của học sinh một cách chi tiết (Khen ngợi điểm tốt, chỉ ra điểm cần sửa).
2. Trình bày LỜI GIẢI CHI TIẾT hoặc GỢI Ý để học sinh học hỏi.
3. CHẤM ĐIỂM bài làm trên thang điểm 10. Định dạng bắt buộc ở cuối bài: "Điểm số: X/10" (với X là số điểm).
4. Ngôn ngữ: Gần gũi, khích lệ (Dùng các từ như: Wow, Tuyệt vời, Cố gắng lên...).
5. Format nội dung đẹp, dễ đọc.`;if(window.AIInteraction&&typeof window.AIInteraction.gradeWithModal=="function"){const a=(r,l)=>{if(window.submitMathLesson){const d=e.match(/-(\d+)$/),c=d?d[1]:"1",h=`Bài ${c}. ${t}

Bài làm: ${i}`;window.submitMathLesson(h,r,null,0),console.log(`[LessonCore] Đã gửi yêu cầu lưu bài tự luận ${c} với điểm: ${r}`)}};window.AIInteraction.gradeWithModal("👨‍🏫 Thầy E Nhận Xét & Chấm Điểm",s+o,a)}},renderLessonPage(e,t,n=[]){const i=!!(typeof t.content=="function"||typeof t.content=="string"&&t.content.trim()||Array.isArray(t.tabs)&&t.tabs.some(d=>d.id==="study")),s=!!(typeof t.practice=="function"||typeof t.practice=="string"&&t.practice.trim()||typeof t.practice=="object"&&t.practice!==null&&Object.keys(t.practice).length>0||Array.isArray(t.tabs)&&t.tabs.some(d=>d.id==="practice")),o=!!(t.quizPool||t.metadata&&t.metadata.quizPool||t.quizFile||t.period==="156"||Array.isArray(t.tabs)&&t.tabs.some(d=>d.id==="quiz")),a=!!t.pptLink;let r=!1;try{const d=localStorage.getItem("userRole");r=d==="teacher"||d==="admin"}catch{}const l=document.body.classList.contains("mobile-mode");return`
            <div class="max-w-full mx-auto pb-10 px-1 pt-1">
                <div class="text-center mb-6 animate-slide-down flex flex-col md:flex-row items-center justify-center gap-4 relative">
                    <h1 class="${t.title.length>60?"text-xl md:text-2xl":t.title.length>35?"text-2xl md:text-3xl":"text-3xl md:text-5xl"} font-black text-blue-600 dark:text-blue-400 leading-tight tracking-tight uppercase">${t.title}</h1>
                    <div class="hidden md:flex absolute right-0 -top-6 flex-col items-end gap-2 z-[100]">
                        ${r&&!l&&Array.isArray(t.presentation)&&t.presentation.length>0?`
                        <button onclick="if(window.Lesson && window.Lesson.startPresentation) window.Lesson.startPresentation('${t.id||t.key||""}')" class="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm transition-all active:scale-95 flex items-center justify-center gap-1 border border-blue-700 w-full min-w-[120px]">
                            <span class="text-xs">🖥️</span> Trình chiếu
                        </button>`:""}
                        ${r&&!l?`
                        <a href="${{math:"teacher-toan.html",vietnamese:"teacher-tiengviet.html",history:"teacher-lichsu.html"}[router.currentSubject]||"teacher-tiengviet.html"}?week=${t.week||""}&period=${t.period||t.id||""}${t.period==="141"||t.id==="141"?"&export=practice":""}" target="_blank" class="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm transition-all active:scale-95 flex items-center justify-center gap-1 border border-emerald-700 decoration-none w-full min-w-[120px]">
                            <span class="text-xs">${t.period==="141"||t.id==="141"?"📥":"📊"}</span> ${t.period==="141"||t.id==="141"?"Tải báo cáo thực hành":"Xem kết quả"}
                        </a>`:""}
                    </div>
                </div>

                <div class="flex justify-center mb-4 overflow-x-auto px-1 sticky top-[92px] md:top-[96px] z-40">
                    <div class="bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl p-1 rounded-full border border-gray-100 dark:border-slate-800 shadow-xl shadow-blue-900/5 dark:shadow-slate-950/40 flex gap-1 w-full max-w-full px-2 items-center">
                        ${i?`
                        <button id="tab-study" onclick="router.switchTab('study')" class="tab-btn active flex-1 py-2.5 rounded-full text-[16px] md:text-xl font-black uppercase tracking-[0.1em] transition-all flex items-center justify-center gap-2 active:scale-95">
                            <span class="text-2xl">📖</span> Tìm hiểu bài
                        </button>`:""}
                        
                        ${s?`
                        <button id="tab-practice" onclick="router.switchTab('practice')" class="tab-btn flex-1 py-2.5 rounded-full text-[16px] md:text-xl font-black uppercase tracking-[0.1em] transition-all flex items-center justify-center gap-2 active:scale-95 text-gray-400">
                            <span class="text-2xl">✍️</span> Luyện tập
                        </button>`:""}
                        
                        ${o?`
                        <button id="tab-quiz" onclick="router.switchTab('quiz')" class="tab-btn flex-1 py-2.5 rounded-full text-[16px] md:text-xl font-black uppercase tracking-[0.1em] transition-all flex items-center justify-center gap-2 active:scale-95 text-gray-400">
                            <span class="text-2xl">🏆</span> Củng cố
                        </button>`:""}
                        
                        ${r&&a?`
                        <button id="tab-pptx" onclick="router.switchTab('pptx')" class="tab-btn flex-1 py-2.5 rounded-full text-[16px] md:text-xl font-black uppercase tracking-[0.1em] transition-all flex items-center justify-center gap-2 active:scale-95 text-orange-500 bg-orange-50/50 border border-orange-200">
                            <span class="text-2xl">🎦</span> Bài Giảng
                        </button>`:""}
                        


                        ${t.audio?`
                        <button id="btn-audio-play" onclick="router.toggleAudio()" title="Đọc mẫu" class="w-10 h-10 shrink-0 ml-1 bg-gradient-to-br from-indigo-50 to-cyan-50 hover:from-indigo-600 hover:to-cyan-600 text-white rounded-xl flex items-center justify-center transition-all active:scale-90 shadow-lg shadow-blue-200/50 dark:shadow-blue-900/30">
                            <svg id="icon-audio-play" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
                            <svg id="icon-audio-pause" class="w-5 h-5 hidden" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                        </button>
                        <audio id="lesson-audio" src="${t.audio}" preload="metadata"></audio>
                        `:""}
                    </div>
                </div>

                <div id="tab-content" class="lesson-content min-h-[300px] animate-fade-in px-1"></div>

                <div id="ai-chat-window" class="fixed inset-4 md:inset-auto md:bottom-32 md:right-8 md:w-[420px] md:h-[600px] bg-white dark:bg-slate-900 rounded-[28px] md:rounded-[40px] shadow-2xl border border-gray-100 dark:border-slate-800 hidden flex-col z-[2147483647] animate-scale-up overflow-hidden">
                    <div class="bg-gradient-to-r from-blue-600 to-indigo-700 p-5 md:p-6 text-white flex justify-between items-center shrink-0">
                        <div class="flex items-center gap-3">
                            <div class="w-11 h-11 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-2xl font-black">R</div>
                            <div>
                                <h3 class="text-base font-black leading-tight">Robot - Trợ lý của bạn</h3>
                                <p class="text-[9px] font-bold uppercase tracking-widest opacity-70">Hỏi nhiều câu thoải mái nhé!</p>
                            </div>
                        </div>
                        <button onclick="AIInteraction.toggleChat()" class="w-10 h-10 hover:bg-white/10 rounded-full transition-colors flex items-center justify-center text-xl">✕</button>
                    </div>
                    <div id="ai-chat-messages" class="flex-grow p-5 md:p-6 overflow-y-auto space-y-4 bg-gray-50/50 dark:bg-slate-900/50" style="min-height:0">
                        <div class="flex mb-3 animate-slide-up">
                            <div class="bg-white dark:bg-slate-800 border border-blue-50 dark:border-slate-700 p-4 rounded-2xl rounded-tl-none max-w-[85%] text-sm text-gray-700 dark:text-slate-200 font-medium shadow-sm leading-relaxed">
                                <div class="flex items-center gap-2 mb-1">
                                    <span class="text-[10px] font-black uppercase text-blue-600 dark:text-blue-400 tracking-widest">Robot</span>
                                </div>
                                <p class="mb-2">Chào bạn! Mình là **Robot**, mình rất vui được hỗ trợ bạn trong bài học <b>${t.title}</b> này.</p>
                                <p>Bạn có thắc mắc gì về bài học hay cần mình hướng dẫn làm bài tập không? <b>Hỏi bao nhiêu câu cũng được nhé!</b> 😊</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 bg-white dark:bg-slate-800 border-t border-gray-100 dark:border-slate-700 flex gap-2 shrink-0">
                        <input id="ai-chat-input" type="text" placeholder="Hỏi Robot điều gì đó..." 
                            class="flex-grow bg-gray-50 dark:bg-slate-900 border-2 border-gray-100 dark:border-slate-700 rounded-2xl px-5 py-3 text-sm font-bold text-gray-800 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition-all placeholder:text-gray-300 outline-none"
                            onkeypress="if(event.key === 'Enter') AIInteraction.sendAiMessage()">
                        <button onclick="AIInteraction.sendAiMessage()" class="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200 transition-all active:scale-90 shrink-0">
                            <svg class="w-5 h-5 transform rotate-90" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        `},renderSubjectHeader(e){const t=z.getColorClasses(e.color);return`
            <div class="flex items-center gap-8 mb-16 animate-fade-in px-4">
                <div class="w-24 h-24 ${t.bg} text-white rounded-[32px] flex items-center justify-center text-5xl shadow-2xl ${t.shadow} transform rotate-3">${e.icon}</div>
                <div>
                    <h2 class="text-4xl font-black text-gray-900 mb-2 leading-none">${e.name}</h2>
                    <div class="flex items-center gap-3">
                        <span class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                        <p class="text-gray-400 font-bold uppercase text-[11px] tracking-[0.2em] mt-1">Danh sách bài giảng tối ưu từ NotebookLM</p>
                    </div>
                </div>
            </div>
        `},renderEmptyContent(){return`
        <div class="py-32 text-center animate-fade-in">
            <div class="text-6xl mb-8 opacity-20">🏝️</div>
            <h3 class="text-2xl font-black text-gray-300 mb-2">Sách EduRobot đang được cập nhật</h3>
            <p class="text-gray-400 font-bold uppercase text-[10px] tracking-[0.3em]">Nội dung này sẽ sớm ra mắt</p>
        </div>
        `},_initFillBlanksSlotClick(){document.addEventListener("click",e=>{const t=e.target.closest('[id^="fb-slot-"]');if(!t)return;const n=t.getAttribute("data-id"),i=window[`fbState_${n}`];!i||!i.selectedWord||(t.dataset.value&&document.getElementById(`fb-bank-${n}`).querySelectorAll("button").forEach(a=>{a.dataset.word===t.dataset.value&&a.classList.contains("hidden")&&a.classList.remove("hidden")}),t.textContent=i.selectedWord,t.dataset.value=i.selectedWord,t.classList.remove("bg-amber-100","border-amber-400","text-amber-700","bg-red-100","border-red-400","text-red-700"),t.classList.add("bg-emerald-100","border-emerald-400","text-emerald-700"),i.selectedBtn.classList.add("hidden"),i.selectedBtn.classList.remove("ring-4","ring-amber-400","scale-105"),i.selectedWord=null,i.selectedBtn=null)})},_initFullscreenPPTX(){window.toggleFullscreenPPTX=function(){const e=document.getElementById("pptx-container");e&&(document.fullscreenElement?document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen():e.requestFullscreen?e.requestFullscreen().catch(t=>{console.error(`Error attempting to enable fullscreen: ${t.message}`)}):e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen())},document.addEventListener("fullscreenchange",()=>{const e=document.getElementById("btn-expand-pptx"),t=document.getElementById("btn-collapse-pptx");!e||!t||(document.fullscreenElement?(e.classList.add("hidden"),t.classList.remove("hidden")):(e.classList.remove("hidden"),t.classList.add("hidden")))})}};typeof document<"u"&&document.addEventListener("DOMContentLoaded",()=>{ee._initFullscreenPPTX&&ee._initFullscreenPPTX()});const He={renderUnitConversionExercise(e,t,n,i){const s=(i||"").toString();return`
            <div class="flex flex-col mb-3">
                <div class="conv-exercise py-2 flex items-center justify-between gap-3 group" data-exercise-id="${e}">
                    <div class="flex items-center gap-2 shrink-0 font-bold text-blue-600 text-base md:text-lg">
                        <span>${t}</span>
                        <span class="text-gray-400 font-medium">=</span>
                    </div>
                    <div class="relative flex-grow flex items-center gap-3 justify-end">
                        <div class="relative w-16 md:w-20">
                            <input type="text" id="input-${e}" 
                                class="w-full bg-transparent border-b-2 border-blue-400 px-1 py-1 text-center text-base md:text-lg font-black text-emerald-700 focus:border-blue-700 outline-none transition-all placeholder:text-transparent"
                                placeholder="...">
                        </div>
                        <div class="relative">
                            <button id="btn-mic-${e}" onclick="Lesson.toggleSpeechRec('${e}')" title="Nhập bằng giọng nói" 
                                class="w-8 h-8 md:w-10 md:h-10 bg-transparent text-blue-400 hover:text-blue-600 rounded-full flex items-center justify-center transition-all active:scale-95">
                                <svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                            </button>
                            <div id="mic-status-${e}" class="absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-red-500 text-white text-[9px] font-bold rounded-full animate-pulse hidden z-10 whitespace-nowrap">Đang nghe...</div>
                        </div>
                        <span class="font-bold text-blue-600 text-base md:text-lg shrink-0 min-w-[2rem] text-left">${n}</span>
                        <button onclick="Lesson.checkMathExercise('${e}', '${s.replace(/'/g,"\\'")}', 'Đổi đơn vị', '${t.replace(/'/g,"\\'")}')" 
                            class="w-8 h-8 md:w-10 md:h-10 shrink-0 bg-blue-100 hover:bg-blue-600 hover:text-white text-blue-600 rounded-xl flex items-center justify-center transition-all active:scale-95 shadow-sm ml-1">
                            <svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                        </button>
                    </div>
                </div>
                <div id="feedback-${e}" class="hidden animate-fade-in mt-1 w-full text-xs font-bold pl-2"></div>
            </div>
        `},renderMathExercise(e,t,n,i="đọc là:",s=null){const o=(s||t).toString();return`
            <div class="math-exercise p-8 bg-gray-50 rounded-[32px] border-2 border-transparent hover:border-blue-200 transition-all group scale-95" data-exercise-id="${e}">
                <div class="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                    <div class="flex items-center gap-4 md:gap-5 shrink-0">
                        <div class="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-xl shadow-sm group-hover:rotate-6 transition-transform">🔢</div>
                        <div>
                            <p class="text-xs md:text-sm font-black text-gray-400 uppercase tracking-widest mb-1">${n}</p>
                            <h4 class="text-3xl md:text-4xl font-black text-blue-600">${t}</h4>
                        </div>
                    </div>
                    <span class="text-base md:text-lg font-bold text-gray-400 uppercase tracking-tighter whitespace-nowrap shrink-0 md:ml-4">${i}</span>
                    <div class="relative flex-grow w-full">
                        <input type="text" id="input-${e}" 
                            class="w-full bg-white dark:bg-slate-800 border-2 border-white dark:border-slate-700 rounded-2xl px-6 py-5 pr-28 text-lg md:text-xl font-black text-gray-800 dark:text-slate-100 shadow-sm focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900/20 focus:border-blue-500 outline-none transition-all placeholder:text-gray-200"
                            placeholder="Nhập kết quả...">
                        <button id="btn-mic-${e}" onclick="Lesson.toggleSpeechRec('${e}')" title="Nhập bằng giọng nói" 
                            class="absolute right-14 top-2 bottom-2 w-11 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center transition-all shadow-sm active:scale-95 border border-blue-100 z-10">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                        </button>
                        <div id="mic-status-${e}" class="absolute -top-3 right-14 px-2 py-1 bg-red-500 text-white text-[9px] font-bold rounded-full animate-pulse hidden z-20">Đang nghe...</div>
                        <button onclick="Lesson.checkMathExercise('${e}', '${o.replace(/'/g,"\\'")}', '${n}', '${t.replace(/'/g,"\\'")}')" 
                            class="absolute right-2 top-2 bottom-2 w-11 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-lg font-black transition-all active:scale-95 shadow-md shadow-blue-200 flex items-center justify-center z-10">
                            <svg class="w-6 h-6 transform" fill="currentColor" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </button>
                    </div>
                </div>
                <div id="feedback-${e}" class="mt-4 hidden animate-fade-in"></div>
            </div>
        `},checkMathExercise(e,t,n,i){const s=document.getElementById(`input-${e}`),o=document.getElementById(`feedback-${e}`),a=s.value.trim().toLowerCase();if(!a)return;const r=a.replace(/\s/g,"").replace(/,/g,"."),l=t.toString().replace(/\s/g,"").replace(/,/g,".").toLowerCase();o.classList.remove("hidden"),r===l?(o.innerHTML='<div class="flex items-center gap-1 text-emerald-600 font-bold ml-1 animate-pop-in"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg><span>Tuyệt vời! Bạn đã trả lời đúng.</span></div>',s.classList.add("border-emerald-500","text-emerald-600","bg-transparent"),s.classList.remove("border-blue-400","text-emerald-700"),window.Quiz&&typeof window.Quiz.playSFX=="function"&&window.Quiz.playSFX("correct")):(o.innerHTML='<div class="flex items-center gap-1 text-orange-500 font-bold ml-1 animate-pop-in"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg><span>Sai mất rồi. Thử lại nhé!</span></div>',s.classList.add("border-orange-500","text-orange-600","bg-transparent"),s.classList.remove("border-blue-400","text-emerald-700"),window.Quiz&&typeof window.Quiz.playSFX=="function"&&window.Quiz.playSFX("wrong"))},renderVerticalCalculation(e,t,n,i,s,o=0){const a=Math.max(t.toString().replace(".","").length,i.toString().replace(".","").length,s.toString().replace(".","").length)+1,r={"+":"+","-":"−","*":"×",x:"×","/":"÷"}[n]||n,d=s.toString().replace(/'/g,"\\'"),c=(p,b)=>p.padStart(b," "),h=c(t.toString(),a),u=c(i.toString(),a),g=(p,b="")=>{let f="";for(let k=0;k<a;k++){const S=p[k]||"";f+=`<div class="w-10 h-10 md:w-12 md:h-12 border border-blue-200 bg-white flex items-center justify-center text-lg md:text-xl font-black text-blue-600">${S===" "?"":S}</div>`}return`<div class="flex items-center gap-0"><div class="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-xl font-black text-gray-400">${b}</div>${f}</div>`};let m="";for(let p=0;p<a;p++)m+=`<input type="text" maxlength="1" id="vc-cell-${e}-${p}" class="w-10 h-10 md:w-12 md:h-12 border-2 border-dashed border-orange-300 bg-orange-50 text-center text-lg md:text-xl font-black text-orange-700 outline-none focus:border-orange-500 focus:bg-white transition-all rounded-sm" oninput="this.value=this.value.slice(-1); const next=document.getElementById('vc-cell-${e}-${p+1}'); if(next && this.value) next.focus();" onkeydown="if(event.key==='Backspace' && !this.value){ const prev=document.getElementById('vc-cell-${e}-${p-1}'); if(prev) prev.focus(); }">`;return`
        <div class="vc-exercise p-6 md:p-8 bg-white dark:bg-slate-800 rounded-[32px] shadow-sm border border-gray-100 dark:border-slate-700 mt-6 animate-fade-in" id="vc-ex-${e}">
            <div class="flex items-start gap-4 mb-6"><div class="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center font-black shrink-0 text-xl">📝</div><h3 class="text-xl font-bold text-gray-800 dark:text-slate-100">Đặt tính rồi tính</h3></div>
            <div class="inline-flex flex-col items-end gap-0 p-4 bg-gray-50 dark:bg-slate-900 rounded-2xl border border-gray-200 mx-auto">
                ${g(h,"")}
                ${g(u,r)}
                <div class="flex items-center gap-0 my-1"><div class="w-10 h-10 md:w-12 md:h-12"></div><div class="border-t-[3px] border-blue-900" style="width: ${a*48}px;"></div></div>
                <div class="flex items-center gap-0"><div class="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-xl font-black text-emerald-500">=</div>${m}</div>
            </div>
            <div class="mt-6 flex items-center gap-4"><button onclick="Lesson.checkVerticalCalc('${e}', '${d}', ${a})" class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl shadow-md transition-transform active:scale-95">Kiểm Tra</button><span id="vc-feedback-${e}" class="text-sm font-bold opacity-0 transition-opacity"></span></div>
        </div>
        `},checkVerticalCalc(e,t,n){let i="";for(let a=0;a<n;a++){const r=document.getElementById(`vc-cell-${e}-${a}`);r&&(i+=r.value||"")}i=i.trim();const s=t.replace(/\s/g,"").trim(),o=document.getElementById(`vc-feedback-${e}`);if(o.classList.remove("opacity-0","text-emerald-500","text-orange-500"),i===s){o.innerText="Chính xác! 🎉",o.classList.add("text-emerald-500");for(let a=0;a<n;a++){const r=document.getElementById(`vc-cell-${e}-${a}`);r&&(r.classList.remove("border-orange-300","bg-orange-50"),r.classList.add("border-emerald-400","bg-emerald-50"),r.readOnly=!0)}window.Quiz&&typeof window.Quiz.playSFX=="function"&&window.Quiz.playSFX("correct")}else o.innerText="Sai mất rồi. Thử lại nhé!",o.classList.add("text-orange-500"),window.Quiz&&typeof window.Quiz.playSFX=="function"&&window.Quiz.playSFX("wrong")},renderFractionInput(e,t,n,i){const s=n.toString().replace(/'/g,"\\'"),o=i.toString().replace(/'/g,"\\'");return`
        <div class="fraction-exercise p-6 md:p-8 bg-white dark:bg-slate-800 rounded-[32px] shadow-sm border border-gray-100 dark:border-slate-700 mt-6 animate-fade-in" id="frac-ex-${e}">
            <div class="flex items-start gap-4 mb-6"><div class="w-10 h-10 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center font-black shrink-0 text-xl">⅗</div><h3 class="text-xl font-bold text-gray-800 dark:text-slate-100">${t}</h3></div>
            <div class="flex items-center justify-center gap-4 p-6 bg-purple-50 dark:bg-slate-900 rounded-2xl">
                <span class="text-xl font-bold text-gray-600">Kết quả =</span>
                <div class="inline-flex flex-col items-center gap-0">
                    <input type="text" id="frac-num-${e}" placeholder="Tử số" class="w-20 md:w-24 h-10 text-center text-lg font-black text-purple-800 bg-white border-2 border-purple-200 rounded-t-xl outline-none focus:border-purple-500 transition-all placeholder:text-gray-300 placeholder:text-sm placeholder:font-normal">
                    <div class="w-20 md:w-24 h-[3px] bg-purple-800"></div>
                    <input type="text" id="frac-den-${e}" placeholder="Mẫu số" class="w-20 md:w-24 h-10 text-center text-lg font-black text-purple-800 bg-white border-2 border-purple-200 rounded-b-xl outline-none focus:border-purple-500 transition-all placeholder:text-gray-300 placeholder:text-sm placeholder:font-normal">
                </div>
            </div>
            <div class="mt-6 flex items-center gap-4"><button onclick="Lesson.checkFraction('${e}', '${s}', '${o}')" class="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-black rounded-xl shadow-md transition-transform active:scale-95">Kiểm Tra</button><span id="frac-feedback-${e}" class="text-sm font-bold opacity-0 transition-opacity"></span></div>
        </div>
        `},checkFraction(e,t,n){var a,r;const i=(((a=document.getElementById(`frac-num-${e}`))==null?void 0:a.value)||"").trim(),s=(((r=document.getElementById(`frac-den-${e}`))==null?void 0:r.value)||"").trim(),o=document.getElementById(`frac-feedback-${e}`);o.classList.remove("opacity-0","text-emerald-500","text-orange-500"),i===t&&s===n?(o.innerText="Xuất sắc! Phân số chính xác! 🎉",o.classList.add("text-emerald-500"),document.getElementById(`frac-num-${e}`).classList.add("border-emerald-400","bg-emerald-50"),document.getElementById(`frac-den-${e}`).classList.add("border-emerald-400","bg-emerald-50"),window.Quiz&&typeof window.Quiz.playSFX=="function"&&window.Quiz.playSFX("correct")):(o.innerText="Chưa đúng. Kiểm tra lại tử số và mẫu số nhé!",o.classList.add("text-orange-500"),window.Quiz&&typeof window.Quiz.playSFX=="function"&&window.Quiz.playSFX("wrong"))},renderWordProblem(e,t,n=[],i=null){return`
            <div class="word-problem p-6 md:p-8 bg-white dark:bg-slate-800 rounded-[32px] shadow-sm border border-gray-100 dark:border-slate-700 mt-6 animate-fade-in" id="wp-ex-${e}">
                <div class="flex items-start gap-4 mb-6"><div class="w-10 h-10 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center font-black shrink-0 text-xl">📖</div><h3 class="text-xl font-bold text-gray-800 dark:text-slate-100">Giải bài toán</h3></div>
                <div class="p-5 bg-amber-50 dark:bg-slate-900 rounded-2xl border-2 border-amber-200 dark:border-amber-800/30 mb-6"><p class="text-lg md:text-xl font-bold text-gray-800 dark:text-slate-100 leading-relaxed" id="wp-problem-text-${e}">${t}</p></div>
                <div class="space-y-4">
                    <div class="w-full relative">
                        <label class="text-sm font-black text-amber-600 uppercase tracking-widest mb-2 block">Bài giải của em</label>
                        <textarea id="wp-full-${e}" rows="5" class="w-full p-5 pr-14 rounded-2xl border-2 border-amber-200 outline-none focus:border-amber-500 text-lg md:text-xl font-bold placeholder:text-gray-300 shadow-inner transition-all resize-y bg-amber-50/30 leading-relaxed" placeholder="Ví dụ:
Số đó là:
10 + 5 = 15
Đáp số: 15"></textarea>
                        <button onclick="Lesson.toggleSpeechRec('wp-full-${e}')" class="absolute right-4 top-10 text-amber-400 hover:text-amber-600 transition-colors bg-white p-2 rounded-xl shadow-sm" title="Nhập bằng giọng nói">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                        </button>
                    </div>
                </div>
                ${n.length>0?`<details class="mt-4"><summary class="text-xs font-black text-gray-400 uppercase tracking-widest cursor-pointer hover:text-blue-500 transition-colors">💡 Gợi ý các bước</summary><ul class="mt-2 pl-4 space-y-1 text-sm text-gray-500">${n.map(s=>`<li class="list-disc">${s}</li>`).join("")}</ul></details>`:""}
                <div class="mt-6 flex justify-end"><button onclick="Lesson.submitWordProblemAI('${e}')" class="btn-tutor-e w-14 h-14" title="Thầy E chấm bài">E</button></div>
            </div>
        `},submitWordProblemAI(e){var o,a;const t=((o=document.getElementById(`wp-full-${e}`))==null?void 0:o.value)||"",n=((a=document.getElementById(`wp-problem-text-${e}`))==null?void 0:a.innerText)||"";if(!t.trim()){alert("Thầy E nhắc: Em chưa điền bài giải kìa. Hãy viết lời giải, phép tính và đáp số nhé! ✏️");return}const i=`Đề bài:
${n}

Bài giải của học sinh:
${t}`,s=`

[HƯỚNG DẪN DÀNH RIÊNG CHO AI/EDUROBOT]:
- BƯỚC 1: Kiểm tra xem học sinh làm ĐÚNG hay SAI bài toán trên.
- BƯỚC 2: 
  + ✅ NẾU HỌC SINH LÀM ĐÚNG: Hãy khen ngợi nồng nhiệt. SAU ĐÓ, hiển thị tiêu đề "LỜI GIẢI CHI TIẾT" và trình bày đầy đủ: Lời giải mẫu, Các phép tính, và Đáp số cuối cùng để học sinh tham khảo cách trình bày chuẩn.
  + ⛔ NẾU HỌC SINH LÀM SAI: TUYỆT ĐỐI KHÔNG được cho đáp số đúng. Hãy chỉ gợi ý "Gần đúng rồi, bạn thử kiểm tra lại bước... xem sao" hoặc "Bạn thử dùng quy tắc... để tính nhé". Hãy là một người hướng dẫn kiên nhẫn.`;window.AIInteraction&&typeof window.AIInteraction.gradeWithModal=="function"?window.AIInteraction.gradeWithModal("👨‍🏫 Thầy E Nhận Xét",i+s):window.AIInteraction&&typeof window.AIInteraction.sendDirectMessage=="function"&&window.AIInteraction.sendDirectMessage(i,s)}},Se={renderDragDropFormula(e,t,n,i){JSON.stringify(i).replace(/"/g,"&quot;");const s=n.map((a,r)=>a.replace(/\[\[slot\]\]/g,()=>`<div class="dd-slot inline-flex items-center justify-center min-w-[60px] h-10 border-2 border-dashed border-blue-300 rounded-lg bg-blue-50/50 mx-1 transition-all" 
                    ondragover="event.preventDefault()" ondrop="Lesson.drop(event, '${e}')"></div>`)).join("<br>"),o=i.map((a,r)=>`
            <div class="dd-option px-4 py-2 bg-white border-2 border-blue-100 rounded-xl shadow-sm cursor-grab active:cursor-grabbing font-bold text-blue-600 hover:border-blue-400 hover:shadow-md transition-all whitespace-nowrap" 
                draggable="true" ondragstart="Lesson.drag(event)" data-value="${a}">${a}</div>
        `).join("");return`
        <div class="dd-exercise p-6 md:p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 rounded-[32px] shadow-sm border border-blue-100 dark:border-slate-700 mt-6 animate-fade-in" id="dd-ex-${e}">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">🧩</div>
                <h3 class="text-xl md:text-2xl font-black text-blue-600 dark:text-blue-200">${t}</h3>
            </div>
            
            <div class="bg-white/80 dark:bg-slate-900/80 p-6 rounded-2xl border-2 border-blue-100 dark:border-slate-700 mb-6 text-lg md:text-xl font-bold leading-relaxed text-center">
                ${s}
            </div>

            <div class="bg-blue-100/30 dark:bg-slate-800/30 p-4 rounded-2xl">
                <p class="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-3">🏷️ Kéo các nhãn này vào ô trống</p>
                <div class="flex flex-wrap gap-3 justify-center">
                    ${o}
                </div>
            </div>

            <div class="mt-8 flex items-center gap-4">
                <button onclick="Lesson.clearSlots('${e}')" class="px-6 py-3 bg-white border-2 border-gray-200 text-gray-500 font-bold rounded-xl hover:bg-gray-50 transition-all font-bold">Làm lại</button>
                <button onclick="Lesson.checkDragDrop('${e}')" class="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl shadow-lg transition-all active:scale-95 text-lg">Kiểm Tra</button>
            </div>
        </div>
        `},drag(e){e.dataTransfer.setData("text",e.target.dataset.value),e.target.classList.add("opacity-40"),setTimeout(()=>e.target.classList.remove("opacity-40"),0)},drop(e,t){e.preventDefault();const n=e.dataTransfer.getData("text"),i=e.target.closest(".dd-slot");i&&(i.innerText=n,i.dataset.value=n,i.classList.remove("border-dashed","bg-blue-50/50"),i.classList.add("bg-blue-600","text-white","border-solid","scale-105"),setTimeout(()=>i.classList.remove("scale-105"),200),window.Quiz&&typeof window.Quiz.playSFX=="function"&&window.Quiz.playSFX("correct"))},clearSlots(e){const t=document.getElementById(`dd-ex-${e}`);t&&t.querySelectorAll(".dd-slot").forEach(n=>{n.innerText="",delete n.dataset.value,n.classList.add("border-dashed","bg-blue-50/50"),n.classList.remove("bg-blue-600","text-white","border-solid","bg-emerald-500","bg-red-500")})},checkDragDrop(e){alert("Thầy E: 'Tính năng kiểm tra kéo thả đang được hoàn thiện dựa trên từng bài cụ thể. Em hãy tự kiểm tra xem đã hợp lý chưa nhé!'")},renderDynamicGeometryLab(e,t,n){return`
        <div class="geometry-lab p-6 md:p-8 bg-slate-900 text-white rounded-[32px] shadow-2xl border-4 border-slate-800 mt-6 overflow-hidden relative group" id="geo-lab-${e}">
            <div class="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg class="w-48 h-48" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
            </div>
            
            <div class="relative z-10">
                <div class="flex items-center gap-3 mb-8">
                    <div class="w-12 h-12 bg-emerald-500 text-white rounded-2xl flex items-center justify-center text-2xl font-black">📐</div>
                    <div>
                        <h3 class="text-xl md:text-2xl font-black text-emerald-400">Geometry Lab</h3>
                        <p class="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">${t==="cube"?"Khám phá Hình Khối 3D":"Khám phá Hình Phẳng"}</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div class="aspect-square bg-slate-800/50 backdrop-blur-xl rounded-[40px] border-2 border-slate-700 flex items-center justify-center relative shadow-inner">
                        <div id="geo-canvas-${e}" class="w-full h-full flex items-center justify-center">
                             <!-- 3D or 2D Content Dynamic -->
                             ${t==="cube"?`
                                <div class="relative w-40 h-40 preserve-3d animate-spin-slow transition-transform duration-500" 
                                    id="geo-target-${e}"
                                    style="transform-style: preserve-3d; transform: rotateX(-20deg) rotateY(30deg);">
                                    <div class="absolute inset-0 bg-emerald-500/80 border-2 border-white/50" style="transform: translateZ(80px)"></div>
                                    <div class="absolute inset-0 bg-emerald-600/80 border-2 border-white/50" style="transform: translateZ(-80px) rotateY(180deg)"></div>
                                    <div class="absolute inset-0 bg-emerald-400/80 border-2 border-white/50" style="transform: translateX(80px) rotateY(90deg)"></div>
                                    <div class="absolute inset-0 bg-emerald-400/80 border-2 border-white/50" style="transform: translateX(-80px) rotateY(-90deg)"></div>
                                    <div class="absolute inset-0 bg-emerald-300/80 border-2 border-white/50" style="transform: translateY(-80px) rotateX(90deg)"></div>
                                    <div class="absolute inset-0 bg-emerald-700/80 border-2 border-white/50" style="transform: translateY(80px) rotateX(-90deg)"></div>
                                </div>
                             `:""}
                        </div>
                    </div>

                    <div class="space-y-6">
                        <div class="bg-slate-800/50 p-6 rounded-3xl border border-slate-700">
                            <h4 class="text-xs font-black text-emerald-400 uppercase tracking-widest mb-4">Thông số điều chỉnh</h4>
                            <div class="space-y-4">
                                ${Object.entries(n.controls||{}).map(([i,s])=>`
                                    <div>
                                        <div class="flex justify-between text-xs font-bold mb-2">
                                            <span class="text-slate-400">${s.label}</span>
                                            <span class="text-emerald-400" id="val-${e}-${i}">${s.value}${s.unit||""}</span>
                                        </div>
                                        <input type="range" min="${s.min}" max="${s.max}" value="${s.value}" 
                                            class="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                                            oninput="Lesson.updateGeometry('${e}', '${i}', this.value, '${t}')">
                                    </div>
                                `).join("")}
                            </div>
                        </div>

                        <div class="bg-indigo-600/20 p-6 rounded-3xl border border-indigo-500/30">
                            <h4 class="text-xs font-black text-indigo-300 uppercase tracking-widest mb-2">Kết quả tính toán</h4>
                        <div id="geo-result-${e}" class="text-2xl font-black text-white opacity-0 transition-opacity duration-500">
                            ${n.initialResult||"---"}
                        </div>
                    </div>
                    <div class="flex gap-4">
                        <button onclick="Lesson.showGeometryResult('${e}')" class="flex-1 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-black rounded-2xl shadow-lg transition-all active:scale-95 uppercase tracking-widest text-xs">Chốt kết quả</button>
                        <button onclick="Lesson.resetGeometry('${e}', '${t}', ${JSON.stringify(n).replace(/"/g,"&quot;")})" class="px-6 py-4 bg-slate-800 text-slate-400 font-bold rounded-2xl hover:bg-slate-700 transition-all text-xs uppercase italic">Làm lại</button>
                    </div>
                </div>
            </div>
        </div>
        `},updateGeometry(e,t,n,i){const s=document.getElementById(`val-${e}-${t}`);s&&(s.innerText=n);const o=document.getElementById(`geo-target-${e}`),a=document.getElementById(`geo-result-${e}`);if(a&&a.classList.add("opacity-0"),i==="cube"){const r=Math.min(n*2,200);if(o){o.style.width=`${r}px`,o.style.height=`${r}px`;const d=r/2,c=o.children;c.length>=6&&(c[0].style.transform=`translateZ(${d}px)`,c[1].style.transform=`translateZ(-${d}px) rotateY(180deg)`,c[2].style.transform=`translateX(${d}px) rotateY(90deg)`,c[3].style.transform=`translateX(-${d}px) rotateY(-90deg)`,c[4].style.transform=`translateY(-${d}px) rotateX(90deg)`,c[5].style.transform=`translateY(${d}px) rotateX(-90deg)`)}const l=Math.pow(n,3);a&&(a.innerHTML=`V = ${n}³ = <span class="text-emerald-400">${l}</span> cm³`)}},showGeometryResult(e){const t=document.getElementById(`geo-result-${e}`);t&&(t.classList.remove("opacity-0"),t.classList.add("animate-bounce-brief"),window.audioCommon&&window.audioCommon.playSuccess())},resetGeometry(e,t,n){const i=document.getElementById(`geo-lab-${e}`);if(i){const s=i.parentElement;s.innerHTML=this.renderDynamicGeometryLab(e,t,n)}},renderMatchingExercise(e,t,n,i,s){let o="Nối cặp tương ứng",a=[],r="";if(Array.isArray(t))a=t,r=n||"";else if(Array.isArray(n)&&Array.isArray(i)){o=t;const u=n,g=i,m=s||[];m&&m.length>0?a=m.map(p=>({left:u[p.leftIdx!==void 0?p.leftIdx:p[0]],right:g[p.rightIdx!==void 0?p.rightIdx:p[1]]})):a=u.map((p,b)=>({left:p,right:g[b]}))}else o=t,a=n||[],r=i||"";typeof window<"u"&&(window[`matchState_${e}`]={left:null,right:null,connections:[]});const l=[...new Set(a.map(u=>u.left))].sort(()=>Math.random()-.5),d=[...new Set(a.map(u=>u.right))].sort(()=>Math.random()-.5),c=l.map((u,g)=>`
            <div id="match-l-${e}-${g}" onclick="Lesson.selectMatch('${e}', 'left', ${g}, '${u.replace(/'/g,"\\'")}')" 
                class="p-5 bg-white dark:bg-slate-800 border-2 border-blue-100 rounded-2xl cursor-pointer hover:border-blue-400 hover:shadow-md transition-all font-black text-gray-800 dark:text-slate-100 text-xl md:text-2xl lg:text-3xl mb-4 shadow-sm leading-relaxed">
                ${u}
            </div>
        `).join(""),h=d.map((u,g)=>`
            <div id="match-r-${e}-${g}" onclick="Lesson.selectMatch('${e}', 'right', ${g}, '${u.replace(/'/g,"\\'")}')" 
                class="p-5 bg-white dark:bg-slate-800 border-2 border-indigo-100 rounded-2xl cursor-pointer hover:border-indigo-400 hover:shadow-md transition-all font-black text-gray-800 dark:text-slate-100 text-xl md:text-2xl lg:text-3xl mb-4 shadow-sm text-right leading-relaxed">
                ${u}
            </div>
        `).join("");return`
        <div class="matching-exercise p-8 md:p-10 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 rounded-[32px] shadow-sm border border-blue-100 dark:border-slate-700 mt-6 animate-fade-in" id="match-ex-${e}">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-3xl font-black shrink-0 shadow-md">↔️</div>
                <h3 class="text-2xl md:text-3xl lg:text-4xl font-black text-blue-600 dark:text-blue-200">${o}</h3>
            </div>
            ${r?`<p class="text-xl md:text-2xl font-black text-blue-600 mb-4">${r}</p>`:""}
            <div class="grid grid-cols-2 gap-8 md:gap-16 relative">
                <div id="match-left-col-${e}">${c}</div>
                <div id="match-right-col-${e}">${h}</div>
                <canvas id="match-canvas-${e}" class="absolute inset-0 pointer-events-none z-10" style="width: 100%; height: 100%;"></canvas>
            </div>
            <div class="mt-6 flex items-center gap-4">
                <button onclick="Lesson.checkMatching('${e}', '${JSON.stringify(a).replace(/'/g,"\\'").replace(/"/g,"&quot;")}')" class="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl shadow-lg transition-all active:scale-95 text-xl">Kiểm Tra</button>
                <button onclick="Lesson.resetMatching('${e}')" class="px-6 py-3 bg-white border-2 border-gray-200 text-gray-500 font-bold rounded-xl hover:bg-gray-50 transition-all text-lg">Làm lại</button>
                <span id="match-feedback-${e}" class="text-xl md:text-2xl font-black opacity-0 transition-opacity"></span>
            </div>
        </div>
        `},selectMatch(e,t,n,i){var a;const s=window[`matchState_${e}`];if(!s)return;const o=document.getElementById(`match-${t==="left"?"l":"r"}-${e}-${n}`);if(((a=s[t])==null?void 0:a.idx)===n){o.classList.remove("ring-4",t==="left"?"ring-blue-400":"ring-indigo-400","scale-105"),s[t]=null;return}document.querySelectorAll(`[id^="match-${t==="left"?"l":"r"}-${e}-"]`).forEach(r=>{r.classList.remove("ring-4","ring-blue-400","ring-indigo-400","scale-105")}),o.classList.add("ring-4",t==="left"?"ring-blue-400":"ring-indigo-400","scale-105"),s[t]={idx:n,value:i},s.left&&s.right&&(s.connections.push({left:{...s.left},right:{...s.right}}),s.left=null,s.right=null,document.querySelectorAll(`[id^="match-"][id*="-${e}-"]`).forEach(r=>{r.classList.remove("ring-4","ring-blue-400","ring-indigo-400","scale-105")}),this.drawMatchingLines(e))},drawMatchingLines(e){const t=window[`matchState_${e}`],n=document.getElementById(`match-canvas-${e}`);if(!n)return;const i=n.getContext("2d"),s=n.getBoundingClientRect();n.width=s.width,n.height=s.height,i.clearRect(0,0,n.width,n.height),i.strokeStyle="#3b82f6",i.lineWidth=3,i.lineCap="round",t.connections.forEach(o=>{const a=document.getElementById(`match-l-${e}-${o.left.idx}`),r=document.getElementById(`match-r-${e}-${o.right.idx}`);if(a&&r){const l=a.getBoundingClientRect(),d=r.getBoundingClientRect(),c=l.right-s.left,h=l.top+l.height/2-s.top,u=d.left-s.left,g=d.top+d.height/2-s.top;i.beginPath(),i.moveTo(c,h),i.bezierCurveTo(c+40,h,u-40,g,u,g),i.stroke()}})},checkMatching(e,t){const n=JSON.parse(t.replace(/&quot;/g,'"')),i=window[`matchState_${e}`],s=document.getElementById(`match-feedback-${e}`);let o=0;i.connections.forEach(a=>{n.some(l=>l.left===a.left.value&&l.right===a.right.value)&&o++}),s.classList.remove("opacity-0","text-emerald-500","text-orange-500"),o===n.length?(s.innerText="Chính xác tuyệt đối! 🎉",s.classList.add("text-emerald-500"),window.Quiz&&typeof window.Quiz.playSFX=="function"&&window.Quiz.playSFX("correct")):(s.innerText=`Đúng ${o}/${n.length}. Thử lại nhé!`,s.classList.add("text-orange-500"),window.Quiz&&typeof window.Quiz.playSFX=="function"&&window.Quiz.playSFX("wrong"))},resetMatching(e){const t=window[`matchState_${e}`];t&&(t.left=null,t.right=null,t.connections=[],this.drawMatchingLines(e),document.getElementById(`match-feedback-${e}`).classList.add("opacity-0"))},renderFillBlanks(e,t,n,i,s){let o="Điền từ vào chỗ trống",a="",r=[],l=[];Array.isArray(t)?(r=t,a=n,l=i||[]):typeof t=="string"&&Array.isArray(n)?(a=t,r=n,l=i||[]):(o=t,a=n,r=i||[],l=s||[]),a&&a.includes("{0}")&&(a=a.replace(/\{\d+\}/g,"[[slot]]")),typeof window<"u"&&(window[`fbState_${e}`]={selectedWord:null,selectedBtn:null,answers:l});const d=[...r].sort(()=>Math.random()-.5),c=a.replace(/\[\[slot\]\]/g,()=>`<span id="fb-slot-${e}-${Math.random().toString(36).substr(2,9)}" class="fb-slot inline-block min-w-[80px] h-7 border-b-2 border-dashed border-amber-300 bg-amber-50/30 mx-1 px-2 text-center align-bottom transition-all cursor-pointer font-black text-amber-700" data-id="${e}"></span>`),h=d.map((u,g)=>`
            <button id="fb-word-${e}-${g}" onclick="Lesson.selectFillBank('${e}', '${u.replace(/'/g,"\\'")}', ${g})" 
                class="px-4 py-2 bg-white border-2 border-amber-200 text-amber-800 font-bold rounded-xl shadow-sm hover:border-amber-400 hover:bg-amber-50 transition-all active:scale-95"
                data-word="${u}">${u}</button>
        `).join("");return`
        <div class="fill-blanks-exercise p-6 md:p-8 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-800 dark:to-slate-900 rounded-[32px] shadow-sm border border-amber-100 dark:border-slate-700 mt-6 animate-fade-in" id="fb-ex-${e}">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-amber-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">📝</div>
                <h3 class="text-xl md:text-2xl font-black text-amber-900 dark:text-amber-200">${o}</h3>
            </div>
            
            <div class="bg-white/90 dark:bg-slate-900/90 p-6 md:p-10 rounded-[40px] border-2 border-amber-100 dark:border-slate-700 mb-8 text-lg md:text-2xl font-bold leading-relaxed text-gray-800 dark:text-slate-100">
                ${c}
            </div>

            <div class="bg-amber-100/40 p-5 rounded-3xl">
                <p class="text-[10px] font-black text-amber-600 uppercase tracking-widest mb-3">🏷️ Chọn từ để điền</p>
                <div class="flex flex-wrap gap-3" id="fb-bank-${e}">
                    ${h}
                </div>
            </div>

            <div class="mt-8 flex items-center gap-4">
                <button onclick="Lesson.checkFillBlanks('${e}', ${JSON.stringify(l).replace(/"/g,"&quot;")})" class="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-black rounded-xl shadow-lg transition-all active:scale-95 text-lg">Kiểm Tra</button>
                <button onclick="Lesson.resetFillBlanks('${e}')" class="px-6 py-3 bg-white border-2 border-gray-200 text-gray-500 font-bold rounded-xl hover:bg-gray-50 transition-all">Làm lại</button>
                <span id="fb-feedback-${e}" class="text-base font-bold opacity-0 transition-opacity"></span>
            </div>
        </div>
        `},selectFillBank(e,t,n){const i=window[`fbState_${e}`];if(!i)return;document.querySelectorAll(`#fb-bank-${e} button`).forEach(o=>o.classList.remove("ring-4","ring-amber-400","scale-105"));const s=document.getElementById(`fb-word-${e}-${n}`);s.classList.add("ring-4","ring-amber-400","scale-105"),i.selectedWord=t,i.selectedBtn=s},checkFillBlanks(e,t){const n=window[`fbState_${e}`],i=t||(n?n.answers:null)||[],s=document.getElementById(`fb-feedback-${e}`),o=document.querySelectorAll(`.fb-slot[data-id="${e}"]`);let a=0,r=o.length;o.forEach((l,d)=>{const c=(l.dataset.value||"").trim().toLowerCase(),h=i[d]?i[d].toLowerCase():"";c===h&&c!==""?(l.classList.remove("bg-amber-100","border-amber-400","text-amber-700","bg-red-100","border-red-400","text-red-700","bg-emerald-100","border-emerald-400","text-emerald-700"),l.classList.add("bg-emerald-100","border-emerald-500","text-emerald-700"),a++):(l.classList.remove("bg-amber-100","border-amber-400","text-amber-700","bg-red-100","border-red-400","text-red-700","bg-emerald-100","border-emerald-400","text-emerald-700"),l.classList.add("bg-red-100","border-red-500","text-red-700"))}),s.classList.remove("opacity-0","text-emerald-600","text-red-600"),a===r?(s.textContent="🌟 Tuyệt vời! Bạn đã điền đúng tất cả.",s.classList.add("text-emerald-600"),window.Visuals&&window.Visuals.confetti&&window.Visuals.confetti()):(s.textContent=`Cố lên! Bạn đã đúng ${a}/${r} chỗ.`,s.classList.add("text-red-600")),s.classList.add("opacity-100")},resetFillBlanks(e){const t=window[`fbState_${e}`];t&&(t.selectedWord=null,t.selectedBtn=null),document.querySelectorAll(`.fb-slot[data-id="${e}"]`).forEach(o=>{o.textContent="",delete o.dataset.value,o.className="fb-slot inline-block min-w-[80px] h-7 border-b-2 border-dashed border-amber-300 bg-amber-50/30 mx-1 px-2 text-center align-bottom transition-all cursor-pointer font-black text-amber-700"});const i=document.getElementById(`fb-bank-${e}`);i&&i.querySelectorAll("button").forEach(o=>{o.classList.remove("hidden","ring-4","ring-amber-400","scale-105")});const s=document.getElementById(`fb-feedback-${e}`);s&&(s.classList.add("opacity-0"),s.classList.remove("opacity-100"))},renderTrueFalse(e,t,n,i){let s="Câu hỏi Đúng/Sai",o=[],a="";Array.isArray(t)?(o=t,a=n||""):(s=t,o=n||[],a=i||"");const r=(o||[]).map((l,d)=>{const c=l.q||l.question||"",h=l.a!==void 0?l.a:l.answer,u=l.explanation||(h?"Chính xác! Câu này đúng.":"Chính xác! Câu này sai.");return`
            <div class="p-6 bg-white dark:bg-slate-800 rounded-3xl border-2 border-gray-50 dark:border-slate-700 shadow-sm border-l-8 border-l-blue-100 mb-4 transition-all">
                <p class="text-base md:text-lg font-bold text-gray-800 dark:text-slate-100 mb-4">${d+1}. ${c}</p>
                <div class="flex flex-wrap gap-3">
                    <button onclick="Lesson.answerTrueFalse('${e}', ${d}, true, ${h})" id="tf-btn-${e}-${d}-true" class="px-6 py-2 bg-gray-50 hover:bg-emerald-50 text-gray-600 hover:text-emerald-700 border-2 border-gray-100 hover:border-emerald-200 rounded-xl font-black transition-all">Đúng</button>
                    <button onclick="Lesson.answerTrueFalse('${e}', ${d}, false, ${h})" id="tf-btn-${e}-${d}-false" class="px-6 py-2 bg-gray-50 hover:bg-rose-50 text-gray-600 hover:text-rose-700 border-2 border-gray-100 hover:border-rose-200 rounded-xl font-black transition-all">Sai</button>
                    <div id="tf-feedback-${e}-${d}" class="hidden p-3 bg-blue-50 dark:bg-slate-900 border border-blue-100 rounded-xl text-xs md:text-sm font-bold text-blue-700 dark:text-blue-300 w-full animate-fade-in">
                        💡 ${u}
                    </div>
                </div>
            </div>
            `}).join("");return`
        <div class="tf-exercise p-6 md:p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-900 rounded-[32px] shadow-sm border border-blue-100 dark:border-slate-700 mt-6 animate-fade-in" id="tf-ex-${e}">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">✅</div>
                <h3 class="text-xl md:text-2xl font-black text-blue-600 dark:text-blue-200">${s}</h3>
            </div>
            ${a?`<p class="text-base font-bold text-blue-600 mb-4">${a}</p>`:""}
            ${r}
        </div>
        `},answerTrueFalse(e,t,n,i){const s=document.getElementById(`tf-btn-${e}-${t}-true`),o=document.getElementById(`tf-btn-${e}-${t}-false`),a=document.getElementById(`tf-feedback-${e}-${t}`);s.disabled=!0,o.disabled=!0,a.classList.remove("hidden"),n===i?((n?s:o).classList.add("bg-emerald-500","text-white","border-emerald-600"),window.Quiz&&typeof window.Quiz.playSFX=="function"&&window.Quiz.playSFX("correct")):((n?s:o).classList.add("bg-rose-500","text-white","border-rose-600"),window.Quiz&&typeof window.Quiz.playSFX=="function"&&window.Quiz.playSFX("wrong"))},renderOrdering(e,t,n,i=""){const s=[...n].map((r,l)=>({text:r,id:l})).sort(()=>Math.random()-.5);let o="👆 Kéo thả các mục để sắp xếp đúng thứ tự từ trên xuống dưới";typeof i=="string"&&i.trim()&&(o=i);const a=s.map((r,l)=>`
            <div class="order-item p-4 bg-white dark:bg-slate-800 border-2 border-purple-100 rounded-2xl shadow-sm cursor-move flex items-center gap-4 group hover:border-purple-400 transition-all" 
                draggable="true" ondragstart="Lesson.dragOrder(event, '${e}')" ondragover="event.preventDefault()" ondrop="Lesson.dropOrder(event, '${e}')" data-idx="${l}" data-orig-id="${r.id}">
                <div class="w-8 h-8 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center font-black group-hover:bg-purple-600 group-hover:text-white transition-all shrink-0">⋮⋮</div>
                <p class="font-bold text-gray-800 dark:text-slate-100 text-sm md:text-base">${r.text}</p>
            </div>
        `).join("");return`
        <div class="order-exercise p-6 md:p-8 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-slate-800 dark:to-slate-900 rounded-[32px] shadow-sm border border-purple-100 dark:border-slate-700 mt-6 animate-fade-in" id="order-ex-${e}">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-purple-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">🔢</div>
                <h3 class="text-xl md:text-2xl font-black text-purple-900 dark:text-purple-200">${t}</h3>
            </div>
            <p class="text-base font-bold text-purple-600 mb-4">${o}</p>
            <div class="space-y-3" id="order-list-${e}">
                ${a}
            </div>
            <div class="mt-8 flex items-center gap-4">
                <button onclick="Lesson.checkOrdering('${e}', ${n.length})" class="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-black rounded-xl shadow-lg transition-all active:scale-95 text-lg">Kiểm Tra</button>
                <span id="order-feedback-${e}" class="text-base font-bold opacity-0 transition-opacity"></span>
            </div>
        </div>
        `},dragOrder(e,t){e.dataTransfer.setData("index",e.currentTarget.dataset.idx),e.currentTarget.classList.add("opacity-40")},dropOrder(e,t){e.preventDefault();const n=e.dataTransfer.getData("index"),i=e.target.closest(".order-item").dataset.idx;if(n===i)return;const s=document.getElementById(`order-list-${t}`),o=Array.from(s.children),a=o.find(l=>l.dataset.idx===n),r=o.find(l=>l.dataset.idx===i);n<i?r.after(a):r.before(a),Array.from(s.children).forEach((l,d)=>{l.dataset.idx=d}),o.forEach(l=>l.classList.remove("opacity-40")),window.Quiz&&typeof window.Quiz.playSFX=="function"&&window.Quiz.playSFX("correct")},checkOrdering(e,t){const n=document.getElementById(`order-list-${e}`),i=Array.from(n.children),s=document.getElementById(`order-feedback-${e}`);let o=0;i.forEach((a,r)=>{parseInt(a.dataset.origId)===r?(o++,a.classList.remove("border-purple-100","border-rose-500","bg-rose-50"),a.classList.add("border-emerald-500","bg-emerald-50")):(a.classList.remove("border-purple-100","border-emerald-500","bg-emerald-50"),a.classList.add("border-rose-500","bg-rose-50"))}),s.classList.remove("opacity-0","text-emerald-600","text-red-600"),o===t?(s.textContent="🌟 Tuyệt vời! Bạn đã sắp xếp đúng tất cả.",s.classList.add("text-emerald-600"),window.Visuals&&window.Visuals.confetti&&window.Visuals.confetti(),window.Quiz&&typeof window.Quiz.playSFX=="function"&&window.Quiz.playSFX("correct")):(s.textContent=`Cố lên! Bạn đã đúng ${o}/${t} vị trí.`,s.classList.add("text-red-600"),window.Quiz&&typeof window.Quiz.playSFX=="function"&&window.Quiz.playSFX("wrong")),s.classList.add("opacity-100")},renderCategorizing(e,t,n,i,s){let o="Phân loại đối tượng",a=[],r=[],l="";Array.isArray(t)?(a=t,r=n,l=i||""):(o=t,a=n||[],r=i||[],l=s||"");const d=[...r].sort(()=>Math.random()-.5),c=a.map((u,g)=>{const m=typeof u=="object"?u.name:u,p=typeof u=="object"&&u.color||"sky";return`
                <div data-cat-idx="${g}" ondragover="event.preventDefault()" ondrop="Lesson.dropToCategory(event, '${e}', ${g})" 
                    onclick="Lesson.clickToCategory('${e}', ${g})"
                    class="cat-zone p-5 bg-white dark:bg-slate-800 border-2 border-dashed border-${p}-200 rounded-3xl min-h-[160px] flex flex-col items-center gap-3 transition-all hover:border-${p}-500 hover:bg-${p}-50/50"
                    data-id="${e}">
                    <span class="px-4 py-1 bg-${p}-100 text-${p}-600 rounded-full text-xs font-black uppercase tracking-widest">${m}</span>
                    <div id="cat-list-${e}-${g}" class="flex flex-wrap gap-2 justify-center min-h-[40px] w-full"></div>
                </div>
            `}).join(""),h=d.map((u,g)=>{const m=u.categoryIdx!==void 0?u.categoryIdx:u.categoryIndex;return`
                <div class="cat-item p-3 bg-white border-2 border-sky-100 rounded-xl shadow-sm cursor-grab active:cursor-grabbing font-bold text-sky-800 hover:border-sky-400 hover:shadow-md transition-all text-sm" 
                    draggable="true" ondragstart="Lesson.dragCatItem(event, '${e}', ${m})" onclick="Lesson.selectCatItem(event, '${e}', ${m})" 
                    data-cat="${m}" data-id="${e}">${u.text}</div>
            `}).join("");return`
        <div class="cat-exercise p-6 md:p-8 bg-gradient-to-br from-sky-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 rounded-[32px] shadow-sm border border-sky-100 dark:border-slate-700 mt-6 animate-fade-in" id="cat-ex-${e}">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-sky-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">📂</div>
                <h3 class="text-xl md:text-2xl font-black text-sky-900 dark:text-sky-200">${o}</h3>
            </div>
            ${l?`<p class="text-base font-bold text-sky-600 mb-4">${l}</p>`:""}
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                ${c}
            </div>

            <div class="bg-sky-100/30 p-5 rounded-3xl">
                <p class="text-[10px] font-black text-sky-500 uppercase tracking-widest mb-3">🧺 Kho chứa - Chọn hoặc kéo các mục này vào nhóm</p>
                <div class="flex flex-wrap gap-3 justify-center min-h-[60px]" id="item-bank-${e}">
                    ${h}
                </div>
            </div>

            <div class="mt-8 flex items-center gap-4">
                <button onclick="Lesson.checkCategorizing('${e}', ${r.length})" class="px-8 py-3 bg-sky-600 hover:bg-sky-700 text-white font-black rounded-xl shadow-lg transition-all active:scale-95 text-lg">Kiểm Tra</button>
                <button onclick="Lesson.resetCategorizing('${e}')" class="px-6 py-3 bg-white border-2 border-gray-200 text-gray-500 font-bold rounded-xl hover:bg-gray-50 transition-all">Làm lại</button>
                <span id="cat-feedback-${e}" class="text-base font-bold opacity-0 transition-opacity"></span>
            </div>
        </div>
        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onload="window['catState_${e}'] = { selectedItem: null, selectedEl: null }" class="hidden">
        `},resetCategorizing(e){const t=document.getElementById(`cat-ex-${e}`),n=document.getElementById(`item-bank-${e}`),i=Array.from(t.querySelectorAll(".cat-item"));t.querySelectorAll(".cat-list");const s=document.getElementById(`cat-feedback-${e}`);i.forEach(a=>{n.appendChild(a),a.classList.remove("bg-emerald-50","border-emerald-300","bg-rose-50","border-rose-300","scale-95","ring-4","ring-sky-400","scale-105"),a.classList.add("border-sky-100")}),s.classList.add("opacity-0");const o=window[`catState_${e}`];o&&(o.selectedItem=null,o.selectedEl=null)},dragCatItem(e,t,n){e.dataTransfer.setData("cat",n),e.dataTransfer.setData("id",t),this._draggedItem=e.currentTarget},dropToCategory(e,t,n){e.preventDefault();const i=this._draggedItem;if(!i)return;document.getElementById(`cat-list-${t}-${n}`).appendChild(i),i.classList.replace("border-sky-100","border-sky-300"),i.classList.add("scale-95"),window.Quiz&&typeof window.Quiz.playSFX=="function"&&window.Quiz.playSFX("correct")},selectCatItem(e,t,n){const i=window[`catState_${t}`];i&&(document.querySelectorAll(`#cat-ex-${t} .cat-item`).forEach(s=>s.classList.remove("ring-4","ring-sky-400","scale-105")),e.currentTarget.classList.add("ring-4","ring-sky-400","scale-105"),i.selectedItem=n,i.selectedEl=e.currentTarget)},clickToCategory(e,t){const n=window[`catState_${e}`];if(!n||!n.selectedEl)return;document.getElementById(`cat-list-${e}-${t}`).appendChild(n.selectedEl),n.selectedEl.classList.remove("ring-4","ring-sky-400","scale-105"),n.selectedEl=null,n.selectedItem=null,window.Quiz&&typeof window.Quiz.playSFX=="function"&&window.Quiz.playSFX("correct")},checkCategorizing(e,t){const i=document.getElementById(`cat-ex-${e}`).querySelectorAll(".cat-zone"),s=document.getElementById(`cat-feedback-${e}`);let o=0;i.forEach(a=>{const r=parseInt(a.dataset.catIdx);a.querySelectorAll(".cat-item").forEach(d=>{parseInt(d.dataset.cat)===r?(o++,d.classList.remove("bg-rose-50","border-rose-300","border-sky-100","border-sky-300"),d.classList.add("bg-emerald-50","border-emerald-300")):(d.classList.remove("bg-emerald-50","border-emerald-300","border-sky-100","border-sky-300"),d.classList.add("bg-rose-50","border-rose-300"))})}),s.classList.remove("opacity-0","text-emerald-600","text-red-600"),o===t?(s.textContent="🌟 Phân loại hoàn hảo! Bạn giỏi quá.",s.classList.add("text-emerald-600"),window.Visuals&&window.Visuals.confetti&&window.Visuals.confetti(),window.Quiz&&typeof window.Quiz.playSFX=="function"&&window.Quiz.playSFX("correct")):(s.textContent=`Cố lên! Bạn đã đúng ${o}/${t} mục.`,s.classList.add("text-red-600"),window.Quiz&&typeof window.Quiz.playSFX=="function"&&window.Quiz.playSFX("wrong")),s.classList.add("opacity-100")},renderFlashcards(e,t,n){Array.isArray(t)&&(n=t,t="Thẻ ghi nhớ");const i=n.map((s,o)=>`
            <div class="flashcard-item perspective-1000 group w-full h-48 md:h-64" onclick="this.querySelector('.flashcard-inner').classList.toggle('rotate-y-180')">
                <div class="flashcard-inner relative w-full h-full transition-transform duration-500 transform-style-3d cursor-pointer">
                    <!-- Front -->
                    <div class="flashcard-front absolute inset-0 bg-white dark:bg-slate-800 border-2 border-orange-100 rounded-[32px] shadow-sm flex flex-col items-center justify-center p-6 backface-hidden">
                        <span class="text-xs font-black text-orange-400 uppercase tracking-widest mb-4">Câu hỏi</span>
                        <p class="text-lg md:text-2xl font-black text-slate-800 dark:text-slate-100 text-center">${s.term}</p>
                    </div>
                    <!-- Back -->
                    <div class="flashcard-back absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-600 rounded-[32px] shadow-xl flex flex-col items-center justify-center p-6 backface-hidden rotate-y-180 text-white">
                        <span class="text-xs font-black text-white/50 uppercase tracking-widest mb-4">Đáp án</span>
                        <p class="text-base md:text-xl font-bold text-center leading-relaxed">${s.definition}</p>
                    </div>
                </div>
            </div>
        `).join("");return`
        <div class="flashcards-exercise mt-12 animate-fade-in" id="fc-ex-${e}">
            <div class="flex items-center gap-3 mb-8">
                <div class="w-12 h-12 bg-orange-500 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">🎴</div>
                <h3 class="text-xl md:text-2xl font-black text-slate-800 dark:text-slate-100">${t}</h3>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${i}
            </div>
        </div>
        <style> .flashcard-wrapper.flipped .flashcard-inner { transform: rotateY(180deg); } </style>
        `},renderImageLabeling(e,t,n,i,s){const o=JSON.stringify(i).replace(/"/g,"&quot;"),a=[...s].sort(()=>Math.random()-.5);typeof window<"u"&&(window[`hlState_${e}`]={selectedLabel:null,placements:{}});const r=i.map((d,c)=>`
            <div id="hl-spot-${e}-${c}" 
                class="absolute w-8 h-8 bg-red-500 border-3 border-white rounded-full shadow-lg cursor-pointer flex items-center justify-center text-white font-black text-sm hover:scale-125 transition-transform z-10 animate-pulse"
                style="left: ${d.x}%; top: ${d.y}%; transform: translate(-50%, -50%);"
                onclick="Lesson.placeLabel('${e}', ${c})">
                ${c+1}
            </div>
            <div id="hl-label-${e}-${c}" 
                class="absolute px-2 py-1 bg-white border-2 border-red-300 rounded-lg text-xs font-bold text-red-700 shadow-md hidden z-20 whitespace-nowrap"
                style="left: ${d.x}%; top: calc(${d.y}% + 20px); transform: translateX(-50%);">
            </div>
        `).join(""),l=a.map((d,c)=>`
            <button id="hl-lbl-${e}-${c}" onclick="Lesson.selectLabel('${e}', '${d.replace(/'/g,"\\'")}')"
                class="px-4 py-2 bg-white border-2 border-rose-200 text-rose-800 font-bold rounded-xl shadow-sm hover:border-rose-400 hover:bg-rose-50 transition-all active:scale-95"
                data-label="${d}">${d}</button>
        `).join("");return`
        <div class="image-labeling-exercise p-6 md:p-8 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-slate-800 dark:to-slate-900 rounded-[32px] shadow-sm border border-rose-100 dark:border-slate-700 mt-6 animate-fade-in" id="hl-ex-${e}">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-rose-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">🏷️</div>
                <h3 class="text-xl md:text-2xl font-black text-rose-900 dark:text-rose-200">${t}</h3>
            </div>
            <p class="text-base font-bold text-rose-600 mb-4">👆 Chọn nhãn bên dưới, rồi nhấn vào điểm đánh số trên hình để gán nhãn</p>
            <div class="relative inline-block w-full mb-6 rounded-2xl overflow-hidden border-2 border-rose-200 shadow-lg" data-no-zoom="true">
                <img src="${n}" alt="Hình gán nhãn" class="w-full h-auto block">
                ${r}
            </div>
            <div class="mb-4">
                <p class="text-sm font-black text-rose-500 uppercase tracking-widest mb-3">🏷️ Chọn nhãn</p>
                <div class="flex flex-wrap gap-3" id="hl-labels-${e}">
                    ${l}
                </div>
            </div>
            <div class="mt-6 flex items-center gap-4">
                <button onclick="Lesson.checkImageLabeling('${e}', '${o}')" class="px-8 py-3 bg-rose-600 hover:bg-rose-700 text-white font-black rounded-xl shadow-lg transition-all active:scale-95 text-lg">Kiểm Tra</button>
                <span id="hl-feedback-${e}" class="text-base font-bold opacity-0 transition-opacity"></span>
            </div>
        </div>
        `},selectLabel(e,t){const n=window[`hlState_${e}`];n&&(document.querySelectorAll(`[id^="hl-lbl-${e}-"]`).forEach(i=>i.classList.remove("ring-4","ring-rose-400","scale-105")),n.selectedLabel=t,document.querySelectorAll(`[id^="hl-lbl-${e}-"]`).forEach(i=>{i.dataset.label===t&&i.classList.add("ring-4","ring-rose-400","scale-105")}))},placeLabel(e,t){const n=window[`hlState_${e}`];if(!n||!n.selectedLabel)return;const i=document.getElementById(`hl-label-${e}-${t}`),s=document.getElementById(`hl-spot-${e}-${t}`);i.textContent=n.selectedLabel,i.classList.remove("hidden"),n.placements[t]=n.selectedLabel,s.classList.remove("bg-red-500","animate-pulse"),s.classList.add("bg-blue-600")},checkImageLabeling(e,t){const n=JSON.parse(t.replace(/&quot;/g,'"')),i=window[`hlState_${e}`],s=document.getElementById(`hl-feedback-${e}`);let o=0;n.forEach((a,r)=>{const l=document.getElementById(`hl-spot-${e}-${r}`);i.placements[r]===a.correctLabel?(o++,l.classList.remove("bg-blue-600","bg-red-500"),l.classList.add("bg-emerald-500")):i.placements[r]&&(l.classList.remove("bg-blue-600"),l.classList.add("bg-red-500"))}),s.classList.remove("opacity-0","text-emerald-500","text-orange-500"),o===n.length?(s.innerText=`Gán nhãn hoàn hảo ${o}/${n.length}! 🎉`,s.classList.add("text-emerald-500"),window.Quiz&&typeof window.Quiz.playSFX=="function"&&window.Quiz.playSFX("correct")):(s.innerText=`Đúng ${o}/${n.length}. Thử lại!`,s.classList.add("text-orange-500"),window.Quiz&&typeof window.Quiz.playSFX=="function"&&window.Quiz.playSFX("wrong"))},renderExperiment(e,t,n,i){const s=i.map((o,a)=>`
            <div id="exp-step-${e}-${a}" class="exp-step flex items-start gap-4 p-5 bg-white dark:bg-slate-800 rounded-2xl border-2 border-gray-100 dark:border-slate-700 shadow-sm ${a>0?"opacity-40 pointer-events-none":""} transition-all">
                <div class="w-12 h-12 bg-cyan-100 text-cyan-600 rounded-2xl flex items-center justify-center text-2xl shrink-0">${o.emoji||"🔬"}</div>
                <div class="flex-grow">
                    <p class="font-black text-gray-800 dark:text-slate-100 text-base md:text-lg mb-2">Bước ${a+1}: ${o.instruction}</p>
                    <div id="exp-result-${e}-${a}" class="hidden p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-xl border border-cyan-200 text-cyan-800 dark:text-cyan-200 font-bold text-base animate-fade-in">${o.result}</div>
                    <button id="exp-btn-${e}-${a}" onclick="Lesson.doExperimentStep('${e}', ${a}, ${i.length})" class="mt-3 px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-xl shadow-md transition-all active:scale-95 text-sm">${a===0?"▶ Bắt đầu":"▶ Thực hiện"}</button>
                </div>
            </div>
        `).join("");return`
        <div class="experiment-exercise p-6 md:p-8 bg-gradient-to-br from-cyan-50 to-sky-50 dark:from-slate-800 dark:to-slate-900 rounded-[32px] shadow-sm border border-cyan-100 dark:border-slate-700 mt-6 animate-fade-in" id="exp-ex-${e}">
            <div class="flex items-center gap-3 mb-4">
                <div class="w-12 h-12 bg-cyan-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">🧪</div>
                <h3 class="text-xl md:text-2xl font-black text-cyan-900 dark:text-cyan-200">${t}</h3>
            </div>
            <p class="text-base font-bold text-cyan-700 dark:text-cyan-300 mb-6">${n}</p>
            <div class="space-y-4">${s}</div>
            <div id="exp-complete-${e}" class="hidden mt-6 p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border-2 border-emerald-300 text-center animate-fade-in">
                <span class="text-4xl">🎉</span>
                <p class="text-xl font-black text-emerald-700 dark:text-emerald-300 mt-2">Thí nghiệm hoàn tất!</p>
            </div>
        </div>
        `},doExperimentStep(e,t,n){document.querySelectorAll(`#${e} .step-content`).forEach(s=>s.classList.add("hidden"));const i=document.getElementById(`${e}-step-${t}`);i&&(i.classList.remove("hidden"),i.classList.add("animate-in","fade-in","slide-in-from-right")),t===n-1&&window.celebrate()},renderClickWordExercise(e){let t=e.data.map(n=>`
            <div class="interactive-row p-3 bg-white/60 rounded-xl flex items-start items-center gap-4 sentence-locked transition-all duration-300 cursor-pointer hover:bg-blue-50 mb-2" 
                 id="${n.id}" 
                 data-compound="${n.isCompound?"true":"false"}"
                 data-ans="${n.targets.join("|")}"
                 onclick="Lesson.toggleWordSelection(this, event)">
                <div class="flex-1 relative">
                     <p class="text-lg leading-loose font-medium select-none sentence-content block-sentence">${n.text}</p>
                </div>
            </div>
        `).join("");return`
            <div class="glass-card rounded-[24px] p-6 shadow-lg border-l-8 border-blue-500 mb-6 exercise-click-word-container" id="container-${e.id}">
                <h3 class="font-black text-xl text-gray-800 mb-2 flex items-center">
                    <span class="bg-blue-100 text-blue-600 rounded-lg px-3 py-1 text-sm mr-3 uppercase">${e.title}</span> 
                    ${e.subtitle}
                </h3>
                <p class="text-sm text-gray-500 mb-4 italic">${e.instruction}</p>
                <div class="space-y-1 block-content" id="${e.id}">
                    ${t}
                </div>
                <div class="mt-4 flex flex-col items-center gap-3">
                    <button id="btn-check-${e.id}" onclick="Lesson.checkClickWordResult('${e.id}')" class="btn-ltvc-check bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform flex items-center gap-2 font-bold text-lg">
                        <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-blue-600 font-black text-xs shadow-sm">E</div>
                        <span>Kiểm tra kết quả</span>
                    </button>
                    <div id="result-${e.id}" class="w-full max-w-md hidden"></div>
                </div>
            </div>
        `},toggleWordSelection(e,t){const n=t||window.event,i=n?n.target.closest(".word"):null;if(i){e.classList.contains("sentence-locked")||(i.classList.toggle("selected"),i.classList.toggle("text-blue-600"),i.classList.toggle("font-black")),n&&(n.stopPropagation(),n.preventDefault&&n.preventDefault());return}e.classList.contains("sentence-locked")?(e.classList.remove("sentence-locked"),e.classList.add("bg-blue-50","ring-2","ring-blue-300")):(e.querySelectorAll(".word.selected").forEach(o=>{o.classList.remove("selected","text-blue-600","font-black")}),e.classList.remove("bg-blue-50","ring-2","ring-blue-300"),e.classList.add("sentence-locked"),e.querySelectorAll(".word.is-wrong, .word.is-correct").forEach(o=>o.classList.remove("is-wrong","is-correct")),e.classList.remove("ring-green-400","bg-green-50","ring-red-200","ring-orange-200"))},checkClickWordResult(e){const t=document.getElementById(e),n=document.getElementById("result-"+e);if(!t||!n)return;const i=t.querySelectorAll(".interactive-row");let s=0,o=0,a=0;i.forEach(r=>{const l=r.getAttribute("data-compound")==="true",d=(r.getAttribute("data-ans")||"").split("|").map(h=>h.trim().toLowerCase()).filter(h=>h!==""),c=Array.from(r.querySelectorAll(".word.selected"));if(l)if(s++,r.classList.contains("sentence-locked"))r.classList.add("ring-2","ring-red-200");else{let h=0,u=!1;c.forEach(g=>{const m=g.innerText.replace(/[.,]/g,"").trim().toLowerCase();d.includes(m)?(g.classList.add("is-correct"),g.classList.remove("is-wrong"),h++):(g.classList.add("is-wrong"),g.classList.remove("is-correct"),u=!0,a++)}),!u&&h===d.length?(o++,r.classList.remove("bg-blue-50","ring-blue-300"),r.classList.add("ring-2","ring-green-400","bg-green-50")):(r.classList.remove("ring-green-400","bg-green-50"),r.classList.add("ring-2","ring-red-200"))}else c.length>0&&(c.forEach(h=>{h.classList.add("is-wrong"),a++}),r.classList.add("ring-2","ring-red-200"))}),n.classList.remove("hidden"),a===0&&o===s?(window.SoundManager?window.SoundManager.playFanfare():window.celebrate(),n.innerHTML=`<div class="p-4 bg-green-50 border-2 border-green-200 rounded-2xl text-green-700 text-center animate-bounce">
                <p class="font-black text-xl mb-1">🎉 Xuất sắc!</p>
                <p class="font-medium">Em đã làm đúng tất cả <b>${s}/${s}</b> câu!</p>
            </div>`):(window.SoundManager&&window.SoundManager.playWrong(),n.innerHTML=`<div class="p-4 bg-red-50 border-2 border-red-100 rounded-2xl text-red-700">
                <p class="font-bold text-lg mb-2">❌ Kết quả chưa đúng: <b>${o}/${s}</b> câu hoàn chỉnh. Số lỗi thừa/sai: <b>${a}</b>.</p>
            </div>`)},renderAIWritingExercise(e){let t=e.data.map(n=>{const i=n.layout==="vertical",s=n.rows||1,o=`ai-${n.id}`,a=s>1?`<textarea id="${o}" placeholder="${n.placeholder}" rows="${s}" class="flex-1 w-full px-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-${e.color}-500 focus:outline-none text-base resize-none form-textarea"></textarea>`:`<input type="text" id="${o}" placeholder="${n.placeholder}" class="flex-1 sm:w-72 px-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-${e.color}-500 focus:outline-none text-base">`,r=i?"flex flex-col gap-4":"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",l=i?"flex justify-end w-full gap-3":"flex gap-2 w-full sm:w-auto items-center",d=`<button onclick="Lesson.toggleSpeechRec('${o}')" class="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-all shadow-sm shrink-0" title="Nhập bằng giọng nói">🎙️</button>`;return`
            <div class="p-4 bg-white/60 rounded-xl flex flex-col gap-4">
                <div class="${r}">
                    <div class="flex items-center justify-between gap-3 w-full">
                         <p class="text-lg font-bold text-gray-700 flex-1">${n.text}</p>
                         ${i?d:""}
                    </div>
                    <div class="${l}">
                        ${i?"":d+a}
                        ${i?`<div class="w-full flex flex-col gap-3">
                                ${a}
                                <div class="flex justify-end gap-3">
                                    <button onclick="AIInteraction.evaluateWriting('${n.id}', '${n.context}')" class="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-lg text-sm font-black shadow-md flex items-center gap-2 transition-colors">
                                        <div class="w-5 h-5 bg-white rounded flex items-center justify-center text-gray-800 font-black text-[10px] shadow-sm">E</div>
                                        <span>Gửi bài</span>
                                    </button>
                                </div>
                            </div>`:`<button onclick="AIInteraction.evaluateWriting('${n.id}', '${n.context}')" class="bg-gray-800 hover:bg-gray-900 text-white w-12 h-12 flex items-center justify-center rounded-lg text-sm font-black shadow-md transition-colors">✓</button>`}
                    </div>
                </div>
                <div class="ai-feedback hidden p-4 bg-${e.color}-50 text-${e.color}-800 text-base rounded-lg border border-${e.color}-100" id="fb-${n.id}"></div>
            </div>
        `}).join("");return`
            <div class="glass-card rounded-[24px] p-6 shadow-lg border-l-8 border-${e.color}-500 mb-6 API-box" id="container-${e.id}">
                <h3 class="font-black text-xl text-gray-800 mb-1 flex items-center">
                    <span class="bg-${e.color}-100 text-${e.color}-600 rounded-lg px-3 py-1 text-sm mr-3 uppercase">${e.title}</span> ${e.subtitle}
                </h3>
                <p class="text-[11px] text-blue-500 font-bold mb-4 italic flex items-center gap-1">
                    <span>💡 Mẹo: Nhấn nút 🎙️ để nhập bài bằng giọng nói (dành cho điện thoại).</span>
                </p>
                <div class="space-y-3">${t}</div>
            </div>
        `},renderSocraticTutor(e,t){const n=JSON.stringify(t).replace(/"/g,"&quot;"),i=t.phases[0];return`
        <div class="tutor-exercise mt-12 animate-fade-in" id="tutor-ex-${e}">
            <div class="tutor-container">
                <div class="flex items-start gap-4 md:gap-6">
                    <div class="tutor-character shrink-0">🤖</div>
                    <div class="flex flex-col gap-4 flex-1">
                        <div class="tutor-bubble">
                            <h4 class="text-xs font-black text-orange-500 uppercase tracking-widest mb-2">${t.title||"Gia sư EduRobot"}</h4>
                            <p id="tutor-text-${e}" class="text-base md:text-xl font-bold leading-relaxed text-slate-800 dark:text-slate-100">
                                ${i.text}
                            </p>
                        </div>
                        
                        <div id="tutor-options-${e}" class="grid grid-cols-1 gap-3 mt-2">
                            ${i.options.map((s,o)=>`
                                <button onclick="Lesson.handleTutorChoice('${e}', ${o}, ${n})" 
                                    class="tutor-option">
                                    ${s.text}
                                </button>
                            `).join("")}
                        </div>

                        <div id="tutor-feedback-box-${e}" class="hidden tutor-feedback p-4 bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 rounded-2xl">
                            <p id="tutor-feedback-text-${e}" class="text-sm md:text-base font-bold text-emerald-700 dark:text-emerald-300"></p>
                            <button id="tutor-next-btn-${e}" class="mt-4 px-6 py-2 bg-emerald-600 text-white font-black rounded-xl shadow-lg transition-all active:scale-95 text-sm uppercase">Tiếp theo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `},handleTutorChoice(e,t,n){const i=window[`tutorState_${e}`]||{currentPhaseIdx:0},o=n.phases[i.currentPhaseIdx].options[t],a=document.getElementById(`tutor-feedback-box-${e}`),r=document.getElementById(`tutor-feedback-text-${e}`),l=document.getElementById(`tutor-next-btn-${e}`),d=document.getElementById(`tutor-options-${e}`);a.classList.remove("hidden"),r.innerText=o.feedback,d.classList.add("opacity-40","pointer-events-none"),o.next!==void 0&&o.next!==i.currentPhaseIdx?(l.classList.remove("hidden"),l.onclick=()=>{i.currentPhaseIdx=o.next,window[`tutorState_${e}`]=i,this.updateTutorPhase(e,n)}):(l.classList.add("hidden"),setTimeout(()=>{d.classList.remove("opacity-40","pointer-events-none")},2e3)),window.Quiz&&typeof window.Quiz.playSFX=="function"&&window.Quiz.playSFX(o.next!==i.currentPhaseIdx?"correct":"wrong")},updateTutorPhase(e,t){const n=window[`tutorState_${e}`],i=t.phases[n.currentPhaseIdx],s=document.getElementById(`tutor-text-${e}`),o=document.getElementById(`tutor-options-${e}`),a=document.getElementById(`tutor-feedback-box-${e}`);s.parentElement.classList.add("animate-pulse"),setTimeout(()=>{s.innerText=i.text,o.innerHTML=i.options.map((r,l)=>`
                <button onclick="Lesson.handleTutorChoice('${e}', ${l}, ${JSON.stringify(t).replace(/"/g,"&quot;")})" 
                    class="tutor-option">
                    ${r.text}
                </button>
            `).join(""),o.classList.remove("opacity-40","pointer-events-none"),a.classList.add("hidden"),s.parentElement.classList.remove("animate-pulse")},300)}},$e={_zoomLevel:1,_zoomOffsetX:0,_zoomOffsetY:0,_isDragging:!1,_dragStart:{x:0,y:0},openZoom(e,t){this._zoomLevel=1,this._zoomOffsetX=0,this._zoomOffsetY=0;const n=document.getElementById("edu-zoom-modal");n&&n.remove();const i=e.startsWith("http")&&(e.includes("maps.google")||e.includes("youtube")||e.includes("embed")),s=document.createElement("div");s.id="edu-zoom-modal",s.className="fixed inset-0 z-[999999] flex items-center justify-center",s.innerHTML=`
            <div class="absolute inset-0 bg-black/90 backdrop-blur-sm" onclick="Lesson.closeZoom()"></div>
            <div class="relative z-10 w-full h-full flex flex-col">
                <div class="flex items-center justify-between p-4 shrink-0">
                    <div class="flex items-center gap-2">
                        <button onclick="Lesson.zoomIn()" class="w-12 h-12 bg-white/20 hover:bg-white/30 text-white rounded-2xl flex items-center justify-center text-2xl font-black backdrop-blur-md transition-all active:scale-90" title="Phóng to (Ctrl +)">🔍+</button>
                        <button onclick="Lesson.zoomOut()" class="w-12 h-12 bg-white/20 hover:bg-white/30 text-white rounded-2xl flex items-center justify-center text-2xl font-black backdrop-blur-md transition-all active:scale-90" title="Thu nhỏ (Ctrl -)">🔍−</button>
                        <button onclick="Lesson.zoomReset()" class="w-12 h-12 bg-white/20 hover:bg-white/30 text-white rounded-2xl flex items-center justify-center text-lg font-black backdrop-blur-md transition-all active:scale-90" title="Về gốc">↺</button>
                        <span id="edu-zoom-level" class="ml-3 text-white/70 font-black text-sm backdrop-blur-md bg-white/10 px-3 py-1.5 rounded-xl">100%</span>
                    </div>
                    ${t?`<span class="text-white font-bold text-sm bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md max-w-[40%] truncate">${t}</span>`:""}
                    <button onclick="Lesson.closeZoom()" class="w-12 h-12 bg-red-500/80 hover:bg-red-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black backdrop-blur-md transition-all active:scale-90" title="Đóng (Esc)">✕</button>
                </div>
                <div id="edu-zoom-content" class="flex-grow flex items-center justify-center overflow-hidden px-4 pb-4" ${i?"":'onwheel="Lesson._handleZoomWheel(event)"'}>
                    ${i?`
                        <iframe src="${e}" class="w-full h-full rounded-2xl border-2 border-white/20" allowfullscreen loading="lazy" style="min-height:80vh"></iframe>
                    `:`
                        <img id="edu-zoom-img" src="${e}" alt="${t||""}" 
                            class="max-w-none transition-transform duration-200 ease-out rounded-xl shadow-2xl select-none"
                            style="transform: scale(1) translate(0px, 0px); cursor: grab;"
                            draggable="false"
                            onmousedown="Lesson._startDrag(event)"
                            ontouchstart="Lesson._startDragTouch(event)"
                        />
                    `}
                </div>
            </div>
        `,document.body.appendChild(s),document.body.style.overflow="hidden",this._zoomKeyHandler=o=>{o.key==="Escape"?this.closeZoom():o.key==="+"||o.key==="="?this.zoomIn():o.key==="-"?this.zoomOut():o.key==="0"&&this.zoomReset()},document.addEventListener("keydown",this._zoomKeyHandler),this._dragMoveHandler=o=>this._handleDragMove(o),this._dragEndHandler=()=>this._endDrag(),document.addEventListener("mousemove",this._dragMoveHandler),document.addEventListener("mouseup",this._dragEndHandler),document.addEventListener("touchmove",this._dragMoveHandler,{passive:!1}),document.addEventListener("touchend",this._dragEndHandler)},closeZoom(){const e=document.getElementById("edu-zoom-modal");e&&e.remove(),document.body.style.overflow="",this._zoomKeyHandler&&document.removeEventListener("keydown",this._zoomKeyHandler),this._dragMoveHandler&&(document.removeEventListener("mousemove",this._dragMoveHandler),document.removeEventListener("touchmove",this._dragMoveHandler)),this._dragEndHandler&&(document.removeEventListener("mouseup",this._dragEndHandler),document.removeEventListener("touchend",this._dragEndHandler))},_updateZoomTransform(){const e=document.getElementById("edu-zoom-img"),t=document.getElementById("edu-zoom-level");e&&(e.style.transform=`scale(${this._zoomLevel}) translate(${this._zoomOffsetX}px, ${this._zoomOffsetY}px)`),t&&(t.textContent=`${Math.round(this._zoomLevel*100)}%`)},zoomIn(){this._zoomLevel=Math.min(this._zoomLevel+.25,5),this._updateZoomTransform()},zoomOut(){this._zoomLevel=Math.max(this._zoomLevel-.25,.25),this._updateZoomTransform()},zoomReset(){this._zoomLevel=1,this._zoomOffsetX=0,this._zoomOffsetY=0,this._updateZoomTransform()},_handleZoomWheel(e){e.preventDefault(),this._zoomLevel=e.deltaY<0?Math.min(this._zoomLevel+.15,5):Math.max(this._zoomLevel-.15,.25),this._updateZoomTransform()},_startDrag(e){e.preventDefault(),this._isDragging=!0,this._dragStart={x:e.clientX-this._zoomOffsetX,y:e.clientY-this._zoomOffsetY};const t=document.getElementById("edu-zoom-img");t&&(t.style.cursor="grabbing")},_startDragTouch(e){if(e.touches.length===1){const t=e.touches[0];this._isDragging=!0,this._dragStart={x:t.clientX-this._zoomOffsetX,y:t.clientY-this._zoomOffsetY}}},_handleDragMove(e){if(this._isDragging){if(e.type==="touchmove"){e.preventDefault();const t=e.touches[0];this._zoomOffsetX=t.clientX-this._dragStart.x,this._zoomOffsetY=t.clientY-this._dragStart.y}else this._zoomOffsetX=e.clientX-this._dragStart.x,this._zoomOffsetY=e.clientY-this._dragStart.y;this._updateZoomTransform()}},_endDrag(){this._isDragging=!1;const e=document.getElementById("edu-zoom-img");e&&(e.style.cursor="grab")},_initImageZoom(){if(typeof document>"u")return;let e=document.getElementById("global-zoom-btn");e||(e=document.createElement("button"),e.id="global-zoom-btn",e.className="fixed z-[100] w-12 h-12 bg-indigo-600/90 text-white rounded-xl shadow-2xl flex items-center justify-center opacity-0 pointer-events-none scale-75 transition-all duration-300 outline-none",e.innerHTML='<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>',document.body.appendChild(e),e.addEventListener("mouseenter",()=>{clearTimeout(this._zoomBtnTimeout),e.classList.remove("opacity-0","pointer-events-none","scale-75"),e.classList.add("opacity-100","pointer-events-auto","scale-100")}),e.addEventListener("mouseleave",()=>{this._zoomBtnTimeout=setTimeout(()=>{e.classList.add("opacity-0","pointer-events-none","scale-75"),e.classList.remove("opacity-100","pointer-events-auto","scale-100")},300)}),e.addEventListener("click",s=>{s.stopPropagation(),this._activeTargetImg&&this.openZoom(this._activeTargetImg.src,this._activeTargetImg.alt||this._activeTargetImg.title||"")}));const t=s=>{const o=s.currentTarget;this._activeTargetImg=o,clearTimeout(this._zoomBtnTimeout);const a=o.getBoundingClientRect(),r=48,l=12;e.style.top=`${a.bottom-r-l}px`,e.style.left=`${a.right-r-l}px`,e.classList.remove("opacity-0","pointer-events-none","scale-75"),e.classList.add("opacity-100","pointer-events-auto","scale-100")},n=()=>{this._zoomBtnTimeout=setTimeout(()=>{e.classList.add("opacity-0","pointer-events-none","scale-75"),e.classList.remove("opacity-100","pointer-events-auto","scale-100")},300)},i=s=>{if(!s)return;s.querySelectorAll("img:not([data-no-zoom]):not([data-zoom-ready])").forEach(a=>{a.setAttribute("data-zoom-ready","true"),a.classList.add("zoom-active-cursor"),a.addEventListener("mouseenter",t),a.addEventListener("mouseleave",n),a.addEventListener("click",r=>{r.preventDefault(),r.stopPropagation(),this.openZoom(a.src,a.alt||a.title||"")})})};if(i(document.getElementById("tab-content")),!this._zoomObserver){this._zoomObserver=new MutationObserver(o=>{o.forEach(a=>{a.addedNodes.forEach(r=>{r.nodeType===1&&(r.tagName==="IMG"?i(r.parentElement):i(r))})})});const s=document.getElementById("tab-content");s&&this._zoomObserver.observe(s,{childList:!0,subtree:!0})}},renderInteractiveMap(e,t,n,i){const s=i[0]||{lat:16.047079,lng:108.20623},o=i.length===1?8:6,a=i.map((l,d)=>`
            <button onclick="Lesson.flyToMapLocation('${e}', ${d}, ${l.lat}, ${l.lng}, '${(l.name||"").replace(/'/g,"\\'")}', '${(l.info||"").replace(/'/g,"\\'")}', '${l.emoji||"📍"}')"
                class="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-2xl border-2 border-gray-100 dark:border-slate-700 hover:border-blue-400 hover:shadow-lg transition-all active:scale-95 text-left group"
                id="map-marker-btn-${e}-${d}">
                <span class="text-2xl shrink-0">${l.emoji||"📍"}</span>
                <div class="flex-grow min-w-0">
                    <p class="font-black text-gray-800 dark:text-slate-100 text-sm md:text-base truncate">${l.name}</p>
                    <p class="text-[11px] font-bold text-gray-400 dark:text-slate-500 truncate">${l.info||""}</p>
                </div>
                <svg class="w-5 h-5 text-gray-300 group-hover:text-blue-500 transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
        `).join(""),r=`https://maps.google.com/maps?q=${s.lat},${s.lng}&z=${o}&output=embed&t=k`;return`
        <div class="interactive-map-module p-6 md:p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-900 rounded-[32px] border border-blue-100 dark:border-slate-700 mb-6 mt-6" id="map-module-${e}">
            <div class="flex items-center gap-3 mb-2">
                <div class="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shadow-lg shadow-blue-200">🗺️</div>
                <div><h3 class="text-xl md:text-2xl font-black text-blue-600 dark:text-blue-400">${t}</h3><p class="text-sm font-bold text-blue-600/70 dark:text-blue-400/50">${n||"Nhấn vào các địa điểm bên dưới để khám phá trên bản đồ"}</p></div>
            </div>
            <div class="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-200 dark:border-slate-600 mt-4">
                <iframe id="map-iframe-${e}" src="${r}" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="w-full"></iframe>
                <div id="map-info-${e}" class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white transform translate-y-full transition-transform duration-300">
                    <div class="flex items-center gap-3"><span id="map-info-emoji-${e}" class="text-3xl">📍</span><div><h4 id="map-info-name-${e}" class="text-lg font-black"></h4><p id="map-info-detail-${e}" class="text-sm font-bold opacity-80"></p></div></div>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">${a}</div>
            <div class="flex gap-2 mt-4 justify-center flex-wrap">
                <button onclick="Lesson.switchMapType('${e}', 'k')" class="px-4 py-2 bg-blue-600 text-white font-black rounded-xl text-sm shadow-md active:scale-95 transition-all">🛰️ Vệ tinh</button>
                <button onclick="Lesson.switchMapType('${e}', 'm')" class="px-4 py-2 bg-white dark:bg-slate-700 text-gray-700 dark:text-slate-200 font-black rounded-xl text-sm shadow-md active:scale-95 transition-all border">🗺️ Bản đồ</button>
                <button onclick="Lesson.openMapFullscreen('${e}')" class="px-4 py-2 bg-emerald-600 text-white font-black rounded-xl text-sm shadow-md active:scale-95 transition-all">🔍 Phóng to</button>
            </div>
        </div>
        `},flyToMapLocation(e,t,n,i,s,o,a){const r=document.getElementById(`map-iframe-${e}`);r&&(r.src=`https://maps.google.com/maps?q=${n},${i}&z=10&output=embed&t=k`);const l=document.getElementById(`map-info-${e}`);l&&(document.getElementById(`map-info-name-${e}`).textContent=s,document.getElementById(`map-info-detail-${e}`).textContent=o,document.getElementById(`map-info-emoji-${e}`).textContent=a,l.classList.remove("translate-y-full"),setTimeout(()=>l.classList.add("translate-y-full"),5e3));const d=document.getElementById(`map-marker-btn-${e}-${t}`);d&&(document.querySelectorAll(`[id^="map-marker-btn-${e}-"]`).forEach(c=>c.classList.remove("border-blue-500","bg-blue-50","shadow-lg")),d.classList.add("border-blue-500","bg-blue-50","shadow-lg"))},switchMapType(e,t){const n=document.getElementById(`map-iframe-${e}`);n&&(n.src=n.src.replace(/&t=[a-z]/,`&t=${t}`))},openMapFullscreen(e){const t=document.getElementById(`map-iframe-${e}`);t&&this.openZoom(t.src,"Bản đồ tương tác — cuộn chuột để zoom | kéo để di chuyển")},_currentSlideIndex:0,_presentationActive:!1,startPresentation(e){const t=window[`lesson${e.split("_").pop()}`]||window.currentLessonData;if(!t){alert("Không tìm thấy dữ liệu bài học để trình chiếu.");return}if(!Array.isArray(t.presentation)||t.presentation.length===0){alert("Bài học này chưa được cấu hình nội dung trình chiếu (mảng `presentation` trống).");return}const n=document.getElementById("presentation-overlay"),i=document.getElementById("slides-wrapper");if(!n||!i){console.error("Không tìm thấy khung Presentation Overlay trong HTML.");return}i.innerHTML="",t.presentation.forEach((o,a)=>{const r=document.createElement("section");r.className=`web-slide ${a===0?"active":""}`,r.innerHTML=window.UI&&window.UI.parseTutor?window.UI.parseTutor(o):o,r.querySelectorAll("video[autoplay], audio[autoplay]").forEach(c=>{c.removeAttribute("autoplay"),c.pause()}),i.appendChild(r),r.querySelectorAll("script").forEach(c=>{const h=document.createElement("script");Array.from(c.attributes).forEach(u=>h.setAttribute(u.name,u.value)),h.appendChild(document.createTextNode(c.innerHTML)),document.body.appendChild(h),c.parentNode.removeChild(c)})}),this._currentSlideIndex=0,this._presentationActive=!0,this._syncSlideMedia(0),n.classList.add("active"),document.body.style.overflow="hidden",document.body.classList.add("presentation-mode");const s=n.querySelectorAll(".nav-controls button");s.length>=2&&(s[0].innerHTML="&#10094;",s[1].innerHTML="&#10095;"),this._pptKeyHandler||(this._pptKeyHandler=o=>{this._presentationActive&&((o.key==="ArrowRight"||o.key==="ArrowDown"||o.key==="Space")&&(o.preventDefault(),this.moveSlide(1)),(o.key==="ArrowLeft"||o.key==="ArrowUp")&&(o.preventDefault(),this.moveSlide(-1)),o.key==="Escape"&&(o.preventDefault(),this.stopPresentation()))},document.addEventListener("keydown",this._pptKeyHandler))},stopPresentation(){this._presentationActive=!1;const e=document.getElementById("presentation-overlay");e&&e.classList.remove("active"),document.body.style.overflow="",document.body.classList.remove("presentation-mode")},moveSlide(e){if(!this._presentationActive)return;const t=document.getElementById("presentation-overlay");if(!t)return;const n=t.querySelectorAll(".web-slide");n.length!==0&&(n[this._currentSlideIndex]&&n[this._currentSlideIndex].classList.remove("active"),this._currentSlideIndex=(this._currentSlideIndex+e+n.length)%n.length,n[this._currentSlideIndex]&&(n[this._currentSlideIndex].classList.add("active"),this._syncSlideMedia(this._currentSlideIndex)))},_syncSlideMedia(e){const t=document.getElementById("presentation-overlay");if(!t)return;t.querySelectorAll(".web-slide").forEach((i,s)=>{const o=i.querySelectorAll("video, audio");s===e?o.forEach(a=>{a.currentTime=0;const r=a.play();r!==void 0&&r.catch(l=>{console.log("Auto-play was prevented by browser:",l)})}):o.forEach(a=>{a.pause()})})},_expSimActiveTab:0,_expSimRunning:!1,openExperimentSimulator(e){const t=document.getElementById("edu-experiment-modal");t&&t.remove(),this._expSimActiveTab=0,this._expSimRunning=!1,this._expConfigs=e;const n=document.createElement("div");n.id="edu-experiment-modal",n.className="fixed inset-0 z-[999999] flex items-center justify-center p-4",n.style.cssText="animation: expFadeIn 0.3s ease-out forwards;";const i=document.createElement("style");i.id="edu-experiment-styles",i.textContent=`
            @keyframes expFadeIn { from { opacity: 0; } to { opacity: 1; } }
            @keyframes expSlideUp { from { opacity: 0; transform: translateY(40px) scale(0.95); } to { opacity: 1; transform: translateY(0) scale(1); } }
            @keyframes botKhi { 
                0% { bottom: 20%; opacity: 0.8; transform: scale(0.6) translateX(0); }
                50% { opacity: 1; transform: scale(1) translateX(4px); }
                100% { bottom: 85%; opacity: 0; transform: scale(0.3) translateX(-4px); }
            }
            @keyframes datRoi {
                0% { top: 5%; opacity: 1; }
                40% { top: 50%; opacity: 1; }
                60% { top: 60%; opacity: 0.9; }
                100% { top: 65%; opacity: 0.8; }
            }
            @keyframes songNuoc {
                0%, 100% { transform: translateX(0) scaleY(1); }
                25% { transform: translateX(-3px) scaleY(1.05); }
                75% { transform: translateX(3px) scaleY(0.95); }
            }
            @keyframes hoiNuoc {
                0% { opacity: 0; transform: translateY(0) scale(0.5); }
                30% { opacity: 0.7; transform: translateY(-8px) scale(0.8); }
                70% { opacity: 0.4; transform: translateY(-20px) scale(1.1); }
                100% { opacity: 0; transform: translateY(-35px) scale(0.6); }
            }
            @keyframes khoiMun {
                0% { opacity: 0; transform: translateY(0) scale(0.4) rotate(0deg); }
                40% { opacity: 0.6; transform: translateY(-15px) scale(0.9) rotate(5deg); }
                100% { opacity: 0; transform: translateY(-40px) scale(1.2) rotate(-5deg); }
            }
            @keyframes luaDenCon {
                0%, 100% { transform: scaleY(1) scaleX(1); }
                30% { transform: scaleY(1.15) scaleX(0.9); }
                60% { transform: scaleY(0.85) scaleX(1.1); }
            }
            @keyframes giotNuoc {
                0% { opacity: 0; transform: scale(0); }
                50% { opacity: 0.8; transform: scale(1.2); }
                100% { opacity: 0.6; transform: scale(1) translateY(3px); }
            }
            @keyframes pulseGlow {
                0%, 100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
                50% { box-shadow: 0 0 0 12px rgba(16, 185, 129, 0); }
            }
            .exp-bubble {
                position: absolute;
                width: 8px; height: 8px;
                border-radius: 50%;
                background: rgba(255,255,255,0.7);
                border: 1px solid rgba(255,255,255,0.9);
                animation: botKhi 2s ease-out infinite;
            }
            .exp-steam {
                position: absolute;
                width: 12px; height: 12px;
                border-radius: 50%;
                background: rgba(200,220,255,0.5);
                animation: hoiNuoc 2.5s ease-out infinite;
            }
            .exp-smoke {
                position: absolute;
                width: 14px; height: 14px;
                border-radius: 50%;
                background: rgba(120,100,80,0.4);
                animation: khoiMun 3s ease-out infinite;
            }
            .exp-tab-active {
                background: linear-gradient(135deg, #10b981, #059669) !important;
                color: white !important;
                box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
            }
            .exp-step-card {
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            }
            .exp-step-card.active {
                border-color: #10b981;
                background: linear-gradient(135deg, #ecfdf5, #d1fae5);
            }
        `,document.head.appendChild(i);const s=e.map((a,r)=>`
            <button onclick="Lesson._switchExpTab(${r})" id="exp-tab-${r}"
                class="flex-1 py-3 px-4 rounded-2xl font-black text-sm md:text-base transition-all active:scale-95 ${r===0?"exp-tab-active":"bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"}">
                <span class="text-lg mr-1">${a.icon}</span> ${a.title}
            </button>
        `).join(""),o=e.map((a,r)=>`
            <div id="exp-content-${r}" class="${r===0?"":"hidden"} space-y-5">
                <!-- Khu vực mô phỏng trực quan -->
                <div class="relative rounded-[28px] overflow-hidden border-2 border-slate-200 dark:border-slate-600" 
                     style="height: 320px; background: ${a.labBg||"linear-gradient(180deg, #e0f2fe 0%, #bae6fd 40%, #7dd3fc 100%)"};">
                    <div id="exp-lab-${r}" class="relative w-full h-full flex items-center justify-center">
                        ${a.labHtml}
                    </div>
                </div>

                <!-- Các bước thí nghiệm -->
                <div class="space-y-3">
                    ${a.steps.map((l,d)=>`
                        <div id="exp-step-${r}-${d}" class="exp-step-card p-4 rounded-2xl border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 ${d===0?"active":""}">
                            <div class="flex items-start gap-3">
                                <div class="w-8 h-8 shrink-0 rounded-full flex items-center justify-center font-black text-sm 
                                    ${d===0?"bg-emerald-500 text-white":"bg-slate-200 dark:bg-slate-600 text-slate-500 dark:text-slate-400"}">
                                    ${d+1}
                                </div>
                                <div class="flex-1">
                                    <h5 class="font-black text-sm md:text-base text-slate-800 dark:text-slate-100">${l.title}</h5>
                                    <p class="text-xs md:text-sm font-bold text-slate-500 dark:text-slate-400 mt-1">${l.desc}</p>
                                </div>
                            </div>
                        </div>
                    `).join("")}
                </div>

                <!-- Nút điều khiển -->
                <div class="flex gap-3 justify-center">
                    <button onclick="Lesson._runExperiment(${r})" id="exp-run-btn-${r}"
                        class="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-2xl shadow-lg transition-all active:scale-95 flex items-center gap-2 text-sm md:text-base"
                        style="animation: pulseGlow 2s infinite;">
                        ▶️ Bắt đầu thí nghiệm
                    </button>
                    <button onclick="Lesson._resetExperiment(${r})"
                        class="px-5 py-3 bg-slate-200 dark:bg-slate-600 hover:bg-slate-300 dark:hover:bg-slate-500 text-slate-700 dark:text-slate-200 font-black rounded-2xl transition-all active:scale-95 text-sm md:text-base">
                        ↺ Làm lại
                    </button>
                </div>

                <!-- Kết luận -->
                <div id="exp-conclusion-${r}" class="hidden p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border-2 border-emerald-500">
                    <div class="flex items-center gap-2 mb-2">
                        <span class="text-xl">✅</span>
                        <h5 class="font-black text-emerald-800 dark:text-emerald-400 text-base md:text-lg">Kết luận</h5>
                    </div>
                    <p class="font-bold text-sm md:text-base text-emerald-700 dark:text-emerald-300 leading-relaxed">${a.conclusion}</p>
                </div>
            </div>
        `).join("");n.innerHTML=`
            <div class="absolute inset-0 bg-black/80 backdrop-blur-md" onclick="Lesson.closeExperimentSimulator()"></div>
            <div class="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-800 rounded-[36px] shadow-2xl border border-slate-200 dark:border-slate-700"
                 style="animation: expSlideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;">
                <!-- Header -->
                <div class="sticky top-0 z-20 bg-white/95 dark:bg-slate-800/95 backdrop-blur-lg rounded-t-[36px] p-5 border-b border-slate-100 dark:border-slate-700">
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center gap-3">
                            <div class="w-12 h-12 bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 rounded-2xl flex items-center justify-center text-2xl">🔬</div>
                            <div>
                                <h3 class="text-lg md:text-xl font-black text-slate-800 dark:text-slate-100">Mô phỏng thí nghiệm</h3>
                                <p class="text-xs font-bold text-slate-400">Nhấn "Bắt đầu" để quan sát hiện tượng</p>
                            </div>
                        </div>
                        <button onclick="Lesson.closeExperimentSimulator()" 
                            class="w-10 h-10 bg-red-100 hover:bg-red-200 dark:bg-red-900/30 dark:hover:bg-red-900/50 text-red-500 rounded-xl flex items-center justify-center text-lg font-black transition-all active:scale-90">✕</button>
                    </div>
                    <!-- Tabs -->
                    <div class="flex gap-2">${s}</div>
                </div>

                <!-- Body -->
                <div class="p-5">${o}</div>
            </div>
        `,document.body.appendChild(n),document.body.style.overflow="hidden",this._expKeyHandler=a=>{a.key==="Escape"&&this.closeExperimentSimulator()},document.addEventListener("keydown",this._expKeyHandler)},closeExperimentSimulator(){const e=document.getElementById("edu-experiment-modal");e&&e.remove();const t=document.getElementById("edu-experiment-styles");t&&t.remove(),document.body.style.overflow="",this._expKeyHandler&&(document.removeEventListener("keydown",this._expKeyHandler),this._expKeyHandler=null),this._expSimRunning=!1,this._expIntervals&&(this._expIntervals.forEach(n=>clearInterval(n)),this._expIntervals=[]),this._expTimeouts&&(this._expTimeouts.forEach(n=>clearTimeout(n)),this._expTimeouts=[])},_switchExpTab(e){this._expSimActiveTab=e,document.querySelectorAll('[id^="exp-content-"]').forEach(i=>i.classList.add("hidden"));const t=document.getElementById(`exp-content-${e}`);t&&t.classList.remove("hidden"),document.querySelectorAll('[id^="exp-tab-"]').forEach(i=>{i.classList.remove("exp-tab-active"),i.classList.add("bg-slate-100","dark:bg-slate-700","text-slate-600","dark:text-slate-300")});const n=document.getElementById(`exp-tab-${e}`);n&&(n.classList.add("exp-tab-active"),n.classList.remove("bg-slate-100","dark:bg-slate-700","text-slate-600","dark:text-slate-300"))},_runExperiment(e){if(this._expSimRunning)return;this._expSimRunning=!0,this._expIntervals=this._expIntervals||[],this._expTimeouts=this._expTimeouts||[];const t=document.getElementById(`exp-run-btn-${e}`);t&&(t.textContent="⏳ Đang thí nghiệm...",t.style.animation="none",t.disabled=!0,t.classList.add("opacity-60"));const n=document.getElementById(`exp-lab-${e}`);if(!n)return;const i=document.querySelectorAll(`[id^="exp-step-${e}-"]`),s=i.length;i.forEach((o,a)=>{const r=setTimeout(()=>{if(i.forEach((l,d)=>{l.classList.remove("active");const c=l.querySelector("div:first-child > div:first-child");c&&(c.classList.remove("bg-emerald-500","text-white"),c.classList.add("bg-slate-200","dark:bg-slate-600","text-slate-500")),d<=a&&(d===a&&l.classList.add("active"),c&&(c.classList.add("bg-emerald-500","text-white"),c.classList.remove("bg-slate-200","dark:bg-slate-600","text-slate-500")))}),this._runStepAnimation(e,a,n),a===s-1){const l=setTimeout(()=>{const d=document.getElementById(`exp-conclusion-${e}`);d&&(d.classList.remove("hidden"),d.style.animation="expSlideUp 0.5s ease-out forwards"),this._expSimRunning=!1,t&&(t.textContent="✅ Hoàn thành!",t.classList.remove("opacity-60"))},2500);this._expTimeouts.push(l)}},a*3e3);this._expTimeouts.push(r)})},_resetExperiment(e){this._expIntervals&&(this._expIntervals.forEach(o=>clearInterval(o)),this._expIntervals=[]),this._expTimeouts&&(this._expTimeouts.forEach(o=>clearTimeout(o)),this._expTimeouts=[]),this._expSimRunning=!1,document.querySelectorAll(`[id^="exp-step-${e}-"]`).forEach((o,a)=>{o.classList.remove("active");const r=o.querySelector("div:first-child > div:first-child");r&&(r.classList.remove("bg-emerald-500","text-white"),r.classList.add("bg-slate-200","dark:bg-slate-600","text-slate-500")),a===0&&(o.classList.add("active"),r&&(r.classList.add("bg-emerald-500","text-white"),r.classList.remove("bg-slate-200","dark:bg-slate-600","text-slate-500")))});const n=document.getElementById(`exp-conclusion-${e}`);n&&n.classList.add("hidden");const i=document.getElementById(`exp-lab-${e}`);if(i){i.querySelectorAll(".exp-bubble, .exp-steam, .exp-smoke, .exp-dynamic").forEach(r=>r.remove());const o=i.querySelector(".dat-cuc");o&&(o.style.animation="none",o.style.top="5%",o.style.opacity="1");const a=i.querySelector(".mat-nuoc");a&&(a.style.animation="none")}const s=document.getElementById(`exp-run-btn-${e}`);s&&(s.innerHTML="▶️ Bắt đầu thí nghiệm",s.disabled=!1,s.classList.remove("opacity-60"),s.style.animation="pulseGlow 2s infinite")},_runStepAnimation(e,t,n){var o,a;const i=(o=this._expConfigs)==null?void 0:o[e];if(!i)return;const s=i.type||"";if(s==="tha-dat-vao-nuoc"){if(t===0){const r=n.querySelector(".ban-tay");r&&(r.style.transition="top 1.5s ease-in-out",r.style.top="18%")}else if(t===1){const r=n.querySelector(".dat-cuc"),l=n.querySelector(".mat-nuoc"),d=n.querySelector(".ban-tay");d&&(d.style.transition="top 0.8s ease-out, opacity 0.8s",d.style.top="2%",d.style.opacity="0.5"),r&&(r.style.animation="datRoi 1.5s ease-in forwards"),l&&setTimeout(()=>{l.style.animation="songNuoc 0.8s ease-in-out 3"},800)}else if(t===2){const r=n.querySelector(".absolute");if(r){const l=setInterval(()=>{const d=document.createElement("div");d.className="exp-bubble exp-dynamic";const c=30+Math.random()*80,h=4+Math.random()*8;d.style.cssText=`
                            left: ${c}px;
                            bottom: 25%;
                            width: ${h}px;
                            height: ${h}px;
                            animation-duration: ${1.5+Math.random()*1.5}s;
                            animation-delay: ${Math.random()*.5}s;
                        `,r.appendChild(d),setTimeout(()=>d.remove(),3500)},300);this._expIntervals.push(l)}}}if(s==="dun-ong-nghiem"){if(t===0){const r=n.querySelector(".lua-den-con");r&&(r.style.transition="transform 0.5s, width 0.5s, height 0.5s",r.style.width="22px",r.style.height="32px")}else if(t===1){const r=n.querySelector('[style*="rotate(-30deg)"]');if(r)for(let l=0;l<6;l++){const d=document.createElement("div");d.className="exp-dynamic";const c=15+l*12,h=l%2===0?-2:26;d.style.cssText=`
                            position: absolute;
                            top: ${c}px;
                            left: ${h}px;
                            width: ${4+Math.random()*3}px;
                            height: ${5+Math.random()*4}px;
                            border-radius: 50% 50% 50% 50% / 40% 40% 60% 60%;
                            background: radial-gradient(circle at 30% 30%, rgba(200,230,255,0.9), rgba(100,180,255,0.5));
                            animation: giotNuoc ${.8+Math.random()*.5}s ease-out ${l*.3}s forwards;
                            z-index: 20;
                        `,(a=r.querySelector("div"))==null||a.appendChild(d)}}else if(t===2){const r=n.querySelector('[style*="rotate(-30deg)"]');if(r){const l=setInterval(()=>{var h;const c=document.createElement("div");c.className="exp-smoke exp-dynamic",c.style.cssText=`
                            top: -10px;
                            left: ${8+Math.random()*12}px;
                            width: ${10+Math.random()*8}px;
                            height: ${10+Math.random()*8}px;
                            animation-duration: ${2+Math.random()*2}s;
                            animation-delay: ${Math.random()*.3}s;
                        `,(h=r.querySelector("div"))==null||h.appendChild(c),setTimeout(()=>c.remove(),4500)},400);this._expIntervals.push(l);const d=setInterval(()=>{var h;const c=document.createElement("div");c.className="exp-steam exp-dynamic",c.style.cssText=`
                            top: 0px;
                            left: ${4+Math.random()*20}px;
                            animation-duration: ${2+Math.random()*1.5}s;
                        `,(h=r.querySelector("div"))==null||h.appendChild(c),setTimeout(()=>c.remove(),4e3)},600);this._expIntervals.push(d)}}}},renderExpLab1_ThaDatVaoNuoc(){return`
            <!-- Cốc thuỷ tinh -->
            <div class="absolute" style="bottom: 8%; left: 50%; transform: translateX(-50%); width: 140px; height: 180px;">
                <!-- Thân cốc -->
                <div style="position: absolute; bottom: 0; left: 5%; width: 90%; height: 75%; border: 3px solid rgba(200,220,240,0.8); border-top: none; border-radius: 0 0 12px 12px; background: linear-gradient(180deg, rgba(180,220,255,0.15) 0%, rgba(180,220,255,0.3) 100%);">
                </div>
                <!-- Nước trong cốc -->
                <div class="mat-nuoc" style="position: absolute; bottom: 3px; left: 5.5%; width: 88.5%; height: 60%; background: linear-gradient(180deg, rgba(56,189,248,0.35) 0%, rgba(14,165,233,0.5) 100%); border-radius: 0 0 10px 10px;">
                </div>
                <!-- Cục đất -->
                <div class="dat-cuc" style="position: absolute; top: 5%; left: 50%; transform: translateX(-50%); width: 30px; height: 24px; z-index:5;">
                    <div style="width: 100%; height: 100%; background: radial-gradient(circle at 40% 35%, #a0845c, #6b5b3a); border-radius: 40% 50% 45% 55%; box-shadow: 2px 2px 4px rgba(0,0,0,0.3);">
                    </div>
                </div>
            </div>
            <!-- Bàn tay (emoji đơn giản) -->
            <div class="ban-tay" style="position: absolute; top: 2%; left: 50%; transform: translateX(-40%); font-size: 2.5rem; z-index: 10; filter: drop-shadow(2px 3px 4px rgba(0,0,0,0.2));">🤏</div>
            <!-- Label -->
            <div style="position: absolute; bottom: 2%; left: 50%; transform: translateX(-50%); text-align: center;">
                <span class="text-xs font-black text-slate-600 bg-white/80 px-3 py-1 rounded-full">Cốc nước sạch</span>
            </div>
        `},renderExpLab2_DunOngNghiem(){return`
            <!-- Giá đỡ ống nghiệm -->
            <div style="position: absolute; bottom: 25%; left: 50%; transform: translateX(-50%); width: 6px; height: 120px; background: linear-gradient(180deg, #94a3b8, #64748b); border-radius: 3px;"></div>
            <div style="position: absolute; bottom: 25%; left: 50%; transform: translateX(-50%); width: 80px; height: 6px; background: linear-gradient(90deg, #94a3b8, #64748b, #94a3b8); border-radius: 3px;"></div>
            
            <!-- Ống nghiệm nghiêng -->
            <div style="position: absolute; bottom: 30%; left: 50%; transform: translateX(-20%) rotate(-30deg); transform-origin: bottom center;">
                <div style="width: 28px; height: 110px; border: 2px solid rgba(200,220,240,0.9); border-bottom: none; border-radius: 14px 14px 0 0; background: linear-gradient(90deg, rgba(200,220,240,0.1) 0%, rgba(200,220,240,0.2) 50%, rgba(200,220,240,0.1) 100%); position: relative;">
                    <!-- Đất trong ống nghiệm -->
                    <div style="position: absolute; bottom: 0; left: 2px; right: 2px; height: 35%; background: linear-gradient(180deg, #8b7355, #6b5b3a); border-radius: 0 0 10px 10px;"></div>
                    <!-- Miệng ống -->
                    <div style="position: absolute; top: -3px; left: -2px; right: -2px; height: 6px; background: rgba(200,220,240,0.6); border-radius: 3px;"></div>
                </div>
            </div>

            <!-- Đèn cồn -->
            <div style="position: absolute; bottom: 8%; left: 50%; transform: translateX(-50%);">
                <!-- Thân đèn -->
                <div style="width: 50px; height: 40px; background: linear-gradient(180deg, #fbbf24, #d97706); border-radius: 8px 8px 12px 12px; position: relative;">
                    <!-- Bấc đèn -->
                    <div style="position: absolute; top: -15px; left: 50%; transform: translateX(-50%); width: 4px; height: 18px; background: linear-gradient(180deg, #1e293b, #475569);"></div>
                    <!-- Ngọn lửa -->
                    <div class="lua-den-con" style="position: absolute; top: -38px; left: 50%; transform: translateX(-50%); width: 16px; height: 24px; background: radial-gradient(ellipse at center bottom, #fef08a 0%, #fb923c 40%, #ef4444 70%, transparent 100%); border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; animation: luaDenCon 0.6s ease-in-out infinite; filter: blur(0.5px);">
                    </div>
                </div>
            </div>
            <!-- Label -->
            <div style="position: absolute; bottom: 2%; left: 50%; transform: translateX(-50%); text-align: center;">
                <span class="text-xs font-black text-slate-600 bg-white/80 px-3 py-1 rounded-full">Ống nghiệm + Đèn cồn</span>
            </div>
        `}},Le={toggleSpeechRec(e){const t=document.getElementById(e)||document.getElementById(`input-${e}`)||document.getElementById(`wp-full-${e}`),n=document.getElementById(`btn-mic-${e}`)||document.getElementById(`btn-mic-${e.replace("input-","").replace("wp-full-","")}`),i=document.getElementById(`mic-status-${e}`)||document.getElementById(`mic-status-${e.replace("input-","").replace("wp-full-","")}`);if(!("webkitSpeechRecognition"in window)){alert("Trình duyệt của bạn không hỗ trợ nhận diện giọng nói. Hãy dùng Google Chrome nhé!");return}if(window._isRecognitionActive){window._recognition.stop();return}const s=new webkitSpeechRecognition;window._recognition=s,s.lang="vi-VN",s.interimResults=!1,s.onstart=()=>{window._isRecognitionActive=!0,i&&i.classList.remove("hidden"),n&&n.classList.add("animate-pulse","text-red-500")},s.onresult=o=>{const a=o.results[0][0].transcript;t&&(t.tagName==="TEXTAREA"?t.value+=(t.value?" ":"")+a:t.value=a,t.dispatchEvent(new Event("input")))},s.onend=()=>{window._isRecognitionActive=!1,i&&i.classList.add("hidden"),n&&n.classList.remove("animate-pulse","text-red-500")},s.start()}},$={...ee,...He,...Se,...$e,...Le};typeof document<"u"&&(document.addEventListener("DOMContentLoaded",()=>{$._initFillBlanksSlotClick&&$._initFillBlanksSlotClick(),$._initImageZoom&&$._initImageZoom()}),document.readyState!=="loading"&&($._initFillBlanksSlotClick&&$._initFillBlanksSlotClick(),$._initImageZoom&&$._initImageZoom()));window.Lesson=$;window.toggleAccordion=$.toggleAccordion;const D={API_URL:"https://tiengviet5.netlify.app/.netlify/functions/chat",extractLessonText(e,t=2e3){if(!e)return"";try{const i=new DOMParser().parseFromString(e,"text/html");i.querySelectorAll("script, style, audio").forEach(o=>o.remove()),i.querySelectorAll('[id*="solution"], [class*="solution"], [id*="guidance"], [class*="guidance"]').forEach(o=>o.remove());let s=i.body.textContent||i.body.innerText||"";return s=s.replace(/(?:answer|solution|correctAnswer|expected|guidance)\s*[:=]\s*[^,;}\n]+/gi,""),s=s.replace(/window\.check_\w+\s*=\s*function[\s\S]*?};/gi,""),s=s.replace(/\[\[[^\]]*\]\]/g,""),s=s.replace(/\s+/g," ").trim(),s.length>t&&(s=s.substring(0,t)+"...(nội dung còn tiếp)"),s}catch(n){console.error("Lỗi extractLessonText:",n);let i=e.replace(/<script[\s\S]*?<\/script>/gi,"");return i=i.replace(/<style[\s\S]*?<\/style>/gi,""),i=i.replace(/<[^>]+>/g," "),i=i.replace(/(?:answer|solution|correctAnswer|expected|guidance)\s*[:=]\s*[^,;}\n]+/gi,""),i=i.replace(/window\.check_\w+\s*=\s*function[\s\S]*?};/gi,""),i=i.replace(/\[\[[^\]]*\]\]/g,""),i=i.replace(/\s+/g," ").trim(),i.length>t&&(i=i.substring(0,t)+"..."),i}},getSystemPrompt(e,t=""){const n=t?`

===== NỘI DUNG BÀI HỌC MÀ HỌC SINH ĐANG HỌC =====
${t}
===== HẾT NỘI DUNG BÀI HỌC =====

QUAN TRỌNG: Hãy trả lời dựa trên NỘI DUNG BÀI HỌC ở trên. Sử dụng chính các công thức, ví dụ, số liệu trong bài để giải thích cho học sinh.`:"";return`Vai trò: Bạn là EduRobot (AI E) - Chuyên gia giáo dục tiểu học, chuyên trách môn Toán lớp 5 với hơn 20 năm kinh nghiệm dạy học theo phương pháp sư phạm tích cực.

Nhiệm vụ: Hỗ trợ học sinh HIỂU BÀI và TỰ LÀM BÀI, không phải làm bài thay học sinh.

QUY TẮC PHẢN HỒI (TUYỆT ĐỐI TUÂN THỦ):
⛔ TUYỆT ĐỐI KHÔNG TIẾT LỘ ĐÁP ÁN HOẶC KẾT QUẢ SỐ CỤ THỂ CỦA BÀI TẬP (ví dụ: Không được viết các số như "20112026", "20 112 026", "2 030", v.v. vào câu trả lời gợi ý hoặc hướng dẫn). Bạn chỉ được hướng dẫn phương pháp làm bài, các bước tư duy, giải thích các khái niệm toán học liên quan.
⛔ KHI HỌC SINH LÀM SAI HOẶC HỎI HƯỚNG DẪN: TUYỆT ĐỐI không đưa đáp án đúng. Chỉ gợi ý cách làm, đặt câu hỏi để học sinh tự tính toán và tự nhận ra kết quả.
✅ KHI HỌC SINH LÀM ĐÚNG: Khen ngợi và khuyến khích hiển thị "LỜI GIẢI CHI TIẾT" (bao gồm Lời giải, Phép tính, Đáp số) để học sinh đối chiếu trình bày.
⛔ KHÔNG giải bài tập hộ khi học sinh chưa thử sức.
✅ Giải đáp trực tiếp các câu hỏi lý thuyết, công thức trong bài học.
✅ Nếu học sinh hỏi về đáp án: "Mình sẽ hướng dẫn bạn cách làm, còn đáp án bạn hãy tự thử sức nhé!"

Phong cách giao tiếp:
1. Hòa nhã & Tôn trọng: Xưng hô thân thiện (Mình và Bạn). Không phê phán nặng nề.
2. Khuyến khích & Động viên: Khen ngợi khi học sinh cố gắng, chỉ ra điểm sáng.
3. Gợi mở từng bước: Hướng dẫn từng bước nhỏ, đợi học sinh suy nghĩ.
4. Ngôn ngữ: Sư phạm tiểu học, dễ hiểu, súc tích (dưới 150 từ). TUYỆT ĐỐI CHỈ SỬ DỤNG TIẾNG VIỆT. KHÔNG sử dụng Hán tự (chữ Trung Quốc) hay ngôn ngữ khác trong phản hồi.
5. BÁM SÁT BÀI HỌC: Dùng chính các công thức, khái niệm, ví dụ trong NỘI DUNG BÀI HỌC bên dưới để giải thích. Khi học sinh hỏi về kiến thức lý thuyết (không phải bài tập), được phép trả lời trực tiếp dựa trên nội dung bài.

Ngữ cảnh: Học sinh đang học bài "${e}".${n}`},async fetchWithTimeout(e,t,n=25e3){const i=new AbortController,s=setTimeout(()=>i.abort(),n);try{return await fetch(e,{...t,signal:i.signal})}finally{clearTimeout(s)}},async ask(e,t,n=""){try{const i=this.extractLessonText(n),s=this.getSystemPrompt(t,i),o=await this.fetchWithTimeout(this.API_URL,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sentence:`[Hệ thống: ${s}]

[Học sinh]: ${e}`,mode:"chat"})},25e3);if(!o.ok)throw new Error("API Error");const a=await o.json();return a.content||a.response||"Mình đang suy nghĩ... bạn hỏi lại nhé!"}catch(i){return console.error("AI Error:",i),"Rất tiếc, kết nối của Robot đang gặp trục trặc. Bạn hãy kiểm tra internet hoặc thử lại sau nhé!"}},async tutor(e,t,n,i=""){try{const s=this.extractLessonText(i),o=s?`

===== NỘI DUNG BÀI HỌC THAM KHẢO =====
${s}
===== HẾT =====`:"",a=`Vai trò: Bạn là Trợ lý giáo dục E (EduRobot), chuyên gia chấm bài Toán lớp 5.

Nhiệm vụ: Kiểm tra bài làm, nhận xét và HƯỚNG DẪN học sinh sửa lỗi (nếu có). 

Tiêu chí chấm điểm:
1. Độ chính xác: Kiểm tra kỹ từng bước giải (Lời giải, phép tính, đơn vị, đáp số).
2. Kiến thức trọng tâm: Bám sát nội dung bài "${t}". Chú ý các lỗi về đổi đơn vị, dấu phẩy số thập phân, hoặc công thức hình học.
3. THAM KHẢO NỘI DUNG BÀI HỌC bên dưới để chấm chính xác.

QUY TẮC CHẤM BÀI:
✅ NẾU BÀI LÀM ĐÚNG (HOÀN TOÀN): Khen ngợi nồng nhiệt. PHẢI hiển thị đầy đủ "LỜI GIẢI CHI TIẾT" bao gồm 3 phần: Lời giải mẫu, Các phép tính, Đáp số để học sinh tham khảo cách trình bày chuẩn.
⛔ NẾU BÀI LÀM SAI: Chỉ ra cụ thể lỗi ở bước nào (ví dụ: "Bạn nhầm ở bước đổi đơn vị cm2 sang dm2 rồi..."). TUYỆT ĐỐI KHÔNG cho đáp số đúng. Hiển thị "Gợi ý cách làm" một cách sư phạm.
✅ Hướng dẫn học sinh tự tìm ra lỗi và sửa lại bài một cách chủ động.

Cấu trúc phản hồi:
1. Lời chào & Khen ngợi: Khen tinh thần học tập hoặc điểm sáng trong bài.
2. Nhận xét chi tiết:
   - Điểm tốt: (Trình bày, logic, kỹ năng tính toán).
   - Điểm cần lưu ý: (Nếu sai, chỉ ra lỗi ở bước nào, gợi ý cách sửa, KHÔNG đưa đáp số).
3. Chấm điểm: Thang điểm 10 kèm nhận xét khích lệ.
4. Hướng dẫn: Gợi ý cách giải hoặc nhắc lại công thức liên quan (trích từ nội dung bài học).
5. Lời chúc: Một câu động viên để học sinh tự tin hơn.

QUY ĐỊNH NGÔN NGỮ:
- TUYỆT ĐỐI CHỈ SỬ DỤNG TIẾNG VIỆT. KHÔNG sử dụng Hán tự hay ngôn ngữ khác.

QUY ĐỊNH KÝ HIỆU TOÁN HỌC (Khi học sinh điền bài):
- Nhân: Chấp nhận cả 'x' và '×'.
- Chia: Chấp nhận dấu ':'.
- Số thập phân: Chấp nhận cả dấu chấm '.' và dấu phẩy ','.
- Chỉ số trên: Chấp nhận viết liền đơn vị và số (ví dụ: m2, cm2, dm3) tương ứng với m², cm², dm³.

Bối cảnh:
- Bài học: ${t}
- Yêu cầu: ${n}
- Bài làm của học sinh: ${e}${o}`,r=await this.fetchWithTimeout(this.API_URL,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sentence:a,mode:"chat"})},25e3);if(!r.ok)throw new Error("API Error");const l=await r.json();return l.content||l.response||"Mình vừa xem bài của bạn, bạn thử viết lại rõ hơn được không?"}catch(s){return console.error("Tutor Error:",s),this.heuristicTutor(e,t,n)}},heuristicTutor(e,t,n){const i=(e||"").toString(),s=(n||"").toString(),o=m=>m.replace(/,/g,"."),a=m=>(o(m).match(/-?\d+(?:\.\d+)?/g)||[]).map(b=>Number(b)).filter(b=>Number.isFinite(b)),r=(()=>{const m=o(s),p=m.split("=");if(p.length>=2){const f=p[p.length-1],k=a(f);if(k.length)return k[0]}const b=a(m);return b.length?b[b.length-1]:null})(),l=a(i),d=l.length?l[l.length-1]:null,c=/%/.test(i)||/%/.test(s),h=(m,p)=>{if(m==null||p==null)return!1;const b=Math.abs(p)>=10?.5:.05;return Math.abs(m-p)<=b},u=(m,p)=>m!=null&&p!=null&&h(m,p*10),g=(m,p)=>m!=null&&p!=null&&h(m,p/10);return d==null?`Mình chưa thấy bạn ghi rõ kết quả cuối cùng nên chưa chấm được.

Bạn hãy viết thêm dòng “Đáp số: …” (kèm đơn vị) rồi bấm AI CHẤM lại nhé.`:r!=null&&h(d,r)?`Mình xem nhanh thấy bạn làm đúng hướng và kết quả hợp lý.

Bạn nhớ ghi rõ đơn vị ở “Đáp số” và trình bày phép tính theo từng bước nhé.`:r!=null&&c&&(u(d,r)||g(d,r))?`Bạn làm đúng bước tìm phần trăm, nhưng có vẻ bạn đang nhầm khi đổi phần trăm ra số thập phân.

Gợi ý: 20% không phải là 20 hoặc 2; bạn hãy đổi 20% về dạng số thập phân rồi nhân lại. Sau đó kiểm tra xem kết quả có hợp lý (nhỏ hơn số ban đầu) không nhé.`:r!=null?`Mình thấy bài của bạn đang sai ở một bước tính hoặc đổi đơn vị.

Bạn thử kiểm tra lại:
- Dấu phẩy/thập phân (dấu , và .)
- Đổi % ra số thập phân (nếu có)
- Nhân/chia có đúng thứ tự chưa

Bạn sửa rồi bấm AI CHẤM lại nhé.`:`Mình đang gặp lỗi kết nối nên không chấm chi tiết được.

Bạn hãy kiểm tra lại phép tính, đơn vị, và viết rõ “Đáp số”. Sau đó thử bấm AI CHẤM lại nhé.`},async vietnameseWriting(e,t){try{const n=`Bạn là giáo viên Tiếng Việt lớp 5. 
Yêu cầu: ${t}.
Nhận xét ngắn gọn (tối đa 4 câu) bài làm sau của học sinh: "${e}". 
Nếu hay thì khen (Chỉ ra điểm sáng như cách dùng từ, hình ảnh). Nếu chưa hay thì gợi ý nhẹ nhàng.
TUYỆT ĐỐI CHỈ SỬ DỤNG TIẾNG VIỆT. KHÔNG sử dụng Hán tự hay ngôn ngữ khác.
Định dạng trả về:
1. Nhận xét ưu điểm.
2. Gợi ý cải thiện.
3. Chấm điểm dự kiến: X/10.`,i=await this.fetchWithTimeout(this.API_URL,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sentence:n,mode:"chat",persona:"tlv"})},8e3);if(!i.ok)throw new Error("API Error");const s=await i.json();return s.content||s.response||"Mình vừa xem bài của bạn, bạn thử viết lại rõ hơn được không?"}catch(n){return console.error("Writing Eval Error:",n),"Thầy E hiện chưa xem bài được, em hãy tự kiểm tra lại nhé!"}}},H={quizStates:{},getLessonTitle(){let e=window.currentLessonData;if(!e){const n=document.querySelectorAll("iframe");for(const i of n)try{if(i.contentWindow.currentLessonData){e=i.contentWindow.currentLessonData;break}}catch{}}if(e&&e.title)return e.title;const t=document.getElementById("breadcrumb-current");if(t&&t.innerText.trim())return t.innerText.trim();if(document.title){const n=document.title.replace(" - EduRobot","");if(n&&n!=="Hệ thống Học tập EduRobot - Lớp 5")return n}return"Tổng quát"},getCurrentSlideContent(e){let t=document.getElementById("ltTrack"),n=window;if(!t){const s=document.querySelectorAll("iframe");for(const o of s)try{const r=(o.contentDocument||o.contentWindow.document).getElementById("ltTrack");if(r){t=r,n=o.contentWindow;break}}catch{}}if(t){const s=t.querySelectorAll(".ltTrang"),o=n._ltTrang;if(s.length>0&&typeof o=="number"&&o>=0&&o<s.length)return s[o].innerHTML}if(!e)return"";const i=(e.content||"")+`
`+(e.practice||"");try{const a=new DOMParser().parseFromString(i,"text/html").querySelectorAll(".ltTrang");if(a.length>1&&typeof window._ltTrang=="number"&&window._ltTrang>=0&&window._ltTrang<a.length)return a[window._ltTrang].innerHTML}catch(s){console.error("Lỗi trích xuất slide hiện tại:",s)}return i},toggleChat(){const e=document.getElementById("ai-chat-window");e&&(e.parentElement!==document.body&&document.body.appendChild(e),e.classList.contains("hidden")?(e.classList.remove("hidden"),e.classList.add("flex"),setTimeout(()=>{const t=document.getElementById("ai-chat-input");t&&t.focus()},100)):(e.classList.add("hidden"),e.classList.remove("flex")))},async sendAiMessage(){const e=document.getElementById("ai-chat-input"),t=e.value.trim();if(!t)return;const n=document.getElementById("ai-chat-messages"),i=H.getLessonTitle(),s=window.currentLessonData;let o="";s&&(o=H.getCurrentSlideContent(s)),window.problems120B&&(o+=`

DANH SÁCH PHÉP TÍNH (120B):
`+JSON.stringify(window.problems120B)),window.problems120C&&(o+=`

DANH SÁCH PHÉP TÍNH (120C):
`+JSON.stringify(window.problems120C)),n.innerHTML+=`
            <div class="flex justify-end mb-4 animate-slide-up">
                <div class="bg-blue-600 text-white p-3 rounded-2xl rounded-tr-none max-w-[80%] text-sm font-medium shadow-md">
                    ${t}
                </div>
            </div>
        `,e.value="",n.scrollTop=n.scrollHeight;const a="ai-loading-"+Date.now();n.innerHTML+=`
            <div id="${a}" class="flex mb-4 animate-fade-in">
                <div class="bg-gray-100 p-3 rounded-2xl rounded-tl-none text-gray-500 text-xs italic shadow-sm flex items-center gap-2">
                    <div class="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                    <div class="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div class="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                    Đang suy nghĩ...
                </div>
            </div>
        `,n.scrollTop=n.scrollHeight;try{const r=await D.ask(t,i,o);document.getElementById(a).remove(),n.innerHTML+=`
                <div class="flex mb-4 animate-slide-up">
                    <div class="bg-white dark:bg-slate-800 border border-blue-100 dark:border-slate-700 p-4 rounded-2xl rounded-tl-none max-w-[85%] text-sm text-gray-700 dark:text-slate-200 font-medium shadow-sm leading-relaxed">
                        <div class="flex items-center gap-2 mb-1">
                            <span class="text-[10px] font-black uppercase text-blue-600 dark:text-blue-400 tracking-widest">Robot</span>
                        </div>
                        ${r}
                    </div>
                </div>
            `,n.scrollTop=n.scrollHeight}catch{document.getElementById(a).innerText="Lỗi kết nối Robot!"}},async sendDirectMessage(e,t=""){const n=document.getElementById("ai-chat-messages"),i=H.getLessonTitle(),s=window.currentLessonData;let o="";s&&(o=H.getCurrentSlideContent(s)),window.problems120B&&(o+=`

DANH SÁCH PHÉP TÍNH (120B):
`+JSON.stringify(window.problems120B)),window.problems120C&&(o+=`

DANH SÁCH PHÉP TÍNH (120C):
`+JSON.stringify(window.problems120C));const a=document.getElementById("ai-chat-window");a&&a.classList.contains("hidden")&&(a.classList.remove("hidden"),a.classList.add("flex")),n.innerHTML+=`
            <div class="flex justify-end mb-4 animate-slide-up">
                <div class="bg-blue-600 text-white p-3 rounded-2xl rounded-tr-none max-w-[80%] text-sm font-medium shadow-md">
                    ${e}
                </div>
            </div>
        `,n.scrollTop=n.scrollHeight;const r="ai-loading-"+Date.now();n.innerHTML+=`
            <div id="${r}" class="flex mb-4 animate-fade-in">
                <div class="bg-gray-100 p-3 rounded-2xl rounded-tl-none text-gray-500 text-xs italic shadow-sm flex items-center gap-2">
                    <div class="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                    <div class="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div class="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                    Đang xem bài...
                </div>
            </div>
        `,n.scrollTop=n.scrollHeight;try{const l=t?`${e}

${t}`:e,d=await D.ask(l,i,o);document.getElementById(r).remove(),n.innerHTML+=`
                <div class="flex mb-4 animate-slide-up">
                    <div class="bg-white dark:bg-slate-800 border border-blue-100 dark:border-slate-700 p-4 rounded-2xl rounded-tl-none max-w-[85%] text-sm text-gray-700 dark:text-slate-200 font-medium shadow-sm leading-relaxed">
                        <div class="flex items-center gap-2 mb-1">
                            <span class="text-[10px] font-black uppercase text-blue-600 dark:text-blue-400 tracking-widest">Robot</span>
                        </div>
                        ${d}
                    </div>
                </div>
            `,n.scrollTop=n.scrollHeight}catch{document.getElementById(r).innerText="Lỗi kết nối Robot!"}},renderTutor(e,t,n="Con hãy nhập câu trả lời hoặc nội dung bài làm vào đây nhé..."){return`
            <div class="tutor-container my-12 animate-fade-in" id="tutor-${e}">
                <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-[48px] p-10 md:p-14 border border-blue-100/50 relative overflow-hidden group">
                    <div class="absolute -right-4 -top-4 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
                    <div class="flex flex-col md:flex-row items-center gap-10 relative z-10">
                        <div class="shrink-0">
                            <div class="w-24 h-24 bg-blue-600 rounded-[32px] flex items-center justify-center text-5xl font-black text-white shadow-xl shadow-blue-900/5 transform group-hover:rotate-6 transition-transform">E</div>
                        </div>
                        <div class="flex-grow text-center md:text-left">
                            <h4 class="text-2xl font-black text-blue-900 mb-4 tracking-tight">EduRobot đang đợi bài của bạn!</h4>
                            <p class="text-blue-700/70 font-bold uppercase text-[10px] tracking-[0.2em] mb-8">${t}</p>
                             <div class="flex flex-col md:flex-row gap-5">
                                <textarea id="tutor-input-${e}" placeholder="${n}" 
                                    class="flex-grow bg-white/80 dark:bg-slate-800/80 border-none rounded-[32px] px-8 py-6 text-sm font-bold text-gray-800 dark:text-slate-100 min-h-[150px] shadow-inner focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-blue-200"></textarea>
                                <button onclick="AIInteraction.submitTutor('${e}', '${t.replace(/'/g,"\\'")}')" 
                                    class="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 rounded-[32px] font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-blue-500/20 transition-all active:scale-95 shrink-0 h-fit self-end group">
                                    NỘP BÀI CHO EDUROBOT <span class="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                                </button>
                            </div>
                            <div id="tutor-response-${e}" class="mt-8 hidden animate-fade-in"></div>
                        </div>
                    </div>
                </div>
            </div>
        `},async submitTutor(e,t){const n=document.getElementById(`tutor-input-${e}`),i=document.getElementById(`tutor-response-${e}`),s=n.value.trim();if(!s){alert("Bạn vui lòng nhập câu trả lời nhé!");return}const o=event.currentTarget,a=o.innerHTML;o.disabled=!0,o.innerHTML='<div class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>';try{const r=H.getLessonTitle(),l=window.currentLessonData;let d=l?(l.content||"")+`
`+(l.practice||""):"";window.problems120B&&(d+=`

DANH SÁCH PHÉP TÍNH (120B):
`+JSON.stringify(window.problems120B)),window.problems120C&&(d+=`

DANH SÁCH PHÉP TÍNH (120C):
`+JSON.stringify(window.problems120C)),i.classList.remove("hidden"),i.innerHTML=`
                <div class="bg-blue-100/50 p-4 rounded-2xl flex items-center gap-3 italic text-blue-600 text-xs font-bold">
                    <div class="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                    EduRobot đang xem bài của bạn...
                </div>
            `;const c=await D.tutor(s,r,t,d);i.innerHTML=`
                <div class="bg-white dark:bg-slate-800 border-2 border-blue-500 p-6 rounded-[28px] shadow-lg shadow-blue-100 dark:shadow-blue-900/20 animate-slide-up relative">
                    <div class="absolute -top-3 left-6 px-3 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full">Nhận xét từ Robot</div>
                    <div class="text-sm font-medium text-gray-700 dark:text-slate-200 leading-relaxed pt-2">${c.replace(/\n/g,"<br>")}</div>
                    <button 
                        onclick="this.parentElement.parentElement.classList.add('hidden')"
                        class="mt-4 text-[10px] font-black text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 uppercase tracking-widest transition-colors"
                    >Đóng nhận xét</button>
                </div>
            `}catch{i.innerHTML='<div class="text-red-500 font-bold p-4">Lỗi rồi! Bạn hãy thử lại sau nhé.</div>'}finally{o.disabled=!1,o.innerHTML=a}},async evaluateWriting(e,t){const n=document.getElementById(`ai-${e}`),i=document.getElementById(`fb-${e}`),s=n?n.value.trim():"";if(!s){alert("Em hãy viết bài trước khi xem nhận xét nhé!"),n&&n.focus();return}const o=event.currentTarget,a=o.innerHTML;o.disabled=!0,o.innerHTML='<div class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>';try{i.classList.remove("hidden"),i.innerHTML=`
                <div class="flex items-center gap-2 text-blue-600 animate-pulse font-bold">
                    <div class="w-6 h-6 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-[10px] shadow-sm mr-1">E</div> 
                    <span>Robot đang đọc bài của em...</span>
                </div>
            `;const r=await D.vietnameseWriting(s,t);i.innerHTML=`
                <div class="space-y-3">
                    <div class="flex items-center justify-between border-b border-rose-100 pb-2 mb-2">
                        <div class="flex items-center gap-2 text-rose-500 font-black">
                            <span class="text-2xl">✍️</span> NHẬN XÉT CHI TIẾT
                        </div>
                    </div>
                    <div class="text-gray-700 leading-relaxed text-sm">${r.replace(/\n/g,"<br>").replace(/\*\*/g,"<b>")}</div>
                </div>
            `}catch{i.innerHTML='<div class="text-red-500 font-bold p-2">Lỗi rồi! Em hãy thử lại sau nhé.</div>'}finally{o.disabled=!1,o.innerHTML=a}},showAiModal(e,t,n={}){const i=n.fullScreen||!1;let s=document.getElementById("ai-modal");s||(s=document.createElement("div"),s.id="ai-modal",s.className="fixed inset-0 z-[100] flex items-center justify-center p-0 bg-gray-900/60 backdrop-blur-md hidden animate-fade-in",s.onclick=l=>{l.target===s&&H.closeAiModal()},document.body.appendChild(s)),s.className=`fixed inset-0 z-[100] flex items-center justify-center ${i?"p-0":"p-4"} bg-gray-900/60 backdrop-blur-md hidden animate-fade-in`;const o=i?"bg-white dark:bg-slate-900 w-full h-full shadow-2xl overflow-hidden animate-scale-up flex flex-col":"bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[40px] shadow-2xl overflow-hidden animate-scale-up border border-white/20 dark:border-slate-800",a=i?"p-8 md:p-16":"p-8 md:p-12",r=i?"flex-1 overflow-y-auto":"max-h-[60vh] overflow-y-auto";s.innerHTML=`
            <div class="${o}">
                <div class="bg-gradient-to-r from-blue-600 to-indigo-700 ${i?"p-2 md:p-3":"p-8"} flex justify-between items-center text-white shrink-0">
                    <div class="flex items-center gap-4">
                        <div class="${i?"w-8 h-8 text-sm":"w-14 h-14 text-3xl"} bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center font-black text-white">E</div>
                        <div>
                            <h3 class="${i?"text-lg md:text-xl":"text-xl"} font-black italic tracking-tight">${e}</h3>
                        </div>
                    </div>
                    <button onclick="AIInteraction.closeAiModal()" class="${i?"w-8 h-8":"w-12 h-12"} hover:bg-white/10 rounded-full transition-colors flex items-center justify-center">
                        <svg class="${i?"w-5 h-5":"w-8 h-8"}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
                <div class="${a} ${r}">
                    <div class="w-full">${t}</div>
                </div>
                ${i?"":`
                <div class="p-8 bg-gray-50 dark:bg-slate-800 border-t border-gray-100 dark:border-slate-700 flex justify-end shrink-0">
                    <button onclick="AIInteraction.closeAiModal()" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-xs rounded-2xl font-black uppercase tracking-widest transition-all active:scale-95 shadow-lg shadow-blue-200">Đã hiểu bài!</button>
                </div>
                `}
            </div>
        `,s.classList.remove("hidden")},closeAiModal(){const e=document.getElementById("ai-modal");e&&e.classList.add("hidden")},async gradeWithModal(e,t,n=null){H.showAiModal(e,`
            <div class="flex flex-col items-center justify-center py-12 space-y-6">
                <div class="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                <p class="text-blue-600 font-bold animate-pulse text-lg">Thầy E đang đọc bài của em...</p>
            </div>
        `),setTimeout(()=>{const i=document.getElementById("ai-modal");i&&(i.onclick=s=>{s.target===i&&H.closeAiModal()})},100);try{const i=H.getLessonTitle(),s=window.currentLessonData||{},o=H.getCurrentSlideContent(s);let a=await D.tutor(t,i,"Chấm bài làm của học sinh",o);const r=/[\u4e00-\u9fa5]/g;r.test(a)&&(console.warn("AI returned strange characters, cleaning up..."),a=a.replace(r,""));let l=0;const d=a.match(/(?:Điểm số|Chấm điểm|Kết quả):\s*(\d+)(?:\/(\d+))?/i);if(d){const m=parseInt(d[1]),p=d[2]?parseInt(d[2]):10;l=Math.round(m/p*100)}typeof n=="function"&&n(l,a);let c=a.replace(/\n/g,"<br>").replace(/\*\*(.*?)\*\*/g,"<b>$1</b>").replace(/### (.*?)(<br>|$)/g,'<h3 class="text-xl font-black text-blue-600 mt-4 mb-2">$1</h3>').replace(/## (.*?)(<br>|$)/g,'<h2 class="text-2xl font-black text-blue-700 mt-6 mb-3 border-b pb-1">$1</h2>');const h=[{marker:"LỜI GIẢI CHI TIẾT:",color:"blue",icon:"📝"},{marker:"Lời giải chi tiết:",color:"blue",icon:"📝"},{marker:"Chi tiết bài giải:",color:"blue",icon:"📝"},{marker:"Gợi ý cách làm:",color:"amber",icon:"💡"},{marker:"Nhận xét của Thầy E:",color:"indigo",icon:"👨‍🏫"},{marker:"Điểm cần lưu ý:",color:"rose",icon:"⚠️"}];let u=!1;h.forEach(m=>{if(!u&&c.includes(m.marker)){u=!0;const p=c.split(m.marker);if(p.length>1){const b={blue:"bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800 text-blue-800",amber:"bg-amber-50 dark:bg-amber-900/20 border-amber-100 dark:border-amber-800 text-amber-800",indigo:"bg-indigo-50 dark:bg-indigo-900/20 border-indigo-100 dark:border-indigo-800 text-indigo-800",rose:"bg-rose-50 dark:bg-rose-900/20 border-rose-100 dark:border-rose-800 text-rose-800"}[m.color]||"bg-blue-50 border-blue-100 text-blue-800";c=p[0]+`<div class="mt-6 ${b} p-6 md:p-8 rounded-[40px] border-2 shadow-sm animate-in slide-in-from-bottom-4 duration-500">
                                <p class="font-black mb-4 flex items-center gap-3 text-xl md:text-2xl border-b border-white/50 pb-2">
                                    <span class="text-3xl">${m.icon}</span> 
                                    <span class="tracking-tight uppercase">${m.marker.replace(":","")}</span>
                                </p>
                                <div class="text-slate-700 dark:text-slate-300 text-xl md:text-2xl leading-relaxed font-bold">${p[1]}</div>
                            </div>`}}});const g=/(Điểm số|Chấm điểm|Kết quả): (.*?)(<br>|$)/g;c=c.replace(g,`<div class="mt-8 flex items-center gap-4 bg-emerald-600 text-white p-6 rounded-3xl shadow-xl animate-bounce-short">
                    <span class="text-3xl">🏆</span>
                    <div>
                        <p class="text-[10px] font-black uppercase tracking-widest opacity-80">Kết quả chấm điểm</p>
                        <p class="text-3xl font-black">$1: $2</p>
                    </div>
                </div>`),H.showAiModal(e,`
                <div class="prose prose-blue max-w-none dark:prose-invert lesson-body pt-4">
                    ${c}
                </div>
            `)}catch(i){console.error("Grade Error:",i),H.showAiModal(e,"Rất tiếc, kết nối của Thầy E đang gặp trục trặc. Em hãy kiểm tra internet hoặc thử lại sau nhé!")}},renderChatQuiz(e,t){return`
            <div id="chat-quiz-${e}" class="my-8 animate-fade-in chat-quiz-container">
                <div class="bg-gradient-to-br from-blue-700 to-indigo-900 rounded-[40px] p-10 md:p-12 shadow-2xl relative overflow-hidden border border-white/10 group">
                    <div class="absolute -right-20 -top-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl group-hover:bg-blue-400/20 transition-all duration-1000"></div>
                    <div class="relative z-10">
                        <div class="flex items-center gap-5 mb-8">
                            <div class="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center text-3xl border border-white/20 font-black text-white">R</div>
                            <div>
                                <h4 class="text-xl font-black text-white leading-tight">Robot tương tác</h4>
                                <p class="text-[10px] font-bold text-blue-200 uppercase tracking-[0.2em]">Ôn tập kiến thức thông minh</p>
                            </div>
                        </div>
                        <div id="quiz-chat-area-${e}" class="space-y-6 mb-8 max-h-[400px] overflow-y-auto pr-4 scroll-smooth">
                            <div class="flex animate-slide-up">
                                <div class="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-2xl rounded-tl-none text-white font-medium text-sm leading-relaxed max-w-[85%]">
                                    Chào bạn! Mình rất vui được hỗ trợ bạn ôn lại kiến thức. Bạn đã sẵn sàng để bắt đầu thử thách chưa?
                                </div>
                            </div>
                        </div>
                        <div id="quiz-input-area-${e}" class="flex justify-center">
                            <button onclick="AIInteraction.startChatQuiz('${e}', '${t}')" 
                                class="bg-white text-blue-900 px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest shadow-xl hover:scale-105 active:scale-95 transition-all">
                                Mình sẵn sàng!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `},startChatQuiz(e,t){console.log("Bắt đầu Chat Quiz:",e,t);let n=window.currentLessonData;if(!n&&window.router&&window.router.currentSubject&&window.router.currentLessonPeriod){const a=window.lessons||window.router.lessons;a&&a[window.router.currentSubject]&&(n=a[window.router.currentSubject].find(r=>r.period===window.router.currentLessonPeriod))}if(console.log("Dữ liệu bài học tìm thấy:",n),!n||!n.chatQuizzes||!n.chatQuizzes[t]){console.error("Không tìm thấy dữ liệu Quiz cho key:",t);return}const i=n.chatQuizzes[t];H.quizStates[e]={index:0,questions:i.questions};const s=document.getElementById(`quiz-chat-area-${e}`),o=document.getElementById(`quiz-input-area-${e}`);s.innerHTML+=`
            <div class="flex justify-end animate-slide-up">
                <div class="bg-blue-500 text-white p-4 rounded-2xl rounded-tr-none text-sm font-bold shadow-lg">
                    Mình sẵn sàng!
                </div>
            </div>
        `,setTimeout(()=>{const a=i.questions[0];s.innerHTML+=`
                <div class="flex animate-slide-up">
                    <div class="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-2xl rounded-tl-none text-white font-medium text-sm leading-relaxed max-w-[85%]">
                         ${a.question}
                    </div>
                </div>
            `,o.innerHTML=`
                <div class="relative w-full max-w-md">
                    <input type="text" id="quiz-input-field-${e}" 
                        class="w-full bg-white/20 border-2 border-white/30 rounded-2xl px-6 py-4 text-white font-bold placeholder:text-blue-200 outline-none focus:border-white focus:bg-white/30 transition-all shadow-inner"
                        placeholder="Nhập câu trả lời..."
                        onkeypress="if(event.key === 'Enter') AIInteraction.submitChatQuizAnswer('${e}', '${t}')">
                    <button onclick="AIInteraction.submitChatQuizAnswer('${e}', '${t}')" 
                        class="absolute right-2 top-2 bottom-2 bg-white text-blue-900 px-5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-50 transition-colors">
                        Gửi
                    </button>
                </div>
            `,document.getElementById(`quiz-input-field-${e}`).focus(),s.scrollTop=s.scrollHeight},600)},async submitChatQuizAnswer(e,t){const n=H.quizStates[e],i=document.getElementById(`quiz-input-field-${e}`),s=document.getElementById(`quiz-chat-area-${e}`),o=document.getElementById(`quiz-input-area-${e}`),a=i.value.trim();if(!a)return;s.innerHTML+=`
            <div class="flex justify-end animate-slide-up">
                <div class="bg-blue-500 text-white p-4 rounded-2xl rounded-tr-none text-sm font-bold shadow-lg">
                    ${a}
                </div>
            </div>
        `,i.value="",s.scrollTop=s.scrollHeight;const r=n.questions[n.index],l=a.toLowerCase().replace(/\s/g,"").replace(/,/g,".")===r.answer.toLowerCase().replace(/\s/g,"").replace(/,/g,"."),d="quiz-loading-"+Date.now();s.innerHTML+=`
            <div id="${d}" class="flex animate-fade-in">
                <div class="bg-white/5 p-3 rounded-2xl text-blue-200 text-[10px] italic flex items-center gap-2">
                    <div class="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce"></div>
                    AI E đang xem...
                </div>
            </div>
        `,s.scrollTop=s.scrollHeight;try{const c=l?r.correctMsg||"Tuyệt vời! Bạn trả lời đúng rồi.":r.wrongMsg||`Gần đúng rồi, kết quả chính xác phải là ${r.answer}. Bạn cố gắng câu sau nhé!`;setTimeout(()=>{document.getElementById(d).remove(),s.innerHTML+=`
                    <div class="flex animate-slide-up">
                        <div class="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-2xl rounded-tl-none text-white font-medium text-sm leading-relaxed max-w-[85%]">
                            <span class="block mb-2 text-lg">${l?"🌟":"💡"}</span>
                            ${c}
                        </div>
                    </div>
                `,s.scrollTop=s.scrollHeight,n.index++,n.index<n.questions.length?setTimeout(()=>{const h=n.questions[n.index];s.innerHTML+=`
                            <div class="flex animate-slide-up">
                                <div class="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-2xl rounded-tl-none text-white font-medium text-sm leading-relaxed max-w-[85%]">
                                    ${h.question}
                                </div>
                            </div>
                        `,s.scrollTop=s.scrollHeight,document.getElementById(`quiz-input-field-${e}`).focus()},1500):setTimeout(()=>{s.innerHTML+=`
                            <div class="flex animate-slide-up">
                                <div class="bg-gradient-to-r from-emerald-400 to-teal-500 p-6 rounded-3xl text-white font-black text-center w-full shadow-xl">
                                    🎉 Chúc mừng bạn đã hoàn thành phần ôn tập!
                                </div>
                            </div>
                        `,o.innerHTML=`
                             <button onclick="AIInteraction.startChatQuiz('${e}', '${t}')" 
                                class="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest transition-all">
                                Ôn tập lại
                            </button>
                        `,s.scrollTop=s.scrollHeight},1500)},800)}catch{document.getElementById(d).innerHTML="Lỗi kết nối!"}}};window.AIInteraction=H;const de={renderCube3D(e){return`
            <div class="cube-container mt-2 mb-4 flex flex-col items-center animate-fade-in">
                <div class="bg-blue-50/50 px-4 py-1.5 rounded-full border border-blue-100 mb-6">
                    <span class="text-[9px] font-black uppercase text-blue-600 tracking-[0.2em]">${e}</span>
                </div>
                
                <div class="scene-3d" 
                     onmousedown="Visuals.startCubeRotate(event)" 
                     ontouchstart="Visuals.startCubeRotate(event)">
                    <div class="cube-3d" id="cube3d">
                        <div class="cube-face front"></div>
                        <div class="cube-face back"></div>
                        <div class="cube-face right"></div>
                        <div class="cube-face left"></div>
                        <div class="cube-face top"></div>
                        <div class="cube-face bottom"></div>
                        
                        <!-- Labels -->
                        <div class="cube-label label-w">1 m</div>
                        <div class="cube-label label-h">1 m</div>
                        <div class="cube-label label-d">1 m</div>
                    </div>
                </div>

                <div class="mt-6 flex gap-4">
                    <button onclick="Visuals.resetCube()" class="p-3 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all active:scale-95 text-lg">🔄</button>
                    <div class="px-5 py-3 bg-white border border-gray-100 rounded-2xl shadow-sm text-[9px] font-bold text-gray-400 flex items-center gap-3">
                        <span class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                        Dùng chuột hoặc ngón tay để xoay khối 3D
                    </div>
                </div>
            </div>
        `},cubeState:{isDragging:!1,currentX:35,currentY:-22,lastMouseX:0,lastMouseY:0},startCubeRotate(e){this.cubeState.isDragging=!0;const t=e.type==="touchstart"?e.touches[0].clientX:e.clientX,n=e.type==="touchstart"?e.touches[0].clientY:e.clientY;this.cubeState.lastMouseX=t,this.cubeState.lastMouseY=n;const i=o=>{if(!this.cubeState.isDragging)return;const a=o.type==="touchmove"?o.touches[0].clientX:o.clientX,r=o.type==="touchmove"?o.touches[0].clientY:o.clientY,l=a-this.cubeState.lastMouseX,d=r-this.cubeState.lastMouseY;this.cubeState.currentX+=l*.5,this.cubeState.currentY-=d*.5;const c=document.getElementById("cube3d");c&&(c.style.transform=`rotateX(${this.cubeState.currentY}deg) rotateY(${this.cubeState.currentX}deg)`),this.cubeState.lastMouseX=a,this.cubeState.lastMouseY=r,o.preventDefault()},s=()=>{this.cubeState.isDragging=!1,document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",s),document.removeEventListener("touchmove",i),document.removeEventListener("touchend",s)};document.addEventListener("mousemove",i),document.addEventListener("mouseup",s),document.addEventListener("touchmove",i,{passive:!1}),document.addEventListener("touchend",s)},resetCube(){this.cubeState.currentX=35,this.cubeState.currentY=-22;const e=document.getElementById("cube3d");e&&(e.style.transform=`rotateX(${this.cubeState.currentY}deg) rotateY(${this.cubeState.currentX}deg)`)}};window.Visuals=de;const x={renderQuizContainer(e){return`
            <div class="glass-card rounded-[40px] p-6 md:p-12 bg-white dark:bg-slate-900 min-h-[500px] animate-fade-in relative overflow-hidden">
                <div class="absolute -top-10 -right-10 w-40 h-40 bg-orange-50 dark:bg-orange-900/10 rounded-full blur-3xl opacity-50 border-orange-200 dark:border-orange-800/30"></div>
                <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-50 dark:bg-blue-900/10 rounded-full blur-3xl opacity-50 border-blue-200 dark:border-blue-800/30"></div>
                
                <div id="quiz-header-stubs" class="relative z-10">
                    <div class="flex items-center gap-2 mb-4 bg-orange-50 dark:bg-orange-900/20 px-4 py-2 rounded-2xl border border-orange-100 dark:border-orange-800/30 w-fit mx-auto">
                        <span class="text-orange-500">ℹ️</span>
                        <span id="quiz-pool-info" class="text-[10px] md:text-sm font-black text-orange-700 dark:text-orange-300 uppercase tracking-tight">Đang chuẩn bị thử thách...</span>
                    </div>
                </div>

                <div id="quiz-progress-bar" class="w-full h-2 md:h-3 bg-gray-100 dark:bg-slate-800 rounded-full mb-8 overflow-hidden relative z-10">
                    <div id="quiz-progress-fill" class="h-full bg-orange-500 rounded-full transition-all duration-500 w-[5%]"></div>
                </div>

                <div id="quiz-content" class="relative z-10 min-h-[300px] flex flex-col justify-center">
                    <div class="text-center py-20 flex flex-col items-center gap-4">
                        <div class="w-12 h-12 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
                        <p class="text-lg font-bold text-orange-600 animate-pulse">Đang nạp câu hỏi...</p>
                    </div>
                </div>
                
                <div id="quiz-gamification-layer" class="absolute inset-0 pointer-events-none z-[100] flex items-center justify-center transition-all duration-300"></div>
            </div>

            <div class="mt-8 max-w-4xl mx-auto">
                <div class="glass-card rounded-[32px] p-6 bg-white/80 dark:bg-slate-900/80 shadow-lg border border-gray-100 dark:border-slate-800">
                    <div class="flex items-center gap-4 mb-6 relative">
                        <div class="w-12 h-12 bg-gradient-to-br from-yellow-300 to-amber-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg">🏆</div>
                        <h3 class="text-2xl md:text-3xl font-black text-amber-600 uppercase tracking-tight">Thành tích lớp học</h3>
                    </div>
                    <div id="quiz-leaderboard-list" class="flex flex-col gap-3">
                        <div class="text-center py-6 text-gray-400 text-sm font-black uppercase tracking-widest animate-pulse">Đang nạp bảng vàng...</div>
                    </div>
                </div>
            </div>
        `},currentQuiz:[],currentIndex:0,score:0,correctCount:0,streak:0,isProcessing:!1,audioCtx:null,_leaderboardUnsub:null,async initQuiz(e=null,t=0){const n=e||window.currentLessonData;console.log(`[Quiz] Khởi tạo Quiz - Tiết: ${n==null?void 0:n.period} - Lần: ${t}`);const i=document.getElementById("quiz-pool-info"),s=document.getElementById("quiz-content");if(!((n==null?void 0:n.quizPool)&&n.quizPool.length>0)&&t<10){console.warn(`[Quiz] Dữ liệu chưa sẵn sàng cho bài ${n==null?void 0:n.period}, đang thử lại...`),setTimeout(()=>x.initQuiz(n,t+1),500);return}let a=(n==null?void 0:n.quizPool)||[];if(a.length===0){console.error("[Quiz] Không tìm thấy quizPool sau 10 lần thử."),s&&(s.innerHTML='<div class="text-center py-20 text-gray-400 font-bold italic">Không tìm thấy dữ liệu thử thách cho bài học này.</div>');return}console.log(`[Quiz] Tìm thấy ${a.length} câu hỏi. Đang chuẩn bị bộ câu hỏi ngẫu nhiên...`);const r=(n==null?void 0:n.quizCount)||10;let l=[...a].sort(()=>.5-Math.random()).slice(0,r);if(x.currentQuiz=l,x.currentIndex=0,x.score=0,x.correctCount=0,x.streak=0,x.startTime=Date.now(),i){const d=Math.round(100/l.length);l.length===a.length?i.innerText=`Thử thách bao gồm tất cả ${l.length} câu hỏi ôn tập (${d}%/câu).`:i.innerText=`Hệ thống chọn ngẫu nhiên ${l.length} câu (${d}%/câu) từ kho dữ liệu bài học.`}x.renderCurrentQuestion(),window.db&&x.loadLeaderboard(n)},renderCurrentQuestion(){if(!x.currentQuiz||x.currentQuiz.length===0){console.error("[Quiz] renderCurrentQuestion: currentQuiz rỗng");return}if(x.currentIndex>=x.currentQuiz.length){x.finishQuiz();return}const e=x.currentQuiz[x.currentIndex],t=document.getElementById("quiz-content");if(!t)return;const n=e.options.map((a,r)=>r);for(let a=n.length-1;a>0;a--){const r=Math.floor(Math.random()*(a+1));[n[a],n[r]]=[n[r],n[a]]}const i=n.map(a=>e.options[a]),s=n.indexOf(e.answer);x._currentShuffledAnswer=s;const o=document.getElementById("quiz-progress-fill");o&&(o.style.width=`${(x.currentIndex+1)/x.currentQuiz.length*100}%`),console.log(`[Quiz] Câu ${x.currentIndex+1} - Đáp án gốc: ${e.answer} → Sau trộn: ${s}`),t.innerHTML=`
            <div class="animate-slide-in-right">
                <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                    <h3 class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white leading-tight flex-1">
                        <span class="text-orange-500 font-black mr-2">Câu ${x.currentIndex+1}:</span> ${e.question}
                    </h3>
                    
                    <div class="flex gap-3 shrink-0">
                        <div class="flex flex-col items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border-2 border-blue-100 dark:border-blue-800/30 min-w-[80px]">
                            <span class="text-[10px] font-black text-blue-400 uppercase tracking-widest leading-none mb-1">Điểm</span>
                            <span class="text-2xl font-black text-blue-600 dark:text-blue-400 leading-none">${x.score}</span>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    ${i.map((a,r)=>`
                        <button onclick="Quiz.selectAnswer(${r})" class="quiz-opt-btn group relative w-full text-left p-5 rounded-[24px] border-2 border-gray-100 dark:border-slate-800 bg-gray-50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 hover:border-orange-400 hover:shadow-xl transition-all duration-300">
                            <div class="flex items-center">
                                <div class="w-10 h-10 border-2 border-gray-200 dark:border-slate-700 rounded-full flex-shrink-0 mr-4 group-hover:border-orange-500 flex items-center justify-center font-black text-gray-400 group-hover:text-orange-600 transition-colors opt-indicator">${String.fromCharCode(65+r)}</div>
                                <span class="text-xl md:text-2xl font-bold text-gray-700 dark:text-slate-200 leading-tight group-hover:text-gray-900 transition-colors">${a}</span>
                            </div>
                        </button>
                    `).join("")}
                </div>
            </div>
        `},selectAnswer(e){if(x.isProcessing)return;x.isProcessing=!0;const t=x._currentShuffledAnswer,n=e===t;n?(x.correctCount++,x.score=Math.round(x.correctCount/x.currentQuiz.length*100),x.playSFX("correct"),x.showLottieFeedback(!0),typeof confetti=="function"&&confetti({particleCount:50,spread:60,origin:{y:.8}})):(x.playSFX("wrong"),x.showLottieFeedback(!1));const i=document.querySelectorAll(".quiz-opt-btn"),s=document.querySelectorAll(".opt-indicator");i.forEach((o,a)=>{o.onclick=null,a===e&&(n?(o.classList.add("border-emerald-500","bg-emerald-50","dark:bg-emerald-900/20"),s[a].classList.add("bg-emerald-500","border-emerald-500","text-white"),s[a].innerHTML="✓"):(o.classList.add("border-rose-500","bg-rose-50","dark:bg-rose-900/20"),s[a].classList.add("bg-rose-500","border-rose-500","text-white"),s[a].innerHTML="✕")),o.classList.add("opacity-50"),a===e&&o.classList.remove("opacity-50")}),setTimeout(()=>{x.currentIndex++,x.isProcessing=!1,x.renderCurrentQuestion()},n?1500:2500)},finishQuiz(){const e=Math.round((Date.now()-x.startTime)/1e3),t=document.getElementById("quiz-content");t&&(t.innerHTML=`
            <div class="text-center animate-bounce-in py-10">
                <div class="text-8xl mb-6">🏆</div>
                <h3 class="text-4xl font-black text-gray-900 dark:text-white mb-2">Thử thách kết thúc!</h3>
                <p class="text-2xl text-gray-500 dark:text-gray-400 mb-8">
                    Bạn đúng <span class="text-orange-600 font-black">${x.correctCount}/${x.currentQuiz.length}</span> câu. 
                    Điểm số: <span class="text-blue-600 font-black">${x.score}</span>
                </p>
                <div class="flex gap-4 justify-center">
                    <button id="btn-submit-final" onclick="Quiz.submitProgress(${e})" class="bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-full font-black text-xl shadow-2xl transition-all transform hover:-translate-y-2">🚀 Nộp điểm</button>
                    <button onclick="Quiz.initQuiz()" class="bg-gray-200 text-gray-700 px-12 py-5 rounded-full font-black text-xl shadow-2xl transition-all transform hover:-translate-y-2">🔄 Làm lại</button>
                </div>
            </div>
        `,typeof confetti=="function"&&confetti({particleCount:150,spread:70}))},submitProgress(e){if(window.submitMathLesson){const t=`Trắc nghiệm tổng: Đúng ${x.correctCount}/${x.currentQuiz.length} câu. (Củng cố: ${x.score})`;window.submitMathLesson(t,x.score,"btn-submit-final",e,x.currentQuiz.length,x.correctCount)}},loadLeaderboard(e){var o;if(!window.db||!e)return;const t=document.getElementById("quiz-leaderboard-list");if(!t)return;const n=String(e.period||e.id),i=((o=window.router)==null?void 0:o.currentSubject)||"vietnamese",s=i==="math"?"Toán học":i==="history"?"Lịch sử - Địa lý":"Tiếng Việt";x._leaderboardUnsub&&x._leaderboardUnsub(),t.innerHTML='<div class="text-center py-8 text-slate-500"><i class="fas fa-spinner fa-spin text-2xl mb-2 opacity-30"></i><p class="text-[10px] font-black uppercase tracking-widest">Đang nạp bảng vàng...</p></div>',x._leaderboardUnsub=window.db.collection("diem_tieng_viet_lop5").where("period","==",n).where("subject","==",s).onSnapshot(a=>{var m;if(a.empty){t.innerHTML=`
                        <div class="text-center py-12 text-slate-500">
                            <i class="fas fa-info-circle text-3xl mb-3 opacity-20"></i>
                            <p class="text-xs font-bold uppercase tracking-widest">Chưa có thành tích nào</p>
                            <p class="text-[10px] opacity-70 mt-1">Hãy là người đầu tiên chinh phục bài học này!</p>
                        </div>
                    `;return}let r=[];a.forEach(p=>r.push(p.data())),r.sort((p,b)=>{var S,B;const f=(S=p.timestamp)!=null&&S.toDate?p.timestamp.toDate():0;return((B=b.timestamp)!=null&&B.toDate?b.timestamp.toDate():0)-f});const l=r.slice(0,10),d=Math.min(5,((m=e.exercises)==null?void 0:m.length)||3),c=["📚","📝","✅","🖊️","🌟"],h=["text-blue-600","text-emerald-600","text-orange-600","text-rose-500","text-purple-500"],u=p=>p==null||typeof p=="number"&&p===0?'<span class="text-slate-300 text-xs">-</span>':p>=100?'<span class="text-base text-emerald-500">✅</span>':'<span class="text-base text-red-500">❌</span>',g=p=>{if(!p)return"00:00";const b=Math.floor(p/60),f=p%60;return`${b.toString().padStart(2,"0")}:${f.toString().padStart(2,"0")}`};t.innerHTML=`
                    <div class="overflow-x-auto -mx-4 md:mx-0">
                        <table class="w-full text-left border-collapse min-w-[650px]">
                            <thead>
                                <tr class="text-[9px] font-black text-slate-500 uppercase tracking-tighter border-b border-white/5">
                                    <th class="px-3 py-3 w-8">
                                        <div class="flex flex-col items-center">
                                            <span class="text-base mb-1">🔢</span>
                                            <span>TT</span>
                                        </div>
                                    </th>
                                    <th class="px-3 py-3">
                                        <div class="flex flex-col items-start px-2">
                                            <span class="text-base mb-1">👤</span>
                                            <span>Học sinh</span>
                                        </div>
                                    </th>
                                    ${Array.from({length:d}).map((p,b)=>`
                                        <th class="px-2 py-3 text-center">
                                            <div class="flex flex-col items-center">
                                                <span class="text-base mb-1">${c[b]||"📝"}</span>
                                                <span class="${h[b]||"text-slate-500"}">Bài ${b+1}</span>
                                            </div>
                                        </th>
                                    `).join("")}
                                    <th class="px-2 py-3 text-center">
                                        <div class="flex flex-col items-center">
                                            <span class="text-base mb-1">✍️</span>
                                            <span class="text-orange-500">L.Tập</span>
                                        </div>
                                    </th>
                                    <th class="px-2 py-3 text-center">
                                        <div class="flex flex-col items-center">
                                            <span class="text-base mb-1">🌟</span>
                                            <span class="text-indigo-400">C.Cố</span>
                                        </div>
                                    </th>
                                    <th class="px-2 py-3 text-center">
                                        <div class="flex flex-col items-center">
                                            <span class="text-base mb-1">📊</span>
                                            <span class="text-amber-500">Điểm TB</span>
                                        </div>
                                    </th>
                                    <th class="px-3 py-3 text-right">
                                        <div class="flex flex-col items-end">
                                            <span class="text-base mb-1">⏱️</span>
                                            <span>T.Gian</span>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-white/5">
                                ${l.map((p,b)=>{const f=Array.from({length:d}).map((P,X)=>p[`scoreEx${X+1}`]),k=p.scoreQuiz||p.score||0,S=e.exercises?e.exercises.length:3;let B=0;for(let P=1;P<=S;P++)B+=p[`scoreEx${P}`]||0;const q=Math.round(B/S),K=Math.round((q+k)/2);return`
                                        <tr class="hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors group">
                                            <td class="px-3 py-3.5">
                                                <div class="w-6 h-6 flex items-center justify-center rounded-lg ${b===0?"bg-amber-400 text-amber-900 shadow-lg shadow-amber-400/20":b===1?"bg-slate-300 text-slate-800":b===2?"bg-orange-400 text-orange-900":"bg-slate-800 text-slate-500"} text-[10px] font-black">${b+1}</div>
                                            </td>
                                            <td class="px-3 py-3.5">
                                                <div class="text-xs font-black text-slate-800 dark:text-slate-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">${window.escapeHTML?window.escapeHTML(p.studentName||"Học sinh"):p.studentName||"Học sinh"}</div>
                                                <div class="text-[10px] font-bold text-slate-500 dark:text-slate-400">${window.escapeHTML?window.escapeHTML(p.studentSchool||"Trường"):p.studentSchool||"Trường"} - ${window.escapeHTML?window.escapeHTML(p.studentClass||"Lớp"):p.studentClass||"Lớp"}</div>
                                            </td>
                                            ${f.map(P=>`
                                                <td class="px-2 py-3.5 text-center text-sm">${u(P)}</td>
                                            `).join("")}
                                            <td class="px-2 py-3.5 text-center text-[11px] font-black text-orange-400">${q}%</td>
                                            <td class="px-2 py-3.5 text-center text-[11px] font-black text-indigo-400">${k}%</td>
                                            <td class="px-2 py-3.5 text-center">
                                                <span class="px-2 py-0.5 rounded-lg bg-amber-500/10 text-amber-500 text-[11px] font-black">${K}%</span>
                                            </td>
                                            <td class="px-3 py-3.5 text-right font-mono text-[10px] text-slate-500">${g(p.timeTaken)}</td>
                                        </tr>
                                    `}).join("")}
                            </tbody>
                        </table>
                    </div>
                `},a=>{console.error("[Quiz] Leaderboard Error:",a);let r="Không thể tải bảng vàng",l="Vui lòng thử lại sau hoặc báo quản trị viên.";a.code==="failed-precondition"&&(r="Lỗi chỉ mục Firestore",l="Hệ thống đang yêu cầu cập nhật chỉ mục (Index). Admin vui lòng xem Console."),t.innerHTML=`
                    <div class="text-center py-12 text-red-400 bg-red-500/5 rounded-3xl border border-red-500/10">
                        <i class="fas fa-exclamation-triangle text-3xl mb-3 opacity-40"></i>
                        <p class="text-xs font-black uppercase tracking-widest">${r}</p>
                        <p class="text-[9px] text-slate-500 mt-2 px-6 leading-relaxed">${l}</p>
                    </div>
                `})},playSFX(e){try{x.audioCtx||(x.audioCtx=new(window.AudioContext||window.webkitAudioContext)),x.audioCtx.state==="suspended"&&x.audioCtx.resume();const t=x.audioCtx.createOscillator(),n=x.audioCtx.createGain();t.connect(n),n.connect(x.audioCtx.destination);const i=x.audioCtx.currentTime;e==="correct"?(t.frequency.setValueAtTime(600,i),t.frequency.exponentialRampToValueAtTime(1200,i+.1),n.gain.exponentialRampToValueAtTime(.01,i+.3),t.start(i),t.stop(i+.3)):(t.frequency.setValueAtTime(300,i),t.frequency.exponentialRampToValueAtTime(100,i+.3),n.gain.exponentialRampToValueAtTime(.01,i+.4),t.start(i),t.stop(i+.4))}catch(t){console.warn("Audio feedback error:",t)}},showLottieFeedback(e){const t=document.getElementById("quiz-gamification-layer");t&&(t.classList.add("bg-black/10","backdrop-blur-[2px]"),t.innerHTML=`
            <div class="animate-bounce-in flex flex-col items-center justify-center p-6 rounded-3xl bg-white/95 dark:bg-slate-900/95 border-4 ${e?"border-emerald-500 shadow-emerald-500/30":"border-rose-500 shadow-rose-500/30"} shadow-2xl scale-110">
                <span class="text-8xl md:text-[100px] mb-2 drop-shadow-md">${e?"✅":"❌"}</span>
                <span class="text-2xl md:text-3xl font-black uppercase ${e?"text-emerald-600":"text-rose-600"} tracking-wider">${e?"Tuyệt vời!":"Thử lại nhé!"}</span>
            </div>
        `,setTimeout(()=>{t&&(t.innerHTML="",t.classList.remove("bg-black/10","backdrop-blur-[2px]"))},1500))},cleanup(){x._leaderboardUnsub&&x._leaderboardUnsub()}};window.Quiz=x;const R={_key:"edurobot_star_system",_classSize:40,init(){if(!localStorage.getItem(this._key)){const e={totalStars:0,history:[],milestones:{certificates:[],flags:[]}};localStorage.setItem(this._key,JSON.stringify(e))}},getData(){this.init();try{const e=JSON.parse(localStorage.getItem(this._key));return e.studentStars||(e.studentStars={}),e}catch{return{totalStars:0,history:[],milestones:{certificates:[],flags:[]},studentStars:{}}}},getStudentStars(e){const t=this.getData();return t.studentStars[e]===void 0?0:t.studentStars[e]},addStudentStars(e,t){const n=this.getData(),s=this.getStudentStars(e)+parseInt(t);return n.studentStars[e]=s,localStorage.setItem(this._key,JSON.stringify(n)),window.saveStarData&&window.saveStarData(e,s).catch(o=>console.warn("Firebase sync deferred:",o)),s},async syncWithFirebase(){if(!window.loadAllStars)return;const e=await window.loadAllStars();if(!e)return;const t=this.getData();let n=!1;for(const[i,s]of Object.entries(e))t.studentStars[i]!==s&&(t.studentStars[i]=s,n=!0);return n?(localStorage.setItem(this._key,JSON.stringify(t)),console.log("Đã đồng bộ số sao từ Firebase thành công!"),!0):!1},addStars(e,t,n="auto",i={}){const s=this.getData(),o={id:Date.now(),date:new Date().toISOString(),amount:parseInt(e),reason:t,type:n,...i};return s.totalStars+=o.amount,s.history.unshift(o),s.history.length>100&&(s.history=s.history.slice(0,100)),localStorage.setItem(this._key,JSON.stringify(s)),s},awardStarsToAll(e,t){return this.addStars(e,`[Cả lớp] ${t}`)},awardStarsToStudents(e,t,n){return this.addStars(t,`[Nhóm] ${n}`)},getCurrentCycle(){const e=new Date,t=e.getDay(),n=e.getHours(),i=new Date(e.getFullYear(),8,1);e<i&&i.setFullYear(e.getFullYear()-1);const s=Math.ceil(((e-i)/864e5+i.getDay()+1)/7);return t===5&&n>=17||t===6||t===0?`Tuần ${s}`:null},async awardWeeklyHonors(){const e=this.getCurrentCycle();if(!(!e||localStorage.getItem("edurobot_last_award_cycle")===e)){console.log(`🏆 Bắt đầu tổng kết và trao giải cho: ${e}`);try{if(!window.loadAllStars)return;const n=await window.loadAllStars();if(!n)return;let i=[];if(window.StarAdmin&&window.StarAdmin.allStudents&&window.StarAdmin.allStudents.length>0)i=window.StarAdmin.allStudents;else{const a=window.location.pathname.includes("/games/")?"../":"";i=await(await fetch(`${a}students_data.json`)).json()}const s=[...new Set(i.map(a=>a.studentClass))],o=localStorage.getItem("teacherName")||"Lê Thành Long";for(const a of s){const l=i.filter(h=>h.studentClass===a).map(h=>({...h,stars:n[h.email.toLowerCase()]||0})).sort((h,u)=>u.stars-h.stars),d=Math.ceil(l.length*.3),c=l.slice(0,d);for(let h=0;h<c.length;h++){const u=c[h],g=h+1,m={id:`CERT-${e}-${u.email}`,type:"certificate",name:`Giấy khen Học sinh Xuất sắc ${e}`,icon:"📜",date:new Date().toISOString(),teacher:o,reason:`Đạt thành tích học tập xuất sắc trong ${e}`,cycle:e};if(await window.saveHonor(u.email,m),g<=3){let p="Cờ Hạng Nhất",b="🥇";g===2&&(p="Cờ Hạng Nhì",b="🥈"),g===3&&(p="Cờ Hạng Ba",b="🥉");const f={id:`FLAG-${e}-${u.email}`,type:"flag",name:p,icon:b,date:new Date().toISOString(),rank:g,cycle:e};await window.saveHonor(u.email,f)}}}return localStorage.setItem("edurobot_last_award_cycle",e),console.log(`✅ Đã hoàn tất trao giải cho ${e}`),!0}catch(n){console.error("Lỗi khi trao giải tự động:",n)}}},getStats(){const e=this.getData(),t=new Date,n=new Date(t.getTime()-7*24*60*60*1e3),i=e.history.filter(s=>new Date(s.date)>=n).reduce((s,o)=>s+o.amount,0);return{total:e.totalStars,week:i,certificates:e.milestones.certificates,flags:e.milestones.flags}},awardStarsByPerformance(e,t,n){if(!e||t<50)return 0;let i=0;if(t>=100?i=10:t>=90?i=9:t>=80?i=8:t>=70?i=7:t>=60?i=6:t>=50&&(i=5),i===0)return 0;const s=e.toLowerCase(),o=n.toLowerCase().replace(/[^a-z0-9]/g,"_"),a=`stars_perf_${s}_${o}`,r=parseInt(localStorage.getItem(a)||"0");if(i>r){const l=i-r;return this.addStudentStars(s,l),localStorage.setItem(a,i.toString()),console.log(`[AutoStar] ${n}: +${l} sao (Tổng đạt: ${i})`),l}return 0}};window.StarService=R;const Be={async renderHonors(){const e=localStorage.getItem("userEmail")||localStorage.getItem("eduMathName");if(!e)return'<div class="p-12 text-center font-bold text-indigo-900/60">Vui lòng đăng nhập để xem Bảng Vàng!</div>';const t=document.getElementById("app-content");t&&(t.innerHTML=`
                <div class="flex flex-col items-center justify-center min-h-[60vh] space-y-6">
                    <div class="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
                    <p class="text-indigo-900/60 font-black uppercase tracking-widest text-xs animate-pulse">Đang mở Sổ Vàng...</p>
                </div>
            `);let n={certificates:[],flags:[]},i=0;if(window.loadStudentHonors){const a=await window.loadStudentHonors(e);a&&(n=a)}window.StarService&&(i=window.StarService.getStudentStars(e));const s=n.certificates||[],o=n.flags||[];return`
            <div class="max-w-6xl mx-auto px-4 py-8 animate-fade-in">
                <!-- Header -->
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div>
                        <h2 class="text-3xl md:text-6xl font-black text-indigo-950 dark:text-white tracking-tighter mb-2 flex items-center gap-4">
                            <span class="bg-yellow-400 text-white p-3 rounded-3xl shadow-lg shadow-yellow-200">🏆</span>
                            Bảng Vàng Vinh Danh
                        </h2>
                        <p class="text-[11px] font-black text-indigo-900/40 dark:text-indigo-200/40 uppercase tracking-[0.4em]">Thành tích học tập sáng chói của bạn</p>
                    </div>
                    <button onclick="window.location.hash = '#/'" class="px-8 py-4 rounded-3xl bg-white dark:bg-slate-800 shadow-2xl border border-indigo-50 dark:border-white/10 flex items-center gap-3 font-black text-sm hover:-translate-y-1 transition-all">
                        <span>🏠</span> Trang chủ
                    </button>
                </div>

                <!-- Stats Summary -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    <div class="glass-card-premium p-8 flex items-center gap-6 border-l-8 border-yellow-400">
                        <div class="text-5xl">⭐</div>
                        <div>
                            <p class="text-4xl font-black text-indigo-950 dark:text-white">${i}</p>
                            <p class="text-[10px] font-black text-indigo-900/40 uppercase tracking-widest">Sao Chăm Ngoan</p>
                        </div>
                    </div>
                    <div class="glass-card-premium p-8 flex items-center gap-6 border-l-8 border-orange-500">
                        <div class="text-5xl">🚩</div>
                        <div>
                            <p class="text-4xl font-black text-indigo-950 dark:text-white">${o.length}</p>
                            <p class="text-[10px] font-black text-indigo-900/40 uppercase tracking-widest">Cờ Thi Đua</p>
                        </div>
                    </div>
                    <div class="glass-card-premium p-8 flex items-center gap-6 border-l-8 border-blue-500">
                        <div class="text-5xl">📜</div>
                        <div>
                            <p class="text-4xl font-black text-indigo-950 dark:text-white">${s.length}</p>
                            <p class="text-[10px] font-black text-indigo-900/40 uppercase tracking-widest">Giấy Khen</p>
                        </div>
                    </div>
                </div>

                <!-- Main Content -->
                <div class="space-y-20">
                    <!-- Flags Section -->
                    <section>
                        <div class="flex items-center gap-6 mb-10">
                            <h3 class="text-2xl font-black text-indigo-950 dark:text-white uppercase tracking-tight">Cờ Thi Đua Tuần</h3>
                            <div class="flex-1 h-[2px] bg-gradient-to-r from-orange-500/20 to-transparent"></div>
                        </div>
                        
                        ${o.length===0?`
                            <div class="glass-card-premium p-16 text-center border-2 border-dashed border-indigo-100 dark:border-white/5 opacity-60">
                                <p class="text-6xl mb-6">🏁</p>
                                <p class="text-xl font-bold text-indigo-900/40">Chưa có cờ thi đua. Hãy nằm trong Top 3 của tuần để nhận cờ nhé!</p>
                            </div>
                        `:`
                            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                                ${o.map(a=>`
                                    <div class="relative group">
                                        <div class="aspect-[3/4.5] glass-card-premium !p-0 overflow-hidden flex flex-col items-center justify-between border-2 border-orange-100 dark:border-orange-900/30 group-hover:scale-105 transition-all duration-500 shadow-2xl group-hover:shadow-orange-400/20">
                                            <div class="w-full h-8 bg-gradient-to-r from-red-600 to-red-500 flex items-center justify-center">
                                                <span class="text-[8px] font-black text-white uppercase tracking-widest">${a.cycle||"Kỳ này"}</span>
                                            </div>
                                            <div class="text-6xl my-4 drop-shadow-2xl transition-transform group-hover:rotate-12">${a.icon}</div>
                                            <div class="p-4 w-full text-center bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
                                                <p class="text-[10px] font-black text-orange-600 mb-1">${a.name}</p>
                                                <p class="text-[8px] font-bold text-gray-400 capitalize">${new Date(a.date).toLocaleDateString("vi-VN",{month:"short",day:"numeric"})}</p>
                                            </div>
                                        </div>
                                    </div>
                                `).join("")}
                            </div>
                        `}
                    </section>

                    <!-- Certificates Section -->
                    <section>
                        <div class="flex items-center gap-6 mb-10">
                            <h3 class="text-2xl font-black text-indigo-950 dark:text-white uppercase tracking-tight">Giấy Khen Vinh Danh</h3>
                            <div class="flex-1 h-[2px] bg-gradient-to-r from-blue-500/20 to-transparent"></div>
                        </div>

                        ${s.length===0?`
                            <div class="glass-card-premium p-16 text-center border-2 border-dashed border-indigo-100 dark:border-white/5 opacity-60">
                                <p class="text-6xl mb-6">🏅</p>
                                <p class="text-xl font-bold text-indigo-900/40">Chưa có giấy khen. Hãy nỗ lực để lọt vào Top 30% của lớp nhé!</p>
                            </div>
                        `:`
                            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                ${s.map(a=>`
                                    <div class="bg-white dark:bg-slate-900 rounded-[2.5rem] p-1 shadow-2xl relative overflow-hidden group hover:-translate-y-2 transition-all duration-500">
                                        <div class="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-orange-400/10 to-transparent"></div>
                                        <div class="relative bg-white dark:bg-slate-900 rounded-[2.3rem] p-8 border-8 border-double border-yellow-200 dark:border-yellow-900/30 flex flex-col h-full">
                                            <!-- Certificate Header -->
                                            <div class="text-center mb-6">
                                                <div class="text-4xl mb-2">${a.icon}</div>
                                                <h4 class="text-2xl font-black text-indigo-950 dark:text-white uppercase tracking-tighter">${a.name}</h4>
                                                <div class="h-[1px] w-24 bg-yellow-400 mx-auto mt-2"></div>
                                            </div>

                                            <!-- Body -->
                                            <div class="flex-1 text-center py-4">
                                                <p class="text-sm font-bold text-indigo-900/60 dark:text-indigo-200/60 mb-2">Trân trọng trao tặng cho:</p>
                                                <p class="text-2xl font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-4">${localStorage.getItem("eduMathName").split("@")[0]}</p>
                                                <p class="text-sm text-gray-700 dark:text-slate-300 font-medium leading-relaxed px-4">
                                                    ${a.reason||"Đạt thành tích xuất sắc trong học tập và rèn luyện."}
                                                </p>
                                            </div>

                                            <!-- Footer / Signature -->
                                            <div class="flex justify-between items-end mt-8 pt-6 border-t border-gray-100 dark:border-white/5">
                                                <div class="text-left">
                                                    <p class="text-[8px] font-black text-gray-400 uppercase mb-1">Ngày cấp</p>
                                                    <p class="text-[10px] font-bold text-indigo-950 dark:text-white">${new Date(a.date).toLocaleDateString("vi-VN")}</p>
                                                    
                                                    <button onclick="Honors.downloadPDF('${a.id}')" class="mt-4 px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded-xl text-[10px] font-black transition-all flex items-center gap-2">
                                                        <span>📥</span> TẢI PDF
                                                    </button>
                                                </div>
                                                <div class="text-center">
                                                    <p class="text-[9px] font-black text-indigo-900/60 uppercase mb-4 italic">Giáo viên chủ nhiệm ký</p>
                                                    <p class="font-black text-indigo-600 dark:text-indigo-400 italic font-serif text-lg">${a.teacher||"Thầy Lê Thành Long"}</p>
                                                </div>
                                            </div>
                                            
                                            <!-- Decorative Seal -->
                                            <div class="absolute -bottom-6 -right-6 w-24 h-24 bg-red-600/10 rounded-full border-4 border-red-600/20 border-double flex items-center justify-center opacity-40 rotate-12">
                                                <span class="text-[8px] font-black text-red-700 uppercase p-4 text-center">EDU ROBOT EXCELLENCE</span>
                                            </div>
                                        </div>
                                    </div>
                                `).join("")}
                            </div>
                        `}
                    </section>
                </div>
            </div>
        `},async downloadPDF(e){if(typeof html2pdf>"u"){alert("Đang nạp thư viện PDF, vui lòng thử lại sau 2 giây...");return}const n=event.currentTarget.closest(".group");if(!n)return;const i=n.cloneNode(!0);i.style.transform="none",i.style.boxShadow="none",i.querySelectorAll("button").forEach(o=>o.remove()),i.style.width="800px",i.style.margin="0 auto";const s={margin:.5,filename:`Giay-Khen-${e}.pdf`,image:{type:"jpeg",quality:.98},html2canvas:{scale:2,useCORS:!0},jsPDF:{unit:"in",format:"letter",orientation:"landscape"}};html2pdf().set(s).from(i).save()}},Pe={renderStarAdmin(){return`
            <div class="max-w-6xl mx-auto px-4 py-8 animate-fade-in">
                <!-- Header -->
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                    <div>
                        <h2 class="text-3xl md:text-5xl font-black text-indigo-950 dark:text-white tracking-tight mb-2 flex items-center gap-4">
                            <span class="bg-orange-500 text-white p-3 rounded-3xl shadow-lg shadow-orange-200">⚙️</span>
                            Quản lý Sao Chăm Ngoan
                        </h2>
                        <p class="text-[11px] font-black text-indigo-900/40 dark:text-indigo-200/40 uppercase tracking-[0.3em]">Bảng điều khiển dành cho Giáo viên</p>
                    </div>
                    <div class="flex items-center gap-3">
                        ${localStorage.getItem("userRole")!=="teacher"?`
                            <button onclick="StarAdmin.openClassSettings()" class="px-4 py-3 rounded-2xl bg-white dark:bg-slate-800 shadow-xl border border-indigo-50 dark:border-white/10 font-bold text-sm text-indigo-600 hover:-translate-y-1 transition-all flex items-center gap-2">
                                <span>⚙️</span> <span class="hidden md:inline">Phân công lớp</span>
                            </button>
                        `:""}
                        <button onclick="window.location.hash = '#/'" class="px-6 py-3 rounded-2xl bg-white dark:bg-slate-800 shadow-xl border border-indigo-50 dark:border-white/10 font-black text-sm hover:-translate-y-1 transition-all">
                            Quay lại 🏠
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <!-- Left: Control Panel -->
                    <div class="lg:col-span-1 space-y-6">
                        <div class="glass-card-premium p-8 sticky top-8">
                            <h3 class="text-xl font-black text-indigo-950 dark:text-white mb-6 flex items-center gap-2">
                                <span class="text-xl">✨</span> Hành động nhanh
                            </h3>
                            
                            <div class="space-y-4">
                                <div>
                                    <label class="block text-[10px] font-black uppercase text-indigo-900/40 mb-2">Số lượng Sao</label>
                                    <input type="number" id="star-amount" value="5" class="w-full bg-gray-50 dark:bg-slate-900 border-none rounded-2xl px-6 py-4 text-xl font-black text-orange-600 focus:ring-2 focus:ring-orange-500 transition-all shadow-inner">
                                    <p class="text-[10px] text-gray-400 mt-2 italic">* Số âm để trừ sao (vd: -2)</p>
                                </div>

                                <div>
                                    <label class="block text-[10px] font-black uppercase text-indigo-900/40 mb-2">Lý do khen thưởng/kỷ luật</label>
                                    <textarea id="star-reason" placeholder="Ví dụ: Hăng hái phát biểu, Giúp đỡ bạn bè..." class="w-full bg-gray-50 dark:bg-slate-900 border-none rounded-2xl px-6 py-4 text-sm font-bold text-gray-700 dark:text-slate-200 focus:ring-2 focus:ring-blue-500 transition-all shadow-inner h-24"></textarea>
                                </div>

                                <div class="pt-4 grid grid-cols-1 gap-3">
                                    <button onclick="StarAdmin.awardAll()" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl font-black text-sm shadow-xl shadow-indigo-200/50 transition-all flex items-center justify-center gap-2 group">
                                        🚀 TẶNG CẢ LỚP
                                    </button>
                                    <button onclick="StarAdmin.awardSelected()" class="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-2xl font-black text-sm shadow-xl shadow-emerald-200/50 transition-all flex items-center justify-center gap-2">
                                        ✅ TẶNG CÁC BẠN ĐÃ CHỌN
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right: Student List -->
                    <div class="lg:col-span-2">
                        <div class="glass-card-premium p-0 overflow-hidden shadow-2xl">
                            <div class="p-6 border-b border-indigo-50 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl">
                                <h3 class="text-lg font-black text-indigo-950 dark:text-white uppercase tracking-tight flex items-center gap-2">
                                    Danh sách lớp
                                    <select id="class-spinner" class="ml-2 bg-white dark:bg-slate-900 border border-indigo-100 rounded-lg px-3 py-1 text-base font-bold text-indigo-600 outline-none focus:ring-2 focus:ring-indigo-500" onchange="StarAdmin.loadClass(this.value)">
                                        <option value="">Đang tải...</option>
                                    </select>
                                </h3>
                                <div class="flex flex-wrap items-center gap-2">
                                    <button onclick="StarAdmin.selectAll()" class="text-[10px] font-black text-blue-600 uppercase border border-blue-100 px-3 py-1.5 rounded-lg hover:bg-blue-50 transition-all">Chọn tất cả</button>
                                    <button onclick="StarAdmin.clearSelection()" class="text-[10px] font-black text-gray-400 uppercase border border-gray-100 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-all">Bỏ chọn</button>
                                </div>
                            </div>

                            <div class="overflow-x-auto">
                                <table class="w-full text-left">
                                    <thead>
                                        <tr class="bg-gray-50/50 dark:bg-white/5">
                                            <th class="px-6 py-4 text-[9px] font-black text-indigo-900/40 uppercase tracking-widest text-center w-16">Chọn</th>
                                            <th class="px-6 py-4 text-[9px] font-black text-indigo-900/40 uppercase tracking-widest">Họ và tên</th>
                                            <th class="px-6 py-4 text-[9px] font-black text-indigo-900/40 uppercase tracking-widest text-center">Sao hiện tại</th>
                                            <th class="px-6 py-4 text-[9px] font-black text-indigo-900/40 uppercase tracking-widest text-center">Hành động</th>
                                        </tr>
                                    </thead>
                                    <tbody id="star-student-list" class="divide-y divide-gray-50 dark:divide-white/5">
                                        <tr><td colspan="4" class="text-center py-8 text-gray-400">Đang tải danh sách...</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Modal Phân công lớp -->
                <div id="modal-class-settings" class="fixed inset-0 z-50 flex items-center justify-center hidden bg-black/50 backdrop-blur-sm transition-opacity">
                    <div class="bg-white dark:bg-slate-900 w-[90%] max-w-md rounded-3xl p-6 shadow-2xl transform transition-transform scale-95 origin-center">
                        <h3 class="text-xl font-black text-indigo-950 dark:text-white mb-2">Phân công giảng dạy</h3>
                        <p class="text-[11px] text-gray-500 mb-6">Chọn giáo viên và các lớp phụ trách. Hệ thống sẽ tự động lọc dữ liệu tương ứng.</p>
                        
                        <div class="mb-4">
                            <label class="block text-[10px] font-black uppercase text-indigo-900/40 mb-2">Chọn Giáo viên</label>
                            <select id="teacher-assign-select" onchange="StarAdmin.onTeacherChange(this.value)" class="w-full bg-gray-50 dark:bg-slate-800 border-2 border-indigo-50 dark:border-white/5 rounded-2xl px-4 py-3 text-sm font-bold text-indigo-600 outline-none focus:ring-2 focus:ring-indigo-500 transition-all">
                                <option value="">Đang tải giáo viên...</option>
                            </select>
                        </div>

                        <div id="class-settings-list" class="space-y-2 max-h-64 overflow-y-auto mb-6 pr-2">
                            <div class="p-4 text-center text-gray-400 text-xs">Đang tải danh sách lớp...</div>
                        </div>
                        
                        <div class="flex justify-end gap-3 pt-4 border-t border-gray-100 dark:border-slate-800">
                            <button onclick="StarAdmin.closeClassSettings()" class="px-4 py-2 rounded-xl text-gray-500 hover:bg-gray-100 font-bold text-sm transition-all">Hủy</button>
                            <button id="save-assignment-btn" onclick="StarAdmin.saveClassSettings()" class="px-6 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-sm shadow-lg shadow-indigo-200 transition-all">Lưu cài đặt</button>
                        </div>
                    </div>
                </div>
            </div>
        `},initStarAdmin(){window.StarAdmin={allStudents:[],allTeachers:[],currentClass:"",selectedTeacherForAssign:"",initData:async()=>{var e,t;try{const n=window.location.pathname.includes("/games/")?"../":"",s=await(await fetch(`${n}students_data.json`)).json();window.StarAdmin.allStudents=s;const o=[...new Set(s.map(h=>h.studentClass)),"Chọn"].sort();if(window.StarAdmin.selectedIdsForChon=[],window.db)try{const h=await window.db.collection("lop5chon").doc("active").get();h.exists&&(window.StarAdmin.selectedIdsForChon=h.data().studentIds||[])}catch(h){console.warn("Không thể tải danh sách Lớp chọn:",h)}const a=localStorage.getItem("userRole"),r=localStorage.getItem("userEmail")||((t=(e=window.auth)==null?void 0:e.currentUser)==null?void 0:t.email);let l=[];if(window.db&&r)try{const h=await window.db.collection("class_assignments").doc(r).get();h.exists?l=h.data().assignedClasses||[]:l=JSON.parse(localStorage.getItem("admin_assigned_classes")||"[]")}catch(h){console.warn("Dùng LocalStorage làm fallback:",h),l=JSON.parse(localStorage.getItem("admin_assigned_classes")||"[]")}else l=JSON.parse(localStorage.getItem("admin_assigned_classes")||"[]");let d=o;a==="teacher"?d=l.length>0?o.filter(h=>l.includes(h)):[]:l.length>0&&(d=o.filter(h=>l.includes(h)));const c=document.getElementById("class-spinner");c&&(d.length===0?(c.innerHTML='<option value="">(Không có lớp)</option>',window.StarAdmin.loadClass("")):(c.innerHTML=d.map(h=>`<option value="${h}">${h==="Chọn"?"Lớp Chọn ⭐":"Lớp "+h}</option>`).join(""),window.StarAdmin.loadClass(d[0])))}catch(n){console.error("Lỗi khi tải dữ liệu:",n);const i=document.getElementById("star-student-list");i&&(i.innerHTML='<tr><td colspan="4" class="text-center py-8 text-red-500">Lỗi khi tải dữ liệu.</td></tr>')}},openClassSettings:async()=>{const e=document.getElementById("modal-class-settings"),t=document.getElementById("class-settings-list"),n=document.getElementById("teacher-assign-select");if(e&&(e.classList.remove("hidden"),setTimeout(()=>e.querySelector("div").classList.replace("scale-95","scale-100"),50)),window.db&&window.StarAdmin.allTeachers.length===0)try{const o=await window.db.collection("users").where("role","in",["teacher","teacher-admin"]).get(),a=[];o.forEach(r=>a.push({email:r.data().email,displayName:r.data().displayName})),window.StarAdmin.allTeachers=a}catch(o){console.error(o)}if(n){let o='<option value="">-- Chọn giáo viên --</option>';window.StarAdmin.allTeachers.forEach(a=>{o+=`<option value="${a.email}">${a.displayName||a.email}</option>`}),n.innerHTML=o}const i=window.StarAdmin.allStudents||[],s=[...new Set(i.map(o=>o.studentClass)),"Chọn"].sort();t&&(t.innerHTML=s.map(o=>`
                        <label class="flex items-center gap-3 p-3 rounded-xl border border-gray-100 dark:border-slate-800 hover:bg-indigo-50 dark:hover:bg-slate-800 cursor-pointer transition-colors">
                            <input type="checkbox" value="${o}" class="class-setting-cb w-5 h-5 text-indigo-600 rounded bg-gray-100 border-gray-300 focus:ring-indigo-500">
                            <span class="font-bold text-sm text-gray-700 dark:text-gray-200">${o==="Chọn"?"Lớp Chọn ⭐":"Lớp "+o}</span>
                        </label>
                    `).join(""))},onTeacherChange:async e=>{window.StarAdmin.selectedTeacherForAssign=e;const t=document.querySelectorAll(".class-setting-cb");if(t.forEach(n=>n.checked=!1),!(!e||!window.db))try{const n=await window.db.collection("class_assignments").doc(e).get();if(n.exists){const i=n.data().assignedClasses||[];t.forEach(s=>{i.includes(s.value)&&(s.checked=!0)})}}catch(n){console.error(n)}},closeClassSettings:()=>{const e=document.getElementById("modal-class-settings");e&&(e.querySelector("div").classList.replace("scale-100","scale-95"),setTimeout(()=>e.classList.add("hidden"),200))},saveClassSettings:async()=>{var s,o;const e=window.StarAdmin.selectedTeacherForAssign;if(!e)return alert("Vui lòng chọn giáo viên!");const t=document.querySelectorAll(".class-setting-cb"),n=Array.from(t).filter(a=>a.checked).map(a=>a.value),i=document.getElementById("save-assignment-btn");i&&(i.disabled=!0);try{window.db&&await window.db.collection("class_assignments").doc(e).set({assignedClasses:n,lastUpdated:firebase.firestore.FieldValue.serverTimestamp()});const a=localStorage.getItem("userEmail")||((o=(s=window.auth)==null?void 0:s.currentUser)==null?void 0:o.email);e===a&&(localStorage.setItem("admin_assigned_classes",JSON.stringify(n)),window.StarAdmin.initData()),alert("Đã lưu phân công cho giáo viên thành công!"),window.StarAdmin.closeClassSettings()}catch{alert("Lỗi khi lưu.")}finally{i&&(i.disabled=!1)}},loadClass:e=>{window.StarAdmin.currentClass=e;let t=[];if(e==="Chọn"){const i=window.StarAdmin.selectedIdsForChon||[];t=window.StarAdmin.allStudents.filter(s=>i.includes(s.email))}else t=window.StarAdmin.allStudents.filter(i=>i.studentClass===e);const n=document.getElementById("star-student-list");n&&(n.innerHTML=t.map((i,s)=>{const o=i.email,a=window.StarService?window.StarService.getStudentStars(o):0;return`
                        <tr class="hover:bg-blue-50/30 dark:hover:bg-blue-900/5 transition-colors group">
                            <td class="px-6 py-4 text-center">
                                <input type="checkbox" name="student-select" value="${o}" class="w-5 h-5 rounded-lg border-2 border-indigo-100 text-indigo-600 focus:ring-indigo-500 cursor-pointer transition-all">
                            </td>
                            <td class="px-6 py-4">
                                <div class="flex items-center gap-3">
                                    <div class="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-100 to-white dark:from-slate-700 dark:to-slate-900 flex items-center justify-center text-xs font-black text-indigo-600 border border-indigo-50 dark:border-white/10">
                                        ${(i.name.split(" ").pop()||"").charAt(0)}
                                    </div>
                                    <span class="font-bold text-sm text-indigo-950 dark:text-slate-200">${window.escapeHTML?window.escapeHTML(i.name):i.name}</span>
                                </div>
                            </td>
                            <td class="px-6 py-4 text-center">
                                <span class="bg-orange-50 dark:bg-orange-950/20 text-orange-600 px-3 py-1 rounded-full text-xs font-black border border-orange-100 dark:border-orange-900/30">⭐ ${a}</span>
                            </td>
                            <td class="px-6 py-4 text-center">
                                <div class="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button onclick="StarAdmin.quickAward('${o}', 1)" class="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center hover:scale-110 transition-transform">＋</button>
                                    <button onclick="StarAdmin.quickAward('${o}', -1)" class="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center hover:scale-110 transition-transform">－</button>
                                </div>
                            </td>
                        </tr>
                    `}).join(""))},awardAll:async()=>{const e=parseInt(document.getElementById("star-amount").value);if(!e)return alert("Vui lòng nhập số sao!");const t=window.StarAdmin.allStudents.filter(n=>n.studentClass===window.StarAdmin.currentClass);window.StarService&&t.forEach(n=>window.StarService.addStudentStars(n.email,e)),alert("Đã tặng sao cho cả lớp!"),window.StarAdmin.loadClass(window.StarAdmin.currentClass)},awardSelected:async()=>{const e=Array.from(document.querySelectorAll('input[name="student-select"]:checked')).map(n=>n.value);if(e.length===0)return alert("Vui lòng chọn học sinh!");const t=parseInt(document.getElementById("star-amount").value);if(!t)return alert("Vui lòng nhập số sao!");window.StarService&&e.forEach(n=>window.StarService.addStudentStars(n,t)),alert("Đã tặng sao thành công!"),window.StarAdmin.loadClass(window.StarAdmin.currentClass)},quickAward:(e,t)=>{window.StarService&&window.StarService.addStudentStars(e,t),window.StarAdmin.loadClass(window.StarAdmin.currentClass)},selectAll:()=>document.querySelectorAll('input[name="student-select"]').forEach(e=>e.checked=!0),clearSelection:()=>document.querySelectorAll('input[name="student-select"]').forEach(e=>e.checked=!1)},window.StarAdmin.initData()}},U={games:{},gameRoutes:{choice_game:"games/choice_game.html",LuckyWheel:"games/lucky_wheel.html",tug_of_war:"games/tug_of_war.html",HeadTiltGame:"games/head_tilt.html",GroupDivider:"games/group_divider.html"},registerGame(e,t){this.games[e]=t},play(e,t){var s,o;const n=this.gameRoutes[e];if(!n){console.warn(`[GameLibrary] Standalone route for "${e}" not found. Trying legacy modal.`),this.playLegacy(e,t);return}const i={name:e,questions:this.prepareQuestions(t||this.getCurrentQuizPool()),isTeacher:localStorage.getItem("userRole")==="teacher"||localStorage.getItem("userRole")==="admin",lessonId:((s=window.currentLessonData)==null?void 0:s.id)||((o=window.currentLessonData)==null?void 0:o.period)||"",timestamp:Date.now()};localStorage.setItem("edurobot_current_game_data",JSON.stringify(i)),window.open(n,"_blank"),console.log(`[GameLibrary] Launched ${e} in separate tab via ${n}`)},getCurrentQuizPool(){var t,n;const e=window.currentLessonData;if(e&&(e.quizPool||(t=e.metadata)!=null&&t.quizPool))return e.quizPool||e.metadata.quizPool;if((n=window.QuestionBankManager)!=null&&n.isLoaded){const i=(e==null?void 0:e.period)||(e==null?void 0:e.id);if(i){const s=window.QuestionBankManager._quizPoolCache[String(i)];if(s)return s;const o=window.QuestionBankManager.data.filter(a=>String(a.period)===String(i));if(o.length>0)return window.QuestionBankManager._toQuizPool(o)}}return[]},playLegacy(e,t){if(!this.games[e]){console.error(`[GameLibrary] Game "${e}" not registered.`);return}this.renderModal();const n=document.getElementById("game-library-content");n.innerHTML="",this.games[e].start(n,t,()=>this.close())},prepareQuestions(e){return e?(Array.isArray(e),e):[]},renderModal(){let e=document.getElementById("game-library-modal");if(e){e.classList.remove("hidden"),document.body.appendChild(e);return}e=document.createElement("div"),e.id="game-library-modal",e.className="fixed inset-0 z-[2147483647] bg-white flex flex-col transition-opacity duration-300 pointer-events-auto",e.innerHTML=`
            <div class="relative w-screen h-screen bg-white flex flex-col overflow-hidden">
                <div class="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-[60] bg-gradient-to-b from-black/50 to-transparent">
                    <div class="text-white font-bold text-xl drop-shadow-md">🏆 Kho Trò Chơi Edurobot</div>
                    <button id="game-library-close" class="bg-red-500 hover:bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
                <div id="game-library-content" class="flex-1 w-full h-full relative overflow-hidden bg-gray-50 flex flex-col items-center justify-center">
                    <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                </div>
            </div>
        `,document.body.appendChild(e),document.getElementById("game-library-close").addEventListener("click",()=>this.close())},close(){const e=document.getElementById("game-library-modal");e&&(Object.values(this.games).forEach(t=>{typeof t.cleanup=="function"&&t.cleanup()}),e.classList.add("hidden"),document.getElementById("game-library-content").innerHTML="")},async openMatchingGame(){var o;window.QuestionBankManager&&await window.QuestionBankManager.init();const e=window.currentLessonData,t=((o=window.router)==null?void 0:o.currentSubject)||"math",n=window.lessons?window.lessons[t]:[];let i=null,s=this.getCurrentQuizPool();if(e&&n.length>0){const a=n.findIndex(r=>String(r.period)===String(e.period));if(a>0){const r=n[a-1],l=window.__lessonCache,d=l?l.get(r.id||r.period):null;d&&d.quizPool?i=d.quizPool:window.QuestionBankManager&&(i=await window.QuestionBankManager.getQuizPool(r.period))}}s&&s.length>0?localStorage.setItem("edurobot_matching_current",JSON.stringify(s)):localStorage.removeItem("edurobot_matching_current"),i&&i.length>0?localStorage.setItem("edurobot_matching_prev",JSON.stringify(i)):localStorage.removeItem("edurobot_matching_prev"),localStorage.setItem("edurobot_matching_title",(e==null?void 0:e.title)||"Trò chơi ghép đôi"),localStorage.setItem("edurobot_matching_lesson_id",(e==null?void 0:e.id)||(e==null?void 0:e.period)||""),window.open("games/GameGhepDoi/math_matching_game.html?source=lesson","_blank")}};window.GameLibrary=U;const ce={container:null,onClose:null,videoElement:null,canvasElement:null,canvasCtx:null,faceMesh:null,camera:null,isActive:!1,questions:[],currentQuestionIndex:0,lessonPeriod:null,isTeacherMode:!1,currentSet:1,score:0,hasAnswered:!1,selectedSide:null,startTime:null,tiltThreshold:.15,requiredHoldTime:1200,initSounds(){if(this.sounds)return;let e="";if(window.location.pathname.includes("/games/"))e="../";else{const t=document.getElementsByTagName("script");for(let n of t)if(n.src.includes("js/components/games/")){e=n.src.split("js/components/games/")[0];break}}this.sounds={bg:new Audio(e+"assets/audio/game/Quizi.mp3"),correct:new Audio(e+"assets/audio/dungroi.mp3"),wrong:new Audio(e+"assets/audio/sai.mp3"),win:new Audio(e+"assets/audio/Am_thanh_chuc_mung.mp3")},this.sounds.bg.loop=!0,this.sounds.bg.volume=.4},playBgMusic(){this.sounds&&this.sounds.bg&&this.sounds.bg.play().catch(e=>console.warn("Audio play failed:",e))},stopBgMusic(){this.sounds&&this.sounds.bg&&(this.sounds.bg.pause(),this.sounds.bg.currentTime=0)},async start(e,t,n){this.container=e,this.onClose=n,this.isActive=!0,this.currentQuestionIndex=0,this.score=0,this.hasAnswered=!1;const i=localStorage.getItem("userRole")||"";this.isTeacherMode=i==="teacher"||i==="admin"||i==="teacher-admin",this.lessonPeriod=window.router&&window.router.currentLessonPeriod||"",this.currentSet=1,await this.loadQuestions(t),this.initSounds(),this.questions.length===0?this.renderEmptyState():(this.renderBaseLayout(),this.updateQuestionUI(),this.playBgMusic(),await this.initCameraSettings())},renderEmptyState(){if(this.isTeacherMode)this.showTeacherEditor();else{this.container.innerHTML=`
                <div class="relative w-full h-full flex flex-col items-center justify-center bg-slate-50 font-['Be_Vietnam_Pro']">
                    <button id="ht-back-btn" class="absolute top-6 left-6 z-[100] flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-md border-2 border-slate-200 rounded-2xl font-black text-slate-600 hover:bg-slate-50 hover:border-indigo-300 hover:text-indigo-600 transition-all shadow-sm active:scale-95 group">
                        <div class="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                        </div>
                        <span>QUAY LẠI</span>
                    </button>
                    <div class="bg-white p-10 rounded-3xl shadow-xl text-center border-t-8 border-indigo-500 max-w-md">
                        <h2 class="text-2xl font-black text-slate-800 mb-4 text-center">BÀI HỌC CHƯA SẴN SÀNG</h2>
                        <p class="text-slate-500 mb-8 font-bold text-center">Giáo viên chưa biên soạn câu hỏi cho tiết học này. Vui lòng quay lại sau!</p>
                        <button id="ht-empty-close" class="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black transition-all shadow-md">ĐÓNG TRÒ CHƠI</button>
                    </div>
                </div>
            `;const e=document.getElementById("ht-empty-close");e&&(e.onclick=()=>this.onClose&&this.onClose());const t=document.getElementById("ht-back-btn");t&&(t.onclick=()=>this.onClose&&this.onClose())}},getTeacherId(){return localStorage.getItem("teacherName")||localStorage.getItem("userEmail")||"unknown_teacher"},async loadQuestions(e){var l,d;const t=this.getTeacherId(),n=String(this.lessonPeriod||""),i=`HTGame_Data_${n}_${t}_Set_${this.currentSet}`,s=localStorage.getItem(i);if(s)try{const c=JSON.parse(s);if(c&&Array.isArray(c)&&c.length>0){this.questions=c,console.log("[HeadTilt] Loaded from LocalStorage Override");return}}catch(c){console.warn("Local storage parse failed",c)}if(window.db)try{if(this.isTeacherMode){const c=`${n}_${t}_Set_${this.currentSet}`,h=await window.db.collection("head_tilt_games").doc(c).get();if(h.exists&&((l=h.data().questions)==null?void 0:l.length)>0){this.questions=h.data().questions,console.log("[HeadTilt] Loaded from Firestore (Teacher)");return}}else{const c=await window.db.collection("head_tilt_games").where("lessonPeriod","==",n).where("setNumber","==",this.currentSet).orderBy("updatedAt","desc").limit(1).get();if(!c.empty){this.questions=c.docs[0].data().questions||[],console.log("[HeadTilt] Loaded from Firestore (Student)");return}}}catch(c){console.error("[HeadTilt] Firestore Load Error:",c)}let o=null;if(e&&Array.isArray(e)&&e.length>0)o=e;else if(e&&typeof e=="string"&&e.length>10)try{o=JSON.parse(e)}catch{}if(o&&Array.isArray(o)&&o.length>0){o[0].question&&!o[0].q?(this.questions=this.convertQuizPoolToHeadTilt(o),console.log("[HeadTilt] Loaded from optionsStr (Converted)")):(this.questions=o,console.log("[HeadTilt] Loaded from optionsStr (Direct)"));return}const a=n;let r=window[`lesson_${a}`]||window[`lesson${a}`];if(r&&(r.quizPool||(d=r.metadata)!=null&&d.quizPool)){const c=r.quizPool||r.metadata.quizPool;this.questions=this.convertQuizPoolToHeadTilt(c),console.log("[HeadTilt] Loaded from Lesson Global Fallback");return}if(window.QuestionBankManager)try{const c=await window.QuestionBankManager.getQuestions({periods:parseInt(n),totalCount:15});if(c&&c.length>0){this.questions=this.convertQuizPoolToHeadTilt(c),console.log("[HeadTilt] Loaded from QuestionBankManager Fallback");return}}catch(c){console.warn("[HeadTilt] QBM Fallback failed",c)}this.questions=[]},convertQuizPoolToHeadTilt(e){if(!e||!Array.isArray(e))return[];const t=[],n=Math.min(e.length,15);return[...e].sort(()=>Math.random()-.5).slice(0,n).forEach(o=>{if(!o)return;const a=o.question||o.q||"Câu hỏi đang được cập nhật...",r=o.options||[],l=typeof o.answer=="number"?o.answer:parseInt(o.answer);let d="";r[l]!==void 0?d=r[l]:o.a!==void 0?d=o.a:d=o.answer||"Đáp án đúng";const c=r.filter((g,m)=>m!==l&&g!==d),h=c.length>0?c[Math.floor(Math.random()*c.length)]:"...",u=Math.random()<.5;t.push({q:a,a1:u?d:h,a2:u?h:d,correct:u?"left":"right",mediaType:o.mediaType||"none",mediaUrl:o.mediaUrl||""})}),t},renderBaseLayout(){this.container.innerHTML=`
            <div class="relative w-full h-full flex flex-col items-center justify-center bg-indigo-50 text-slate-800 overflow-hidden font-['Be_Vietnam_Pro']">
                <div class="absolute inset-0 bg-gradient-to-br from-sky-100 via-indigo-50 to-pink-100 opacity-80"></div>
                <div class="absolute top-20 left-10 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl mix-blend-multiply"></div>
                <div class="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl mix-blend-multiply"></div>
                
                <button onclick="HeadTiltGame.cleanup(); HeadTiltGame.onClose && HeadTiltGame.onClose()" class="absolute top-6 left-6 z-[100] flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-md border-2 border-slate-200 rounded-2xl font-black text-slate-600 hover:bg-slate-50 hover:border-indigo-300 hover:text-indigo-600 transition-all shadow-sm active:scale-95 group">
                    <div class="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                    </div>
                    <span>QUAY LẠI</span>
                </button>

                <div class="absolute top-6 right-6 flex flex-wrap justify-end items-center gap-4 z-[100]">
                    <div class="bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl border-2 border-white shadow-sm">
                        <span class="text-indigo-500 font-black mr-2 text-xs md:text-sm">CÂU HỎI:</span>
                        <span id="ht-progress-text" class="text-slate-800 font-black text-xs md:text-sm">-- / --</span>
                    </div>
                    <div class="flex gap-3 items-center pointer-events-auto">
                        <div class="flex bg-white/90 backdrop-blur-md p-1.5 rounded-2xl border-2 border-white shadow-sm">
                            ${[1,2,3,4,5].map(e=>`
                                <button onclick="window.HeadTiltGame.playSet(${e})" id="btn-set-${e}"
                                    class="w-8 h-8 md:w-10 md:h-10 rounded-xl font-black text-xs md:text-sm transition-all text-slate-500 hover:bg-indigo-50 hover:text-indigo-600">
                                    ${e}
                                </button>
                            `).join("")}
                        </div>
                        ${this.isTeacherMode?`
                        <button onclick="window.HeadTiltGame.showTeacherEditor()" class="bg-amber-400 hover:bg-amber-500 text-white px-6 py-3 h-12 rounded-2xl font-black text-xs shadow-sm transition-all flex items-center gap-2">
                            🛠️ BIÊN TẬP
                        </button>
                        `:""}
                    </div>
                </div>

                <!-- Dynamic Content Container -->
                <div id="ht-game-content" class="w-full flex flex-col items-center justify-start z-20"></div>

                <!-- Static Camera Section -->
                <div class="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center z-40">
                    <div class="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full border-[8px] border-white shadow-2xl bg-indigo-50 overflow-hidden shrink-0">
                        <video id="ht-video" class="absolute inset-0 w-full h-full object-cover -scale-x-100" autoplay playsinline muted></video>
                        <canvas id="ht-canvas" class="absolute inset-0 w-full h-full object-cover -scale-x-100 opacity-60"></canvas>
                        <div id="tilt-loading" class="absolute inset-0 flex items-center justify-center bg-white/90 z-20 transition-opacity duration-500">
                            <span class="text-[10px] font-black text-indigo-500 animate-pulse tracking-widest text-center px-4">ĐANG BẬT<br>CAMERA...</span>
                        </div>
                    </div>
                    <div class="mt-4 bg-white/80 backdrop-blur-xl px-4 py-2 rounded-2xl border border-white shadow-lg flex items-center gap-3">
                         <div class="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></div>
                         <span id="tilt-status" class="text-[10px] font-black text-slate-600 uppercase tracking-widest">ĐANG KHỞI TẠO AI...</span>
                    </div>
                </div>

                <div id="tilt-feedback" class="fixed inset-0 z-[2000] flex items-center justify-center bg-white/60 backdrop-blur-md opacity-0 pointer-events-none transition-opacity duration-500">
                    <div id="tilt-feedback-content" class="scale-50 transition-transform duration-500 transform text-center"></div>
                </div>
            </div>
        `,this.videoElement=document.getElementById("ht-video"),this.canvasElement=document.getElementById("ht-canvas"),this.canvasCtx=this.canvasElement.getContext("2d")},updateQuestionUI(){const e=this.questions[this.currentQuestionIndex],t=document.getElementById("ht-progress-text");t&&(t.innerText=`${this.currentQuestionIndex+1} / ${this.questions.length}`),[1,2,3,4,5].forEach(i=>{const s=document.getElementById(`btn-set-${i}`);s&&(this.currentSet===i?s.className="w-8 h-8 md:w-10 md:h-10 rounded-xl font-black text-xs md:text-sm transition-all bg-indigo-500 text-white shadow-md scale-105":s.className="w-8 h-8 md:w-10 md:h-10 rounded-xl font-black text-xs md:text-sm transition-all text-slate-500 hover:bg-slate-100")});const n=document.getElementById("ht-game-content");n&&(n.innerHTML=`
            <div class="w-11/12 md:w-4/5 max-w-4xl mt-16 md:mt-28 mb-8 animate-fade-in-down">
                <div class="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-6 md:p-10 text-center shadow-xl border-2 border-white relative">
                    ${this.renderGameMedia(e)}
                    <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-[10px] font-black px-6 py-1.5 rounded-full uppercase tracking-widest shadow-md">CÂU HỎI</div>
                    <h2 class="text-2xl md:text-4xl font-black leading-tight text-indigo-950">${e.q||e.question||""}</h2>
                </div>
            </div>

            <div class="flex gap-4 md:gap-12 items-end justify-center w-full max-w-5xl px-4 pb-40">
                <div id="option-left" class="group relative flex-1 max-w-[400px] transition-all duration-500">
                    <div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-pink-500 text-white px-6 py-2 rounded-2xl font-black text-xs shadow-xl z-20 whitespace-nowrap opacity-0 group-[.active]:opacity-100 transition-opacity">NGHIÊNG TRÁI</div>
                    <div class="relative bg-white/95 backdrop-blur-3xl p-1 rounded-[3rem] border-4 border-white shadow-xl overflow-hidden group-[.active]:border-pink-500 group-[.active]:bg-pink-50 group-[.active]:scale-105 transition-all">
                        <div class="h-24 md:h-48 flex items-center justify-center p-6 text-center">
                            <span class="text-lg md:text-3xl font-black text-slate-800 leading-tight">${e.a1||"..."}</span>
                        </div>
                        <div class="h-2 bg-slate-100 overflow-hidden rounded-full m-2">
                            <div id="progress-left" class="h-full bg-pink-500 w-0 transition-all duration-100"></div>
                        </div>
                    </div>
                </div>

                <div id="option-right" class="group relative flex-1 max-w-[400px] transition-all duration-500">
                    <div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-6 py-2 rounded-2xl font-black text-xs shadow-xl z-20 whitespace-nowrap opacity-0 group-[.active]:opacity-100 transition-opacity">NGHIÊNG PHẢI</div>
                    <div class="relative bg-white/95 backdrop-blur-3xl p-1 rounded-[3rem] border-4 border-white shadow-xl overflow-hidden group-[.active]:border-blue-500 group-[.active]:bg-blue-50 group-[.active]:scale-105 transition-all">
                        <div class="h-24 md:h-48 flex items-center justify-center p-6 text-center">
                            <span class="text-lg md:text-3xl font-black text-slate-800 leading-tight">${e.a2||"..."}</span>
                        </div>
                        <div class="h-2 bg-slate-100 overflow-hidden rounded-full m-2">
                            <div id="progress-right" class="h-full bg-blue-500 w-0 transition-all duration-100"></div>
                        </div>
                    </div>
                </div>
            </div>
        `)},async playSet(e){if(this.currentSet===e&&this.questions.length>0)return;this.currentSet=e;const t=document.getElementById("tilt-loading");t&&(t.style.display="flex",t.style.opacity="1"),await this.loadQuestions(),this.questions.length===0?this.isTeacherMode?this.showTeacherEditor():alert(`Bộ câu hỏi Bài ${e} chưa sẵn sàng!`):(this.currentQuestionIndex=0,this.score=0,this.hasAnswered=!1,this.updateQuestionUI(),this.camera&&document.getElementById("tilt-loading")&&(document.getElementById("tilt-loading").style.opacity="0",setTimeout(()=>{document.getElementById("tilt-loading")&&(document.getElementById("tilt-loading").style.display="none")},500)))},renderGameMedia(e){return!e.mediaType||e.mediaType==="none"||!e.mediaUrl?"":e.mediaType==="image"?`<img src="${e.mediaUrl}" class="max-h-[220px] w-auto mx-auto rounded-3xl shadow-xl border-4 border-white/10 mb-6">`:e.mediaType==="video"?`<video src="${e.mediaUrl}" class="max-h-[220px] w-auto mx-auto rounded-3xl shadow-xl mb-6" controls autoplay muted></video>`:e.mediaType==="audio"?`<audio src="${e.mediaUrl}" controls class="mx-auto mb-6 opacity-80"></audio>`:""},showTeacherEditor(){this.cleanup(),this.isActive=!1;let e=this.questions.length>0?this.questions:[{q:"",a1:"",a2:"",correct:"left",mediaType:"none",mediaUrl:""}];this.container.innerHTML=`
            <div class="w-full h-full flex flex-col bg-slate-50 overflow-y-auto font-['Be_Vietnam_Pro'] relative z-[60]">
                <div class="bg-white border-b py-6 pl-6 pr-20 md:pl-10 md:pr-24 sticky top-0 z-50 shadow-sm flex flex-wrap gap-4 justify-between items-center relative">
                    <div class="flex items-center gap-4">
                        <div class="bg-indigo-600 p-3 rounded-2xl text-white shadow-lg">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                        </div>
                        <div>
                            <h1 class="text-xl md:text-2xl font-black text-slate-900 tracking-tight">BIÊN TẬP GAME NGHIÊNG ĐẦU</h1>
                            <p class="text-[11px] text-slate-500 font-bold uppercase mt-1">Tiết: <span class="text-indigo-600">${this.lessonPeriod}</span> | Bài: <span class="text-indigo-600">${this.currentSet}</span></p>
                        </div>
                    </div>

                    <div class="flex items-center gap-4 ml-auto">
                        <div class="flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
                            ${[1,2,3,4,5].map(t=>`
                                <button onclick="window.HeadTiltGame.selectSet(${t})" 
                                    class="w-10 h-10 rounded-xl font-black text-sm transition-all ${this.currentSet===t?"bg-indigo-600 text-white shadow-md scale-105":"text-slate-500 hover:bg-white"}">
                                    ${t}
                                </button>
                            `).join("")}
                        </div>
                        <button id="ht-editor-close" class="bg-slate-100 hover:bg-indigo-100 text-slate-600 hover:text-indigo-700 px-5 py-3 rounded-2xl font-black text-xs transition-all flex items-center gap-2">
                            <div class="w-6 h-6 rounded-lg bg-slate-200 flex items-center justify-center">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                            </div>
                            <span>QUAY LẠI</span>
                        </button>
                    </div>
                </div>

                <div class="max-w-4xl mx-auto w-full p-8 space-y-8 pb-32">
                    <div class="flex flex-wrap gap-4 items-center justify-center bg-indigo-50/50 p-6 rounded-[2rem] border border-indigo-100">
                        <span class="text-xs font-black text-indigo-400 uppercase tracking-widest">Tải câu hỏi từ Củng Cố:</span>
                        <input type="text" id="ht-cungco-id" class="w-24 text-center py-3 px-4 rounded-xl font-bold bg-white border-2 border-indigo-100 outline-none focus:border-indigo-400" value="${this.lessonPeriod}">
                        <button onclick="window.HeadTiltGame.loadFromCungCo()" class="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-black shadow-lg transition-all active:scale-95 text-sm">🔄 TẢI DỮ LIỆU</button>
                    </div>

                    <div id="ht-editor-rows" class="space-y-8">
                        ${e.map((t,n)=>this.renderEditorRow(n,t)).join("")}
                    </div>

                    <div class="flex flex-wrap gap-4 items-center justify-center bg-white p-8 rounded-[3rem] shadow-xl border border-slate-200">
                        <button onclick="window.HeadTiltGame.addEditorRow()" class="px-6 py-4 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 rounded-2xl font-black transition-all">➕ THÊM CÂU HỎI</button>
                        <button id="ht-save-local" class="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black shadow-xl transition-all active:scale-95">💾 LƯU BÀI ${this.currentSet}</button>
                        <button id="ht-play-test" class="px-6 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl font-black shadow-xl transition-all active:scale-95">🎮 CHƠI THỬ</button>
                        <button id="ht-delete-set" class="px-6 py-4 bg-rose-50 text-rose-500 hover:bg-rose-500 hover:text-white rounded-2xl font-black border-2 border-rose-200 transition-all">🗑️ XÓA BÀI</button>
                    </div>
                </div>
            </div>
        `,document.getElementById("ht-editor-close").addEventListener("click",()=>{this.onClose&&this.onClose()}),document.getElementById("ht-save-local").addEventListener("click",async()=>{const t=document.getElementById("ht-save-local");t.innerHTML="⏳ ĐANG LƯU...",await this.saveToLocal(),t.innerHTML="✅ ĐÃ LƯU!",setTimeout(()=>{t.innerHTML=`💾 LƯU BÀI ${this.currentSet}`},2e3)}),document.getElementById("ht-play-test").addEventListener("click",async()=>{await this.saveToLocal(!1),this.isActive=!0,this.currentQuestionIndex=0,this.score=0,this.renderBaseLayout(),this.updateQuestionUI(),await this.initCameraSettings()}),document.getElementById("ht-delete-set").addEventListener("click",()=>this.deleteCurrentSet())},async saveToLocal(e=!0){try{if(this.questions=this.getEditorData(),this.questions.length===0){alert("Bạn chưa nhập câu hỏi nào!");return}const t=this.getTeacherId(),n=String(this.lessonPeriod||""),i=`HTGame_Data_${n}_${t}_Set_${this.currentSet}`;if(localStorage.setItem(i,JSON.stringify(this.questions)),window.db&&this.isTeacherMode){const s=`${n}_${t}_Set_${this.currentSet}`,o={lessonPeriod:n,setNumber:this.currentSet,teacherName:t,questions:this.questions};typeof firebase<"u"&&firebase.firestore?o.updatedAt=firebase.firestore.FieldValue.serverTimestamp():o.updatedAt=new Date().toISOString(),await window.db.collection("head_tilt_games").doc(s).set(o,{merge:!0}),console.log("[HeadTilt] Saved to Firestore:",s)}}catch(t){console.error("[HeadTilt] Save Error:",t),alert("Có lỗi xảy ra khi lưu: "+t.message)}},async selectSet(e){this.currentSet!==e&&(this.currentSet=e,await this.loadQuestions(),this.showTeacherEditor())},async deleteCurrentSet(){if(!confirm(`Bạn có chắc muốn XÓA BÀI ${this.currentSet}?`))return;const e=this.getTeacherId(),t=`HTGame_Data_${this.lessonPeriod}_${e}_Set_${this.currentSet}`;localStorage.removeItem(t),window.db&&await window.db.collection("head_tilt_games").doc(`${this.lessonPeriod}_${e}_Set_${this.currentSet}`).delete().catch(()=>{}),this.questions=[],alert("Đã xóa xong!"),this.showTeacherEditor()},renderEditorRow(e,t){const n=t.mediaType||"none",i=t.mediaUrl||"";return`
            <div class="bg-white p-8 rounded-[2.5rem] shadow-lg border border-slate-200 relative group editor-row" data-index="${e}" data-media-type="${n}">
                <div class="absolute -left-4 top-8 w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-black shadow-lg">${e+1}</div>
                <button onclick="this.closest('.editor-row').remove()" class="absolute -right-4 -top-4 w-10 h-10 bg-rose-100 text-rose-500 hover:bg-rose-500 hover:text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-md z-10">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                <div class="space-y-6">
                    <div class="bg-indigo-50/50 p-4 rounded-3xl border border-indigo-100/50 space-y-3">
                        <div class="flex items-center justify-between">
                            <label class="text-[10px] font-black uppercase text-indigo-400">Đa phương tiện (Ảnh/assets/assets/video/Audio)</label>
                            <div class="flex bg-white rounded-xl p-1 gap-1 border border-indigo-100">
                                ${["none","image","video","audio"].map(s=>`
                                    <button onclick="window.HeadTiltGame.setMediaType(${e}, '${s}')" 
                                        class="ht-m-type-${e} px-3 py-1 rounded-lg text-[9px] font-black uppercase transition-all ${n===s?"bg-indigo-600 text-white":"text-indigo-300 hover:bg-indigo-50"}">
                                        ${s==="none"?"KO":s==="image"?"ẢNH":s==="video"?"VIDEO":"LOA"}
                                    </button>
                                `).join("")}
                            </div>
                        </div>
                        <div class="flex gap-2">
                            <input type="text" class="flex-grow p-3 bg-white border border-indigo-100 rounded-xl outline-none text-[11px] font-bold media-url-input" value="${i}" placeholder="URL media...">
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="md:col-span-2">
                            <label class="block text-[10px] font-black uppercase text-slate-400 mb-2 ml-4">Câu hỏi</label>
                            <textarea class="ed-q w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-indigo-400 font-bold" rows="1">${t.q||t.question||""}</textarea>
                        </div>
                        <div>
                            <label class="block text-[10px] font-black uppercase text-pink-400 mb-2 ml-4">Đáp án TRÁI</label>
                            <input type="text" class="ed-a1 w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-pink-400 font-bold" value="${t.a1||""}">
                        </div>
                        <div>
                            <label class="block text-[10px] font-black uppercase text-blue-400 mb-2 ml-4">Đáp án PHẢI</label>
                            <input type="text" class="ed-a2 w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-blue-400 font-bold" value="${t.a2||""}">
                        </div>
                        <div class="md:col-span-2 flex items-center justify-center gap-4 bg-slate-50 p-4 rounded-2xl">
                            <span class="text-[10px] font-black uppercase text-slate-400">Đáp án đúng là bên:</span>
                            <select class="ed-correct bg-white border border-slate-200 rounded-xl px-4 py-2 font-black text-indigo-600 outline-none">
                                <option value="left" ${t.correct==="left"?"selected":""}>BÊN TRÁI</option>
                                <option value="right" ${t.correct==="right"?"selected":""}>BÊN PHẢI</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        `},addEditorRow(){const e=document.getElementById("ht-editor-rows");if(!e)return;const t=e.querySelectorAll(".editor-row").length,n=document.createElement("div");n.innerHTML=this.renderEditorRow(t,{q:"",a1:"",a2:"",correct:"left",mediaType:"none",mediaUrl:""}),e.appendChild(n.firstElementChild)},setMediaType(e,t){const n=document.querySelectorAll(".editor-row");let i=null;n.forEach(s=>{s.getAttribute("data-index")==e&&(i=s)}),i&&(i.setAttribute("data-media-type",t),i.querySelectorAll('button[class*="ht-m-type-"]').forEach(o=>{const a=t==="none"?"KO":t==="image"?"ẢNH":t==="video"?"VIDEO":"LOA";o.innerText.trim()===a?o.className=o.className.split(" ").filter(r=>!["bg-indigo-600","text-white","text-indigo-300","hover:bg-indigo-50"].includes(r)).join(" ")+" bg-indigo-600 text-white":o.className=o.className.split(" ").filter(r=>!["bg-indigo-600","text-white","text-indigo-300","hover:bg-indigo-50"].includes(r)).join(" ")+" text-indigo-300 hover:bg-indigo-50"}))},getEditorData(){const e=document.querySelectorAll(".editor-row"),t=[];return e.forEach(n=>{const i=n.querySelector('input[placeholder="URL media..."]');t.push({q:n.querySelector(".ed-q").value,a1:n.querySelector(".ed-a1").value,a2:n.querySelector(".ed-a2").value,correct:n.querySelector(".ed-correct").value,mediaType:n.getAttribute("data-media-type")||"none",mediaUrl:i?i.value:""})}),t},async loadScripts(){const e=["https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js","https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js","https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/face_mesh.js"];return Promise.all(e.map(t=>new Promise(n=>{const i=document.createElement("script");i.src=t,i.crossOrigin="anonymous",i.onload=n,document.body.appendChild(i)})))},async initCameraSettings(){if(window.FaceMesh||await this.loadScripts(),!(this.camera&&this.faceMesh))try{this.faceMesh=new FaceMesh({locateFile:t=>`https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${t}`}),this.faceMesh.setOptions({maxNumFaces:1,refineLandmarks:!1,minDetectionConfidence:.5,minTrackingConfidence:.5}),this.faceMesh.onResults(this.onFaceResults.bind(this)),this.camera=new Camera(this.videoElement,{onFrame:async()=>{this.isActive&&await this.faceMesh.send({image:this.videoElement})},width:480,height:480}),await this.camera.start(),document.getElementById("tilt-loading")&&(document.getElementById("tilt-loading").style.opacity="0",setTimeout(()=>{document.getElementById("tilt-loading")&&(document.getElementById("tilt-loading").style.display="none")},500));const e=document.getElementById("tilt-status");e&&(e.innerText="NHẬN DIỆN SẴN SÀNG!",e.className="text-[10px] font-black text-emerald-500 uppercase tracking-widest")}catch(e){console.error("Camera Error:",e),document.getElementById("tilt-status")&&(document.getElementById("tilt-status").innerText="LỖI CAMERA!")}},onFaceResults(e){var t;if(!(!this.isActive||this.hasAnswered)){if(this.canvasCtx.save(),this.canvasCtx.clearRect(0,0,this.canvasElement.width,this.canvasElement.height),((t=e.multiFaceLandmarks)==null?void 0:t.length)>0){const n=e.multiFaceLandmarks[0];typeof window.drawConnectors=="function"&&(window.FACEMESH_TESSELATION&&window.drawConnectors(this.canvasCtx,n,window.FACEMESH_TESSELATION,{color:"rgba(255,255,255,0.1)",lineWidth:1}),window.FACEMESH_RIGHT_EYE&&window.drawConnectors(this.canvasCtx,n,window.FACEMESH_RIGHT_EYE,{color:"#818cf8",lineWidth:2}),window.FACEMESH_LEFT_EYE&&window.drawConnectors(this.canvasCtx,n,window.FACEMESH_LEFT_EYE,{color:"#818cf8",lineWidth:2})),this.calculateHeadPose(n)}else this.resetSelection();this.canvasCtx.restore()}},calculateHeadPose(e){const t=Math.atan((e[263].y-e[33].y)/(e[263].x-e[33].x));t>this.tiltThreshold?this.handleTilt("left"):t<-this.tiltThreshold?this.handleTilt("right"):this.resetSelection()},handleTilt(e){if(this.selectedSide!==e){this.selectedSide=e,this.startTime=Date.now(),this.resetUIClasses();const s=document.getElementById(`option-${e}`);s&&s.classList.add("active")}const t=Date.now()-this.startTime,n=Math.min(t/this.requiredHoldTime*100,100),i=document.getElementById(`progress-${e}`);i&&(i.style.width=`${n}%`),n>=100&&!this.hasAnswered&&this.commitAnswer(e)},resetSelection(){if(this.selectedSide=null,this.startTime=null,!this.hasAnswered){this.resetUIClasses();const e=document.getElementById("progress-left"),t=document.getElementById("progress-right");e&&(e.style.width="0%"),t&&(t.style.width="0%")}},resetUIClasses(){["left","right"].forEach(e=>{const t=document.getElementById(`option-${e}`);t&&t.classList.remove("active")})},commitAnswer(e){this.hasAnswered=!0;const t=this.questions[this.currentQuestionIndex],n=e===t.correct;n&&this.score++,this.showFeedback(n),this.sounds&&(n&&this.sounds.correct?this.sounds.correct.play():!n&&this.sounds.wrong&&this.sounds.wrong.play()),setTimeout(()=>this.nextQuestion(),2500)},showFeedback(e){const t=document.getElementById("tilt-feedback"),n=document.getElementById("tilt-feedback-content");!t||!n||(t.classList.remove("opacity-0","pointer-events-none"),n.innerHTML=e?`
            <div class="bg-white/95 p-10 rounded-[3rem] border-2 border-emerald-100 shadow-2xl">
                <div class="bg-emerald-100 text-emerald-500 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-6 animate-bounce">
                    <svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h1 class="text-5xl font-black text-emerald-600">XUẤT SẮC!</h1>
                <p class="text-xl text-emerald-500 mt-2 font-bold uppercase">Bạn đã chọn đúng</p>
            </div>
        `:`
            <div class="bg-white/95 p-10 rounded-[3rem] border-2 border-rose-100 shadow-2xl">
                <div class="bg-rose-100 text-rose-500 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-6">
                    <svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 18L18 6M6 6l12 12"></path></svg>
                </div>
                <h1 class="text-5xl font-black text-rose-600">SAI RỒI!</h1>
                <p class="text-xl text-rose-500 mt-2 font-bold uppercase">Tiếc quá, thử lại nhé!</p>
            </div>
        `,n.className="scale-100 transition-transform duration-500 transform text-center")},nextQuestion(){this.currentQuestionIndex++;const e=document.getElementById("tilt-feedback");e&&e.classList.add("opacity-0","pointer-events-none"),this.currentQuestionIndex<this.questions.length?(this.hasAnswered=!1,this.selectedSide=null,this.startTime=null,this.updateQuestionUI()):this.showFinalResult()},showFinalResult(){var n;const e=document.getElementById("tilt-feedback"),t=document.getElementById("tilt-feedback-content");e.classList.remove("opacity-0","pointer-events-none"),(n=this.sounds)!=null&&n.win&&this.sounds.win.play(),this.stopBgMusic(),t.innerHTML=`
            <div class="bg-white/95 rounded-[3rem] p-12 shadow-2xl border-t-[12px] border-indigo-500">
                <div class="text-7xl mb-6">🏆</div>
                <h1 class="text-5xl font-black text-indigo-950">HOÀN THÀNH!</h1>
                <p class="text-xl font-bold text-slate-400 mb-8 mt-2 uppercase">Kết quả của bạn</p>
                <div class="bg-indigo-50 p-8 rounded-3xl mb-8 border border-indigo-100">
                    <span class="text-indigo-600 text-7xl font-black">${this.score} / ${this.questions.length}</span>
                </div>
                <button onclick="HeadTiltGame.cleanup(); HeadTiltGame.onClose && HeadTiltGame.onClose()" class="w-full bg-indigo-600 text-white py-6 rounded-[2rem] font-black text-xl hover:bg-indigo-700 transition-all active:scale-95 shadow-xl">ĐÓNG TRÒ CHƠI</button>
            </div>
        `},async loadFromCungCo(){var n,i;const e=document.getElementById("ht-cungco-id");if(!e)return;const t=e.value.trim();if(t)try{const s=e.nextElementSibling,o=s.innerHTML;s.innerHTML="⏳ ĐANG TẢI...";let a=[],r=window[`lesson_${t}`]||window[`lesson${t}`];if(r&&(r.quizPool||(n=r.metadata)!=null&&n.quizPool)){const l=r.quizPool||r.metadata.quizPool;l.length>0&&(a=this.convertQuizPoolToHeadTilt(l))}if(a.length===0&&window.QuestionBankManager){const l=await window.QuestionBankManager.getQuestions({periods:parseInt(t),totalCount:20});l&&l.length>0&&(a=this.convertQuizPoolToHeadTilt(l))}a.length>0?(this.questions=a,this.showTeacherEditor(),alert(`Đã tải thành công ${a.length} câu hỏi từ bài ${t}. Hãy kiểm tra và bấm LƯU BÀI để hoàn tất!`)):(alert(`Không có câu hỏi nào trong ngân hàng cho tiết ${t}.`),s.innerHTML=o)}catch(s){alert("Lỗi khi tải hoặc phân tích dữ liệu!"),console.error("[HeadTilt] loadFromCungCo error:",s);const o=(i=document.getElementById("ht-cungco-id"))==null?void 0:i.nextElementSibling;o&&(o.innerHTML="🔄 TẢI DỮ LIỆU")}},cleanup(){if(this.isActive=!1,this.camera)try{this.camera.stop()}catch(e){console.error("Unhandled error:",e)}if(this.faceMesh)try{this.faceMesh.close()}catch(e){console.error("Unhandled error:",e)}this.stopBgMusic(),this.camera=null,this.faceMesh=null,this.container&&(this.container.innerHTML="")}};window.HeadTiltGame=ce;const Me={container:null,students:[],allStudents:[],currentClass:"",isSpinning:!1,angle:0,ctx:null,canvas:null,classes:[],colors:["#FF6384","#36A2EB","#FFCE56","#4BC0C0","#9966FF","#FF9F40","#8AC926","#1982C4","#6A4C93","#F15BB5"],audioSpin:null,audioWin:null,winners:[],batchSize:1,initSounds(){const e=window.location.pathname.includes("/games/")?"../":"./";this.audioBackground||(this.audioBackground=new Audio(`${e}assets/audio/Quizi.mp3`),this.audioBackground.loop=!0,this.audioBackground.volume=.3),this.audioSpin||(this.audioSpin=new Audio(`${e}assets/audio/game/Am_thanh_vong_quay.mp3`),this.audioSpin.loop=!0),this.audioWin||(this.audioWin=new Audio(`${e}assets/audio/Am_thanh_chuc_mung.mp3`))},async start(e,t,n){this.container=e,this.onClose=n,this.winners=[],this.batchSize=1,await this.loadStudentData(),this.render(),this.initCanvas(),this.initSounds(),this.audioBackground&&this.audioBackground.play().catch(i=>console.log("Audio play deferred"))},async loadStudentData(){try{const e=window.location.pathname.includes("/games/")?"../":"./",t=await fetch(`${e}students_data.json`);this.allStudents=await t.json(),this.classes=[...new Set(this.allStudents.map(n=>n.studentClass))].sort()}catch(e){console.error("[LuckyWheel] Error loading student data:",e),this.allStudents=[]}},render(){var e;this.container.innerHTML=`
            <div class="flex flex-col md:flex-row w-full h-full bg-gradient-to-br from-indigo-50 to-blue-100 overflow-hidden relative font-['Be_Vietnam_Pro']">
                
                <!-- Left Panel: The Wheel -->
                <div class="md:flex-[1.2] flex items-center justify-center p-6 md:p-12 relative overflow-hidden">
                    <!-- Back Button -->
                    <div class="absolute top-4 left-4 z-[60]">
                        <button id="lucky-wheel-back-btn" class="group flex items-center gap-2 px-3 py-1.5 bg-white/80 backdrop-blur hover:bg-white text-blue-600 rounded-xl font-black text-[10px] shadow-sm transition-all active:scale-95 border border-blue-100">
                             <span class="w-5 h-5 bg-blue-600 text-white rounded-lg flex items-center justify-center text-[10px]">E</span>
                             <span class="uppercase tracking-widest group-hover:translate-x-0.5 transition-transform">QUAY LẠI</span>
                        </button>
                    </div>
                    <div class="relative w-full max-w-[350px] md:max-w-[500px] aspect-square flex items-center justify-center">
                        <canvas id="lucky-wheel-canvas" width="500" height="500" class="w-full h-full drop-shadow-[0_20px_60px_rgba(0,0,0,0.12)] z-10"></canvas>
                        
                        <!-- Pointer (Back to Right side pointing Left) -->
                        <div class="absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                            <div class="w-10 h-8 md:w-12 md:h-10 bg-red-600 shadow-xl border-2 border-white" style="clip-path: polygon(0 50%, 100% 0, 100% 100%);"></div>
                        </div>
                        
                        <!-- Center Hub -->
                        <div class="absolute inset-0 m-auto w-12 h-12 md:w-14 md:h-14 bg-white rounded-full z-30 shadow-lg border-4 border-blue-500 flex items-center justify-center">
                            <span class="text-blue-600 font-black text-xl md:text-2xl">E</span>
                        </div>
                    </div>
                </div>

                <!-- Right Panel: Results & Controls -->
                <div class="md:flex-[0.8] flex flex-col bg-white/40 backdrop-blur-xl border-l border-white/50">
                    
                    <!-- Header (Compressed) -->
                    <div class="p-3 border-b border-white/50 shrink-0 bg-white/20">
                        <div class="flex items-center gap-2 px-2">
                            <span class="text-sm">🏆</span>
                            <h2 class="font-black text-blue-900 uppercase text-[10px] tracking-[0.2em]">Danh sách trúng thưởng</h2>
                        </div>
                    </div>

                    <!-- Results Area (Scrollable) -->
                    <div id="wheel-results-list" class="flex-grow overflow-y-auto p-4 flex flex-col gap-2 custom-scrollbar">
                        <div class="text-blue-300 italic text-[10px] font-bold py-10 text-center">Đang chờ những em may mắn...</div>
                    </div>

                    <!-- Controls (Ultra Slim) -->
                    <div class="p-4 bg-white/60 border-t border-white/50 shrink-0">
                        <div class="flex flex-col gap-3">
                            <div class="flex gap-2">
                                <!-- Class Select -->
                                <div class="flex-1">
                                    <label class="block font-black text-blue-900/40 uppercase text-[7px] tracking-widest mb-1 px-1">Lớp học</label>
                                    <div class="relative">
                                        <select id="wheel-class-select" class="w-full bg-white border border-blue-100 rounded-lg px-2 py-1.5 text-[11px] font-black text-gray-700 outline-none focus:border-blue-500 appearance-none cursor-pointer">
                                            <option value="">-- Lớp --</option>
                                            ${this.classes.map(t=>`<option value="${t}" ${this.currentClass===t?"selected":""}>Lớp ${t}</option>`).join("")}
                                        </select>
                                        <div class="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-blue-300">
                                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <button id="wheel-spin-btn" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-2.5 rounded-lg text-[11px] shadow-md shadow-blue-200 hover:-translate-y-0.5 active:scale-95 transition-all disabled:opacity-50 uppercase tracking-widest">
                                BẮT ĐẦU QUAY
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Winner Celebration Overlay (Cải tiến: Toàn màn hình, có hình nền, chữ siêu to) -->
            <div id="lucky-winner-overlay" class="fixed inset-0 z-[100] flex items-center justify-center invisible opacity-0 transition-all duration-700 bg-black/40 backdrop-blur-[2px]">
                <!-- Background Image Layer -->
                <div class="absolute inset-0 z-0">
                    <img src="${window.location.pathname.includes("/games/")?"../":"./"}assets/images/nentrungthuong.jpg" class="w-full h-full object-cover opacity-100" alt="Background">
                </div>
                
                <div class="relative z-10 w-full h-full flex flex-col items-center justify-center py-10 px-6 text-center">
                    <!-- Semi-transparent box for text legibility -->
                    <div class="bg-black/50 backdrop-blur-sm p-8 md:p-12 rounded-[2rem] border border-white/20 shadow-2xl flex flex-col items-center gap-4 md:gap-8 max-w-[95vw] animate-winner-reveal">
                        
                        <div class="flex items-center gap-4 text-2xl md:text-5xl animate-bounce-slow">
                            <span>🏆</span>
                            <h3 class="font-black text-yellow-400 uppercase tracking-[0.3em] drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] whitespace-nowrap text-shadow-lg">CHÚC MỪNG</h3>
                            <span>🏆</span>
                        </div>
                        
                        <div id="lucky-winner-name" class="text-white font-black text-3xl md:text-6xl lg:text-7xl uppercase tracking-tight drop-shadow-[0_10px_30px_rgba(0,0,0,1)] whitespace-nowrap animate-text-shimmer bg-gradient-to-r from-white via-blue-100 to-white bg-[length:200%_auto] bg-clip-text text-transparent px-2 py-4 leading-loose">
                            -- TÊN --
                        </div>
                        
                    </div>
                </div>
            </div>

            <style>
                @keyframes winner-reveal {
                    0% { transform: scale(0.8) translateY(50px); opacity: 0; filter: blur(15px); }
                    100% { transform: scale(1) translateY(0); opacity: 1; filter: blur(0); }
                }
                @keyframes winner-shrink {
                    0% { transform: scale(1); opacity: 1; filter: blur(0); }
                    100% { transform: scale(0.1); opacity: 0; transform-origin: center right; translate: 40% -40%; }
                }
                @keyframes text-shimmer {
                    0% { background-position: 0% center; }
                    100% { background-position: 200% center; }
                }
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-30px); }
                }
                .animate-winner-reveal { animation: winner-reveal 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
                .animate-winner-shrink { animation: winner-shrink 0.8s cubic-bezier(0.36, 0, 0.66, -0.56) forwards; }
                .animate-text-shimmer { animation: text-shimmer 3s linear infinite; }
                
                .winner-card {
                    animation: winner-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
                    padding: 10px 16px !important;
                    font-size: 14px !important;
                }
                @keyframes winner-in {
                    0% { opacity: 0; transform: translateX(30px) scale(0.9); }
                    100% { opacity: 1; transform: translateX(0) scale(1); }
                }
                .custom-scrollbar::-webkit-scrollbar { width: 4px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.1); border-radius: 10px; }
            </style>
        `,(e=document.getElementById("lucky-wheel-back-btn"))==null||e.addEventListener("click",()=>{this.audioBackground&&(this.audioBackground.pause(),this.audioBackground.currentTime=0),this.onClose?this.onClose():window.close()}),document.getElementById("wheel-class-select").addEventListener("change",t=>this.selectClass(t.target.value)),document.getElementById("wheel-spin-btn").addEventListener("click",()=>this.spin())},close(){this.onClose&&this.onClose(),this.cleanup()},selectClass(e){this.currentClass=e,this.students=this.allStudents.filter(n=>n.studentClass===e).map(n=>n.name),this.angle=0,this.winners=[],this.draw();const t=document.getElementById("wheel-results-list");t&&(t.innerHTML='<div class="text-blue-300 italic text-[11px] font-bold py-10 text-center">Đang chờ những em may mắn...</div>')},initCanvas(){this.canvas=document.getElementById("lucky-wheel-canvas"),this.canvas&&(this.ctx=this.canvas.getContext("2d"),this.draw())},draw(){if(!this.ctx)return;const e=this.canvas.width/2,t=this.canvas.height/2,n=e-10;if(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.students.length===0){this.ctx.beginPath(),this.ctx.arc(e,t,n,0,2*Math.PI),this.ctx.fillStyle="#E5E7EB",this.ctx.fill(),this.ctx.strokeStyle="#CBD5E1",this.ctx.lineWidth=8,this.ctx.stroke(),this.ctx.fillStyle="#94A3B8",this.ctx.font="bold 24px Nunito, sans-serif",this.ctx.textAlign="center",this.ctx.fillText("HÃY CHỌN LỚP",e,t+8);return}const i=2*Math.PI/this.students.length;this.students.forEach((s,o)=>{const a=this.angle+o*i,r=a+i;this.ctx.beginPath(),this.ctx.moveTo(e,t),this.ctx.arc(e,t,n,a,r),this.ctx.fillStyle=this.colors[o%this.colors.length],this.ctx.fill(),this.ctx.strokeStyle="rgba(255,255,255,0.3)",this.ctx.lineWidth=1,this.ctx.stroke(),this.ctx.save(),this.ctx.translate(e,t),this.ctx.rotate(a+i/2),this.ctx.textAlign="right",this.ctx.fillStyle="white",this.ctx.font="bold 13px Nunito, sans-serif";let l=s;this.ctx.fillText(l,n-35,5),this.ctx.restore()}),this.ctx.beginPath(),this.ctx.arc(e,t,n,0,2*Math.PI),this.ctx.strokeStyle="#1E293B",this.ctx.lineWidth=12,this.ctx.stroke(),this.ctx.beginPath(),this.ctx.arc(e,t,n-6,0,2*Math.PI),this.ctx.strokeStyle="white",this.ctx.lineWidth=3,this.ctx.stroke()},spin(){if(this.isSpinning||this.students.length===0)return;this.isSpinning=!0,document.getElementById("wheel-spin-btn").disabled=!0,this.audioSpin&&(this.audioSpin.currentTime=0,this.audioSpin.play().catch(a=>console.warn("[LuckyWheel] Audio error:",a)));const e=2e4,t=performance.now(),n=this.angle,s=(30+Math.random()*10)*2*Math.PI,o=a=>{const r=a-t,l=Math.min(r/e,1),d=1-Math.pow(1-l,4);this.angle=n+s*d,this.draw(),l<1?requestAnimationFrame(o):this.finishSpin()};requestAnimationFrame(o)},async finishSpin(){this.isSpinning=!1;const e=Math.min(this.batchSize,this.students.length),t=[],n=2*Math.PI/this.students.length;let i=(2*Math.PI-this.angle%(2*Math.PI))%(2*Math.PI);const s=Math.floor(i/n),o=this.students[s];if(t.push(o),e>1){const a=this.students.filter(r=>r!==o);for(let r=0;r<e-1&&a.length!==0;r++){const l=Math.floor(Math.random()*a.length);t.push(a.splice(l,1)[0])}}this.audioSpin&&(this.audioSpin.pause(),this.audioSpin.currentTime=0);for(const a of t)await this.addWinner(a),await new Promise(r=>setTimeout(r,600));document.getElementById("wheel-spin-btn").disabled=!1},async addWinner(e){const t=document.getElementById("lucky-winner-overlay"),n=document.getElementById("lucky-winner-name");if(!t||!n)return;n.innerText=e,t.classList.remove("invisible"),t.classList.add("opacity-100"),t.children[0].classList.add("animate-winner-reveal"),t.children[0].classList.remove("animate-winner-shrink"),this.audioWin&&(this.audioWin.currentTime=0,this.audioWin.play().catch(o=>{})),typeof confetti=="function"&&confetti({particleCount:150,spread:100,origin:{y:.6}}),await new Promise(o=>setTimeout(o,4e3)),t.children[0].classList.remove("animate-winner-reveal"),t.children[0].classList.add("animate-winner-shrink"),t.classList.remove("opacity-100"),await new Promise(o=>setTimeout(o,600)),t.classList.add("invisible");const i=document.getElementById("wheel-results-list");this.winners.length===0&&(i.innerHTML=""),this.winners.push(e);const s=document.createElement("div");s.className="winner-card bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black px-5 py-3 rounded-xl shadow-lg flex items-center gap-3 shrink-0 uppercase tracking-tighter",s.innerHTML=`
            <span class="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-xs border border-white/20">${this.winners.length}</span>
            <span class="flex-1">${e}</span>
        `,i.append(s),i.scrollTop=i.scrollHeight,this.students=this.students.filter(o=>o!==e),this.students.length===0&&this.currentClass&&(this.students=this.allStudents.filter(o=>o.studentClass===this.currentClass).map(o=>o.name)),this.draw()},cleanup(){this.isSpinning=!1,this.students=[],this.audioSpin&&(this.audioSpin.pause(),this.audioSpin.currentTime=0),this.audioWin&&(this.audioWin.pause(),this.audioWin.currentTime=0)}},je={container:null,students:[],classes:[],currentClass:"",numGroups:2,groups:[],pickedGroups:[],isDividing:!1,isPickingGroup:!1,isPairMode:!1,audioDivide:null,audioFinish:null,initSounds(){const e=window.location.pathname.includes("/games/")?"../":"./";this.audioBackground||(this.audioBackground=new Audio(`${e}assets/audio/Quizi.mp3`),this.audioBackground.loop=!0,this.audioBackground.volume=.4),this.audioDivide||(this.audioDivide=new Audio(`${e}assets/audio/game/Chia_nhom.mp3`),this.audioDivide.loop=!0),this.audioFinish||(this.audioFinish=new Audio(`${e}assets/audio/Am_thanh_chuc_mung.mp3`))},async start(e,t,n){if(this.container=e,this.onClose=n,!document.getElementById("group-divider-styles")){const i=document.createElement("style");i.id="group-divider-styles",i.textContent=`
                @keyframes groupFadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in { animation: groupFadeIn 0.4s ease forwards; }
                .highlight-group {
                    background: #60a5fa !important;
                    border-color: #2563eb !important;
                    color: white !important;
                    transform: translateY(-10px) scale(1.05);
                    box-shadow: 0 20px 25px -5px rgba(37, 99, 235, 0.4) !important;
                    z-index: 20;
                }
                .highlight-group * { color: white !important; }
                .selected-group {
                    background: #fbbf24 !important;
                    border-color: #d97706 !important;
                    border-width: 4px !important;
                    transform: scale(1.1);
                    box-shadow: 0 25px 50px -12px rgba(217, 119, 6, 0.5) !important;
                    z-index: 40;
                    animation: groupPulse 1s infinite alternate;
                }
                @keyframes groupPulse {
                    from { transform: scale(1.1); }
                    to { transform: scale(1.15); }
                }
                .selected-group * { color: #451a03 !important; }
                .highlight-group .pair-card {
                    background: transparent !important;
                    border-color: rgba(255, 255, 255, 0.3) !important;
                    box-shadow: none !important;
                }
                .selected-group .pair-card {
                    background: transparent !important;
                    border-color: rgba(69, 26, 3, 0.2) !important;
                    box-shadow: none !important;
                }
                .custom-scrollbar::-webkit-scrollbar { width: 4px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }

                .dice-3d-wrap { width: 40px; height: 40px; perspective: 200px; }
                .dice-3d {
                    width: 100%; height: 100%; position: relative;
                    transform-style: preserve-3d;
                    animation: diceRotate 0.6s infinite linear;
                    transition: transform 0.5s ease-out;
                }
                .dice-3d.stop-animation { animation: none; transform: rotateX(20deg) rotateY(20deg); opacity: 0.3; }
                .dice-3d div {
                    position: absolute; width: 100%; height: 100%;
                    background: white; border: 1.5px solid #e2e8f0;
                    border-radius: 8px; display: flex; align-items: center; justify-content: center;
                }
                .dice-dot { width: 6px; height: 6px; background: #1e293b; border-radius: 50%; }
                .face-1 { transform: translateZ(20px); }
                .face-2 { transform: rotateY(90deg) translateZ(20px); }
                .face-3 { transform: rotateY(180deg) translateZ(20px); }
                .face-4 { transform: rotateY(-90deg) translateZ(20px); }
                .face-5 { transform: rotateX(90deg) translateZ(20px); }
                .face-6 { transform: rotateX(-90deg) translateZ(20px); }
                @keyframes diceRotate {
                    0% { transform: rotateX(0) rotateY(0) rotateZ(0); }
                    100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); }
                }

                .pair-card {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    container-type: inline-size;
                    overflow: visible;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                }
                .student-name {
                    font-size: clamp(14px, 8cqw, 24px);
                    font-weight: 800;
                    white-space: nowrap;
                    width: 100%;
                    text-align: center;
                    padding: 0 6px;
                    display: block;
                    overflow: visible;
                }
                .dice-container {
                    display: flex; align-items: center; justify-content: center;
                    width: 100%; height: 100%;
                }
                .highlight-pair {
                    background: #60a5fa !important;
                    color: white !important;
                    transform: scale(1.05) translateY(-5px);
                    box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.3) !important;
                    z-index: 30;
                }
                .highlight-pair .student-name { color: white !important; }
                .selected-pair {
                    background: #fbbf24 !important;
                    border-color: #d97706 !important;
                    color: #451a03 !important;
                    transform: scale(1.1);
                    box-shadow: 0 20px 25px -5px rgba(217, 119, 6, 0.4) !important;
                    z-index: 50;
                    animation: groupPulse 1s infinite alternate;
                }
                .selected-pair .student-name { color: #451a03 !important; }
                
                .back-btn-container {
                    position: absolute;
                    top: 20px;
                    left: 20px;
                    z-index: 100;
                }
                .back-btn {
                    background: #ef4444;
                    color: white;
                    padding: 10px 20px;
                    border-radius: 12px;
                    font-weight: 800;
                    font-size: 14px;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                    transition: all 0.2s;
                    border: none;
                    cursor: pointer;
                    text-transform: uppercase;
                }
                .back-btn:hover {
                    background: #dc2626;
                    transform: translateX(-4px);
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                }
            `,document.head.appendChild(i)}await this.loadStudentData(),this.initSounds(),this.audioBackground&&this.audioBackground.play().catch(i=>console.log("Audio play deferred"))},async loadStudentData(){try{const e=window.location.pathname.includes("/games/")?"../":"./",n=await(await fetch(`${e}students_data.json`)).json();this.allStudents=n,this.classes=[...new Set(n.map(i=>i.studentClass))].sort(),this.render()}catch{this.container.innerHTML='<div class="p-8 text-red-600">Không thể tải dữ liệu học sinh.</div>'}},handleClassChange(e){this.currentClass=e.target.value,this.students=this.allStudents.filter(t=>t.studentClass===this.currentClass).map(t=>t.name),this.render()},handleNumGroupsChange(e){this.numGroups=parseInt(e.target.value)||2},toggleMode(){this.isPairMode=!this.isPairMode,this.groups=[],this.pickedGroups=[],this.render()},async startDividing(){if(this.isDividing||this.students.length===0)return;this.isDividing=!0,this.audioDivide&&(this.audioDivide.currentTime=0,this.audioDivide.play().catch(n=>{})),this.render(),await new Promise(n=>setTimeout(n,50));const e=[...this.students].sort(()=>Math.random()-.5);if(this.isPairMode){this.groups=Array.from({length:this.numGroups},()=>[]);const n=[];for(let i=0;i<e.length;i+=2){const s=[e[i]];e[i+1]&&s.push(e[i+1]),n.push(s.join(" & "))}n.forEach((i,s)=>{this.groups[s%this.numGroups].push(i)})}else this.groups=Array.from({length:this.numGroups},()=>[]),e.forEach((n,i)=>{this.groups[i%this.numGroups].push(n)});const t=Math.ceil(this.students.length/this.numGroups);for(let n=0;n<t;n++)for(let i=0;i<this.numGroups;i++){const s=this.groups[i][n];if(s){await new Promise(a=>setTimeout(a,400));const o=document.getElementById(`student-${i}-${n}`);o&&(o.innerHTML=`
                            <div class="pair-card w-full h-full flex items-center justify-center animate-fade-in">
                                <div class="student-name">${s}</div>
                            </div>
                        `,o.classList.add("bg-white","text-blue-900","border-blue-200","shadow-sm"))}}document.querySelectorAll(".dice-3d-wrap").forEach(n=>n.remove()),this.isDividing=!1,this.audioDivide&&(this.audioDivide.pause(),this.audioDivide.currentTime=0),this.audioFinish&&(this.audioFinish.currentTime=0,this.audioFinish.play().catch(n=>{})),this.render()},pickRandomGroup(){if(this.isDividing||this.groups.length===0||this.isPickingGroup)return;this.pickedGroups.length>=(this.isPairMode?document.querySelectorAll("[data-pair-idx]").length:this.groups.length)&&(this.pickedGroups=[],document.querySelectorAll("[data-group-card]").forEach(u=>u.classList.remove("selected-group")),document.querySelectorAll("[data-pair-idx]").forEach(u=>u.classList.remove("selected-pair"))),this.isPickingGroup=!0;let e=this.isPairMode?document.querySelectorAll("[data-pair-idx]"):document.querySelectorAll("[data-group-card]");const t=e.length,n=Array.from({length:t},(u,g)=>g).filter(u=>!this.pickedGroups.includes(u)),i=n[Math.floor(Math.random()*n.length)];this.audioDivide&&(this.audioDivide.currentTime=0,this.audioDivide.play().catch(u=>{}));const s=5e3,o=performance.now(),a=this.isPairMode?"highlight-pair":"highlight-group",r=this.isPairMode?"selected-pair":"selected-group",d=t*6+i;let c=-1;const h=u=>{const g=u-o,m=Math.min(g/s,1),p=1-Math.pow(1-m,4),b=Math.floor(d*p);if(m<1){if(b!==c){c=b;const f=b%t;e.forEach(k=>k.classList.remove(a)),e[f]&&e[f].classList.add(a)}requestAnimationFrame(h)}else this.audioDivide&&(this.audioDivide.pause(),this.audioDivide.currentTime=0),e.forEach(f=>f.classList.remove(a)),e[i]&&e[i].classList.add(r),this.pickedGroups.push(i),this.isPickingGroup=!1,this.audioFinish&&(this.audioFinish.currentTime=0,this.audioFinish.play().catch(f=>{}))};requestAnimationFrame(h)},render(){var t,n,i,s,o,a,r;const e=Math.ceil(this.students.length/this.numGroups)||0;this.container.innerHTML=`
            <div class="relative flex flex-col-reverse w-full h-full bg-slate-50 overflow-hidden font-['Be_Vietnam_Pro']">
                <div class="back-btn-container">
                    <button id="divider-back-btn" class="back-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        Quay lại
                    </button>
                </div>
                <div class="bg-white border-t border-slate-200 p-4 z-20 shadow-lg">
                    <div class="flex flex-wrap items-center justify-center gap-4 max-w-6xl mx-auto">
                        <select id="divider-class-select" class="bg-slate-100 border-2 border-slate-200 rounded-lg px-3 py-2 font-bold text-sm">
                            <option value="">--- Lớp ---</option>
                            ${this.classes.map(l=>`<option value="${l}" ${this.currentClass===l?"selected":""}>${l}</option>`).join("")}
                        </select>
                        <div class="flex bg-slate-100 p-1 rounded-xl">
                            <button id="mode-individual" class="px-4 py-2 rounded-lg text-xs font-black ${this.isPairMode?"text-slate-400":"bg-white shadow text-blue-600"}">NHIỀU BẠN</button>
                            <button id="mode-pair" class="px-4 py-2 rounded-lg text-xs font-black ${this.isPairMode?"bg-white shadow text-indigo-600":"text-slate-400"}">CHIA CẶP</button>
                        </div>
                        <input type="number" id="divider-num-groups" min="2" max="10" value="${this.numGroups}" class="w-16 bg-slate-100 border-2 border-slate-200 rounded-lg px-3 py-2 font-bold text-sm">
                        <button id="divider-start-btn" ${this.isDividing||!this.currentClass?"disabled":""} class="bg-blue-600 text-white font-black px-8 py-2 rounded-lg uppercase text-sm">CHIA NHÓM</button>
                        ${this.groups.length>0&&!this.isDividing?'<button id="divider-pick-btn" class="bg-amber-500 text-white font-black px-6 py-2 rounded-lg uppercase text-sm">🎯 CHỌN NHÓM BÁO CÁO</button>':""}
                    </div>
                </div>
                <div class="flex-1 p-6 overflow-hidden flex flex-col items-center justify-center">
                    <div id="group-grid" class="flex flex-wrap gap-4 items-stretch justify-center w-full h-full overflow-y-auto">
                        ${this.isDividing?this.renderEmptyGroups(this.numGroups,e):this.groups.length>0?this.renderExistingGroups():""}
                    </div>
                </div>
            </div>
        `,(t=document.getElementById("divider-back-btn"))==null||t.addEventListener("click",()=>{this.audioBackground&&(this.audioBackground.pause(),this.audioBackground.currentTime=0),this.onClose?this.onClose():window.close()}),(n=document.getElementById("divider-class-select"))==null||n.addEventListener("change",l=>this.handleClassChange(l)),(i=document.getElementById("divider-num-groups"))==null||i.addEventListener("change",l=>this.handleNumGroupsChange(l)),(s=document.getElementById("divider-start-btn"))==null||s.addEventListener("click",()=>this.startDividing()),(o=document.getElementById("divider-pick-btn"))==null||o.addEventListener("click",()=>this.pickRandomGroup()),(a=document.getElementById("mode-individual"))==null||a.addEventListener("click",()=>{this.isPairMode&&this.toggleMode()}),(r=document.getElementById("mode-pair"))==null||r.addEventListener("click",()=>{this.isPairMode||this.toggleMode()})},renderEmptyGroups(e,t){const n=`
            <div class="dice-3d-wrap">
                <div class="dice-3d">
                    <div class="face-1"><span class="dice-dot"></span></div><div class="face-2"><div class="grid grid-cols-2 gap-1 px-1"><span class="dice-dot"></span><span class="dice-dot"></span></div></div>
                    <div class="face-3"><div class="grid grid-cols-2 gap-1 p-1"><span class="dice-dot"></span><span class="dice-dot"></span><span class="dice-dot"></span></div></div>
                    <div class="face-4"><div class="grid grid-cols-2 gap-1 p-1"><span class="dice-dot"></span><span class="dice-dot"></span><span class="dice-dot"></span><span class="dice-dot"></span></div></div>
                    <div class="face-5"><span class="dice-dot"></span></div><div class="face-6"><span class="dice-dot"></span></div>
                </div>
            </div>
        `;let i="";for(let s=0;s<e;s++)i+=`
                <div data-group-card="${s}" class="flex-1 min-w-[120px] bg-white rounded-xl shadow border overflow-hidden flex flex-col h-full transition-all">
                    <div class="p-2 flex-1 flex flex-col gap-2 overflow-hidden">
                        ${Array.from({length:t}).map((o,a)=>`
                            <div id="student-${s}-${a}" class="pair-card flex-1 min-h-[50px] rounded-lg bg-blue-50/20 border border-dashed border-blue-100 flex items-center justify-center overflow-hidden">
                                <div class="dice-container">${n}</div>
                            </div>
                        `).join("")}
                    </div>
                </div>
            `;return i},renderExistingGroups(){const e=["bg-blue-50 text-blue-900","bg-emerald-50 text-emerald-900","bg-purple-50 text-purple-900","bg-orange-50 text-orange-900","bg-rose-50 text-rose-900","bg-indigo-50 text-indigo-900","bg-teal-50 text-teal-900"];let t=0;return this.groups.map((n,i)=>`
            <div data-group-card="${i}" class="flex-1 min-w-[150px] bg-white rounded-xl shadow border overflow-hidden flex flex-col h-full transition-all duration-300">
                <div class="p-2 flex-1 flex flex-col gap-2 overflow-y-auto custom-scrollbar">
                    ${n.map(s=>{const o=s.includes(" & "),a=o?s.split(" & ").join('<div class="h-[1px] bg-black/5 my-1 w-1/2 mx-auto"></div>'):s,r=o?e[t%e.length]:"bg-white border-slate-100 text-blue-900";return`
                            <div ${o?`data-pair-idx="${t++}"`:""} class="pair-card min-h-[60px] rounded-lg border px-4 py-2 text-center shadow animate-fade-in ${r}">
                                <div class="student-name">${a}</div>
                            </div>
                        `}).join("")}
                </div>
            </div>
        `).join("")}},Ae={container:null,sessionId:null,role:"teacher",state:{status:"lobby",teamA:[],teamB:[],teamAName:"Táo Đỏ",teamBName:"Táo Xanh",scoreA:0,scoreB:0,ropePos:0,winningTeam:null,sessionTitle:"",questions:[]},students:[],allStudents:[],classes:[],currentClass:"",teamA:[],teamB:[],customQuestions:[],unsubscribe:null,tempStudentName:null,teamSize:5,spectators:[],showTeamModal:!1,showPrepModal:!1,playedWinSound:!1,currentSet:1,lessonPeriod:"124",async start(e,t={},n){this.container=e,this.onClose=n,this.initSounds(),this.lessonPeriod=window.currentLessonData?String(window.currentLessonData.period):"124";const i=localStorage.getItem("userRole");this.role=t&&t.role||(i==="teacher"||i==="admin"?"teacher":"student"),await this.loadStudents(),t&&Array.isArray(t.questions)&&t.questions.length>0?(this.customQuestions=t.questions,console.log("[TugOfWar] Loaded",t.questions.length,"questions from options")):this.loadQuestions(),this.renderLobby(),this.role==="student"&&this.listenToGlobalSessions()},initSounds(){const e=window.location.pathname.includes("/games/")?"../":"./";this.sounds={bg:new Audio(`${e}assets/audio/Quizi.mp3`),win:new Audio(`${e}assets/audio/votay.mp3`),correct:new Audio(`${e}assets/audio/correct.mp3`),wrong:new Audio(`${e}assets/audio/wrong.mp3`)},this.sounds.bg.loop=!0,this.sounds.bg.volume=.4},playBgMusic(){this.sounds&&this.sounds.bg&&(this.sounds.bg.currentTime=0,this.sounds.bg.play().catch(e=>console.log("Audio play failed:",e)))},stopBgMusic(){this.sounds&&this.sounds.bg&&this.sounds.bg.pause()},async loadStudents(){try{const e=window.location.pathname.includes("/games/")?"../":"./",n=await(await fetch(`${e}students_data.json`)).json();this.allStudents=n,this.classes=[...new Set(n.map(i=>i.studentClass))].sort(),this.students=[]}catch(e){console.error("Failed to load students:",e)}},handleClassChange(e){this.currentClass=e.target.value,this.students=this.allStudents.filter(t=>t.studentClass===this.currentClass),this.divideTeams(),this.renderLobby()},divideTeams(){if(this.students.length===0){this.teamA=[],this.teamB=[],this.spectators=[];return}const e=[...this.students].sort(()=>Math.random()-.5);this.teamA=e.slice(0,this.teamSize).map(n=>n.name),this.teamB=e.slice(this.teamSize,this.teamSize*2).map(n=>n.name);const t=[...this.teamA,...this.teamB];this.spectators=e.filter(n=>!t.includes(n.name)).map(n=>n.name)},setTeamSize(e){this.teamSize=parseInt(e)||5,this.divideTeams(),this.renderLobby()},moveToTeam(e,t){this.teamA=this.teamA.filter(n=>n!==e),this.teamB=this.teamB.filter(n=>n!==e),this.spectators=this.spectators.filter(n=>n!==e),t==="A"?this.teamA.push(e):t==="B"?this.teamB.push(e):this.spectators.push(e),this.renderLobby()},togglePrepModal(e){this.showPrepModal=e,this.renderLobby()},updateTeamNamesFromUI(){var n,i;const e=((n=document.getElementById("edit-team-a-name"))==null?void 0:n.value)||"Táo Đỏ",t=((i=document.getElementById("edit-team-b-name"))==null?void 0:i.value)||"Táo Xanh";this.state.teamAName=e,this.state.teamBName=t},renderLobby(){if(this.role==="student"){this.container.innerHTML=`
                <div class="flex flex-col items-center justify-center h-full p-8 text-center bg-gradient-to-br from-blue-50 to-indigo-50">
                    <div class="text-6xl mb-6">🚩</div>
                    <h2 class="text-3xl font-black text-blue-900 uppercase tracking-widest mb-4">Trò chơi Kéo co</h2>
                    <div class="animate-pulse flex items-center gap-2 text-blue-500 font-black uppercase">
                        <div class="w-3 h-3 bg-blue-500 rounded-full"></div>
                        Đang đợi Thầy/Cô bắt đầu...
                    </div>
                </div>
            `;return}this.container.innerHTML=`
            <div class="flex flex-col h-full bg-slate-50 font-['Be_Vietnam_Pro']">
                <!-- Header -->
                <div class="p-6 bg-white border-b border-slate-200 flex justify-between items-center shadow-sm">
                    <div class="flex items-center gap-4">
                        <!-- Back Button Integration -->
                        <button onclick="window.close()" class="group flex items-center gap-2 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-blue-600 rounded-xl font-black text-[10px] shadow-sm transition-all active:scale-95 border border-blue-100 mr-2">
                             <span class="w-5 h-5 bg-blue-600 text-white rounded-lg flex items-center justify-center text-[10px]">E</span>
                             <span class="uppercase tracking-widest group-hover:translate-x-0.5 transition-transform">QUAY LẠI</span>
                        </button>
                        <span class="text-4xl">🚩</span>
                        <div>
                            <h2 class="text-2xl font-black text-slate-800 uppercase tracking-tight">Kéo Co: Sảnh Chờ</h2>
                            <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Tiết: <span class="text-blue-600">${this.lessonPeriod}</span> | Bài đang chọn: <span class="text-blue-600">${this.currentSet}</span></p>
                        </div>
                    </div>

                    <!-- Article Set Selection -->
                    <div class="flex bg-slate-100 p-1 rounded-2xl border border-slate-200">
                        ${[1,2,3,4,5].map(e=>`
                            <button onclick="GameLibrary.games.tug_of_war.selectSet(${e})" 
                                class="w-10 h-10 rounded-xl font-black text-xs transition-all ${this.currentSet===e?"bg-blue-600 text-white shadow-lg":"text-slate-400 hover:bg-white"}">
                                ${e}
                            </button>
                        `).join("")}
                    </div>
                    
                    <div class="flex items-center gap-6">
                         <div class="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
                            <label class="text-[10px] font-black text-slate-400 uppercase ml-2 tracking-tighter">Lớp:</label>
                            <select onchange="GameLibrary.games.tug_of_war.handleClassChange(event)" class="bg-white border-none rounded-xl px-3 py-1.5 text-xs font-bold text-slate-800 outline-none shadow-sm cursor-pointer">
                                <option value="">--- Chọn lớp ---</option>
                                ${this.classes.map(e=>`<option value="${e}" ${this.currentClass===e?"selected":""}>${e}</option>`).join("")}
                            </select>
                            
                            <label class="text-[10px] font-black text-slate-400 uppercase ml-2 tracking-tighter border-l border-slate-300 pl-2">Số lượng/Đội:</label>
                            <select onchange="GameLibrary.games.tug_of_war.setTeamSize(this.value)" class="bg-white border-none rounded-xl px-2 py-1.5 text-xs font-bold text-slate-800 outline-none shadow-sm cursor-pointer">
                                ${[2,3,4,5,6,7,8,10].map(e=>`<option value="${e}" ${this.teamSize===e?"selected":""}>${e}</option>`).join("")}
                            </select>

                            <button onclick="GameLibrary.games.tug_of_war.toggleTeamModal(true)" 
                                class="bg-blue-100 text-blue-700 font-black px-4 py-1.5 rounded-xl text-[10px] uppercase hover:bg-blue-200 transition-all flex items-center gap-2 border border-blue-200 ${this.currentClass?"":"hidden"}">
                                👥 Quản lý Đội hình
                            </button>

                            <button onclick="GameLibrary.games.tug_of_war.divideTeams(); GameLibrary.games.tug_of_war.renderLobby();" 
                                class="p-1.5 hover:bg-white rounded-xl transition-all text-slate-400 hover:text-blue-500 tooltip relative group" ${this.currentClass?"":"disabled"}>
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                                <span class="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-slate-800 text-white text-[8px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">Chia lại đội ngẫu nhiên</span>
                            </button>
                        </div>

                         <!-- Game Mode Selection -->
                        <div class="flex gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
                            <button id="mode-warmup" class="px-4 py-2 rounded-xl text-[10px] font-black uppercase transition-all tracking-widest ${this.gameMode==="warmup"?"bg-white text-indigo-600 shadow-sm":"text-slate-400 hover:text-slate-600"}" onclick="GameLibrary.games.tug_of_war.setMode('warmup')">Khởi động ☕</button>
                            <button id="mode-reinforce" class="px-4 py-2 rounded-xl text-[10px] font-black uppercase transition-all tracking-widest ${this.gameMode==="reinforce"||!this.gameMode?"bg-white text-emerald-600 shadow-sm":"text-slate-400 hover:text-slate-600"}" onclick="GameLibrary.games.tug_of_war.setMode('reinforce')">Củng cố 📚</button>
                            <button id="mode-manual" class="px-4 py-2 rounded-xl text-[10px] font-black uppercase transition-all tracking-widest ${this.gameMode==="manual"?"bg-white text-orange-600 shadow-sm":"text-slate-400 hover:text-slate-600"}" onclick="GameLibrary.games.tug_of_war.setMode('manual')">Tùy chọn 📝</button>
                        </div>

                        <button id="btn-start-tow" ${this.currentClass?"":"disabled"} class="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-black px-10 py-4 rounded-2xl shadow-xl transition-all transform active:scale-95 uppercase text-sm flex items-center gap-2" onclick="GameLibrary.games.tug_of_war.togglePrepModal(true)">
                            Chuẩn bị trận đấu 🚩
                        </button>
                    </div>
                </div>

                <div class="flex-1 flex overflow-hidden">
                    <!-- Right: Question Editor -->
                    <div class="w-1/3 p-6 border-r border-slate-200 flex flex-col gap-6 overflow-y-auto">
                        <div id="editor-container" class="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 ${this.gameMode==="manual"||!this.gameMode?"":"opacity-40 grayscale pointer-events-none transition-all"}">
                            <h3 class="text-sm font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                📝 Soạn câu hỏi nhanh
                                ${this.gameMode&&this.gameMode!=="manual"?'<span class="text-[8px] bg-slate-200 text-slate-500 px-2 py-0.5 rounded-full">(Tắt)</span>':""}
                            </h3>
                            <div class="space-y-4" id="tow-advanced-editor">
                                <!-- Media Area -->
                                <div class="bg-blue-50/50 p-4 rounded-2xl border border-blue-100/50 space-y-3">
                                    <div class="flex items-center justify-between">
                                        <label class="text-[9px] font-black uppercase text-blue-400 ml-1">Đa phương tiện</label>
                                        <div class="flex bg-white rounded-lg p-1 gap-1 border border-blue-100">
                                            ${["none","image","video","audio"].map(e=>`
                                                <button onclick="GameLibrary.games.tug_of_war.setEditorMediaType('${e}')" 
                                                    id="tow-m-type-${e}"
                                                    class="tow-m-type-btn px-2 py-1 rounded-md text-[8px] font-black uppercase transition-all ${this.editorMediaType===e||!this.editorMediaType&&e==="none"?"bg-blue-600 text-white":"text-blue-300 hover:bg-blue-50"}">
                                                    ${e==="none"?"KO":e==="image"?"ẢNH":e==="video"?"VIDEO":"LOA"}
                                                </button>
                                            `).join("")}
                                        </div>
                                    </div>
                                    <div class="flex gap-2">
                                        <input type="text" id="q-media-url" class="flex-grow p-2.5 bg-white border border-blue-100 rounded-xl outline-none focus:border-blue-400 font-bold text-slate-600 text-[10px]" placeholder="URL hoặc chọn file..." oninput="GameLibrary.games.tug_of_war.updateEditorMediaPreview()">
                                        <label class="shrink-0 bg-blue-600 text-white px-3 py-2 rounded-xl font-black text-[9px] cursor-pointer hover:bg-blue-700 flex items-center gap-1">
                                            📁 FILE
                                            <input type="file" class="hidden" onchange="GameLibrary.games.tug_of_war.handleEditorFileSelect(this)">
                                        </label>
                                    </div>
                                    <div id="tow-m-preview" class="rounded-xl overflow-hidden bg-white/50 border border-white flex justify-center items-center h-16 text-[9px] text-slate-300 italic">
                                        Chưa có media
                                    </div>
                                </div>

                                <div>
                                    <label class="block text-[10px] font-black text-slate-400 uppercase mb-1 ml-1">Câu hỏi</label>
                                    <textarea id="q-text" placeholder="Nhập câu hỏi..." rows="2"
                                        class="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 font-bold focus:border-blue-500 outline-none transition-all text-sm"></textarea>
                                </div>
                                <div class="grid grid-cols-2 gap-3">
                                    <div class="relative">
                                        <input id="q-a" type="text" placeholder="Đáp án A" class="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-xs font-bold focus:border-blue-500 outline-none">
                                        <button onclick="document.getElementById('q-correct').value = document.getElementById('q-a').value" class="absolute right-2 top-1/2 -translate-y-1/2 text-[8px] font-bold text-blue-400 hover:text-blue-600">ĐÚNG</button>
                                    </div>
                                    <div class="relative">
                                        <input id="q-b" type="text" placeholder="Đáp án B" class="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-xs font-bold focus:border-blue-500 outline-none">
                                        <button onclick="document.getElementById('q-correct').value = document.getElementById('q-b').value" class="absolute right-2 top-1/2 -translate-y-1/2 text-[8px] font-bold text-blue-400 hover:text-blue-600">ĐÚNG</button>
                                    </div>
                                    <div class="relative">
                                        <input id="q-c" type="text" placeholder="Đáp án C (Tùy chọn)" class="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-xs font-bold focus:border-blue-500 outline-none">
                                        <button onclick="document.getElementById('q-correct').value = document.getElementById('q-c').value" class="absolute right-2 top-1/2 -translate-y-1/2 text-[8px] font-bold text-blue-400 hover:text-blue-600">ĐÚNG</button>
                                    </div>
                                    <div class="relative">
                                        <input id="q-d" type="text" placeholder="Đáp án D (Tùy chọn)" class="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-xs font-bold focus:border-blue-500 outline-none">
                                        <button onclick="document.getElementById('q-correct').value = document.getElementById('q-d').value" class="absolute right-2 top-1/2 -translate-y-1/2 text-[8px] font-bold text-blue-400 hover:text-blue-600">ĐÚNG</button>
                                    </div>
                                </div>
                                <div>
                                    <label class="block text-[10px] font-black text-slate-400 uppercase mb-1 ml-1">Đáp án đúng</label>
                                    <input id="q-correct" type="text" placeholder="Click 'ĐÚNG' ở trên hoặc tự nhập..." 
                                        class="w-full bg-green-50 border-2 border-green-100 rounded-xl px-4 py-3 font-bold focus:border-green-500 outline-none transition-all text-green-700 text-sm">
                                </div>
                                <button onclick="GameLibrary.games.tug_of_war.addQuestion()" class="w-full bg-blue-600 text-white font-black py-4 rounded-2xl hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-2 text-xs active:scale-95">
                                    ➕ THÊM VÀO BÀI ${this.currentSet}
                                </button>
                            </div>
                        </div>

                        <div id="mode-description" class="p-6 rounded-3xl border transition-all ${this.gameMode==="warmup"?"bg-indigo-50 border-indigo-100":this.gameMode==="reinforce"?"bg-emerald-50 border-emerald-100":"bg-orange-50 border-orange-100"}">
                            ${this.renderModeDescription()}
                        </div>

                        <!-- Phần Cách chơi và Hình ảnh mới -->
                        <div class="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 mt-2">
                             <div class="mb-4 overflow-hidden rounded-2xl border-2 border-slate-100">
                                <img src="assets/images/Keo_co.png" alt="Kéo co" class="w-full h-auto object-cover hover:scale-105 transition-transform duration-500">
                             </div>
                             <h3 class="text-sm font-black text-slate-800 uppercase tracking-widest mb-4 flex items-center gap-2">
                                <span class="text-xl">📜</span> Cách chơi
                             </h3>
                             <ul class="space-y-3 text-[11px] font-bold text-slate-600 leading-relaxed">
                                <li class="flex gap-2">
                                    <span class="text-blue-500">1.</span>
                                    <span>Hệ thống tự động chia lớp thành 2 đội <b>A (Táo đỏ)</b> và <b>B (Táo xanh)</b>.</span>
                                </li>
                                <li class="flex gap-2">
                                    <span class="text-blue-500">2.</span>
                                    <span>Các thành viên thảo luận nhóm và chọn đáp án đúng trên máy tính/máy tính bảng.</span>
                                </li>
                                <li class="flex gap-2">
                                    <span class="text-blue-500">3.</span>
                                    <span>Mỗi câu trả lời đúng sẽ giúp đội của bạn <b>kéo dây</b> về phía mình 1 bước.</span>
                                </li>
                                <li class="flex gap-2">
                                    <span class="text-blue-500">4.</span>
                                    <span>Đội nào đạt ngưỡng 15 điểm trước sẽ kéo ngã đội đối diện và giành <b>chiến thắng</b>!</span>
                                </li>
                                <li class="flex gap-2">
                                    <span class="text-blue-500">5.</span>
                                    <span>Khán giả hãy cổ vũ nhiệt tình để tăng thêm tinh thần cho các chiến binh nhé! 📣</span>
                                </li>
                             </ul>
                        </div>
                    </div>

                    <!-- Left: Preview & Team Info -->
                    <div class="flex-1 p-6 bg-slate-100/50 flex flex-col gap-6 overflow-hidden">
                        <!-- Questions Preview -->
                        <div class="h-1/2 bg-white rounded-3xl shadow-sm border border-slate-200 flex flex-col overflow-hidden">
                            <div class="p-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
                                <h3 class="text-xs font-black text-slate-800 uppercase tracking-widest">Danh sách câu hỏi (${this.customQuestions.length})</h3>
                                <button onclick="GameLibrary.games.tug_of_war.clearQuestions()" class="text-[10px] font-black text-rose-500 uppercase hover:underline">Xóa hết</button>
                            </div>
                            <div id="q-list-container" class="flex-1 overflow-y-auto p-4 space-y-3">
                                ${this.renderQuestionList()}
                            </div>
                        </div>

                        <!-- Teams & Spectators Management -->
                        <div class="flex-1 grid grid-cols-3 gap-4 overflow-hidden">
                             <!-- Team A -->
                             <div class="bg-white rounded-3xl shadow-sm border-t-4 border-red-500 p-4 flex flex-col overflow-hidden">
                                <h4 class="text-xs font-black text-red-600 uppercase mb-3 flex justify-between items-center">
                                    🍎 ĐỘI A <span class="bg-red-50 px-2 py-0.5 rounded-full text-[10px]">${this.teamA.length}/${this.teamSize}</span>
                                </h4>
                                <div class="flex-1 overflow-y-auto pr-1 space-y-1">
                                    ${this.teamA.map(e=>`
                                        <div class="group flex items-center justify-between bg-red-50 text-red-900 px-3 py-1.5 rounded-lg border border-red-100">
                                            <span class="font-bold text-[11px] truncate">${e}</span>
                                            <button onclick="GameLibrary.games.tug_of_war.moveToTeam('${e}', 'spec')" class="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-700 transition-all font-black text-xs">">→</button>
                                        </div>
                                    `).join("")}
                                    ${this.teamA.length===0?'<div class="text-slate-300 italic text-[10px] text-center mt-4">Trống</div>':""}
                                </div>
                             </div>

                             <!-- Spectators -->
                             <div class="bg-slate-50/50 rounded-3xl shadow-sm border border-slate-200 p-4 flex flex-col overflow-hidden">
                                <h4 class="text-xs font-black text-slate-500 uppercase mb-3 flex justify-between items-center">
                                    📣 KHÁN GIẢ <span class="bg-white border border-slate-200 px-2 py-0.5 rounded-full text-[10px]">${this.spectators.length}</span>
                                </h4>
                                <div class="flex-1 overflow-y-auto pr-1 space-y-1">
                                    ${this.spectators.map(e=>`
                                        <div class="group flex items-center gap-1 bg-white text-slate-600 px-2 py-1.5 rounded-lg border border-slate-100 shadow-sm">
                                            <button onclick="GameLibrary.games.tug_of_war.moveToTeam('${e}', 'A')" class="opacity-0 group-hover:opacity-100 text-red-500 hover:bg-red-50 w-5 h-5 rounded flex items-center justify-center transition-all">←</button>
                                            <span class="flex-1 text-[10px] font-bold truncate text-center">${e}</span>
                                            <button onclick="GameLibrary.games.tug_of_war.moveToTeam('${e}', 'B')" class="opacity-0 group-hover:opacity-100 text-blue-500 hover:bg-blue-50 w-5 h-5 rounded flex items-center justify-center transition-all">→</button>
                                        </div>
                                    `).join("")}
                                    ${this.spectators.length===0?'<div class="text-slate-300 italic text-[10px] text-center mt-4 opacity-50">Tất cả đều vào sân</div>':""}
                                </div>
                             </div>

                             <!-- Team B -->
                             <div class="bg-white rounded-3xl shadow-sm border-t-4 border-blue-500 p-4 flex flex-col overflow-hidden">
                                <h4 class="text-xs font-black text-blue-600 uppercase mb-3 flex justify-between items-center">
                                    🍏 ĐỘI B <span class="bg-blue-50 px-2 py-0.5 rounded-full text-[10px]">${this.teamB.length}/${this.teamSize}</span>
                                </h4>
                                <div class="flex-1 overflow-y-auto pr-1 space-y-1">
                                    ${this.teamB.map(e=>`
                                        <div class="group flex items-center justify-between bg-blue-50 text-blue-900 px-3 py-1.5 rounded-lg border border-blue-100">
                                            <button onclick="GameLibrary.games.tug_of_war.moveToTeam('${e}', 'spec')" class="opacity-0 group-hover:opacity-100 text-blue-400 hover:text-blue-700 transition-all font-black text-xs">←</button>
                                            <span class="font-bold text-[11px] truncate">${e}</span>
                                        </div>
                                    `).join("")}
                                    ${this.teamB.length===0?'<div class="text-slate-300 italic text-[10px] text-center mt-4">Trống</div>':""}
                                </div>
                             </div>
                        </div>
                    </div>
                </div>

                <!-- NEW: Full Screen Team Management Modal -->
                ${this.showTeamModal?`
                <div class="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-900/60 backdrop-blur-xl animate-fade-in">
                    <div class="bg-white w-full max-w-6xl h-full max-h-[95vh] rounded-[40px] shadow-2xl border border-white/20 flex flex-col overflow-hidden animate-scale-up">
                        <!-- Modal Header -->
                        <div class="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                            <div class="flex items-center gap-4">
                                <span class="text-4xl">📋</span>
                                <div>
                                    <h2 class="text-3xl font-black text-slate-800 uppercase tracking-tight">Biên tập Đội hình</h2>
                                    <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Sắp xếp học sinh tham gia trận đấu (Số lượng: ${this.teamSize} em/đội)</p>
                                </div>
                            </div>
                            <button onclick="GameLibrary.games.tug_of_war.toggleTeamModal(false)" class="w-12 h-12 bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center text-slate-400 hover:text-rose-500 transition-all active:scale-90">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                        </div>

                        <!-- Modal Content: 3 Big Columns -->
                        <div class="flex-1 overflow-hidden grid grid-cols-3 gap-6 p-8 bg-slate-100/30">
                            <!-- Column Team A -->
                            <div class="flex flex-col bg-white rounded-[32px] shadow-sm border-t-8 border-red-500 p-6 overflow-hidden">
                                <div class="flex justify-between items-center mb-6">
                                    <h3 class="text-xl font-black text-red-600 uppercase">🍎 Đội A</h3>
                                    <span class="bg-red-50 text-red-600 px-4 py-1.5 rounded-full font-black text-sm border border-red-100">${this.teamA.length}/${this.teamSize}</span>
                                </div>
                                <div class="flex-1 overflow-y-auto space-y-3 pr-2 custom-scrollbar">
                                    ${this.teamA.map(e=>`
                                        <div class="group flex items-center justify-between bg-red-50/30 text-red-900 p-6 rounded-3xl border-2 border-transparent hover:border-red-500 hover:bg-white transition-all shadow-sm">
                                            <span class="font-black text-2xl text-left truncate flex-1">${e}</span>
                                            <button onclick="GameLibrary.games.tug_of_war.moveToTeam('${e}', 'spec')" class="bg-white w-14 h-14 rounded-2xl shadow-sm border border-red-200 flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-all font-black text-2xl shadow-inner active:scale-95">">→</button>
                                        </div>
                                    `).join("")}
                                    ${this.teamA.length===0?'<div class="h-full flex flex-col items-center justify-center text-slate-300 gap-2 italic font-bold opacity-50"><span class="text-4xl">📭</span> Đội trống</div>':""}
                                </div>
                            </div>

                            <!-- Column Spectators -->
                            <div class="flex flex-col bg-slate-50/50 rounded-[32px] border-2 border-slate-200/50 p-6 overflow-hidden">
                                <div class="flex justify-between items-center mb-6">
                                    <h3 class="text-xl font-black text-slate-500 uppercase">📣 Khán Giả</h3>
                                    <span class="bg-white text-slate-500 px-4 py-1.5 rounded-full font-black text-sm border border-slate-200 shadow-sm">${this.spectators.length}</span>
                                </div>
                                <div class="flex-1 overflow-y-auto space-y-3 pr-2 custom-scrollbar">
                                    ${this.spectators.map(e=>`
                                        <div class="group flex items-center gap-4 bg-white p-5 rounded-3xl border-2 border-slate-100 shadow-sm hover:border-blue-500 hover:shadow-md transition-all">
                                            <button onclick="GameLibrary.games.tug_of_war.moveToTeam('${e}', 'A')" class="bg-slate-50 w-14 h-14 rounded-2xl border border-slate-200 flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-all font-black text-2xl shadow-sm active:scale-95">←</button>
                                            <span class="flex-1 text-center font-black text-2xl text-slate-700 truncate px-2">${e}</span>
                                            <button onclick="GameLibrary.games.tug_of_war.moveToTeam('${e}', 'B')" class="bg-slate-50 w-14 h-14 rounded-2xl border border-slate-200 flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition-all font-black text-2xl shadow-sm active:scale-95">→</button>
                                        </div>
                                    `).join("")}
                                    ${this.spectators.length===0?'<div class="h-full flex flex-col items-center justify-center text-slate-300 gap-2 italic text-center font-bold opacity-50"><span class="text-4xl">👟</span> Đã vào sân hết</div>':""}
                                </div>
                            </div>

                            <!-- Column Team B -->
                            <div class="flex flex-col bg-white rounded-[32px] shadow-sm border-t-8 border-blue-500 p-6 overflow-hidden">
                                <div class="flex justify-between items-center mb-6">
                                    <h3 class="text-xl font-black text-blue-600 uppercase">🍏 Đội B</h3>
                                    <span class="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full font-black text-sm border border-blue-100">${this.teamB.length}/${this.teamSize}</span>
                                </div>
                                <div class="flex-1 overflow-y-auto space-y-3 pr-2 custom-scrollbar">
                                    ${this.teamB.map(e=>`
                                        <div class="group flex items-center justify-between bg-blue-50/30 text-blue-900 p-6 rounded-3xl border-2 border-transparent hover:border-blue-500 hover:bg-white transition-all shadow-sm">
                                            <button onclick="GameLibrary.games.tug_of_war.moveToTeam('${e}', 'spec')" class="bg-white w-14 h-14 rounded-2xl shadow-sm border border-blue-200 flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition-all font-black text-2xl shadow-inner active:scale-95">←</button>
                                            <span class="font-black text-2xl text-right truncate flex-1">${e}</span>
                                        </div>
                                    `).join("")}
                                    ${this.teamB.length===0?'<div class="h-full flex flex-col items-center justify-center text-slate-300 gap-2 italic font-bold opacity-50"><span class="text-4xl">📭</span> Đội trống</div>':""}
                                </div>
                            </div>
                        </div>

                        <!-- Modal Footer -->
                        <div class="p-8 border-t border-slate-100 bg-white flex justify-center shadow-inner">
                            <button onclick="GameLibrary.games.tug_of_war.toggleTeamModal(false)" class="bg-slate-800 text-white font-black px-16 py-5 rounded-[24px] shadow-2xl hover:bg-slate-900 transition-all uppercase tracking-[4px] text-lg active:scale-95 flex items-center gap-4">
                                <span>Xong, Lưu đội hình</span> <span class="text-2xl">⚡</span>
                            </button>
                        </div>
                    </div>
                </div>
                `:""}

                <!-- Preparation Modal: Introduction of Teams -->
                ${this.showPrepModal?`
                <div class="fixed inset-0 z-[200] bg-slate-900/95 backdrop-blur-md flex items-center justify-center p-4">
                    <div class="bg-white w-full max-w-5xl rounded-[40px] shadow-2xl border-4 border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
                        <!-- Modal Header -->
                        <div class="p-5 bg-slate-50 border-b border-slate-100 flex justify-between items-center bg-gradient-to-r from-red-50 to-blue-50">
                            <div class="flex items-center gap-3">
                                <span class="text-3xl animate-bounce">⚔️</span>
                                <div>
                                    <h2 class="text-2xl font-black text-slate-800 uppercase tracking-tight leading-tight">Chiến Binh Sẵn Sàng</h2>
                                    <p class="text-[9px] font-bold text-slate-400 font-bold uppercase tracking-widest">Đội hình ${this.state.teamAName} & ${this.state.teamBName}</p>
                                </div>
                            </div>
                            <button onclick="GameLibrary.games.tug_of_war.togglePrepModal(false)" class="bg-white text-slate-400 hover:text-rose-500 w-10 h-10 rounded-xl flex items-center justify-center transition-all shadow-sm border border-slate-200">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                            </button>
                        </div>

                        <!-- Modal Content: 2 Team Columns -->
                        <div class="flex-1 overflow-hidden grid grid-cols-2 gap-4 p-4">
                            <!-- Team A Content -->
                            <div class="flex flex-col bg-red-50/50 rounded-[32px] border-2 border-red-100 p-3 overflow-hidden items-center group">
                                <div class="w-full px-4 mb-2">
                                    <label class="block text-[9px] font-black text-red-500 uppercase text-center mb-0.5 tracking-widest">Tên Đội A</label>
                                    <input id="edit-team-a-name" type="text" value="${this.state.teamAName||"Táo Đỏ"}" 
                                        class="w-full bg-white border-2 border-red-100 rounded-xl px-4 py-1.5 font-black text-xl text-center text-red-600 focus:border-red-500 outline-none transition-all shadow-sm"
                                        onchange="GameLibrary.games.tug_of_war.state.teamAName = this.value">
                                </div>
                                <div class="w-full flex-1 overflow-y-auto space-y-1 pr-1 custom-scrollbar">
                                    ${this.teamA.map(e=>`
                                        <div class="bg-white p-2 rounded-xl shadow-sm border border-red-50 flex items-center justify-center">
                                            <span class="font-black text-base text-red-900 truncate">${e}</span>
                                        </div>
                                    `).join("")}
                                </div>
                            </div>

                            <!-- Team B Content -->
                            <div class="flex flex-col bg-blue-50/50 rounded-[32px] border-2 border-blue-100 p-3 overflow-hidden items-center group">
                                <div class="w-full px-4 mb-2">
                                    <label class="block text-[9px] font-black text-blue-500 uppercase text-center mb-0.5 tracking-widest">Tên Đội B</label>
                                    <input id="edit-team-b-name" type="text" value="${this.state.teamBName||"Táo Xanh"}" 
                                        class="w-full bg-white border-2 border-blue-100 rounded-xl px-4 py-1.5 font-black text-xl text-center text-blue-600 focus:border-blue-500 outline-none transition-all shadow-sm"
                                        onchange="GameLibrary.games.tug_of_war.state.teamBName = this.value">
                                </div>
                                <div class="w-full flex-1 overflow-y-auto space-y-1 pr-1 custom-scrollbar">
                                    ${this.teamB.map(e=>`
                                        <div class="bg-white p-2 rounded-xl shadow-sm border border-blue-50 flex items-center justify-center">
                                            <span class="font-black text-base text-blue-900 truncate">${e}</span>
                                        </div>
                                    `).join("")}
                                </div>
                            </div>
                        </div>

                        <!-- Modal Footer -->
                        <div class="p-6 border-t border-slate-100 bg-white flex justify-center shadow-inner">
                            <button id="prep-start-btn" onclick="GameLibrary.games.tug_of_war.updateTeamNamesFromUI(); GameLibrary.games.tug_of_war.togglePrepModal(false); GameLibrary.games.tug_of_war.createSession();" 
                                class="bg-blue-600 text-white font-black px-12 py-3 rounded-2xl shadow-xl hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all uppercase tracking-widest text-base flex items-center gap-3">
                                <span>Bắt đầu trận đấu</span> <span class="animate-pulse">🚀</span>
                            </button>
                        </div>
                    </div>
                </div>
                `:""}
            </div>
        `},renderQuestionList(){return this.customQuestions.length===0?`<div class="h-full flex flex-col items-center justify-center text-slate-300 gap-2 italic text-sm">
                <span class="text-4xl grayscale opacity-20">📭</span>
                Chưa có câu hỏi nào được thêm cho Bài ${this.currentSet}
            </div>`:this.customQuestions.map((e,t)=>`
            <div class="group relative bg-slate-50 border border-slate-100 p-4 rounded-2xl hover:border-blue-200 transition-all">
                <div class="flex justify-between items-start mb-2">
                    <div class="flex items-center gap-2">
                        <span class="text-[10px] font-black text-blue-500 uppercase tracking-tighter">Câu ${t+1}</span>
                        ${e.mediaType&&e.mediaType!=="none"?`<span class="text-[8px] bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded-md font-black uppercase">${e.mediaType==="image"?"ẢNH":e.mediaType==="video"?"VIDEO":"LOA"}</span>`:""}
                    </div>
                    <button onclick="GameLibrary.games.tug_of_war.removeQuestion(${t})" class="opacity-0 group-hover:opacity-100 p-1 hover:text-rose-500 transition-all text-slate-400">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
                    </button>
                </div>
                <p class="font-bold text-slate-700 text-sm mb-2">${e.title}</p>
                <div class="flex flex-wrap gap-2">
                    ${e.options.map(n=>`
                        <span class="text-[9px] px-2 py-0.5 rounded-md ${n===e.answer?"bg-green-100 text-green-700 border border-green-200":"bg-white text-slate-400 border border-slate-100"} font-bold">
                            ${n}
                        </span>
                    `).join("")}
                </div>
            </div>
        `).join("")},setMode(e){this.gameMode=e,this.renderLobby()},renderModeDescription(){return this.gameMode==="warmup"?`
                <div class="flex items-start gap-3">
                    <span class="text-2xl">☕</span>
                    <div>
                        <h4 class="text-[10px] font-black text-indigo-600 uppercase mb-1">Chế độ Khởi động</h4>
                        <p class="text-[11px] font-bold text-slate-500 leading-relaxed italic">
                            Hệ thống sẽ lấy ngẫu nhiên 5 câu hỏi từ các bài học của tuần trước để ôn tập kiến thức cũ.
                        </p>
                    </div>
                </div>
            `:this.gameMode==="reinforce"?`
                <div class="flex items-start gap-3">
                    <span class="text-2xl">📚</span>
                    <div>
                        <h4 class="text-[10px] font-black text-emerald-600 uppercase mb-1">Chế độ Củng cố</h4>
                        <p class="text-[11px] font-bold text-slate-500 leading-relaxed italic">
                            Hệ thống sẽ lấy 2 bộ câu hỏi (mỗi bộ 5 câu) từ tệp củng cố của bài hiện tại.
                        </p>
                    </div>
                </div>
            `:`
            <div class="flex items-start gap-3">
                <span class="text-2xl">💡</span>
                <div>
                    <h4 class="text-[10px] font-black text-orange-600 uppercase mb-1">Chế độ Tùy chọn</h4>
                    <p class="text-[11px] font-bold text-slate-500 leading-relaxed">
                        Bạn có thể soạn bộ câu hỏi riêng hoặc dùng bộ câu hỏi mặc định của bài học.
                    </p>
                </div>
            </div>
        `},async fetchQuestionsByMode(){const e=window.currentLessonData?String(window.currentLessonData.period):"120",t=parseInt(e.replace(/\D/g,""));let n=[];if(this.gameMode==="warmup"){for(let i=1;i<=5;i++){const s=await this.loadQuestionsFromFile(t-i);s&&(n=[...n,...s])}return n.sort(()=>Math.random()-.5).slice(0,5)}else if(this.gameMode==="reinforce"){const i=await this.loadQuestionsFromFile(t);if(i)return i.sort(()=>Math.random()-.5).slice(0,10)}return this.customQuestions},selectSet(e){this.currentSet!==e&&(this.currentSet=e,this.loadQuestions(),this.renderLobby())},loadQuestions(){const e=this.lessonPeriod,t=this.currentSet,n=`TOW_Data_${e}_Set_${t}`,i=localStorage.getItem(n);if(i)try{this.customQuestions=JSON.parse(i)}catch(s){console.error("Lỗi tải câu hỏi:",s),this.customQuestions=[]}else{const s=`tow_custom_qs_${e}`,o=localStorage.getItem(s);if(o&&t===1)try{this.customQuestions=JSON.parse(o)}catch{this.customQuestions=[]}else this.customQuestions=[]}},saveCurrentSet(){const e=`TOW_Data_${this.lessonPeriod}_Set_${this.currentSet}`;localStorage.setItem(e,JSON.stringify(this.customQuestions))},setEditorMediaType(e){this.editorMediaType=e,document.querySelectorAll(".tow-m-type-btn").forEach(t=>{const n=e==="none"?"KO":e==="image"?"ẢNH":e==="video"?"VIDEO":"LOA";t.innerText.trim()===n?(t.classList.add("bg-blue-600","text-white"),t.classList.remove("text-blue-300","hover:bg-blue-50")):(t.classList.remove("bg-blue-600","text-white"),t.classList.add("text-blue-300","hover:bg-blue-50"))}),this.updateEditorMediaPreview()},updateEditorMediaPreview(){var i;const e=this.editorMediaType||"none",t=((i=document.getElementById("q-media-url"))==null?void 0:i.value)||"",n=document.getElementById("tow-m-preview");if(n){if(e==="none"||!t){n.innerHTML="Chưa có media";return}e==="image"?n.innerHTML=`<img src="${t}" class="h-full w-auto">`:e==="video"?n.innerHTML='<div class="flex items-center gap-1">🎥 Video</div>':e==="audio"&&(n.innerHTML='<div class="flex items-center gap-1">🔊 Audio</div>')}},async handleEditorFileSelect(e){const t=e.files[0];if(!t)return;const n=this.editorMediaType||"none",i=document.getElementById("q-media-url"),s=document.getElementById("tow-m-preview");s&&(s.innerHTML='<span class="animate-pulse text-blue-500">Đang tải...</span>');try{if(window.storage&&window.ref&&window.uploadBytes&&window.getDownloadURL){const o=Date.now(),a=n==="image"?"hinh_anh":n==="video"?"video":"am_thanh",r=`tug_of_war_media/${this.lessonPeriod}/${a}/${o}_${t.name}`,l=window.ref(window.storage,r),d=await window.uploadBytes(l,t),c=await window.getDownloadURL(d.ref);i&&(i.value=c),this.updateEditorMediaPreview()}else{const o=n==="image"?"assets/images/":n==="video"?"assets/assets/video/":"assets/audio/";i&&(i.value=o+t.name),this.updateEditorMediaPreview(),alert("Bạn đang offline. Hãy copy file vào thư mục '"+o+"' nhé!")}}catch(o){console.error("Upload Error:",o),alert("Lỗi tải lên. Hãy thử lại."),this.updateEditorMediaPreview()}},async loadQuestionsFromFile(e){try{if(!window.QuestionBankManager)return null;const t=await window.QuestionBankManager.getQuestions({periods:parseInt(e),totalCount:20});return!t||t.length===0?null:t.map(n=>({title:n.question,options:n.options,answer:n.options[n.answer]}))}catch(t){return console.error("TugOfWar load failed:",t),null}},addQuestion(){var h;const e=document.getElementById("q-text").value.trim(),t=document.getElementById("q-a").value.trim(),n=document.getElementById("q-b").value.trim(),i=document.getElementById("q-c").value.trim(),s=document.getElementById("q-d").value.trim(),o=document.getElementById("q-correct").value.trim(),a=((h=document.getElementById("q-media-url"))==null?void 0:h.value.trim())||"",r=this.editorMediaType||"none";if(!e||!t||!n||!o){alert("Vui lòng nhập đầy đủ thông tin (câu hỏi, ít nhất 2 đáp án và đáp án đúng)!");return}const l=[t,n];i&&l.push(i),s&&l.push(s),this.customQuestions.push({title:e,options:l,answer:o,mediaUrl:a,mediaType:r}),this.saveCurrentSet(),["q-text","q-a","q-b","q-c","q-d","q-correct"].forEach(u=>{const g=document.getElementById(u);g&&(g.value="")}),document.getElementById("q-media-url")&&(document.getElementById("q-media-url").value=""),this.setEditorMediaType("none");const c=document.getElementById("q-list-container");c&&(c.innerHTML=this.renderQuestionList()),this.renderLobby()},clearQuestions(){confirm(`Xóa toàn bộ bộ câu hỏi của Bài ${this.currentSet}?`)&&(this.customQuestions=[],this.saveCurrentSet(),this.renderLobby())},async createSession(){if(!window.db){alert("Lỗi: Không tìm thấy kết nối Firebase. Vui lòng kiểm tra lại mạng!");return}const e=document.getElementById("prep-start-btn");e&&(e.disabled=!0,e.innerHTML="Đang khởi tạo...");const t=await this.fetchQuestionsByMode(),n=[...this.customQuestions,...t||[]];if(this.teamA.length===0||this.teamB.length===0){alert("Vui lòng chọn lớp để chia đội trước khi bắt đầu!"),e&&(e.disabled=!1,e.innerHTML="Bắt đầu trận đấu 🚀");return}this.sessionId="tow_"+Date.now();const i={id:this.sessionId,status:"playing",teamA:this.teamA,teamB:this.teamB,spectators:this.spectators||[],scoreA:0,scoreB:0,ropePos:0,winningTeam:null,questions:n,timestamp:firebase.firestore.FieldValue.serverTimestamp(),lesson:document.title.replace(" - EduRobot",""),sessionTitle:window.currentLessonData?window.currentLessonData.title:"Trận đấu kéo co",teamAName:this.state.teamAName||"Táo Đỏ",teamBName:this.state.teamBName||"Táo Xanh",gameMode:this.gameMode||"reinforce",currentSet:this.currentSet};try{await db.collection("game_sessions").doc(this.sessionId).set(i),await db.collection("game_sessions").doc("global_status").set({activeSession:this.sessionId,lastUpdate:firebase.firestore.FieldValue.serverTimestamp()}),this.playBgMusic(),this.startSync()}catch(s){alert("Lỗi khởi tạo phòng: "+s.message),e&&(e.disabled=!1,e.innerHTML="Thử lại")}},listenToGlobalSessions(){window.db&&(this.unsubscribeGlobal=db.collection("game_sessions").doc("global_status").onSnapshot(e=>{const t=e.data();t&&t.activeSession&&(this.sessionId=t.activeSession,this.startSync(),this.unsubscribeGlobal&&this.unsubscribeGlobal())}))},startSync(){!this.sessionId||!window.db||(this.unsubscribe=db.collection("game_sessions").doc(this.sessionId).onSnapshot(e=>{const t=e.data();t&&(this.state=t,this.state.status==="playing"&&this.sounds.bg.paused&&this.playBgMusic(),this.renderGame())}))},renderGame(){if(this.state.status==="finished"){this.renderEndScreen();return}this.role==="teacher"?this.renderTeacherView():this.renderStudentView()},renderTeamSelect(){this.container.innerHTML=`
            <div class="p-8 flex flex-col items-center justify-center h-full text-center bg-slate-900 text-white font-sans">
                <div class="text-6xl mb-8 animate-bounce">🚩</div>
                <h3 class="text-2xl font-black mb-2 uppercase tracking-tight">XÁC NHẬN THIẾT BỊ</h3>
                <p class="text-slate-400 font-bold mb-10 max-w-xs text-sm">Thiết bị này sẽ tham gia làm bài cho Đội nào?</p>
                
                <div class="grid grid-cols-2 gap-6 w-full max-w-md">
                    <button onclick="GameLibrary.games.tug_of_war.renderNameSelect('A')" class="bg-blue-600 hover:bg-blue-700 p-8 rounded-[40px] shadow-2xl transition-all transform active:scale-95 border-b-8 border-blue-900 group">
                        <div class="text-4xl mb-4 group-hover:scale-125 transition-transform">🍎</div>
                        <div class="font-black text-xl uppercase italic">Đội A</div>
                        <div class="text-[10px] opacity-60 mt-1">${this.state.teamA.length} bạn</div>
                    </button>
                    <button onclick="GameLibrary.games.tug_of_war.renderNameSelect('B')" class="bg-rose-500 hover:bg-rose-600 p-8 rounded-[40px] shadow-2xl transition-all transform active:scale-95 border-b-8 border-rose-900 group">
                        <div class="text-4xl mb-4 group-hover:scale-125 transition-transform">🍏</div>
                        <div class="font-black text-xl uppercase italic">Đội B</div>
                        <div class="text-[10px] opacity-60 mt-1">${this.state.teamB.length} bạn</div>
                    </button>
                </div>

                <div class="mt-12 text-xs font-bold text-slate-500 italic">
                    Các bạn hãy thảo luận nhóm & cùng làm bài trên máy này nhé!
                </div>
            </div>
        `},renderNameSelect(e){const t=e==="A"?this.state.teamA:this.state.teamB,n=e==="A"?"🍎":"🍏";this.container.innerHTML=`
            <div class="p-8 flex flex-col h-full bg-slate-50 font-sans">
                <div class="mb-6 flex items-center gap-4">
                    <button onclick="GameLibrary.games.tug_of_war.renderTeamSelect()" class="p-4 bg-white rounded-2xl shadow-sm text-slate-400 hover:text-slate-800 transition-all">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
                    </button>
                    <div>
                        <h4 class="text-xs font-black text-slate-400 uppercase tracking-widest">Bước 2: Chọn đại diện</h4>
                        <h3 class="text-xl font-black text-slate-800 uppercase flex items-center gap-2">
                             ${n} Bạn thuộc Đội ${e}
                        </h3>
                    </div>
                </div>

                <div class="flex-1 overflow-y-auto pr-2 grid grid-cols-2 md:grid-cols-3 gap-3">
                    ${t.map(i=>`
                        <button onclick="GameLibrary.games.tug_of_war.selectTeamMember('${e}', '${i}')" 
                            class="bg-white p-4 rounded-2xl shadow-sm border-2 border-transparent hover:border-${e==="A"?"blue":"rose"}-500 hover:shadow-md transition-all text-left group">
                            <div class="text-[10px] font-black text-slate-400 uppercase mb-1 group-hover:text-${e==="A"?"blue":"rose"}-500">Học sinh</div>
                            <div class="font-bold text-slate-800">${i}</div>
                        </button>
                    `).join("")}
                </div>
                
                <div class="mt-6 p-6 bg-yellow-50 rounded-3xl border border-yellow-100 flex items-start gap-4">
                    <span class="text-2xl">💡</span>
                    <p class="text-xs font-bold text-yellow-800 leading-relaxed italic">
                        Chọn một tên bất kỳ trong nhóm của các em để máy tính nhận diện. Điểm số cả nhóm làm được sẽ tính cho Đội ${e}!
                    </p>
                </div>
            </div>
        `},selectTeamMember(e,t){this.tempStudentName=t,this.renderGame()},renderTeacherView(){const t=this.state.ropePos/15*40;this.container.innerHTML=`
            <div class="relative w-full h-full flex flex-col bg-sky-100 overflow-hidden font-['Be_Vietnam_Pro']">
                <!-- Background Decorations -->
                <div class="absolute inset-0 pointer-events-none opacity-20">
                    <div class="absolute top-10 left-10 text-6xl">☁️</div>
                    <div class="absolute top-20 right-20 text-4xl">☁️</div>
                    <div class="absolute bottom-20 left-1/4 text-5xl">🌲</div>
                    <div class="absolute bottom-10 right-1/3 text-4xl">🌲</div>
                </div>

                <!-- Header -->
                <div class="pt-4 pb-2 flex flex-col items-center z-10 relative">
                    <div class="text-center group mb-4 flex items-center gap-4">
                        <button onclick="window.close()" class="group flex items-center gap-2 px-3 py-1.5 bg-white/80 backdrop-blur hover:bg-white text-blue-600 rounded-xl font-black text-[10px] shadow-sm transition-all active:scale-95 border border-blue-100">
                             <span class="w-5 h-5 bg-blue-600 text-white rounded-lg flex items-center justify-center text-[10px]">E</span>
                             <span class="uppercase tracking-widest group-hover:translate-x-0.5 transition-transform">QUAY LẠI</span>
                        </button>
                        <div>
                            <h2 class="text-2xl font-black text-slate-800 uppercase italic tracking-tighter transition-transform group-hover:scale-105 leading-none">CUỘC CHIẾN KÉO CO</h2>
                            <p class="text-[8px] font-bold text-slate-500 uppercase tracking-[0.3em] mt-1">${this.state.sessionTitle}</p>
                        </div>
                    </div>

                    <div class="flex items-center justify-center gap-6 w-full max-w-4xl px-4">
                        <!-- Team A Content (List + Score) -->
                        <div class="flex items-center gap-4 flex-1 justify-end">
                            <div class="hidden md:flex flex-col gap-0.5 max-h-20 overflow-y-auto custom-scrollbar text-right pr-2 border-r border-blue-200/50">
                                ${this.state.teamA.map(n=>`<div class="text-[9px] font-black text-slate-600 whitespace-nowrap">${n}</div>`).join("")}
                            </div>
                            <div class="flex flex-col items-center">
                                <div class="text-[8px] font-black text-blue-600 uppercase tracking-widest mb-1">${this.state.teamAName||"Đội A"}</div>
                                <div class="bg-blue-600 text-white px-8 py-4 rounded-3xl font-black text-6xl shadow-2xl border-b-8 border-blue-800 transform hover:scale-105 transition-transform">${this.state.scoreA}</div>
                            </div>
                        </div>

                        <!-- VS Divider (Invisible but maintains gap) -->
                        <div class="w-1 h-20 bg-slate-200/30 rounded-full mx-2"></div>

                        <!-- Team B Content (Score + List) -->
                        <div class="flex items-center gap-4 flex-1 justify-start text-left">
                            <div class="flex flex-col items-center">
                                <div class="text-[8px] font-black text-rose-600 uppercase tracking-widest mb-1">${this.state.teamBName||"Đội B"}</div>
                                <div class="bg-rose-500 text-white px-8 py-4 rounded-3xl font-black text-6xl shadow-2xl border-b-8 border-rose-800 transform hover:scale-105 transition-transform">${this.state.scoreB}</div>
                            </div>
                            <div class="hidden md:flex flex-col gap-0.5 max-h-20 overflow-y-auto custom-scrollbar pl-2 border-l border-rose-200/50">
                                ${this.state.teamB.map(n=>`<div class="text-[9px] font-black text-slate-600 whitespace-nowrap">${n}</div>`).join("")}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Tug of War Field -->
                <div class="flex-1 relative flex flex-col overflow-hidden bg-sky-100 mt-[-20px]">
                    <!-- Sky & Clouds -->
                    <div class="absolute top-0 w-full h-1/2 bg-gradient-to-b from-blue-300 to-sky-100">
                        <div class="absolute top-10 left-1/4 text-2xl opacity-40 animate-pulse">☁️</div>
                        <div class="absolute top-16 right-1/4 text-3xl opacity-20 animate-pulse">☁️</div>
                    </div>

                    <!-- Fence -->
                    <div class="absolute top-[45%] w-full h-6 border-y border-slate-300 z-10 bg-[radial-gradient(circle,transparent_20%,#cbd5e1_20%,#cbd5e1_30%,transparent_30%,transparent_70%,#cbd5e1_70%,#cbd5e1_80%,transparent_80%)] bg-[length:15px_15px]"></div>

                    <!-- Ground -->
                    <div class="absolute bottom-0 w-full h-[55%] bg-gradient-to-b from-orange-200 to-orange-300 shadow-inner"></div>

                    <!-- Field Content -->
                    <div class="relative flex-1 flex items-center justify-center">
                        
                        <!-- Central Marker -->
                        <div class="absolute bottom-0 left-1/2 -ml-0.5 w-1 h-full bg-red-600/10 z-0"></div>
                        <div class="absolute bottom-[35%] left-1/2 -translate-x-1/2 w-0.5 h-[120px] bg-red-600 border-x border-white/30 z-10"></div>
                        
                        <!-- The Rope System (Dùng hình ảnh thực tế thu nhỏ còn 60%) -->
                        <div id="tow-rope-system" class="relative w-full max-w-6xl h-16 flex items-center justify-center transition-all duration-500 z-30" style="transform: translateX(${-t}%)">
                            <div class="relative group">
                                <img src="assets/images/Keo_co.png" class="h-full w-auto drop-shadow-[0_15px_40px_rgba(0,0,0,0.2)] group-hover:scale-105 transition-transform duration-700" alt="Minh họa Kéo co">
                                <!-- Action Feedback -->
                                ${Math.abs(this.state.ropePos)>5?'<div class="absolute -top-10 left-1/2 -translate-x-1/2 text-2xl animate-bounce">💢</div>':""}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Real-time Activity Logs (Footer) -->
                <div class="p-2 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl z-20 flex justify-between items-center px-8 text-[11px]">
                    <div class="flex items-center gap-4">
                        <div class="w-3 h-3 bg-blue-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                        <div class="text-xs font-bold text-slate-500 uppercase tracking-widest">
                            Đội A: ${this.state.teamA.length} thành viên đang cố gắng
                        </div>
                    </div>
                    
                    <div class="flex items-center gap-4">
                        <div class="w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
                        <p class="text-xl font-black text-slate-800 uppercase tracking-widest text-shadow-sm">
                            ${this.state.ropePos===0?"TRẬN ĐẤU CÂN BẰNG":`DÂY NGHIÊNG ${Math.abs(this.state.ropePos)} ĐIỂM VỀ ${this.state.ropePos<0?this.state.teamAName||"ĐỘI A":this.state.teamBName||"ĐỘI B"}`}
                        </p>
                    </div>

                    <div class="flex items-center gap-4">
                        <div class="text-xs font-bold text-slate-500 uppercase tracking-widest text-right">
                            Đội B: ${this.state.teamB.length} thành viên đang nỗ lực
                        </div>
                        <div class="w-3 h-3 bg-rose-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(244,63,94,0.5)]"></div>
                    </div>
                </div>
            </div>
        `},renderStudentView(){const e=this.tempStudentName||localStorage.getItem("eduMathName"),t=this.state.teamA.includes(e)?"A":this.state.teamB.includes(e)?"B":null;if(!t){if(this.state.spectators&&this.state.spectators.includes(e)){this.container.innerHTML=`
                    <div class="p-12 flex flex-col items-center justify-center h-full text-center bg-slate-900 text-white font-['Be_Vietnam_Pro']">
                        <div class="text-[80px] mb-8 animate-bounce">🍿</div>
                        <h3 class="text-3xl font-black mb-4 uppercase italic tracking-tighter text-yellow-400">KHÁN GIẢ CỔ VŨ</h3>
                        <p class="text-slate-400 font-bold max-w-xs leading-relaxed">
                            Chào <span class="text-white">${e}</span>! Bạn đang ở hàng ghế khán giả lần này. Hãy cùng cổ vũ thật nhiệt tình cho 2 đội nhé!
                        </p>
                        <div class="mt-12 flex gap-4">
                            <div class="px-6 py-3 bg-blue-600 rounded-2xl font-black text-xs uppercase animate-pulse">Cố lên Đội A! 🍎</div>
                            <div class="px-6 py-3 bg-rose-600 rounded-2xl font-black text-xs uppercase animate-pulse">Cố lên Đội B! 🍏</div>
                        </div>
                        <button onclick="GameLibrary.games.tug_of_war.tempStudentName = null; GameLibrary.games.tug_of_war.renderGame();" 
                            class="mt-16 text-xs font-black text-slate-500 hover:text-white transition-all underline decoration-white/20">
                            Đổi danh tính/Đội ⇄
                        </button>
                    </div>
                `;return}return this.renderTeamSelect()}const n=t==="A"?"from-blue-600 to-indigo-700":"from-rose-500 to-orange-600",i=t==="A"?"🦁":"🐯",o=50+this.state.ropePos/15*50;this.container.innerHTML=`
            <div class="p-6 flex flex-col items-center justify-between h-full bg-gradient-to-br ${n} text-white font-['Be_Vietnam_Pro'] overflow-hidden">
                <!-- Header with Team Scores -->
                <div class="w-full flex justify-between items-center bg-white/10 backdrop-blur-md p-3 md:p-4 rounded-3xl border border-white/20 mb-4 gap-2">
                    <button onclick="window.close()" class="group flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur hover:bg-white/40 text-white rounded-xl font-black text-[8px] transition-all active:scale-95 border border-white/10 mr-1">
                         <span class="w-4 h-4 bg-white text-blue-600 rounded flex items-center justify-center text-[8px]">E</span>
                         <span class="uppercase tracking-widest group-hover:translate-x-0.5 transition-transform">QUAY LẠI</span>
                    </button>
                    <div class="flex items-center gap-2 min-w-[80px]">
                        <span class="text-2xl md:text-3xl">${i}</span>
                        <div class="max-w-[100px]">
                            <div class="text-[8px] font-black uppercase opacity-60 tracking-widest flex items-center">
                                Đội <button onclick="GameLibrary.games.tug_of_war.tempStudentName = null; GameLibrary.games.tug_of_war.renderGame();" class="ml-1 hover:text-white underline decoration-white/20">Đổi</button>
                            </div>
                            <div class="text-sm md:text-base font-black truncate">${t==="A"?this.state.teamAName||"A":this.state.teamBName||"B"}</div>
                        </div>
                    </div>
                    <!-- Mini Rope Progress -->
                    <div class="flex-1 flex flex-col gap-1 px-2 overflow-hidden">
                        <div class="flex justify-between text-[7px] font-black uppercase opacity-60 px-1 truncate">
                            <span class="truncate pr-1">${this.state.teamAName||"Đội A"}</span>
                            <span class="truncate pl-1">${this.state.teamBName||"Đội B"}</span>
                        </div>
                        <div class="relative h-1.5 bg-black/20 rounded-full overflow-hidden border border-white/5">
                            <div class="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-white/30 z-10"></div>
                            <div class="absolute top-0 bottom-0 left-0 bg-blue-400 transition-all duration-500" style="width: ${o}%"></div>
                            <div class="absolute top-1/2 left-[${o}%] -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-red-500 rounded-full border border-white shadow-sm transition-all duration-500 z-20 flex items-center justify-center">
                                <span class="text-[6px]">🚩</span>
                            </div>
                        </div>
                    </div>
                    <div class="text-right min-w-[60px]">
                        <div class="text-[8px] font-black uppercase opacity-60 tracking-widest leading-none mb-0.5">Điểm</div>
                        <div class="text-xl md:text-2xl font-black leading-none">${t==="A"?this.state.scoreA:this.state.scoreB}</div>
                    </div>
                </div>

                <div class="flex-1 flex flex-col items-center justify-center w-full max-w-md">
                    <div class="w-full bg-white rounded-[40px] p-8 md:p-10 shadow-2xl relative">
                        <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-950 px-6 py-1 rounded-full font-black text-xs uppercase shadow-lg border-2 border-white">
                            Câu hỏi của bạn 📋
                        </div>
                        
                        <div id="tow-question" class="text-2xl md:text-3xl font-black text-slate-800 text-center mb-10 leading-relaxed pt-2">...</div>
                        
                        <div id="tow-options" class="grid grid-cols-2 gap-4">
                            <!-- Handled by nextQuestion() -->
                        </div>
                    </div>
                </div>

                <div class="w-full flex items-center justify-center gap-2 py-4 text-[10px] font-black uppercase tracking-[0.2em] opacity-80">
                    <span class="animate-pulse">${this.state.ropePos===0?"Trận đấu đang cân bằng":this.state.ropePos<0&&t==="A"||this.state.ropePos>0&&t==="B"?"Đội bạn đang thắng thế! 🔥":"Cố lên, sắp bị kéo rồi! 💦"}</span>
                </div>
            </div>
        `,this.currentQuestion?setTimeout(()=>this.updateQuestionUI(),50):this.nextQuestion()},nextQuestion(){var i;let e;const t=this.state.questions||[],n=((i=window.currentLessonData)==null?void 0:i.quizPool)||[];if(t.length>0){const s=Math.floor(Math.random()*t.length);e=JSON.parse(JSON.stringify(t[s]))}else if(n.length>0){const s=Math.floor(Math.random()*n.length),o=n[s];e={title:o.question,options:[...o.options],answer:typeof o.answer=="number"?o.options[o.answer]:o.answer}}else{const s=Math.floor(Math.random()*50)+10,o=Math.floor(Math.random()*50)+10,a=s+o;e={title:`${s} + ${o} = ?`,options:[a,a+5,a-5,a+10].sort(()=>Math.random()-.5),answer:a}}this.currentQuestion=e,this.updateQuestionUI()},renderGameMedia(e){if(!e||!e.mediaType||e.mediaType==="none"||!e.mediaUrl)return"";const t="w-full flex justify-center mb-6 max-h-48 overflow-hidden rounded-2xl bg-slate-50 border border-slate-100";return e.mediaType==="image"?`<div class="${t}"><img src="${e.mediaUrl}" class="max-w-full h-auto object-contain"></div>`:e.mediaType==="video"?`<div class="${t}"><video src="${e.mediaUrl}" controls class="max-w-full h-full"></video></div>`:e.mediaType==="audio"?`
                <div class="w-full flex flex-col items-center gap-2 mb-6 p-4 bg-blue-50 rounded-2xl border border-blue-100">
                    <div class="text-4xl animate-pulse">🔊</div>
                    <audio src="${e.mediaUrl}" controls class="w-full h-10"></audio>
                </div>
            `:""},updateQuestionUI(){const e=this.currentQuestion;if(!e)return;const t=document.getElementById("tow-question"),n=document.getElementById("tow-options");!t||!n||(t.innerHTML=`
            ${this.renderGameMedia(e)}
            <div class="px-2">${e.title}</div>
        `,n.innerHTML=e.options.map(i=>`
            <button onclick="GameLibrary.games.tug_of_war.handleAnswer(event, '${i}')" class="group relative overflow-hidden py-4 md:py-5 bg-slate-50 border-2 border-slate-100 rounded-2xl font-black text-lg md:text-xl text-slate-800 hover:border-blue-500 hover:text-blue-600 transition-all transform active:scale-95 shadow-sm">
                <span class="relative z-10">${i}</span>
                <div class="absolute inset-0 bg-blue-50 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
        `).join(""))},async handleAnswer(e,t){if(!this.currentQuestion)return;const n=this.currentQuestion.answer,i=e.currentTarget;String(t)===String(n)?(window.UI&&window.UI.playSound&&window.UI.playSound("correct"),i.classList.add("bg-green-500","text-white","border-green-600"),this.pointForTeam(),setTimeout(()=>{this.nextQuestion()},500)):(window.UI&&window.UI.playSound&&window.UI.playSound("error"),i.classList.add("bg-red-500","text-white","border-red-600","animate-shake"),setTimeout(()=>{i.classList.remove("bg-red-500","text-white","border-red-600","animate-shake")},500))},async checkAnswer(e,t,n){if(String(t)===String(n))window.UI&&window.UI.playSound&&window.UI.playSound("correct"),e.currentTarget.classList.add("bg-green-500","text-white","border-green-600"),setTimeout(()=>{this.pointForTeam(),this.nextQuestion()},300);else{window.UI&&window.UI.playSound&&window.UI.playSound("error");const i=e.currentTarget;i.classList.add("bg-red-500","text-white","border-red-600","animate-shake"),setTimeout(()=>{i.classList.remove("bg-red-500","text-white","border-red-600","animate-shake")},500)}},async pointForTeam(){const e=this.tempStudentName||localStorage.getItem("eduMathName"),t=this.state.teamA.includes(e)?"A":this.state.teamB.includes(e)?"B":null;if(!t)return;const n=t==="A"?-1:1,i=t==="A"?this.state.scoreA+1:this.state.scoreA,s=t==="B"?this.state.scoreB+1:this.state.scoreB,o=this.state.ropePos+n,a=15;let r=null;o<=-a&&(r="A"),o>=a&&(r="B");try{await db.collection("game_sessions").doc(this.sessionId).update({scoreA:i,scoreB:s,ropePos:o,status:r?"finished":"playing",winningTeam:r})}catch(l){console.error("Sync failed:",l)}},renderEndScreen(){const e=this.state.winningTeam,t=e==="A"?(this.state.teamAName||"ĐỘI A").toUpperCase():(this.state.teamBName||"ĐỘI B").toUpperCase(),n=e==="A"?"bg-rose-500":"bg-blue-600",i=this.tempStudentName||localStorage.getItem("eduMathName"),s=e==="A"&&this.state.teamA.includes(i)||e==="B"&&this.state.teamB.includes(i);this.role==="teacher"&&e&&!this.playedWinSound&&(this.stopBgMusic(),this.sounds&&this.sounds.win&&this.sounds.win.play().catch(o=>console.log("Win sound error:",o)),this.playedWinSound=!0),this.container.innerHTML=`
            <div class="flex flex-col items-center justify-center h-full p-10 text-center bg-slate-900 text-white animate-fade-in font-['Be_Vietnam_Pro']">
                <div class="relative mb-12">
                    <div class="text-[120px] filter drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] animate-bounce-slow">🏆</div>
                    <div class="absolute inset-0 animate-ping opacity-20">🏆</div>
                </div>
                
                <h2 class="text-[13px] font-black text-yellow-400 uppercase tracking-[0.5em] mb-4">KẾT THÚC TRẬN ĐẤU</h2>
                <div class="${n} px-10 py-5 rounded-[40px] shadow-2xl scale-125 mb-16 border-4 border-white">
                    <h3 class="text-4xl font-black uppercase italic tracking-tighter">${t} QUÁN QUÂN!</h3>
                </div>

                <div class="flex flex-wrap justify-center gap-4 max-w-2xl mb-12">
                    ${(e==="A"?this.state.teamA:this.state.teamB).map(o=>`
                        <div class="bg-white/10 px-4 py-2 rounded-2xl font-black text-sm border border-white/20">🌟 ${o}</div>
                    `).join("")}
                </div>

                ${this.role==="teacher"?`
                    <div class="flex gap-4">
                        <button onclick="GameLibrary.games.tug_of_war.renderLobby()" class="bg-white text-slate-900 font-black px-12 py-5 rounded-3xl shadow-xl hover:scale-110 active:scale-95 transition-all text-sm uppercase tracking-widest">
                            Quay lại Sảnh 🏠
                        </button>
                        <button onclick="window.close()" class="bg-blue-600 text-white font-black px-12 py-5 rounded-3xl shadow-xl hover:scale-110 active:scale-95 transition-all text-sm uppercase tracking-widest">
                            Thoát Game 🚪
                        </button>
                    </div>
                `:`
                    <div class="text-xl font-bold italic opacity-60">
                        ${s?"Chúc mừng bạn và đồng đội! 🎉":"Đừng nản chí, lần sau cố gắng hơn nhé! ❤️"}
                    </div>
                `}
            </div>
        `},cleanup(){this.unsubscribe&&this.unsubscribe(),this.unsubscribeGlobal&&this.unsubscribeGlobal()}},he={container:null,onClose:null,state:{phase:"setup",questions:[],currentIndex:0,score:0,correctCount:0,incorrectCount:0,distractorCount:3,selectedLesson:null,currentSet:1,lessonPeriod:"133",currentOptions:[],currentCorrectIdx:-1},async start(e,t,n){if(this.container=e,this.onClose=n,this.state.lessonPeriod=window.router&&window.router.currentLessonPeriod||"133",this.initSounds(),this.resetState(),this.state.autoConfig=null,window.db)try{const o=await window.db.collection("exam_configs").doc(this.state.lessonPeriod).get();o.exists&&(this.state.autoConfig=o.data())}catch(o){console.error("Error fetching exam_configs",o)}const i=localStorage.getItem("userRole"),s=i==="teacher"||i==="admin";if(this.state.autoConfig&&this.state.autoConfig.active&&!s){this.container.innerHTML=`<div class="w-full h-full flex items-center justify-center bg-slate-50 font-['Nunito']"><div class="text-indigo-600 font-bold text-xl animate-pulse">⏳ Đang sinh đề thi cho em...</div></div>`;const o=await window.QuestionBankManager.getQuestions({periods:this.state.autoConfig.periods,countsPerLevel:this.state.autoConfig.countsPerLevel});this.state.questions=o,this.state.distractorCount=3,setTimeout(()=>this.startGame(),1e3);return}this.loadCurrentSet(),this.render()},resetState(){this.state.phase="setup",this.state.currentIndex=0,this.state.score=0,this.state.correctCount=0,this.state.incorrectCount=0,this.state.distractorCount=3},loadCurrentSet(){const e=`ChoiceGame_Data_${this.state.lessonPeriod}_Set_${this.state.currentSet}`,t=localStorage.getItem(e);if(t)try{this.state.questions=JSON.parse(t)}catch{this.state.questions=[]}else this.state.questions=[]},initSounds(){const e=window.location.pathname.includes("/games/")?"../":"./";this.sounds={bg:new Audio(`${e}assets/audio/Quizi.mp3`),win:new Audio(`${e}assets/audio/votay.mp3`),correct:new Audio(`${e}assets/audio/correct.mp3`),wrong:new Audio(`${e}assets/audio/error.mp3`)},this.sounds.bg.loop=!0,this.sounds.bg.volume=.4},playBgMusic(){this.sounds&&this.sounds.bg&&(this.sounds.bg.currentTime=0,this.sounds.bg.play().catch(e=>console.log("Audio play failed:",e)))},stopBgMusic(){this.sounds&&this.sounds.bg&&this.sounds.bg.pause()},saveCurrentSet(){const e=`ChoiceGame_Data_${this.state.lessonPeriod}_Set_${this.state.currentSet}`;localStorage.setItem(e,JSON.stringify(this.state.questions))},render(){this.state.phase==="setup"?this.renderSetup():this.state.phase==="playing"?this.renderGame():this.state.phase==="editor"?this.renderEditor():this.renderSummary()},renderSetup(){this.container.innerHTML=`
            <div class="w-full h-full flex flex-col bg-slate-50 font-['Be_Vietnam_Pro'] overflow-hidden">
                <!-- Header -->
                <div class="p-6 bg-white border-b flex justify-between items-center shadow-sm shrink-0">
                    <div class="flex items-center gap-4">
                        <button onclick="window.close()" class="group flex items-center gap-2 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-blue-600 rounded-xl font-black text-[10px] shadow-sm transition-all active:scale-95 border border-blue-100 mr-2">
                             <span class="w-5 h-5 bg-blue-600 text-white rounded-lg flex items-center justify-center text-[10px]">E</span>
                             <span class="uppercase tracking-widest group-hover:translate-x-0.5 transition-transform">QUAY LẠI</span>
                        </button>
                        <div class="bg-indigo-600 p-3 rounded-2xl text-white">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <div>
                            <h2 class="text-2xl font-black text-slate-800 uppercase tracking-tight">Game Trắc Nghiệm</h2>
                            <p class="text-slate-500 font-bold">Tiết học: <span class="text-indigo-600">${this.state.lessonPeriod}</span> | Bài: <span class="text-indigo-600">${this.state.currentSet}</span></p>
                        </div>
                    </div>
                </div>

                <!-- Setup Content -->
                <div class="flex-grow overflow-y-auto p-8 custom-scrollbar">
                    <div class="max-w-5xl mx-auto space-y-8">
                        
                        <!-- Configuration Card -->
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <!-- Set Selection -->
                            <div class="bg-white p-6 rounded-[32px] shadow-xl border border-slate-100 space-y-4">
                                <label class="block text-xs font-black text-slate-400 uppercase tracking-widest px-1">Chọn Bộ Câu Hỏi (Bài)</label>
                                <div class="grid grid-cols-3 gap-2">
                                    ${[1,2,3,4,5].map(e=>`
                                        <button onclick="ChoiceGame.selectSet(${e})" 
                                            class="py-3 rounded-2xl font-black transition-all ${this.state.currentSet===e?"bg-indigo-600 text-white shadow-lg":"bg-slate-50 text-slate-400 hover:bg-slate-100"}">
                                            ${e}
                                        </button>
                                    `).join("")}
                                </div>
                                <p class="text-[10px] text-center text-slate-400 font-bold uppercase">Đang chọn: BÀI ${this.state.currentSet}</p>
                            </div>

                            <!-- Distractor Config -->
                            <div class="bg-white p-6 rounded-[32px] shadow-xl border border-slate-100 space-y-4">
                                <label class="block text-xs font-black text-slate-400 uppercase tracking-widest px-1">Cấu hình Đáp án</label>
                                <div class="flex gap-2">
                                    ${[1,2,3].map(e=>`
                                        <button onclick="ChoiceGame.setDistractors(${e})" 
                                            class="flex-1 py-3 rounded-2xl font-black transition-all ${this.state.distractorCount===e?"bg-emerald-500 text-white shadow-lg":"bg-slate-50 text-slate-400 hover:bg-slate-100"}">
                                            ${e+1}
                                        </button>
                                    `).join("")}
                                </div>
                                <p class="text-[10px] text-center text-slate-400 font-bold uppercase">Tổng: ${this.state.distractorCount+1} phương án</p>
                            </div>

                            <!-- Editor Quick Access -->
                            <div class="bg-indigo-900 p-6 rounded-[32px] shadow-xl text-white flex flex-col justify-center items-center gap-4">
                                <div class="text-center">
                                    <p class="text-[10px] font-black uppercase text-indigo-300 tracking-widest mb-1">Tự soạn nội dung</p>
                                    <h3 class="text-xl font-black">CHẾ ĐỘ BIÊN TẬP</h3>
                                </div>
                                <button onclick="ChoiceGame.openEditor()" class="w-full bg-white text-indigo-900 py-3 rounded-2xl font-black uppercase tracking-wider hover:bg-yellow-400 transition-all active:scale-95 shadow-lg">
                                    MỞ TRÌNH SOẠN ✍️
                                </button>
                            </div>
                        </div>

                        <!-- Auto Config (Teacher Only Sync) -->
                        <div class="bg-gradient-to-br from-indigo-50 to-blue-50 border-2 border-indigo-100 p-6 rounded-[32px] shadow-sm relative overflow-hidden">
                            <div class="absolute -right-10 -top-10 text-9xl opacity-5">🤖</div>
                            <div class="flex items-center gap-2 mb-4">
                                <span class="bg-indigo-600 text-white text-[10px] uppercase font-black px-2 py-1 rounded-lg">Mới</span>
                                <h3 class="font-black text-indigo-900 uppercase tracking-tight">Cấu hình Đề tự động (Đồng Bộ Học Sinh)</h3>
                            </div>
                            <p class="text-xs text-slate-500 font-bold mb-4">Mỗi học sinh sẽ sinh ngẫu nhiên 1 đề riêng biệt dựa trên cấu hình dưới đây. Nhấn Kích hoạt để thay thế chế độ Bài Thủ Công.</p>
                            
                            <div class="flex flex-wrap gap-4 items-end">
                                <div class="flex gap-2">
                                    <input type="text" id="cg-auto-from" value="${this.state.autoConfig&&this.state.autoConfig.fromText||""}" class="w-20 bg-white border border-slate-200 rounded-xl px-3 py-2 font-bold text-slate-700 text-sm" placeholder="Từ Tiết">
                                    <input type="text" id="cg-auto-to" value="${this.state.autoConfig&&this.state.autoConfig.toText||""}" class="w-20 bg-white border border-slate-200 rounded-xl px-3 py-2 font-bold text-slate-700 text-sm" placeholder="Đến Tiết">
                                </div>
                                <div class="flex gap-2 bg-white rounded-xl border border-slate-200 p-1">
                                    <input type="number" id="cg-auto-l1" value="${this.state.autoConfig?this.state.autoConfig.countsPerLevel[1]||0:""}" class="w-14 bg-transparent outline-none text-center font-bold text-emerald-600 text-sm" placeholder="M1">
                                    <input type="number" id="cg-auto-l2" value="${this.state.autoConfig?this.state.autoConfig.countsPerLevel[2]||0:""}" class="w-14 bg-slate-50 outline-none text-center font-bold text-amber-500 text-sm rounded-lg" placeholder="M2">
                                    <input type="number" id="cg-auto-l3" value="${this.state.autoConfig?this.state.autoConfig.countsPerLevel[3]||0:""}" class="w-14 bg-transparent outline-none text-center font-bold text-rose-500 text-sm" placeholder="M3">
                                </div>
                                <button onclick="ChoiceGame.saveAutoConfig()" class="${this.state.autoConfig&&this.state.autoConfig.active?"bg-emerald-500 hover:bg-emerald-600":"bg-indigo-600 hover:bg-indigo-700"} text-white px-6 py-2 rounded-xl font-black shadow transition-all flex items-center gap-2">
                                    ${this.state.autoConfig&&this.state.autoConfig.active?"🔄 CẬP NHẬT":"⚡ KÍCH HOẠT"}
                                </button>
                                ${this.state.autoConfig&&this.state.autoConfig.active?`
                                    <button onclick="ChoiceGame.disableAutoConfig()" class="bg-rose-100 text-rose-600 px-4 py-2 rounded-xl font-bold hover:bg-rose-200 transition-all text-sm">
                                        Tắt Đồng Bộ
                                    </button>
                                `:""}
                            </div>
                        </div>

                        <!-- Data Source & Play -->
                        <div class="bg-white p-8 rounded-[40px] shadow-2xl border border-slate-100 flex flex-col md:flex-row items-center gap-8">
                             <div class="flex-grow space-y-4 w-full">
                                <label class="block text-xs font-black text-slate-400 uppercase tracking-widest px-1">Lấy từ thư viện bài học</label>
                                <div class="flex gap-4">
                                    <select id="lesson-selector" class="flex-grow bg-slate-100 border-none rounded-2xl px-6 py-4 font-bold text-slate-700 outline-none focus:ring-2 ring-indigo-500 transition-all cursor-pointer">
                                        <option value="">-- Chọn bài học mẫu --</option>
                                        <option value="124">Bài 53: Thể tích hình lập phương</option>
                                        <option value="124CD">Bài 53 (CD): Thể tích hình lập phương</option>
                                        <option value="111">Bài 47: Mét khối</option>
                                    </select>
                                    <button onclick="ChoiceGame.loadLesson()" class="bg-indigo-50 text-indigo-600 hover:bg-indigo-100 px-6 rounded-2xl font-black transition-all flex items-center justify-center gap-2">
                                        NHẬP 📥
                                    </button>
                                </div>
                             </div>

                             <div class="shrink-0 w-full md:w-auto">
                                <button onclick="ChoiceGame.startGame()" id="start-game-btn" 
                                    class="w-full md:w-auto bg-gradient-to-r from-yellow-400 to-orange-500 text-indigo-900 px-12 py-6 rounded-[2rem] font-black text-2xl uppercase tracking-[0.2em] shadow-[0_20px_40px_rgba(245,158,11,0.3)] hover:scale-105 transition-all active:scale-95 disabled:opacity-50 disabled:grayscale" 
                                    ${this.state.questions.length===0?"disabled":""}>
                                    BẮT ĐẦU CHƠI 🚀
                                </button>
                             </div>
                        </div>

                        <!-- Questions Preview -->
                        <div id="questions-preview" class="space-y-4">
                            ${this.renderQuestionsPreview()}
                        </div>
                    </div>
                </div>
            </div>

                        <!-- Questions Preview -->
                        <div id="questions-preview" class="space-y-4">
                            ${this.renderQuestionsPreview()}
                        </div>
                    </div>
                </div>
            </div>

            <style>
                .custom-scrollbar::-webkit-scrollbar { width: 6px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
            </style>
        `},async saveAutoConfig(){const e=document.getElementById("cg-auto-from").value.trim(),t=document.getElementById("cg-auto-to").value.trim(),n=parseInt(document.getElementById("cg-auto-l1").value)||0,i=parseInt(document.getElementById("cg-auto-l2").value)||0,s=parseInt(document.getElementById("cg-auto-l3").value)||0;if(!e&&!t)return alert("Cần nhập ít nhất 1 Tiết học bắt đầu!");if(n+i+s===0)return alert("Cần thiết lập số lượng câu hỏi M1/M2/M3!");if(!window.db)return alert("Tính năng đồng bộ cần kết nối mạng (Firebase).");let o=[];if(isNaN(e)||isNaN(t))e&&o.push(e),t&&t!==e&&o.push(t);else{const r=parseInt(e)||1,l=parseInt(t)||175;for(let d=r;d<=l;d++)o.push(d)}const a=event.currentTarget;a.innerHTML,a.innerHTML="⏳ ĐANG LƯU...",a.disabled=!0;try{const r={active:!0,periods:o,fromText:e,toText:t,countsPerLevel:{1:n,2:i,3:s},updatedAt:firebase.firestore.FieldValue.serverTimestamp()};await window.db.collection("exam_configs").doc(this.state.lessonPeriod).set(r),this.state.autoConfig=r,alert("Đã kích hoạt đồng bộ cấu hình! Tất cả học sinh mở Tiết này sẽ lấy đề ngẫu nhiên theo thiết lập trên."),this.renderSetup()}catch(r){alert("Lỗi lưu cấu hình: "+r.message)}},async disableAutoConfig(){if(confirm("Tắt đồng bộ đề ngẫu nhiên? Học sinh mở Game sẽ trở lại cấu hình thủ công (Bài 1, Bài 2...)."))try{await window.db.collection("exam_configs").doc(this.state.lessonPeriod).update({active:!1}),this.state.autoConfig.active=!1,this.renderSetup()}catch(e){console.error(e)}},selectSet(e){this.state.currentSet=e,this.loadCurrentSet(),this.renderSetup()},showSummary(){this.stopBgMusic(),this.sounds&&this.sounds.win&&this.sounds.win.play(),this.state.phase="summary",this.render()},openEditor(){this.state.phase="editor",this.render()},setDistractors(e){this.state.distractorCount=e,this.renderSetup()},async loadLesson(){const e=document.getElementById("lesson-selector").value;if(e)try{const t=window[`lesson${e}`];t&&t.quizPool?(this.state.questions=JSON.parse(JSON.stringify(t.quizPool)),this.saveCurrentSet(),this.renderSetup()):alert(`Không tìm thấy dữ liệu bài ${e}. Bạn hãy mở bài học này trước để hệ thống tải dữ liệu nhé!`)}catch(t){console.error(t)}},renderQuestionsPreview(){return this.state.questions.length===0?`
            <div class="h-40 flex flex-col items-center justify-center bg-slate-100/50 rounded-[2rem] border-2 border-dashed border-slate-200 text-slate-400 italic">
                <span class="text-4xl mb-2 opacity-50">📭</span>
                Chưa có câu hỏi nào trong Bộ ${this.state.currentSet}
            </div>
        `:`
            <div class="flex items-center justify-between mb-4">
                <h4 class="text-xl font-black text-slate-800">Preview Bài ${this.state.currentSet} (${this.state.questions.length})</h4>
                <button onclick="ChoiceGame.clearQuestions()" class="text-rose-500 font-bold text-sm hover:underline">Xóa tất cả</button>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${this.state.questions.map((e,t)=>{const n=Array.isArray(e.options)?e.options[e.answer]:"N/A";return`
                        <div class="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-3 relative group">
                            <span class="bg-indigo-50 text-indigo-600 w-6 h-6 rounded-lg flex items-center justify-center text-[11px] font-black shrink-0">${t+1}</span>
                            <div class="flex-grow overflow-hidden">
                                <p class="font-bold text-slate-700 truncate">${e.question}</p>
                                <p class="text-[11px] text-emerald-600 font-black uppercase tracking-wider mt-1">Đúng: ${n}</p>
                            </div>
                            <button onclick="ChoiceGame.deleteQuestion(${t})" class="opacity-0 group-hover:opacity-100 absolute top-2 right-2 w-6 h-6 bg-rose-100 text-rose-600 rounded-lg flex items-center justify-center hover:bg-rose-500 hover:text-white transition-all">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                        </div>
                    `}).join("")}
            </div>
        `},renderEditor(){let e=this.state.questions.length>0?this.state.questions:[{question:"",options:["","","",""],answer:0}];this.container.innerHTML=`
            <div class="w-full h-full flex flex-col bg-slate-100 font-['Be_Vietnam_Pro'] overflow-hidden">
                <!-- Editor Header -->
                <div class="p-6 bg-white border-b flex justify-between items-center shadow-md z-10">
                    <div class="flex items-center gap-4">
                        <button onclick="ChoiceGame.state.phase = 'setup'; ChoiceGame.render();" class="p-2 hover:bg-slate-100 rounded-xl transition-all">
                            <svg class="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"></path></svg>
                        </button>
                        <div>
                            <h2 class="text-2xl font-black text-slate-800 uppercase tracking-tight">Biên tập: BÀI ${this.state.currentSet}</h2>
                            <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Tiết: ${this.state.lessonPeriod} • Soạn nội dung trắc nghiệm</p>
                        </div>
                    </div>
                    
                    <div class="flex gap-3">
                        <button onclick="ChoiceGame.addEditorRow()" class="bg-indigo-50 text-indigo-700 px-6 py-3 rounded-2xl font-black hover:bg-indigo-100 transition-all flex items-center gap-2">
                            ➕ THÊM CÂU
                        </button>
                        <button onclick="ChoiceGame.saveEditor()" class="bg-indigo-600 text-white px-8 py-3 rounded-2xl font-black shadow-lg hover:bg-indigo-700 transition-all active:scale-95 flex items-center gap-2">
                            LƯU DỮ LIỆU 💾
                        </button>
                    </div>
                </div>

                <!-- Editor Grid -->
                <div class="flex-grow overflow-y-auto p-8 custom-scrollbar">
                    <div id="choice-editor-rows" class="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 pb-20">
                        ${e.map((t,n)=>this.renderEditorRow(n,t)).join("")}
                    </div>
                </div>
            </div>
        `},renderEditorRow(e,t){const n=t.mediaType||"none",i=t.mediaUrl||"";return`
            <div class="bg-white p-8 rounded-[2.5rem] shadow-lg border border-slate-200 relative group animate-fade-in editor-row" data-index="${e}" data-media-type="${n}">
                <div class="absolute -left-3 top-8 w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-black shadow-lg z-10">${e+1}</div>
                <button onclick="this.closest('[data-index]').remove()" class="absolute -right-3 -top-3 w-10 h-10 bg-rose-100 text-rose-500 hover:bg-rose-500 hover:text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-md z-10">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                
                <div class="space-y-6">
                    <!-- Media Helper -->
                    <div class="bg-indigo-50/50 p-4 rounded-3xl border border-indigo-100/50 space-y-3" data-idx="${e}">
                        <div class="flex items-center justify-between">
                            <label class="text-[10px] font-black uppercase text-indigo-400 ml-2">Đính kèm Đa phương tiện</label>
                            <div class="flex bg-white rounded-xl p-1 gap-1 border border-indigo-100">
                                ${["none","image","video","audio"].map(s=>`
                                    <button onclick="ChoiceGame.setMediaType(${e}, '${s}')" 
                                        class="ed-m-type-${e} px-3 py-1 rounded-lg text-[9px] font-black uppercase transition-all ${n===s?"bg-indigo-600 text-white":"text-indigo-300 hover:bg-indigo-50"}">
                                        ${s==="none"?"KO":s}
                                    </button>
                                `).join("")}
                            </div>
                        </div>
                        
                        <div class="flex gap-2">
                            <input type="text" class="ed-m-url-${e} flex-grow p-3 bg-white border border-indigo-100 rounded-xl outline-none focus:border-indigo-400 font-bold text-slate-600 text-[11px]" value="${i}" placeholder="Đường dẫn file (ví dụ: assets/images/file.jpg)" oninput="ChoiceGame.updateMediaPreview(${e})">
                            <label class="shrink-0 bg-indigo-600 text-white px-4 py-2 rounded-xl font-black text-[10px] cursor-pointer hover:bg-indigo-700 flex items-center gap-2">
                                📁 CHỌN FILE
                                <input type="file" class="hidden" onchange="ChoiceGame.handleFileSelect(this, ${e})">
                            </label>
                        </div>
                        
                        <div id="ed-m-preview-${e}" class="mt-2 rounded-xl overflow-hidden bg-white/50 border border-white flex justify-center items-center h-20 text-[10px] text-slate-300 italic">
                            ${this.renderMediaPreview(n,i)}
                        </div>
                    </div>

                    <div>
                        <label class="block text-[10px] font-black uppercase text-slate-400 mb-2 ml-4">Nội dung câu hỏi</label>
                        <textarea class="ed-q w-full p-6 bg-slate-50 border-2 border-slate-100 rounded-3xl outline-none focus:border-indigo-400 font-bold text-slate-800 transition-all" rows="2" placeholder="Ví dụ: 1 + 1 bằng mấy?">${t.question}</textarea>
                    </div>

                    <div class="grid grid-cols-1 gap-3">
                        ${[0,1,2,3].map(s=>`
                            <div class="flex items-center gap-3">
                                <div class="shrink-0 w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center font-black text-xs text-slate-400">${String.fromCharCode(65+s)}</div>
                                <input type="text" class="ed-opt-${s} flex-grow p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-indigo-400 font-bold text-slate-800 text-sm transition-all" value="${t.options[s]||""}" placeholder="Đáp án ${String.fromCharCode(65+s)}">
                                <label class="flex items-center gap-2 cursor-pointer p-2 rounded-xl hover:bg-slate-50 transition-all">
                                    <input type="radio" name="correct-${e}" value="${s}" ${t.answer===s?"checked":""} class="w-5 h-5 accent-emerald-500">
                                </label>
                            </div>
                        `).join("")}
                    </div>
                </div>
            </div>
        `},setMediaType(e,t){const n=document.querySelector(`[data-index="${e}"]`);n&&(n.querySelectorAll(`.ed-m-type-${e}`).forEach(i=>{i.classList.remove("bg-indigo-600","text-white"),i.classList.add("text-indigo-300","hover:bg-indigo-50"),(i.innerText.toLowerCase()===t||t==="none"&&i.innerText==="KO")&&(i.classList.add("bg-indigo-600","text-white"),i.classList.remove("text-indigo-300","hover:bg-indigo-50"))}),n.dataset.mediaType=t,this.updateMediaPreview(e))},async handleFileSelect(e,t){var r;if(!e.files||!e.files[0])return;const n=e.files[0];e.closest("[data-index]").dataset.mediaType;const s=document.querySelector(`.ed-m-url-${t}`),o=e.closest("label"),a=o.innerHTML;o.style.pointerEvents="none",o.style.opacity="0.7",o.innerHTML="⏳ ĐANG TẢI...";try{if(typeof storage<"u"&&storage){const l=((r=window.router)==null?void 0:r.currentLesson)||"unit_unknown",d=n.type.startsWith("assets/assets/video/")?"video":n.type.startsWith("audio/")?"am_thanh":"hinh_anh",c=`choice_game_media/${l}/${d}/${Date.now()}_${n.name}`,g=await(await storage.ref(c).put(n)).ref.getDownloadURL();s&&(s.value=g);let m="image";n.type.startsWith("assets/assets/video/")?m="video":n.type.startsWith("audio/")&&(m="audio"),this.setMediaType(t,m)}else{let l="assets/images/",d="image";n.type.startsWith("assets/assets/video/")?(l="assets/assets/video/",d="video"):n.type.startsWith("audio/")&&(l="assets/audio/",d="audio"),s&&(s.value=l+n.name),this.setMediaType(t,d),alert("Đã nhận diện file local. Lưu ý: Copy file vào thư mục "+l+" trong dự án.")}}catch(l){console.error("Upload error:",l),alert("Lỗi khi tải file: "+l.message)}finally{o.style.pointerEvents="auto",o.style.opacity="1",o.innerHTML=a}},updateMediaPreview(e){const t=document.querySelector(`[data-index="${e}"]`),n=t.querySelector(`.ed-m-url-${e}`),i=n?n.value:"",s=t.dataset.mediaType||"none",o=document.getElementById(`ed-m-preview-${e}`);o&&(o.innerHTML=this.renderMediaPreview(s,i))},renderMediaPreview(e,t){return e==="none"||!t?"Không có media":e==="image"?`<img src="${t}" class="h-full w-auto object-contain">`:e==="video"?`<div class="bg-indigo-100 px-3 py-1 rounded text-indigo-600 font-black">VIDEO: ${t.split("/").pop()}</div>`:e==="audio"?`<div class="bg-emerald-100 px-3 py-1 rounded text-emerald-600 font-black">AUDIO: ${t.split("/").pop()}</div>`:"Media lỗi"},addEditorRow(){const e=document.getElementById("choice-editor-rows"),t=e.children.length,n=document.createElement("div");n.innerHTML=this.renderEditorRow(t,{question:"",options:["","","",""],answer:0,mediaType:"none",mediaUrl:""}),e.appendChild(n.firstElementChild)},saveEditor(){const e=document.querySelectorAll("#choice-editor-rows > div"),t=[];if(e.forEach(n=>{const i=n.dataset.index,s=n.querySelector(".ed-q").value.trim();if(!s)return;const o=[n.querySelector(".ed-opt-0").value.trim(),n.querySelector(".ed-opt-1").value.trim(),n.querySelector(".ed-opt-2").value.trim(),n.querySelector(".ed-opt-3").value.trim()],a=n.querySelector('input[type="radio"]:checked'),r=a?parseInt(a.value):0,l=n.dataset.mediaType||"none",d=n.querySelector(`.ed-m-url-${i}`).value.trim();t.push({question:s,options:o,answer:r,mediaType:l,mediaUrl:d})}),t.length===0){alert("Vui lòng nhập ít nhất một câu hỏi!");return}this.state.questions=t,this.saveCurrentSet(),alert(`Đã lưu BÀI ${this.state.currentSet} thành công!`),this.state.phase="setup",this.render()},deleteQuestion(e){this.state.questions.splice(e,1),this.saveCurrentSet(),this.renderSetup()},clearQuestions(){confirm(`Bạn muốn xóa tất cả câu hỏi trong BÀI ${this.state.currentSet}?`)&&(this.state.questions=[],this.saveCurrentSet(),this.renderSetup())},startGame(){if(this.state.questions.length===0){alert("Vui lòng nhập câu hỏi trước khi bắt đầu!");return}this.state.phase="playing",this.state.currentIndex=0,this.state.score=0,this.state.correctCount=0,this.state.incorrectCount=0,this.playBgMusic(),this.render()},exitGame(){this.stopBgMusic(),this.state.phase="setup",this.render()},prepareQuestion(){const e=this.state.questions[this.state.currentIndex];let t=[...e.options];const n=typeof e.answer=="number"?e.answer:parseInt(e.answer),i=t[n]!==void 0?t[n]:e.answer;if(this.state.distractorCount<t.length-1){let s=t.filter((o,a)=>a!==n&&o!==e.answer);s=s.sort(()=>Math.random()-.5).slice(0,this.state.distractorCount),t=[...s,i].sort(()=>Math.random()-.5)}else t=t.sort(()=>Math.random()-.5);this.state.currentOptions=t,this.state.currentCorrectIdx=t.indexOf(i),this.state.hasAnswered=!1,this.state.selectedIdx=-1},renderGame(){const e=this.state.questions[this.state.currentIndex],t=this.state.currentIndex/this.state.questions.length*100,n=this.state.currentOptions,i=this.state.currentCorrectIdx;this.container.innerHTML=`
            <div class="w-full h-full flex flex-col bg-indigo-50 font-['Be_Vietnam_Pro'] overflow-hidden">
                
                <!-- Game Status Header -->
                <div class="p-4 md:p-6 bg-white border-b shadow-sm shrink-0">
                    <div class="max-w-5xl mx-auto flex items-center justify-between gap-6">
                        <div class="flex-grow space-y-2">
                            <div class="flex justify-between text-sm font-black text-slate-400 uppercase tracking-widest">
                                <span>Tiến trình</span>
                                <span>Câu hỏi ${this.state.currentIndex+1} / ${this.state.questions.length}</span>
                            </div>
                            <div class="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                                <div class="h-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-500 rounded-full" style="width: ${t}%"></div>
                            </div>
                        </div>
                        
                        <div class="flex items-center gap-4 bg-slate-100 p-2 pr-4 rounded-2xl shrink-0">
                             <div class="flex items-center gap-2">
                                <span class="bg-green-500 text-white w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black">✓ Đúng</span>
                                <span class="text-green-600 font-black text-xl" id="ui-correct-count">${this.state.correctCount}</span>
                             </div>
                             <div class="flex items-center gap-2">
                                <span class="bg-rose-500 text-white w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black">× Sai</span>
                                <span class="text-rose-600 font-black text-xl" id="ui-incorrect-count">${this.state.incorrectCount}</span>
                             </div>
                        </div>
                    </div>
                </div>

                <!-- Main Gameplay Area -->
                <div class="flex-grow flex flex-col items-center justify-center p-6 relative">
                    <div class="w-full max-w-4xl bg-white rounded-[48px] shadow-2xl p-8 md:p-12 border border-white relative overflow-hidden group">
                        <!-- Icon Trang trí -->
                        <div class="absolute -top-10 -left-10 w-40 h-40 bg-indigo-50 rounded-full opacity-50 -z-0"></div>
                        
                        <!-- Câu hỏi -->
                        <div class="relative z-10 space-y-8">
                            
                            <!-- Media Display -->
                            ${this.renderGameMedia(e)}

                            <div class="flex items-start gap-4 justify-center">
                                <div class="bg-indigo-600 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shrink-0 shadow-lg font-black text-xl md:text-2xl mt-1">
                                    ${this.state.currentIndex+1}
                                </div>
                                <h3 class="text-2xl md:text-3xl font-black text-slate-800 text-left leading-tight pt-1">
                                    ${e.question.replace(/^(Bài|Câu)\s+\d+[:.]?\s*/i,"")}
                                </h3>
                            </div>

                            <!-- Các phương án -->
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                ${n.map((s,o)=>{let a="";return this.state.hasAnswered&&(o===i?a="answer-correct":o===this.state.selectedIdx&&(a="answer-incorrect")),`
                                        <button onclick="ChoiceGame.checkAnswer(${o})" 
                                            ${this.state.hasAnswered?"disabled":""}
                                            class="choice-btn group py-5 px-8 bg-slate-50 border-2 border-slate-100 rounded-3xl text-xl font-bold text-slate-600 hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-700 transition-all text-left flex items-center gap-4 relative overflow-hidden ${a}">
                                            <span class="w-10 h-10 bg-white border-2 border-slate-200 rounded-xl flex items-center justify-center text-slate-400 group-hover:border-indigo-200 group-hover:text-indigo-500 transition-colors">${String.fromCharCode(65+o)}</span>
                                            <span class="flex-grow">${s}</span>
                                        </button>
                                    `}).join("")}
                            </div>
                        </div>
                    </div>

                    <!-- Teacher Reporting Panel -->
                    <div id="reporting-panel" class="mt-8 flex gap-4 transition-all duration-300 ${this.state.hasAnswered?"opacity-100 translate-y-0":"opacity-0 pointer-events-none translate-y-4"}">
                         <div class="bg-white p-4 rounded-3xl shadow-xl border border-indigo-100 flex items-center gap-6">
                            <span class="text-slate-500 font-black uppercase text-xs tracking-widest pl-2">Ghi nhận học sinh:</span>
                            <div class="flex gap-2">
                                <button onclick="ChoiceGame.reportResult(true)" class="bg-green-100 text-green-700 hover:bg-green-500 hover:text-white px-6 py-3 rounded-2xl font-black transition-all flex items-center gap-2">
                                    <span>ĐÚNG</span>
                                    <span class="bg-white/20 px-2 py-0.5 rounded-lg text-xs">+1</span>
                                </button>
                                <button onclick="ChoiceGame.reportResult(false)" class="bg-rose-100 text-rose-700 hover:bg-rose-500 hover:text-white px-6 py-3 rounded-2xl font-black transition-all flex items-center gap-2">
                                    <span>SAI</span>
                                    <span class="bg-white/20 px-2 py-0.5 rounded-lg text-xs">+1</span>
                                </button>
                            </div>
                            <button onclick="ChoiceGame.nextQuestion()" class="bg-indigo-600 text-white px-8 py-3 rounded-2xl font-black shadow-lg hover:bg-indigo-700 ml-4">
                                ${this.state.currentIndex<this.state.questions.length-1?"CÂU TIẾP THEO ➜":"XEM KẾT QUẢ 🏅"}
                            </button>
                         </div>
                    </div>
                </div>
            </div>
        `},renderGameMedia(e){if(!e.mediaType||e.mediaType==="none"||!e.mediaUrl)return"";let t="";return e.mediaType==="image"?t=`<img src="${e.mediaUrl}" class="max-h-[250px] w-auto mx-auto rounded-3xl shadow-xl border-4 border-white">`:e.mediaType==="video"?t=`<video src="${e.mediaUrl}" class="max-h-[250px] w-auto mx-auto rounded-3xl shadow-xl" controls autoplay></video>`:e.mediaType==="audio"&&(t=`
                <div class="bg-indigo-600 p-4 rounded-3xl shadow-xl flex items-center gap-4 max-w-sm mx-auto">
                    <div class="animate-pulse text-2xl">🔊</div>
                    <audio src="${e.mediaUrl}" controls class="flex-grow"></audio>
                </div>
            `),`<div class="w-full flex justify-center mb-6 animate-fade-in">${t}</div>`},checkAnswer(e){if(this.state.phase!=="playing")return;this.state.questions[this.state.currentIndex];const t=e===this.state.currentCorrectIdx;t?(this.state.score+=10,this.state.correctCount++,this.sounds&&this.sounds.correct&&this.sounds.correct.play()):(this.state.incorrectCount++,this.sounds&&this.sounds.wrong&&this.sounds.wrong.play()),this.state.hasAnswered=!0,this.state.selectedIdx=e,t&&typeof confetti=="function"&&confetti({particleCount:40,spread:30,origin:{y:.7}}),this.render()},reportResult(e){e?this.state.correctCount++:this.state.incorrectCount++;const t=document.getElementById("ui-correct-count"),n=document.getElementById("ui-incorrect-count");t&&(t.innerText=this.state.correctCount),n&&(n.innerText=this.state.incorrectCount)},nextQuestion(){this.state.currentIndex<this.state.questions.length-1?(this.state.currentIndex++,this.prepareQuestion(),this.render()):(this.state.phase="summary",this.render())},renderSummary(){this.container.innerHTML=`
            <div class="w-full h-full flex flex-col items-center justify-center bg-indigo-900 font-['Nunito'] text-white p-8 relative overflow-hidden">
                <div class="relative z-10 max-w-2xl w-full bg-white/10 backdrop-blur-2xl rounded-[60px] p-12 text-center border border-white/20 shadow-[0_20px_80px_rgba(0,0,0,0.3)]">
                    <div class="text-8xl mb-8">🎖️</div>
                    <h2 class="text-5xl font-black uppercase tracking-tight mb-4 text-yellow-400">Hoàn Thành!</h2>
                    <p class="text-xl text-indigo-100 font-medium mb-12">Chúc mừng các em đã hoàn thành bộ câu hỏi!</p>

                    <div class="grid grid-cols-2 gap-6 mb-12">
                        <div class="bg-white/10 p-6 rounded-[32px] border border-white/10">
                            <span class="block text-[10px] font-black uppercase text-indigo-300 tracking-widest mb-2">Số lượt ĐÚNG</span>
                            <span class="text-5xl font-black text-green-400">${this.state.correctCount}</span>
                        </div>
                        <div class="bg-white/10 p-6 rounded-[32px] border border-white/10">
                            <span class="block text-[10px] font-black uppercase text-indigo-300 tracking-widest mb-2">Số lượt CHƯA ĐÚNG</span>
                            <span class="text-5xl font-black text-rose-400">${this.state.incorrectCount}</span>
                        </div>
                    </div>

                    <div class="flex flex-col md:flex-row gap-4">
                        <button onclick="ChoiceGame.resetState(); ChoiceGame.render();" class="flex-1 bg-white text-indigo-900 py-5 rounded-3xl font-black text-xl hover:bg-slate-100 transition-all shadow-xl active:scale-95">
                            CHƠI LẠI
                        </button>
                        <button onclick="ChoiceGame.close()" class="flex-1 bg-indigo-600 text-white py-5 rounded-3xl font-black text-xl hover:bg-indigo-700 transition-all shadow-xl active:scale-95 border border-indigo-400">
                            KẾT THÚC
                        </button>
                    </div>
                </div>

                <!-- Confetti Background Decorations -->
                <div class="absolute -top-20 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
                <div class="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
            </div>
        `,typeof confetti=="function"&&confetti({particleCount:150,spread:70,origin:{y:.6}})},close(){this.onClose&&this.onClose()},cleanup(){this.resetState()}};window.ChoiceGame=he;const te={data:[],isLoaded:!1,_quizPoolCache:{},async init(){if(!this.isLoaded){try{const e=window.location.pathname.includes("/games/")?"../":"",t=await fetch(`${e}js/data/math/question_bank.txt`);if(t.ok){const n=await t.text();this.parseData(n),console.log(`[QuestionBank] Loaded ${this.data.length} questions from question_bank.txt`)}else console.warn("[QuestionBank] File not found. Creating empty bank."),this.data=[]}catch(e){console.error("[QuestionBankFailed]",e),this.data=[]}this.isLoaded=!0}},parseData(e){const n=(e.charCodeAt(0)===65279?e.slice(1):e).split(`
`);this.data=[];for(let i of n){if(i=i.trim(),!i||i.startsWith("//")||i.startsWith("#")||i.toUpperCase().startsWith("ID"))continue;const s=i.split("|").map(u=>u.trim());if(s.length<5)continue;const o=s[0],a=s[1],r=isNaN(a)?a:parseInt(a)||0,l=parseInt(s[2])||1,d=s[3],c=s[4],h=s[5]?s[5].split(",").map(u=>u.trim()).filter(u=>u):[];this.data.push({id:o,period:r,level:l,q:d,a:c,customDistractors:h})}},generateDistractors(e,t){let n=new Set,i=e.match(/^([\d.,]+)\s*(.*)$/),s=e.match(/(\d+)\s*([a-zA-Záàãảạăắằẵẳặâấầẫẩậéèẽẻẹêếềễểệíìĩỉịóòõỏọôốồỗổộơớờỡởợúùũủụưứừữửựýỳỹỷỵđ]+)\s*(\d+)?\s*([a-zA-Záàãảạăắằẵẳặâấầẫẩậéèẽẻẹêếềễểệíìĩỉịóòõỏọôốồỗổộơớờỡởợúùũủụưứừữửựýỳỹỷỵđ]+)?/i);if(i&&!s){const a=i[1].replace(",","."),r=parseFloat(a),l=i[2]||"";if(!isNaN(r)){const d=[r*10,r/10,r+1,r-1,r+10,r-10,r+.5,r-.5,parseFloat(a.split("").reverse().join(""))].filter(c=>c>0&&c!==r).map(c=>{let h=Number.isInteger(c)?c.toString():c.toFixed(1).replace(".0","");return l?`${h} ${l}`:h});d.sort(()=>Math.random()-.5);for(let c of d)if(c!==e&&n.add(c),n.size>=3)break}}if(n.size<3&&s&&s[3]){let a=parseInt(s[1]),r=s[2],l=parseInt(s[3]),d=s[4]||"";const c=`${a+1} ${r} ${l} ${d}`.trim(),h=`${a} ${r} ${l+10} ${d}`.trim(),u=`${a-1>0?a-1:a+2} ${r} ${l} ${d}`.trim(),g=`${l} ${r} ${a} ${d}`.trim();[c,h,u,g].forEach(m=>{m!==e&&n.add(m)})}let o=[...t].filter(a=>a!==e&&a.length>0);o.sort(()=>Math.random()-.5);for(let a of o){if(n.size>=3)break;n.add(a)}for(;n.size<3;){let a=Math.floor(Math.random()*100)+1;!n.has(a.toString())&&a.toString()!==e&&n.add(a.toString())}return Array.from(n).slice(0,3)},async getQuestions(e={}){await this.init();let t=this.data;if(e.periods){const s=Array.isArray(e.periods)?e.periods:[e.periods];t=t.filter(o=>s.includes(o.period))}let n=[];if(e.countsPerLevel)for(let[s,o]of Object.entries(e.countsPerLevel)){let a=t.filter(r=>r.level==parseInt(s));a.sort(()=>Math.random()-.5),n=n.concat(a.slice(0,o))}else{let s=e.totalCount||10;n=[...t].sort(()=>Math.random()-.5).slice(0,s)}const i=Array.from(new Set(t.map(s=>s.a)));return n.map(s=>{let o=[...s.customDistractors];if(o.length<3){let l=this.generateDistractors(s.a,i);for(let d of l){if(o.length>=3)break;o.includes(d)||o.push(d)}}let a=[s.a,...o].slice(0,4);a.sort(()=>Math.random()-.5);let r=a.indexOf(s.a);return{id:s.id,period:s.period,level:s.level,question:s.q,options:a,answer:r}})},async getQuizPool(e){await this.init();const t=String(e);if(this._quizPoolCache[t])return this._quizPoolCache[t];const n=this.data.filter(s=>String(s.period)===t);if(n.length===0)return[];const i=this._toQuizPool(n);return this._quizPoolCache[t]=i,i},_toQuizPool(e){const t=Array.from(new Set(e.map(n=>n.a)));return e.map(n=>{let i=[...n.customDistractors];if(i.length<3){const a=this.generateDistractors(n.a,t);for(const r of a){if(i.length>=3)break;!i.includes(r)&&r!==n.a&&i.push(r)}}let s=[n.a,...i.filter(a=>a!==n.a)].slice(0,4);s.sort(()=>Math.random()-.5);const o=s.indexOf(n.a);return{question:n.q,options:s,answer:o}})},async hasPeriod(e){return await this.init(),this.data.some(t=>String(t.period)===String(e))},async getPeriodStats(){await this.init();const e={};return this.data.forEach(t=>{const n=String(t.period);e[n]=(e[n]||0)+1}),e}};window.QuestionBankManager=te;const Ee={renderModal(){let e=document.getElementById("qb-admin-modal");e||(e=document.createElement("div"),e.id="qb-admin-modal",e.className="fixed inset-0 z-[2147483647] bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 transition-opacity duration-300 pointer-events-auto",document.body.appendChild(e)),e.classList.remove("hidden"),e.innerHTML=`
            <div class="bg-white w-full max-w-5xl h-[90vh] rounded-[40px] shadow-2xl border border-white/20 flex flex-col overflow-hidden relative">
                <!-- Header -->
                <div class="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                    <div class="flex items-center gap-4">
                        <span class="text-4xl">🏛️</span>
                        <div>
                            <h2 class="text-3xl font-black text-slate-800 uppercase tracking-tight">Ngân Hàng Câu Hỏi Tập Trung</h2>
                            <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Quản lý Dữ liệu & Tạo Đề Tự động</p>
                        </div>
                    </div>
                    <button onclick="document.getElementById('qb-admin-modal').classList.add('hidden')" class="w-12 h-12 bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center text-slate-400 hover:text-rose-500 transition-all active:scale-90">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>

                <div class="flex flex-1 overflow-hidden">
                    <!-- Sidebar Tabs -->
                    <div class="w-64 bg-slate-100/50 border-r border-slate-200 p-6 flex flex-col gap-4">
                        <button onclick="QuestionBankAdmin.switchTab('generator')" id="qb-tab-generator" class="qb-tab w-full text-left px-6 py-4 rounded-2xl font-black text-sm transition-all bg-indigo-600 text-white shadow-xl">
                            📝 Tạo Đề Kiểm Tra
                        </button>
                        <button onclick="QuestionBankAdmin.switchTab('manager')" id="qb-tab-manager" class="qb-tab w-full text-left px-6 py-4 rounded-2xl font-black text-sm transition-all text-slate-500 hover:bg-white hover:shadow-sm">
                            📂 Quản lý Dữ Liệu
                        </button>
                    </div>

                    <!-- Content Area -->
                    <div class="flex-1 p-8 overflow-y-auto bg-slate-50/30" id="qb-content-area">
                        <!-- Default: Generator -->
                        ${this.renderGeneratorTab()}
                    </div>
                </div>
            </div>
        `},switchTab(e){document.querySelectorAll(".qb-tab").forEach(n=>{n.classList.remove("bg-indigo-600","text-white","shadow-xl"),n.classList.add("text-slate-500","hover:bg-white","hover:shadow-sm")});const t=document.getElementById(`qb-tab-${e}`);t.classList.remove("text-slate-500","hover:bg-white","hover:shadow-sm"),t.classList.add("bg-indigo-600","text-white","shadow-xl"),document.getElementById("qb-content-area").innerHTML=e==="generator"?this.renderGeneratorTab():this.renderManagerTab()},renderGeneratorTab(){return`
            <div class="space-y-8 animate-fade-in-down">
                <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                    <h3 class="font-black text-slate-700 uppercase mb-4 text-sm tracking-widest flex items-center gap-2">🕹️ Cấu hình bộ đề</h3>
                    <div class="grid grid-cols-2 gap-6">
                        <div class="space-y-2">
                            <label class="text-[10px] font-bold text-slate-400 uppercase">Phạm vi Tiết</label>
                            <div class="flex items-center gap-2">
                                <input type="text" id="qb-gen-from" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 font-bold text-slate-700" placeholder="Từ tiết...">
                                <span>-</span>
                                <input type="text" id="qb-gen-to" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 font-bold text-slate-700" placeholder="Đến tiết...">
                            </div>
                        </div>
                        <div class="space-y-2">
                            <label class="text-[10px] font-bold text-slate-400 uppercase text-center block">Số lượng câu theo mức độ</label>
                            <div class="flex gap-2">
                                <input type="number" id="qb-gen-l1" class="w-full bg-emerald-50 border border-emerald-200 rounded-xl px-2 py-2 text-center font-bold text-emerald-700 text-sm" placeholder="Mức 1" value="10">
                                <input type="number" id="qb-gen-l2" class="w-full bg-blue-50 border border-blue-200 rounded-xl px-2 py-2 text-center font-bold text-blue-700 text-sm" placeholder="Mức 2" value="5">
                                <input type="number" id="qb-gen-l3" class="w-full bg-orange-50 border border-orange-200 rounded-xl px-2 py-2 text-center font-bold text-orange-700 text-sm" placeholder="Mức 3" value="5">
                            </div>
                        </div>
                    </div>
                    <div class="mt-6 flex justify-end">
                        <button onclick="QuestionBankAdmin.generateExam()" class="bg-indigo-600 hover:bg-indigo-700 text-white font-black px-8 py-3 rounded-xl shadow-lg transition-all active:scale-95 flex items-center gap-2">
                            🚀 TẠO ĐỀ NGẪU NHIÊN
                        </button>
                    </div>
                </div>

                <div id="qb-gen-result" class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hidden">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="font-black text-slate-700 uppercase text-sm tracking-widest flex items-center gap-2">📄 Đề thi của bạn (<span id="qb-gen-count">0</span> câu)</h3>
                        <button onclick="QuestionBankAdmin.copyToClipboard('qb-exam-content')" class="bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold px-4 py-2 rounded-lg text-xs transition-all flex items-center gap-1">📋 Copy để in</button>
                    </div>
                    <div id="qb-exam-content" class="text-sm text-slate-700 space-y-6 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar p-4 bg-slate-50 rounded-2xl border border-slate-100"></div>
                </div>
            </div>
        `},renderManagerTab(){return`
            <div class="space-y-8 animate-fade-in-down">
                <!-- Download Template -->
                <div class="bg-emerald-50 border border-emerald-100 p-8 rounded-3xl shadow-sm flex items-center justify-between">
                    <div>
                        <h3 class="font-black text-emerald-800 uppercase mb-1 text-lg">Mẫu Nhập Excel Chuẩn</h3>
                        <p class="text-emerald-600 text-xs font-bold w-3/4">Tải bảng tính mẫu để nhập câu hỏi offline. Không tự ý đổi tên cột để tránh lỗi định dạng.</p>
                    </div>
                    <button onclick="QuestionBankAdmin.downloadExcelTemplate()" class="shrink-0 bg-white text-emerald-600 font-black px-6 py-4 rounded-2xl shadow-sm hover:shadow-lg transition-all active:scale-95 flex items-center gap-2 border border-emerald-200">
                        📥 TẢI MẪU (.XLSX)
                    </button>
                </div>

                <!-- Upload Section -->
                <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                    <h3 class="font-black text-slate-700 uppercase mb-4 text-sm tracking-widest flex items-center gap-2">📤 Cập Nhật Ngân Hàng</h3>
                    
                    <div class="grid grid-cols-2 gap-6 mb-6">
                        <label class="relative flex flex-col bg-slate-50 p-6 rounded-2xl border-2 border-slate-200 cursor-pointer hover:border-indigo-400 group transition-all">
                            <input type="radio" name="qb_upload_mode" value="replace" class="absolute top-4 right-4 w-4 h-4 cursor-pointer" checked>
                            <span class="font-black text-indigo-700 mb-1">♻️ Ghi Đè Thay Thế</span>
                            <span class="text-[10px] font-bold text-slate-500 leading-relaxed">Hệ thống sẽ xóa TẤT CẢ câu hỏi cũ của các Tiết có mặt trong file tải lên, và thay bằng câu mới. (Khuyên dùng)</span>
                        </label>
                        <label class="relative flex flex-col bg-slate-50 p-6 rounded-2xl border-2 border-slate-200 cursor-pointer hover:border-indigo-400 group transition-all">
                            <input type="radio" name="qb_upload_mode" value="append" class="absolute top-4 right-4 w-4 h-4 cursor-pointer">
                            <span class="font-black text-indigo-700 mb-1">➕ Ghi Nối Thêm</span>
                            <span class="text-[10px] font-bold text-slate-500 leading-relaxed">Giữ lại câu cũ, nhồi thêm câu mới vào ngân hàng của các Tiết có trong file.</span>
                        </label>
                    </div>

                    <div class="flex items-center justify-center w-full">
                        <label for="qb-file-upload" class="flex flex-col items-center justify-center w-full h-40 border-2 border-indigo-200 border-dashed rounded-3xl cursor-pointer bg-indigo-50/30 hover:bg-indigo-50 transition-all">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <span class="text-4xl mb-2 grayscale group-hover:grayscale-0">📊</span>
                                <p class="mb-2 text-sm text-indigo-700 font-black">Click để tải lên File Excel Ngân hàng</p>
                                <p class="text-xs text-indigo-500 font-bold uppercase tracking-widest">Chỉ nhận .XLSX hoặc .CSV / Max 5MB</p>
                            </div>
                            <input id="qb-file-upload" type="file" class="hidden" accept=".xlsx, .xls, .csv" onchange="QuestionBankAdmin.handleFileUpload(this)" />
                        </label>
                    </div>
                </div>
            </div>
        `},async generateExam(){const e=document.getElementById("qb-gen-from").value.trim(),t=document.getElementById("qb-gen-to").value.trim(),n=parseInt(document.getElementById("qb-gen-l1").value)||0,i=parseInt(document.getElementById("qb-gen-l2").value)||0,s=parseInt(document.getElementById("qb-gen-l3").value)||0;let o=[];if(isNaN(e)||isNaN(t))e&&o.push(e),t&&t!==e&&o.push(t);else{const l=parseInt(e)||1,d=parseInt(t)||175;for(let c=l;c<=d;c++)o.push(c)}const a=event.currentTarget,r=a.innerHTML;a.innerHTML="⏳...";try{const l=await window.QuestionBankManager.getQuestions({periods:o,countsPerLevel:{1:n,2:i,3:s}}),d=document.getElementById("qb-gen-result"),c=document.getElementById("qb-gen-count"),h=document.getElementById("qb-exam-content");if(d.classList.remove("hidden"),c.innerText=l.length,l.length===0){h.innerHTML='<p class="text-center text-slate-400 italic font-bold">Không tìm thấy câu hỏi nào thỏa mãn yêu cầu.</p>',a.innerHTML=r;return}let u="";l.forEach((g,m)=>{const p=["A","B","C","D"];u+=`
                    <div class="mb-6 pb-6 border-b border-slate-200 border-dashed">
                        <p class="font-black text-slate-800 mb-3"><span class="text-indigo-600">Câu ${m+1}:</span> ${g.question} <span class="text-[9px] bg-slate-200 text-slate-500 px-2 py-0.5 rounded-md ml-2 relative -top-0.5 whitespace-nowrap">Tiết ${g.period} | Mức ${g.level}</span></p>
                        <div class="grid grid-cols-2 gap-y-2">
                `,g.options.forEach((b,f)=>{const k=g.answer===f;u+=`<p class="font-bold text-slate-600 ${k?"text-emerald-700 bg-emerald-50 px-2 py-1 rounded inline-block -ml-2":""}">${p[f]}. ${b}</p>`}),u+="</div></div>"}),h.innerHTML=u}catch(l){console.error(l),alert("Đã xảy ra lỗi khi bốc đề!")}a.innerHTML=r},copyToClipboard(e){const t=document.getElementById(e).innerText;navigator.clipboard.writeText(t).then(()=>{alert("Đã copy toàn bộ nội dung đề bộ nhớ tạm!")}).catch(n=>{alert("Không thể copy. Bạn hãy tô đen và Copy thủ công nhé.")})},downloadExcelTemplate(){if(typeof XLSX>"u"){alert("Thư viện Excel chưa được tải. Vui lòng kiểm tra lại kết nối!");return}const e=XLSX.utils.book_new(),t=[["ID","Tiết","Mức Độ","Câu Hỏi","Đáp Án Đúng","Đáp Án Nhiễu Khác (Tùy chọn)"]];t.push(["1","134","1","15 phút 50 giây : 5 = ?","3 phút 10 giây",""]),t.push(["2","140","1","Công thức vận tốc?","v = s / t","v = s x t, s = v / t"]);const n=XLSX.utils.aoa_to_sheet(t);XLSX.utils.book_append_sheet(e,n,"Question Bank"),XLSX.writeFile(e,"NganHangCauHoi_Mau.xlsx")},handleFileUpload(e){if(!e.files||e.files.length===0)return;if(typeof XLSX>"u"){alert("Thư viện Excel chưa được tải. Vui lòng kiểm tra lại kết nối Mạng!"),e.value="";return}const t=document.querySelector('input[name="qb_upload_mode"]:checked').value,n=e.files[0],i=new FileReader;i.onload=async s=>{try{const o=new Uint8Array(s.target.result),a=XLSX.read(o,{type:"array"}),r=a.Sheets[a.SheetNames[0]],l=XLSX.utils.sheet_to_json(r,{header:1});if(l.length<2){alert("File không có dữ liệu!");return}const d=[];for(let g=1;g<l.length;g++){const m=l[g];if(!m||m.length<5)continue;const p=parseInt(m[1]),b=m[3],f=m[4];if(isNaN(p)||!b||!f)continue;let k={id:m[0]||Date.now().toString()+g,period:p,level:parseInt(m[2])||1,q:b.toString().trim(),a:f.toString().trim(),customDistractors:m[5]?m[5].toString().split(",").map(S=>S.trim()):[]};d.push(k)}if(d.length===0){alert("Không tìm thấy câu hỏi hợp lệ trong file!");return}await window.QuestionBankManager.init();const c=window.QuestionBankManager.data,h=[...new Set(d.map(g=>g.period))];let u=[];t==="replace"?(u=c.filter(g=>!h.includes(g.period)),u=u.concat(d),alert(`Đã XÓA bộ câu hỏi cũ của ${h.length} tiết và GHI ĐÈ ${d.length} câu hỏi mới hoàn tất!`)):(u=c.concat(d),alert(`Đã GHI NỐI THÊM ${d.length} câu hỏi mới thành công!`)),window.QuestionBankManager.data=u,console.log("[QuestionBankAdmin] Synced to Memory Data. Total now: ",u.length),e.value=""}catch(o){console.error("Excel parse err:",o),alert("Đã xảy ra lỗi khi phân tích file Excel.")}},i.readAsArrayBuffer(n)}};window.QuestionBankAdmin=Ee;function _e(e,t){const n=document.getElementById(e);n&&(n.type==="password"?(n.type="text",t.innerHTML='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"></path></svg>'):(n.type="password",t.innerHTML='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>'))}async function Ve(){try{typeof firebase<"u"&&await firebase.auth().signOut(),localStorage.removeItem("userRole"),localStorage.removeItem("teacherName"),window.location.reload()}catch(e){console.error("Logout error:",e),window.location.reload()}}function re(e,t){const n=document.getElementById(e);n&&(n.innerText=ue(t),n.classList.add("show"),setTimeout(()=>n.classList.remove("show"),1e4))}function Ge(e){const t=document.getElementById(e);t&&t.classList.remove("show")}function De(e){let t=document.getElementById("toast-notification");t||(t=document.createElement("div"),t.id="toast-notification",t.className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-8 py-4 rounded-2xl shadow-2xl z-[9999] font-bold text-sm tracking-widest opacity-0 translate-y-4 transition-all duration-300 pointer-events-none",document.body.appendChild(t)),t.innerText=e,t.classList.remove("opacity-0","translate-y-4"),t.classList.add("opacity-100","translate-y-0"),setTimeout(()=>{t.classList.add("opacity-0","translate-y-4"),t.classList.remove("opacity-100","translate-y-0")},3e3)}function ue(e){let t="";if(typeof e=="object"?t=(e.code||"")+" "+(e.message||""):t=String(e),t=t.toLowerCase(),t.includes("invalid_login_credentials")||t.includes("user-not-found")||t.includes("wrong-password")||t.includes("không chính xác"))return"Tài khoản hoặc mật khẩu không chính xác.";if(t.includes("email-already-in-use")||t.includes("already in use"))return"Email này đã được đăng ký bởi một tài khoản khác.";if(t.includes("invalid-email")||t.includes("badly formatted"))return"Địa chỉ email không hợp lệ.";if(t.includes("weak-password")||t.includes("at least 6 characters"))return"Mật khẩu quá yếu (tối thiểu 6 ký tự).";if(t.includes("network-request-failed")||t.includes("network error"))return"Lỗi kết nối mạng. Hãy kiểm tra lại internet và thử lại.";if(t.includes("requires-recent-login"))return"Hãy đăng xuất và đăng nhập lại để thực hiện thao tác này.";try{const n=JSON.parse(typeof e=="string"?e:e.message);if(n.error&&n.error.message&&n.error.message.includes("INVALID_LOGIN_CREDENTIALS"))return"Tài khoản hoặc mật khẩu không chính xác."}catch(n){console.error("Unhandled error:",n)}return typeof e=="object"&&e.message?e.message:String(e)}function ze(e){if(!(typeof firebase>"u")){if(localStorage.getItem("userApproved")==="true"){console.log("[AuthCore] Legacy approval found, skipping login screen."),setTimeout(()=>e(),100);return}firebase.auth().onAuthStateChanged(async t=>{if(t)try{const i=await(window.db||firebase.firestore()).collection("users").doc(t.uid).get();if(i.exists){const s=i.data();if((s.role==="teacher"||s.role==="admin")&&s.approved){localStorage.setItem("userRole",s.role),localStorage.setItem("teacherName",s.displayName||s.name||"Giáo viên"),localStorage.setItem("userApproved","true"),e();return}}}catch(n){console.error("Auto-login authorization error:",n)}if(localStorage.getItem("userApproved")!=="true"){const n=document.getElementById("login-screen");n&&n.classList.remove("hidden")}})}}async function Ue(e,t,n,i){const s=document.getElementById(e).value.trim(),o=document.getElementById(t).value,a=document.getElementById(n);if(!s||!o){alert("Vui lòng nhập Email và Mật khẩu!");return}a.disabled=!0;const r=a.innerHTML;a.innerHTML="<span>⏳ Đang đăng nhập...</span>";try{if(typeof firebase>"u")throw new Error("Không tìm thấy kết nối Firebase. Cần kết nối Internet.");const l=window.auth||firebase.auth(),d=window.db||firebase.firestore(),c=new Promise((p,b)=>setTimeout(()=>b(new Error("Quá thời gian kết nối (Timeout). Vui lòng kiểm tra lại mạng hoặc thử lại.")),15e3)),h=(async()=>{const p=await l.signInWithEmailAndPassword(s,o),b=p.user,f=await d.collection("users").doc(b.uid).get();return{userCredential:p,userDoc:f}})(),{userDoc:u,userCredential:g}=await Promise.race([h,c]);if(!u.exists)throw await l.signOut(),new Error("Tài khoản chưa được phân quyền trong hệ thống.");const m=u.data();if(m.role!=="teacher"&&m.role!=="admin")throw await l.signOut(),new Error("Tài khoản không có quyền truy cập giáo viên.");if(!m.approved)throw await l.signOut(),new Error("Tài khoản giáo viên chưa được duyệt kích hoạt.");localStorage.setItem("userRole",m.role),localStorage.setItem("teacherName",m.displayName||m.name||"Giáo viên"),localStorage.setItem("userApproved","true"),i()}catch(l){console.error("Login Error Detail:",l),alert(l.message||"Lỗi đăng nhập không xác định. Vui lòng thử lại.")}finally{a.disabled=!1,a.innerHTML=r}}async function qe(e,t){const n=firebase.auth().currentUser;if(!n)throw new Error("Chưa đăng nhập.");try{const i=firebase.auth.EmailAuthProvider.credential(n.email,e);await n.reauthenticateWithCredential(i),await n.updatePassword(t)}catch(i){throw new Error(ue(i))}}const Oe={apiKey:"AIzaSyC6zlWn8BKYU7P6A2-PYq6IIWOzaqJWFhc",authDomain:"gamhoctap.firebaseapp.com",projectId:"gamhoctap",storageBucket:"gamhoctap.firebasestorage.app",messagingSenderId:"833329613932",appId:"1:833329613932:web:0d8574827bcfe50b535c49"};function Qe(){if(typeof firebase>"u"){console.error("Firebase SDK not found!");return}firebase.apps.length||firebase.initializeApp(Oe)}const Re={renderHeader(e){const t=document.querySelector("#teacher-header");t&&(t.innerHTML=`
            <div class="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-4 rounded-[2rem] shadow-sm mb-6 border border-gray-50 animate-fade-in">
                <div class="flex items-center gap-3">
                    <div class="w-12 h-12 ${e.iconBg||"bg-orange-100"} rounded-2xl flex items-center justify-center ${e.iconColor||"text-orange-600"}">
                        ${e.icon}
                    </div>
                    <div class="text-left">
                        <h1 class="text-xl font-black text-gray-800 tracking-tight">${e.title}</h1>
                        <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">${e.subtitle||"Bảng điều khiển Giáo viên"}</p>
                    </div>
                </div>
                <div class="flex flex-wrap justify-center gap-3">
                    <a href="index.html" class="bg-indigo-600 hover:bg-indigo-700 text-white font-black px-6 py-4 rounded-2xl shadow-xl shadow-indigo-200 flex items-center gap-3 transition-all transform hover:-translate-y-1 active:scale-95 text-xs uppercase tracking-widest">
                        Trang chủ
                    </a>
                    ${e.extraButtonsHtml||""}
                    <button onclick="window.openChangePasswordModal()" class="p-4 bg-white text-gray-400 hover:text-orange-500 rounded-2xl shadow-sm transition-all border border-gray-100 hover:shadow-md active:scale-95" title="Đổi mật khẩu">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg>
                    </button>
                    <button onclick="window.logout()" class="p-4 bg-white text-gray-400 hover:text-red-500 rounded-2xl shadow-sm transition-all border border-gray-100 hover:shadow-md active:scale-95" title="Đăng xuất">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                    </button>
                </div>
            </div>
        `)},renderLogin(e){const t=document.getElementById("login-screen");if(!t)return;const n=e.themeColor||"orange",i=`bg-${n}-600 hover:bg-${n}-700 shadow-${n}-200`,s=`bg-${n}-100`,o=`text-${n}-600`,a=`focus:border-${n}-500`;t.innerHTML=`
            <div class="bg-white rounded-[32px] p-10 max-w-md w-full shadow-2xl text-center animate-bounce-in">
                <div class="w-20 h-20 ${s} rounded-3xl flex items-center justify-center ${o} mx-auto mb-6">
                    ${e.icon}
                </div>
                <h2 class="text-3xl font-black text-gray-800 mb-2">${e.title}</h2>
                <p class="text-gray-500 mb-8 font-bold text-sm uppercase tracking-widest">${e.subtitle}</p>
                <div class="space-y-4">
                    <div class="relative">
                        <input type="email" id="teacher-email" placeholder="Email (VD: teacher@gmail.com)..."
                            class="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 ${a} transition-all outline-none font-bold text-center text-lg shadow-inner">
                    </div>
                    <div class="relative">
                        <input type="password" id="teacher-password" placeholder="Nhập mật khẩu truy cập..."
                            class="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 ${a} transition-all outline-none font-bold text-center text-lg pr-14 shadow-inner">
                        <button type="button" onclick="window.togglePasswordVisibility('teacher-password', this)"
                            class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:${o} transition-colors">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                        </button>
                    </div>
                    <button id="btn-login-go" onclick="window.checkLogin()"
                        class="w-full ${i} text-white font-black py-4 rounded-2xl shadow-xl transition-all transform active:scale-95 uppercase tracking-widest flex items-center justify-center gap-2">
                        Vào hệ thống
                    </button>
                </div>
                <a href="index.html"
                    class="inline-block mt-8 text-sm font-bold text-gray-400 hover:${o} transition-colors uppercase tracking-widest border-b-2 border-transparent hover:border-current">
                    Quay lại trang chủ
                </a>
            </div>
        `},renderPasswordChangeModal(){if(document.getElementById("modal-change-password"))return;const e=`
            <div id="modal-change-password" class="fixed inset-0 z-[9999] hidden items-center justify-center bg-gray-900/60 backdrop-blur-sm p-4 animate-fade-in">
                <div id="modal-change-password-content" class="bg-white rounded-[2.5rem] w-full max-w-md p-10 shadow-2xl transform transition-all duration-300 scale-95 relative overflow-hidden">
                    <div class="absolute -right-10 -top-10 w-40 h-40 bg-orange-50 rounded-full opacity-50"></div>
                    
                    <button onclick="window.closeChangePasswordModal()" class="absolute right-6 top-6 text-gray-400 hover:text-gray-600 transition-colors p-2">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>

                    <div class="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6 mx-auto relative">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg>
                    </div>

                    <h2 class="text-2xl font-black text-gray-800 text-center mb-2 uppercase tracking-tight">Đổi mật khẩu</h2>
                    <p class="text-xs font-bold text-gray-400 text-center uppercase tracking-widest mb-8">Bảo vệ an toàn tài khoản của bạn</p>
                    
                    <form id="form-change-password" onsubmit="window.handleChangePassword(event)" class="space-y-4">
                        <div class="relative">
                            <input type="password" id="cp-current-password" placeholder="Mật khẩu hiện tại..." required
                                class="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-orange-500 transition-all outline-none font-bold text-center text-lg shadow-inner">
                        </div>
                        <div class="relative">
                            <input type="password" id="cp-new-password" placeholder="Mật khẩu mới..." required
                                class="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-orange-500 transition-all outline-none font-bold text-center text-lg shadow-inner">
                        </div>
                        <div class="relative">
                            <input type="password" id="cp-confirm-password" placeholder="Xác nhận mật khẩu mới..." required
                                class="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-orange-500 transition-all outline-none font-bold text-center text-lg shadow-inner">
                        </div>
                        
                        <div id="cp-error" class="hidden p-4 bg-red-50 text-red-600 rounded-2xl text-xs font-bold text-center transition-all"></div>
                        
                        <button type="submit" id="btn-change-password"
                            class="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-4 rounded-2xl shadow-xl transition-all transform active:scale-95 uppercase tracking-widest text-xs">
                            Cập nhật mật khẩu
                        </button>
                    </form>
                </div>
            </div>
        `,t=document.createElement("div");t.innerHTML=e,document.body.appendChild(t.firstElementChild)},initDashboardApp(e){Qe();const t=()=>{const n=document.getElementById("login-screen"),i=document.getElementById("dashboard");n&&n.classList.add("hidden"),i&&(i.classList.remove("hidden"),i.classList.add("animate-fade-in")),this.renderHeader({title:e.title,icon:e.icon,iconBg:`bg-${e.theme}-100`,iconColor:`text-${e.theme}-600`,extraButtonsHtml:e.extraButtonsHtml}),this.renderPasswordChangeModal(),e.populateFilters&&e.populateFilters(),e.initRealtime&&e.initRealtime()};window.togglePasswordVisibility=_e,window.logout=Ve,window.checkLogin=()=>Ue("teacher-email","teacher-password","btn-login-go",t),window.openChangePasswordModal=()=>{const n=document.getElementById("modal-change-password"),i=document.getElementById("modal-change-password-content");n&&i&&(n.classList.remove("hidden"),n.classList.add("flex"),setTimeout(()=>i.classList.replace("scale-95","scale-100"),10))},window.closeChangePasswordModal=()=>{const n=document.getElementById("modal-change-password"),i=document.getElementById("modal-change-password-content");n&&i&&(i.classList.replace("scale-100","scale-95"),setTimeout(()=>{var s;n.classList.add("hidden"),n.classList.remove("flex"),(s=document.getElementById("form-change-password"))==null||s.reset(),Ge("cp-error")},300))},window.handleChangePassword=async n=>{n&&n.preventDefault();const i=document.getElementById("cp-current-password").value,s=document.getElementById("cp-new-password").value,o=document.getElementById("cp-confirm-password").value,a=document.getElementById("btn-change-password");if(s!==o)return re("cp-error","Mật khẩu xác nhận không khớp.");a&&(a.disabled=!0,a.textContent="Đang xử lý...");try{await qe(i,s),De("Đổi mật khẩu thành công!"),setTimeout(()=>window.closeChangePasswordModal(),1500)}catch(r){re("cp-error",r.message)}finally{a&&(a.disabled=!1,a.textContent="Cập nhật mật khẩu")}},this.renderLogin({title:e.title,subtitle:e.subtitle||"Đăng nhập để xem báo cáo chi tiết",icon:e.icon,themeColor:e.theme}),ze(t)}};U.registerGame("HeadTiltGame",ce);U.registerGame("LuckyWheel",Me);U.registerGame("GroupDivider",je);U.registerGame("tug_of_war",Ae);U.registerGame("choice_game",he);const y={...z,...Ce,...$,...H,...de,...Be,...Pe,DashboardUI:Re,renderQuizContainer(e){return x.renderQuizContainer(e)},initQuiz(e){x.initQuiz(e)},cleanupQuiz(){x.cleanup&&x.cleanup()},renderNavbarSubjectSwitcher(e,t){const n=window.router&&typeof window.router.isAdmin=="function"?window.router.isAdmin():localStorage.getItem("userRole")==="admin"||localStorage.getItem("userRole")==="teacher"||localStorage.getItem("userRole")==="teacher-admin";return`
            <button class="text-gray-500 hover:text-indigo-600 transition-all py-2 flex items-center justify-center group" title="Bài học">
                <svg class="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                <svg class="w-3 h-3 group-hover:rotate-180 transition-transform ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div class="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-gray-50 p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-50">
                ${t.map(i=>{const s=i.locked&&!n;return`
                    <button onclick="router.navigateSubject('${i.id}')" 
                        class="w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all font-black text-[10px] uppercase tracking-wide ${e.id===i.id?"bg-blue-600 text-white":"text-gray-400 hover:bg-gray-50 hover:text-gray-900"} ${s?"opacity-60 cursor-not-allowed grayscale":""}">
                        <span class="flex items-center gap-3">
                            <span class="text-lg">${i.icon}</span>
                            ${i.name}
                        </span>
                        ${s?'<span class="text-xs">🔒</span>':""}
                    </button>
                `}).join("")}
            </div>
        `},parseTutor(e){return e?(e=e.replace(/\[\[TUTOR\|([^|]+)\|([^\]]+)\]\]/g,(t,n,i)=>this.renderTutor(n,i)),e=e.replace(/\[\[CUBE3D\|([^\]]+)\]\]/g,(t,n)=>this.renderCube3D(n)),e=e.replace(/\[\[(MATH_EX|READING_EX)\|([^|\]]+)\|([^|\]]+)(?:\|([^|\]]*))?(?:\|([^|\]]*))?(?:\|([^\]]*))?\]\]/g,(t,n,i,s,o,a,r)=>this.renderMathExercise(i,s,o||"Bài tập",a||"đọc là:",r)),e=e.replace(/\[\[CONV_EX\|([^|\]]+)\|([^|\]]+)\|([^|\]]+)\|([^\]]*)\]\]/g,(t,n,i,s,o)=>this.renderUnitConversionExercise(n,i,s,o)),e=e.replace(/\[\[CHAT_QUIZ\|([^|\]]+)\|([^\]]+)\]\]/g,(t,n,i)=>H.renderChatQuiz(n,i)),e=e.replace(/\[\[GAME\|([^|]+)\|([^\]]+)\]\]/g,(t,n,i)=>`
                <div class="my-6 flex justify-center w-full">
                    <button onclick="GameLibrary.play('${n}', '${i.replace(/'/g,"\\'")}')" 
                        class="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-indigo-600 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-indigo-700 hover:scale-105 shadow-[0_8px_30px_rgb(79,70,229,0.3)]">
                        <span class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></span>
                        <svg class="w-6 h-6 mr-3 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        Khởi động Trò Chơi
                        <div class="absolute inset-0 h-full w-full rounded-xl group-hover:bg-white group-hover:opacity-10 transition-colors pointer-events-none"></div>
                    </button>
                </div>
            `),e=e.replace(/<img\b([^>]*?)>/gi,(t,n)=>{let i=n||"";return/loading\s*=/.test(i)||(i+=' loading="lazy"'),/decoding\s*=/.test(i)||(i+=' decoding="async"'),`<img${i}>`}),e):""}};window.UI=y;const le={currentSubject:"math",currentWeek:1,currentPeriod:"GIỮA KỲ 1",currentLessonPeriod:null,periodRanges:{"GIỮA KỲ 1":{start:1,end:9},"CUỐI KỲ 1":{start:10,end:18},"GIỮA KỲ 2":{start:19,end:27},"CUỐI KỲ 2":{start:28,end:35}},contentLocks:{subjects:{},lessons:{}},isAdmin(){const e=localStorage.getItem("userRole");return e==="admin"||e==="teacher"||e==="teacher-admin"},init(){window.router=this,window.UI=y,window.subjects=j,window.lessons=_,window.__lessonCache||(window.__lessonCache=new Map),this.detectAndApplyDeviceMode(),this.fetchLocks().finally(()=>{(window.location.hash==="#/"||window.location.hash==="")&&this.renderHome(!0)});try{const e=sessionStorage.getItem("edurobot_router_state");if(e){const t=JSON.parse(e);t.currentSubject&&(this.currentSubject=t.currentSubject),t.currentWeek&&(this.currentWeek=t.currentWeek),t.currentPeriod&&(this.currentPeriod=t.currentPeriod)}}catch(e){console.error("Lỗi đọc state:",e)}window.addEventListener("hashchange",()=>this.handleHashChange()),window.normalizeVN=e=>(e||"").toLowerCase().trim().replace(/\s+/g," ").replace(/linh/g,"lẻ").replace(/tư/g,"bốn"),window.toggleSolution=function(e){const t=document.getElementById(e);t&&t.classList.toggle("hidden")},window.showMathFeedback=function(e,t,n,i,s){const o=document.getElementById("math-modal-overlay"),a=document.getElementById("modal-title"),r=document.getElementById("modal-icon"),l=document.getElementById("modal-body");if(!o){window.router&&window.router.createMathModal&&window.router.createMathModal(),setTimeout(()=>window.showMathFeedback(e,t,n,i,s),50);return}if(!a||!r||!l)return;const d=["Tuyệt vời quá! Em đã làm rất tốt.","Chính xác rồi! Em có tư duy toán học thật nhạy bén.","Wow! Tiếp tục phát huy nhé!","Đúng rồi! Em đã nắm chắc kiến thức phần này rồi đấy.","Xuất sắc! Thầy E rất tự hào về em."],c=["Ôi, chưa chính xác rồi. Hãy thử lại xem nào!","Có một chút nhầm lẫn ở đâu đó rồi. Em hãy đọc kỹ gợi ý nhé.","Cố gắng lên! Thầy E tin em sẽ làm được!","Chưa đúng rồi! Hãy bình tĩnh đọc kỹ lại đề bài và xem gợi ý của Thầy E nhé."];if(typeof e=="boolean"){const h=e,u=s||t||"",g=i||n||"";if(h){a.innerText="LỜI KHEN TỪ THẦY E",r.innerText="✨",a.style.color="#059669";const m=d[Math.floor(Math.random()*d.length)];l.innerHTML=`
                        <div style="margin-bottom:1.5rem; padding:1rem; background:#f0fdf4; border-radius:1rem; border-left:5px solid #10b981;">
                            <p style="font-weight:900; color:#065f46; font-size:1.4rem; margin:0;">${m}</p>
                        </div>
                        <div style="padding:1.5rem; background:#fff; border:2px dashed #10b981; border-radius:1.5rem;">
                            <h4 style="margin:0 0 1rem 0; color:#059669; font-size:1.2rem; font-weight:800; text-transform:uppercase;">📖 BÀI GIẢI CHI TIẾT:</h4>
                            <div style="font-size:1.2rem; color:#1e293b;">${u}</div>
                        </div>
                    `}else{a.innerText="HƯỚNG DẪN CỦA THẦY E",r.innerText="💡",a.style.color="#d97706";const m=c[Math.floor(Math.random()*c.length)];l.innerHTML=`
                        <div style="margin-bottom:1.5rem; padding:1rem; background:#fffbeb; border-radius:1rem; border-left:5px solid #f59e0b;">
                            <p style="font-weight:900; color:#92400e; font-size:1.4rem; margin:0;">${m}</p>
                        </div>
                        <div style="padding:1.5rem; background:#fff; border:2px dashed #f59e0b; border-radius:1.5rem;">
                            <h4 style="margin:0 0 1rem 0; color:#d97706; font-size:1.2rem; font-weight:800; text-transform:uppercase;">🧐 GỢI Ý CHO EM:</h4>
                            <div style="font-size:1.2rem; color:#1e293b;">${g||"Hãy kiểm tra lại các bước tính toán và đơn vị của bài toán nhé!"}</div>
                        </div>
                    `}}else a.innerText=e||"THẦY E",r.innerText=t||"✨",a.style.color="#2563eb",l.innerHTML=n||"";o.style.display="flex"},window.location.hash&&window.location.hash!=="#"&&window.location.hash!=="#/"?this.handleHashChange():this.renderHome(!0),this.createMathModal()},async fetchLocks(){try{if(typeof firebase>"u"||typeof firebase.firestore!="function"){console.warn("[Router] Firebase Firestore chưa sẵn sàng.");return}const t=await firebase.firestore().collection("app_settings").doc("content_locks").get();t.exists&&(this.contentLocks=t.data(),console.log("[Router] Đã tải trạng thái khóa nội dung."))}catch(e){console.error("[Router] Lỗi tải khóa nội dung:",e)}},saveState(){sessionStorage.setItem("edurobot_router_state",JSON.stringify({currentSubject:this.currentSubject,currentWeek:this.currentWeek,currentPeriod:this.currentPeriod}))},navigateHonors(){window.location.hash="#/honors"},async handleHashChange(){const e=window.location.hash||"#/";window.Quiz&&window.Quiz.cleanup&&window.Quiz.cleanup();const t=document.getElementById("ai-chat-window");t&&t.remove();const n=document.getElementById("app-content");if(n)if(e==="#/"||e===""||e==="#")this.renderHome(!0);else if(e==="#/honors"){if(this.isAdmin()){window.location.hash="#/star-admin";return}n.innerHTML=await y.renderHonors(),window.scrollTo(0,0)}else if(e==="#/star-admin"){if(!this.isAdmin()){alert("Chỉ giáo viên mới có quyền truy cập trang này!"),this.goHome();return}n.innerHTML=y.renderStarAdmin(),y.initStarAdmin&&y.initStarAdmin(),window.scrollTo(0,0)}else if(e.startsWith("#/subject/")){const i=e.split("/");i[2]&&this.renderSubject(i[2],!0)}else if(e.startsWith("#/lesson/")){const i=e.split("/");i[2]&&i[3]&&this.renderLesson(i[2],i[3],!0)}else this.renderHome(!0)},navigateSubject(e){const t=j.find(s=>s.id===e);if(!t)return;const n=this.isAdmin();if((t.locked||this.contentLocks.subjects[e])&&!n){alert("Môn học này đang tạm khóa hoặc đang trong quá trình phát triển. Vui lòng quay lại sau!");return}t.externalUrl?window.location.href=t.externalUrl:this.selectDashboardSubject(e)},renderHome(e=!1){y&&y.cleanupQuiz&&y.cleanupQuiz(),this.saveState();const t=window.location.hash;if(!e&&t!==""&&t!=="#"&&t!=="#/"){window.location.hash="/";return}const n=document.querySelector("header");n&&(n.style.display="block");const i=document.getElementById("navbar-metadata");i&&i.classList.add("hidden");const s=document.getElementById("subject-badge");s&&s.classList.add("hidden");const o=document.getElementById("menu-subjects-container");o&&o.classList.add("hidden");const a=document.getElementById("app-content");if(!a)return;const r=_[this.currentSubject]||[],l=this.periodRanges[this.currentPeriod],d=[...new Set(r.map(p=>parseInt(p.week)))].filter(p=>p>=l.start&&p<=l.end).sort((p,b)=>p-b),c=parseInt(this.currentWeek);d.includes(c)?this.currentWeek=c:this.currentWeek=d.length>0?d[0]:l.start;const h=this.isAdmin(),u=r.filter(p=>parseInt(p.week)===this.currentWeek&&(h||!p.hidden)),g=localStorage.getItem("edurobot_last_lesson"),m=g?JSON.parse(g):null;a.innerHTML=y.renderDashboard(j,this.currentSubject,this.currentPeriod,d,u,m),y.initDashboard&&y.initDashboard(),window.scrollTo(0,0)},selectDashboardSubject(e){this.currentSubject=e,this.renderHome()},selectDashboardWeek(e){this.currentWeek=parseInt(e),this.renderHome()},selectDashboardPeriod(e){this.currentPeriod=e,this.currentWeek=this.periodRanges[e].start,this.renderHome()},renderSubject(e,t=!1){if(!t){window.location.hash=`/subject/${e}`;return}const n=j.find(c=>c.id===e);if(!n)return;this.currentSubject=e,this.saveState();const i=document.querySelector("header");i&&(i.style.display="block");const s=document.getElementById("breadcrumb-container"),o=document.getElementById("breadcrumb-current");s&&s.classList.remove("hidden"),o&&(o.innerHTML=n.name);const a=document.getElementById("app-content");if(!a)return;const r=this.isAdmin(),l=(_[e]||[]).filter(c=>r||!c.hidden);let d=`
            <div class="max-w-5xl mx-auto">
                ${y.renderSubjectHeader(n)}
                
                <!-- Thanh tìm kiếm thông minh -->
                <div class="mb-10 relative group">
                    <div class="absolute inset-y-0 left-6 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-500 transition-colors">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="text" 
                        id="lesson-search" 
                        oninput="router.handleSearch(this.value)"
                        placeholder="Tìm theo tuần (vd: Tuần 23), tiết (vd: 111) hoặc tên bài học..." 
                        class="w-full bg-white dark:bg-slate-900 border-none rounded-[28px] pl-16 pr-8 py-6 text-sm shadow-xl shadow-gray-100/50 dark:shadow-slate-900/50 focus:ring-2 focus:ring-blue-600 transition-all font-bold text-gray-800 dark:text-slate-100 placeholder:text-gray-300"
                    >
                </div>

                <div id="lesson-list" class="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
                    ${y.renderLessonList(l,n.color)}
                </div>
            </div>
        `;a.innerHTML=d,window.scrollTo(0,0)},handleSearch(e){const t=this.currentSubject,n=j.find(r=>r.id===t),i=this.isAdmin(),o=(_[t]||[]).filter(r=>i||!r.hidden).filter(r=>{const l=e.toLowerCase().trim();return r.title.toLowerCase().includes(l)||r.period.toLowerCase().includes(l)||`tuần ${r.week}`.toLowerCase().includes(l)}),a=document.getElementById("dashboard-lesson-list");a&&(a.innerHTML=y.renderLessonList(o,n.color))},async renderLesson(e,t,n=!1){if(!n){window.location.hash=`/lesson/${e}/${t}`;return}const i=j.find(c=>c.id===e);let s=(_[e]||[]).find(c=>String(c.id)===String(t)||String(c.period)===String(t));(!i||!s)&&(console.warn(`[Router] Lesson not found in manifest: ${e}/${t}. Trying fuzzy match...`),s=(_[e]||[]).find(c=>String(c.id).toLowerCase()===String(t).toLowerCase()||String(c.period).toLowerCase()===String(t).toLowerCase()));const o=this.isAdmin(),a=`${e}_${(s==null?void 0:s.period)||t}`,r=((s==null?void 0:s.hidden)||this.contentLocks.lessons[a])&&!o;if(!i||!s||r){if(console.error(`[Router] Error: Access denied or lesson not found ${e}/${t}`),r)alert("Bài học này hiện đang bị khóa. Vui lòng quay lại sau!"),this.goHome();else{const c=document.getElementById("app-content");c&&(c.innerHTML=`
                        <div class="max-w-xl mx-auto p-12 text-center bg-gray-50 rounded-[40px] border-4 border-dashed border-gray-200 mt-10">
                            <div class="text-6xl mb-6">🏜️</div>
                            <h3 class="font-black text-2xl text-gray-400 uppercase">Không tìm thấy bài học</h3>
                            <p class="text-gray-500 font-bold mb-8 mt-4">Nội dung bài học <b>${e.toUpperCase()} - Tiết ${t}</b> không tồn tại hoặc đã được di chuyển.</p>
                            <button onclick="router.goHome()" class="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-black shadow-xl shadow-indigo-200">Quay về trang chủ</button>
                        </div>
                    `)}return}const l=document.getElementById("app-content");l&&(l.innerHTML=`
                <div class="flex flex-col items-center justify-center h-64 animate-fade-in">
                    <div class="w-16 h-16 border-8 border-indigo-100 border-t-indigo-600 rounded-full animate-spin mb-6 shadow-sm"></div>
                    <p class="text-indigo-800 font-black text-lg animate-pulse tracking-wide">Đang nạp nội dung bài học...</p>
                </div>
            `);try{(!window.__lessonCache||typeof window.__lessonCache.has!="function")&&(window.__lessonCache=new Map);const c=window.__lessonCache,h=`${e}_${t}`;if(c.has(h))Object.assign(s,c.get(h));else if(!s.content){const u=String(s.period).padStart(3,"0"),g=[];if(s.modulePath){const b=s.modulePath.replace("./","").replace(/\.js$/i,"");g.push(`/js/data/${e}/${b}.js`)}g.push(`/js/data/${e}/${u}/index.js`),g.push(`/js/data/${e}/${u}.js`);let m=null;for(const b of g)try{const f=b+`?v=${Date.now()}`;if(console.log(`[Router] Loading: ${f}`),m=await import(f),m)break}catch{}let p=null;if(m){const b=`lesson${e==="math"?s.period:u}`;p=s.exportName&&m[s.exportName]||m.lessonData||m[b]||m.default||Object.values(m)[0]}if(!p){console.warn(`[Router] Physical module missing for ${e}/${t}, fetching placeholders...`);try{const b=await fe(Object.assign({"../data/math/placeholders.js":()=>Z(()=>import("./placeholders-Bm95jhxt.js"),[]),"../data/science/placeholders.js":()=>Z(()=>import("./placeholders-Czdk4T-k.js"),[]),"../data/vietnamese/placeholders.js":()=>Z(()=>import("./placeholders-Du637W2M.js"),[])}),`../data/${e}/placeholders.js`,4),f=b.placeholderLessons||b[`${e.toUpperCase()}_PLACEHOLDERS`];f&&(p=Array.isArray(f)?f.find(k=>String(k.period)===String(t)):f[t])}catch(b){console.error(`[Router] Failed to load placeholders for ${e}:`,b)}}if(p)Object.assign(s,p),c.set(h,p);else throw new Error(`Không thể tìm thấy nội dung bài học: ${e}/${t}`)}this.runPrefetch(e,s)}catch(c){console.error(`[Router] Critical loading error for ${e}/${t}:`,c),l&&(l.innerHTML=`
                    <div class="max-w-xl mx-auto p-10 bg-red-50 rounded-[40px] border-4 border-red-100 text-red-800 animate-fade-in shadow-2xl mt-10">
                        <div class="flex items-center gap-6 mb-6">
                            <div class="w-16 h-16 bg-red-100 rounded-[24px] flex items-center justify-center text-3xl shadow-inner">⚠️</div>
                            <h3 class="font-black text-2xl uppercase tracking-tight">Lỗi tải bài học</h3>
                        </div>
                        <p class="text-lg font-bold opacity-90 mb-8 leading-relaxed">
                            Xin lỗi, hệ thống không thể nạp bài <b>${e.toUpperCase()} - Tiết ${t}</b>. 
                            <br><span class="text-sm font-medium text-red-400 italic">Chi tiết: ${c.message}</span>
                        </p>
                        <div class="flex gap-4">
                            <button onclick="location.reload()" class="flex-1 py-4 bg-red-600 text-white rounded-2xl font-black text-sm uppercase tracking-wider shadow-lg shadow-red-600/20 active:scale-95 transition-transform">Thử lại</button>
                            <button onclick="router.goHome()" class="flex-1 py-4 bg-white border-2 border-red-100 text-red-600 rounded-2xl font-black text-sm uppercase tracking-wider active:scale-95 transition-transform">Về trang chủ</button>
                        </div>
                    </div>
                `);return}this.currentSubject=e,this.currentLessonPeriod=t,this.saveState(),window.currentLessonData=s,document.title=`${s.title} - EduRobot`,localStorage.setItem("edurobot_last_lesson",JSON.stringify({subjectId:e,period:s.period,title:s.title,week:s.week}));const d=JSON.parse(localStorage.getItem("edurobot_opened_lessons")||"{}");if(d[`${e}-w${s.week}-p${s.period}`]=!0,localStorage.setItem("edurobot_opened_lessons",JSON.stringify(d)),l){const c=document.getElementById("subject-badge");if(c){c.classList.remove("hidden");const k={math:{bg:"bg-orange-500",text:"TOÁN 5"},vietnamese:{bg:"bg-blue-500",text:"TV5"},history:{bg:"bg-amber-500",text:"LS-ĐL"},science:{bg:"bg-emerald-500",text:"KH5"},ethics:{bg:"bg-orange-400",text:"ĐĐ5"},experiential:{bg:"bg-indigo-500",text:"TN5"},english:{bg:"bg-sky-500",text:"EN5"}}[e]||{bg:"bg-gray-500",text:i.shortName||e.toUpperCase()};c.className=`px-2 py-0.5 rounded-lg text-[9px] font-black text-white uppercase tracking-tighter ${k.bg}`,c.textContent=k.text}const h=document.getElementById("navbar-metadata");h&&(h.className="hidden md:flex items-center space-x-4 border-l-2 border-gray-100 dark:border-slate-700 pl-4",h.innerHTML=`
                    <div class="flex items-center gap-3 text-[9px] font-black uppercase tracking-wider">
                        <span class="w-[1px] h-4 bg-gray-100 mx-1"></span>
                        <span class="text-gray-400">Chủ điểm:</span>
                        <span class="text-blue-800">${s.topic||"Khám phá tri thức"}</span>
                        <span class="w-[1px] h-4 bg-gray-100 mx-1"></span>
                        <span class="text-gray-400">Tuần ${s.week}</span>
                    </div>
                `);const u=document.getElementById("menu-subjects-container");u&&(u.classList.remove("hidden"),u.innerHTML=y.renderNavbarSubjectSwitcher(i,j)),l.innerHTML=y.renderLessonPage(i,s,j),window.scrollTo(0,0);const g=!!(typeof s.content=="function"||typeof s.content=="string"&&s.content.trim()),m=!!(typeof s.practice=="function"||typeof s.practice=="string"&&s.practice.trim()||typeof s.practice=="object"&&s.practice!==null&&Object.keys(s.practice).length>0),p=s.quizPool&&s.quizPool.length>0||await te.hasPeriod(s.period||s.id);let b="study";g?b="study":m?b="practice":p&&(b="quiz"),this.switchTab(b)}},runPrefetch(e,t){const n=_[e]||[],i=n.findIndex(a=>String(a.period)===String(t.period));if(i<0)return;const s=a=>{const r=n[i+a];if(!r||r.content)return;const l=window.__lessonCache,d=`${e}_${r.period}`;if(l&&!l.has(d)){const c=String(r.period).padStart(3,"0");let h;r.modulePath?h=`../data/${e}/${r.modulePath.replace("./","")}`:h=`../data/${e}/${c}/index.js`,import(h+`?v=${Date.now()}`).then(g=>{const m=`lesson${e==="math"?r.period:c}`,p=r.exportName&&g[r.exportName]||g.lessonData||g[m]||g.default||Object.values(g)[0];p&&l.set(d,p)}).catch(()=>{})}},o=()=>{s(1),s(2)};"requestIdleCallback"in window?requestIdleCallback(o):setTimeout(o,1e3)},goHome(){window.location.hash="/"},async switchTab(e){var c,h,u,g,m,p,b,f,k,S,B,q,K,P,X,ne,ie;j.find(v=>v.id===this.currentSubject);const t=_[this.currentSubject]||[],n=(v,T)=>{const N=String(v).toLowerCase().replace("vn-","").trim(),w=String(T).toLowerCase().replace("vn-","").trim();if(N===w)return!0;const C=N.split("-"),V=w.split("-");return!!C.some(M=>V.includes(M))},i=(v,T)=>{const N=String(v).toLowerCase().replace("vn-","").trim(),w=String(T).toLowerCase().replace("vn-","").trim();return N===w};let s=t.find(v=>i(v.period,this.currentLessonPeriod)||i(v.id,this.currentLessonPeriod));if(s||(s=t.find(v=>n(v.period,this.currentLessonPeriod)||n(v.id,this.currentLessonPeriod))),!s&&window.currentLessonData&&(i(window.currentLessonData.period,this.currentLessonPeriod)||i(window.currentLessonData.id,this.currentLessonPeriod)||n(window.currentLessonData.period,this.currentLessonPeriod)||n(window.currentLessonData.id,this.currentLessonPeriod))&&(s=window.currentLessonData),!s){console.error("Không tìm thấy dữ liệu bài học để chuyển tab");return}e!=="quiz"&&y&&y.cleanupQuiz&&y.cleanupQuiz(),document.querySelectorAll(".tab-btn").forEach(v=>{v.classList.remove("active","text-red-600"),v.classList.add("text-gray-400")});const o=document.getElementById(`tab-${e}`);o&&(o.classList.add("active","text-red-600"),o.classList.remove("text-gray-400")),s&&s.metadata&&(window.MATH_BUILDER_METADATA=s.metadata);const a=document.getElementById("tab-content");if(!a)return;let r="";if(e==="study"){const T=(typeof s.content=="function"?s.content(y):s.content)||((g=(u=(h=(c=s.tabs)==null?void 0:c.study)==null?void 0:h.blocks)==null?void 0:u.find(N=>N.type==="html"))==null?void 0:g.content)||((f=(b=(p=(m=s.tabs)==null?void 0:m.lesson)==null?void 0:p.blocks)==null?void 0:b.find(N=>N.type==="html"))==null?void 0:f.content)||((S=(k=s.blocks)==null?void 0:k.find(N=>N.type==="html"))==null?void 0:S.content)||y.renderEmptyContent();r=`
                <div class="glass-card rounded-[40px] p-8 md:p-12 bg-white dark:bg-slate-900 min-h-[200px] animate-fade-in text-gray-700 dark:text-slate-200">
                    <div id="lesson-study-container" class="lesson-body">${y.parseTutor(T)}</div>
                </div>
            `}else if(e==="practice"){const T=(typeof s.practice=="function"?s.practice(y):s.practice)||((P=(K=(q=(B=s.tabs)==null?void 0:B.practice)==null?void 0:q.blocks)==null?void 0:K.find(N=>N.type==="html"))==null?void 0:P.content)||y.renderEmptyPractice();r=`
                <div class="glass-card rounded-[40px] p-8 md:p-12 bg-white dark:bg-slate-900 min-h-[200px] animate-fade-in text-gray-700 dark:text-slate-200">
                    <div id="lesson-practice-container" class="space-y-6">
                        ${y.parseTutor(T)}
                    </div>
                </div>
            `}else if(e==="quiz"){const v=((ne=(X=s.tabs)==null?void 0:X.quiz)==null?void 0:ne.questions)||((ie=s.quiz)==null?void 0:ie.questions);if(!s.quizPool&&v&&Array.isArray(v)&&(s.quizPool=v.map(T=>({question:T.q,options:T.a,answer:T.c,level:T.level||1}))),(!s.quizPool||s.quizPool.length===0)&&this.currentSubject==="math"){const T=await te.getQuizPool(s.period||s.id);T.length>0&&(s.quizPool=T,window.currentLessonData&&(window.currentLessonData.quizPool=T))}r=y.renderQuizContainer(s)}else if(e==="pptx"){const v=s.pptLink||"";r=`
                <div id="pptx-container" class="glass-card rounded-[40px] p-2 md:p-4 bg-white dark:bg-slate-900 min-h-[600px] animate-fade-in relative flex flex-col">
                    <div class="flex justify-between items-center mb-4 px-4">
                        <h3 class="text-xl font-black text-gray-800 dark:text-gray-100 flex items-center gap-2">
                            <span class="text-orange-500">🎦</span> Bài giảng PowerPoint
                        </h3>
                        <div class="flex gap-2">
                            <button id="btn-expand-pptx" onclick="Lesson.toggleFullscreenPPTX()" class="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-xl font-bold text-sm transition-all flex items-center gap-2">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path></svg>
                                Toàn màn hình
                            </button>
                            <button id="btn-collapse-pptx" onclick="Lesson.toggleFullscreenPPTX()" class="hidden bg-orange-100 hover:bg-orange-200 text-orange-700 px-4 py-2 rounded-xl font-bold text-sm transition-all flex items-center gap-2">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                Thu nhỏ
                            </button>
                        </div>
                    </div>
                    <div class="flex-grow w-full rounded-2xl overflow-hidden shadow-inner border border-gray-100 dark:border-slate-700 bg-gray-50 dark:bg-slate-800">
                        ${v?`
                            <iframe src="${v}" frameborder="0" width="100%" height="100%" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" scrolling="no" class="w-full h-[600px] md:h-[800px]"></iframe>
                        `:`
                            <div class="flex flex-col items-center justify-center h-full text-gray-400 py-32 space-y-4 text-center px-4">
                                <span class="text-6xl mb-4">📭</span>
                                <h4 class="text-xl font-black text-gray-600">Chưa có link bài giảng</h4>
                                <p class="text-sm font-bold max-w-md">Thầy/Cô hãy thêm link nhúng (embed link) từ <span class="text-blue-500">Google Slides</span> hoặc <span class="text-orange-500">Microsoft PowerPoint Online (Office 365)</span> vào biến <code class="bg-gray-200 px-2 py-1 rounded text-orange-600">pptLink</code> trong file dữ liệu bài học nhé.</p>
                            </div>
                        `}
                    </div>
                </div>
            `}if(a.innerHTML=r,e==="practice"||e==="study"){const v=a.querySelector("#ltTrack"),T=a.querySelectorAll(".ltTrang");if(v&&T.length>0&&!a.querySelector("#ltNav")){const N=T.length;let w="";for(let I=0;I<N;I++)w+=`
                <div class="${I===0?"ltCham active":"ltCham"}" data-index="${I}" onclick="window.ltChuyenNhanh(${I})" style="width:0.6rem;height:0.6rem;border-radius:50%;background:${I===0?"#2563eb":"#bfdbfe"};transform:${I===0?"scale(1.35)":"scale(1)"};transition:all 0.25s;cursor:pointer;"></div>`;w+=`
            `;const C=`<div id="ltNav" style="position:sticky; bottom:0; display:flex; align-items:center; justify-content:center; gap:1.5rem; padding:0.75rem 1rem; background:rgba(255,255,255,0.95); backdrop-filter:blur(12px); border-top:1px solid rgba(59,130,246,0.12); z-index:50; box-shadow:0 -4px 20px rgba(0,0,0,0.06);">
                    <button id="ltBtnTrai" data-no-normalize="true" aria-label="Trang trước" onclick="window.ltChuyenTrang(-1)" style="display:flex; align-items:center; justify-content:center; width:3.25rem; height:3.25rem; border-radius:50%; border:2px solid #bfdbfe; background:white; color:#2563eb; font-size:1.5rem; cursor:pointer; transition:all 0.2s; user-select:none; outline:none;">&#8592;</button>
                    <div style="display:flex;gap:0.5rem;align-items:center;">${w}</div>
                    <span id="ltChiSoTrang" style="font-size:1rem; font-weight:700; color:#1e40af; min-width:5rem; text-align:center;">Trang 1 / ${N}</span>
                    <button id="ltBtnPhai" data-no-normalize="true" aria-label="Trang sau" onclick="window.ltChuyenTrang(1)" style="display:flex; align-items:center; justify-content:center; width:3.25rem; height:3.25rem; border-radius:50%; border:2px solid #bfdbfe; background:white; color:#2563eb; font-size:1.5rem; cursor:pointer; transition:all 0.2s; user-select:none; outline:none;">&#8594;</button>
                </div>`,V=v.closest('div[class*="-mx-"]');V?V.insertAdjacentHTML("beforeend",C):v.parentNode.insertAdjacentHTML("afterend",C),window._ltTrang=0;const M=N,O=()=>{const I=document.getElementById("ltTrack"),A=document.getElementById("ltBtnTrai"),W=document.getElementById("ltBtnPhai"),J=document.getElementById("ltChiSoTrang"),ge=document.querySelectorAll(".ltCham");if(!I)return;const E=window._ltTrang;I.style.transform="translateX(-"+E*100+"%)",J&&(J.textContent="Trang "+(E+1)+" / "+M),ge.forEach((se,oe)=>{se.style.background=oe===E?"#2563eb":"#bfdbfe",se.style.transform=oe===E?"scale(1.35)":"scale(1)"}),A&&(A.disabled=E===0,A.style.opacity=E===0?"0.3":"1"),W&&(W.disabled=E===M-1,W.style.opacity=E===M-1?"0.3":"1")};window.ltChuyenTrang=I=>{const A=window._ltTrang+I;A<0||A>=M||(window._ltTrang=A,O())},window.ltChuyenNhanh=I=>{window._ltTrang=I,O()};const Y=I=>{I.key==="ArrowLeft"&&window.ltChuyenTrang(-1),I.key==="ArrowRight"&&window.ltChuyenTrang(1)};window._ltKeyDownHandler&&document.removeEventListener("keydown",window._ltKeyDownHandler),window._ltKeyDownHandler=Y,document.addEventListener("keydown",Y),setTimeout(O,0)}}a.querySelectorAll("script").forEach(v=>{const T=document.createElement("script");Array.from(v.attributes).forEach(N=>T.setAttribute(N.name,N.value)),T.appendChild(document.createTextNode(v.innerHTML)),v.parentNode.replaceChild(T,v)}),this.createMathModal(),(v=>{v.querySelectorAll("button").forEach(w=>{const C=(w.textContent||"").trim().toLowerCase(),V=(w.getAttribute("title")||"").trim().toLowerCase(),M=C.includes("nộp bài")||C.includes("hoàn thành")||C.includes("hoàn tất")||C.includes("gửi bài"),O=C==="e"||V.includes("thầy e")||C.includes("ai chấm")||C.includes("edurobot")||C.includes("góp ý"),Y=V.includes("kiểm tra")||C.includes("kiểm tra"),I=C.includes("làm lại")||C.includes("reset")||C.includes("thử lại");M&&!w.classList.contains("btn-submit-global")&&!w.classList.contains("btn-submit-premium")&&w.classList.add("btn-submit-global"),M&&!w.querySelector("svg")&&(w.textContent="NỘP BÀI"),O&&(w.classList.remove("btn-tutor-wide"),w.classList.add("btn-tutor-e"),w.querySelector("svg")||(w.textContent="E")),Y&&(w.classList.add("btn-check-e"),w.classList.remove("btn-check-premium","btn-check-wide"),w.querySelector("svg")||(w.textContent="E")),I&&!w.classList.contains("btn-retry")&&w.classList.add("btn-retry"),I&&!w.querySelector("svg")&&(w.textContent="LÀM LẠI")}),v.querySelectorAll('[id^="fb-"], [id^="feedback-"], .ai-feedback, .edu-feedback').forEach(w=>{w.classList.add("edu-feedback"),w.classList.contains("text-emerald-500")||w.classList.contains("text-emerald-700")||w.classList.contains("bg-emerald-50")?w.classList.add("edu-feedback-success"):(w.classList.contains("text-red-600")||w.classList.contains("bg-red-50"))&&w.classList.add("edu-feedback-error")})})(a),e==="quiz"&&y.initQuiz(s),window.scrollTo({top:0,behavior:"smooth"})},_audioInterval:null,_formatTime(e){if(!e||isNaN(e))return"0:00";const t=Math.floor(e/60),n=Math.floor(e%60);return`${t}:${n.toString().padStart(2,"0")}`},_updateAudioUI(){const e=document.getElementById("lesson-audio"),t=document.getElementById("audio-progress"),n=document.getElementById("audio-time");if(!e||!t||!n)return;const i=e.duration?e.currentTime/e.duration*100:0;t.style.width=i+"%",n.textContent=`${this._formatTime(e.currentTime)} / ${this._formatTime(e.duration)}`},toggleAudio(){const e=document.getElementById("lesson-audio");if(!e)return;const t=document.getElementById("btn-audio-play"),n=document.getElementById("icon-audio-play"),i=document.getElementById("icon-audio-pause");e.paused?(e.play(),n&&n.classList.add("hidden"),i&&i.classList.remove("hidden"),t&&t.classList.add("animate-pulse","ring-2","ring-white/50"),e.onended=()=>{this.stopAudio()}):(e.pause(),n&&n.classList.remove("hidden"),i&&i.classList.add("hidden"),t&&t.classList.remove("animate-pulse","ring-2","ring-white/50"))},stopAudio(){const e=document.getElementById("lesson-audio");if(!e)return;e.pause(),e.currentTime=0;const t=document.getElementById("btn-audio-play"),n=document.getElementById("icon-audio-play"),i=document.getElementById("icon-audio-pause");n&&n.classList.remove("hidden"),i&&i.classList.add("hidden"),t&&t.classList.remove("animate-pulse","ring-2","ring-white/50")},seekAudio(e){const t=document.getElementById("lesson-audio");if(!t||!t.duration)return;const i=e.currentTarget.getBoundingClientRect(),o=(e.clientX-i.left)/i.width;this.currentTime=o*t.duration,this._updateAudioUI()},createMathModal(){document.querySelectorAll("#math-modal-overlay").forEach(n=>n.remove());const e=document.createElement("div");if(e.id="math-modal-overlay",e.style.cssText="position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(15,23,42,0.7); backdrop-filter:blur(8px); z-index:9999; display:none; align-items:center; justify-content:center; padding:1rem;",e.innerHTML=`
            <div id="math-modal-content" style="background:#fff; width:100%; max-width:700px; border-radius:2.5rem; padding:1.25rem; box-shadow:0 25px 50px -12px rgba(0,0,0,0.5); position:relative; animation:mathModalZoomIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); display:flex; flex-direction:column; max-height:90vh; box-sizing:border-box;">
                <button id="math-modal-close-btn" style="position:absolute; top:1rem; right:1.5rem; font-size:1.75rem; font-weight:bold; color:#94a3b8; background:transparent; border:none; cursor:pointer; z-index:10; padding:0.25rem; line-height:1;">✕</button>
                <div id="modal-header-container" style="display:none !important;">
                    <div id="modal-icon"></div>
                    <div id="modal-title"></div>
                </div>
                <div id="modal-body" class="custom-scrollbar" style="color:#334155; font-size:1.25rem; line-height:1.8; flex:1; overflow-y:auto; max-height:100%; padding-right:0.5rem; margin-top:1rem;"></div>
            </div>
        `,document.body.appendChild(e),!document.getElementById("math-modal-keyframes")){const n=document.createElement("style");n.id="math-modal-keyframes",n.textContent="@keyframes mathModalZoomIn { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }",document.head.appendChild(n)}window.closeMathModal=function(){const n=document.getElementById("math-modal-overlay");n&&(n.style.display="none")},e.addEventListener("click",function(n){n.target===e&&window.closeMathModal()});const t=document.getElementById("math-modal-close-btn");t&&t.addEventListener("click",window.closeMathModal)},detectAndApplyDeviceMode(){let t=new URLSearchParams(window.location.search).get("mode");if(t==="tv"||t==="mobile")localStorage.setItem("preferred_mode",t);else if(t=localStorage.getItem("preferred_mode"),!t){const n=/Mobi|Android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),i=window.innerWidth<768;n||i?t="mobile":t="tv"}t==="mobile"?(document.body.classList.remove("presentation-mode"),document.body.classList.add("mobile-mode"),console.log("[Device Mode] Tự động kích hoạt chế độ Điện thoại (Mobile)"),setTimeout(()=>{const n=document.getElementById("desktop-toggle-tv-btn"),i=document.getElementById("desktop-toggle-mobile-btn");n&&(n.style.display="block"),i&&(i.style.display="none")},100)):(document.body.classList.add("presentation-mode"),document.body.classList.remove("mobile-mode"),console.log("[Device Mode] Tự động kích hoạt chế độ TV/Trình chiếu"),setTimeout(()=>{const n=document.getElementById("desktop-toggle-tv-btn"),i=document.getElementById("desktop-toggle-mobile-btn");n&&(n.style.display="none"),i&&(i.style.display="block")},100))},switchDeviceMode(e){(e==="tv"||e==="mobile")&&(localStorage.setItem("preferred_mode",e),this.detectAndApplyDeviceMode(),window.location.reload())}},Q={audioContext:null,sounds:{correct:null,wrong:null,fanfare:null,click:null},isMuted:!1,init(){try{const e=window.AudioContext||window.webkitAudioContext;e&&(this.audioContext=new e,this.synthesizeSounds())}catch(e){console.warn("Web Audio API not supported",e)}},synthesizeSounds(){if(!this.audioContext)return;let e=this.audioContext;this.sounds.correct=()=>{if(this.isMuted)return;this._resumeContext();let t=e.createOscillator(),n=e.createGain();t.connect(n),n.connect(e.destination),t.type="sine",t.frequency.setValueAtTime(800,e.currentTime),t.frequency.exponentialRampToValueAtTime(1200,e.currentTime+.1),n.gain.setValueAtTime(.5,e.currentTime),n.gain.exponentialRampToValueAtTime(.01,e.currentTime+.5),t.start(e.currentTime),t.stop(e.currentTime+.5)},this.sounds.wrong=()=>{if(this.isMuted)return;this._resumeContext();let t=e.createOscillator(),n=e.createGain();t.connect(n),n.connect(e.destination),t.type="sawtooth",t.frequency.setValueAtTime(150,e.currentTime),t.frequency.exponentialRampToValueAtTime(100,e.currentTime+.3),n.gain.setValueAtTime(.5,e.currentTime),n.gain.exponentialRampToValueAtTime(.01,e.currentTime+.3),t.start(e.currentTime),t.stop(e.currentTime+.3)},this.sounds.fanfare=()=>{if(this.isMuted)return;this._resumeContext();let t=e.createOscillator(),n=e.createGain();t.connect(n),n.connect(e.destination),t.type="square";const i=[523.25,659.25,783.99,1046.5];let s=e.currentTime;i.forEach((o,a)=>{t.frequency.setValueAtTime(o,s+a*.15)}),n.gain.setValueAtTime(0,e.currentTime),n.gain.linearRampToValueAtTime(.3,e.currentTime+.05),n.gain.setValueAtTime(.3,e.currentTime+.45),n.gain.linearRampToValueAtTime(0,e.currentTime+.7),t.start(e.currentTime),t.stop(e.currentTime+.8)},this.sounds.click=()=>{if(this.isMuted)return;this._resumeContext();let t=e.createOscillator(),n=e.createGain();t.connect(n),n.connect(e.destination),t.type="sine",t.frequency.setValueAtTime(600,e.currentTime),n.gain.setValueAtTime(.1,e.currentTime),n.gain.exponentialRampToValueAtTime(.01,e.currentTime+.1),t.start(e.currentTime),t.stop(e.currentTime+.1)}},_resumeContext(){this.audioContext&&this.audioContext.state==="suspended"&&this.audioContext.resume()},play(e){if(this.audioContext||this.init(),this.sounds[e])try{this.sounds[e]()}catch(t){console.warn("Audio play failed",t)}},playCorrect(){this.play("correct")},playWrong(){this.play("wrong")},playFanfare(){this.play("fanfare"),window.celebrate&&window.celebrate()},playClick(){this.play("click")},toggleMute(){return this.isMuted=!this.isMuted,this.isMuted}};typeof window<"u"&&(window.SoundManager=Q,document.addEventListener("click",()=>{Q.audioContext||Q.init(),Q._resumeContext()},{once:!0}));const F={lessonInfo:{period:"61",week:"13",topic:"Hình học",title:"BÀI 26: HÌNH THANG (TIẾT 2 - VẼ HÌNH THANG)",desc:"Thực hành vẽ hình thang trên giấy kẻ ô vuông; vẽ thêm đoạn thẳng tạo hình thang; vẽ và tô màu trang trí theo hình mẫu."},bai_tap:[{id:"61_bt1",type:"fill_multiple",title:"Hoạt động 1: Vẽ hình thang MNPQ với MN và QP là hai đáy (trên giấy kẻ ô vuông)",answers:["Đã hoàn thành"],guidance:"Em hãy sử dụng bảng vẽ trực tuyến bên dưới để vẽ hình thang MNPQ (đáy MN song song với QP) hoặc vẽ vào vở rồi chụp ảnh tải lên nhé!",solution:"Hình thang MNPQ phải đảm bảo cạnh đáy MN song song với cạnh đáy QP."},{id:"61_bt2",type:"multiple_choice",title:"Hoạt động 2: Bạn nào thực hiện đúng yêu cầu vẽ thêm hai đoạn thẳng để được một hình thang?",answers:["C cả hai bạn đều đúng"],guidance:"Hình thang là tứ giác có một cặp cạnh đối diện song song. Em hãy kiểm tra xem hình của bạn Mai và bạn Việt có cặp cạnh nào song song không nhé!",solution:"Cả hai bạn đều vẽ đúng!<br>- Bạn Mai vẽ thêm 2 đoạn thẳng tạo thành hình thang có đáy trên và đáy dưới song song.<br>- Bạn Việt vẽ thêm 2 đoạn thẳng tạo thành hình thang có hai cạnh bên (chéo) song song."},{id:"61_bt3",type:"fill_multiple",title:"Hoạt động 3: Vẽ hình (theo mẫu hoa văn)",answers:["Đã hoàn thành"],guidance:"Quan sát kỹ hình mẫu gồm 4 hình ghép lại xung quanh tâm. Em hãy dùng bảng vẽ hoặc vẽ vào vở rồi chụp ảnh gửi Thầy/Cô nhé!",solution:"Mẫu hoa văn gồm 1 hình thoi thẳng đứng ở giữa và 2 hình bình hành nghiêng ở hai bên đáy.<br>Em vẽ hình rất cân đối và đẹp mắt!"},{id:"61_bt4",type:"fill_multiple",title:"Hoạt động 4: Vẽ hình chiếc cầu và cá theo mẫu rồi tô màu trang trí",answers:["Đã hoàn thành"],guidance:"Hãy kiên nhẫn đếm số ô vuông trên mẫu để vẽ chiếc cầu cùng các chú cá nhỏ thật chính xác. Đừng quên tô màu thật sinh động nhé!",solution:"Bài vẽ chiếc cầu và chú cá của em đã được gửi thành công.<br>Bức tranh tô màu rất sáng tạo và rực rỡ!"}],quizPool:[{question:"Để vẽ hình thang ABCD có đáy AB và CD, bước đầu tiên ta vẽ đoạn thẳng AB. Bước tiếp theo ta cần làm gì?",options:["Vẽ đoạn thẳng BC vuông góc với AB","Vẽ đoạn thẳng CD song song với AB","Vẽ đoạn thẳng AD chéo với AB","Vẽ đoạn thẳng AC bằng với AB"],answer:1},{question:"Khi vẽ hình thang trên giấy ô vuông, hai cạnh đáy của hình thang nên nằm như thế nào so với các đường kẻ ô vuông?",options:["Cắt chéo tùy ý","Trùng hoặc song song với các đường kẻ ngang/dọc của ô vuông","Nằm vuông góc chéo nhau","Không cần song song"],answer:1},{question:"Bạn Nam vẽ một hình thang có đáy trên là 3 ô vuông, đáy dưới là 6 ô vuông. Hình của Nam có phải là hình thang không?",options:["Có, vì hai đáy song song với nhau","Không, vì hai đáy không bằng nhau","Không, vì chiều dài hai đáy khác nhau","Chưa thể kết luận"],answer:0},{question:"Trong hoạt động 2 của bài học, bạn Việt vẽ thêm 2 đường xiên để tạo hình thang. Vì sao cách vẽ của Việt vẫn đúng?",options:["Vì hình đó có hai đáy nằm ngang","Vì hình đó có một cặp cạnh bên song song với nhau","Vì hình đó có 4 góc vuông","Vì hình đó giống hình vuông"],answer:1},{question:"Đoạn thẳng nối hai điểm trên hai đường thẳng song song và vuông góc với cả hai đường thẳng đó được gọi là gì?",options:["Cạnh bên","Đường cao (chiều cao)","Đường chéo","Trục đối xứng"],answer:1},{question:"Tứ giác có 2 cặp cạnh đối diện song song có phải là hình thang không?",options:["Không phải","Có, đó là hình thang đặc biệt (hình bình hành)","Chỉ khi có góc vuông","Chỉ khi có các cạnh bằng nhau"],answer:1},{question:"Khi vẽ hình mẫu hoa văn ở Bài 3, các hình thoi và hình bình hành được xếp đối xứng qua đâu?",options:["Trục nằm ngang","Điểm tâm ở giữa đáy hình thoi đứng","Không đối xứng","Trục thẳng đứng ở góc"],answer:1},{question:"Khi vẽ hình thang MNPQ (đáy MN và PQ) trên giấy kẻ ô vuông, nếu MN dài 4 ô và nằm ngang, PQ dài 7 ô thì PQ phải:",options:["Nằm dọc thẳng đứng","Nằm ngang và song song với MN","Nằm nghiêng 45 độ","Nối liền với MN"],answer:1},{question:"Hình thang vuông có bao nhiêu góc vuông?",options:["1 góc vuông","Tối thiểu 2 góc vuông","3 góc vuông","4 góc vuông"],answer:1},{question:"Nếu vẽ một hình thang có 2 cạnh bên bằng nhau và song song với nhau, hình đó trở thành hình gì?",options:["Hình tam giác","Hình bình hành","Hình thang vuông","Hình ngũ giác"],answer:1},{question:"Để vẽ được một hình thang cân trên giấy kẻ ô vuông, ta cần lưu ý điều gì?",options:["Hai cạnh bên có độ dốc đối xứng nhau","Hai đáy có độ dài bằng nhau","Các góc đều bằng 90 độ","Vẽ không cần thước"],answer:0},{question:"Trong hình vẽ chiếc cầu (Bài 4), phần mái cầu có dạng các hình gì ghép lại?",options:["Các hình tròn","Các hình tam giác và hình thang","Các hình thoi","Các hình lục giác"],answer:1},{question:"Khi vẽ thêm đoạn thẳng để tạo hình thang, mục tiêu quan trọng nhất là tạo ra:",options:["Một góc vuông","Bốn cạnh bằng nhau","Ít nhất một cặp cạnh đối diện song song","Hai đường chéo bằng nhau"],answer:2},{question:"Bạn Mai vẽ một hình tứ giác có đáy AB song song với CD, cạnh AD song song với BC. Hình này có được coi là hình thang không?",options:["Có","Không","Chỉ khi AB = CD","Chỉ khi AD = BC"],answer:0},{question:"Hình thang có hai đường chéo bằng nhau là hình gì?",options:["Hình thang cân","Hình thang vuông","Hình bình hành","Hình thoi"],answer:0}]};window.MATH_BUILDER_METADATA=F;const pe={...F.lessonInfo,metadata:F,quizPool:[...F.quizPool].sort(()=>Math.random()-.5).slice(0,10),content:`
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">
            <!-- Slide 1: Khám phá lý thuyết -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="space-y-6">
                    <div class="grid grid-cols-1 gap-6">
                        <div class="bg-white p-4 rounded-3xl border border-blue-100 shadow-md flex flex-col justify-center items-center">
                            <img src="./assets/images/toan/toan_tap_1/61/kpa.png" alt="Khám phá vẽ hình thang" class="max-h-72 object-contain rounded-2xl">
                        </div>
                        <div class="bg-blue-50/50 p-6 rounded-[2rem] border border-blue-200 shadow-sm space-y-4">
                            <h3 class="text-xl md:text-2xl font-black text-blue-900 flex items-center gap-2">
                                <span>💬</span> Hoạt động khởi động:
                            </h3>
                            <div class="space-y-3 font-medium text-slate-700 leading-relaxed text-sm md:text-base">
                                <p class="bg-white p-3 rounded-2xl border border-slate-100"><strong class="text-blue-600">Mai:</strong> "Tớ vừa vẽ nhà sàn này các bạn ạ. Tớ sẽ vẽ thêm cái thang nữa."</p>
                                <p class="bg-white p-3 rounded-2xl border border-slate-100"><strong class="text-emerald-600">Nam:</strong> "Vẽ cái thang như thế nào nhỉ?"</p>
                                <p class="bg-white p-3 rounded-2xl border border-slate-100"><strong class="text-orange-600">Robot:</strong> "Là vẽ các hình thang đấy Việt à."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Slide 2: Các bước vẽ hình thang ABCD -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="space-y-6">
                    <div class="bg-gradient-to-r from-emerald-600 to-teal-500 text-white p-6 rounded-[2.5rem] shadow-lg">
                        <span class="text-sm font-black uppercase tracking-wider opacity-90">Hướng dẫn thực hành</span>
                        <h2 class="text-2xl md:text-4xl font-black mt-1">CÁC BƯỚC VẼ HÌNH THANG ABCD</h2>
                    </div>

                    <div class="grid grid-cols-1 gap-6">
                        <div class="bg-white p-6 rounded-3xl border border-emerald-100 shadow-md flex justify-center">
                            <div class="relative w-full max-w-sm aspect-[4/3] bg-slate-50 rounded-2xl border-2 border-slate-200 overflow-hidden flex flex-col items-center justify-center p-4">
                                <div class="grid grid-cols-10 grid-rows-8 gap-0 border border-slate-300 w-full h-4/5 relative bg-white" style="background-size: 10% 12.5%; background-image: linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px);">
                                    <!-- A, B, C, D representation inside SVG -->
                                    <svg class="absolute inset-0 w-full h-full" viewBox="0 0 100 80">
                                        <line x1="30" y1="20" x2="80" y2="20" stroke="#10b981" stroke-width="2" stroke-dasharray="4" id="line-ab"/>
                                        <line x1="20" y1="60" x2="90" y2="60" stroke="#10b981" stroke-width="2" stroke-dasharray="4" id="line-dc"/>
                                        <line x1="30" y1="20" x2="20" y2="60" stroke="#3b82f6" stroke-width="1.5" id="line-ad"/>
                                        <line x1="80" y1="20" x2="90" y2="60" stroke="#3b82f6" stroke-width="1.5" id="line-bc"/>
                                        <circle cx="30" cy="20" r="2.5" fill="#ef4444"/>
                                        <circle cx="80" cy="20" r="2.5" fill="#ef4444"/>
                                        <circle cx="90" cy="60" r="2.5" fill="#ef4444"/>
                                        <circle cx="20" cy="60" r="2.5" fill="#ef4444"/>
                                        <text x="27" y="15" font-size="6" font-weight="bold" fill="#1e293b">A</text>
                                        <text x="82" y="15" font-size="6" font-weight="bold" fill="#1e293b">B</text>
                                        <text x="92" y="66" font-size="6" font-weight="bold" fill="#1e293b">C</text>
                                        <text x="14" y="66" font-size="6" font-weight="bold" fill="#1e293b">D</text>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4 text-slate-700">
                            <h3 class="text-lg md:text-xl font-black text-emerald-900 uppercase">Cách vẽ hình thang ABCD (đáy AB và DC):</h3>
                            <ul class="space-y-4 text-sm md:text-base font-bold">
                                <li class="flex items-start gap-2"><span class="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">1</span> <span>Vẽ đoạn thẳng <strong class="text-blue-600">AB</strong> trên một đường kẻ ngang của lưới ô vuông.</span></li>
                                <li class="flex items-start gap-2"><span class="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">2</span> <span>Vẽ đoạn thẳng <strong class="text-blue-600">DC</strong> song song với đoạn thẳng AB (trên một đường kẻ ngang khác).</span></li>
                                <li class="flex items-start gap-2"><span class="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">3</span> <span>Nối đầu mút <strong class="text-orange-600">A với D</strong> và <strong class="text-orange-600">B với C</strong> để hoàn tất hình thang ABCD có hai đáy AB và DC.</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,practice:`
        <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
        <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">
            <!-- Bài 1: Vẽ hình thang MNPQ -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="space-y-6">
                    <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                        <div class="flex items-center gap-3">
                            <span class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-xl">1</span>
                            <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 1. Vẽ hình thang MNPQ với MN và QP là hai đáy (trên giấy kẻ ô vuông)</h3>
                        </div>
                    </div>

                    <div class="bg-blue-50/50 p-4 rounded-2xl border border-blue-100 text-sm md:text-base font-bold text-slate-700">
                        💡 Em hãy chọn phương thức làm bài: Vẽ trực tiếp trên bảng lưới ô vuông bên dưới, hoặc vẽ ra vở rồi chụp ảnh tải lên nhé!
                    </div>

                    <!-- Bảng vẽ & Tải ảnh tích hợp cho Bài 1 -->
                    <div id="draw-container-61-1" class="space-y-4">
                        <!-- Component vẽ tích hợp -->
                    </div>

                    <!-- Footer chấm điểm -->
                    <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-4 mt-4">
                        <button onclick="window.toggleSolution('sol-61-bt1')" class="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm md:text-lg rounded-2xl shadow-md active:scale-95 transition-all">Hiện bài giải</button>
                        <button id="btn-check-61-bt1" onclick="window.checkDrawingExercise('61-1', '61_bt1')" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-2xl md:text-4xl flex items-center justify-center shadow-lg transition-all active:scale-95">E</button>
                    </div>

                    <!-- Lời giải chi tiết -->
                    <div id="sol-61-bt1" class="hidden p-6 bg-amber-50 border-2 border-dashed border-amber-200 rounded-3xl animate-in fade-in duration-300">
                        <h4 class="font-black text-amber-800 text-lg mb-2">📖 LỜI GIẢI CHI TIẾT BÀI 1:</h4>
                        <p class="text-slate-700 leading-relaxed font-bold text-sm md:text-base">
                            Hình vẽ của em cần đảm bảo các tiêu chí sau:<br>
                            1. Là tứ giác có 4 đỉnh M, N, P, Q ghép lại.<br>
                            2. Cạnh đáy MN song song với cạnh đáy QP (MN và QP nằm trùng với các đường kẻ lưới ô vuông nằm ngang).<br>
                            Ví dụ: Đáy MN dài 4 ô ở hàng trên, đáy QP dài 8 ô ở hàng dưới. Nối M với Q, N với P.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Bài 2: Bạn nào thực hiện đúng yêu cầu? -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="space-y-6">
                    <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                        <div class="flex items-center gap-3">
                            <span class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-xl">2</span>
                            <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 2. Vẽ thêm hai đoạn thẳng để được một hình thang. Bạn nào làm đúng?</h3>
                        </div>
                    </div>

                    <div class="bg-white p-4 rounded-3xl border border-slate-150 shadow-sm flex flex-col items-center max-w-sm mx-auto mb-4">
                        <span class="text-xs font-black text-slate-400 mb-2 uppercase">Hình vẽ ban đầu (Đề bài)</span>
                        <img src="./assets/images/toan/toan_tap_1/61/2 Đề.png" alt="Bài 2: Đề bài" class="max-h-36 object-contain rounded-xl">
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div class="bg-white p-4 rounded-3xl border border-slate-150 shadow-sm flex flex-col items-center">
                            <span class="text-xs font-black text-orange-500 mb-2 uppercase">Hình vẽ của bạn Mai</span>
                            <img src="./assets/images/toan/toan_tap_1/61/2 Mai.png" alt="Bài 2: Hình vẽ Mai" class="max-h-48 object-contain rounded-xl">
                        </div>
                        <div class="bg-white p-4 rounded-3xl border border-slate-150 shadow-sm flex flex-col items-center">
                            <span class="text-xs font-black text-blue-500 mb-2 uppercase">Hình vẽ của bạn Việt</span>
                            <img src="./assets/images/toan/toan_tap_1/61/2 Việt.png" alt="Bài 2: Hình vẽ Việt" class="max-h-48 object-contain rounded-xl">
                        </div>
                    </div>

                    <div class="bg-blue-50/50 p-6 rounded-3xl border border-blue-100 space-y-4">
                        <p class="text-base md:text-lg font-bold text-slate-700 text-center">
                            Em hãy chọn nhận định chính xác nhất dưới đây:
                        </p>
                        
                        <div class="flex flex-col gap-3 max-w-md mx-auto">
                            <button id="btn-choice-61-2-A" onclick="window.selectChoice_61_2('A')" class="px-6 py-4 bg-white border-2 border-slate-200 rounded-2xl font-black text-slate-700 hover:border-blue-500 active:scale-95 transition-all text-left text-sm md:text-base">A. Chỉ bạn Mai vẽ đúng</button>
                            <button id="btn-choice-61-2-B" onclick="window.selectChoice_61_2('B')" class="px-6 py-4 bg-white border-2 border-slate-200 rounded-2xl font-black text-slate-700 hover:border-blue-500 active:scale-95 transition-all text-left text-sm md:text-base">B. Chỉ bạn Việt vẽ đúng</button>
                            <button id="btn-choice-61-2-C" onclick="window.selectChoice_61_2('C')" class="px-6 py-4 bg-white border-2 border-slate-200 rounded-2xl font-black text-slate-700 hover:border-blue-500 active:scale-95 transition-all text-left text-sm md:text-base">C. Cả hai bạn đều thực hiện đúng yêu cầu</button>
                        </div>
                    </div>

                    <!-- Footer chấm điểm -->
                    <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-4 mt-4">
                        <button onclick="window.toggleSolution('sol-61-bt2')" class="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm md:text-lg rounded-2xl shadow-md active:scale-95 transition-all">Hiện bài giải</button>
                        <button id="btn-check-61-bt2" onclick="window.check_61_bt2()" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-2xl md:text-4xl flex items-center justify-center shadow-lg transition-all active:scale-95">E</button>
                    </div>

                    <!-- Lời giải chi tiết -->
                    <div id="sol-61-bt2" class="hidden p-6 bg-amber-50 border-2 border-dashed border-amber-200 rounded-3xl animate-in fade-in duration-300">
                        <h4 class="font-black text-amber-800 text-lg mb-2">📖 LỜI GIẢI CHI TIẾT BÀI 2:</h4>
                        <p class="text-slate-700 leading-relaxed font-bold text-sm md:text-base">
                            <strong>Đáp án đúng: C. Cả hai bạn đều thực hiện đúng yêu cầu.</strong><br>
                            - Bạn Mai vẽ thêm hai đoạn thẳng để tạo ra một hình thang có hai cạnh đáy song song nằm ngang.<br>
                            - Bạn Việt vẽ thêm hai đoạn thẳng tạo ra một hình thang có hai cạnh đối diện (cạnh bên chéo) song song.<br>
                            Vì hình thang chỉ cần có một cặp cạnh đối diện song song, nên cả hai cách vẽ của Mai và Việt đều chính xác và sáng tạo!
                        </p>
                    </div>
                </div>
            </div>

            <!-- Bài 3: Vẽ hình (theo mẫu) -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="space-y-6">
                    <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                        <div class="flex items-center gap-3">
                            <span class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-xl">3</span>
                            <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 3. Vẽ hình theo mẫu (Họa tiết đối xứng)</h3>
                        </div>
                    </div>

                    <div class="bg-white p-4 rounded-3xl border border-slate-150 shadow-sm flex flex-col items-center">
                        <img src="./assets/images/toan/toan_tap_1/61/3 Mẫu.png" alt="Bài 3: Vẽ hình theo mẫu" class="max-h-56 object-contain rounded-xl">
                    </div>

                    <div id="draw-container-61-3" class="space-y-4">
                        <!-- Canvas board integration -->
                    </div>

                    <!-- Footer chấm điểm -->
                    <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-4 mt-4">
                        <button onclick="window.toggleSolution('sol-61-bt3')" class="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm md:text-lg rounded-2xl shadow-md active:scale-95 transition-all">Hiện bài giải</button>
                        <button id="btn-check-61-bt3" onclick="window.checkDrawingExercise('61-3', '61_bt3')" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-2xl md:text-4xl flex items-center justify-center shadow-lg transition-all active:scale-95">E</button>
                    </div>

                    <!-- Lời giải chi tiết -->
                    <div id="sol-61-bt3" class="hidden p-6 bg-amber-50 border-2 border-dashed border-amber-200 rounded-3xl animate-in fade-in duration-300">
                        <h4 class="font-black text-amber-800 text-lg mb-2">📖 LỜI GIẢI CHI TIẾT BÀI 3:</h4>
                        <p class="text-slate-700 leading-relaxed font-bold text-sm md:text-base">
                            Mẫu họa tiết đối xứng gồm:<br>
                            1. Một hình thoi thẳng đứng ở trung tâm.<br>
                            2. Hai hình bình hành nghiêng đối xứng nhau ở bên trái và bên phải tại chân hình thoi đứng.<br>
                            Em hãy đếm kỹ các ô để đảm bảo các đỉnh nằm chính xác trên giao điểm của lưới ô vuông nhé. Cảm ơn em đã vẽ bức tranh rất đẹp!
                        </p>
                    </div>
                </div>
            </div>

            <!-- Bài 4: Vẽ hình chiếc cầu và cá theo mẫu -->
            <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                <div class="space-y-6">
                    <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                        <div class="flex items-center gap-3">
                            <span class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-xl">4</span>
                            <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 4. Vẽ hình theo mẫu chiếc cầu và cá; tô màu trang trí</h3>
                        </div>
                    </div>

                    <div class="bg-white p-4 rounded-3xl border border-slate-150 shadow-sm flex flex-col items-center">
                        <img src="./assets/images/toan/toan_tap_1/61/4 mẫu.png" alt="Bài 4: Vẽ hình chiếc cầu và cá" class="max-h-56 object-contain rounded-xl">
                    </div>

                    <div id="draw-container-61-4" class="space-y-4">
                        <!-- Canvas board integration -->
                    </div>

                    <!-- Footer chấm điểm -->
                    <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-4 mt-4">
                        <button onclick="window.toggleSolution('sol-61-bt4')" class="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm md:text-lg rounded-2xl shadow-md active:scale-95 transition-all">Hiện bài giải</button>
                        <button id="btn-check-61-bt4" onclick="window.checkDrawingExercise('61-4', '61_bt4')" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-2xl md:text-4xl flex items-center justify-center shadow-lg transition-all active:scale-95">E</button>
                    </div>

                    <!-- Lời giải chi tiết -->
                    <div id="sol-61-bt4" class="hidden p-6 bg-amber-50 border-2 border-dashed border-amber-200 rounded-3xl animate-in fade-in duration-300">
                        <h4 class="font-black text-amber-800 text-lg mb-2">📖 LỜI GIẢI CHI TIẾT BÀI 4:</h4>
                        <p class="text-slate-700 leading-relaxed font-bold text-sm md:text-base">
                            Chiếc cầu được cấu thành từ mái hình tam giác lớn kết hợp với các trụ cầu hình chữ nhật đứng.<br>
                            Phía dưới cầu là các hình thoi tạo hình những chú cá xinh xắn.<br>
                            Bức tranh vẽ và tô màu sáng tạo của em rất xuất sắc!
                        </p>
                    </div>
                </div>
            </div>
        </div>
            </div>
        </div>
        <script>
            setTimeout(() => {
                window.initDrawingArea('61-1');
                window.initDrawingArea('61-3');
                window.initDrawingArea('61-4');
            }, 100);
        <\/script>
    `};window.lesson61=pe;window.drawingStates=window.drawingStates||{};window.initDrawingArea=function(e){const t=document.getElementById("draw-container-"+e);t&&(t.innerHTML=`
        <div class="flex flex-col xl:flex-row gap-6 mt-4 items-stretch">
            <!-- Bảng vẽ trực tiếp -->
            <div class="flex-1 bg-white p-4 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center">
                <div class="flex flex-wrap gap-2 mb-3 justify-center w-full">
                    <button onclick="window.setDrawTool('${e}', 'pencil')" id="btn-tool-${e}-pencil" class="px-4 py-2 rounded-xl text-xs font-black bg-blue-600 text-white flex items-center gap-1 active:scale-95 transition-all">✏️ Bút vẽ</button>
                    <button onclick="window.setDrawTool('${e}', 'line')" id="btn-tool-${e}-line" class="px-4 py-2 rounded-xl text-xs font-black bg-slate-100 text-slate-700 hover:bg-slate-200 flex items-center gap-1 active:scale-95 transition-all">📏 Thước kẻ thẳng</button>
                    <button onclick="window.setDrawColor('${e}', '#3b82f6')" class="w-8 h-8 rounded-full border-2 border-white shadow bg-blue-500 active:scale-95 transition-all" title="Màu xanh dương"></button>
                    <button onclick="window.setDrawColor('${e}', '#ef4444')" class="w-8 h-8 rounded-full border-2 border-white shadow bg-red-500 active:scale-95 transition-all" title="Màu đỏ"></button>
                    <button onclick="window.setDrawColor('${e}', '#10b981')" class="w-8 h-8 rounded-full border-2 border-white shadow bg-emerald-500 active:scale-95 transition-all" title="Màu xanh lá"></button>
                    <button onclick="window.setDrawColor('${e}', '#f59e0b')" class="w-8 h-8 rounded-full border-2 border-white shadow bg-amber-500 active:scale-95 transition-all" title="Màu vàng"></button>
                    <button onclick="window.setDrawColor('${e}', '#000000')" class="w-8 h-8 rounded-full border-2 border-white shadow bg-black active:scale-95 transition-all" title="Màu đen"></button>
                    <div class="w-[1px] bg-slate-200 mx-1"></div>
                    <button onclick="window.undoDraw('${e}')" class="px-3 py-2 bg-slate-100 text-slate-700 rounded-xl text-xs font-bold hover:bg-slate-200 active:scale-95 transition-all">↩️ Hoàn tác</button>
                    <button onclick="window.clearDraw('${e}')" class="px-3 py-2 bg-rose-50 text-rose-600 rounded-xl text-xs font-bold hover:bg-rose-100 active:scale-95 transition-all">🗑️ Xóa bảng</button>
                </div>
                <div class="relative w-full aspect-[4/3] max-w-lg border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-inner">
                    <canvas id="canvas-${e}" class="w-full h-full block cursor-crosshair z-10 relative"></canvas>
                </div>
            </div>

            <!-- Chụp ảnh / Tải tệp lên -->
            <div class="w-full xl:w-72 bg-slate-50 p-6 rounded-3xl border border-slate-200 flex flex-col justify-between shadow-sm">
                <div class="space-y-4">
                    <h4 class="text-sm font-black text-slate-700 uppercase tracking-wider flex items-center gap-1">📸 HOẶC CHỤP ẢNH VỞ GHI</h4>
                    <p class="text-xs text-slate-500 font-bold leading-relaxed">Nếu em vẽ hình ra vở bài tập, hãy chụp ảnh lại và tải ảnh chụp lên đây nhé!</p>
                    
                    <div onclick="document.getElementById('file-input-${e}').click()" class="border-2 border-dashed border-slate-300 hover:border-blue-500 cursor-pointer p-4 rounded-2xl text-center bg-white transition-all flex flex-col items-center justify-center min-h-[140px] group shadow-inner">
                        <span class="text-4xl group-hover:scale-110 transition-transform mb-2">📸</span>
                        <span class="text-xs font-black text-slate-600">Bấm để chụp / Tải ảnh lên</span>
                        <input type="file" id="file-input-${e}" class="hidden" accept="image/*" onchange="window.handleCanvasFileUpload('${e}', this)">
                    </div>
                </div>
                
                <div id="preview-container-${e}" class="hidden mt-4 bg-white p-3 rounded-2xl border border-slate-200 relative animate-fade-in shadow-sm">
                    <span class="text-[9px] font-black text-slate-400 absolute top-1 left-2 uppercase">Ảnh đã nạp</span>
                    <button onclick="window.clearUploadedFile('${e}')" class="absolute top-1 right-2 bg-rose-100 hover:bg-rose-200 text-rose-700 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold">✕</button>
                    <img id="preview-img-${e}" src="" class="w-full max-h-32 object-contain rounded-lg mt-2">
                </div>
            </div>
        </div>
    `,setTimeout(()=>window.setupCanvasDrawing(e),100))};window.setupCanvasDrawing=function(e){const t=document.getElementById("canvas-"+e);if(!t)return;const n=t.getContext("2d"),i=t.getBoundingClientRect();t.width=i.width,t.height=i.height,window.drawingStates[e]={tool:"pencil",color:"#3b82f6",width:3,history:[],drawing:!1,lastX:0,lastY:0,points:[],fileData:null},(()=>{n.strokeStyle="#f1f5f9",n.lineWidth=1;const d=25;for(let c=0;c<t.width;c+=d)n.beginPath(),n.moveTo(c,0),n.lineTo(c,t.height),n.stroke();for(let c=0;c<t.height;c+=d)n.beginPath(),n.moveTo(0,c),n.lineTo(t.width,c),n.stroke()})();const o=d=>{const c=t.getBoundingClientRect(),h=d.touches?d.touches[0].clientX:d.clientX,u=d.touches?d.touches[0].clientY:d.clientY;let g=h-c.left,m=u-c.top;return window.drawingStates[e].tool==="line"&&(g=Math.round(g/25)*25,m=Math.round(m/25)*25),{x:g,y:m}},a=d=>{d.preventDefault();const c=window.drawingStates[e];c.drawing=!0;const{x:h,y:u}=o(d);c.lastX=h,c.lastY=u,c.tool==="line"&&(c.points=[{x:h,y:u}],c.savedImage=n.getImageData(0,0,t.width,t.height))},r=d=>{if(!window.drawingStates[e].drawing)return;d.preventDefault();const c=window.drawingStates[e],{x:h,y:u}=o(d);c.tool==="pencil"?(n.beginPath(),n.strokeStyle=c.color,n.lineWidth=c.width,n.lineCap="round",n.lineJoin="round",n.moveTo(c.lastX,c.lastY),n.lineTo(h,u),n.stroke(),c.lastX=h,c.lastY=u):c.tool==="line"&&(n.putImageData(c.savedImage,0,0),n.beginPath(),n.strokeStyle=c.color,n.lineWidth=c.width,n.lineCap="round",n.moveTo(c.points[0].x,c.points[0].y),n.lineTo(h,u),n.stroke())},l=d=>{const c=window.drawingStates[e];c.drawing&&(c.drawing=!1,c.history.push(n.getImageData(0,0,t.width,t.height)))};t.addEventListener("mousedown",a),t.addEventListener("mousemove",r),t.addEventListener("mouseup",l),t.addEventListener("mouseleave",l),t.addEventListener("touchstart",a,{passive:!1}),t.addEventListener("touchmove",r,{passive:!1}),t.addEventListener("touchend",l,{passive:!1})};window.setDrawTool=function(e,t){const n=window.drawingStates[e];if(!n)return;n.tool=t;const i=document.getElementById("btn-tool-"+e+"-pencil"),s=document.getElementById("btn-tool-"+e+"-line");t==="pencil"?(i.className="px-4 py-2 rounded-xl text-xs font-black bg-blue-600 text-white flex items-center gap-1 active:scale-95 transition-all",s.className="px-4 py-2 rounded-xl text-xs font-black bg-slate-100 text-slate-700 hover:bg-slate-200 flex items-center gap-1 active:scale-95 transition-all"):(s.className="px-4 py-2 rounded-xl text-xs font-black bg-blue-600 text-white flex items-center gap-1 active:scale-95 transition-all",i.className="px-4 py-2 rounded-xl text-xs font-black bg-slate-100 text-slate-700 hover:bg-slate-200 flex items-center gap-1 active:scale-95 transition-all")};window.setDrawColor=function(e,t){const n=window.drawingStates[e];n&&(n.color=t)};window.clearDraw=function(e){const t=document.getElementById("canvas-"+e);if(!t)return;const n=t.getContext("2d");n.clearRect(0,0,t.width,t.height),n.strokeStyle="#f1f5f9",n.lineWidth=1;const i=25;for(let o=0;o<t.width;o+=i)n.beginPath(),n.moveTo(o,0),n.lineTo(o,t.height),n.stroke();for(let o=0;o<t.height;o+=i)n.beginPath(),n.moveTo(0,o),n.lineTo(t.width,o),n.stroke();const s=window.drawingStates[e];s&&(s.history=[],s.fileData=null)};window.undoDraw=function(e){const t=window.drawingStates[e];if(!t||t.history.length===0)return;const n=document.getElementById("canvas-"+e);if(!n)return;const i=n.getContext("2d");t.history.pop(),t.history.length===0?window.clearDraw(e):i.putImageData(t.history[t.history.length-1],0,0)};window.handleCanvasFileUpload=function(e,t){const n=t.files[0];if(!n)return;const i=new FileReader;i.readAsDataURL(n),i.onload=function(s){const o=new Image;o.src=s.target.result,o.onload=function(){const a=document.createElement("canvas");let r=o.width,l=o.height;const d=800;r>l?r>d&&(l*=d/r,r=d):l>d&&(r*=d/l,l=d),a.width=r,a.height=l,a.getContext("2d").drawImage(o,0,0,r,l);const h=a.toDataURL("image/jpeg",.6),u=window.drawingStates[e];u&&(u.fileData=h);const g=document.getElementById("preview-container-"+e),m=document.getElementById("preview-img-"+e);g&&m&&(m.src=h,g.classList.remove("hidden"))}}};window.clearUploadedFile=function(e){const t=document.getElementById("file-input-"+e),n=document.getElementById("preview-container-"+e),i=document.getElementById("preview-img-"+e);t&&(t.value=""),n&&n.classList.add("hidden"),i&&(i.src="");const s=window.drawingStates[e];s&&(s.fileData=null)};window.checkDrawingExercise=function(e,t){const n=document.getElementById("canvas-"+e),i=window.drawingStates[e];if(!n||!i)return;let s="";i.fileData?s=i.fileData:s=n.toDataURL("image/jpeg",.6);const o=F.bai_tap.find(d=>d.id===t),a=o?o.title:"Bài vẽ hình học",r=o?o.guidance:"Vui lòng xem lại hình vẽ.",l=o?o.solution:"Bài vẽ của em đã được hệ thống lưu trữ.";window.showMathFeedback(!0,"Đã hoàn thành bài vẽ","Đã nạp bài vẽ",r,l),window.submitDrawingToFirebase(a,100,"btn-check-61-bt"+e.split("-")[1],s)};window.submitDrawingToFirebase=async function(e,t,n,i){const s=localStorage.getItem("userRole"),o=localStorage.getItem("userApproved");if(!s||!o){alert("⚠️ Bạn cần đăng nhập tài khoản để lưu bài vẽ.");return}const{name:a,cls:r,school:l}=window.getStudentInfo();if(!a||!r||!l){window.openStudentModal();return}const d=document.getElementById(n),c=d?d.innerHTML:"";d&&(d.disabled=!0,d.innerHTML="⏳ Gửi...");try{const h=window.db||firebase.firestore(),u=document.title.replace(" - EduRobot",""),g=window.currentLessonData?window.currentLessonData.week:"13",m=window.currentLessonData?window.currentLessonData.period:"61",p=window.getSlug(a+"_"+r+"_"+l+"_"+u),b=e.match(/^(?:Hoạt động|Bài|)\s*(\d+)/i),f=b?"ex"+b[1]:"general",k=p+"_"+f;await h.collection("essays_v2").doc(k).set({studentName:a,studentClass:r,studentSchool:l,content:"Học sinh đã hoàn thành bài vẽ: "+e,fileUrl:i,lessonTitle:u,aiScore:parseInt(t)||100,week:g,period:m,timeTaken:0,deviceId:window.getDeviceId(),timestamp:firebase.firestore.FieldValue.serverTimestamp(),status:"Chưa chấm",subject:"Toán học",type:"math_lesson"});const S="scoreEx"+(b?b[1]:"1");window.syncRealtimeProgress&&window.syncRealtimeProgress({[S]:100}),typeof confetti=="function"&&confetti()}catch(h){console.error("Lỗi lưu bài vẽ:",h),alert("Có lỗi khi nộp bài: "+h.message)}finally{d&&(d.disabled=!1,d.innerHTML=c)}};window.selected_61_2="";window.selectChoice_61_2=function(e){window.selected_61_2=e,["A","B","C"].forEach(t=>{const n=document.getElementById("btn-choice-61-2-"+t);n&&(t===e?n.className="px-6 py-4 bg-blue-600 border-2 border-blue-600 rounded-2xl font-black text-white active:scale-95 transition-all text-left text-sm md:text-base":n.className="px-6 py-4 bg-white border-2 border-slate-200 rounded-2xl font-black text-slate-700 hover:border-blue-500 active:scale-95 transition-all text-left text-sm md:text-base")})};window.check_61_bt2=function(){const e=window.selected_61_2==="C",t=window.selected_61_2?"Đáp án "+window.selected_61_2:"Chưa chọn";window.showMathFeedback(e,"Đáp án C (Cả hai bạn đều vẽ đúng)",t,"Xem lại hình vẽ: Bạn Mai vẽ đáy trên song song với đáy dưới. Bạn Việt vẽ hai cạnh bên xiên song song với nhau. Cả hai đều có 1 cặp cạnh đối diện song song.","Cả hai bạn Mai và Việt đều vẽ đúng hình thang vì mỗi hình vẽ đều tạo ra một tứ giác có ít nhất một cặp cạnh đối diện song song."),window.submitMathLesson&&window.submitMathLesson("Bài 2. Bạn nào đúng: "+t,e?100:0,"btn-check-61-bt2",0,1,e?1:0)};setTimeout(()=>{window.initDrawingArea("61-1"),window.initDrawingArea("61-3"),window.initDrawingArea("61-4")},500);const L={lessonInfo:{period:"62",week:"13",topic:"Hình học",title:"BÀI 26: HÌNH THANG (TIẾT 3 - DIỆN TÍCH HÌNH THANG)",desc:"Tìm hiểu công thức tính diện tích hình thang và thực hành giải các bài toán tính diện tích hình thang trong thực tế."},bai_tap:[{id:"62_bt1_a",type:"fill_multiple",title:"Bài 1a: Tính diện tích hình thang biết độ dài hai đáy lần lượt là 4 cm và 6 cm; chiều cao là 3 cm.",answers:["15"],guidance:"Áp dụng công thức tính diện tích hình thang: S = (a + b) x h : 2. Ở đây đáy bé a = 4 cm, đáy lớn b = 6 cm, chiều cao h = 3 cm.",solution:"Diện tích hình thang đó là:<br>(4 + 6) x 3 : 2 = 15 (cm²).<br>Đáp số: 15 cm²."},{id:"62_bt1_b",type:"fill_multiple",title:"Bài 1b: Tính diện tích hình thang biết độ dài hai đáy lần lượt là 11 cm và 9 cm; chiều cao là 8 cm.",answers:["80"],guidance:"Áp dụng công thức tính diện tích hình thang: S = (a + b) x h : 2. Ở đây đáy lớn b = 11 cm, đáy bé a = 9 cm, chiều cao h = 8 cm.",solution:"Diện tích hình thang đó là:<br>(11 + 9) x 8 : 2 = 80 (cm²).<br>Đáp số: 80 cm²."},{id:"62_bt2",type:"fill_multiple",title:"Bài 2: Tính diện tích mặt bàn đa năng ghép từ 6 bàn hình thang.",answers:["29700"],guidance:"Đầu tiên, em hãy tính diện tích của một cái bàn hình thang có đáy bé 60 cm, đáy lớn 120 cm và chiều cao 55 cm. Sau đó, nhân diện tích đó với 6 để ra diện tích bàn đa năng.",solution:"Diện tích của 1 cái bàn hình thang là:<br>(60 + 120) x 55 : 2 = 4950 (cm²).<br>Diện tích của mặt bàn đa năng (gồm 6 cái bàn ghép lại) là:<br>4950 x 6 = 29700 (cm²).<br>Đáp số: 29700 cm²."},{id:"62_bt3_a",type:"fill_multiple",title:"Bài 3a: Tính diện tích mảnh đất có dạng hình thang vuông.",answers:["104"],guidance:"Quan sát bản vẽ: Mảnh đất có dạng hình thang vuông với chiều cao là 13 m. Đáy bé là 7 m, đáy lớn là 7 m + 2 m = 9 m. Áp dụng công thức để tính diện tích.",solution:"Độ dài đáy lớn của mảnh đất hình thang vuông là:<br>7 + 2 = 9 (m).<br>Diện tích mảnh đất đó là:<br>(7 + 9) x 13 : 2 = 104 (m²).<br>Đáp số: 104 m²."},{id:"62_bt3_b",type:"fill_multiple",title:"Bài 3b: Thiết kế lại các phòng theo ý thích của em.",answers:["Đã hoàn thành"],guidance:"Hãy viết ý tưởng chia phòng của em trên mảnh đất 104 m² này (ví dụ: tăng diện tích phòng khách, thu nhỏ phòng ngủ, hoặc dời vị trí bếp...). Em hãy chia sẻ ý kiến của mình nhé!",solution:"Ý kiến thiết kế sáng tạo của em đã được ghi lại thành công.<br>Ý tưởng rất độc đáo và hợp lý!"}],quizPool:[{question:"Công thức tính diện tích hình thang S là gì (a, b là độ dài hai đáy, h là chiều cao)?",options:["S = a x h : 2","S = (a + b) x h : 2","S = (a + b) x h","S = (a x b) x h : 2"],answer:1},{question:"Muốn tính diện tích hình thang, ta lấy tổng độ dài hai đáy nhân với chiều cao (cùng đơn vị đo) rồi làm gì tiếp theo?",options:["Nhân với 2","Chia cho 2","Cộng thêm 2","Giữ nguyên kết quả"],answer:1},{question:"Một hình thang có đáy lớn 10 cm, đáy bé 6 cm và chiều cao 5 cm. Diện tích của hình thang đó là bao nhiêu?",options:["80 cm²","40 cm²","30 cm²","20 cm²"],answer:1},{question:"Một hình thang vuông có chiều cao chính là cạnh nào của nó?",options:["Đường chéo","Cạnh bên vuông góc với hai đáy","Cạnh đáy lớn","Cạnh bên xiên"],answer:1},{question:"Hình thang có độ dài hai đáy là 8 dm và 12 dm, chiều cao là 6 dm. Diện tích hình thang đó là:",options:["60 dm²","120 dm²","48 dm²","96 dm²"],answer:0},{question:"Để tính diện tích hình thang, hai đáy và chiều cao bắt buộc phải:",options:["Có cùng đơn vị đo","Có độ dài bằng nhau","Nằm chéo nhau","Lớn hơn 10 cm"],answer:0},{question:"Diện tích hình thang ABCD có đáy lớn 15 m, đáy bé bằng 2/3 đáy lớn, chiều cao 8 m là bao nhiêu?",options:["100 m²","200 m²","80 m²","120 m²"],answer:0},{question:"Một hình thang có diện tích 50 cm², tổng độ dài hai đáy là 20 cm. Chiều cao của hình thang đó là:",options:["5 cm","10 cm","2.5 cm","8 cm"],answer:0},{question:"Robot đã đọc bài thơ về diện tích hình thang. Câu đầu tiên của bài thơ đó là gì?",options:["Đáy lớn đáy bé ta mang cộng vào","Muốn tính diện tích hình thang","Chia đôi kết quả thế nào cũng ra","Rồi đem nhân với chiều cao"],answer:1},{question:"Khi ghép hình thang ABCD thành hình tam giác ADK để tính diện tích, chiều cao của hình tam giác ADK như thế nào so với hình thang?",options:["Gấp đôi","Bằng nhau (chung đường cao AH)","Nhỏ hơn một nửa","Lớn hơn"],answer:1},{question:"Tính diện tích mặt bàn hình thang có đáy bé 60 cm, đáy lớn 120 cm và chiều cao 55 cm.",options:["9900 cm²","4950 cm²","29700 cm²","5400 cm²"],answer:1},{question:"Một mảnh đất hình thang vuông có đáy bé 7 m, đáy lớn 9 m và đường cao 13 m. Diện tích mảnh đất là:",options:["104 m²","208 m²","91 m²","117 m²"],answer:0},{question:"Nếu tăng chiều cao của một hình thang lên 2 lần và giữ nguyên hai đáy, diện tích hình thang đó thay đổi thế nào?",options:["Không đổi","Tăng 2 lần","Tăng 4 lần","Giảm 2 lần"],answer:1},{question:"Hình thang cân có hai cạnh bên bằng nhau. Công thức tính diện tích hình thang cân có khác công thức hình thang thường không?",options:["Có khác biệt","Hoàn toàn giống nhau","Chỉ tính bằng tổng 4 cạnh","Không thể tính được"],answer:1},{question:"Một hình thang có diện tích 30 dm², chiều cao 5 dm. Tổng độ dài hai đáy của nó là:",options:["12 dm","6 dm","15 dm","24 dm"],answer:0}]};window.MATH_BUILDER_METADATA=L;const me={...L.lessonInfo,metadata:L,quizPool:[...L.quizPool].sort(()=>Math.random()-.5).slice(0,10),content:`
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">
                    
                    <!-- Slide 1: Khám phá lý thuyết cắt ghép hình -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6">
                            <!-- Khám phá a -->
                            <div class="bg-white p-6 rounded-3xl border border-blue-100 shadow-md space-y-4">
                                <div class="border-l-4 border-blue-600 pl-4 py-1">
                                    <h3 class="text-xl md:text-2xl font-black text-blue-900">a) Thảo luận cắt ghép hình</h3>
                                </div>
                                <div class="flex justify-center">
                                    <img src="./assets/images/toan/toan_tap_1/62/kp.png" alt="Thảo luận diện tích hình thang" class="max-h-72 object-contain rounded-2xl">
                                </div>
                                <p class="text-sm md:text-base font-bold text-slate-700 leading-relaxed text-center">
                                    Chúng mình có thể cắt ghép hình thang thành các hình đã học (hình tam giác, hình chữ nhật) để tính diện tích đấy!
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 2: Công thức hình học cụ thể -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6">
                            <!-- Banner -->
                            <div class="bg-gradient-to-r from-emerald-600 to-teal-500 text-white p-6 rounded-[2.5rem] shadow-lg">
                                <span class="text-sm font-black uppercase tracking-wider opacity-90">Chứng minh công thức</span>
                                <h2 class="text-2xl md:text-4xl font-black mt-1">CÁCH TÍNH DIỆN TÍCH HÌNH THANG</h2>
                            </div>

                            <div class="grid grid-cols-1 gap-6">
                                <!-- Khám phá b -->
                                <div class="bg-white p-6 rounded-3xl border border-emerald-100 shadow-md space-y-4">
                                    <div class="flex justify-center">
                                        <img src="./assets/images/toan/toan_tap_1/62/kp b.png" alt="Cách ghép hình tính diện tích" class="max-h-56 object-contain rounded-2xl">
                                    </div>
                                    <div class="space-y-2 text-sm md:text-base font-medium text-slate-700 leading-relaxed">
                                        <p class="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                                            🌟 Cắt hình thang <strong>ABCD</strong> theo đường thẳng <strong>AM</strong> (với M là trung điểm cạnh bên BC). Nối tam giác ABM vào góc bên phải để tạo thành hình tam giác lớn <strong>ADK</strong>.
                                        </p>
                                        <ul class="list-disc pl-5 space-y-1 font-bold text-slate-800">
                                            <li>Diện tích hình thang ABCD bằng diện tích hình tam giác ADK.</li>
                                            <li>Diện tích hình tam giác ADK là: <span class="text-blue-600">DK x AH : 2</span>.</li>
                                            <li>Mà ta thấy cạnh đáy tam giác: <span class="text-orange-600">DK = DC + CK = DC + AB</span>.</li>
                                            <li>Do đó, diện tích hình thang ABCD là: <span class="text-blue-600">(DC + AB) x AH : 2</span>.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 3: Công thức và thơ Robot -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6">
                            <!-- Banner -->
                            <div class="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-6 rounded-[2.5rem] shadow-lg">
                                <span class="text-sm font-black uppercase tracking-wider opacity-90">Ghi nhớ kiến thức</span>
                                <h2 class="text-2xl md:text-4xl font-black mt-1">CÔNG THỨC DIỆN TÍCH HÌNH THANG</h2>
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                                <!-- Ảnh công thức -->
                                <div class="bg-white p-6 rounded-3xl border border-amber-100 shadow-md flex justify-center">
                                    <img src="./assets/images/toan/toan_tap_1/62/Hình công thức.png" alt="Công thức diện tích hình thang" class="max-h-56 object-contain rounded-2xl">
                                </div>

                                <!-- Thơ Robot -->
                                <div class="bg-orange-50 p-6 rounded-[2rem] border border-orange-200 shadow-sm flex flex-col justify-center space-y-4">
                                    <h3 class="text-lg md:text-xl font-black text-orange-950 flex items-center gap-2">
                                        <span>🤖</span> Bài thơ dễ nhớ của Robot:
                                    </h3>
                                    <div class="italic text-base md:text-xl font-black text-center text-orange-900 leading-relaxed bg-white/70 p-4 rounded-2xl border border-orange-100">
                                        "Muốn tính diện tích hình thang<br>
                                        Đáy lớn, đáy bé ta mang cộng vào<br>
                                        Rồi đem nhân với chiều cao<br>
                                        Chia đôi kết quả thế nào cũng ra."
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `,practice:`
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" class="flex transition-transform duration-500 ease-out" style="width: 100%; display: flex;">
                    
                    <!-- Bài 1: Tính diện tích hình thang (a & b trên cùng 1 slide, không tab phụ) -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6">
                            <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                                <div class="flex items-center gap-3">
                                    <span class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-xl">1</span>
                                    <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 1. Tính diện tích hình thang</h3>
                                </div>
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <!-- Câu a -->
                                <div class="bg-blue-50/50 p-6 rounded-3xl border border-blue-200 shadow-sm space-y-4">
                                    <p class="text-base md:text-lg font-bold text-slate-700 leading-relaxed">
                                        a) Độ dài hai đáy lần lượt là <strong class="text-blue-600">4 cm</strong> và <strong class="text-blue-600">6 cm</strong>; chiều cao là <strong class="text-orange-600">3 cm</strong>.
                                    </p>
                                    <div class="flex items-center flex-nowrap whitespace-nowrap overflow-x-auto gap-2 text-lg md:text-xl font-black text-slate-800">
                                        <span>Diện tích =</span>
                                        <input type="number" id="ans-62-1-a" class="w-24 h-10 text-center border-2 border-slate-300 rounded-xl focus:border-blue-500 focus:outline-none bg-white text-blue-600 shadow-inner" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>cm²</span>
                                    </div>
                                </div>

                                <!-- Câu b -->
                                <div class="bg-emerald-50/50 p-6 rounded-3xl border border-emerald-200 shadow-sm space-y-4">
                                    <p class="text-base md:text-lg font-bold text-slate-700 leading-relaxed">
                                        b) Độ dài hai đáy lần lượt là <strong class="text-blue-600">11 cm</strong> và <strong class="text-blue-600">9 cm</strong>; chiều cao là <strong class="text-orange-600">8 cm</strong>.
                                    </p>
                                    <div class="flex items-center flex-nowrap whitespace-nowrap overflow-x-auto gap-2 text-lg md:text-xl font-black text-slate-800">
                                        <span>Diện tích =</span>
                                        <input type="number" id="ans-62-1-b" class="w-24 h-10 text-center border-2 border-slate-300 rounded-xl focus:border-blue-500 focus:outline-none bg-white text-emerald-600 shadow-inner" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                        <span>cm²</span>
                                    </div>
                                </div>
                            </div>

                            <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-4">
                                <button onclick="window.toggleSolution('sol-62-bt1')" class="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm md:text-lg rounded-2xl shadow-md active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-62-bt1" onclick="window.check_62_bt1()" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-2xl md:text-4xl flex items-center justify-center shadow-lg transition-all active:scale-95">E</button>
                            </div>
                            <div id="sol-62-bt1" class="hidden p-6 bg-amber-50 border-2 border-dashed border-amber-200 rounded-3xl animate-in fade-in duration-300">
                                <h4 class="font-black text-amber-800 text-lg mb-2">📖 LỜI GIẢI CHI TIẾT BÀI 1:</h4>
                                <p class="text-slate-700 leading-relaxed font-bold text-sm md:text-base">
                                    a) Diện tích hình thang đó là:<br>
                                    (4 + 6) x 3 : 2 = 15 (cm²).<br>
                                    b) Diện tích hình thang đó là:<br>
                                    (11 + 9) x 8 : 2 = 80 (cm²).<br>
                                    Đáp số:<br>
                                    a) 15 cm²;<br>
                                    b) 80 cm².
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Bài 2: Mặt bàn đa năng -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6">
                            <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                                <div class="flex items-center gap-3">
                                    <span class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-xl">2</span>
                                    <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 2. Diện tích mặt bàn đa năng ghép từ 6 bàn nhỏ</h3>
                                </div>
                            </div>

                            <div class="bg-white p-4 rounded-3xl border border-slate-150 shadow-sm flex flex-col items-center">
                                <img src="./assets/images/toan/toan_tap_1/62/2.png" alt="Bài 2: Ghép mặt bàn hình thang" class="max-h-56 object-contain rounded-xl">
                            </div>

                            <div class="bg-blue-50/50 p-6 rounded-[2rem] border border-blue-200 shadow-sm space-y-4">
                                <p class="text-sm md:text-base font-bold text-slate-700 leading-relaxed">
                                    Mỗi mặt bàn nhỏ hình thang có kích thước: Đáy bé <strong>60 cm</strong>, đáy lớn <strong>120 cm</strong> và chiều cao <strong>55 cm</strong>.<br>
                                    Hãy tính diện tích mặt bàn đa năng gồm 6 cái bàn như thế ghép lại.
                                </p>
                                <div class="flex items-center flex-wrap gap-2 text-lg md:text-2xl font-black text-slate-800">
                                    <span>Diện tích mặt bàn đa năng =</span>
                                    <input type="number" id="ans-62-2" class="w-32 h-12 text-center border-3 border-slate-300 rounded-2xl focus:border-blue-500 focus:outline-none bg-white text-blue-600 shadow-inner" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 48px !important;">
                                    <span>cm²</span>
                                </div>
                            </div>

                            <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-4">
                                <button onclick="window.toggleSolution('sol-62-bt2')" class="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm md:text-lg rounded-2xl shadow-md active:scale-95 transition-all">Hiện bài giải</button>
                                <button id="btn-check-62-bt2" onclick="window.check_62_bt2()" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-2xl md:text-4xl flex items-center justify-center shadow-lg transition-all active:scale-95">E</button>
                            </div>
                            <div id="sol-62-bt2" class="hidden p-6 bg-amber-50 border-2 border-dashed border-amber-200 rounded-3xl animate-in fade-in duration-300">
                                <h4 class="font-black text-amber-800 text-lg mb-2">📖 LỜI GIẢI CHI TIẾT BÀI 2:</h4>
                                <p class="text-slate-700 leading-relaxed font-bold text-sm md:text-base">
                                    Diện tích của 1 cái bàn hình thang là:<br>
                                    (60 + 120) x 55 : 2 = 4950 (cm²).<br>
                                    Diện tích mặt bàn đa năng (ghép từ 6 cái bàn giống nhau) là:<br>
                                    4950 x 6 = 29700 (cm²).<br>
                                    Đáp số: 29700 cm².
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Bài 3: Bản vẽ thiết kế ngôi nhà (a & b chia tab phụ) -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden; padding: 0 1rem;">
                        <div class="space-y-6">
                            <!-- Tiêu đề + Tabs phụ -->
                            <div class="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-4 gap-3">
                                <div class="flex items-center gap-3">
                                    <span class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-xl">3</span>
                                    <h3 class="text-xl md:text-2xl font-black text-blue-700">Bài 3. Mảnh đất hình thang vuông</h3>
                                </div>
                                <div class="flex gap-2 bg-slate-100 p-1.5 rounded-2xl self-start sm:self-auto">
                                    <button id="tab-62-3-1" onclick="window.switch_62_3_tab(0)" class="px-4 py-2 text-xs md:text-sm font-black rounded-xl bg-blue-600 text-white shadow transition-all">a) Diện tích đất</button>
                                    <button id="tab-62-3-2" onclick="window.switch_62_3_tab(1)" class="px-4 py-2 text-xs md:text-sm font-black rounded-xl text-blue-600 hover:bg-blue-200/50 transition-all">b) Thiết kế phòng</button>
                                </div>
                            </div>

                            <div class="bg-white p-4 rounded-3xl border border-slate-150 shadow-sm flex flex-col items-center">
                                <img src="./assets/images/toan/toan_tap_1/62/3.png" alt="Bài 3: Bản thiết kế ngôi nhà" class="max-h-56 object-contain rounded-xl">
                            </div>

                            <!-- Tab 3a Content -->
                            <div id="pane-62-3-0" class="space-y-6">
                                <div class="bg-blue-50/50 p-6 rounded-[2rem] border border-blue-200 shadow-sm space-y-4">
                                    <p class="text-sm md:text-base font-bold text-slate-700 leading-relaxed">
                                        a) Hình bên là bản vẽ thiết kế một ngôi nhà trên mảnh đất có dạng hình thang vuông.<br>
                                        Đáy bé: <strong>7 m</strong>. Đáy lớn: 7 m + 2 m = <strong>9 m</strong>. Chiều cao: <strong>13 m</strong>.<br>
                                        Hãy tính diện tích của mảnh đất đó.
                                    </p>
                                    <div class="flex items-center flex-wrap gap-2 text-lg md:text-2xl font-black text-slate-800">
                                        <span>Diện tích mảnh đất =</span>
                                        <input type="number" id="ans-62-3-a" class="w-24 h-12 text-center border-3 border-slate-300 rounded-2xl focus:border-blue-500 focus:outline-none bg-white text-blue-600 shadow-inner" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 48px !important;">
                                        <span>m²</span>
                                    </div>
                                </div>
                                <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-4">
                                    <button onclick="window.toggleSolution('sol-62-bt3-a')" class="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm md:text-lg rounded-2xl shadow-md active:scale-95 transition-all">Hiện bài giải</button>
                                    <button id="btn-check-62-bt3-a" onclick="window.check_62_bt3_a()" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-2xl md:text-4xl flex items-center justify-center shadow-lg transition-all active:scale-95">E</button>
                                </div>
                                <div id="sol-62-bt3-a" class="hidden p-6 bg-amber-50 border-2 border-dashed border-amber-200 rounded-3xl animate-in fade-in duration-300">
                                    <h4 class="font-black text-amber-800 text-lg mb-2">📖 LỜI GIẢI CHI TIẾT BÀI 3a:</h4>
                                    <p class="text-slate-700 leading-relaxed font-bold text-sm md:text-base">
                                        Độ dài đáy lớn của mảnh đất là:<br>
                                        7 + 2 = 9 (m).<br>
                                        Diện tích mảnh đất đó là:<br>
                                        (7 + 9) x 13 : 2 = 104 (m²).<br>
                                        Đáp số: 104 m².
                                    </p>
                                </div>
                            </div>

                            <!-- Tab 3b Content -->
                            <div id="pane-62-3-1" class="hidden space-y-6">
                                <div class="bg-emerald-50/50 p-6 rounded-[2rem] border border-emerald-200 shadow-sm space-y-4">
                                    <p class="text-sm md:text-base font-bold text-slate-700 leading-relaxed">
                                        b) Với mảnh đất như vậy, hãy chia sẻ ý tưởng thiết kế lại các phòng theo ý thích của em:
                                    </p>
                                    <textarea id="ans-62-3-b" rows="3" placeholder="Nhập ý tưởng thiết kế phòng của em ở đây..." class="w-full p-4 border-2 border-slate-300 rounded-2xl focus:border-blue-500 focus:outline-none bg-white text-slate-800 text-sm md:text-base font-bold shadow-inner resize-none"></textarea>
                                </div>
                                <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-4">
                                    <button onclick="window.toggleSolution('sol-62-bt3-b')" class="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm md:text-lg rounded-2xl shadow-md active:scale-95 transition-all">Hiện bài giải</button>
                                    <button id="btn-check-62-bt3-b" onclick="window.check_62_bt3_b()" class="w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-2xl md:text-4xl flex items-center justify-center shadow-lg transition-all active:scale-95">E</button>
                                </div>
                                <div id="sol-62-bt3-b" class="hidden p-6 bg-amber-50 border-2 border-dashed border-amber-200 rounded-3xl animate-in fade-in duration-300">
                                    <h4 class="font-black text-amber-800 text-lg mb-2">📖 LỜI GIẢI CHI TIẾT BÀI 3b:</h4>
                                    <p class="text-slate-700 leading-relaxed font-bold text-sm md:text-base">
                                        Ý tưởng chia phòng của em rất thú vị!<br>
                                        Mảnh đất hình thang vuông này có thể chia phòng ngủ lớn hơn, hoặc thiết kế thêm một khoảng sân vườn nhỏ ở góc để trồng cây xanh.<br>
                                        Cảm ơn em đã chia sẻ ý kiến sáng tạo!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <script>
            // Tải lại các sự kiện điều hướng tab khi render
            setTimeout(() => {
                window.switch_62_3_tab(0);
            }, 100);
        <\/script>
    `};window.lesson62=me;window._62_3_active_tab=0;window.switch_62_3_tab=function(e){window._62_3_active_tab=e;for(let t=0;t<2;t++){const n=document.getElementById("pane-62-3-"+t),i=document.getElementById("tab-62-3-"+(t+1));n&&(t===e?n.classList.remove("hidden"):n.classList.add("hidden")),i&&(t===e?i.className="px-4 py-2 text-xs md:text-sm font-black rounded-xl bg-blue-600 text-white shadow transition-all":i.className="px-4 py-2 text-xs md:text-sm font-black rounded-xl text-blue-600 hover:bg-blue-200/50 transition-all")}};window.check_62_bt1=function(){const e=document.getElementById("ans-62-1-a").value.trim(),t=document.getElementById("ans-62-1-b").value.trim(),n=e==="15",i=t==="80",s=n&&i,o="a) 15; b) 80",a=`a) ${e||"Chưa nhập"}; b) ${t||"Chưa nhập"}`;window.showMathFeedback(s,o,a,"Để tính diện tích hình thang, em hãy cộng độ dài hai đáy rồi nhân với chiều cao, sau đó chia cho 2 nhé!","a) Diện tích hình thang là: (4 + 6) x 3 : 2 = 15 (cm²).<br>b) Diện tích hình thang là: (11 + 9) x 8 : 2 = 80 (cm²)."),window.submitMathLesson&&window.submitMathLesson("Bài 1: Tính diện tích hình thang",s?100:0,"btn-check-62-bt1",0,2,(n?1:0)+(i?1:0))};window.check_62_bt2=function(){const e=document.getElementById("ans-62-2").value.trim(),t=e==="29700",n="29700 cm²",i=e?e+" cm²":"Chưa nhập",s=L.bai_tap[2].guidance,o=L.bai_tap[2].solution;window.showMathFeedback(t,n,i,s,o),window.submitMathLesson&&window.submitMathLesson("Bài 2: Tính diện tích mặt bàn đa năng",t?100:0,"btn-check-62-bt2",0,1,t?1:0)};window.check_62_bt3_a=function(){const e=document.getElementById("ans-62-3-a").value.trim(),t=e==="104",n="104 m²",i=e?e+" m²":"Chưa nhập",s=L.bai_tap[3].guidance,o=L.bai_tap[3].solution;window.showMathFeedback(t,n,i,s,o),window.submitMathLesson&&window.submitMathLesson("Bài 3a: Tính diện tích mảnh đất",t?100:0,"btn-check-62-bt3-a",0,1,t?1:0)};window.check_62_bt3_b=function(){const e=document.getElementById("ans-62-3-b").value.trim(),t=e.length>=3,n="Ý tưởng thiết kế phòng hợp lệ",i=e||"Chưa nhập",s=L.bai_tap[4].guidance,o=L.bai_tap[4].solution;window.showMathFeedback(t,n,i,s,o),window.submitMathLesson&&window.submitMathLesson("Bài 3b: Thiết kế phòng của em",t?100:0,"btn-check-62-bt3-b",0,1,t?1:0)};window.AI=D;window.SoundManager=Q;window.StarService=R;window.UI=y;document.addEventListener("DOMContentLoaded",()=>{console.log("EduRobot Lớp 5 2.2 - Khởi tạo hệ thống module (Cache Busted)"),window.__lessonCache||(window.__lessonCache=new Map),window.__lessonCache.set("math_61",pe),window.__lessonCache.set("math_62",me),setTimeout(()=>{try{z.injectTCStyles(),R.init(),le.init(),setTimeout(()=>{R.syncWithFirebase().then(e=>{e&&window.location.hash==="#/"&&le.renderHome(!0),window.router&&window.router.isAdmin()&&R.awardWeeklyHonors()})},2e3)}catch(e){console.error("Lỗi khi khởi tạo EduRobot:",e);const t=document.getElementById("app-content");t&&(t.innerHTML=`
                    <div class="max-w-xl mx-auto mt-20 p-8 bg-red-50 rounded-[32px] border-2 border-red-100 text-red-800 shadow-xl">
                        <h3 class="font-black text-xl mb-2">LỖI KHỞI ĐỘNG HỆ THỐNG</h3>
                        <p class="text-sm font-bold opacity-80 mb-4">${e.message}</p>
                        <button onclick="location.reload()" class="w-full py-3 bg-red-600 text-white rounded-xl font-black uppercase">Thử lại (F5)</button>
                    </div>
                `)}},300),window.showStudentBadge&&window.showStudentBadge(),document.addEventListener("keydown",e=>{e.key==="Escape"&&document.body.classList.contains("presentation-mode")&&(document.body.classList.remove("presentation-mode"),console.log("[TV Mode] Đã thoát qua phím ESC"))})});
