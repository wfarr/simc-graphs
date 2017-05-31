jQuery(function ($) {
    Highcharts.chart('if-container', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Ascendance Trinkets - T20H'
        },
        xAxis: {
      categories: ["Kil'jaeden's Burning Wish","Whispers in the Dark","Tarnished Sentinel Medallion","Terror From Below","Unstable Arcano Crystal","Charm of the Rising Tide","Chrono Shard","Stat Stick (Mastery)","Stat Stick (Versatility)","Dreadstone of Endless Shadows","Stat Stick (Haste)","Erratic Metronome","Stat Stick (Crit)","Padawsen's Unlucky Charm","PVP Badge of Dominance","Tome of Unraveling Sanity","Infernal Writ","Horn of Valor","Star Gate","Stormsinger Fulmination Charge","Portable Manacracker","Deteriorated Construct Core","Obelisk of the Void","PVP Insignia of Dominance","Twisting Wind","Spectral Thurible","Naraxas' Spiked Tongue","Bough of Corruption","Devilsaur Shock-Baton","Fury of the Burning Sky","Oakheart's Gnarled Root","Moonlit Prism","Swarming Plaguehive","Icon of Rot","Aran's Relaxing Ruby","Mrrgria's Favor","Pharameres Forbidden Grimoire","Unstable Horrorslime","Wriggling Sinew","Caged Horror","Corrupted Starlight","Eye of Skovald","Elementium Bomb Squirrel Generator","Figurehead of the Naglfar","Darkmoon Deck: Hellfire"]
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
            data: [107363,8860,7234,5946,2812,5325,7314,4899,5244,4980,5312,5164,5299,4170,3890,5457,5135,5006,5426,4696,5872,5117,5262,4254,5896,3453,3846,4607,3417,4357,3218,3894,2747,3987,2260,2627,2977,3197,2514,3187,2260,2290,2419,1554,0]
        }, {
            name: '930',
            color: '#db843d',
            data: [0,8444,6146,5433,3094,5019,5476,5546,5042,5242,5175,4733,4866,5423,5425,5424,4546,4431,5454,4715,4884,5210,3076,4217,4614,5208,3920,4743,3709,2782,3582,4819,3748,1981,2853,2878,2188,2072,1564,807,2289,1369,1698,526,0]
        }, {
            name: '920',
            color: '#4198af',
            data: [0,8197,5234,4515,2080,4375,4227,3480,3956,3343,4743,4707,4682,4403,3501,3700,4061,3616,5088,3673,4828,4638,3614,3451,3522,3298,3268,4620,3894,2884,3035,1942,2793,3894,2048,2611,1994,2308,2606,2121,1009,2315,1550,866,0]
        }, {
            name: '910',
            color: '#71588f',
            data: [0,4850,5104,5072,3315,4506,3540,3981,4206,4887,4123,3831,4303,3468,4808,4443,4218,3837,3859,3300,2943,3284,3588,3456,3969,2990,2345,3424,3003,2470,2809,2445,3064,2931,2147,1540,3155,1658,1799,2129,1705,1199,1895,402,0]
        }, {
            name: '900',
            color: '#89a54e',
            data: [0,7335,4746,4000,1124,3776,3453,4095,4032,3298,3066,3640,3548,4265,4051,50677,4038,2723,3967,2954,4811,3948,3288,2457,4068,2689,3850,4695,2137,2353,2972,2996,1664,1639,2190,1750,1583,1891,2225,1176,2334,2823,971,649,0]
        }, {
            name: '890',
            color: '#aa4643',
            data: [0,6144,60220,52222,2927,53041,3324,3875,3287,3094,3423,3809,2982,2781,3005,0,2862,3549,3094,2928,3763,3673,3037,3001,3141,40983,2525,2305,2641,2644,2294,2138,2536,2901,2259,2066,1936,1946,1851,2235,1087,277,1734,455,0]
        }, {
            name: '880',
            color: '#4572a7',
            data: [0,57179,0,0,61635,0,44903,45816,45779,46171,45006,44879,44956,45966,45707,0,42794,41713,36275,40681,34445,34953,38952,39732,33963,0,38832,34101,35900,35853,35381,34843,33989,32554,30631,30389,29401,28339,26990,26882,27234,26566,25115,17344,0]
        }]
    });
});