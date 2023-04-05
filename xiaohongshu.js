// 代理器
ld = {};
ld.config = {};
ld.config.proxy = true // proxy on or off
ld.getType = function getType(obj) {
    return Object.prototype.toString.call(obj)
}
ld.proxy = function proxy(obj, objname) {
    // obj, 原始对象
    // objname 原始对象的名字
    // if not proxy
    if(!ld.config.proxy){
        return obj;
    }
    // if need proxy
    let handler = {
        get:function (target, prop, receiver){
            let result;
            try{/*
                if the prop is undefine */
                result = Reflect.get(target, prop, receiver);
                let type = ld.getType(result)
                if(result instanceof Object){
                    console.log(`(get|obj:[${objname}] -> prop:[${prop.toString()}], type:[${type}])`);
                    // if the result is obj, we need to proxy it, digui, in function call the function self
                    result = ld.proxy(result, `${objname}.${prop.toString()}`);
                }else{
                    console.log(`(get|obj:[${objname}] -> prop:[${prop.toString()}], ret:[${result}])`);
                }
                // throw new Error("测试错误")
            }catch (e) {
                console.log(`(get|obj:[${objname}] -> prop:[${prop.toString()}], error:[${e.message}])`);
            }
            return result;
        },
        set:function (target, prop, value, receive){
            let result;
            try{
                result = Reflect.set(target, prop, value,receive);
                // console.log(result);
                let type = ld.getType(value);
                // console.log(type);
                if (value instanceof Object){
                    /*
                    * if the type is object,  get the type of obj,
                    * else, get the value
                    * */
                    console.log(`(set|obj:[${objname}] -> prop:[${prop.toString()}], type:[${type}])`);
                }else {
                    console.log(`(set|obj:[${objname}] -> prop:[${prop.toString()}], value:[${value}])`);
                }
            }catch (e) {
                console.log(`(set|obj:[${objname}] -> prop:[${prop.toString()}], error:[${e.message}])`);
            }
            return result;
        },
        getOwnPropertyDescriptor:function (target, prop){
            let result; // two type undefined description
            try{
                result = Reflect.getOwnPropertyDescriptor(target, prop);
                // console.log(typeof result);
                let type = ld.getType(result)
                console.log(`(getOwnPropertyDescriptor|obj:[${objname}] -> prop:[${prop.toString()}], type:[${type}])`);
                if (typeof result !== "undefined"){
                    result = ld.proxy(result, `${objname}.${prop.toString()}.PropertyDescriptor`);
                }
            }catch (e) {
                console.log(`(getOwnPropertyDescriptor|obj:[${objname}] -> prop:[${prop.toString()}], error:[${e.message}])`);
            }

            return result;
        },
        defineProperty:function (target, prop, description){
            let result;
            try{
                result = Reflect.defineProperty(target, prop, description)
                console.log(`(defineProperty|obj:[${objname}] -> prop:[${prop.toString()}])`);
            }catch (e) {
                console.log(`(defineProperty|obj:[${objname}] -> prop:[${prop.toString()}], error:[${e.message}])`);
            }
            return result;
        },
        apply:function (target, thisArg, argument){
            // target function obj.
            // thisArg the arrow of function,
            // function's argument : is a list
            let result;
            try{
                result = Reflect.apply(target, thisArg, argument);
                let type = ld.getType(result);
                if(result instanceof Object){
                    console.log(`(Apply|function:[${objname}], args:[${argument}], type|[${result}])`);
                    // ld.proxy(result, ``)
                }else if(typeof result === "symbol"){
                    console.log(`(Apply|function:[${objname}], args:[${argument}], result|[${result.toString()}])`);
                }else {
                    console.log(`(Apply|function:[${objname}], args:[${argument}], result|[${result}])`);
                }
            }catch (e) {
                console.log(`(Apply|function:[${objname}], error:[${e.message}])`);
            }
            return result;
        },
        construct:function (target, argArray, newTarget) {
            // target function obj,
            // aegArray the arguments from new ,and is a list
            // the obj was proxy
            let result;
            try{
                result = Reflect.construct(target, argArray, newTarget);
                let type = ld.getType(result);
                console.log(`(construct|function:[${objname}], type|[${type}])`);
                // ld.proxy(result, ``)
            }catch (e) {
                console.log(`(construct|function:[${objname}], error:[${e.message}])`);
            }
            return result;
        },
        deleteProperty:function (target, propKey) {
            let result = Reflect.deleteProperty(target, propKey);
            console.log(`(deleteProperty|obj:[${objname}] -> prop:[${propKey.toString()}], result:[${result}])`);
            return result;
        },
        has:function (target, propKey){
          let result = Reflect.has(target, propKey);
          console.log(`(has|obj:[${objname}] -> prop:[${propKey.toString()}], result:[${result}])`);
          return result
        },
        ownKeys(target) {
            let result = Reflect.ownKeys(target);
            console.log(`(ownKey|obj:[${objname}])`);
            return result;
        }
    };
    return new Proxy(obj, handler)
}
// 补环境
__webpack_require__ = {}
__webpack_require__.g = {
    alert(message) {
    }
}
__webpack_require__.g.navigator = {
    userAgent:'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36'

}
window = this
window = {
    navigator: {
        userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36'
    },
    alert(message) {
    },

}
window.crypto = {}
// Object = Object()
// Object = ld.proxy(Object, 'Obejct')
window = ld.proxy(window, 'window')
__webpack_require__ = ld.proxy(__webpack_require__, '__webpack_require__')






