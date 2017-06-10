jQuery(function ($) {
    Highcharts.chart('if-container', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'LRod Trinkets T20M Beastlord'
        },
        xAxis: {
      categories: ["Kil'jaeden's Burning Wish","Spectral Thurible","Whispers in the Dark","Tome of Unraveling Sanity","Unstable Arcano Crystal","Stat Stick (Crit)","Charm of the Rising Tide","Icon of Rot","Star Gate","Infernal Writ","Erratic Metronome","Deteriorated Construct Core","Dreadstone of Endless Shadows","Stat Stick (Haste)","Padawsen's Unlucky Charm","Chrono Shard","Stat Stick (Versatility)","PVP Badge of Dominance","Stat Stick (Mastery)","Fury of the Burning Sky","Aran's Relaxing Ruby","Horn of Valor","Stormsinger Fulmination Charge","PVP Insignia of Dominance","Bough of Corruption","Terror From Below","Twisting Wind","Eye of Skovald","Moonlit Prism","Elementium Bomb Squirrel Generator","Unstable Horrorslime","Portable Manacracker","Devilsaur Shock-Baton","Tarnished Sentinel Medallion","Obelisk of the Void","Mrrgria's Favor","Wriggling Sinew","Swarming Plaguehive","Oakheart's Gnarled Root","Corrupted Starlight","Caged Horror","Figurehead of the Naglfar","Pharameres Forbidden Grimoire","Naraxas' Spiked Tongue"]
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
            data: [263242,16623,9166,13655,4488,11778,7676,11363,15107,10242,11012,13514,11773,8916,9998,10924,11266,10548,8204,7765,8577,4746,9854,8057,11876,5654,9665,6011,7914,6503,3064,7807,4451,7025,6123,4598,2884,2985,3399,3922,3184,4084,2905,1553]
        }, {
            name: '930',
            color: '#db843d',
            data: [0,12216,11781,11064,7146,9736,12077,10238,13037,13151,11251,15282,8693,13031,9479,9157,11611,10309,11420,11943,8820,11296,8621,7734,12271,8108,9271,10585,6218,6443,2813,8319,3624,7293,8877,4523,4572,3761,5860,5266,4042,2493,1131,2306]
        }, {
            name: '920',
            color: '#4198af',
            data: [0,14667,7022,11286,8334,10037,10995,8682,12271,8094,7156,10477,11161,6307,9171,9610,6297,9504,7952,6599,9100,5993,7789,8516,7557,5353,10141,2743,6512,5762,6326,7423,6969,4881,1860,4957,3032,4135,3317,4661,4354,949,1058,2631]
        }, {
            name: '910',
            color: '#71588f',
            data: [0,9442,11486,8682,3228,9950,8360,8330,10319,7403,11343,9964,9984,9350,8830,8599,9800,6329,9675,8254,6387,8918,6412,5523,4676,8396,6558,6145,4027,4353,1197,8420,5052,6403,2376,2838,2122,2397,3871,3316,5600,1036,1612,0]
        }, {
            name: '900',
            color: '#89a54e',
            data: [0,12793,8215,138298,4871,9084,8075,8036,9465,8320,7736,10362,7047,6235,7867,7892,6107,8141,4598,5842,8056,5253,7315,6227,10108,4279,7749,6890,4532,5944,4167,7305,2499,4226,2818,5224,5146,37,3828,3502,2590,3619,3118,1657]
        }, {
            name: '890',
            color: '#aa4643',
            data: [0,135464,8486,0,6513,8007,118337,7238,9169,8491,5465,8877,6424,7237,8892,7022,7321,7302,7713,5988,6607,5787,6538,7539,7800,90936,10269,5854,6664,2467,5217,3905,4541,70879,5204,1205,413,5056,2162,2342,4289,834,0,1360]
        }, {
            name: '880',
            color: '#4572a7',
            data: [0,0,128842,0,147820,110501,0,108301,90473,103905,103924,87726,100521,102546,99167,97506,94562,86201,83027,81646,79787,84305,79640,82172,70114,0,68670,83493,78764,78601,85244,60058,73621,0,67132,67304,67566,60482,54060,52884,51108,56983,46258,30211]
        }]
    });
});