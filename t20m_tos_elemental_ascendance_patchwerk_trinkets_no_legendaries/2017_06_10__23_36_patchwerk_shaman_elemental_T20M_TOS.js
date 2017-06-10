jQuery(function ($) {
    Highcharts.chart('if-container', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Asc T20M Patchwerk Trinkets (w/out legendaries)'
        },
        xAxis: {
      categories: ["Kil'jaeden's Burning Wish","Tarnished Sentinel Medallion","Unstable Arcano Crystal","Whispers in the Dark","Terror From Below","Tome of Unraveling Sanity","Charm of the Rising Tide","Stat Stick (Mastery)","Dreadstone of Endless Shadows","Padawsen's Unlucky Charm","Stat Stick (Crit)","PVP Badge of Dominance","Stat Stick (Versatility)","Erratic Metronome","Infernal Writ","Stat Stick (Haste)","Chrono Shard","Stormsinger Fulmination Charge","Horn of Valor","Star Gate","PVP Insignia of Dominance","Naraxas' Spiked Tongue","Deteriorated Construct Core","Portable Manacracker","Obelisk of the Void","Bough of Corruption","Spectral Thurible","Twisting Wind","Devilsaur Shock-Baton","Fury of the Burning Sky","Oakheart's Gnarled Root","Icon of Rot","Moonlit Prism","Swarming Plaguehive","Mrrgria's Favor","Aran's Relaxing Ruby","Wriggling Sinew","Pharameres Forbidden Grimoire","Eye of Skovald","Caged Horror","Corrupted Starlight","Elementium Bomb Squirrel Generator","Unstable Horrorslime","Figurehead of the Naglfar"]
        },
        yAxis: {
            min: 0,
            title: {
                text: '\u0394 Damage per second'
            },
            labels: {
                enabled: true
            },
            stackLabels: {
                enabled: false,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'white'
                }
            }
        },
        legend: {
            align: 'right',
            x: 0,
            verticalAlign: 'bottom',
            y: 0,
            floating: false,
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false,
            reversed: true
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b>',
            formatter: function() {
                var s = '<b>'+ this.x +'</b>',
                cumulative_amount = 0;
                $.each(this.points.reverse(), function(i, point) {
                    cumulative_amount += point.y
                    if (point.y !== 0){
                        s += '<br/>'+ point.series.name +':	' + cumulative_amount; 
                    }
                });
                return s;
            },
            shared: true
        },
        plotOptions: {
            series: {
                borderColor: '#151515'

            },
            bar: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                }
            }
        },
                series: [{
            name: '940',
            color: '#00E676',
            data: [103195,6717,2354,3604,6009,7172,4902,4509,5083,4388,3646,5124,5151,4383,5307,4666,4229,4411,4445,5517,5094,4060,5364,4258,3897,4796,4254,4869,3392,3558,3903,2415,2373,2722,3745,3729,2502,2264,2593,2025,2746,1818,1911,1094]
        }, {
            name: '930',
            color: '#db843d',
            data: [0,6558,2288,3968,4389,4779,4643,5134,4552,4928,5041,3929,4483,4486,3734,4266,5234,3532,4497,4503,3068,3571,4141,5433,4519,5109,3831,5162,3577,4177,2439,2519,4751,3221,2193,2182,2453,1874,1579,2328,1535,1272,821,1391]
        }, {
            name: '920',
            color: '#4198af',
            data: [0,4918,2685,4854,4852,3972,4749,2832,4457,4671,4543,4298,3886,4989,4104,4679,3075,3853,3203,4579,4529,3320,4375,3425,3239,3966,3046,4064,3656,2217,2817,3969,1803,2370,2393,1789,2402,2090,2424,1432,2027,2867,1131,0]
        }, {
            name: '910',
            color: '#71588f',
            data: [0,5877,3082,3833,4454,5596,3170,5263,4024,3706,4142,4411,3874,3760,3727,3358,3498,3863,3610,4197,1411,4313,3883,3424,3183,4363,3484,2755,2082,3025,3413,2224,2236,2832,1906,2746,1451,3063,1416,1784,1347,433,1497,973]
        }, {
            name: '900',
            color: '#89a54e',
            data: [0,4813,2422,3995,3762,50404,4109,2633,3078,3718,2892,3623,3860,3544,2819,3723,2544,2830,3065,2643,3526,2238,3422,4579,2717,3267,1884,4016,2818,2526,2338,2369,2499,1993,2354,1763,1883,1012,1938,1730,1761,3067,769,133]
        }, {
            name: '890',
            color: '#aa4643',
            data: [0,59422,2897,3504,52152,0,48628,4148,3119,3634,3613,3260,3023,2290,3827,2886,3617,3075,3494,3880,2940,2046,3046,2783,2627,2912,39420,2515,1698,1821,2566,1883,2864,2815,904,1949,1442,2362,1826,2178,1759,0,1217,1412]
        }, {
            name: '880',
            color: '#4572a7',
            data: [0,0,61669,51881,0,0,0,45339,44980,43957,44956,43835,43908,42605,42323,41940,40602,40835,39880,34248,37763,38421,33144,33355,37012,31609,0,32321,36838,36086,34052,34182,32823,31429,31884,30845,28178,27392,27493,27233,27249,27731,25209,18785]
        }]
    });
});