var cryptojs = require('crypto-js')
sr = 1186
function a0_0x5c27(e, t){
    var r = [
    "UyzSw",
    "isArray",
    "eAt",
    "zmtpi",
    "OPQRSTU",
    "7|4|9",
    "0XTdDgM",
    "hasOwnP",
    "lUBwA",
    "iQVWg",
    "getTime",
    "yTjFW",
    "JQFwK",
    "QMclx",
    "zYvVY",
    "Swijz",
    "jIkCA",
    "ble",
    "ctor",
    "SNmAe",
    "pow",
    "q42KWYj",
    "KfTYt",
    "qGTfA",
    "lxWQh",
    "OcXBH",
    "hpdTP",
    "zcTWF",
    "a2r1ZQo",
    "userAge",
    "fDqvJ",
    "LEdWM",
    "zDagP",
    " Array]",
    "NqdOs",
    "VZAlG",
    "wordsTo",
    "SYlVm",
    "rable",
    "_digest",
    "readFlo",
    "EXcRE",
    "kPrkP",
    "WqGtt",
    "|2|7|1|",
    "ikxhY",
    "charAt",
    "JApEh",
    "XefZY",
    "BVmZI",
    "bin",
    "FTPBq",
    "fCXhO",
    "DTrbr",
    "RIxMF",
    "UJuXg",
    "lxizm",
    "IYqgI",
    "ntwtB",
    "GHzcl",
    "VkIPm",
    "515619okbuSc",
    "cEEwK",
    "rOgfA",
    "UijIk",
    "xNlWe",
    "IFKdN",
    "pdIYK",
    "vGIuz",
    "QamKK",
    "bDqmV",
    "pngG8yJ",
    "kuQZq",
    "yRnhISG",
    "RNCil",
    "HSFDJ",
    "skMPY",
    "random",
    "constru",
    "lPcUs",
    "mfiMp",
    "WNyCI",
    "ZFsux",
    "HIJKLMN",
    "OUXTe",
    "213505TKYkUt",
    "asStrin",
    "jGPhw",
    "ZmserbB",
    "stringT",
    "_hh",
    "rotl",
    "jNjih",
    "ezOMc",
    "12FNdOJJ",
    "encodin",
    "yJKwt",
    "atLE",
    "IpyPj",
    "uvnLy",
    "evgkK",
    "LHJGH",
    "UoxZB",
    "YplIo",
    "2|3|4|1",
    "FlYEl",
    "fromCha",
    "XhOLE",
    "sUGSI",
    "Words",
    "CcWZI",
    "yESQQ",
    "NrAsb",
    "3|6|4|0",
    "vrlUV",
    "bBpCr",
    "okBzj",
    "rRmLn",
    "HiDFY",
    "Hex",
    "ABCDEFG",
    "lECKQ",
    "string",
    "iwjwj",
    "lKcsE",
    "sNYMU",
    "length",
    "test",
    "YdZUX",
    "[object",
    "osyIw",
    "umick",
    "DLqdJ",
    "navigat",
    "slice",
    "x3VT16I",
    " Object",
    "KbDto",
    "WIPRR",
    "zuvxQ",
    "CNQIo",
    "nt ",
    "A4NjFqY",
    "lUAFM97",
    "vtfIx",
    "_ff",
    "tuAVA",
    "GUXjn",
    "vkHbm",
    "defineP",
    "jGXbA",
    "KOsRk",
    "SNEER",
    "mUkhF",
    "ClBGn",
    "MjzGU",
    "pPKoa",
    "WaFXc",
    "JKodg",
    "zVOvy",
    "cvnJR",
    "uytRs",
    "oBWZm",
    "EaGMZ",
    "lBXvG",
    "feFUP",
    "bXlQI",
    "axfLm",
    "FJlYN",
    "yfqjY",
    "KfnDt",
    "size",
    "AkEzs",
    "45xebJDa",
    "aQyyJ",
    "cnLlO",
    "NJbVq",
    "pYOkL",
    "|0|8|6|",
    "ize",
    "XrZOl",
    "get",
    "LlQOv",
    "pWobk",
    "cdefghi",
    "BLEEu",
    "_isBuff",
    "ABLRO",
    "uyyzO",
    "iyVYR",
    "OArwD",
    "zAgxb",
    "Illegal",
    "equEW",
    "ttIve",
    "zsDDZ",
    "roperty",
    "eqJQh",
    "lPLEl",
    "oBytes",
    "YcAap",
    "IVjmk",
    "biuPu",
    "PKFOs",
    "Fkqjb",
    "231rerpKx",
    "ZcThI",
    "alert",
    "isBuffe",
    "0DSfdik",
    "YUlOM",
    "MuQYv",
    "rCode",
    "ule",
    "ggDLb",
    "ouYkV",
    "rCZaS",
    "NgZdN",
    "nhxOh",
    "Ojazi",
    "__esMod",
    "stringi",
    "iLsmf",
    "undefin",
    "18310JfOQdq",
    "prototy",
    "VDMgA",
    "xyz0123",
    "u5wPHsO",
    "QLnvL",
    "charCod",
    "String",
    "FMbVd",
    "binary",
    "BOxTP",
    "azoqU",
    "floor",
    "YMxdG",
    "jklmnop",
    "uPWLf",
    "exbUE",
    "aqFcP",
    "QHHVj",
    "72VTYrYU",
    "EBUCM",
    "hdBwq",
    "ZoHKz",
    "exports",
    "vyJGG",
    "2|1|3|5",
    "_gg",
    "cVte9UJ",
    "enumera",
    "2738060TYhQqS",
    "push",
    "RyZJx",
    "105762wnLMQn",
    "MLMvF",
    "vZHUx",
    "OUXOv",
    "QYcqT",
    "Bytes",
    "bytesTo",
    "AfphX",
    "ahauZ",
    "|0|5|4|",
    "substr",
    "VrFqQ",
    "SbCkH",
    "split",
    "IJign",
    "replace",
    "utmmN",
    "mEQOt",
    "ntvSG",
    "iFBAC",
    "VsHtM",
    "AAJUd",
    "PnmbA",
    "wOcza/L",
    "endian",
    "qqtiC",
    "seQxp",
    "zWRDt",
    "hECvuRX",
    "sfGbf",
    " argume",
    "|5|0",
    "Bvk6/7=",
    "indexOf",
    "ejKeS",
    "ZqSNz",
    "nlHfL",
    "ZtWnB",
    "iamspam",
    "VWXYZab",
    "hrtXX",
    "oHQtNP+",
    "toStrin",
    "yQVJs",
    "trZBo",
    "VigAS",
    "lNrTk",
    "MWYyF",
    "555718BnMYMA",
    "QrePf",
    "URHlD",
    "mtrIN",
    "GJYEy",
    "6|7|2|3",
    "anwja",
    "JuPPz",
    "jpJSn",
    "dniCc",
    "RFEXt",
    "lsgpi",
    "ARRXR",
    "FmHfQ",
    "_blocks",
    "nvthD",
    "default",
    "functio",
    "KblCWi+",
    "hewPW",
    "IrUjb",
    "rniTJ",
    "13060498XEGIdo",
    "_ii",
    "LpfE8xz",
    "iUalX",
    "sxyzs",
    "asBytes",
    "bAHys",
    "phugY",
    "yAgFW",
    "ZovIz",
    "vzTOk",
    "reeyR",
    "CfrgZ",
    "OaAcq",
    "RjgER",
    "utf8",
    "configu",
    "call",
    "TgopC",
    "Oyeiu",
    "UmEFi",
    "join",
    "oWysL",
    "mTYNl",
    "gkQpp",
    "ToKTb",
    "UBTfA",
    "qrstuvw",
    "iCeWb",
    "GMJxV",
    "bKgFU",
    "ZCQZb",
    "PBCYU",
    "KIVTH",
    "IWWto",
    "vhLdz",
    "cDgfm",
    "456789+"
]
    return r[e -= 410]
}
function a0_0x4dee00(e, t) {
    return a0_0x5c27(t - -312, e)
}
function cr(e, t) {
    return a0_0x4dee00(t, e - sr)
}

