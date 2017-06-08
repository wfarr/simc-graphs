jQuery(function ($) {
    Highcharts.chart('if-container', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'ASC Trinkets T20M'
        },
        xAxis: {
      categories: ["Kil'jaeden's Burning Wish","Whispers in the Dark","Unstable Arcano Crystal","Tarnished Sentinel Medallion","Stat Stick (Mastery)","Charm of the Rising Tide","Dreadstone of Endless Shadows","Erratic Metronome","Stat Stick (Haste)","Padawsen's Unlucky Charm","Terror From Below","Stat Stick (Versatility)","Chrono Shard","Stat Stick (Crit)","PVP Badge of Dominance","Tome of Unraveling Sanity","Stormsinger Fulmination Charge","Infernal Writ","Obelisk of the Void","Horn of Valor","PVP Insignia of Dominance","Star Gate","Portable Manacracker","Naraxas' Spiked Tongue","Deteriorated Construct Core","Twisting Wind","Bough of Corruption","Moonlit Prism","Fury of the Burning Sky","Spectral Thurible","Swarming Plaguehive","Devilsaur Shock-Baton","Oakheart's Gnarled Root","Icon of Rot","Aran's Relaxing Ruby","Pharameres Forbidden Grimoire","Mrrgria's Favor","Corrupted Starlight","Caged Horror","Wriggling Sinew","Eye of Skovald","Elementium Bomb Squirrel Generator","Unstable Horrorslime","Figurehead of the Naglfar"]
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
            data: [129659,6576,5067,7848,6202,6428,7395,5860,5114,6088,7080,6652,4399,5174,6878,7828,5788,6669,4806,5102,4686,6445,7203,4972,7012,6601,7138,3202,5099,5290,2577,2550,4056,2929,3315,1206,3112,2923,1017,2349,1392,3236,408,1376]
        }, {
            name: '930',
            color: '#db843d',
            data: [0,6838,4304,5512,6466,5976,4314,7708,5929,5113,5322,5520,8434,5181,5359,5170,3681,4756,5440,5084,68509,6775,6183,4254,5219,5904,4165,3599,2627,2385,4600,3843,3389,4258,4006,4213,2720,1852,2882,3278,3104,3235,1865,775]
        }, {
            name: '920',
            color: '#4198af',
            data: [0,4805,3234,7353,6092,5097,4781,4048,5193,4638,5770,4719,3367,5942,3183,6161,5745,5341,3842,5453,0,4029,5038,5032,6064,5148,4580,3997,3985,4581,2310,3769,3917,2219,2143,2512,2538,2084,3387,1359,2369,504,1143,887]
        }, {
            name: '910',
            color: '#71588f',
            data: [0,5663,4315,6477,5329,5861,6230,4861,4611,6798,4337,6047,4647,5820,6714,4774,4669,5295,4922,3802,3780,5317,3674,2102,3940,4780,6422,3172,2892,2817,3956,3392,3179,4053,3286,3220,2520,2960,2142,2256,1143,1773,1063,967]
        }, {
            name: '900',
            color: '#89a54e',
            data: [0,6603,3397,5111,4746,4839,4882,4513,5578,3494,4657,3586,5491,5057,4122,59891,4510,3933,3301,3454,3997,5189,4994,3651,4685,3515,2725,3947,3823,3334,1961,3500,1374,2483,1736,1174,3322,1078,1621,2125,2808,2843,634,592]
        }, {
            name: '890',
            color: '#aa4643',
            data: [0,4291,3667,73327,4020,63943,4019,4806,4186,5157,60441,4185,4128,2662,2701,0,3232,3888,3778,3072,4022,3564,3966,3763,3941,3822,4472,3007,2753,47407,4192,2211,4211,1762,1224,2803,2860,4026,890,1801,1087,1830,1993,946]
        }, {
            name: '880',
            color: '#4572a7',
            data: [0,74661,84478,0,60154,0,59242,58364,59017,57416,0,55899,55969,56049,56265,0,55455,53083,51616,51289,47917,41576,40814,48058,40002,39016,39146,45454,44817,0,43150,43148,41090,40575,41174,40039,35587,35047,37358,33909,33058,30888,30731,23551]
        }]
    });
});