jQuery(function ($) {
    Highcharts.chart('if-container', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Shaman Elemental T20M Patchwerk Trinkets'
        },
        xAxis: {
      categories: ["Kil'jaeden's Burning Wish","Tarnished Sentinel Medallion","Unstable Arcano Crystal","Whispers in the Dark","Stat Stick (Mastery)","Terror From Below","Dreadstone of Endless Shadows","Padawsen's Unlucky Charm","Tome of Unraveling Sanity","Stat Stick (Crit)","PVP Badge of Dominance","Stat Stick (Versatility)","Stormsinger Fulmination Charge","Stat Stick (Haste)","Charm of the Rising Tide","Erratic Metronome","Infernal Writ","Chrono Shard","Naraxas' Spiked Tongue","Horn of Valor","PVP Insignia of Dominance","Star Gate","Obelisk of the Void","Deteriorated Construct Core","Fury of the Burning Sky","Twisting Wind","Bough of Corruption","Darkmoon Deck: Hellfire","Portable Manacracker","Devilsaur Shock-Baton","Spectral Thurible","Moonlit Prism","Oakheart's Gnarled Root","Aran's Relaxing Ruby","Icon of Rot","Swarming Plaguehive","Infernal Alchemist Stone","Caged Horror","Mrrgria's Favor","Corrupted Starlight","Wriggling Sinew","Pharameres Forbidden Grimoire","Eye of Skovald","Elementium Bomb Squirrel Generator","Unstable Horrorslime","Figurehead of the Naglfar"]
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
            data: [130090,7940,5220,8202,6941,6490,6512,7156,7237,5510,7500,6092,5743,6438,6915,4641,6689,5982,6181,6022,5725,6557,5475,7638,3718,7563,6077,0,6063,3585,4086,4113,4860,4649,2772,3658,0,4005,4210,2974,3416,2575,3350,2074,2842,979]
        }, {
            name: '930',
            color: '#db843d',
            data: [0,7602,2815,4849,6160,6455,6631,5038,6840,5662,6448,5801,5592,4586,5125,7248,4787,5823,6012,3113,2536,5515,3597,6794,5056,5455,5471,0,5707,5035,4020,3372,3986,3477,3831,3372,0,2731,2579,1277,3576,1615,2649,3052,151,674]
        }, {
            name: '920',
            color: '#4198af',
            data: [0,7156,3822,7520,5753,6415,5228,5637,4891,5488,5017,5896,6846,7618,5020,6025,5165,6485,2466,6146,6656,5104,6057,4911,4224,4575,5612,0,5712,4470,3961,5547,2731,2241,3317,3768,0,1641,3289,2978,1958,3881,2331,1184,1413,1195]
        }, {
            name: '910',
            color: '#71588f',
            data: [0,5967,3912,3802,6620,4915,4654,6628,6290,6027,5452,5143,2938,3614,5288,4150,5302,3836,5104,3340,3220,5990,4283,4732,2086,5163,5072,0,3713,2703,3622,1055,1742,3543,3256,4061,0,2574,2928,3042,2150,3401,2305,2478,3144,1453]
        }, {
            name: '900',
            color: '#89a54e',
            data: [0,6289,4212,5352,3971,4817,4552,3144,63868,4206,4418,3935,5108,6009,3142,4292,4844,3121,3873,4360,3912,4491,4338,4979,4447,4453,4220,5585,4895,3185,3225,4366,5954,2407,3641,3049,5045,2525,2270,2363,1967,778,2308,1982,1255,0]
        }, {
            name: '890',
            color: '#aa4643',
            data: [0,78927,2866,4663,3126,65077,5109,4952,0,3791,3466,4798,3589,4106,60766,4445,2929,5262,1701,2877,4212,4293,1717,2919,2562,3423,3633,3465,4108,3446,49086,3449,1619,2199,2576,3248,4255,2069,1841,1047,1861,2508,2047,2479,498,505]
        }, {
            name: '880',
            color: '#4572a7',
            data: [0,0,87369,71309,63953,0,59597,57348,0,58284,55249,55734,57311,54202,0,55189,55740,53133,53258,51321,47788,41771,48252,41062,49311,39175,39177,60193,38340,46077,0,42268,42459,43721,42577,39760,51521,39561,37933,40299,35346,35167,34732,32904,33004,25635]
        }]
    });
});