function sign(e, t) {
    var r = 1452
        , n = 1507
        , o = 1589
        , i = 1411
        , a = 1551
        , s = 1533
        , u = 1455
        , l = 1289
        , c = 1334
        , p = 1553
        , d = 1343
        , f = 1265
        , g = 1425
        , _ = 1426
        , h = 1256
        , m = 1512
        , v = 1290
        , y = 1230
        , b = 1406
        , w = 1535
        , S = 1572
        , T = 1747
        , x = 1497
        , E = 1587
        , k = 1718
        , I = 1516
        , A = 1509
        , O = 1371
        , L = 1562
        , C = 1627
        , N = 1787
        , P = 1413
        , M = 1510
        , R = 1495
        , j = 1611
        , F = 1687
        , D = 1582
        , B = 1556
        , U = 1627
        , W = 1596
        , H = 1413
        , $ = 1421
        , G = 1439
        , V = 1570
        , z = 1640
        , q = 1417
        , Z = 1409
        , Y = 1578
        , X = 1313
        , K = 1491
        , J = 1434
        , Q = 1324
        , ee = 1294
        , te = 1160
        , re = 1284
        , ne = 1180
        , oe = 1284
        , ie = 1326
        , ae = 1505
        , se = 1602
        , ue = 1631
        , le = 1460
        , ce = 884
        , pe = 1019
        , de = 1212
        , fe = 1266
        , ge = 978
        , _e = 1012
        , he = 1123
        , me = 1180
        , ve = 1227
        , ye = 822
        , be = 999
        , we = 1367
        , Se = 898
        , Te = 910
        , xe = 1195
        , Ee = 1341
        , ke = 1158
        , Ie = 1068
        , Ae = 1137
        , Oe = 1118
        , Le = 1109
        , Ce = 1518
        , Ne = 1500
        , Pe = 1322
        , Me = 1316
        , Re = 1255
        , je = 1188
        , Fe = 1297
        , De = 1184
        , Be = 1153
        , Ue = 1331
        , We = 986
        , He = 911
        , $e = 1090
        , Ge = 1016
        , Ve = 1043
        , ze = 1050
        , qe = 863
        , Ze = 338
        , Ye = 485
        , Xe = 1109
        , Ke = 524
        , Je = 489
        , Qe = 595
        , et = 1173
        , tt = 862
        , rt = 874
        , nt = 190
        , ot = 12
        , it = 1587
        , at = 24
        , st = 636
        , ut = 829
        , lt = 921
        , ct = 810
        , pt = 508
        , dt = 646
        , ft = 995
        , gt = 117
        , _t = 1714
        , ht = 846
        , mt = 540
        , vt = 558
        , yt = 697
        , bt = 616
        , wt = 975
        , St = 1088
        , Tt = 324
        , xt = 153
        , Et = 433
        , kt = 172
        , It = 329
        , At = 556
        , Ot = 360
        , Lt = 359
        , Ct = 398
        , Nt = 453
        , Pt = 318
        , Mt = 347
        , Rt = 540
        , jt = 439
        , Ft = 502
        , Dt = 460
        , Bt = 347
        , Ut = 444
        , Wt = 453
        , Ht = 448
        , $t = 258
        , Gt = 427
        , Vt = 347
        , zt = 544
        , qt = 466
        , Zt = 501
        , Yt = 415
        , Xt = 347
        , Kt = 452
        , Jt = 598
        , Qt = 475
        , er = 361
        , tr = 392
        , rr = 189
        , nr = 347
        , or = 451
        , ir = 441
        , ar = 1843
        , sr = 1186
        , ur = {
        GHzcl: cr(1578, 1465),
        hpdTP: function (e, t) {
            return e < t
        },
        kPrkP: function (e, t) {
            return e > t
        },
        RNCil: function (e, t) {
            return e < t
        },
        GJYEy: function (e, t) {
            return e >> t
        },
        zDagP: function (e, t) {
            return e | t
        },
        zVOvy: function (e, t) {
            return e & t
        },
        ntvSG: function (e, t) {
            return e & t
        },
        vGIuz: cr(1388, r) + cr(1571, 1394),
        biuPu: function (e, t) {
            return e(t)
        },
        GMJxV: function (e, t) {
            return e | t
        },
        yTjFW: function (e, t) {
            return e << t
        },
        lsgpi: function (e, t) {
            return e >> t
        },
        oWysL: function (e, t) {
            return e(t)
        },
        mTYNl: function (e, t) {
            return e + t
        },
        VDMgA: function (e, t) {
            return e + t
        },
        MuQYv: function (e, t) {
            return e === t
        },
        MjzGU: function (e, t) {
            return e === t
        },
        bKgFU: cr(n, o) + "ed",
        MWYyF: function (e, t) {
            return e !== t
        },
        sNYMU: cr(i, a),
        UyzSw: function (e, t) {
            return e(t)
        }
    }
        , lr = (cr(s, u) + cr(1462, 1388) + cr(l, c))[cr(p, 1691)]("|");

    function cr(e, t) {
        return a0_0x4dee00(t, e - sr)
    }

    for (var pr = 0; ;) {
        switch (lr[pr++]) {
            case "0":
                var dr = ur[cr(d, f)];
                continue;
            case "1":
                var fr = function (e) {
                    function t(e, t) {
                        return cr(t - -ar, e)
                    }

                    e = e[t(-366, -288)](/\r\n/g, "\n");
                    for (var r = "", n = 0; n < e[t(-390, -Et)]; n++) {
                        var o = e[t(-kt, -It) + t(-At, -557)](n);
                        gr[t(-Ot, -Lt)](o, 128) ? r += String[t(-Ct, -Nt) + t(-Pt, -Mt)](o) : gr[t(-553, -Rt)](o, 127) && gr[t(-jt, -Ft)](o, 2048) ? (r += String[t(-423, -453) + t(-Dt, -Bt)](192 | gr[t(-566, -Ut)](o, 6)),
                            r += String[t(-411, -Wt) + t(-379, -347)](gr[t(-572, -Ht)](gr[t(-$t, -Gt)](o, 63), 128))) : (r += String[t(-279, -453) + t(-268, -Vt)](gr[t(-zt, -448)](gr[t(-qt, -Zt)](o, 12), 224)),
                            r += String[t(-Yt, -Wt) + t(-411, -Xt)](gr[t(-482, -Kt)](gr[t(-Jt, -Qt)](gr[t(-309, -er)](o, 6), 63), 128)),
                            r += String[t(-tr, -453) + t(-rr, -nr)](gr[t(-or, -Kt)](gr[t(-308, -ir)](o, 63), 128)))
                    }
                    return r
                };
                continue;
            case "2":
                var gr = {
                    YcAap: function (e, t) {
                        return ur[(r = -165,
                            n = -64,
                            cr(n - -1374, r))](e, t);
                        var r, n
                    },
                    SNmAe: function (e, t) {
                        var r, n;
                        return ur[(r = -142,
                            n = -xt,
                            cr(r - -1468, n))](e, t)
                    },
                    IYqgI: function (e, t) {
                        return ur[(r = 603,
                            n = 440,
                            cr(n - -918, r))](e, t);
                        var r, n
                    },
                    bBpCr: function (e, t) {
                        var r, n;
                        return ur[(r = 161,
                            n = Tt,
                            cr(n - -1268, r))](e, t)
                    },
                    yESQQ: function (e, t) {
                        var r, n;
                        return ur[(r = wt,
                            n = St,
                            cr(r - -341, n))](e, t)
                    },
                    DLqdJ: function (e, t) {
                        var r, n;
                        return ur[(r = yt,
                            n = bt,
                            cr(n - -827, r))](e, t)
                    },
                    ntwtB: function (e, t) {
                        var r, n;
                        return ur[(r = mt,
                            n = vt,
                            cr(n - -1034, r))](e, t)
                    },
                    XhOLE: function (e, t) {
                        var r, n;
                        return ur[(r = 959,
                            n = ht,
                            cr(n - -470, r))](e, t)
                    },
                    OUXTe: function (e, t) {
                        return ur[(r = -137,
                            n = -156,
                            cr(n - -_t, r))](e, t);
                        var r, n
                    },
                    lPLEl: function (e, t) {
                        return ur[(r = -gt,
                            n = -34,
                            cr(n - -1626, r))](e, t);
                        var r, n
                    },
                    HiDFY: function (e, t) {
                        return ur[(r = ft,
                            n = 939,
                            cr(r - -563, n))](e, t);
                        var r, n
                    },
                    KfTYt: ur[cr(1352, g)],
                    Swijz: function (e, t) {
                        var r, n;
                        return ur[(r = pt,
                            n = dt,
                            cr(r - -978, n))](e, t)
                    },
                    TgopC: function (e, t) {
                        return ur[(r = ut,
                            n = lt,
                            cr(r - -ct, n))](e, t);
                        var r, n
                    },
                    uytRs: function (e, t) {
                        var r, n;
                        return ur[(r = -st,
                            n = -536,
                            cr(n - -1831, r))](e, t)
                    },
                    CNQIo: function (e, t) {
                        return ur[(r = 140,
                            n = at,
                            cr(n - -1534, r))](e, t);
                        var r, n
                    },
                    NrAsb: function (e, t) {
                        return ur[(r = nt,
                            n = ot,
                            cr(n - -it, r))](e, t);
                        var r, n
                    },
                    rniTJ: function (e, t) {
                        return ur[(r = tt,
                            n = rt,
                            cr(n - -725, r))](e, t);
                        var r, n
                    },
                    vZHUx: function (e, t) {
                        var r, n;
                        return ur[(r = et,
                            n = 1085,
                            cr(r - -385, n))](e, t)
                    },
                    trZBo: function (e, t) {
                        var r, n;
                        return ur[(r = Je,
                            n = Qe,
                            cr(r - -1143, n))](e, t)
                    },
                    yAgFW: function (e, t) {
                        return e + t
                    },
                    cvnJR: function (e, t) {
                        return ur[(r = 1073,
                            n = Xe,
                            cr(n - -Ke, r))](e, t);
                        var r, n
                    },
                    ezOMc: function (e, t) {
                        var r, n;
                        return ur[(r = Ze,
                            n = Ye,
                            cr(n - -1025, r))](e, t)
                    }
                };
                continue;
            case "3":
                var _r = cr(_, h) + cr(m, 1536) + cr(v, y) + cr(1312, b) + cr(w, 1660) + cr(S, T) + cr(1357, x) + cr(1606, E) + cr(1612, k) + "m3";
                continue;
            case "4":
                var hr = ur[cr(1495, I)](Object[cr(A, O) + "pe"][cr(1582, L) + "g"][cr(C, N)](t), cr(P, M) + cr(1420, 1408) + "]") || ur[cr(R, j)](Object[cr(A, F) + "pe"][cr(D, B) + "g"][cr(U, W)](t), cr(H, r) + cr(1317, $));
                continue;
            case "5":
                var mr = function (e) {
                    var t = 287
                        , r = gr[n(ce, pe)][n(de, fe)]("|");

                    function n(e, r) {
                        return cr(r - -t, e)
                    }

                    for (var o = 0; ;) {
                        switch (r[o++]) {
                            case "0":
                                return i;
                            case "1":
                                e = gr[n(ge, _e)](fr, e);
                                continue;
                            case "2":
                                var i = "";
                                continue;
                            case "3":
                                var a, s, u, l, c, p, d;
                                continue;
                            case "4":
                                var f = 0;
                                continue;
                            case "5":
                                for (; f < e[n(1188, he)];)
                                    a = e[n(me, ve) + n(ye, be)](f++),
                                        s = e[n(we, 1227) + n(Se, 999)](f++),
                                        u = e[n(1359, ve) + n(Te, be)](f++),
                                        l = gr[n(1137, xe)](a, 2),
                                        c = gr[n(1318, Ee)](gr[n(1271, ke)](gr[n(Ie, Ae)](a, 3), 4), gr[n(Oe, Le)](s, 4)),
                                        p = gr[n(Ce, 1341)]((15 & s) << 2, gr[n(Ne, Pe)](u, 6)),
                                        d = gr[n(Me, Re)](u, 63),
                                        gr[n(je, Fe)](isNaN, s) ? p = d = 64 : gr[n(De, 1297)](isNaN, u) && (d = 64),
                                        i = gr[n(Be, Ue)](gr[n(We, 1157)](gr[n(He, $e)](i, _r[n(Ge, Ve)](l)), _r[n(ze, 1043)](c)) + _r[n(qe, 1043)](p), _r[n(874, Ve)](d));
                                continue
                        }
                        break
                    }
                };
                continue;
            case "6":
                var vr = ur[cr(G, 1433)]("undefined" == typeof window ? "undefined" : 'object', ur[cr(1640, R)]) ? __webpack_require__.g : window;
                continue;
            case "7":
                ur[cr(1587, V)]('object', ur[cr(z, 1531)]) && vr && vr[cr(q, Z) + "or"] && vr[cr(1417, Y) + "or"][cr(X, 1250) + "nt"] && vr[cr(K, J)] && (dr = ur[cr(Z, Q)]);
                continue;
            case "8":
                var yr = (new Date)[cr(ee, te)]();
                continue;
            case "9":
                return {
                    "X-s": mr(cryptojs.MD5([yr, dr, e, hr ? JSON[cr(ae, se) + "fy"](t) : ""]['join']("")).toString()),
                    "X-t": yr
                }
        }
        break
    }
}

