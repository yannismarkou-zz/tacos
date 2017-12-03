/*global $*/

var cy;

$(function () { // on dom ready
    "use strict";

    cy = cytoscape({

        container: document.getElementById('cy'),

        style: [{
            "selector": "node",
            "style": {
                "width": "mapData(score, 0, 0.006769776522008331, 20, 60)",
                "height": "mapData(score, 0, 0.006769776522008331, 20, 60)",
                "content": "data(name)",
                "font-size": "12px",
                "text-valign": "center",
                "text-halign": "center",
                "background-color": "#555",
                "text-outline-color": "#555",
                "text-outline-width": "2px",
                "color": "#fff",
                "overlay-padding": "6px",
                "z-index": "10"
            }
        }, {
            "selector": "node:selected",
            "style": {
                "border-width": "6px",
                "border-color": "#AAD8FF",
                "border-opacity": "0.5",
                "background-color": "#77828C",
                "text-outline-color": "#77828C"
            }
        }, {
            "selector": "edge:selected",
            "style": {
                'width': 3,
                'line-color': "#000",
                'target-arrow-color': '#000',
                'line-style': 'dashed'
            }
        }
            ],

        elements: {
            nodes: [{
                data: {
                    id: '54924529',
                    group: 'nodes',
                    name: 'bitbar'
                },

                style: {
                    "width": '91.87499999999999',
                    "height": '91.87499999999999',
                    "font-size": '55.12499999999999',
                    "text-outline-width": '9.187499999999998'
                }
            }, {
                data: {
                    id: '25057247',
                    group: 'nodes',
                    name: 'trohil'
                },

                style: {
                    "width": '20.0',
                    "height": '20.0',
                    "font-size": '12.0',
                    "text-outline-width": '2.0'
                }
            }, {
                data: {
                    id: '231888999',
                    group: 'nodes',
                    name: 'PSLCorp'
                },

                style: {
                    "width": '91.87499999999999',
                    "height": '91.87499999999999',
                    "font-size": '55.12499999999999',
                    "text-outline-width": '9.187499999999998'
                }
            }, {
                data: {
                    id: '79302229',
                    group: 'nodes',
                    name: 'accelerance'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '1246378548',
                    group: 'nodes',
                    name: 'fernanda_306SK'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '268643201',
                    group: 'nodes',
                    name: 'nyndesigns'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '376949957',
                    group: 'nodes',
                    name: 'tylercfarmer'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '15347405',
                    group: 'nodes',
                    name: 'robincarr'
                },

                style: {
                    "width": '20.0',
                    "height": '20.0',
                    "font-size": '12.0',
                    "text-outline-width": '2.0'
                }
            }, {
                data: {
                    id: '68968106',
                    group: 'nodes',
                    name: 'SmartFile'
                },

                style: {
                    "width": '70.0',
                    "height": '70.0',
                    "font-size": '42.0',
                    "text-outline-width": '7.0'
                }
            }, {
                data: {
                    id: '277274688',
                    group: 'nodes',
                    name: 'CabForward'
                },

                style: {
                    "width": '91.87499999999999',
                    "height": '91.87499999999999',
                    "font-size": '55.12499999999999',
                    "text-outline-width": '9.187499999999998'
                }
            }, {
                data: {
                    id: '563291636',
                    group: 'nodes',
                    name: 'JonMQuigley'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '4025838869',
                    group: 'nodes',
                    name: 'eugenewhall'
                },

                style: {
                    "width": '20.0',
                    "height": '20.0',
                    "font-size": '12.0',
                    "text-outline-width": '2.0'
                }
            }, {
                data: {
                    id: '496082117',
                    group: 'nodes',
                    name: 'datarade'
                },

                style: {
                    "width": '91.87499999999999',
                    "height": '91.87499999999999',
                    "font-size": '55.12499999999999',
                    "text-outline-width": '9.187499999999998'
                }
            }, {
                data: {
                    id: '10071462',
                    group: 'nodes',
                    name: 'oliverpicton'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '20192621',
                    group: 'nodes',
                    name: 'DaveSchinkel'
                },

                style: {
                    "width": '20.0',
                    "height": '20.0',
                    "font-size": '12.0',
                    "text-outline-width": '2.0'
                }
            }, {
                data: {
                    id: '39318599',
                    group: 'nodes',
                    name: 'agileconn'
                },

                style: {
                    "width": '91.87499999999999',
                    "height": '91.87499999999999',
                    "font-size": '55.12499999999999',
                    "text-outline-width": '9.187499999999998'
                }
            }, {
                data: {
                    id: '211798017',
                    group: 'nodes',
                    name: 'Elijah_eE'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '3246196987',
                    group: 'nodes',
                    name: 'WeAreCW'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '2189163050',
                    group: 'nodes',
                    name: 'seedinfographic'
                },

                style: {
                    "width": '20.0',
                    "height": '20.0',
                    "font-size": '12.0',
                    "text-outline-width": '2.0'
                }
            }, {
                data: {
                    id: '3699802095',
                    group: 'nodes',
                    name: 'Techn0_Co'
                },

                style: {
                    "width": '91.87499999999999',
                    "height": '91.87499999999999',
                    "font-size": '55.12499999999999',
                    "text-outline-width": '9.187499999999998'
                }
            }, {
                data: {
                    id: '564570503',
                    group: 'nodes',
                    name: 'eduscrum'
                },

                style: {
                    "width": '38.75',
                    "height": '38.75',
                    "font-size": '23.25',
                    "text-outline-width": '3.875'
                }
            }, {
                data: {
                    id: '36691457',
                    group: 'nodes',
                    name: 'gdinwiddie'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '104070295',
                    group: 'nodes',
                    name: 'Seamgen'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '226534460',
                    group: 'nodes',
                    name: 'jtdeane'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '2938098293',
                    group: 'nodes',
                    name: 'bokieie'
                },

                style: {
                    "width": '20.0',
                    "height": '20.0',
                    "font-size": '12.0',
                    "text-outline-width": '2.0'
                }
            }, {
                data: {
                    id: '891948900',
                    group: 'nodes',
                    name: 'GregerWikstrand'
                },

                style: {
                    "width": '91.87499999999999',
                    "height": '91.87499999999999',
                    "font-size": '55.12499999999999',
                    "text-outline-width": '9.187499999999998'
                }
            }, {
                data: {
                    id: '2381985380',
                    group: 'nodes',
                    name: 'Jobs_0xford'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '17447457',
                    group: 'nodes',
                    name: 'sgranese'
                },

                style: {
                    "width": '20.0',
                    "height": '20.0',
                    "font-size": '12.0',
                    "text-outline-width": '2.0'
                }
            }, {
                data: {
                    id: '84331273',
                    group: 'nodes',
                    name: 'bdamato'
                },

                style: {
                    "width": '91.87499999999999',
                    "height": '91.87499999999999',
                    "font-size": '55.12499999999999',
                    "text-outline-width": '9.187499999999998'
                }
            }, {
                data: {
                    id: '226543868',
                    group: 'nodes',
                    name: 'CristinaJeron'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '18230272',
                    group: 'nodes',
                    name: 'jamasoftware'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '823905',
                    group: 'nodes',
                    name: 'wordpressdotcom'
                },

                style: {
                    "width": '54.375',
                    "height": '54.375',
                    "font-size": '32.625',
                    "text-outline-width": '5.4375'
                }
            }, {
                data: {
                    id: '630630508',
                    group: 'nodes',
                    name: 'heidisdrama'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '33300262',
                    group: 'nodes',
                    name: 'Appian'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '22663669',
                    group: 'nodes',
                    name: 'jeremyjlehman'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '13058772',
                    group: 'nodes',
                    name: 'LinkedIn'
                },

                style: {
                    "width": '54.375',
                    "height": '54.375',
                    "font-size": '32.625',
                    "text-outline-width": '5.4375'
                }
            }, {
                data: {
                    id: '626418767',
                    group: 'nodes',
                    name: 'ThinkWebsHost'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '2645657250',
                    group: 'nodes',
                    name: 'StrideDev'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '15679938',
                    group: 'nodes',
                    name: 'lyssaadkins'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '11269682',
                    group: 'nodes',
                    name: 'Centare'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '168190347',
                    group: 'nodes',
                    name: 'Salient_CRGT'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '354938758',
                    group: 'nodes',
                    name: 'Bhargavi_Bh'
                },

                style: {
                    "width": '20.0',
                    "height": '20.0',
                    "font-size": '12.0',
                    "text-outline-width": '2.0'
                }
            }, {
                data: {
                    id: '3825825087',
                    group: 'nodes',
                    name: 'cortegaperez2'
                },

                style: {
                    "width": '91.87499999999999',
                    "height": '91.87499999999999',
                    "font-size": '55.12499999999999',
                    "text-outline-width": '9.187499999999998'
                }
            }, {
                data: {
                    id: '19415951',
                    group: 'nodes',
                    name: 'howanglin'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '20884891',
                    group: 'nodes',
                    name: 'infobldrs'
                },

                style: {
                    "width": '59.375',
                    "height": '59.375',
                    "font-size": '35.625',
                    "text-outline-width": '5.9375'
                }
            }, {
                data: {
                    id: '7712452',
                    group: 'nodes',
                    name: 'forrester'
                },

                style: {
                    "width": '45.0',
                    "height": '45.0',
                    "font-size": '27.0',
                    "text-outline-width": '4.5'
                }
            }, {
                data: {
                    id: '619127545',
                    group: 'nodes',
                    name: 'FORR_Mgoetz'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '22022138',
                    group: 'nodes',
                    name: 'infomgmt'
                },

                style: {
                    "width": '91.87499999999999',
                    "height": '91.87499999999999',
                    "font-size": '55.12499999999999',
                    "text-outline-width": '9.187499999999998'
                }
            }, {
                data: {
                    id: '2863666420',
                    group: 'nodes',
                    name: 'DukeHudsonLTD'
                },

                style: {
                    "width": '20.0',
                    "height": '20.0',
                    "font-size": '12.0',
                    "text-outline-width": '2.0'
                }
            }, {
                data: {
                    id: '14878174',
                    group: 'nodes',
                    name: 'TIBCO'
                },

                style: {
                    "width": '120.0',
                    "height": '120.0',
                    "font-size": '72.0',
                    "text-outline-width": '12.0'
                }
            }, {
                data: {
                    id: '3131415670',
                    group: 'nodes',
                    name: 'marketingjobs10'
                },

                style: {
                    "width": '63.74999999999999',
                    "height": '63.74999999999999',
                    "font-size": '38.24999999999999',
                    "text-outline-width": '6.374999999999999'
                }
            }, {
                data: {
                    id: '3368849687',
                    group: 'nodes',
                    name: 'bot_innovation'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '787970016',
                    group: 'nodes',
                    name: 'lindseyashjian'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '2880072863',
                    group: 'nodes',
                    name: 'BaptisteLeSueur'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '1535921808',
                    group: 'nodes',
                    name: 'ZKalabalik'
                },

                style: {
                    "width": '20.0',
                    "height": '20.0',
                    "font-size": '12.0',
                    "text-outline-width": '2.0'
                }
            }, {
                data: {
                    id: '199077562',
                    group: 'nodes',
                    name: 'TOP_LOTFI_DK'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '3187093387',
                    group: 'nodes',
                    name: 'MindComCustCare'
                },

                style: {
                    "width": '20.0',
                    "height": '20.0',
                    "font-size": '12.0',
                    "text-outline-width": '2.0'
                }
            }, {
                data: {
                    id: '94930626',
                    group: 'nodes',
                    name: 'richardsdm'
                },

                style: {
                    "width": '96.875',
                    "height": '96.875',
                    "font-size": '58.125',
                    "text-outline-width": '9.6875'
                }
            }, {
                data: {
                    id: '2165206926',
                    group: 'nodes',
                    name: 'loiswinland11'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '1389766010',
                    group: 'nodes',
                    name: 'asullivan2010'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '3781452635',
                    group: 'nodes',
                    name: 'ethicaldevelop'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '360928426',
                    group: 'nodes',
                    name: 'HerbCutshaw'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '360608812',
                    group: 'nodes',
                    name: 'DarleneCrayton'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '3747041784',
                    group: 'nodes',
                    name: 'startup2hack'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '3252271586',
                    group: 'nodes',
                    name: 'according2study'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '17224806',
                    group: 'nodes',
                    name: 'bobbytaruc'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '3235278721',
                    group: 'nodes',
                    name: 'NeuvooITMelbo'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '13052292',
                    group: 'nodes',
                    name: 'krausfm'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '2789691555',
                    group: 'nodes',
                    name: 'infoplicity'
                },

                style: {
                    "width": '20.0',
                    "height": '20.0',
                    "font-size": '12.0',
                    "text-outline-width": '2.0'
                }
            }, {
                data: {
                    id: '303080295',
                    group: 'nodes',
                    name: 'Aciety'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '17589188',
                    group: 'nodes',
                    name: 'sharkers'
                },

                style: {
                    "width": '20.0',
                    "height": '20.0',
                    "font-size": '12.0',
                    "text-outline-width": '2.0'
                }
            }, {
                data: {
                    id: '207709641',
                    group: 'nodes',
                    name: 'PDX_ProductMgr'
                },

                style: {
                    "width": '91.87499999999999',
                    "height": '91.87499999999999',
                    "font-size": '55.12499999999999',
                    "text-outline-width": '9.187499999999998'
                }
            }, {
                data: {
                    id: '476028053',
                    group: 'nodes',
                    name: 'Inviqa'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '14552480',
                    group: 'nodes',
                    name: 'lunivore'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '333321970',
                    group: 'nodes',
                    name: 'yahyaj_tn'
                },

                style: {
                    "width": '63.74999999999999',
                    "height": '63.74999999999999',
                    "font-size": '38.24999999999999',
                    "text-outline-width": '6.374999999999999'
                }
            }, {
                data: {
                    id: '1859468413',
                    group: 'nodes',
                    name: 'BMalonson'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '1117531057',
                    group: 'nodes',
                    name: 'AgileTrends'
                },

                style: {
                    "width": '63.74999999999999',
                    "height": '63.74999999999999',
                    "font-size": '38.24999999999999',
                    "text-outline-width": '6.374999999999999'
                }
            }, {
                data: {
                    id: '1685765612',
                    group: 'nodes',
                    name: 'MillennialMsg'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '98225018',
                    group: 'nodes',
                    name: 'c_gandhi'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '1137283267',
                    group: 'nodes',
                    name: 'SusanMBernardo'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '361264060',
                    group: 'nodes',
                    name: 'RichardGMarquis'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '45350674',
                    group: 'nodes',
                    name: 'shibanid'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '30058901',
                    group: 'nodes',
                    name: 'PeterDeYoe'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '14973108',
                    group: 'nodes',
                    name: 'paul_boos'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '275413791',
                    group: 'nodes',
                    name: 'julianchete2'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '67843681',
                    group: 'nodes',
                    name: 'avarteq'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '2591479736',
                    group: 'nodes',
                    name: '_carlogagliardi'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '2413598563',
                    group: 'nodes',
                    name: 'FunBoxEntertain'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '849009469',
                    group: 'nodes',
                    name: 'DaleReedUK'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '47589350',
                    group: 'nodes',
                    name: 'AlienWardrobe'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '221169429',
                    group: 'nodes',
                    name: 'acassaigne'
                },

                style: {
                    "width": '20.0',
                    "height": '20.0',
                    "font-size": '12.0',
                    "text-outline-width": '2.0'
                }
            }, {
                data: {
                    id: '14660565',
                    group: 'nodes',
                    name: 'StickyMinds'
                },

                style: {
                    "width": '91.87499999999999',
                    "height": '91.87499999999999',
                    "font-size": '55.12499999999999',
                    "text-outline-width": '9.187499999999998'
                }
            }, {
                data: {
                    id: '18194778',
                    group: 'nodes',
                    name: 'PragmaticAndy'
                },

                style: {
                    "width": '20.0',
                    "height": '20.0',
                    "font-size": '12.0',
                    "text-outline-width": '2.0'
                }
            }, {
                data: {
                    id: '105883071',
                    group: 'nodes',
                    name: 'sawamurasachi'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '20143193',
                    group: 'nodes',
                    name: 'zenkara'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '412953210',
                    group: 'nodes',
                    name: 'WMP_CIPD'
                },

                style: {
                    "width": '20.0',
                    "height": '20.0',
                    "font-size": '12.0',
                    "text-outline-width": '2.0'
                }
            }, {
                data: {
                    id: '39959689',
                    group: 'nodes',
                    name: 'jopenton'
                },

                style: {
                    "width": '91.87499999999999',
                    "height": '91.87499999999999',
                    "font-size": '55.12499999999999',
                    "text-outline-width": '9.187499999999998'
                }
            }, {
                data: {
                    id: '161581510',
                    group: 'nodes',
                    name: 'iashanmugavel'
                },

                style: {
                    "width": '20.0',
                    "height": '20.0',
                    "font-size": '12.0',
                    "text-outline-width": '2.0'
                }
            }, {
                data: {
                    id: '719603797',
                    group: 'nodes',
                    name: 'ArrkGroup'
                },

                style: {
                    "width": '91.87499999999999',
                    "height": '91.87499999999999',
                    "font-size": '55.12499999999999',
                    "text-outline-width": '9.187499999999998'
                }
            }, {
                data: {
                    id: '446114332',
                    group: 'nodes',
                    name: 'TommekeDeLeeuw'
                },

                style: {
                    "width": '20.0',
                    "height": '20.0',
                    "font-size": '12.0',
                    "text-outline-width": '2.0'
                }
            }, {
                data: {
                    id: '174592504',
                    group: 'nodes',
                    name: 'daniellebeltug'
                },

                style: {
                    "width": '91.87499999999999',
                    "height": '91.87499999999999',
                    "font-size": '55.12499999999999',
                    "text-outline-width": '9.187499999999998'
                }
            }, {
                data: {
                    id: '581144587',
                    group: 'nodes',
                    name: 'johndhutch'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '594609627',
                    group: 'nodes',
                    name: 'JosepRamonBadia'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '29821560',
                    group: 'nodes',
                    name: 'megancater'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '9781152',
                    group: 'nodes',
                    name: 'Signiant'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '14983283',
                    group: 'nodes',
                    name: 'lindamcook1'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '3466788859',
                    group: 'nodes',
                    name: 'CONTENTsoVIRAL'
                },

                style: {
                    "width": '20.0',
                    "height": '20.0',
                    "font-size": '12.0',
                    "text-outline-width": '2.0'
                }
            }, {
                data: {
                    id: '46320287',
                    group: 'nodes',
                    name: 'foroozan'
                },

                style: {
                    "width": '63.74999999999999',
                    "height": '63.74999999999999',
                    "font-size": '38.24999999999999',
                    "text-outline-width": '6.374999999999999'
                }
            }, {
                data: {
                    id: '496279965',
                    group: 'nodes',
                    name: 'agilesoftproj'
                },

                style: {
                    "width": '85.62499999999999',
                    "height": '85.62499999999999',
                    "font-size": '51.37499999999999',
                    "text-outline-width": '8.562499999999998'
                }
            }, {
                data: {
                    id: '314105069',
                    group: 'nodes',
                    name: 'JBallanco'
                },

                style: {
                    "width": '40.625',
                    "height": '40.625',
                    "font-size": '24.375',
                    "text-outline-width": '4.0625'
                }
            }, {
                data: {
                    id: '2244470786',
                    group: 'nodes',
                    name: 'terranceaparici'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '366075376',
                    group: 'nodes',
                    name: 'larasuiter10'
                },

                style: {
                    "width": '41.875',
                    "height": '41.875',
                    "font-size": '25.125',
                    "text-outline-width": '4.1875'
                }
            }, {
                data: {
                    id: '2422614883',
                    group: 'nodes',
                    name: 'Tony_Bstonetech'
                },

                style: {
                    "width": '20.0',
                    "height": '20.0',
                    "font-size": '12.0',
                    "text-outline-width": '2.0'
                }
            }, {
                data: {
                    id: '17045494',
                    group: 'nodes',
                    name: 'BTGFederal'
                },

                style: {
                    "width": '87.5',
                    "height": '87.5',
                    "font-size": '52.5',
                    "text-outline-width": '8.75'
                }
            }, {
                data: {
                    id: '161272226',
                    group: 'nodes',
                    name: 'ExperisLiveJobs'
                },

                style: {
                    "width": '45.0',
                    "height": '45.0',
                    "font-size": '27.0',
                    "text-outline-width": '4.5'
                }
            }, {
                data: {
                    id: '2474412986',
                    group: 'nodes',
                    name: 'RAforAll'
                },

                style: {
                    "width": '63.74999999999999',
                    "height": '63.74999999999999',
                    "font-size": '38.24999999999999',
                    "text-outline-width": '6.374999999999999'
                }
            }, {
                data: {
                    id: '56378106',
                    group: 'nodes',
                    name: 'EdithsyFF'
                },

                style: {
                    "width": '20.0',
                    "height": '20.0',
                    "font-size": '12.0',
                    "text-outline-width": '2.0'
                }
            }, {
                data: {
                    id: '234845069',
                    group: 'nodes',
                    name: 'devendetroja'
                },

                style: {
                    "width": '20.0',
                    "height": '20.0',
                    "font-size": '12.0',
                    "text-outline-width": '2.0'
                }
            }, {
                data: {
                    id: '19349592',
                    group: 'nodes',
                    name: 'RMLawton'
                },

                style: {
                    "width": '20.0',
                    "height": '20.0',
                    "font-size": '12.0',
                    "text-outline-width": '2.0'
                }
            }, {
                data: {
                    id: '13714012',
                    group: 'nodes',
                    name: 'BrandonZylstra'
                },

                style: {
                    "width": '20.0',
                    "height": '20.0',
                    "font-size": '12.0',
                    "text-outline-width": '2.0'
                }
            }, {
                data: {
                    id: '466085575',
                    group: 'nodes',
                    name: 'dhalonen'
                },

                style: {
                    "width": '20.0',
                    "height": '20.0',
                    "font-size": '12.0',
                    "text-outline-width": '2.0'
                }
            }, {
                data: {
                    id: '979883462',
                    group: 'nodes',
                    name: 'AshwinBaskaran'
                },

                style: {
                    "width": '20.0',
                    "height": '20.0',
                    "font-size": '12.0',
                    "text-outline-width": '2.0'
                }
            }, {
                data: {
                    id: '226756497',
                    group: 'nodes',
                    name: 'trikitrok'
                },

                style: {
                    "width": '20.0',
                    "height": '20.0',
                    "font-size": '12.0',
                    "text-outline-width": '2.0'
                }
            }, {
                data: {
                    id: '11604242',
                    group: 'nodes',
                    name: 'trueheart78'
                },

                style: {
                    "width": '20.0',
                    "height": '20.0',
                    "font-size": '12.0',
                    "text-outline-width": '2.0'
                }
            }, {
                data: {
                    id: '3309318402',
                    group: 'nodes',
                    name: 'Deann11202'
                },

                style: {
                    "width": '20.0',
                    "height": '20.0',
                    "font-size": '12.0',
                    "text-outline-width": '2.0'
                }
            }, {
                data: {
                    id: '2797778439',
                    group: 'nodes',
                    name: 'shesmithy'
                },

                style: {
                    "width": '20.0',
                    "height": '20.0',
                    "font-size": '12.0',
                    "text-outline-width": '2.0'
                }
            }, {
                data: {
                    id: '1183612465',
                    group: 'nodes',
                    name: 'miyopisltu'
                },

                style: {
                    "width": '20.0',
                    "height": '20.0',
                    "font-size": '12.0',
                    "text-outline-width": '2.0'
                }
            }, {
                data: {
                    id: '2802664478',
                    group: 'nodes',
                    name: 'majorkk1'
                },

                style: {
                    "width": '20.0',
                    "height": '20.0',
                    "font-size": '12.0',
                    "text-outline-width": '2.0'
                }
            }, {
                data: {
                    id: '394390585',
                    group: 'nodes',
                    name: 'twitanette'
                },

                style: {
                    "width": '20.0',
                    "height": '20.0',
                    "font-size": '12.0',
                    "text-outline-width": '2.0'
                }
            }, {
                data: {
                    id: '66064895',
                    group: 'nodes',
                    name: 'erickswaine'
                },

                style: {
                    "width": '20.0',
                    "height": '20.0',
                    "font-size": '12.0',
                    "text-outline-width": '2.0'
                }
            }],
            edges: [{
                data: {
                    id: '0',
                    source: '231888999',
                    target: '79302229'
                },
                style: {
                    'width': '7.333333333333334',
                    'target-arrow-shape': 'triangle',
                    'line-color': '#4d93ff',
                    'target-arrow-color': '#4d93ff'
                }
            }, {
                data: {
                    id: '1',
                    source: '25057247',
                    target: '231888999'
                },
                style: {
                    'width': '4.166666666666667',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '2',
                    source: '1246378548',
                    target: '268643201'
                },
                style: {
                    'width': '7.333333333333334',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '3',
                    source: '376949957',
                    target: '268643201'
                },
                style: {
                    'width': '7.333333333333334',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '4',
                    source: '15347405',
                    target: '68968106'
                },
                style: {
                    'width': '4.166666666666667',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '5',
                    source: '277274688',
                    target: '15347405'
                },
                style: {
                    'width': '5.222222222222223',
                    'target-arrow-shape': 'triangle',
                    'line-color': '#4d93ff',
                    'target-arrow-color': '#4d93ff'
                }
            }, {
                data: {
                    id: '6',
                    source: '4025838869',
                    target: '496082117'
                },
                style: {
                    'width': '4.166666666666667',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '7',
                    source: '20192621',
                    target: '39318599'
                },
                style: {
                    'width': '4.166666666666667',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '8',
                    source: '2189163050',
                    target: '3699802095'
                },
                style: {
                    'width': '4.166666666666667',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '9',
                    source: '564570503',
                    target: '564570503'
                },
                style: {
                    'width': '7.333333333333334',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '10',
                    source: '564570503',
                    target: '36691457'
                },
                style: {
                    'width': '7.333333333333334',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '11',
                    source: '2938098293',
                    target: '891948900'
                },
                style: {
                    'width': '4.166666666666667',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '12',
                    source: '17447457',
                    target: '84331273'
                },
                style: {
                    'width': '4.166666666666667',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '13',
                    source: '18230272',
                    target: '823905'
                },
                style: {
                    'width': '7.333333333333334',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '14',
                    source: '630630508',
                    target: '33300262'
                },
                style: {
                    'width': '7.333333333333334',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '15',
                    source: '22663669',
                    target: '13058772'
                },
                style: {
                    'width': '7.333333333333334',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '16',
                    source: '2645657250',
                    target: '15679938'
                },
                style: {
                    'width': '7.333333333333334',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '17',
                    source: '354938758',
                    target: '3825825087'
                },
                style: {
                    'width': '4.166666666666667',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '18',
                    source: '20884891',
                    target: '7712452'
                },
                style: {
                    'width': '7.333333333333334',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '19',
                    source: '20884891',
                    target: '619127545'
                },
                style: {
                    'width': '7.333333333333334',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '20',
                    source: '22022138',
                    target: '20884891'
                },
                style: {
                    'width': '1.0',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '21',
                    source: '14878174',
                    target: '14878174'
                },
                style: {
                    'width': '20.0',
                    'target-arrow-shape': 'triangle',
                    'line-color': '#4d93ff',
                    'target-arrow-color': '#4d93ff'
                }
            }, {
                data: {
                    id: '22',
                    source: '2863666420',
                    target: '14878174'
                },
                style: {
                    'width': '4.166666666666667',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '23',
                    source: '1535921808',
                    target: '22022138'
                },
                style: {
                    'width': '4.166666666666667',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '24',
                    source: '94930626',
                    target: '7712452'
                },
                style: {
                    'width': '7.333333333333334',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '25',
                    source: '94930626',
                    target: '619127545'
                },
                style: {
                    'width': '7.333333333333334',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '26',
                    source: '22022138',
                    target: '94930626'
                },
                style: {
                    'width': '1.0',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '27',
                    source: '3187093387',
                    target: '94930626'
                },
                style: {
                    'width': '4.166666666666667',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '28',
                    source: '2165206926',
                    target: '268643201'
                },
                style: {
                    'width': '7.333333333333334',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '29',
                    source: '1389766010',
                    target: '268643201'
                },
                style: {
                    'width': '7.333333333333334',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '30',
                    source: '360928426',
                    target: '268643201'
                },
                style: {
                    'width': '7.333333333333334',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '31',
                    source: '360608812',
                    target: '268643201'
                },
                style: {
                    'width': '7.333333333333334',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '32',
                    source: '2789691555',
                    target: '14878174'
                },
                style: {
                    'width': '7.333333333333334',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '33',
                    source: '303080295',
                    target: '619127545'
                },
                style: {
                    'width': '7.333333333333334',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '34',
                    source: '207709641',
                    target: '476028053'
                },
                style: {
                    'width': '7.333333333333334',
                    'target-arrow-shape': 'triangle',
                    'line-color': '#4d93ff',
                    'target-arrow-color': '#4d93ff'
                }
            }, {
                data: {
                    id: '35',
                    source: '14552480',
                    target: '207709641'
                },
                style: {
                    'width': '1.0',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '36',
                    source: '17589188',
                    target: '207709641'
                },
                style: {
                    'width': '4.166666666666667',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '37',
                    source: '2938098293',
                    target: '207709641'
                },
                style: {
                    'width': '4.166666666666667',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '38',
                    source: '1137283267',
                    target: '268643201'
                },
                style: {
                    'width': '7.333333333333334',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '39',
                    source: '361264060',
                    target: '268643201'
                },
                style: {
                    'width': '7.333333333333334',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '40',
                    source: '14973108',
                    target: '275413791'
                },
                style: {
                    'width': '7.333333333333334',
                    'target-arrow-shape': 'triangle',
                    'line-color': '#4d93ff',
                    'target-arrow-color': '#4d93ff'
                }
            }, {
                data: {
                    id: '41',
                    source: '67843681',
                    target: '14973108'
                },
                style: {
                    'width': '1.0',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '42',
                    source: '2591479736',
                    target: '14973108'
                },
                style: {
                    'width': '1.0',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '43',
                    source: '14660565',
                    target: '18194778'
                },
                style: {
                    'width': '7.333333333333334',
                    'target-arrow-shape': 'triangle',
                    'line-color': '#4d93ff',
                    'target-arrow-color': '#4d93ff'
                }
            }, {
                data: {
                    id: '44',
                    source: '221169429',
                    target: '14660565'
                },
                style: {
                    'width': '4.166666666666667',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '45',
                    source: '412953210',
                    target: '39959689'
                },
                style: {
                    'width': '4.166666666666667',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '46',
                    source: '161581510',
                    target: '719603797'
                },
                style: {
                    'width': '4.166666666666667',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '47',
                    source: '446114332',
                    target: '174592504'
                },
                style: {
                    'width': '4.166666666666667',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '48',
                    source: '29821560',
                    target: '9781152'
                },
                style: {
                    'width': '7.333333333333334',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '49',
                    source: '3466788859',
                    target: '54924529'
                },
                style: {
                    'width': '4.166666666666667',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '50',
                    source: '314105069',
                    target: '7712452'
                },
                style: {
                    'width': '7.333333333333334',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '51',
                    source: '314105069',
                    target: '619127545'
                },
                style: {
                    'width': '7.333333333333334',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '52',
                    source: '22022138',
                    target: '314105069'
                },
                style: {
                    'width': '1.0',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '53',
                    source: '2244470786',
                    target: '268643201'
                },
                style: {
                    'width': '7.333333333333334',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '54',
                    source: '366075376',
                    target: '268643201'
                },
                style: {
                    'width': '7.333333333333334',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '55',
                    source: '17045494',
                    target: '17045494'
                },
                style: {
                    'width': '7.333333333333334',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '56',
                    source: '2422614883',
                    target: '17045494'
                },
                style: {
                    'width': '4.166666666666667',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '57',
                    source: '314105069',
                    target: '20884891'
                },
                style: {
                    'width': '5.222222222222223',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '58',
                    source: '56378106',
                    target: '3699802095'
                },
                style: {
                    'width': '4.166666666666667',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '59',
                    source: '234845069',
                    target: '719603797'
                },
                style: {
                    'width': '8.38888888888889',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '60',
                    source: '17589188',
                    target: '719603797'
                },
                style: {
                    'width': '4.166666666666667',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '61',
                    source: '2938098293',
                    target: '719603797'
                },
                style: {
                    'width': '4.166666666666667',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '62',
                    source: '19349592',
                    target: '719603797'
                },
                style: {
                    'width': '4.166666666666667',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '63',
                    source: '68968106',
                    target: '277274688'
                },
                style: {
                    'width': '4.166666666666667',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '64',
                    source: '13714012',
                    target: '14660565'
                },
                style: {
                    'width': '4.166666666666667',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '65',
                    source: '466085575',
                    target: '14660565'
                },
                style: {
                    'width': '4.166666666666667',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '66',
                    source: '979883462',
                    target: '14660565'
                },
                style: {
                    'width': '4.166666666666667',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '67',
                    source: '226756497',
                    target: '14660565'
                },
                style: {
                    'width': '4.166666666666667',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '68',
                    source: '11604242',
                    target: '14660565'
                },
                style: {
                    'width': '4.166666666666667',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '69',
                    source: '3309318402',
                    target: '891948900'
                },
                style: {
                    'width': '4.166666666666667',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '70',
                    source: '2797778439',
                    target: '54924529'
                },
                style: {
                    'width': '4.166666666666667',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '71',
                    source: '1183612465',
                    target: '54924529'
                },
                style: {
                    'width': '4.166666666666667',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '72',
                    source: '2802664478',
                    target: '54924529'
                },
                style: {
                    'width': '4.166666666666667',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '73',
                    source: '2938098293',
                    target: '496082117'
                },
                style: {
                    'width': '4.166666666666667',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '74',
                    source: '394390585',
                    target: '22022138'
                },
                style: {
                    'width': '4.166666666666667',
                    'target-arrow-shape': 'triangle'
                }
            }, {
                data: {
                    id: '75',
                    source: '66064895',
                    target: '22022138'
                },
                style: {
                    'width': '4.166666666666667',
                    'target-arrow-shape': 'triangle'
                }
            }]
        },

        layout: {
            name: 'cose',
            padding: 5
        }
    });

    // nodes qTip
    cy.$('#54924529').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.39999999999999997'
        }, {
            name: 'Authority Score:'.bold() + ' 0.7'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.1'
        }, {
            name: 'Authority Tweets:'.bold() + ' 1'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/bitbar")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#25057247').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' -0.175'
        }, {
            name: 'Authority Score:'.bold() + ' -0.35'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 1'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/trohil")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#231888999').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.39999999999999997'
        }, {
            name: 'Authority Score:'.bold() + ' 0.7'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.1'
        }, {
            name: 'Authority Tweets:'.bold() + ' 1'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 1'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/PSLCorp")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#79302229').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 1'
        }, {
            name: "View Profile".link("https://twitter.com/accelerance")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#1246378548').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 1'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/fernanda_306SK")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#268643201').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/nyndesigns")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#376949957').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 1'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/tylercfarmer")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#15347405').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' -0.175'
        }, {
            name: 'Authority Score:'.bold() + ' -0.35'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 2'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/robincarr")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#68968106').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.22499999999999998'
        }, {
            name: 'Authority Score:'.bold() + ' 0.35'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.1'
        }, {
            name: 'Authority Tweets:'.bold() + ' 1'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 1'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/SmartFile")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#277274688').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.39999999999999997'
        }, {
            name: 'Authority Score:'.bold() + ' 0.7'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.1'
        }, {
            name: 'Authority Tweets:'.bold() + ' 1'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 1'
        }, {
            name: "View Profile".link("https://twitter.com/CabForward")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#563291636').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/JonMQuigley")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#4025838869').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' -0.175'
        }, {
            name: 'Authority Score:'.bold() + ' -0.35'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 1'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/eugenewhall")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#496082117').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.39999999999999997'
        }, {
            name: 'Authority Score:'.bold() + ' 0.7'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.1'
        }, {
            name: 'Authority Tweets:'.bold() + ' 1'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/datarade")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#10071462').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/oliverpicton")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#20192621').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' -0.175'
        }, {
            name: 'Authority Score:'.bold() + ' -0.35'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 1'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/DaveSchinkel")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#39318599').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.39999999999999997'
        }, {
            name: 'Authority Score:'.bold() + ' 0.7'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.1'
        }, {
            name: 'Authority Tweets:'.bold() + ' 1'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/agileconn")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#211798017').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/Elijah_eE")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#3246196987').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/WeAreCW")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#2189163050').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' -0.175'
        }, {
            name: 'Authority Score:'.bold() + ' -0.35'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 1'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/seedinfographic")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#3699802095').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.39999999999999997'
        }, {
            name: 'Authority Score:'.bold() + ' 0.7'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.1'
        }, {
            name: 'Authority Tweets:'.bold() + ' 1'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/Techn0_Co")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#564570503').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' -0.025'
        }, {
            name: 'Authority Score:'.bold() + ' -0.05'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 1'
        }, {
            name: 'Replies:'.bold() + ' 1'
        }, {
            name: 'Conversations:'.bold() + ' 1'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/eduscrum")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#36691457').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/gdinwiddie")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#104070295').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/Seamgen")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#226534460').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/jtdeane")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#2938098293').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' -0.175'
        }, {
            name: 'Authority Score:'.bold() + ' -0.35'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 4'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/bokieie")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#891948900').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.39999999999999997'
        }, {
            name: 'Authority Score:'.bold() + ' 0.7'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.1'
        }, {
            name: 'Authority Tweets:'.bold() + ' 1'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/GregerWikstrand")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#2381985380').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/Jobs_0xford")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#17447457').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' -0.175'
        }, {
            name: 'Authority Score:'.bold() + ' -0.35'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 1'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/sgranese")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#84331273').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.39999999999999997'
        }, {
            name: 'Authority Score:'.bold() + ' 0.7'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.1'
        }, {
            name: 'Authority Tweets:'.bold() + ' 1'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/bdamato")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#226543868').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/CristinaJeron")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#18230272').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 1'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/jamasoftware")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#823905').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.1'
        }, {
            name: 'Authority Score:'.bold() + ' 0.2'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/wordpressdotcom")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#630630508').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 1'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/heidisdrama")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#33300262').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/Appian")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#22663669').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 1'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/jeremyjlehman")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#13058772').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.1'
        }, {
            name: 'Authority Score:'.bold() + ' 0.2'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/LinkedIn")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#626418767').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/ThinkWebsHost")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#2645657250').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 1'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/StrideDev")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#15679938').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/lyssaadkins")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#11269682').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/Centare")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#168190347').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/Salient_CRGT")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#354938758').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' -0.175'
        }, {
            name: 'Authority Score:'.bold() + ' -0.35'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 1'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/Bhargavi_Bh")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#3825825087').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.39999999999999997'
        }, {
            name: 'Authority Score:'.bold() + ' 0.7'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.1'
        }, {
            name: 'Authority Tweets:'.bold() + ' 1'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/cortegaperez2")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#19415951').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/howanglin")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#20884891').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.14'
        }, {
            name: 'Authority Score:'.bold() + ' 0.25'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.03'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 1'
        }, {
            name: 'Replies:'.bold() + ' 1'
        }, {
            name: 'Conversations:'.bold() + ' 1'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/infobldrs")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#7712452').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.02500000000000001'
        }, {
            name: 'Authority Score:'.bold() + ' 0.2'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' -0.15'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 3'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/forrester")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#619127545').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/FORR_Mgoetz")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#22022138').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.39999999999999997'
        }, {
            name: 'Authority Score:'.bold() + ' 0.7'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.1'
        }, {
            name: 'Authority Tweets:'.bold() + ' 1'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/infomgmt")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#2863666420').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' -0.175'
        }, {
            name: 'Authority Score:'.bold() + ' -0.35'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 1'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/DukeHudsonLTD")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#14878174').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.625'
        }, {
            name: 'Authority Score:'.bold() + ' 1.25'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 2'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 1'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/TIBCO")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#3131415670').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.175'
        }, {
            name: 'Authority Score:'.bold() + ' 0.35'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 2'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/marketingjobs10")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#3368849687').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/bot_innovation")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#787970016').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/lindseyashjian")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#2880072863').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/BaptisteLeSueur")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#1535921808').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' -0.175'
        }, {
            name: 'Authority Score:'.bold() + ' -0.35'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 1'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/ZKalabalik")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#199077562').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/TOP_LOTFI_DK")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#3187093387').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' -0.175'
        }, {
            name: 'Authority Score:'.bold() + ' -0.35'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 1'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/MindComCustCare")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#94930626').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.44'
        }, {
            name: 'Authority Score:'.bold() + ' 0.75'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.13'
        }, {
            name: 'Authority Tweets:'.bold() + ' 1'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 1'
        }, {
            name: 'Replies:'.bold() + ' 1'
        }, {
            name: 'Conversations:'.bold() + ' 1'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/richardsdm")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#2165206926').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 1'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/loiswinland11")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#1389766010').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 1'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/asullivan2010")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#3781452635').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/ethicaldevelop")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#360928426').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 1'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/HerbCutshaw")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#360608812').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 1'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/DarleneCrayton")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#3747041784').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/startup2hack")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#3252271586').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/according2study")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#17224806').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/bobbytaruc")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#3235278721').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/NeuvooITMelbo")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#13052292').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/krausfm")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#2789691555').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' -0.175'
        }, {
            name: 'Authority Score:'.bold() + ' -0.35'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 2'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/infoplicity")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#303080295').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 1'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/Aciety")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#17589188').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' -0.175'
        }, {
            name: 'Authority Score:'.bold() + ' -0.35'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 2'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/sharkers")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#207709641').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.39999999999999997'
        }, {
            name: 'Authority Score:'.bold() + ' 0.7'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.1'
        }, {
            name: 'Authority Tweets:'.bold() + ' 1'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 1'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/PDX_ProductMgr")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#476028053').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 1'
        }, {
            name: "View Profile".link("https://twitter.com/Inviqa")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#14552480').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/lunivore")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#333321970').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.175'
        }, {
            name: 'Authority Score:'.bold() + ' 0.35'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 2'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 1'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/yahyaj_tn")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#1859468413').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/BMalonson")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#1117531057').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.175'
        }, {
            name: 'Authority Score:'.bold() + ' 0.35'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 2'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/AgileTrends")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#1685765612').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/MillennialMsg")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#98225018').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/c_gandhi")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#1137283267').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 1'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/SusanMBernardo")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#361264060').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 1'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/RichardGMarquis")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#45350674').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 1'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/shibanid")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#30058901').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/PeterDeYoe")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#14973108').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 1'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/paul_boos")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#275413791').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 1'
        }, {
            name: "View Profile".link("https://twitter.com/julianchete2")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#67843681').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/avarteq")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#2591479736').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/_carlogagliardi")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#2413598563').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/FunBoxEntertain")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#849009469').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/DaleReedUK")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#47589350').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/AlienWardrobe")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#221169429').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' -0.175'
        }, {
            name: 'Authority Score:'.bold() + ' -0.35'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 1'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/acassaigne")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#14660565').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.39999999999999997'
        }, {
            name: 'Authority Score:'.bold() + ' 0.7'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.1'
        }, {
            name: 'Authority Tweets:'.bold() + ' 1'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 1'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/StickyMinds")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#18194778').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' -0.175'
        }, {
            name: 'Authority Score:'.bold() + ' -0.35'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 1'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/PragmaticAndy")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#105883071').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/sawamurasachi")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#20143193').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/zenkara")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#412953210').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' -0.175'
        }, {
            name: 'Authority Score:'.bold() + ' -0.35'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 1'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/WMP_CIPD")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#39959689').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.39999999999999997'
        }, {
            name: 'Authority Score:'.bold() + ' 0.7'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.1'
        }, {
            name: 'Authority Tweets:'.bold() + ' 1'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/jopenton")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#161581510').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' -0.175'
        }, {
            name: 'Authority Score:'.bold() + ' -0.35'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 1'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/iashanmugavel")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#719603797').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.39999999999999997'
        }, {
            name: 'Authority Score:'.bold() + ' 0.7'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.1'
        }, {
            name: 'Authority Tweets:'.bold() + ' 1'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/ArrkGroup")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#446114332').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' -0.175'
        }, {
            name: 'Authority Score:'.bold() + ' -0.35'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 1'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/TommekeDeLeeuw")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#174592504').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.39999999999999997'
        }, {
            name: 'Authority Score:'.bold() + ' 0.7'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.1'
        }, {
            name: 'Authority Tweets:'.bold() + ' 1'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/daniellebeltug")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#581144587').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/johndhutch")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#594609627').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/JosepRamonBadia")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#29821560').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 1'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/megancater")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#9781152').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/Signiant")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#14983283').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/lindamcook1")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#3466788859').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' -0.175'
        }, {
            name: 'Authority Score:'.bold() + ' -0.35'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 1'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/CONTENTsoVIRAL")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#46320287').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.175'
        }, {
            name: 'Authority Score:'.bold() + ' 0.35'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 2'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 1'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/foroozan")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#496279965').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.3499999999999999'
        }, {
            name: 'Authority Score:'.bold() + ' 0.6999999999999998'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 3'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/agilesoftproj")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#314105069').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' -0.010000000000000002'
        }, {
            name: 'Authority Score:'.bold() + ' -0.05'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.03'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 1'
        }, {
            name: 'Replies:'.bold() + ' 1'
        }, {
            name: 'Conversations:'.bold() + ' 1'
        }, {
            name: 'Favourites:'.bold() + ' 1'
        }, {
            name: "View Profile".link("https://twitter.com/JBallanco")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#2244470786').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 1'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/terranceaparici")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#366075376').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Score:'.bold() + ' 0.0'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 1'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/larasuiter10")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#2422614883').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' -0.175'
        }, {
            name: 'Authority Score:'.bold() + ' -0.35'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 1'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/Tony_Bstonetech")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#17045494').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.365'
        }, {
            name: 'Authority Score:'.bold() + ' 0.75'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' -0.01999999999999999'
        }, {
            name: 'Authority Tweets:'.bold() + ' 1'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 1'
        }, {
            name: 'Conversations:'.bold() + ' 1'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/BTGFederal")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#161272226').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.024999999999999994'
        }, {
            name: 'Authority Score:'.bold() + ' 0.04999999999999999'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 1'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/ExperisLiveJobs")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#2474412986').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' 0.175'
        }, {
            name: 'Authority Score:'.bold() + ' 0.35'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 2'
        }, {
            name: 'Retweets:'.bold() + ' 0'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/RAforAll")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#56378106').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' -0.175'
        }, {
            name: 'Authority Score:'.bold() + ' -0.35'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 1'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/EdithsyFF")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#234845069').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' -0.175'
        }, {
            name: 'Authority Score:'.bold() + ' -0.35'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 1'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 1'
        }, {
            name: "View Profile".link("https://twitter.com/devendetroja")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#19349592').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' -0.175'
        }, {
            name: 'Authority Score:'.bold() + ' -0.35'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 1'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/RMLawton")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#13714012').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' -0.175'
        }, {
            name: 'Authority Score:'.bold() + ' -0.35'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 1'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/BrandonZylstra")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#466085575').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' -0.175'
        }, {
            name: 'Authority Score:'.bold() + ' -0.35'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 1'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/dhalonen")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#979883462').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' -0.175'
        }, {
            name: 'Authority Score:'.bold() + ' -0.35'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 1'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/AshwinBaskaran")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#226756497').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' -0.175'
        }, {
            name: 'Authority Score:'.bold() + ' -0.35'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 1'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/trikitrok")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#11604242').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' -0.175'
        }, {
            name: 'Authority Score:'.bold() + ' -0.35'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 1'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/trueheart78")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#3309318402').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' -0.175'
        }, {
            name: 'Authority Score:'.bold() + ' -0.35'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 1'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/Deann11202")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#2797778439').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' -0.175'
        }, {
            name: 'Authority Score:'.bold() + ' -0.35'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 1'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/shesmithy")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#1183612465').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' -0.175'
        }, {
            name: 'Authority Score:'.bold() + ' -0.35'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 1'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/miyopisltu")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#2802664478').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' -0.175'
        }, {
            name: 'Authority Score:'.bold() + ' -0.35'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 1'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/majorkk1")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#394390585').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' -0.175'
        }, {
            name: 'Authority Score:'.bold() + ' -0.35'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 1'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/twitanette")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#66064895').qtip({
        content: [{
            name: 'Influence Score:'.bold() + ' -0.175'
        }, {
            name: 'Authority Score:'.bold() + ' -0.35'
        }, {
            name: 'Domain Expertise Score:'.bold() + ' 0.0'
        }, {
            name: 'Authority Tweets:'.bold() + ' 0'
        }, {
            name: 'Relevant Tweets:'.bold() + ' 0'
        }, {
            name: 'Retweets:'.bold() + ' 1'
        }, {
            name: 'Mentions:'.bold() + ' 0'
        }, {
            name: 'Replies:'.bold() + ' 0'
        }, {
            name: 'Conversations:'.bold() + ' 0'
        }, {
            name: 'Favourites:'.bold() + ' 0'
        }, {
            name: "View Profile".link("https://twitter.com/erickswaine")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });

    // edges qTip
    cy.$('#0').qtip({
        content: [{
            name: 'PSLCorp'.bold() + ' --> ' + 'accelerance'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.33333333333333337'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.6666666666666667'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 0 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 1 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 1'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/PSLCorp/accelerance")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#1').qtip({
        content: [{
            name: 'PSLCorp'.bold() + ' --> ' + 'trohil'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.16666666666666669'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 1 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/PSLCorp/trohil")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#2').qtip({
        content: [{
            name: 'fernanda_306SK'.bold() + ' --> ' + 'nyndesigns'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.33333333333333337'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 0 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 1 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/fernanda_306SK/nyndesigns")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#3').qtip({
        content: [{
            name: 'tylercfarmer'.bold() + ' --> ' + 'nyndesigns'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.33333333333333337'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 0 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 1 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/tylercfarmer/nyndesigns")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#4').qtip({
        content: [{
            name: 'SmartFile'.bold() + ' --> ' + 'robincarr'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.16666666666666669'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 1 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/SmartFile/robincarr")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#5').qtip({
        content: [{
            name: 'CabForward'.bold() + ' --> ' + 'robincarr'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.22222222222222227'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.75'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 0 --> 1'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 1 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/CabForward/robincarr")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#6').qtip({
        content: [{
            name: 'datarade'.bold() + ' --> ' + 'eugenewhall'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.16666666666666669'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 1 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/datarade/eugenewhall")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#7').qtip({
        content: [{
            name: 'agileconn'.bold() + ' --> ' + 'DaveSchinkel'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.16666666666666669'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 1 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/agileconn/DaveSchinkel")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#8').qtip({
        content: [{
            name: 'Techn0_Co'.bold() + ' --> ' + 'seedinfographic'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.16666666666666669'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 1 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/Techn0_Co/seedinfographic")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#9').qtip({
        content: [{
            name: 'eduscrum'.bold() + ' --> ' + 'eduscrum'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.33333333333333337'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 0 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 1 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/eduscrum/eduscrum")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#10').qtip({
        content: [{
            name: 'eduscrum'.bold() + ' --> ' + 'gdinwiddie'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.33333333333333337'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 0 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 1 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/eduscrum/gdinwiddie")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#11').qtip({
        content: [{
            name: 'GregerWikstrand'.bold() + ' --> ' + 'bokieie'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.16666666666666669'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 1 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/GregerWikstrand/bokieie")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#12').qtip({
        content: [{
            name: 'bdamato'.bold() + ' --> ' + 'sgranese'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.16666666666666669'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 1 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/bdamato/sgranese")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#13').qtip({
        content: [{
            name: 'jamasoftware'.bold() + ' --> ' + 'wordpressdotcom'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.33333333333333337'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 0 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 1 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/jamasoftware/wordpressdotcom")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#14').qtip({
        content: [{
            name: 'heidisdrama'.bold() + ' --> ' + 'Appian'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.33333333333333337'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 0 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 1 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/heidisdrama/Appian")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#15').qtip({
        content: [{
            name: 'jeremyjlehman'.bold() + ' --> ' + 'LinkedIn'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.33333333333333337'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 0 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 1 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/jeremyjlehman/LinkedIn")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#16').qtip({
        content: [{
            name: 'StrideDev'.bold() + ' --> ' + 'lyssaadkins'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.33333333333333337'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 0 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 1 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/StrideDev/lyssaadkins")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#17').qtip({
        content: [{
            name: 'cortegaperez2'.bold() + ' --> ' + 'Bhargavi_Bh'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.16666666666666669'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 1 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/cortegaperez2/Bhargavi_Bh")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#18').qtip({
        content: [{
            name: 'infobldrs'.bold() + ' --> ' + 'forrester'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.33333333333333337'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 0 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 1 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/infobldrs/forrester")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#19').qtip({
        content: [{
            name: 'infobldrs'.bold() + ' --> ' + 'FORR_Mgoetz'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.33333333333333337'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 0 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 1 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/infobldrs/FORR_Mgoetz")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#20').qtip({
        content: [{
            name: 'infobldrs'.bold() + ' --> ' + 'infomgmt'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.0'
        }, {
            name: 'Interaction Score:'.bold() + ' NaN'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 0 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/infobldrs/infomgmt")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#21').qtip({
        content: [{
            name: 'TIBCO'.bold() + ' --> ' + 'TIBCO'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 1.0'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.33333333333333337'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 0 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 3 --> 1'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/TIBCO/TIBCO")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#22').qtip({
        content: [{
            name: 'TIBCO'.bold() + ' --> ' + 'DukeHudsonLTD'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.16666666666666669'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 1 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/TIBCO/DukeHudsonLTD")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#23').qtip({
        content: [{
            name: 'infomgmt'.bold() + ' --> ' + 'ZKalabalik'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.16666666666666669'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 1 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/infomgmt/ZKalabalik")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#24').qtip({
        content: [{
            name: 'richardsdm'.bold() + ' --> ' + 'forrester'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.33333333333333337'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 0 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 1 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/richardsdm/forrester")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#25').qtip({
        content: [{
            name: 'richardsdm'.bold() + ' --> ' + 'FORR_Mgoetz'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.33333333333333337'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 0 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 1 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/richardsdm/FORR_Mgoetz")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#26').qtip({
        content: [{
            name: 'richardsdm'.bold() + ' --> ' + 'infomgmt'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.0'
        }, {
            name: 'Interaction Score:'.bold() + ' NaN'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 0 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/richardsdm/infomgmt")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#27').qtip({
        content: [{
            name: 'richardsdm'.bold() + ' --> ' + 'MindComCustCare'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.16666666666666669'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 1 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/richardsdm/MindComCustCare")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#28').qtip({
        content: [{
            name: 'loiswinland11'.bold() + ' --> ' + 'nyndesigns'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.33333333333333337'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 0 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 1 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/loiswinland11/nyndesigns")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#29').qtip({
        content: [{
            name: 'asullivan2010'.bold() + ' --> ' + 'nyndesigns'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.33333333333333337'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 0 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 1 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/asullivan2010/nyndesigns")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#30').qtip({
        content: [{
            name: 'HerbCutshaw'.bold() + ' --> ' + 'nyndesigns'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.33333333333333337'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 0 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 1 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/HerbCutshaw/nyndesigns")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#31').qtip({
        content: [{
            name: 'DarleneCrayton'.bold() + ' --> ' + 'nyndesigns'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.33333333333333337'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 0 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 1 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/DarleneCrayton/nyndesigns")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#32').qtip({
        content: [{
            name: 'TIBCO'.bold() + ' --> ' + 'infoplicity'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.33333333333333337'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 2 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/TIBCO/infoplicity")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#33').qtip({
        content: [{
            name: 'Aciety'.bold() + ' --> ' + 'FORR_Mgoetz'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.33333333333333337'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 0 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 1 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/Aciety/FORR_Mgoetz")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#34').qtip({
        content: [{
            name: 'PDX_ProductMgr'.bold() + ' --> ' + 'Inviqa'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.33333333333333337'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.6666666666666667'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 0 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 1 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 1'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/PDX_ProductMgr/Inviqa")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#35').qtip({
        content: [{
            name: 'PDX_ProductMgr'.bold() + ' --> ' + 'lunivore'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.0'
        }, {
            name: 'Interaction Score:'.bold() + ' NaN'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 0 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/PDX_ProductMgr/lunivore")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#36').qtip({
        content: [{
            name: 'PDX_ProductMgr'.bold() + ' --> ' + 'sharkers'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.16666666666666669'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 1 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/PDX_ProductMgr/sharkers")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#37').qtip({
        content: [{
            name: 'PDX_ProductMgr'.bold() + ' --> ' + 'bokieie'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.16666666666666669'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 1 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/PDX_ProductMgr/bokieie")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#38').qtip({
        content: [{
            name: 'SusanMBernardo'.bold() + ' --> ' + 'nyndesigns'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.33333333333333337'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 0 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 1 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/SusanMBernardo/nyndesigns")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#39').qtip({
        content: [{
            name: 'RichardGMarquis'.bold() + ' --> ' + 'nyndesigns'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.33333333333333337'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 0 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 1 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/RichardGMarquis/nyndesigns")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#40').qtip({
        content: [{
            name: 'paul_boos'.bold() + ' --> ' + 'julianchete2'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.33333333333333337'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.6666666666666667'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 0 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 1 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 1'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/paul_boos/julianchete2")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#41').qtip({
        content: [{
            name: 'paul_boos'.bold() + ' --> ' + 'avarteq'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.0'
        }, {
            name: 'Interaction Score:'.bold() + ' NaN'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 0 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/paul_boos/avarteq")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#42').qtip({
        content: [{
            name: 'paul_boos'.bold() + ' --> ' + '_carlogagliardi'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.0'
        }, {
            name: 'Interaction Score:'.bold() + ' NaN'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 0 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/paul_boos/_carlogagliardi")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#43').qtip({
        content: [{
            name: 'StickyMinds'.bold() + ' --> ' + 'PragmaticAndy'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.33333333333333337'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.5'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 0 --> 1'
        }, {
            name: 'Mentions:'.bold() + ' 1 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/StickyMinds/PragmaticAndy")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#44').qtip({
        content: [{
            name: 'StickyMinds'.bold() + ' --> ' + 'acassaigne'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.16666666666666669'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 1 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/StickyMinds/acassaigne")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#45').qtip({
        content: [{
            name: 'jopenton'.bold() + ' --> ' + 'WMP_CIPD'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.16666666666666669'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 1 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/jopenton/WMP_CIPD")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#46').qtip({
        content: [{
            name: 'ArrkGroup'.bold() + ' --> ' + 'iashanmugavel'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.16666666666666669'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 1 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/ArrkGroup/iashanmugavel")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#47').qtip({
        content: [{
            name: 'daniellebeltug'.bold() + ' --> ' + 'TommekeDeLeeuw'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.16666666666666669'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 1 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/daniellebeltug/TommekeDeLeeuw")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#48').qtip({
        content: [{
            name: 'megancater'.bold() + ' --> ' + 'Signiant'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.33333333333333337'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 0 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 1 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/megancater/Signiant")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#49').qtip({
        content: [{
            name: 'bitbar'.bold() + ' --> ' + 'CONTENTsoVIRAL'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.16666666666666669'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 1 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/bitbar/CONTENTsoVIRAL")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#50').qtip({
        content: [{
            name: 'JBallanco'.bold() + ' --> ' + 'forrester'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.33333333333333337'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 0 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 1 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/JBallanco/forrester")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#51').qtip({
        content: [{
            name: 'JBallanco'.bold() + ' --> ' + 'FORR_Mgoetz'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.33333333333333337'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 0 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 1 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/JBallanco/FORR_Mgoetz")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#52').qtip({
        content: [{
            name: 'JBallanco'.bold() + ' --> ' + 'infomgmt'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.0'
        }, {
            name: 'Interaction Score:'.bold() + ' NaN'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 0 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/JBallanco/infomgmt")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#53').qtip({
        content: [{
            name: 'terranceaparici'.bold() + ' --> ' + 'nyndesigns'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.33333333333333337'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 0 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 1 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/terranceaparici/nyndesigns")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#54').qtip({
        content: [{
            name: 'larasuiter10'.bold() + ' --> ' + 'nyndesigns'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.33333333333333337'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 0 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 1 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/larasuiter10/nyndesigns")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#55').qtip({
        content: [{
            name: 'BTGFederal'.bold() + ' --> ' + 'BTGFederal'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.33333333333333337'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 0 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 1 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/BTGFederal/BTGFederal")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#56').qtip({
        content: [{
            name: 'BTGFederal'.bold() + ' --> ' + 'Tony_Bstonetech'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.16666666666666669'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 1 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/BTGFederal/Tony_Bstonetech")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#57').qtip({
        content: [{
            name: 'infobldrs'.bold() + ' --> ' + 'JBallanco'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.22222222222222227'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 0 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 1 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/infobldrs/JBallanco")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#58').qtip({
        content: [{
            name: 'Techn0_Co'.bold() + ' --> ' + 'EdithsyFF'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.16666666666666669'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 1 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/Techn0_Co/EdithsyFF")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#59').qtip({
        content: [{
            name: 'ArrkGroup'.bold() + ' --> ' + 'devendetroja'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.3888888888888889'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 1 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 1 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/ArrkGroup/devendetroja")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#60').qtip({
        content: [{
            name: 'ArrkGroup'.bold() + ' --> ' + 'sharkers'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.16666666666666669'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 1 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/ArrkGroup/sharkers")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#61').qtip({
        content: [{
            name: 'ArrkGroup'.bold() + ' --> ' + 'bokieie'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.16666666666666669'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 1 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/ArrkGroup/bokieie")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#62').qtip({
        content: [{
            name: 'ArrkGroup'.bold() + ' --> ' + 'RMLawton'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.16666666666666669'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 1 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/ArrkGroup/RMLawton")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#63').qtip({
        content: [{
            name: 'CabForward'.bold() + ' --> ' + 'SmartFile'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.16666666666666669'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 1 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/CabForward/SmartFile")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#64').qtip({
        content: [{
            name: 'StickyMinds'.bold() + ' --> ' + 'BrandonZylstra'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.16666666666666669'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 1 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/StickyMinds/BrandonZylstra")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#65').qtip({
        content: [{
            name: 'StickyMinds'.bold() + ' --> ' + 'dhalonen'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.16666666666666669'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 1 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/StickyMinds/dhalonen")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#66').qtip({
        content: [{
            name: 'StickyMinds'.bold() + ' --> ' + 'AshwinBaskaran'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.16666666666666669'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 1 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/StickyMinds/AshwinBaskaran")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#67').qtip({
        content: [{
            name: 'StickyMinds'.bold() + ' --> ' + 'trikitrok'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.16666666666666669'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 1 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/StickyMinds/trikitrok")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#68').qtip({
        content: [{
            name: 'StickyMinds'.bold() + ' --> ' + 'trueheart78'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.16666666666666669'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 1 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/StickyMinds/trueheart78")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#69').qtip({
        content: [{
            name: 'GregerWikstrand'.bold() + ' --> ' + 'Deann11202'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.16666666666666669'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 1 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/GregerWikstrand/Deann11202")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#70').qtip({
        content: [{
            name: 'bitbar'.bold() + ' --> ' + 'shesmithy'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.16666666666666669'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 1 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/bitbar/shesmithy")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#71').qtip({
        content: [{
            name: 'bitbar'.bold() + ' --> ' + 'miyopisltu'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.16666666666666669'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 1 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/bitbar/miyopisltu")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#72').qtip({
        content: [{
            name: 'bitbar'.bold() + ' --> ' + 'majorkk1'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.16666666666666669'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 1 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/bitbar/majorkk1")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#73').qtip({
        content: [{
            name: 'datarade'.bold() + ' --> ' + 'bokieie'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.16666666666666669'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 1 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/datarade/bokieie")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#74').qtip({
        content: [{
            name: 'infomgmt'.bold() + ' --> ' + 'twitanette'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.16666666666666669'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 1 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/infomgmt/twitanette")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
    cy.$('#75').qtip({
        content: [{
            name: 'infomgmt'.bold() + ' --> ' + 'erickswaine'.bold()
        }, {
            name: 'Relationship Score:'.bold() + ' 0.16666666666666669'
        }, {
            name: 'Interaction Score:'.bold() + ' 0.0'
        }, {
            name: 'Follows:'.bold() + ' No --> No'
        }, {
            name: 'Retweets:'.bold() + ' 1 --> 0'
        }, {
            name: 'Mentions:'.bold() + ' 0 --> 0'
        }, {
            name: 'Replies:'.bold() + ' 0 --> 0'
        }, {
            name: 'Favourites:'.bold() + ' 0 --> 0'
        }, {
            name: 'More information'.link("https://moz.com/followerwonk/compare/infomgmt/erickswaine")
        }].map(function (text) {
            return text.name;
        }).join('<br />\n'),
        position: {
            my: 'top center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',

            tip: {
                width: 16,
                height: 8
            }
        }
    });
}); // on dom ready
