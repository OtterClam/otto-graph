import { json, JSONValue, Bytes } from '@graphprotocol/graph-ts'

let PFP: JSONValue | null = null

export function loadPFP(): JSONValue {
  if (PFP === null) {
    PFP = json.fromBytes(
      Bytes.fromUTF8(`
{
  "0": [
    {
      "first_code": 0,
      "length": 64,
      "brs": 19
    },
    {
      "first_code": 64,
      "length": 64,
      "brs": 0
    },
    {
      "first_code": 128,
      "length": 64,
      "brs": 1
    },
    {
      "first_code": 192,
      "length": 64,
      "brs": 2
    },
    {
      "first_code": 256,
      "length": 47,
      "brs": 23
    },
    {
      "first_code": 303,
      "length": 64,
      "brs": 4
    },
    {
      "first_code": 367,
      "length": 64,
      "brs": 5
    },
    {
      "first_code": 431,
      "length": 64,
      "brs": 6
    },
    {
      "first_code": 495,
      "length": 64,
      "brs": 7
    },
    {
      "first_code": 559,
      "length": 64,
      "brs": 8
    },
    {
      "first_code": 623,
      "length": 64,
      "brs": 9
    },
    {
      "first_code": 687,
      "length": 64,
      "brs": 10
    },
    {
      "first_code": 751,
      "length": 64,
      "brs": 11
    },
    {
      "first_code": 815,
      "length": 64,
      "brs": 12
    },
    {
      "first_code": 879,
      "length": 64,
      "brs": 13
    },
    {
      "first_code": 943,
      "length": 64,
      "brs": 14
    },
    {
      "first_code": 1007,
      "length": 64,
      "brs": 15
    },
    {
      "first_code": 1071,
      "length": 47,
      "brs": 26
    },
    {
      "first_code": 1118,
      "length": 34,
      "brs": 37
    },
    {
      "first_code": 1152,
      "length": 34,
      "brs": 38
    },
    {
      "first_code": 1186,
      "length": 34,
      "brs": 39
    },
    {
      "first_code": 1220,
      "length": 16,
      "brs": 50
    },
    {
      "first_code": 1236,
      "length": 10,
      "brs": 61
    },
    {
      "first_code": 1246,
      "length": 10,
      "brs": 62
    },
    {
      "first_code": 1256,
      "length": 10,
      "brs": 63
    },
    {
      "first_code": 1266,
      "length": 4,
      "brs": 74
    },
    {
      "first_code": 1270,
      "length": 1,
      "brs": 95
    },
    {
      "first_code": 1271,
      "length": 34,
      "brs": 36
    },
    {
      "first_code": 1305,
      "length": 10,
      "brs": 68
    },
    {
      "first_code": 1315,
      "length": 34,
      "brs": 39
    },
    {
      "first_code": 1349,
      "length": 34,
      "brs": 30
    },
    {
      "first_code": 1383,
      "length": 4,
      "brs": 71
    },
    {
      "first_code": 1387,
      "length": 22,
      "brs": 42
    },
    {
      "first_code": 1409,
      "length": 16,
      "brs": 53
    },
    {
      "first_code": 1425,
      "length": 22,
      "brs": 44
    },
    {
      "first_code": 1447,
      "length": 2,
      "brs": 85
    },
    {
      "first_code": 1449,
      "length": 10,
      "brs": 66
    },
    {
      "first_code": 1459,
      "length": 34,
      "brs": 37
    },
    {
      "first_code": 1493,
      "length": 34,
      "brs": 38
    },
    {
      "first_code": 1527,
      "length": 16,
      "brs": 59
    },
    {
      "first_code": 1543,
      "length": 1,
      "brs": 90
    },
    {
      "first_code": 1544,
      "length": 4,
      "brs": 72
    },
    {
      "first_code": 1548,
      "length": 22,
      "brs": 43
    },
    {
      "first_code": 1570,
      "length": 22,
      "brs": 44
    },
    {
      "first_code": 1592,
      "length": 2,
      "brs": 85
    },
    {
      "first_code": 1594,
      "length": 22,
      "brs": 46
    },
    {
      "first_code": 1616,
      "length": 22,
      "brs": 47
    },
    {
      "first_code": 1638,
      "length": 16,
      "brs": 58
    },
    {
      "first_code": 1654,
      "length": 22,
      "brs": 49
    },
    {
      "first_code": 1676,
      "length": 16,
      "brs": 50
    },
    {
      "first_code": 1692,
      "length": 10,
      "brs": 61
    },
    {
      "first_code": 1702,
      "length": 22,
      "brs": 42
    },
    {
      "first_code": 1724,
      "length": 22,
      "brs": 43
    },
    {
      "first_code": 1746,
      "length": 22,
      "brs": 44
    },
    {
      "first_code": 1768,
      "length": 16,
      "brs": 55
    },
    {
      "first_code": 1784,
      "length": 47,
      "brs": 26
    },
    {
      "first_code": 1831,
      "length": 47,
      "brs": 27
    },
    {
      "first_code": 1878,
      "length": 47,
      "brs": 28
    },
    {
      "first_code": 1925,
      "length": 47,
      "brs": 29
    },
    {
      "first_code": 1972,
      "length": 47,
      "brs": 20
    },
    {
      "first_code": 2019,
      "length": 47,
      "brs": 21
    },
    {
      "first_code": 2066,
      "length": 47,
      "brs": 22
    },
    {
      "first_code": 2113,
      "length": 47,
      "brs": 23
    },
    {
      "first_code": 2160,
      "length": 2,
      "brs": 84
    },
    {
      "first_code": 2162,
      "length": 34,
      "brs": 35
    },
    {
      "first_code": 2196,
      "length": 34,
      "brs": 36
    },
    {
      "first_code": 2230,
      "length": 34,
      "brs": 37
    },
    {
      "first_code": 2264,
      "length": 34,
      "brs": 38
    },
    {
      "first_code": 2298,
      "length": 16,
      "brs": 59
    },
    {
      "first_code": 2314,
      "length": 16,
      "brs": 50
    },
    {
      "first_code": 2330,
      "length": 10,
      "brs": 63
    },
    {
      "first_code": 2340,
      "length": 22,
      "brs": 44
    },
    {
      "first_code": 2362,
      "length": 16,
      "brs": 57
    },
    {
      "first_code": 2378,
      "length": 16,
      "brs": 51
    },
    {
      "first_code": 2394,
      "length": 16,
      "brs": 51
    },
    {
      "first_code": 2410,
      "length": 10,
      "brs": 62
    },
    {
      "first_code": 2420,
      "length": 10,
      "brs": 62
    },
    {
      "first_code": 2430,
      "length": 4,
      "brs": 73
    },
    {
      "first_code": 2434,
      "length": 16,
      "brs": 54
    }
  ],
  "1": [
    {
      "first_code": 0,
      "length": 64,
      "brs": 17
    },
    {
      "first_code": 64,
      "length": 47,
      "brs": 28
    },
    {
      "first_code": 111,
      "length": 47,
      "brs": 29
    },
    {
      "first_code": 158,
      "length": 47,
      "brs": 20
    },
    {
      "first_code": 205,
      "length": 47,
      "brs": 21
    },
    {
      "first_code": 252,
      "length": 47,
      "brs": 22
    },
    {
      "first_code": 299,
      "length": 4,
      "brs": 73
    },
    {
      "first_code": 303,
      "length": 22,
      "brs": 44
    },
    {
      "first_code": 325,
      "length": 10,
      "brs": 65
    },
    {
      "first_code": 335,
      "length": 16,
      "brs": 56
    },
    {
      "first_code": 351,
      "length": 4,
      "brs": 78
    },
    {
      "first_code": 355,
      "length": 47,
      "brs": 29
    },
    {
      "first_code": 402,
      "length": 2,
      "brs": 80
    },
    {
      "first_code": 404,
      "length": 10,
      "brs": 61
    },
    {
      "first_code": 414,
      "length": 22,
      "brs": 42
    },
    {
      "first_code": 436,
      "length": 34,
      "brs": 33
    },
    {
      "first_code": 470,
      "length": 22,
      "brs": 44
    },
    {
      "first_code": 492,
      "length": 22,
      "brs": 45
    },
    {
      "first_code": 514,
      "length": 10,
      "brs": 66
    },
    {
      "first_code": 524,
      "length": 16,
      "brs": 57
    },
    {
      "first_code": 540,
      "length": 22,
      "brs": 48
    },
    {
      "first_code": 562,
      "length": 34,
      "brs": 39
    },
    {
      "first_code": 596,
      "length": 16,
      "brs": 50
    },
    {
      "first_code": 612,
      "length": 22,
      "brs": 41
    },
    {
      "first_code": 634,
      "length": 10,
      "brs": 62
    },
    {
      "first_code": 644,
      "length": 22,
      "brs": 43
    },
    {
      "first_code": 666,
      "length": 10,
      "brs": 64
    },
    {
      "first_code": 676,
      "length": 34,
      "brs": 35
    },
    {
      "first_code": 710,
      "length": 16,
      "brs": 56
    },
    {
      "first_code": 726,
      "length": 34,
      "brs": 37
    },
    {
      "first_code": 760,
      "length": 4,
      "brs": 78
    },
    {
      "first_code": 764,
      "length": 4,
      "brs": 79
    },
    {
      "first_code": 768,
      "length": 1,
      "brs": 90
    },
    {
      "first_code": 769,
      "length": 10,
      "brs": 61
    },
    {
      "first_code": 779,
      "length": 16,
      "brs": 57
    },
    {
      "first_code": 795,
      "length": 10,
      "brs": 61
    },
    {
      "first_code": 805,
      "length": 10,
      "brs": 62
    },
    {
      "first_code": 815,
      "length": 4,
      "brs": 73
    }
  ],
  "10": [
    {
      "first_code": 0,
      "length": 64,
      "brs": 0
    },
    {
      "first_code": 64,
      "length": 64,
      "brs": 1
    },
    {
      "first_code": 128,
      "length": 10,
      "brs": 62
    },
    {
      "first_code": 138,
      "length": 64,
      "brs": 3
    },
    {
      "first_code": 202,
      "length": 47,
      "brs": 23
    },
    {
      "first_code": 249,
      "length": 34,
      "brs": 34
    },
    {
      "first_code": 283,
      "length": 64,
      "brs": 15
    },
    {
      "first_code": 347,
      "length": 16,
      "brs": 56
    },
    {
      "first_code": 363,
      "length": 64,
      "brs": 17
    },
    {
      "first_code": 427,
      "length": 10,
      "brs": 68
    },
    {
      "first_code": 437,
      "length": 47,
      "brs": 29
    },
    {
      "first_code": 484,
      "length": 16,
      "brs": 50
    },
    {
      "first_code": 500,
      "length": 64,
      "brs": 1
    },
    {
      "first_code": 564,
      "length": 2,
      "brs": 82
    },
    {
      "first_code": 566,
      "length": 64,
      "brs": 3
    },
    {
      "first_code": 630,
      "length": 1,
      "brs": 94
    },
    {
      "first_code": 631,
      "length": 22,
      "brs": 48
    },
    {
      "first_code": 653,
      "length": 4,
      "brs": 79
    },
    {
      "first_code": 657,
      "length": 4,
      "brs": 70
    },
    {
      "first_code": 661,
      "length": 10,
      "brs": 61
    },
    {
      "first_code": 671,
      "length": 10,
      "brs": 62
    },
    {
      "first_code": 681,
      "length": 2,
      "brs": 83
    },
    {
      "first_code": 683,
      "length": 22,
      "brs": 44
    },
    {
      "first_code": 705,
      "length": 22,
      "brs": 45
    },
    {
      "first_code": 727,
      "length": 2,
      "brs": 86
    },
    {
      "first_code": 729,
      "length": 64,
      "brs": 17
    },
    {
      "first_code": 793,
      "length": 34,
      "brs": 38
    },
    {
      "first_code": 827,
      "length": 64,
      "brs": 19
    },
    {
      "first_code": 891,
      "length": 47,
      "brs": 20
    },
    {
      "first_code": 938,
      "length": 34,
      "brs": 31
    },
    {
      "first_code": 972,
      "length": 34,
      "brs": 33
    },
    {
      "first_code": 1006,
      "length": 47,
      "brs": 24
    },
    {
      "first_code": 1053,
      "length": 34,
      "brs": 35
    },
    {
      "first_code": 1087,
      "length": 64,
      "brs": 6
    },
    {
      "first_code": 1151,
      "length": 34,
      "brs": 39
    },
    {
      "first_code": 1185,
      "length": 47,
      "brs": 20
    },
    {
      "first_code": 1232,
      "length": 64,
      "brs": 11
    },
    {
      "first_code": 1296,
      "length": 64,
      "brs": 12
    },
    {
      "first_code": 1360,
      "length": 64,
      "brs": 14
    },
    {
      "first_code": 1424,
      "length": 22,
      "brs": 45
    },
    {
      "first_code": 1446,
      "length": 1,
      "brs": 96
    },
    {
      "first_code": 1447,
      "length": 64,
      "brs": 17
    },
    {
      "first_code": 1511,
      "length": 47,
      "brs": 28
    },
    {
      "first_code": 1558,
      "length": 34,
      "brs": 39
    },
    {
      "first_code": 1592,
      "length": 22,
      "brs": 45
    },
    {
      "first_code": 10000,
      "length": 22,
      "brs": 45
    },
    {
      "first_code": 10022,
      "length": 4,
      "brs": 77
    },
    {
      "first_code": 10026,
      "length": 22,
      "brs": 42
    },
    {
      "first_code": 10048,
      "length": 22,
      "brs": 48
    },
    {
      "first_code": 10070,
      "length": 64,
      "brs": 13
    },
    {
      "first_code": 20000,
      "length": 16,
      "brs": 56
    },
    {
      "first_code": 20016,
      "length": 47,
      "brs": 27
    }
  ],
  "11": [
    {
      "first_code": 0,
      "length": 2,
      "brs": 82
    },
    {
      "first_code": 2,
      "length": 47,
      "brs": 23
    },
    {
      "first_code": 49,
      "length": 4,
      "brs": 74
    },
    {
      "first_code": 53,
      "length": 64,
      "brs": 15
    },
    {
      "first_code": 117,
      "length": 64,
      "brs": 16
    },
    {
      "first_code": 181,
      "length": 34,
      "brs": 37
    },
    {
      "first_code": 215,
      "length": 34,
      "brs": 38
    },
    {
      "first_code": 249,
      "length": 64,
      "brs": 19
    },
    {
      "first_code": 313,
      "length": 64,
      "brs": 0
    },
    {
      "first_code": 377,
      "length": 64,
      "brs": 1
    },
    {
      "first_code": 441,
      "length": 34,
      "brs": 32
    },
    {
      "first_code": 475,
      "length": 16,
      "brs": 53
    },
    {
      "first_code": 491,
      "length": 22,
      "brs": 44
    },
    {
      "first_code": 513,
      "length": 64,
      "brs": 5
    },
    {
      "first_code": 577,
      "length": 47,
      "brs": 26
    },
    {
      "first_code": 624,
      "length": 47,
      "brs": 27
    },
    {
      "first_code": 671,
      "length": 34,
      "brs": 38
    },
    {
      "first_code": 705,
      "length": 64,
      "brs": 9
    },
    {
      "first_code": 769,
      "length": 64,
      "brs": 10
    },
    {
      "first_code": 833,
      "length": 64,
      "brs": 11
    },
    {
      "first_code": 897,
      "length": 47,
      "brs": 22
    },
    {
      "first_code": 944,
      "length": 64,
      "brs": 13
    },
    {
      "first_code": 1008,
      "length": 64,
      "brs": 14
    },
    {
      "first_code": 1072,
      "length": 34,
      "brs": 35
    },
    {
      "first_code": 1106,
      "length": 47,
      "brs": 26
    },
    {
      "first_code": 1153,
      "length": 47,
      "brs": 27
    },
    {
      "first_code": 1200,
      "length": 64,
      "brs": 18
    },
    {
      "first_code": 1264,
      "length": 64,
      "brs": 19
    },
    {
      "first_code": 1328,
      "length": 16,
      "brs": 50
    },
    {
      "first_code": 1344,
      "length": 64,
      "brs": 1
    },
    {
      "first_code": 1408,
      "length": 34,
      "brs": 32
    },
    {
      "first_code": 1442,
      "length": 47,
      "brs": 23
    },
    {
      "first_code": 1489,
      "length": 47,
      "brs": 24
    },
    {
      "first_code": 1536,
      "length": 64,
      "brs": 6
    },
    {
      "first_code": 1600,
      "length": 64,
      "brs": 7
    },
    {
      "first_code": 1664,
      "length": 64,
      "brs": 8
    },
    {
      "first_code": 1728,
      "length": 64,
      "brs": 9
    },
    {
      "first_code": 1792,
      "length": 16,
      "brs": 50
    },
    {
      "first_code": 1808,
      "length": 47,
      "brs": 21
    },
    {
      "first_code": 1855,
      "length": 34,
      "brs": 32
    },
    {
      "first_code": 1889,
      "length": 34,
      "brs": 33
    },
    {
      "first_code": 1923,
      "length": 64,
      "brs": 14
    },
    {
      "first_code": 1987,
      "length": 64,
      "brs": 15
    },
    {
      "first_code": 2051,
      "length": 47,
      "brs": 26
    },
    {
      "first_code": 2098,
      "length": 47,
      "brs": 27
    },
    {
      "first_code": 2145,
      "length": 34,
      "brs": 38
    },
    {
      "first_code": 2179,
      "length": 10,
      "brs": 69
    },
    {
      "first_code": 2189,
      "length": 22,
      "brs": 40
    },
    {
      "first_code": 2211,
      "length": 64,
      "brs": 1
    },
    {
      "first_code": 2275,
      "length": 16,
      "brs": 52
    },
    {
      "first_code": 2291,
      "length": 47,
      "brs": 23
    },
    {
      "first_code": 2338,
      "length": 64,
      "brs": 4
    },
    {
      "first_code": 2402,
      "length": 64,
      "brs": 5
    },
    {
      "first_code": 2466,
      "length": 47,
      "brs": 26
    },
    {
      "first_code": 2513,
      "length": 22,
      "brs": 47
    },
    {
      "first_code": 2535,
      "length": 22,
      "brs": 48
    },
    {
      "first_code": 2557,
      "length": 34,
      "brs": 39
    },
    {
      "first_code": 2591,
      "length": 16,
      "brs": 50
    },
    {
      "first_code": 2607,
      "length": 34,
      "brs": 31
    },
    {
      "first_code": 2641,
      "length": 1,
      "brs": 92
    },
    {
      "first_code": 2642,
      "length": 64,
      "brs": 13
    },
    {
      "first_code": 2706,
      "length": 64,
      "brs": 14
    },
    {
      "first_code": 2770,
      "length": 64,
      "brs": 15
    },
    {
      "first_code": 2834,
      "length": 64,
      "brs": 16
    },
    {
      "first_code": 2898,
      "length": 64,
      "brs": 18
    },
    {
      "first_code": 2962,
      "length": 47,
      "brs": 29
    },
    {
      "first_code": 3009,
      "length": 64,
      "brs": 0
    },
    {
      "first_code": 3073,
      "length": 64,
      "brs": 1
    },
    {
      "first_code": 3137,
      "length": 34,
      "brs": 32
    },
    {
      "first_code": 3171,
      "length": 64,
      "brs": 3
    },
    {
      "first_code": 3235,
      "length": 47,
      "brs": 24
    },
    {
      "first_code": 3282,
      "length": 47,
      "brs": 25
    },
    {
      "first_code": 3329,
      "length": 64,
      "brs": 6
    },
    {
      "first_code": 3393,
      "length": 64,
      "brs": 7
    },
    {
      "first_code": 3457,
      "length": 34,
      "brs": 38
    },
    {
      "first_code": 3491,
      "length": 64,
      "brs": 9
    },
    {
      "first_code": 3555,
      "length": 22,
      "brs": 40
    },
    {
      "first_code": 3577,
      "length": 47,
      "brs": 21
    },
    {
      "first_code": 3624,
      "length": 64,
      "brs": 12
    },
    {
      "first_code": 3688,
      "length": 22,
      "brs": 43
    },
    {
      "first_code": 3710,
      "length": 10,
      "brs": 64
    },
    {
      "first_code": 3720,
      "length": 16,
      "brs": 55
    },
    {
      "first_code": 3736,
      "length": 22,
      "brs": 46
    },
    {
      "first_code": 3758,
      "length": 34,
      "brs": 37
    },
    {
      "first_code": 3792,
      "length": 64,
      "brs": 18
    },
    {
      "first_code": 3856,
      "length": 64,
      "brs": 19
    },
    {
      "first_code": 3920,
      "length": 16,
      "brs": 50
    },
    {
      "first_code": 3936,
      "length": 34,
      "brs": 31
    },
    {
      "first_code": 3970,
      "length": 34,
      "brs": 32
    },
    {
      "first_code": 4004,
      "length": 34,
      "brs": 35
    },
    {
      "first_code": 4038,
      "length": 47,
      "brs": 26
    },
    {
      "first_code": 4085,
      "length": 64,
      "brs": 7
    },
    {
      "first_code": 4149,
      "length": 64,
      "brs": 8
    },
    {
      "first_code": 4213,
      "length": 64,
      "brs": 9
    },
    {
      "first_code": 4277,
      "length": 47,
      "brs": 20
    },
    {
      "first_code": 4324,
      "length": 47,
      "brs": 21
    },
    {
      "first_code": 4371,
      "length": 34,
      "brs": 32
    },
    {
      "first_code": 4405,
      "length": 22,
      "brs": 43
    },
    {
      "first_code": 4427,
      "length": 64,
      "brs": 14
    },
    {
      "first_code": 4491,
      "length": 47,
      "brs": 25
    },
    {
      "first_code": 4538,
      "length": 64,
      "brs": 16
    },
    {
      "first_code": 4602,
      "length": 22,
      "brs": 47
    },
    {
      "first_code": 4624,
      "length": 64,
      "brs": 18
    },
    {
      "first_code": 4688,
      "length": 16,
      "brs": 59
    },
    {
      "first_code": 4704,
      "length": 64,
      "brs": 0
    },
    {
      "first_code": 4768,
      "length": 47,
      "brs": 21
    },
    {
      "first_code": 4815,
      "length": 34,
      "brs": 32
    },
    {
      "first_code": 4849,
      "length": 2,
      "brs": 87
    },
    {
      "first_code": 4851,
      "length": 47,
      "brs": 29
    },
    {
      "first_code": 4898,
      "length": 34,
      "brs": 30
    },
    {
      "first_code": 4932,
      "length": 22,
      "brs": 41
    },
    {
      "first_code": 4954,
      "length": 34,
      "brs": 32
    },
    {
      "first_code": 10000,
      "length": 22,
      "brs": 43
    },
    {
      "first_code": 10022,
      "length": 4,
      "brs": 74
    },
    {
      "first_code": 10026,
      "length": 1,
      "brs": 95
    },
    {
      "first_code": 10027,
      "length": 64,
      "brs": 6
    },
    {
      "first_code": 20000,
      "length": 10,
      "brs": 65
    },
    {
      "first_code": 20010,
      "length": 2,
      "brs": 87
    },
    {
      "first_code": 20012,
      "length": 1,
      "brs": 93
    },
    {
      "first_code": 20013,
      "length": 10,
      "brs": 64
    },
    {
      "first_code": 20023,
      "length": 2,
      "brs": 88
    }
  ],
  "12": [
    {
      "first_code": 0,
      "length": 0,
      "brs": 0
    },
    {
      "first_code": 1,
      "length": 0,
      "brs": 0
    },
    {
      "first_code": 2,
      "length": 0,
      "brs": 0
    }
  ],
  "2": [
    {
      "first_code": 0,
      "length": 64,
      "brs": 17
    },
    {
      "first_code": 64,
      "length": 64,
      "brs": 18
    },
    {
      "first_code": 128,
      "length": 47,
      "brs": 29
    },
    {
      "first_code": 175,
      "length": 16,
      "brs": 50
    },
    {
      "first_code": 191,
      "length": 4,
      "brs": 71
    },
    {
      "first_code": 195,
      "length": 10,
      "brs": 64
    },
    {
      "first_code": 205,
      "length": 10,
      "brs": 65
    },
    {
      "first_code": 215,
      "length": 22,
      "brs": 47
    },
    {
      "first_code": 237,
      "length": 16,
      "brs": 58
    },
    {
      "first_code": 253,
      "length": 2,
      "brs": 89
    },
    {
      "first_code": 255,
      "length": 22,
      "brs": 40
    },
    {
      "first_code": 277,
      "length": 34,
      "brs": 31
    },
    {
      "first_code": 311,
      "length": 1,
      "brs": 93
    },
    {
      "first_code": 312,
      "length": 1,
      "brs": 94
    },
    {
      "first_code": 313,
      "length": 2,
      "brs": 85
    },
    {
      "first_code": 315,
      "length": 22,
      "brs": 42
    },
    {
      "first_code": 337,
      "length": 22,
      "brs": 43
    },
    {
      "first_code": 359,
      "length": 2,
      "brs": 86
    },
    {
      "first_code": 361,
      "length": 2,
      "brs": 82
    },
    {
      "first_code": 363,
      "length": 4,
      "brs": 76
    }
  ],
  "255": [
    {
      "first_code": 0,
      "length": 22,
      "brs": 46
    }
  ],
  "3": [
    {
      "first_code": 0,
      "length": 64,
      "brs": 0
    },
    {
      "first_code": 64,
      "length": 47,
      "brs": 23
    },
    {
      "first_code": 111,
      "length": 47,
      "brs": 24
    },
    {
      "first_code": 158,
      "length": 34,
      "brs": 35
    },
    {
      "first_code": 192,
      "length": 22,
      "brs": 46
    },
    {
      "first_code": 214,
      "length": 22,
      "brs": 47
    },
    {
      "first_code": 236,
      "length": 34,
      "brs": 32
    },
    {
      "first_code": 270,
      "length": 64,
      "brs": 13
    },
    {
      "first_code": 334,
      "length": 47,
      "brs": 24
    },
    {
      "first_code": 381,
      "length": 47,
      "brs": 25
    },
    {
      "first_code": 428,
      "length": 47,
      "brs": 26
    },
    {
      "first_code": 475,
      "length": 22,
      "brs": 47
    },
    {
      "first_code": 497,
      "length": 22,
      "brs": 49
    },
    {
      "first_code": 519,
      "length": 22,
      "brs": 40
    },
    {
      "first_code": 541,
      "length": 10,
      "brs": 61
    },
    {
      "first_code": 551,
      "length": 34,
      "brs": 32
    },
    {
      "first_code": 585,
      "length": 47,
      "brs": 27
    },
    {
      "first_code": 632,
      "length": 47,
      "brs": 28
    },
    {
      "first_code": 679,
      "length": 47,
      "brs": 29
    },
    {
      "first_code": 726,
      "length": 47,
      "brs": 21
    },
    {
      "first_code": 773,
      "length": 34,
      "brs": 33
    },
    {
      "first_code": 807,
      "length": 64,
      "brs": 14
    },
    {
      "first_code": 871,
      "length": 64,
      "brs": 15
    },
    {
      "first_code": 935,
      "length": 64,
      "brs": 16
    },
    {
      "first_code": 999,
      "length": 64,
      "brs": 17
    },
    {
      "first_code": 1063,
      "length": 16,
      "brs": 58
    },
    {
      "first_code": 1079,
      "length": 16,
      "brs": 59
    },
    {
      "first_code": 1095,
      "length": 16,
      "brs": 50
    },
    {
      "first_code": 1111,
      "length": 4,
      "brs": 71
    },
    {
      "first_code": 1115,
      "length": 16,
      "brs": 53
    },
    {
      "first_code": 1131,
      "length": 34,
      "brs": 36
    },
    {
      "first_code": 1165,
      "length": 34,
      "brs": 31
    },
    {
      "first_code": 1199,
      "length": 64,
      "brs": 16
    },
    {
      "first_code": 1263,
      "length": 47,
      "brs": 27
    },
    {
      "first_code": 1310,
      "length": 34,
      "brs": 38
    },
    {
      "first_code": 1344,
      "length": 47,
      "brs": 21
    },
    {
      "first_code": 1391,
      "length": 64,
      "brs": 2
    },
    {
      "first_code": 1455,
      "length": 34,
      "brs": 35
    },
    {
      "first_code": 1489,
      "length": 64,
      "brs": 11
    },
    {
      "first_code": 1553,
      "length": 64,
      "brs": 12
    },
    {
      "first_code": 1617,
      "length": 64,
      "brs": 13
    },
    {
      "first_code": 1681,
      "length": 64,
      "brs": 17
    },
    {
      "first_code": 1745,
      "length": 64,
      "brs": 18
    },
    {
      "first_code": 1809,
      "length": 64,
      "brs": 19
    },
    {
      "first_code": 1873,
      "length": 64,
      "brs": 0
    },
    {
      "first_code": 1937,
      "length": 47,
      "brs": 21
    },
    {
      "first_code": 1984,
      "length": 64,
      "brs": 2
    },
    {
      "first_code": 2048,
      "length": 34,
      "brs": 33
    },
    {
      "first_code": 2082,
      "length": 47,
      "brs": 20
    },
    {
      "first_code": 2129,
      "length": 47,
      "brs": 22
    },
    {
      "first_code": 2176,
      "length": 47,
      "brs": 23
    },
    {
      "first_code": 2223,
      "length": 34,
      "brs": 35
    },
    {
      "first_code": 2257,
      "length": 34,
      "brs": 36
    },
    {
      "first_code": 2291,
      "length": 16,
      "brs": 57
    },
    {
      "first_code": 2307,
      "length": 47,
      "brs": 23
    },
    {
      "first_code": 2354,
      "length": 47,
      "brs": 26
    },
    {
      "first_code": 2401,
      "length": 34,
      "brs": 30
    },
    {
      "first_code": 2435,
      "length": 47,
      "brs": 22
    },
    {
      "first_code": 2482,
      "length": 34,
      "brs": 32
    },
    {
      "first_code": 2516,
      "length": 22,
      "brs": 44
    },
    {
      "first_code": 2538,
      "length": 22,
      "brs": 45
    },
    {
      "first_code": 2560,
      "length": 4,
      "brs": 77
    },
    {
      "first_code": 10000,
      "length": 2,
      "brs": 87
    },
    {
      "first_code": 10002,
      "length": 2,
      "brs": 88
    },
    {
      "first_code": 10004,
      "length": 64,
      "brs": 19
    },
    {
      "first_code": 10068,
      "length": 64,
      "brs": 0
    },
    {
      "first_code": 10132,
      "length": 47,
      "brs": 21
    },
    {
      "first_code": 10179,
      "length": 22,
      "brs": 42
    },
    {
      "first_code": 10201,
      "length": 16,
      "brs": 50
    },
    {
      "first_code": 10217,
      "length": 4,
      "brs": 72
    },
    {
      "first_code": 10221,
      "length": 2,
      "brs": 83
    },
    {
      "first_code": 10223,
      "length": 4,
      "brs": 74
    },
    {
      "first_code": 10227,
      "length": 4,
      "brs": 75
    },
    {
      "first_code": 10231,
      "length": 4,
      "brs": 76
    },
    {
      "first_code": 10235,
      "length": 16,
      "brs": 57
    },
    {
      "first_code": 10251,
      "length": 10,
      "brs": 69
    },
    {
      "first_code": 10261,
      "length": 4,
      "brs": 74
    },
    {
      "first_code": 10265,
      "length": 64,
      "brs": 7
    },
    {
      "first_code": 10329,
      "length": 47,
      "brs": 28
    },
    {
      "first_code": 10376,
      "length": 64,
      "brs": 9
    },
    {
      "first_code": 10440,
      "length": 64,
      "brs": 10
    },
    {
      "first_code": 10504,
      "length": 47,
      "brs": 22
    },
    {
      "first_code": 10551,
      "length": 34,
      "brs": 33
    },
    {
      "first_code": 10585,
      "length": 47,
      "brs": 24
    },
    {
      "first_code": 10632,
      "length": 47,
      "brs": 25
    },
    {
      "first_code": 10679,
      "length": 64,
      "brs": 0
    },
    {
      "first_code": 10743,
      "length": 16,
      "brs": 53
    },
    {
      "first_code": 10759,
      "length": 34,
      "brs": 36
    },
    {
      "first_code": 10793,
      "length": 47,
      "brs": 27
    },
    {
      "first_code": 10840,
      "length": 47,
      "brs": 28
    },
    {
      "first_code": 10887,
      "length": 47,
      "brs": 29
    },
    {
      "first_code": 10934,
      "length": 47,
      "brs": 20
    },
    {
      "first_code": 10981,
      "length": 22,
      "brs": 44
    },
    {
      "first_code": 11003,
      "length": 10,
      "brs": 65
    },
    {
      "first_code": 11013,
      "length": 47,
      "brs": 26
    },
    {
      "first_code": 11060,
      "length": 1,
      "brs": 94
    },
    {
      "first_code": 11061,
      "length": 2,
      "brs": 85
    },
    {
      "first_code": 11063,
      "length": 22,
      "brs": 46
    },
    {
      "first_code": 11085,
      "length": 22,
      "brs": 47
    },
    {
      "first_code": 11107,
      "length": 22,
      "brs": 48
    },
    {
      "first_code": 11129,
      "length": 16,
      "brs": 59
    },
    {
      "first_code": 11145,
      "length": 47,
      "brs": 21
    },
    {
      "first_code": 11192,
      "length": 47,
      "brs": 24
    },
    {
      "first_code": 11239,
      "length": 10,
      "brs": 60
    },
    {
      "first_code": 11249,
      "length": 10,
      "brs": 61
    },
    {
      "first_code": 11259,
      "length": 64,
      "brs": 15
    },
    {
      "first_code": 11323,
      "length": 47,
      "brs": 29
    },
    {
      "first_code": 11370,
      "length": 16,
      "brs": 58
    },
    {
      "first_code": 11386,
      "length": 10,
      "brs": 65
    },
    {
      "first_code": 11396,
      "length": 1,
      "brs": 91
    },
    {
      "first_code": 11397,
      "length": 4,
      "brs": 78
    },
    {
      "first_code": 11401,
      "length": 2,
      "brs": 85
    },
    {
      "first_code": 11403,
      "length": 4,
      "brs": 74
    },
    {
      "first_code": 11407,
      "length": 1,
      "brs": 96
    },
    {
      "first_code": 20000,
      "length": 64,
      "brs": 13
    },
    {
      "first_code": 20064,
      "length": 64,
      "brs": 14
    },
    {
      "first_code": 20128,
      "length": 4,
      "brs": 75
    },
    {
      "first_code": 20132,
      "length": 4,
      "brs": 76
    },
    {
      "first_code": 20136,
      "length": 2,
      "brs": 88
    },
    {
      "first_code": 20138,
      "length": 64,
      "brs": 14
    },
    {
      "first_code": 20202,
      "length": 64,
      "brs": 0
    },
    {
      "first_code": 20266,
      "length": 64,
      "brs": 1
    },
    {
      "first_code": 20330,
      "length": 64,
      "brs": 2
    },
    {
      "first_code": 20394,
      "length": 64,
      "brs": 3
    },
    {
      "first_code": 20458,
      "length": 64,
      "brs": 19
    },
    {
      "first_code": 20522,
      "length": 34,
      "brs": 39
    },
    {
      "first_code": 20556,
      "length": 34,
      "brs": 36
    },
    {
      "first_code": 20590,
      "length": 34,
      "brs": 37
    },
    {
      "first_code": 20624,
      "length": 34,
      "brs": 38
    },
    {
      "first_code": 20658,
      "length": 22,
      "brs": 44
    }
  ],
  "4": [
    {
      "first_code": 0,
      "length": 64,
      "brs": 18
    },
    {
      "first_code": 64,
      "length": 64,
      "brs": 19
    },
    {
      "first_code": 128,
      "length": 64,
      "brs": 0
    },
    {
      "first_code": 192,
      "length": 64,
      "brs": 1
    },
    {
      "first_code": 256,
      "length": 34,
      "brs": 32
    },
    {
      "first_code": 290,
      "length": 47,
      "brs": 23
    },
    {
      "first_code": 337,
      "length": 34,
      "brs": 34
    },
    {
      "first_code": 371,
      "length": 64,
      "brs": 6
    },
    {
      "first_code": 435,
      "length": 34,
      "brs": 37
    },
    {
      "first_code": 469,
      "length": 22,
      "brs": 42
    },
    {
      "first_code": 491,
      "length": 16,
      "brs": 53
    },
    {
      "first_code": 507,
      "length": 10,
      "brs": 64
    },
    {
      "first_code": 517,
      "length": 10,
      "brs": 65
    },
    {
      "first_code": 527,
      "length": 4,
      "brs": 76
    },
    {
      "first_code": 531,
      "length": 34,
      "brs": 37
    },
    {
      "first_code": 565,
      "length": 47,
      "brs": 28
    },
    {
      "first_code": 612,
      "length": 34,
      "brs": 39
    },
    {
      "first_code": 646,
      "length": 47,
      "brs": 20
    },
    {
      "first_code": 693,
      "length": 34,
      "brs": 31
    },
    {
      "first_code": 727,
      "length": 64,
      "brs": 2
    },
    {
      "first_code": 791,
      "length": 64,
      "brs": 3
    },
    {
      "first_code": 855,
      "length": 47,
      "brs": 25
    },
    {
      "first_code": 902,
      "length": 64,
      "brs": 6
    },
    {
      "first_code": 966,
      "length": 34,
      "brs": 37
    },
    {
      "first_code": 1000,
      "length": 10,
      "brs": 68
    },
    {
      "first_code": 1010,
      "length": 47,
      "brs": 20
    },
    {
      "first_code": 1057,
      "length": 64,
      "brs": 11
    },
    {
      "first_code": 1121,
      "length": 64,
      "brs": 12
    },
    {
      "first_code": 1185,
      "length": 4,
      "brs": 73
    },
    {
      "first_code": 1189,
      "length": 47,
      "brs": 24
    },
    {
      "first_code": 1236,
      "length": 47,
      "brs": 27
    },
    {
      "first_code": 1283,
      "length": 64,
      "brs": 18
    },
    {
      "first_code": 1347,
      "length": 64,
      "brs": 19
    },
    {
      "first_code": 1411,
      "length": 16,
      "brs": 51
    },
    {
      "first_code": 1427,
      "length": 64,
      "brs": 2
    },
    {
      "first_code": 1491,
      "length": 64,
      "brs": 3
    },
    {
      "first_code": 1555,
      "length": 47,
      "brs": 24
    },
    {
      "first_code": 1602,
      "length": 34,
      "brs": 35
    },
    {
      "first_code": 1636,
      "length": 64,
      "brs": 6
    },
    {
      "first_code": 1700,
      "length": 64,
      "brs": 7
    },
    {
      "first_code": 1764,
      "length": 22,
      "brs": 48
    },
    {
      "first_code": 1786,
      "length": 47,
      "brs": 29
    },
    {
      "first_code": 1833,
      "length": 64,
      "brs": 10
    },
    {
      "first_code": 1897,
      "length": 64,
      "brs": 11
    },
    {
      "first_code": 1961,
      "length": 34,
      "brs": 32
    },
    {
      "first_code": 1995,
      "length": 16,
      "brs": 53
    },
    {
      "first_code": 2011,
      "length": 47,
      "brs": 24
    },
    {
      "first_code": 2058,
      "length": 2,
      "brs": 85
    },
    {
      "first_code": 2060,
      "length": 2,
      "brs": 86
    },
    {
      "first_code": 2062,
      "length": 1,
      "brs": 97
    },
    {
      "first_code": 2063,
      "length": 16,
      "brs": 58
    },
    {
      "first_code": 2079,
      "length": 47,
      "brs": 23
    },
    {
      "first_code": 2126,
      "length": 34,
      "brs": 34
    },
    {
      "first_code": 2160,
      "length": 22,
      "brs": 45
    },
    {
      "first_code": 2182,
      "length": 4,
      "brs": 76
    },
    {
      "first_code": 2186,
      "length": 22,
      "brs": 47
    },
    {
      "first_code": 2208,
      "length": 47,
      "brs": 28
    },
    {
      "first_code": 2255,
      "length": 1,
      "brs": 99
    },
    {
      "first_code": 2256,
      "length": 4,
      "brs": 70
    },
    {
      "first_code": 2260,
      "length": 64,
      "brs": 13
    },
    {
      "first_code": 2324,
      "length": 64,
      "brs": 14
    },
    {
      "first_code": 2388,
      "length": 10,
      "brs": 66
    },
    {
      "first_code": 2398,
      "length": 2,
      "brs": 87
    },
    {
      "first_code": 2400,
      "length": 2,
      "brs": 88
    },
    {
      "first_code": 2402,
      "length": 1,
      "brs": 99
    },
    {
      "first_code": 2403,
      "length": 4,
      "brs": 70
    },
    {
      "first_code": 2407,
      "length": 22,
      "brs": 49
    },
    {
      "first_code": 2429,
      "length": 10,
      "brs": 60
    },
    {
      "first_code": 2439,
      "length": 4,
      "brs": 71
    },
    {
      "first_code": 10000,
      "length": 34,
      "brs": 38
    },
    {
      "first_code": 10034,
      "length": 47,
      "brs": 21
    },
    {
      "first_code": 10081,
      "length": 22,
      "brs": 44
    },
    {
      "first_code": 10103,
      "length": 16,
      "brs": 59
    },
    {
      "first_code": 10119,
      "length": 22,
      "brs": 45
    },
    {
      "first_code": 10141,
      "length": 22,
      "brs": 46
    },
    {
      "first_code": 10163,
      "length": 22,
      "brs": 40
    },
    {
      "first_code": 10185,
      "length": 64,
      "brs": 11
    },
    {
      "first_code": 10249,
      "length": 64,
      "brs": 12
    },
    {
      "first_code": 10313,
      "length": 16,
      "brs": 55
    },
    {
      "first_code": 10329,
      "length": 34,
      "brs": 39
    },
    {
      "first_code": 10363,
      "length": 34,
      "brs": 30
    },
    {
      "first_code": 10397,
      "length": 4,
      "brs": 78
    },
    {
      "first_code": 20000,
      "length": 34,
      "brs": 35
    },
    {
      "first_code": 20034,
      "length": 64,
      "brs": 19
    },
    {
      "first_code": 20098,
      "length": 47,
      "brs": 20
    },
    {
      "first_code": 20145,
      "length": 47,
      "brs": 21
    },
    {
      "first_code": 20192,
      "length": 64,
      "brs": 2
    }
  ],
  "5": [
    {
      "first_code": 0,
      "length": 64,
      "brs": 3
    },
    {
      "first_code": 64,
      "length": 64,
      "brs": 4
    },
    {
      "first_code": 128,
      "length": 47,
      "brs": 25
    },
    {
      "first_code": 175,
      "length": 34,
      "brs": 36
    },
    {
      "first_code": 209,
      "length": 34,
      "brs": 31
    },
    {
      "first_code": 243,
      "length": 22,
      "brs": 42
    },
    {
      "first_code": 265,
      "length": 64,
      "brs": 13
    },
    {
      "first_code": 329,
      "length": 64,
      "brs": 16
    },
    {
      "first_code": 393,
      "length": 1,
      "brs": 97
    },
    {
      "first_code": 394,
      "length": 47,
      "brs": 28
    },
    {
      "first_code": 441,
      "length": 47,
      "brs": 29
    },
    {
      "first_code": 488,
      "length": 22,
      "brs": 40
    },
    {
      "first_code": 510,
      "length": 22,
      "brs": 41
    },
    {
      "first_code": 532,
      "length": 4,
      "brs": 73
    },
    {
      "first_code": 536,
      "length": 34,
      "brs": 34
    },
    {
      "first_code": 570,
      "length": 34,
      "brs": 35
    },
    {
      "first_code": 604,
      "length": 64,
      "brs": 6
    },
    {
      "first_code": 668,
      "length": 47,
      "brs": 28
    },
    {
      "first_code": 715,
      "length": 47,
      "brs": 21
    },
    {
      "first_code": 762,
      "length": 47,
      "brs": 22
    },
    {
      "first_code": 809,
      "length": 64,
      "brs": 16
    },
    {
      "first_code": 873,
      "length": 22,
      "brs": 47
    },
    {
      "first_code": 895,
      "length": 47,
      "brs": 28
    },
    {
      "first_code": 942,
      "length": 34,
      "brs": 39
    },
    {
      "first_code": 976,
      "length": 64,
      "brs": 0
    },
    {
      "first_code": 1040,
      "length": 64,
      "brs": 1
    },
    {
      "first_code": 1104,
      "length": 34,
      "brs": 32
    },
    {
      "first_code": 1138,
      "length": 34,
      "brs": 35
    },
    {
      "first_code": 1172,
      "length": 2,
      "brs": 86
    },
    {
      "first_code": 1174,
      "length": 4,
      "brs": 77
    },
    {
      "first_code": 1178,
      "length": 4,
      "brs": 78
    },
    {
      "first_code": 1182,
      "length": 10,
      "brs": 61
    },
    {
      "first_code": 1192,
      "length": 47,
      "brs": 22
    },
    {
      "first_code": 1239,
      "length": 34,
      "brs": 33
    },
    {
      "first_code": 1273,
      "length": 22,
      "brs": 44
    },
    {
      "first_code": 1295,
      "length": 64,
      "brs": 16
    },
    {
      "first_code": 1359,
      "length": 34,
      "brs": 37
    },
    {
      "first_code": 1393,
      "length": 47,
      "brs": 28
    },
    {
      "first_code": 1440,
      "length": 34,
      "brs": 39
    },
    {
      "first_code": 1474,
      "length": 64,
      "brs": 0
    },
    {
      "first_code": 1538,
      "length": 64,
      "brs": 1
    },
    {
      "first_code": 1602,
      "length": 47,
      "brs": 22
    },
    {
      "first_code": 1649,
      "length": 64,
      "brs": 3
    },
    {
      "first_code": 1713,
      "length": 47,
      "brs": 24
    },
    {
      "first_code": 1760,
      "length": 64,
      "brs": 5
    },
    {
      "first_code": 1824,
      "length": 34,
      "brs": 39
    },
    {
      "first_code": 1858,
      "length": 22,
      "brs": 41
    },
    {
      "first_code": 1880,
      "length": 34,
      "brs": 32
    },
    {
      "first_code": 1914,
      "length": 47,
      "brs": 23
    },
    {
      "first_code": 1961,
      "length": 64,
      "brs": 17
    },
    {
      "first_code": 2025,
      "length": 47,
      "brs": 28
    },
    {
      "first_code": 2072,
      "length": 10,
      "brs": 69
    },
    {
      "first_code": 2082,
      "length": 2,
      "brs": 80
    },
    {
      "first_code": 2084,
      "length": 1,
      "brs": 91
    },
    {
      "first_code": 2085,
      "length": 4,
      "brs": 72
    },
    {
      "first_code": 2089,
      "length": 22,
      "brs": 43
    },
    {
      "first_code": 2111,
      "length": 47,
      "brs": 24
    },
    {
      "first_code": 2158,
      "length": 34,
      "brs": 35
    },
    {
      "first_code": 2192,
      "length": 10,
      "brs": 66
    },
    {
      "first_code": 2202,
      "length": 64,
      "brs": 9
    },
    {
      "first_code": 2266,
      "length": 16,
      "brs": 50
    },
    {
      "first_code": 2282,
      "length": 47,
      "brs": 21
    },
    {
      "first_code": 2329,
      "length": 2,
      "brs": 83
    },
    {
      "first_code": 2331,
      "length": 47,
      "brs": 29
    },
    {
      "first_code": 2378,
      "length": 22,
      "brs": 40
    },
    {
      "first_code": 10000,
      "length": 64,
      "brs": 7
    },
    {
      "first_code": 10064,
      "length": 34,
      "brs": 39
    },
    {
      "first_code": 10098,
      "length": 47,
      "brs": 24
    },
    {
      "first_code": 10145,
      "length": 64,
      "brs": 2
    },
    {
      "first_code": 10209,
      "length": 47,
      "brs": 20
    },
    {
      "first_code": 10256,
      "length": 22,
      "brs": 43
    },
    {
      "first_code": 10278,
      "length": 16,
      "brs": 54
    },
    {
      "first_code": 10294,
      "length": 10,
      "brs": 69
    },
    {
      "first_code": 10304,
      "length": 16,
      "brs": 50
    },
    {
      "first_code": 10320,
      "length": 64,
      "brs": 15
    },
    {
      "first_code": 10384,
      "length": 47,
      "brs": 26
    },
    {
      "first_code": 10431,
      "length": 64,
      "brs": 8
    },
    {
      "first_code": 10495,
      "length": 47,
      "brs": 20
    },
    {
      "first_code": 10542,
      "length": 64,
      "brs": 14
    },
    {
      "first_code": 10606,
      "length": 22,
      "brs": 45
    },
    {
      "first_code": 10628,
      "length": 64,
      "brs": 7
    },
    {
      "first_code": 10692,
      "length": 22,
      "brs": 48
    },
    {
      "first_code": 10714,
      "length": 64,
      "brs": 12
    },
    {
      "first_code": 10778,
      "length": 10,
      "brs": 64
    },
    {
      "first_code": 10788,
      "length": 22,
      "brs": 47
    },
    {
      "first_code": 10810,
      "length": 4,
      "brs": 78
    },
    {
      "first_code": 20000,
      "length": 64,
      "brs": 8
    },
    {
      "first_code": 20064,
      "length": 64,
      "brs": 10
    },
    {
      "first_code": 20128,
      "length": 34,
      "brs": 35
    },
    {
      "first_code": 20162,
      "length": 22,
      "brs": 47
    },
    {
      "first_code": 20184,
      "length": 34,
      "brs": 39
    },
    {
      "first_code": 20218,
      "length": 34,
      "brs": 33
    },
    {
      "first_code": 20252,
      "length": 1,
      "brs": 94
    },
    {
      "first_code": 20253,
      "length": 22,
      "brs": 45
    },
    {
      "first_code": 20275,
      "length": 47,
      "brs": 27
    },
    {
      "first_code": 20322,
      "length": 22,
      "brs": 46
    },
    {
      "first_code": 20344,
      "length": 16,
      "brs": 55
    }
  ],
  "6": [
    {
      "first_code": 0,
      "length": 64,
      "brs": 0
    },
    {
      "first_code": 64,
      "length": 64,
      "brs": 13
    },
    {
      "first_code": 128,
      "length": 64,
      "brs": 14
    },
    {
      "first_code": 192,
      "length": 34,
      "brs": 35
    },
    {
      "first_code": 226,
      "length": 34,
      "brs": 38
    },
    {
      "first_code": 260,
      "length": 47,
      "brs": 27
    },
    {
      "first_code": 307,
      "length": 47,
      "brs": 20
    },
    {
      "first_code": 354,
      "length": 64,
      "brs": 2
    },
    {
      "first_code": 418,
      "length": 64,
      "brs": 3
    },
    {
      "first_code": 482,
      "length": 47,
      "brs": 24
    },
    {
      "first_code": 529,
      "length": 34,
      "brs": 35
    },
    {
      "first_code": 563,
      "length": 4,
      "brs": 76
    },
    {
      "first_code": 567,
      "length": 4,
      "brs": 77
    },
    {
      "first_code": 571,
      "length": 34,
      "brs": 38
    },
    {
      "first_code": 605,
      "length": 47,
      "brs": 29
    },
    {
      "first_code": 652,
      "length": 34,
      "brs": 30
    },
    {
      "first_code": 686,
      "length": 47,
      "brs": 21
    },
    {
      "first_code": 733,
      "length": 22,
      "brs": 42
    },
    {
      "first_code": 755,
      "length": 22,
      "brs": 43
    },
    {
      "first_code": 777,
      "length": 10,
      "brs": 64
    },
    {
      "first_code": 787,
      "length": 22,
      "brs": 45
    },
    {
      "first_code": 809,
      "length": 64,
      "brs": 16
    },
    {
      "first_code": 873,
      "length": 34,
      "brs": 37
    },
    {
      "first_code": 907,
      "length": 47,
      "brs": 20
    },
    {
      "first_code": 954,
      "length": 47,
      "brs": 21
    },
    {
      "first_code": 1001,
      "length": 34,
      "brs": 32
    },
    {
      "first_code": 1035,
      "length": 16,
      "brs": 53
    },
    {
      "first_code": 1051,
      "length": 34,
      "brs": 34
    },
    {
      "first_code": 1085,
      "length": 34,
      "brs": 35
    },
    {
      "first_code": 1119,
      "length": 34,
      "brs": 36
    },
    {
      "first_code": 1153,
      "length": 34,
      "brs": 37
    },
    {
      "first_code": 1187,
      "length": 34,
      "brs": 38
    },
    {
      "first_code": 1221,
      "length": 22,
      "brs": 49
    },
    {
      "first_code": 1243,
      "length": 22,
      "brs": 40
    },
    {
      "first_code": 1265,
      "length": 16,
      "brs": 51
    },
    {
      "first_code": 1281,
      "length": 16,
      "brs": 52
    },
    {
      "first_code": 1297,
      "length": 16,
      "brs": 53
    },
    {
      "first_code": 1313,
      "length": 22,
      "brs": 44
    },
    {
      "first_code": 1335,
      "length": 22,
      "brs": 45
    },
    {
      "first_code": 1357,
      "length": 22,
      "brs": 46
    },
    {
      "first_code": 1379,
      "length": 47,
      "brs": 27
    },
    {
      "first_code": 1426,
      "length": 47,
      "brs": 28
    },
    {
      "first_code": 1473,
      "length": 47,
      "brs": 29
    },
    {
      "first_code": 1520,
      "length": 47,
      "brs": 20
    },
    {
      "first_code": 1567,
      "length": 47,
      "brs": 21
    },
    {
      "first_code": 1614,
      "length": 47,
      "brs": 22
    },
    {
      "first_code": 1661,
      "length": 47,
      "brs": 23
    },
    {
      "first_code": 1708,
      "length": 47,
      "brs": 24
    },
    {
      "first_code": 1755,
      "length": 64,
      "brs": 5
    },
    {
      "first_code": 1819,
      "length": 64,
      "brs": 6
    },
    {
      "first_code": 1883,
      "length": 64,
      "brs": 7
    },
    {
      "first_code": 1947,
      "length": 47,
      "brs": 28
    },
    {
      "first_code": 1994,
      "length": 47,
      "brs": 29
    },
    {
      "first_code": 2041,
      "length": 34,
      "brs": 30
    },
    {
      "first_code": 2075,
      "length": 2,
      "brs": 81
    },
    {
      "first_code": 2077,
      "length": 34,
      "brs": 32
    },
    {
      "first_code": 2111,
      "length": 4,
      "brs": 77
    },
    {
      "first_code": 2115,
      "length": 64,
      "brs": 19
    },
    {
      "first_code": 10000,
      "length": 22,
      "brs": 46
    },
    {
      "first_code": 10022,
      "length": 34,
      "brs": 38
    },
    {
      "first_code": 10056,
      "length": 10,
      "brs": 69
    },
    {
      "first_code": 10066,
      "length": 64,
      "brs": 1
    },
    {
      "first_code": 10130,
      "length": 1,
      "brs": 98
    },
    {
      "first_code": 20000,
      "length": 1,
      "brs": 99
    }
  ],
  "7": [
    {
      "first_code": 0,
      "length": 64,
      "brs": 0
    },
    {
      "first_code": 64,
      "length": 47,
      "brs": 27
    },
    {
      "first_code": 111,
      "length": 47,
      "brs": 28
    },
    {
      "first_code": 158,
      "length": 47,
      "brs": 29
    },
    {
      "first_code": 205,
      "length": 16,
      "brs": 50
    },
    {
      "first_code": 221,
      "length": 22,
      "brs": 41
    },
    {
      "first_code": 243,
      "length": 64,
      "brs": 2
    },
    {
      "first_code": 307,
      "length": 64,
      "brs": 3
    },
    {
      "first_code": 371,
      "length": 47,
      "brs": 25
    },
    {
      "first_code": 418,
      "length": 22,
      "brs": 46
    },
    {
      "first_code": 440,
      "length": 34,
      "brs": 37
    },
    {
      "first_code": 474,
      "length": 64,
      "brs": 15
    },
    {
      "first_code": 538,
      "length": 64,
      "brs": 16
    },
    {
      "first_code": 602,
      "length": 64,
      "brs": 17
    },
    {
      "first_code": 666,
      "length": 34,
      "brs": 32
    },
    {
      "first_code": 700,
      "length": 47,
      "brs": 24
    },
    {
      "first_code": 747,
      "length": 64,
      "brs": 5
    },
    {
      "first_code": 811,
      "length": 64,
      "brs": 6
    },
    {
      "first_code": 875,
      "length": 64,
      "brs": 7
    },
    {
      "first_code": 939,
      "length": 64,
      "brs": 8
    },
    {
      "first_code": 1003,
      "length": 47,
      "brs": 22
    },
    {
      "first_code": 1050,
      "length": 16,
      "brs": 55
    },
    {
      "first_code": 1066,
      "length": 64,
      "brs": 2
    },
    {
      "first_code": 1130,
      "length": 47,
      "brs": 23
    },
    {
      "first_code": 1177,
      "length": 22,
      "brs": 44
    },
    {
      "first_code": 1199,
      "length": 34,
      "brs": 37
    },
    {
      "first_code": 1233,
      "length": 64,
      "brs": 12
    },
    {
      "first_code": 1297,
      "length": 64,
      "brs": 13
    },
    {
      "first_code": 1361,
      "length": 47,
      "brs": 24
    },
    {
      "first_code": 1408,
      "length": 64,
      "brs": 15
    },
    {
      "first_code": 1472,
      "length": 47,
      "brs": 26
    },
    {
      "first_code": 1519,
      "length": 10,
      "brs": 67
    },
    {
      "first_code": 1529,
      "length": 22,
      "brs": 48
    },
    {
      "first_code": 1551,
      "length": 47,
      "brs": 29
    },
    {
      "first_code": 1598,
      "length": 47,
      "brs": 25
    },
    {
      "first_code": 1645,
      "length": 34,
      "brs": 36
    },
    {
      "first_code": 1679,
      "length": 22,
      "brs": 40
    },
    {
      "first_code": 1701,
      "length": 22,
      "brs": 41
    },
    {
      "first_code": 1723,
      "length": 47,
      "brs": 23
    },
    {
      "first_code": 1770,
      "length": 47,
      "brs": 24
    },
    {
      "first_code": 1817,
      "length": 64,
      "brs": 15
    },
    {
      "first_code": 1881,
      "length": 64,
      "brs": 16
    },
    {
      "first_code": 1945,
      "length": 64,
      "brs": 17
    },
    {
      "first_code": 2009,
      "length": 64,
      "brs": 18
    },
    {
      "first_code": 2073,
      "length": 64,
      "brs": 19
    },
    {
      "first_code": 2137,
      "length": 47,
      "brs": 24
    },
    {
      "first_code": 2184,
      "length": 22,
      "brs": 45
    },
    {
      "first_code": 2206,
      "length": 34,
      "brs": 36
    },
    {
      "first_code": 2240,
      "length": 47,
      "brs": 27
    },
    {
      "first_code": 2287,
      "length": 47,
      "brs": 28
    },
    {
      "first_code": 2334,
      "length": 47,
      "brs": 29
    },
    {
      "first_code": 2381,
      "length": 47,
      "brs": 20
    },
    {
      "first_code": 2428,
      "length": 47,
      "brs": 21
    },
    {
      "first_code": 2475,
      "length": 47,
      "brs": 22
    },
    {
      "first_code": 2522,
      "length": 47,
      "brs": 23
    },
    {
      "first_code": 2569,
      "length": 4,
      "brs": 74
    },
    {
      "first_code": 2573,
      "length": 47,
      "brs": 25
    },
    {
      "first_code": 2620,
      "length": 22,
      "brs": 46
    },
    {
      "first_code": 2642,
      "length": 10,
      "brs": 67
    },
    {
      "first_code": 2652,
      "length": 47,
      "brs": 28
    },
    {
      "first_code": 2699,
      "length": 34,
      "brs": 39
    },
    {
      "first_code": 2733,
      "length": 47,
      "brs": 20
    },
    {
      "first_code": 2780,
      "length": 4,
      "brs": 71
    },
    {
      "first_code": 2784,
      "length": 34,
      "brs": 36
    },
    {
      "first_code": 2818,
      "length": 10,
      "brs": 67
    },
    {
      "first_code": 2828,
      "length": 47,
      "brs": 28
    },
    {
      "first_code": 2875,
      "length": 47,
      "brs": 29
    },
    {
      "first_code": 2922,
      "length": 47,
      "brs": 20
    },
    {
      "first_code": 2969,
      "length": 34,
      "brs": 31
    },
    {
      "first_code": 3003,
      "length": 47,
      "brs": 22
    },
    {
      "first_code": 3050,
      "length": 22,
      "brs": 43
    },
    {
      "first_code": 3072,
      "length": 22,
      "brs": 44
    },
    {
      "first_code": 3094,
      "length": 22,
      "brs": 45
    },
    {
      "first_code": 3116,
      "length": 64,
      "brs": 0
    },
    {
      "first_code": 3180,
      "length": 64,
      "brs": 1
    },
    {
      "first_code": 3244,
      "length": 64,
      "brs": 2
    },
    {
      "first_code": 3308,
      "length": 64,
      "brs": 3
    },
    {
      "first_code": 3372,
      "length": 64,
      "brs": 4
    },
    {
      "first_code": 3436,
      "length": 64,
      "brs": 5
    },
    {
      "first_code": 3500,
      "length": 47,
      "brs": 22
    },
    {
      "first_code": 3547,
      "length": 47,
      "brs": 23
    },
    {
      "first_code": 3594,
      "length": 47,
      "brs": 24
    },
    {
      "first_code": 3641,
      "length": 47,
      "brs": 25
    },
    {
      "first_code": 3688,
      "length": 34,
      "brs": 36
    },
    {
      "first_code": 3722,
      "length": 34,
      "brs": 37
    },
    {
      "first_code": 3756,
      "length": 4,
      "brs": 78
    },
    {
      "first_code": 3760,
      "length": 64,
      "brs": 19
    },
    {
      "first_code": 3824,
      "length": 64,
      "brs": 0
    },
    {
      "first_code": 3888,
      "length": 64,
      "brs": 1
    },
    {
      "first_code": 3952,
      "length": 34,
      "brs": 32
    },
    {
      "first_code": 3986,
      "length": 22,
      "brs": 43
    },
    {
      "first_code": 4008,
      "length": 16,
      "brs": 54
    },
    {
      "first_code": 4024,
      "length": 4,
      "brs": 75
    },
    {
      "first_code": 4028,
      "length": 10,
      "brs": 66
    },
    {
      "first_code": 4038,
      "length": 47,
      "brs": 27
    },
    {
      "first_code": 4085,
      "length": 64,
      "brs": 8
    },
    {
      "first_code": 4149,
      "length": 16,
      "brs": 59
    },
    {
      "first_code": 4165,
      "length": 34,
      "brs": 32
    },
    {
      "first_code": 4199,
      "length": 34,
      "brs": 33
    },
    {
      "first_code": 4233,
      "length": 34,
      "brs": 34
    },
    {
      "first_code": 4267,
      "length": 64,
      "brs": 19
    },
    {
      "first_code": 4331,
      "length": 64,
      "brs": 0
    },
    {
      "first_code": 4395,
      "length": 64,
      "brs": 1
    },
    {
      "first_code": 4459,
      "length": 34,
      "brs": 32
    },
    {
      "first_code": 4493,
      "length": 47,
      "brs": 23
    },
    {
      "first_code": 4540,
      "length": 22,
      "brs": 44
    },
    {
      "first_code": 4562,
      "length": 47,
      "brs": 25
    },
    {
      "first_code": 4609,
      "length": 47,
      "brs": 26
    },
    {
      "first_code": 4656,
      "length": 47,
      "brs": 27
    },
    {
      "first_code": 4703,
      "length": 47,
      "brs": 28
    },
    {
      "first_code": 4750,
      "length": 64,
      "brs": 9
    },
    {
      "first_code": 4814,
      "length": 64,
      "brs": 10
    },
    {
      "first_code": 4878,
      "length": 64,
      "brs": 11
    },
    {
      "first_code": 4942,
      "length": 64,
      "brs": 12
    },
    {
      "first_code": 5006,
      "length": 22,
      "brs": 43
    },
    {
      "first_code": 5028,
      "length": 34,
      "brs": 34
    },
    {
      "first_code": 5062,
      "length": 22,
      "brs": 45
    },
    {
      "first_code": 5084,
      "length": 16,
      "brs": 56
    },
    {
      "first_code": 5100,
      "length": 22,
      "brs": 47
    },
    {
      "first_code": 5122,
      "length": 22,
      "brs": 48
    },
    {
      "first_code": 5144,
      "length": 22,
      "brs": 49
    },
    {
      "first_code": 5166,
      "length": 22,
      "brs": 40
    },
    {
      "first_code": 5188,
      "length": 64,
      "brs": 4
    },
    {
      "first_code": 5252,
      "length": 64,
      "brs": 5
    },
    {
      "first_code": 5316,
      "length": 47,
      "brs": 26
    },
    {
      "first_code": 5363,
      "length": 16,
      "brs": 57
    },
    {
      "first_code": 5379,
      "length": 10,
      "brs": 68
    },
    {
      "first_code": 5389,
      "length": 10,
      "brs": 69
    },
    {
      "first_code": 5399,
      "length": 10,
      "brs": 60
    },
    {
      "first_code": 5409,
      "length": 34,
      "brs": 31
    },
    {
      "first_code": 5443,
      "length": 22,
      "brs": 42
    },
    {
      "first_code": 5465,
      "length": 22,
      "brs": 43
    },
    {
      "first_code": 5487,
      "length": 10,
      "brs": 64
    },
    {
      "first_code": 5497,
      "length": 16,
      "brs": 55
    },
    {
      "first_code": 5513,
      "length": 22,
      "brs": 46
    },
    {
      "first_code": 5535,
      "length": 22,
      "brs": 47
    },
    {
      "first_code": 5557,
      "length": 22,
      "brs": 48
    },
    {
      "first_code": 5579,
      "length": 22,
      "brs": 49
    },
    {
      "first_code": 5601,
      "length": 47,
      "brs": 22
    },
    {
      "first_code": 5648,
      "length": 47,
      "brs": 23
    },
    {
      "first_code": 5695,
      "length": 47,
      "brs": 24
    },
    {
      "first_code": 5742,
      "length": 47,
      "brs": 25
    },
    {
      "first_code": 5789,
      "length": 47,
      "brs": 26
    },
    {
      "first_code": 5836,
      "length": 47,
      "brs": 21
    },
    {
      "first_code": 5883,
      "length": 16,
      "brs": 52
    },
    {
      "first_code": 5899,
      "length": 22,
      "brs": 43
    },
    {
      "first_code": 5921,
      "length": 22,
      "brs": 44
    },
    {
      "first_code": 5943,
      "length": 34,
      "brs": 35
    },
    {
      "first_code": 5977,
      "length": 22,
      "brs": 46
    },
    {
      "first_code": 5999,
      "length": 22,
      "brs": 48
    },
    {
      "first_code": 6021,
      "length": 22,
      "brs": 49
    },
    {
      "first_code": 6043,
      "length": 16,
      "brs": 50
    },
    {
      "first_code": 6059,
      "length": 34,
      "brs": 33
    },
    {
      "first_code": 6093,
      "length": 16,
      "brs": 51
    },
    {
      "first_code": 6109,
      "length": 2,
      "brs": 84
    },
    {
      "first_code": 6111,
      "length": 22,
      "brs": 48
    },
    {
      "first_code": 6133,
      "length": 22,
      "brs": 42
    },
    {
      "first_code": 6155,
      "length": 2,
      "brs": 80
    },
    {
      "first_code": 6157,
      "length": 47,
      "brs": 23
    },
    {
      "first_code": 6204,
      "length": 64,
      "brs": 4
    },
    {
      "first_code": 6268,
      "length": 22,
      "brs": 45
    },
    {
      "first_code": 6290,
      "length": 10,
      "brs": 66
    },
    {
      "first_code": 6300,
      "length": 47,
      "brs": 27
    },
    {
      "first_code": 6347,
      "length": 47,
      "brs": 28
    },
    {
      "first_code": 6394,
      "length": 47,
      "brs": 29
    },
    {
      "first_code": 6441,
      "length": 34,
      "brs": 30
    },
    {
      "first_code": 10000,
      "length": 64,
      "brs": 16
    },
    {
      "first_code": 10064,
      "length": 47,
      "brs": 24
    },
    {
      "first_code": 10111,
      "length": 1,
      "brs": 98
    },
    {
      "first_code": 10112,
      "length": 4,
      "brs": 70
    },
    {
      "first_code": 10116,
      "length": 10,
      "brs": 69
    },
    {
      "first_code": 10126,
      "length": 34,
      "brs": 31
    },
    {
      "first_code": 10160,
      "length": 47,
      "brs": 23
    },
    {
      "first_code": 10207,
      "length": 22,
      "brs": 46
    },
    {
      "first_code": 10229,
      "length": 34,
      "brs": 37
    },
    {
      "first_code": 10263,
      "length": 47,
      "brs": 28
    },
    {
      "first_code": 10310,
      "length": 16,
      "brs": 59
    },
    {
      "first_code": 10326,
      "length": 47,
      "brs": 20
    },
    {
      "first_code": 10373,
      "length": 47,
      "brs": 21
    },
    {
      "first_code": 10420,
      "length": 2,
      "brs": 85
    },
    {
      "first_code": 10422,
      "length": 64,
      "brs": 9
    },
    {
      "first_code": 10486,
      "length": 2,
      "brs": 83
    },
    {
      "first_code": 10488,
      "length": 2,
      "brs": 84
    },
    {
      "first_code": 10490,
      "length": 10,
      "brs": 68
    },
    {
      "first_code": 10500,
      "length": 64,
      "brs": 6
    },
    {
      "first_code": 10564,
      "length": 34,
      "brs": 37
    },
    {
      "first_code": 10598,
      "length": 64,
      "brs": 8
    },
    {
      "first_code": 10662,
      "length": 64,
      "brs": 9
    },
    {
      "first_code": 10726,
      "length": 64,
      "brs": 10
    },
    {
      "first_code": 10790,
      "length": 64,
      "brs": 11
    },
    {
      "first_code": 10854,
      "length": 64,
      "brs": 10
    },
    {
      "first_code": 10918,
      "length": 34,
      "brs": 31
    },
    {
      "first_code": 10952,
      "length": 47,
      "brs": 21
    },
    {
      "first_code": 10999,
      "length": 47,
      "brs": 22
    },
    {
      "first_code": 11046,
      "length": 4,
      "brs": 71
    },
    {
      "first_code": 11050,
      "length": 1,
      "brs": 97
    },
    {
      "first_code": 11051,
      "length": 1,
      "brs": 98
    },
    {
      "first_code": 11052,
      "length": 2,
      "brs": 89
    },
    {
      "first_code": 11054,
      "length": 2,
      "brs": 80
    },
    {
      "first_code": 11056,
      "length": 47,
      "brs": 23
    },
    {
      "first_code": 11103,
      "length": 10,
      "brs": 60
    },
    {
      "first_code": 11113,
      "length": 1,
      "brs": 96
    },
    {
      "first_code": 11114,
      "length": 10,
      "brs": 61
    },
    {
      "first_code": 11124,
      "length": 4,
      "brs": 77
    },
    {
      "first_code": 11128,
      "length": 4,
      "brs": 79
    },
    {
      "first_code": 11132,
      "length": 2,
      "brs": 85
    },
    {
      "first_code": 11134,
      "length": 1,
      "brs": 96
    },
    {
      "first_code": 11135,
      "length": 4,
      "brs": 77
    },
    {
      "first_code": 11139,
      "length": 2,
      "brs": 88
    },
    {
      "first_code": 11141,
      "length": 34,
      "brs": 33
    },
    {
      "first_code": 11175,
      "length": 1,
      "brs": 91
    },
    {
      "first_code": 11176,
      "length": 10,
      "brs": 62
    },
    {
      "first_code": 20000,
      "length": 34,
      "brs": 34
    },
    {
      "first_code": 20034,
      "length": 4,
      "brs": 71
    },
    {
      "first_code": 20038,
      "length": 2,
      "brs": 82
    },
    {
      "first_code": 20040,
      "length": 1,
      "brs": 99
    },
    {
      "first_code": 20041,
      "length": 64,
      "brs": 0
    },
    {
      "first_code": 20105,
      "length": 64,
      "brs": 1
    },
    {
      "first_code": 20169,
      "length": 64,
      "brs": 2
    },
    {
      "first_code": 20233,
      "length": 34,
      "brs": 30
    },
    {
      "first_code": 20267,
      "length": 64,
      "brs": 2
    },
    {
      "first_code": 20331,
      "length": 64,
      "brs": 3
    },
    {
      "first_code": 20395,
      "length": 64,
      "brs": 4
    },
    {
      "first_code": 20459,
      "length": 64,
      "brs": 5
    },
    {
      "first_code": 20523,
      "length": 22,
      "brs": 46
    },
    {
      "first_code": 20545,
      "length": 34,
      "brs": 37
    },
    {
      "first_code": 20579,
      "length": 4,
      "brs": 78
    },
    {
      "first_code": 20583,
      "length": 10,
      "brs": 69
    },
    {
      "first_code": 20593,
      "length": 4,
      "brs": 70
    },
    {
      "first_code": 20597,
      "length": 10,
      "brs": 60
    },
    {
      "first_code": 20607,
      "length": 34,
      "brs": 31
    },
    {
      "first_code": 20641,
      "length": 34,
      "brs": 32
    },
    {
      "first_code": 20675,
      "length": 22,
      "brs": 43
    }
  ],
  "8": [
    {
      "first_code": 0,
      "length": 64,
      "brs": 0
    },
    {
      "first_code": 64,
      "length": 16,
      "brs": 52
    },
    {
      "first_code": 80,
      "length": 64,
      "brs": 3
    },
    {
      "first_code": 144,
      "length": 22,
      "brs": 44
    },
    {
      "first_code": 166,
      "length": 16,
      "brs": 55
    },
    {
      "first_code": 182,
      "length": 22,
      "brs": 46
    },
    {
      "first_code": 204,
      "length": 34,
      "brs": 37
    },
    {
      "first_code": 238,
      "length": 47,
      "brs": 28
    },
    {
      "first_code": 285,
      "length": 47,
      "brs": 29
    },
    {
      "first_code": 332,
      "length": 64,
      "brs": 10
    },
    {
      "first_code": 396,
      "length": 64,
      "brs": 11
    },
    {
      "first_code": 460,
      "length": 16,
      "brs": 52
    },
    {
      "first_code": 476,
      "length": 22,
      "brs": 43
    },
    {
      "first_code": 498,
      "length": 64,
      "brs": 14
    },
    {
      "first_code": 562,
      "length": 64,
      "brs": 15
    },
    {
      "first_code": 626,
      "length": 22,
      "brs": 46
    },
    {
      "first_code": 648,
      "length": 64,
      "brs": 17
    },
    {
      "first_code": 712,
      "length": 64,
      "brs": 18
    },
    {
      "first_code": 776,
      "length": 64,
      "brs": 19
    },
    {
      "first_code": 840,
      "length": 64,
      "brs": 0
    },
    {
      "first_code": 904,
      "length": 64,
      "brs": 1
    },
    {
      "first_code": 968,
      "length": 64,
      "brs": 2
    },
    {
      "first_code": 1032,
      "length": 64,
      "brs": 3
    },
    {
      "first_code": 1096,
      "length": 34,
      "brs": 34
    },
    {
      "first_code": 1130,
      "length": 47,
      "brs": 25
    },
    {
      "first_code": 1177,
      "length": 64,
      "brs": 6
    },
    {
      "first_code": 1241,
      "length": 47,
      "brs": 27
    },
    {
      "first_code": 1288,
      "length": 47,
      "brs": 28
    },
    {
      "first_code": 1335,
      "length": 64,
      "brs": 9
    },
    {
      "first_code": 1399,
      "length": 47,
      "brs": 20
    },
    {
      "first_code": 1446,
      "length": 64,
      "brs": 11
    },
    {
      "first_code": 1510,
      "length": 16,
      "brs": 52
    },
    {
      "first_code": 1526,
      "length": 4,
      "brs": 73
    },
    {
      "first_code": 1530,
      "length": 4,
      "brs": 74
    },
    {
      "first_code": 1534,
      "length": 47,
      "brs": 25
    },
    {
      "first_code": 1581,
      "length": 47,
      "brs": 26
    },
    {
      "first_code": 1628,
      "length": 16,
      "brs": 57
    },
    {
      "first_code": 1644,
      "length": 16,
      "brs": 58
    },
    {
      "first_code": 1660,
      "length": 22,
      "brs": 49
    },
    {
      "first_code": 1682,
      "length": 64,
      "brs": 0
    },
    {
      "first_code": 1746,
      "length": 47,
      "brs": 21
    },
    {
      "first_code": 1793,
      "length": 22,
      "brs": 42
    },
    {
      "first_code": 1815,
      "length": 34,
      "brs": 33
    },
    {
      "first_code": 1849,
      "length": 34,
      "brs": 34
    },
    {
      "first_code": 1883,
      "length": 47,
      "brs": 25
    },
    {
      "first_code": 1930,
      "length": 64,
      "brs": 6
    },
    {
      "first_code": 1994,
      "length": 64,
      "brs": 7
    },
    {
      "first_code": 2058,
      "length": 34,
      "brs": 38
    },
    {
      "first_code": 2092,
      "length": 34,
      "brs": 39
    },
    {
      "first_code": 2126,
      "length": 64,
      "brs": 10
    },
    {
      "first_code": 2190,
      "length": 4,
      "brs": 71
    },
    {
      "first_code": 2194,
      "length": 64,
      "brs": 12
    },
    {
      "first_code": 2258,
      "length": 64,
      "brs": 13
    },
    {
      "first_code": 2322,
      "length": 47,
      "brs": 24
    },
    {
      "first_code": 2369,
      "length": 4,
      "brs": 75
    },
    {
      "first_code": 2373,
      "length": 22,
      "brs": 46
    },
    {
      "first_code": 2395,
      "length": 34,
      "brs": 37
    },
    {
      "first_code": 2429,
      "length": 34,
      "brs": 38
    },
    {
      "first_code": 2463,
      "length": 64,
      "brs": 0
    },
    {
      "first_code": 2527,
      "length": 64,
      "brs": 1
    },
    {
      "first_code": 2591,
      "length": 4,
      "brs": 72
    },
    {
      "first_code": 2595,
      "length": 47,
      "brs": 23
    },
    {
      "first_code": 2642,
      "length": 64,
      "brs": 4
    },
    {
      "first_code": 2706,
      "length": 47,
      "brs": 25
    },
    {
      "first_code": 2753,
      "length": 16,
      "brs": 56
    },
    {
      "first_code": 2769,
      "length": 64,
      "brs": 7
    },
    {
      "first_code": 2833,
      "length": 34,
      "brs": 38
    },
    {
      "first_code": 2867,
      "length": 22,
      "brs": 49
    },
    {
      "first_code": 2889,
      "length": 4,
      "brs": 70
    },
    {
      "first_code": 2893,
      "length": 64,
      "brs": 11
    },
    {
      "first_code": 2957,
      "length": 10,
      "brs": 62
    },
    {
      "first_code": 2967,
      "length": 22,
      "brs": 43
    },
    {
      "first_code": 2989,
      "length": 2,
      "brs": 84
    },
    {
      "first_code": 2991,
      "length": 22,
      "brs": 45
    },
    {
      "first_code": 3013,
      "length": 1,
      "brs": 96
    },
    {
      "first_code": 3014,
      "length": 64,
      "brs": 17
    },
    {
      "first_code": 3078,
      "length": 34,
      "brs": 38
    },
    {
      "first_code": 3112,
      "length": 16,
      "brs": 59
    },
    {
      "first_code": 3128,
      "length": 2,
      "brs": 80
    },
    {
      "first_code": 3130,
      "length": 10,
      "brs": 61
    },
    {
      "first_code": 3140,
      "length": 64,
      "brs": 2
    },
    {
      "first_code": 3204,
      "length": 64,
      "brs": 3
    },
    {
      "first_code": 3268,
      "length": 34,
      "brs": 34
    },
    {
      "first_code": 3302,
      "length": 64,
      "brs": 5
    },
    {
      "first_code": 3366,
      "length": 64,
      "brs": 6
    },
    {
      "first_code": 3430,
      "length": 64,
      "brs": 7
    },
    {
      "first_code": 3494,
      "length": 47,
      "brs": 28
    },
    {
      "first_code": 3541,
      "length": 34,
      "brs": 39
    },
    {
      "first_code": 3575,
      "length": 34,
      "brs": 30
    },
    {
      "first_code": 3609,
      "length": 47,
      "brs": 21
    },
    {
      "first_code": 3656,
      "length": 34,
      "brs": 32
    },
    {
      "first_code": 3690,
      "length": 47,
      "brs": 23
    },
    {
      "first_code": 3737,
      "length": 16,
      "brs": 54
    },
    {
      "first_code": 3753,
      "length": 22,
      "brs": 45
    },
    {
      "first_code": 3775,
      "length": 4,
      "brs": 76
    },
    {
      "first_code": 3779,
      "length": 10,
      "brs": 67
    },
    {
      "first_code": 3789,
      "length": 22,
      "brs": 48
    },
    {
      "first_code": 3811,
      "length": 16,
      "brs": 59
    },
    {
      "first_code": 3827,
      "length": 34,
      "brs": 30
    },
    {
      "first_code": 3861,
      "length": 34,
      "brs": 31
    },
    {
      "first_code": 3895,
      "length": 64,
      "brs": 2
    },
    {
      "first_code": 3959,
      "length": 47,
      "brs": 23
    },
    {
      "first_code": 4006,
      "length": 4,
      "brs": 74
    },
    {
      "first_code": 4010,
      "length": 47,
      "brs": 25
    },
    {
      "first_code": 4057,
      "length": 47,
      "brs": 26
    },
    {
      "first_code": 4104,
      "length": 47,
      "brs": 27
    },
    {
      "first_code": 4151,
      "length": 2,
      "brs": 88
    },
    {
      "first_code": 4153,
      "length": 16,
      "brs": 59
    },
    {
      "first_code": 4169,
      "length": 1,
      "brs": 90
    },
    {
      "first_code": 4170,
      "length": 1,
      "brs": 91
    },
    {
      "first_code": 4171,
      "length": 2,
      "brs": 83
    },
    {
      "first_code": 4173,
      "length": 2,
      "brs": 84
    },
    {
      "first_code": 4175,
      "length": 47,
      "brs": 25
    },
    {
      "first_code": 4222,
      "length": 34,
      "brs": 36
    },
    {
      "first_code": 4256,
      "length": 10,
      "brs": 67
    },
    {
      "first_code": 4266,
      "length": 4,
      "brs": 78
    },
    {
      "first_code": 4270,
      "length": 64,
      "brs": 11
    },
    {
      "first_code": 4334,
      "length": 34,
      "brs": 32
    },
    {
      "first_code": 4368,
      "length": 34,
      "brs": 33
    },
    {
      "first_code": 4402,
      "length": 34,
      "brs": 34
    },
    {
      "first_code": 4436,
      "length": 22,
      "brs": 45
    },
    {
      "first_code": 4458,
      "length": 16,
      "brs": 56
    },
    {
      "first_code": 4474,
      "length": 64,
      "brs": 17
    },
    {
      "first_code": 4538,
      "length": 64,
      "brs": 18
    },
    {
      "first_code": 4602,
      "length": 10,
      "brs": 69
    },
    {
      "first_code": 4612,
      "length": 10,
      "brs": 60
    },
    {
      "first_code": 4622,
      "length": 47,
      "brs": 21
    },
    {
      "first_code": 4669,
      "length": 47,
      "brs": 22
    },
    {
      "first_code": 4716,
      "length": 47,
      "brs": 23
    },
    {
      "first_code": 20000,
      "length": 22,
      "brs": 49
    }
  ],
  "9": [
    {
      "first_code": 0,
      "length": 64,
      "brs": 0
    },
    {
      "first_code": 64,
      "length": 64,
      "brs": 0
    },
    {
      "first_code": 128,
      "length": 64,
      "brs": 0
    },
    {
      "first_code": 192,
      "length": 64,
      "brs": 0
    },
    {
      "first_code": 256,
      "length": 64,
      "brs": 0
    }
  ]
}
`),
    )
  }
  return PFP!
}