// window = {
//     navigator:{
//     appCodeName: "Mozilla",
//     appName: "Netscape",
//     appVersion: "5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
//     vendor: "Google Inc.",
//     language:"zh-CN",
//     languages:['zh-CN', 'zh'],
//     MediaSession: {metadata: null, playbackState: 'none'},
//     userAgent:'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36'},
// }
// window.alert = {
//     function:{
//
//     }
// }
// __webpack_require__ = {}

// window = ld.proxy(window, 'window')
console.log(sign('/api/sec/v1/sbtsource', {"callForm": "web"}));

// 要等到生成数值的地方在替换
// console.log(cr(1533, 1455));
// console.log(cryptojs.MD5('1').toString());
// sr = 1186
// function cr(e, t){
//     return a0_0x4dee00(t, e-sr)
// }
// console.log(cr(1533, 1455));
// var vr = ur[cr(G, 1433)]("undefined" == typeof window ? "undefined" : (0,esm_typeof.Z)(window),
//     ur[cr(1640, R)]) ? __webpack_require__.g : window;
// ur['MjzGU']('object')
// ur['bKgFU'] ? __webpack_require__.g:window
// ur[cr(1587, V)]('object', ur[cr(z, 1531)]) && vr && vr[cr(q, Z) + "or"] && vr[cr(1417, Y) + "or"][cr(X, 1250) + "nt"] && vr[cr(K, J)] && (dr = ur[cr(Z, Q)]);
// ur['MWYyF']()