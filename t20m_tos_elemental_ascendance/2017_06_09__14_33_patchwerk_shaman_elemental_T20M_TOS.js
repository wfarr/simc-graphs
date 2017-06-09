jQuery(function ($) {
    Highcharts.chart('if-container', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'ASC Trinkets T20M'
        },
        xAxis: {
      categories: ["Kil'jaeden's Burning Wish","Whispers in the Dark","Unstable Arcano Crystal","Tarnished Sentinel Medallion","Stat Stick (Mastery)","Dreadstone of Endless Shadows","Stat Stick (Crit)","Charm of the Rising Tide","Padawsen's Unlucky Charm","Erratic Metronome","Terror From Below","Stat Stick (Versatility)","Stat Stick (Haste)","PVP Badge of Dominance","Infernal Writ","Chrono Shard","Tome of Unraveling Sanity","Stormsinger Fulmination Charge","Horn of Valor","PVP Insignia of Dominance","Obelisk of the Void","Star Gate","Naraxas' Spiked Tongue","Deteriorated Construct Core","Portable Manacracker","Bough of Corruption","Twisting Wind","Spectral Thurible","Fury of the Burning Sky","Moonlit Prism","Devilsaur Shock-Baton","Oakheart's Gnarled Root","Icon of Rot","Swarming Plaguehive","Aran's Relaxing Ruby","Mrrgria's Favor","Pharameres Forbidden Grimoire","Caged Horror","Corrupted Starlight","Wriggling Sinew","Eye of Skovald","Elementium Bomb Squirrel Generator","Unstable Horrorslime","Figurehead of the Naglfar"]
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
            data: [122254,6570,4759,5642,5758,6237,7143,5107,6420,6694,6855,6683,5871,5126,6858,5575,6530,5236,5006,5814,3594,5621,4981,7111,6761,5152,5650,4802,2883,3586,2344,2728,2950,3626,3952,3210,3190,2734,2323,1368,2374,2752,127,845]
        }, {
            name: '930',
            color: '#db843d',
            data: [0,5548,3988,6990,4828,6184,5814,7095,6769,4935,76215,4800,5592,5944,4621,5132,5305,5086,5109,3733,4632,5039,3354,4540,5382,5817,4243,3814,4274,3313,3211,3643,4021,2749,2441,2863,1448,2042,2610,2272,2104,1999,2719,387]
        }, {
            name: '920',
            color: '#4198af',
            data: [0,4584,4516,6412,5333,3546,4845,4326,4186,5386,0,5713,5026,4968,5195,5415,5484,3614,4280,4018,4382,5479,3970,4936,3356,3903,4710,3948,3846,4248,4236,3090,1346,2586,3034,2180,3191,3033,1981,2598,2711,2980,1178,1423]
        }, {
            name: '910',
            color: '#71588f',
            data: [0,5626,1931,4400,5520,4595,4793,4039,4243,3584,5138,3800,3647,4044,3819,3827,4180,4289,4633,3315,3508,4417,3103,4849,4760,4674,4395,2320,2295,3147,3994,2807,4146,3519,1803,2983,2379,1632,2199,1981,2265,264,568,1262]
        }, {
            name: '900',
            color: '#89a54e',
            data: [0,3584,4042,5193,3361,5180,4059,4312,4190,4422,4847,4629,4311,5260,5002,4772,57752,3730,3542,4103,3939,4140,3635,2770,4457,3663,4005,2757,2965,2267,1198,1897,2698,2120,2649,2195,2137,1990,2320,1580,954,2169,685,452]
        }, {
            name: '890',
            color: '#aa4643',
            data: [0,5237,2710,67861,4659,3360,4110,59641,3724,3834,56855,3362,3936,3604,4116,3338,0,3800,3054,3637,2912,4329,2280,5461,4096,3904,3928,44675,2480,3185,3038,3984,2086,3225,1975,1455,2122,1409,554,1950,2006,1895,1882,512]
        }, {
            name: '880',
            color: '#4572a7',
            data: [0,70643,79570,0,57266,56118,53962,0,54916,54337,0,53212,53065,51446,50681,52064,0,50613,47709,45564,45654,39575,46246,37666,38483,36893,36909,0,42636,41065,42049,38579,38804,37807,38207,35984,34050,34890,35488,33122,32240,31707,30735,24311]
        }]
    });
});