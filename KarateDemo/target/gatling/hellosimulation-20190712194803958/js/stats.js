var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5275",
        "ok": "5275",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1815",
        "ok": "1815",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2400",
        "ok": "2400",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4",
        "ok": "4",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5006",
        "ok": "5006",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5009",
        "ok": "5009",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5015",
        "ok": "5015",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 64,
        "percentage": 64
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 36,
        "percentage": 36
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "5.556",
        "ok": "5.556",
        "ko": "-"
    }
},
contents: {
"req_get--login--5c65d": {
        type: "REQUEST",
        name: "GET /login/",
path: "GET /login/",
pathFormatted: "req_get--login--5c65d",
stats: {
    "name": "GET /login/",
    "numberOfRequests": {
        "total": "50",
        "ok": "50",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5275",
        "ok": "5275",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3627",
        "ok": "3627",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2225",
        "ok": "2225",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5006",
        "ok": "5006",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5007",
        "ok": "5007",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5010",
        "ok": "5010",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5146",
        "ok": "5146",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 14,
        "percentage": 28
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 36,
        "percentage": 72
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "2.778",
        "ok": "2.778",
        "ko": "-"
    }
}
    },"req_get--login-logo-8e77d": {
        type: "REQUEST",
        name: "GET /login/logout/",
path: "GET /login/logout/",
pathFormatted: "req_get--login-logo-8e77d",
stats: {
    "name": "GET /login/logout/",
    "numberOfRequests": {
        "total": "50",
        "ok": "50",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "18",
        "ok": "18",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4",
        "ok": "4",
        "ko": "-"
    },
    "percentiles4": {
        "total": "16",
        "ok": "16",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 50,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "2.778",
        "ok": "2.778",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
