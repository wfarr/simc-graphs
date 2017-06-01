jQuery(function ($) {
    Highcharts.chart('if-container', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Ascendance Trinkets - T20H (w/ legendary hands + EOTN)'
        },
        xAxis: {
      categories: ["Whispers in the Dark","Kil'jaeden's Burning Wish","Tarnished Sentinel Medallion","Unstable Arcano Crystal","Charm of the Rising Tide","Chrono Shard","Stat Stick (Mastery)","Padawsen's Unlucky Charm","Erratic Metronome","Dreadstone of Endless Shadows","Stat Stick (Haste)","Terror From Below","Stat Stick (Versatility)","PVP Badge of Dominance","Stat Stick (Crit)","Tome of Unraveling Sanity","Infernal Writ","Horn of Valor","Star Gate","Stormsinger Fulmination Charge","Obelisk of the Void","PVP Insignia of Dominance","Deteriorated Construct Core","Portable Manacracker","Naraxas' Spiked Tongue","Twisting Wind","Bough of Corruption","Spectral Thurible","Moonlit Prism","Fury of the Burning Sky","Devilsaur Shock-Baton","Swarming Plaguehive","Oakheart's Gnarled Root","Icon of Rot","Aran's Relaxing Ruby","Pharameres Forbidden Grimoire","Mrrgria's Favor","Unstable Horrorslime","Caged Horror","Corrupted Starlight","Wriggling Sinew","Eye of Skovald","Elementium Bomb Squirrel Generator","Figurehead of the Naglfar","Darkmoon Deck: Hellfire"]
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
            data: [8878,123376,6765,2823,6042,5381,6663,5509,5660,6179,5951,7328,6377,6964,6977,6846,5917,4674,6579,3335,4994,4746,5928,5032,4945,6767,5020,4952,4784,4274,4001,5001,3688,3465,2500,5056,3038,2946,2362,2593,2446,2807,4021,743,0]
        }, {
            name: '930',
            color: '#db843d',
            data: [9786,0,7658,3598,5636,6753,5530,7276,5861,4897,6073,3641,5590,6541,4126,4853,4970,5417,6440,5055,4638,5450,5336,6106,3385,4781,6481,3594,3337,3800,3536,2934,3754,3376,2610,2169,2136,3449,3835,2421,3227,3457,1010,1049,0]
        }, {
            name: '920',
            color: '#4198af',
            data: [9054,0,4908,4050,6446,4884,4847,4872,4518,5692,4306,5858,4461,4021,6452,5887,5674,5073,4266,4114,3759,3766,5012,5847,3628,4691,3566,3039,3930,4460,3624,3481,2843,3278,2815,1909,3963,1747,1387,1997,2482,2061,2633,773,0]
        }, {
            name: '910',
            color: '#71588f',
            data: [7010,0,6601,1715,5188,4020,4808,4826,4927,4429,5943,4438,5631,4209,3056,4962,5464,3054,5977,4927,4420,4437,4617,3451,3858,3713,5423,4121,2780,2793,2345,3120,4030,2954,3873,2205,936,2277,140,2430,1986,326,990,1527,0]
        }, {
            name: '900',
            color: '#89a54e',
            data: [8466,0,5542,3377,3373,5470,4390,4331,5031,4482,4043,4491,3520,4331,4358,57977,2279,5141,4319,3333,3743,3395,4584,4443,3877,4867,4017,3367,4462,2766,3641,2315,3046,2474,1239,3351,3445,2675,3138,2699,1756,2770,3483,171,0]
        }, {
            name: '890',
            color: '#aa4643',
            data: [6722,0,69703,3871,64166,6109,4881,4477,3840,3492,3439,58733,4607,6038,4995,0,4464,3234,3724,3433,2533,3405,3591,3937,3293,4068,3508,45586,2172,2294,2645,3013,2106,3161,2752,1238,2308,1580,2470,0,1213,729,1061,1555,0]
        }, {
            name: '880',
            color: '#4572a7',
            data: [74311,0,0,76715,0,54816,55859,55080,55380,56041,55111,0,53485,51522,52791,0,50648,48831,40907,47812,47759,46443,39893,39235,45016,38479,38554,0,41595,42361,40832,40392,40222,37136,36713,35331,34155,33129,33249,34977,31984,31351,28278,20258,0]
        }]
    });
});