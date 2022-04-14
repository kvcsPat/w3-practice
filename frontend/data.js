let myFavoriteCountry = {
    "name": {
        "common": "Cuba",
        "official": "Republic of Cuba",
        "nativeName": {
            "spa": {
                "official": "República de Cuba",
                "common": "Cuba"
            }
        }
    },
    "tld": [
        ".cu"
    ],
    "cca2": "CU",
    "ccn3": "192",
    "cca3": "CUB",
    "cioc": "CUB",
    "independent": true,
    "status": "officially-assigned",
    "unMember": true,
    "currencies": {
        "CUC": {
            "name": "Cuban convertible peso",
            "symbol": "$"
        },
        "CUP": {
            "name": "Cuban peso",
            "symbol": "$"
        }
    },
    "idd": {
        "root": "+5",
        "suffixes": [
            "3"
        ]
    },
    "capital": [
        "Havana"
    ],
    "altSpellings": [
        "CU",
        "Republic of Cuba",
        "República de Cuba"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "languages": {
        "spa": "Spanish"
    },
    "translations": {
        "ara": {
            "official": "جمهورية كوبا",
            "common": "كوبا"
        },
        "ces": {
            "official": "Kubánská republika",
            "common": "Kuba"
        },
        "cym": {
            "official": "Gweriniaeth Ciwba",
            "common": "Ciwba"
        },
        "deu": {
            "official": "Republik Kuba",
            "common": "Kuba"
        },
        "est": {
            "official": "Kuuba Vabariik",
            "common": "Kuuba"
        },
        "fin": {
            "official": "Kuuban tasavalta",
            "common": "Kuuba"
        },
        "fra": {
            "official": "République de Cuba",
            "common": "Cuba"
        },
        "hrv": {
            "official": "Republika Kuba",
            "common": "Kuba"
        },
        "hun": {
            "official": "Kubai Köztársaság",
            "common": "Kuba"
        },
        "ita": {
            "official": "Repubblica di Cuba",
            "common": "Cuba"
        },
        "jpn": {
            "official": "キューバ共和国",
            "common": "キューバ"
        },
        "kor": {
            "official": "쿠바 공화국",
            "common": "쿠바"
        },
        "nld": {
            "official": "Republiek Cuba",
            "common": "Cuba"
        },
        "per": {
            "official": "جمهوری کوبا",
            "common": "کوبا"
        },
        "pol": {
            "official": "Republika Kuby",
            "common": "Kuba"
        },
        "por": {
            "official": "República de Cuba",
            "common": "Cuba"
        },
        "rus": {
            "official": "Республика Куба",
            "common": "Куба"
        },
        "slk": {
            "official": "Kubánska republika",
            "common": "Kuba"
        },
        "spa": {
            "official": "República de Cuba",
            "common": "Cuba"
        },
        "swe": {
            "official": "Republiken Kuba",
            "common": "Kuba"
        },
        "urd": {
            "official": "جمہوریہ کیوبا",
            "common": "کیوبا"
        },
        "zho": {
            "official": "古巴共和国",
            "common": "古巴"
        }
    },
    "latlng": [
        21.5,
        -80
    ],
    "landlocked": false,
    "area": 109884,
    "demonyms": {
        "eng": {
            "f": "Cuban",
            "m": "Cuban"
        },
        "fra": {
            "f": "Cubaine",
            "m": "Cubain"
        }
    },
    "flag": "🇨🇺",
    "maps": {
        "googleMaps": "https://goo.gl/maps/1dDw1QfZspfMUTm99",
        "openStreetMaps": "https://www.openstreetmap.org/relation/307833"
    },
    "population": 11326616,
    "fifa": "CUB",
    "car": {
        "signs": [
            "C"
        ],
        "side": "right"
    },
    "timezones": [
        "UTC-05:00"
    ],
    "continents": [
        "North America"
    ],
    "flags": {
        "png": "https://flagcdn.com/w320/cu.png",
        "svg": "https://flagcdn.com/cu.svg"
    },
    "coatOfArms": {
        "png": "https://mainfacts.com/media/images/coats_of_arms/cu.png",
        "svg": "https://mainfacts.com/media/images/coats_of_arms/cu.svg"
    },
    "startOfWeek": "monday",
    "capitalInfo": {
        "latlng": [
            23.12,
            -82.35
        ]
    },
    "postalCode": {
        "format": "CP #####",
        "regex": "^(?:CP)*(\\d{5})$"
    }
}

let v1 = myFavoriteCountry.tld[0]

console.log(v1)

let v2 = myFavoriteCountry.name.nativeName.spa.official

console.log(v2)

let v3 = myFavoriteCountry.idd.suffixes[0]

console.log(v3)
