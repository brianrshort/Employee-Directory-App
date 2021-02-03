(this.webpackJsonpempdirectory=this.webpackJsonpempdirectory||[]).push([[0],{23:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t(2),r=t.n(i),s=t(15),d=t.n(s),o=(t(23),t(6)),m=t(17),c=t(16),l=t.n(c);function u(){return Object(n.jsxs)("div",{class:"jumbotron",children:[Object(n.jsx)("h1",{class:"display-4",children:"Employee Zone"}),Object(n.jsx)("p",{class:"lead",children:"Welcome to the Employee Zone!"}),Object(n.jsx)("hr",{class:"my-4"}),Object(n.jsx)("p",{children:"Here, you can organize view simple information about a set of employees, organize them into alphabetical or reverse alphabetical order, or filter them into those east of Greenwich Mean Time or west of Greenwich Mean Time. Thanks for visiting!"})]})}function p(){return Object(n.jsx)("nav",{class:"navbar navbar-light bg-light",children:Object(n.jsx)("span",{class:"navbar-brand mb-0 h1",children:"Employee Zone"})})}function b(e){return Object(n.jsxs)("div",{className:"ml-5 mb-3",children:[Object(n.jsx)("button",{type:"button",className:"btn btn-success mx-2",onClick:e.reversed,children:"A-Z"}),Object(n.jsx)("button",{type:"button",className:"btn btn-success mx-2",onClick:e.alpha,children:"Z-A"}),Object(n.jsx)("button",{type:"button",className:"btn btn-success mx-2",onClick:e.eastOf,children:"East of GMT"}),Object(n.jsx)("button",{type:"button",className:"btn btn-success mx-2",onClick:e.westOf,children:"West of GMT"})]})}function f(e){return Object(n.jsxs)("table",{className:"ml-5 table-bordered",children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Image"}),Object(n.jsx)("th",{children:"Name"}),Object(n.jsx)("th",{children:"City"}),Object(n.jsx)("th",{children:"Country"}),Object(n.jsx)("th",{children:"Email"})]}),e.map]})}function g(e){return Object(n.jsxs)("div",{className:"input-group input-group-lg ml-5 mb-3",children:[Object(n.jsx)("div",{class:"input-group-prepend",children:Object(n.jsx)("span",{class:"input-group-text",id:"inputGroup-sizing-lg",children:"Search by name"})}),Object(n.jsx)("input",{type:"text",class:"form-control","aria-label":"Large","aria-describedby":"inputGroup-sizing-sm",onChange:function(a){var t=a.target.value,n=e.employees.filter((function(e){if(e.name.first.includes(t)||e.name.last.includes(t))return e}));e.setEmployees(n)}})]})}t(42);var h=[{gender:"male",name:{title:"Mr",first:"Giray",last:"Ta\u015f\xe7\u0131"},location:{street:{number:8794,name:"\u015eehitler Cd"},city:"Samsun",state:"Batman",country:"Turkey",postcode:69096,coordinates:{latitude:"69.3516",longitude:"-62.3631"},timezone:{offset:"-2:00",description:"Mid-Atlantic"}},email:"giray.tasci@example.com",login:{uuid:"7c6e5aea-e6b8-4c68-8f4a-36ed7ed66f19",username:"brownostrich307",password:"yogibear",salt:"3BSGXAFF",md5:"7f61525584f432d831b5a6d5aa3fed76",sha1:"2948a44395bcbfe80848f5feee343f8e6cc0f8c3",sha256:"d63b64c92870e8c77e679518e67baad346acd9f4c3e0b270a5bb1e6cac7eeee0"},dob:{date:"1967-09-08T15:58:59.198Z",age:54},registered:{date:"2018-06-16T22:48:13.457Z",age:3},phone:"(498)-349-1690",cell:"(976)-600-9404",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/men/81.jpg",medium:"https://randomuser.me/api/portraits/med/men/81.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/81.jpg"},nat:"TR"},{gender:"male",name:{title:"Mr",first:"Finn",last:"Wood"},location:{street:{number:6020,name:"Saint Aubyn Street"},city:"Hamilton",state:"Canterbury",country:"New Zealand",postcode:88854,coordinates:{latitude:"83.8563",longitude:"-156.1929"},timezone:{offset:"-8:00",description:"Pacific Time (US & Canada)"}},email:"finn.wood@example.com",login:{uuid:"fba911f7-07d5-45e2-9c42-e812fdab0923",username:"blueelephant352",password:"magpies",salt:"Iej72NTc",md5:"020a739155c0297d76877b7e4073911c",sha1:"7ba3f32c3f0b4e0f1596942b7b7ab06ccc2fd77b",sha256:"5752dd2a84a766b0e45fd4bfb85f990d94331d9c67a4df2b0d1784d7c9edcb57"},dob:{date:"1970-12-21T04:30:49.767Z",age:51},registered:{date:"2015-12-29T15:40:21.386Z",age:6},phone:"(083)-988-2075",cell:"(384)-366-2364",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/men/9.jpg",medium:"https://randomuser.me/api/portraits/med/men/9.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/9.jpg"},nat:"NZ"},{gender:"male",name:{title:"Mr",first:"Eemil",last:"Hanninen"},location:{street:{number:5635,name:"Korkeavuorenkatu"},city:"Nilsi\xe4",state:"Central Finland",country:"Finland",postcode:85713,coordinates:{latitude:"-39.4004",longitude:"-4.8490"},timezone:{offset:"-11:00",description:"Midway Island, Samoa"}},email:"eemil.hanninen@example.com",login:{uuid:"c10d5ede-30c8-46e6-9ba4-697703109580",username:"bigbear176",password:"rush",salt:"DH4Aq1hI",md5:"031ec0d5ec20f12c5fceab1784e4f78d",sha1:"bc809ffded3e2584073426c3fafc9d570da35005",sha256:"8b33f34027b689552a343a32385b13feeaa098d435a3535576893470a18a4648"},dob:{date:"1994-04-14T14:15:21.459Z",age:27},registered:{date:"2018-07-07T05:52:23.429Z",age:3},phone:"09-148-726",cell:"046-265-54-54",id:{name:"HETU",value:"NaNNA073undefined"},picture:{large:"https://randomuser.me/api/portraits/men/94.jpg",medium:"https://randomuser.me/api/portraits/med/men/94.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/94.jpg"},nat:"FI"},{gender:"female",name:{title:"Ms",first:"\u0622\u0646\u06cc\u062a\u0627",last:"\u0643\u0627\u0645\u064a\u0627\u0631\u0627\u0646"},location:{street:{number:4925,name:"\u0641\u0627\u0637\u0645\u06cc"},city:"\u0647\u0645\u062f\u0627\u0646",state:"\u06a9\u0631\u0645\u0627\u0646\u0634\u0627\u0647",country:"Iran",postcode:63328,coordinates:{latitude:"61.4273",longitude:"-5.9114"},timezone:{offset:"+5:00",description:"Ekaterinburg, Islamabad, Karachi, Tashkent"}},email:"anyt.kmyrn@example.com",login:{uuid:"8e64d28c-101e-4eff-a7db-3993a887860c",username:"beautifulpeacock594",password:"kenneth",salt:"UrjGzrYw",md5:"ded5f6c7f290f566fe7027d7ffacefcc",sha1:"839268468912e331a4915191548fc74484037ef0",sha256:"423e33a480cad9bd9f585be45b2aeb6aa65d0afe13937c2aa7d33c8832553aa9"},dob:{date:"1980-12-19T01:17:59.103Z",age:41},registered:{date:"2006-09-24T17:44:07.301Z",age:15},phone:"029-13443007",cell:"0933-131-5737",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/women/55.jpg",medium:"https://randomuser.me/api/portraits/med/women/55.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/55.jpg"},nat:"IR"},{gender:"female",name:{title:"Miss",first:"Gundel",last:"Mau"},location:{street:{number:8636,name:"Friedhofstra\xdfe"},city:"Gr\xf6ditz",state:"Berlin",country:"Germany",postcode:42229,coordinates:{latitude:"-27.9848",longitude:"66.8875"},timezone:{offset:"+3:00",description:"Baghdad, Riyadh, Moscow, St. Petersburg"}},email:"gundel.mau@example.com",login:{uuid:"908ba78d-d9b4-4286-8c58-0c8a493f2577",username:"sadmeercat683",password:"longbow",salt:"t5fjiIEI",md5:"1a4961e07d3cec971a6d70e6932f8517",sha1:"8670337ea45a1dd47159cfa1f28e35a7b5bc253e",sha256:"6afb3bb7664f12a89e07ec7850bd86934e355cbbf5a2fa896b804805be0972d4"},dob:{date:"1967-09-18T23:45:41.649Z",age:54},registered:{date:"2012-02-20T04:16:05.753Z",age:9},phone:"0396-6308383",cell:"0179-2650740",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/women/15.jpg",medium:"https://randomuser.me/api/portraits/med/women/15.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/15.jpg"},nat:"DE"},{gender:"male",name:{title:"Mr",first:"Jimi",last:"Remes"},location:{street:{number:6863,name:"Rautatienkatu"},city:"Hirvensalmi",state:"Lapland",country:"Finland",postcode:18142,coordinates:{latitude:"-31.2657",longitude:"-161.0394"},timezone:{offset:"-7:00",description:"Mountain Time (US & Canada)"}},email:"jimi.remes@example.com",login:{uuid:"1b442418-c5c4-4e69-98d5-5254e1228798",username:"happyladybug586",password:"dandfa",salt:"ACTJCMWs",md5:"0df4f26b45ff4cea37798f6b2cb5e07f",sha1:"a46fae40edeb4b01efc95cc2aa749350039dfaa2",sha256:"2101f36f34a22ba24e1971cacf26a53ec4a5faa6a2dabe8be3d1334a60d6a344"},dob:{date:"1972-01-18T09:07:07.619Z",age:49},registered:{date:"2016-10-29T16:06:42.070Z",age:5},phone:"04-523-410",cell:"042-045-81-76",id:{name:"HETU",value:"NaNNA337undefined"},picture:{large:"https://randomuser.me/api/portraits/men/64.jpg",medium:"https://randomuser.me/api/portraits/med/men/64.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/64.jpg"},nat:"FI"},{gender:"female",name:{title:"Mrs",first:"Leanne",last:"Singh"},location:{street:{number:6099,name:"West Ave"},city:"Sidney",state:"Yukon",country:"Canada",postcode:"F3L 1U0",coordinates:{latitude:"37.5588",longitude:"36.6643"},timezone:{offset:"-11:00",description:"Midway Island, Samoa"}},email:"leanne.singh@example.com",login:{uuid:"a6926eaa-60d6-4d5f-8990-c70665c2aa14",username:"tinypeacock329",password:"compass",salt:"uq0kMEEL",md5:"52d14d835e426dc6b689eca63b047f4b",sha1:"5766093074ff0065205396f2c29b6f72a7b78ebc",sha256:"64069f41bcda9b165c9e6018659a86074018190b216c1b40d970265b044efebf"},dob:{date:"1950-03-12T05:13:20.039Z",age:71},registered:{date:"2011-08-01T19:11:38.556Z",age:10},phone:"889-839-1732",cell:"004-699-6099",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/women/69.jpg",medium:"https://randomuser.me/api/portraits/med/women/69.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/69.jpg"},nat:"CA"},{gender:"female",name:{title:"Miss",first:"K\xfcbra",last:"Elmasta\u015fo\u011flu"},location:{street:{number:4400,name:"Istiklal Cd"},city:"Rize",state:"Kayseri",country:"Turkey",postcode:51935,coordinates:{latitude:"-73.7150",longitude:"-26.0581"},timezone:{offset:"-3:00",description:"Brazil, Buenos Aires, Georgetown"}},email:"kubra.elmastasoglu@example.com",login:{uuid:"7b979c44-6788-4da4-8366-203178e3bb55",username:"heavydog117",password:"alex",salt:"iqYzEFx1",md5:"1e4e8bc3dd5605eb35691c3d7afaa864",sha1:"7116f9836e2ca3607333817a5807991679b80962",sha256:"4eedcc91a2cc5b8d7c26d18926450a75708f87dd4e20267a768c1c59484b9d97"},dob:{date:"1960-02-01T18:37:32.282Z",age:61},registered:{date:"2015-11-23T05:12:31.254Z",age:6},phone:"(215)-696-3438",cell:"(852)-908-3605",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/women/12.jpg",medium:"https://randomuser.me/api/portraits/med/women/12.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/12.jpg"},nat:"TR"},{gender:"male",name:{title:"Mr",first:"Sean",last:"Stewart"},location:{street:{number:3386,name:"Victoria Road"},city:"Gloucester",state:"Dumfries and Galloway",country:"United Kingdom",postcode:"Q62 4TQ",coordinates:{latitude:"34.4225",longitude:"-130.6845"},timezone:{offset:"+5:45",description:"Kathmandu"}},email:"sean.stewart@example.com",login:{uuid:"abda09fc-ff54-4f29-b794-eb418bdcec5e",username:"sadgoose642",password:"shasta",salt:"rScEphhp",md5:"791394b6cdf18b7498b500b83ea443fc",sha1:"75a6394233a32d67bd80bae9a52c9ba4d2b02180",sha256:"ca8b5e79ef18ff53aa539903911d490aa5542e665fe60923fe829fc0bf2fc10a"},dob:{date:"1993-12-09T15:41:02.945Z",age:28},registered:{date:"2003-07-24T06:40:05.930Z",age:18},phone:"015394 16681",cell:"0788-367-799",id:{name:"NINO",value:"GE 91 60 50 U"},picture:{large:"https://randomuser.me/api/portraits/men/26.jpg",medium:"https://randomuser.me/api/portraits/med/men/26.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/26.jpg"},nat:"GB"},{gender:"male",name:{title:"Mr",first:"Okke",last:"Rensen"},location:{street:{number:9378,name:"Adriaan van Altenastraat"},city:"Luyksgestel",state:"Noord-Brabant",country:"Netherlands",postcode:47589,coordinates:{latitude:"-71.6290",longitude:"101.6732"},timezone:{offset:"+2:00",description:"Kaliningrad, South Africa"}},email:"okke.rensen@example.com",login:{uuid:"63006aff-a0ff-4366-9c0e-d852577a7724",username:"goldenswan234",password:"ppppp",salt:"giRc5QZS",md5:"09416809821aa6d899954817666b6914",sha1:"45c86d9f8fee68b57993506dd1cae6ab80891a18",sha256:"bf5ab26d549d962a817c4439642a0e305675a84a426deac327468b8a1971acdc"},dob:{date:"1994-09-05T16:25:12.496Z",age:27},registered:{date:"2014-04-08T23:11:51.274Z",age:7},phone:"(163)-558-8808",cell:"(652)-334-0071",id:{name:"BSN",value:"73761076"},picture:{large:"https://randomuser.me/api/portraits/men/46.jpg",medium:"https://randomuser.me/api/portraits/med/men/46.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/46.jpg"},nat:"NL"},{gender:"female",name:{title:"Mrs",first:"Genoveva",last:"Viana"},location:{street:{number:5296,name:"Rua Belo Horizonte "},city:"Belo Horizonte",state:"Amap\xe1",country:"Brazil",postcode:90229,coordinates:{latitude:"55.5950",longitude:"-29.3634"},timezone:{offset:"+5:30",description:"Bombay, Calcutta, Madras, New Delhi"}},email:"genoveva.viana@example.com",login:{uuid:"786d1720-4c24-429a-aa67-5dc83f0c6908",username:"bluefish684",password:"lazarus",salt:"oJNYMruk",md5:"0dfb6a16dbd4cf8ca6a759a1b2989645",sha1:"39500895641fb6fbb8c48a678d5b00c8862afea1",sha256:"c0374954dcb4053f47220f4ad740647eea461aaed38131e44a0d3f56abaf3e87"},dob:{date:"1972-08-16T02:55:38.435Z",age:49},registered:{date:"2018-01-27T02:03:54.681Z",age:3},phone:"(18) 0069-3401",cell:"(41) 2750-0066",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/women/10.jpg",medium:"https://randomuser.me/api/portraits/med/women/10.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/10.jpg"},nat:"BR"},{gender:"female",name:{title:"Miss",first:"Mathilde",last:"S\xf8rensen"},location:{street:{number:6827,name:"Vesterbyvej"},city:"Juelsminde",state:"Sj\xe6lland",country:"Denmark",postcode:25375,coordinates:{latitude:"15.4076",longitude:"-155.2702"},timezone:{offset:"-1:00",description:"Azores, Cape Verde Islands"}},email:"mathilde.sorensen@example.com",login:{uuid:"dec5e641-4b07-4321-bcb6-9e141b04edd3",username:"crazyelephant186",password:"ling",salt:"55kGgPJs",md5:"6eca61b55cf2f1b0d9836bf74aef5046",sha1:"80e13178482ee8f10b452da3a87c9279e4718976",sha256:"019e3825639f5c8fc10a4b3ed9b35550f046ac4acc76eb47ce345b500a9d88cc"},dob:{date:"1954-08-07T08:57:51.840Z",age:67},registered:{date:"2015-10-05T14:10:33.820Z",age:6},phone:"84096469",cell:"53243490",id:{name:"CPR",value:"070854-0377"},picture:{large:"https://randomuser.me/api/portraits/women/17.jpg",medium:"https://randomuser.me/api/portraits/med/women/17.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/17.jpg"},nat:"DK"},{gender:"female",name:{title:"Ms",first:"Siiri",last:"Anttila"},location:{street:{number:445,name:"H\xe4meentie"},city:"Karijoki",state:"Ostrobothnia",country:"Finland",postcode:51003,coordinates:{latitude:"-40.1293",longitude:"-41.5021"},timezone:{offset:"+8:00",description:"Beijing, Perth, Singapore, Hong Kong"}},email:"siiri.anttila@example.com",login:{uuid:"1de5e646-6f4f-4115-afcf-c1fbc4fe9bd3",username:"beautifulbutterfly410",password:"deputy",salt:"LXtPXkAG",md5:"6c8a4af2f8e256542b23f5b71d95af14",sha1:"b56593f21f1165c9068d1b39777ba413fabfc26a",sha256:"213fe06fdddca392aa52e321970c407720e13d0103f064113602691718a5d92d"},dob:{date:"1988-06-01T20:01:39.410Z",age:33},registered:{date:"2005-10-19T15:23:52.771Z",age:16},phone:"04-687-698",cell:"047-993-47-51",id:{name:"HETU",value:"NaNNA808undefined"},picture:{large:"https://randomuser.me/api/portraits/women/8.jpg",medium:"https://randomuser.me/api/portraits/med/women/8.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/8.jpg"},nat:"FI"},{gender:"female",name:{title:"Miss",first:"Mie",last:"\xc5modt"},location:{street:{number:390,name:"Husebyveien"},city:"F\xe5vang",state:"Aust-Agder",country:"Norway",postcode:"5512",coordinates:{latitude:"-31.6710",longitude:"-16.7632"},timezone:{offset:"+9:30",description:"Adelaide, Darwin"}},email:"mie.amodt@example.com",login:{uuid:"e512aad2-9949-409c-85e8-aea798af45ea",username:"heavywolf240",password:"jonjon",salt:"WaHydPr9",md5:"ad94a8659dcacff65df51466922385e5",sha1:"ab5ebf30a4dc0495e66f8924585f9e8f1e0df394",sha256:"f1d413be1d7ac03395b5986403080fcad4a81be29d22267130a7c3c3a2954e57"},dob:{date:"1976-12-26T01:10:04.267Z",age:45},registered:{date:"2010-10-25T01:58:50.260Z",age:11},phone:"84220485",cell:"93471545",id:{name:"FN",value:"26127626056"},picture:{large:"https://randomuser.me/api/portraits/women/23.jpg",medium:"https://randomuser.me/api/portraits/med/women/23.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/23.jpg"},nat:"NO"},{gender:"male",name:{title:"Mr",first:"Niklas",last:"Waisanen"},location:{street:{number:8763,name:"H\xe4meenkatu"},city:"Miehikk\xe4l\xe4",state:"Southern Savonia",country:"Finland",postcode:84979,coordinates:{latitude:"-75.1189",longitude:"-8.0665"},timezone:{offset:"-4:00",description:"Atlantic Time (Canada), Caracas, La Paz"}},email:"niklas.waisanen@example.com",login:{uuid:"946a5190-7e15-49b5-ac8d-cc8138308893",username:"beautifulwolf682",password:"spectrum",salt:"pjpHSYJH",md5:"8988e781356e786669876f339527721f",sha1:"3bf4c0239f99a1dcb6712d52926f4aa2abd30bc4",sha256:"97893a94bb9b19c5fe599403ae781849aae6e3bf1182db66cb36ccc037f9d6a5"},dob:{date:"1985-05-29T11:33:49.206Z",age:36},registered:{date:"2014-10-09T09:17:30.763Z",age:7},phone:"06-127-998",cell:"046-731-99-79",id:{name:"HETU",value:"NaNNA345undefined"},picture:{large:"https://randomuser.me/api/portraits/men/77.jpg",medium:"https://randomuser.me/api/portraits/med/men/77.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/77.jpg"},nat:"FI"},{gender:"female",name:{title:"Mrs",first:"Valdira",last:"Foga\xe7a"},location:{street:{number:4724,name:"Rua da Saudade"},city:"Itatiba",state:"Alagoas",country:"Brazil",postcode:44793,coordinates:{latitude:"-80.8560",longitude:"164.5518"},timezone:{offset:"-5:00",description:"Eastern Time (US & Canada), Bogota, Lima"}},email:"valdira.fogaca@example.com",login:{uuid:"5ed49bcf-fcfd-4d6e-b3e8-8aa36b959018",username:"organicelephant839",password:"indain",salt:"1N7S2GKj",md5:"813987bc5dc5f6a8b8e60bebe6ad64b1",sha1:"25d4d414406b2c062e596b52db492b98205896ee",sha256:"6f5fa639c5f650d06b647fea15bda98f7f43843a280a0cc088332e7ed34a42f7"},dob:{date:"1970-08-14T02:38:06.869Z",age:51},registered:{date:"2010-04-11T18:28:03.956Z",age:11},phone:"(33) 8648-7475",cell:"(04) 2918-5227",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/women/38.jpg",medium:"https://randomuser.me/api/portraits/med/women/38.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/38.jpg"},nat:"BR"},{gender:"male",name:{title:"Mr",first:"Tjalle",last:"Van Krugten"},location:{street:{number:2305,name:"Beukenkamp"},city:"Marssum",state:"Zeeland",country:"Netherlands",postcode:36357,coordinates:{latitude:"25.5100",longitude:"116.1138"},timezone:{offset:"+5:30",description:"Bombay, Calcutta, Madras, New Delhi"}},email:"tjalle.vankrugten@example.com",login:{uuid:"280173ec-1ac8-4a73-ae2a-080cb1a98f08",username:"tinybird170",password:"samurai",salt:"vZxdsWq3",md5:"902fb619e9fde6b8135d86cdb47ae689",sha1:"f9f49372a63015f74c4f7a794a4f7a72d236273e",sha256:"3a13fffe48ae727968261e08fc45614500e2735b6106ef84a5dcaf5d46f65dd8"},dob:{date:"1987-07-28T11:39:52.432Z",age:34},registered:{date:"2004-06-04T21:55:41.934Z",age:17},phone:"(729)-182-7632",cell:"(494)-651-7119",id:{name:"BSN",value:"27398813"},picture:{large:"https://randomuser.me/api/portraits/men/77.jpg",medium:"https://randomuser.me/api/portraits/med/men/77.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/77.jpg"},nat:"NL"},{gender:"male",name:{title:"Mr",first:"Gerfried",last:"Kastner"},location:{street:{number:1538,name:"M\xfchlenweg"},city:"Dippoldiswalde",state:"Hamburg",country:"Germany",postcode:67932,coordinates:{latitude:"3.1351",longitude:"-29.6420"},timezone:{offset:"+10:00",description:"Eastern Australia, Guam, Vladivostok"}},email:"gerfried.kastner@example.com",login:{uuid:"12b0eadb-b5d2-4eb7-a958-9edd1e993557",username:"lazyduck953",password:"gold",salt:"sjGHLT2l",md5:"8314dded3f60badf45568469c430aeff",sha1:"48c2dea78317e481398eb0df0575ec648117ffff",sha256:"e404b24fda302093c596829a0ae6de781bc02f52d122ff25d97f4461517a4f83"},dob:{date:"1973-11-11T16:50:45.510Z",age:48},registered:{date:"2002-08-11T04:26:03.699Z",age:19},phone:"0283-5949325",cell:"0170-6507898",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/men/40.jpg",medium:"https://randomuser.me/api/portraits/med/men/40.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/40.jpg"},nat:"DE"},{gender:"female",name:{title:"Ms",first:"Aurora",last:"Alvarez"},location:{street:{number:8810,name:"Avenida del Planetario"},city:"Elche",state:"Extremadura",country:"Spain",postcode:82183,coordinates:{latitude:"-79.1156",longitude:"-177.1306"},timezone:{offset:"+4:00",description:"Abu Dhabi, Muscat, Baku, Tbilisi"}},email:"aurora.alvarez@example.com",login:{uuid:"b3b4ca20-bb19-45f5-b821-1e39ad945282",username:"tinybutterfly145",password:"card",salt:"dTtpOMNi",md5:"79a00dea686a81ed47c707af76bf8f08",sha1:"5e96c863560e1b75b641092f6c10fbd7b885af65",sha256:"6496449403a323da78988db7dcb092944093c73b63caa293344e50842f1223b1"},dob:{date:"1977-12-20T05:29:46.141Z",age:44},registered:{date:"2008-07-01T02:46:52.838Z",age:13},phone:"912-537-988",cell:"616-878-350",id:{name:"DNI",value:"41256716-W"},picture:{large:"https://randomuser.me/api/portraits/women/92.jpg",medium:"https://randomuser.me/api/portraits/med/women/92.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/92.jpg"},nat:"ES"},{gender:"male",name:{title:"Mr",first:"Cecil",last:"Fleming"},location:{street:{number:6040,name:"New Road"},city:"Lincoln",state:"Dyfed",country:"United Kingdom",postcode:"Z77 9QA",coordinates:{latitude:"-39.9314",longitude:"53.6299"},timezone:{offset:"-8:00",description:"Pacific Time (US & Canada)"}},email:"cecil.fleming@example.com",login:{uuid:"8e11d109-f560-4263-bc90-00a95fae46ae",username:"organicladybug220",password:"renault",salt:"Tysvumns",md5:"07e37bbc602bd6505ee8f056d00c1b83",sha1:"cb8075d57e853f8abe817cc7ed1c9c019a83ed61",sha256:"91a3dad9d975c074cbab95c0c6813bbd77843cc9671c4460ee319dc1620bef4b"},dob:{date:"1978-02-05T01:56:07.799Z",age:43},registered:{date:"2017-11-08T03:29:48.358Z",age:4},phone:"0121 793 3106",cell:"0721-747-120",id:{name:"NINO",value:"CH 65 18 22 B"},picture:{large:"https://randomuser.me/api/portraits/men/88.jpg",medium:"https://randomuser.me/api/portraits/med/men/88.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/88.jpg"},nat:"GB"}];var j=function(){var e=Object(i.useState)([]),a=Object(m.a)(e,2),t=a[0],r=a[1];Object(i.useEffect)((function(){l.a.get("https://randomuser.me/api/?results=20").then((function(e){r(e.data.results)})).catch((function(e){console.log(e),r(h)}))}),[]);var s=t.map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"p-3",children:Object(n.jsx)("img",{src:e.picture.thumbnail,alt:"Employee"})}),Object(n.jsxs)("td",{className:"px-3",children:[e.name.first," ",e.name.last]}),Object(n.jsx)("td",{className:"px-3",children:e.location.city}),Object(n.jsx)("td",{className:"px-3",children:e.location.country}),Object(n.jsx)("td",{className:"px-3",children:e.email})]},e.name.first)}));return Object(n.jsxs)("div",{children:[Object(n.jsx)(p,{}),Object(n.jsx)(u,{}),Object(n.jsx)(g,{employees:t,setEmployees:r}),Object(n.jsx)(b,{alpha:function(){console.log("Alpha clicked");var e=Object(o.a)(t).sort((function(e,a){return e.name.first>a.name.first?-1:a.name.first>e.name.first?1:0}));r(e)},reversed:function(){var e=Object(o.a)(t).sort((function(e,a){return e.name.first>a.name.first?1:a.name.first>e.name.first?-1:0}));r(e)},eastOf:function(){r(t.filter((function(e){return e.location.coordinates.longitude>0})))},westOf:function(){r(t.filter((function(e){return e.location.coordinates.longitude<0})))}}),Object(n.jsx)(f,{map:s})]})},y=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,44)).then((function(a){var t=a.getCLS,n=a.getFID,i=a.getFCP,r=a.getLCP,s=a.getTTFB;t(e),n(e),i(e),r(e),s(e)}))};d.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(j,{})}),document.getElementById("root")),y()}},[[43,1,2]]]);
//# sourceMappingURL=main.b824c1cb.chunk.js.map