jQuery(function ($) {
    Highcharts.chart('if-container', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Lightning Rod trinket sims 7.2.5'
        },
        xAxis: {
      categories: ["Kil'jaeden's Burning Wish","Whispers in the Dark","Tarnished Sentinel Medallion","Terror From Below","Padawsen's Unlucky Charm","Unstable Arcano Crystal","Stat Stick (Mastery)","Erratic Metronome","Dreadstone of Endless Shadows","Stat Stick (Haste)","PVP Badge of Dominance","Charm of the Rising Tide","Stat Stick (Crit)","Tome of Unraveling Sanity","Stat Stick (Versatility)","Chrono Shard","Infernal Writ","Star Gate","Portable Manacracker","Obelisk of the Void","Deteriorated Construct Core","Stormsinger Fulmination Charge","Twisting Wind","Bough of Corruption","PVP Insignia of Dominance","Naraxas' Spiked Tongue","Horn of Valor","Spectral Thurible","Devilsaur Shock-Baton","Swarming Plaguehive","Fury of the Burning Sky","Oakheart's Gnarled Root","Icon of Rot","Moonlit Prism","Mrrgria's Favor","Pharameres Forbidden Grimoire","Aran's Relaxing Ruby","Wriggling Sinew","Unstable Horrorslime","Caged Horror","Eye of Skovald","Corrupted Starlight","Elementium Bomb Squirrel Generator","Figurehead of the Naglfar","Infernal Alchemist Stone"]
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
            data: [100929,7631,5491,5170,5933,3108,4929,6110,4220,5414,6367,4895,4554,5907,6434,5148,4243,6032,5620,5667,5637,4251,3578,4296,4925,3133,4008,3712,3277,2828,1316,2613,3250,5224,3003,2515,2690,2785,2893,3259,2680,1493,2144,1113,0]
        }, {
            name: '930',
            color: '#db843d',
            data: [0,6809,6897,6018,2968,2521,4837,3215,5875,4581,5630,4089,4171,3994,3949,3724,3648,3744,4150,4286,3929,1905,4284,3623,3635,4325,3917,2991,3301,4348,3106,3186,2805,1138,3063,3556,2285,2183,1206,1343,1463,1838,726,1342,0]
        }, {
            name: '920',
            color: '#4198af',
            data: [0,8074,5215,3119,5423,3003,3851,3937,3172,3438,3054,4324,5108,4350,2647,4039,4690,4745,4399,2012,3616,4326,5622,5007,3319,2747,2165,2497,3046,2085,3082,2255,2819,2110,2367,2389,1428,2189,3005,1154,2163,1249,1808,0,0]
        }, {
            name: '910',
            color: '#71588f',
            data: [0,5694,3732,5342,4419,560,4543,3761,3725,4470,2443,4288,2132,3628,4092,4291,3661,3514,4206,5251,4577,3656,2824,3718,2663,3395,3733,3593,1388,3363,2395,3134,2217,2660,3050,1791,2989,1815,2017,1945,2602,2218,1674,949,0]
        }, {
            name: '900',
            color: '#89a54e',
            data: [0,4968,5141,4154,4309,1971,2987,3460,4149,3389,4609,2806,3943,47476,2774,1911,3520,3729,3878,1889,2606,3140,3176,3526,3184,3029,2824,1964,2921,1072,2843,2338,1816,1912,1343,1896,987,972,1179,1530,726,1903,1724,2413,0]
        }, {
            name: '890',
            color: '#aa4643',
            data: [0,3834,57210,47937,2093,1906,3471,3371,2662,2225,1296,45574,3296,0,4240,3521,2538,3117,2344,3445,4337,1324,3697,3933,2534,2999,2422,36583,2203,3381,902,2425,2358,2444,1937,2062,2215,2369,1319,1486,913,1384,869,0,0]
        }, {
            name: '880',
            color: '#4572a7',
            data: [0,47197,0,0,43541,55361,43317,43693,43493,43157,42622,0,42243,0,41095,41865,39496,35527,35648,37588,33668,39536,32762,31713,35036,35652,35818,0,34617,33020,34508,32055,31526,30397,30920,30860,29511,27249,27220,26066,24984,25404,23748,15962,0]
        }]
    });
});