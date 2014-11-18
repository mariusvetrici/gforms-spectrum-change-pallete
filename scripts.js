var colorNames = {
    '#972f1b': 'Antique Cherry Red',
    '#008751': 'Antique Irish Green',
    '#00857d': 'Antique Jade Dome',
    '#b33d26': 'Antique Orange',
    '#006a8e': 'Antique Sapphire',
    '#c8c9c7': 'Ash',
    '#542344': 'Aubergine',
    '#f46baf': 'Azalea',
    '#7f284f': 'Berry',
    '#2b2b28': 'Black',
    '#2b2b33': 'Black',
    '#472835': 'Blackberry',
    '#796e65': 'Brown Savana',
    '#8c2633': 'Cardinal',
    '#7796b2': 'Carolina Blue',
    '#63666a': 'Charcoal',
    '#ac2b37': 'Cherry Red',
    '#4930ad': 'Cobalt',
    '#493072': 'Cobalt',
    '#fc5e72': 'Coral Silk',
    '#ffc600': 'Daisy',
    '#3e2b2e': 'Dark Chocolate',
    '#494c49': 'Dark Heather',
    '#1eb53a': 'Electric Green',
    '#213d30': 'Forest Green',
    '#7c2128': 'Garnet',
    '#fcb514': 'Gold',
    '#75787b': 'Gravel',
    '#8e8c7a': 'Heather Military Green',
    '#b73844': 'Heather Red',
    '#ea0f6b': 'Heliconia',
    '#cec1b5': 'Ice Grey',
    '#3f6075': 'Indigo Blue',
    '#009977': 'Irish Green',
    '#aaad75': 'Kiwi',
    '#adb2c1': 'Light Blue',
    '#eabfc4': 'Light Pink',
    '#563d82': 'Lilac',
    '#78d64b': 'Lime Green',
    '#582d40': 'Maroon',
    '#005670': 'Midnight',
    '#777263': 'Military Green',
    '#96d8af': 'Mint Green',
    '#d6d2c4': 'Natural',
    '#353f5b': 'Navy',
    '#d3a87c': 'Old Gold',
    '#dd4f05': 'Orange',
    '#5e366e': 'Purple',
    '#b7312c': 'Red',
    '#1d4f91': 'Royal',
    '#512826': 'Russet',
    '#bad80a': 'Safety Green',
    '#fe5000': 'Safety Orange',
    '#c5b9ac': 'Sand',
    '#007aa5': 'Sapphire',
    '#8cccd3': 'Sky',
    '#97999b': 'Sport Grey',
    '#dc6b2f': 'Sunset',
    '#e28c05': 'Tennessee Orange',
    '#c66005': 'Texas Orange',
    '#006269': 'Tropical Blue',
    '#006847': 'Turf Green',
    '#53565a': 'Tweed',
    '#937acc': 'Violet',
    'white': 'White',
    '#ffd69b': 'Yellow Haze'
};

jQuery(document).ready(function ($) {
    // Init the color picker field
    InitSpectrum($, $('#input_1_22').val());

    SetTooltipsInSpectrum();

    // Garment Style Changed
    $('#input_1_22').change(function () {
        InitSpectrum($, $('#input_1_22').val());
    });
});

function InitSpectrum($, shirtStyle) {
    var colorPalettes = [
        // Gildan Cotton T-Shirt
        [
            ['#972f1b', '#008751', '#00857d', '#b33d26', '#006a8e', '#c8c9c7'],
            ['#542344', '#f46baf', '#7f284f', '#2b2b28', '#472835', '#796e65'],
            ['#8c2633', '#7796b2', '#63666a', '#4930ad', '#fc5e72', '#ffc600'],
            ['#3e2b2e', '#494c49', '#1eb53a', '#213d30', '#7c2128', '#fcb514'],
            ['#75787b', '#8e8c7a', '#b73844', '#ea0f6b', '#cec1b5', '#3f6075'],
            ['#009977', '#aaad75', '#adb2c1', '#eabfc4', '#563d82', '#78d64b'],
            ['#582d40', '#005670', '#777263', '#96d8af', '#d6d2c4', '#353f5b'],
            ['#d3a87c', '#dd4f05', '#5e366e', '#b7312c', '#1d4f91', '#512826'],
            ['#bad80a', '#fe5000', '#c5b9ac', '#007aa5', '#8cccd3', '#97999b'],
            ['#dc6b2f', '#e28c05', '#006269', '#006847', '#53565a', '#937acc'],
            ['#ffffff', '#ffd69b']
        ],
        // Gildan Hooded Sweatshirt
        [
            ['#972f1b', '#006a8e', '#c8c9c7', '#2b2b28', '#8c2633', '#7796b2'],
            ['#63666a', '#ac2b37', '#3e2b2e', '#494c49', '#213d30', '#7c2128'],
            ['#fcb514', '#ea0f6b', '#3f6075', '#009977', '#aaad75', '#adb2c1'],
            ['#eabfc4', '#582d40', '#777263', '#353f5b', '#dd4f05', '#5e366e'],
            ['#b7312c', '#1d4f91', '#bad80a', '#fe5000', '#c5b9ac', '#97999b'],
            ['#ffffff']
        ],
        // Gildan Youth Cotton T-Shirt
        [
            ['#c8c9c7', '#f46baf', '#2b2b28', '#8c2633', '#7796b2', '#63666a'],
            ['#493072', '#fc5e72', '#ffc600', '#3e2b2e', '#494c49', '#1eb53a'],
            ['#213d30', '#7c2128', '#fcb514', '#ea0f6b', '#3f6075', '#009977'],
            ['#aaad75', '#adb2c1', '#eabfc4', '#78d64b', '#582d40', '#777263'],
            ['#96d8af', '#d6d2c4', '#353f5b', '#d3a87c', '#dd4f05', '#5e366e'],
            ['#b7312c', '#1d4f91', '#bad80a', '#fe5000', '#c5b9ac', '#007aa5'],
            ['#8cccd3', '#97999b', '#e28c05', '#c66005', '#006269', '#937acc'],
            ['#ffffff', '#ffd69b']
        ],
        // Gildan Youth Sweatshirt
        [
            ['#c8c9c7', '#2b2b28', '#8c2633', '#7796b2', '#63666a', '#213d30'],
            ['#7c2128', '#fcb514', '#ea0f6b', '#009977', '#eabfc4', '#582d40'],
            ['#353f5b', '#dd4f05', '#5e366e', '#b7312c', '#1d4f91', '#97999b'],
            ['#ffffff']
        ],
        // Expert Performance -Technical T-Shirt
        [
            ['#ffffff', '#97999b', '#1d4f91', '#b7312c', '#353f5b', '#78d64b'],
            ['#fcb514', '#213d30', '#5e366e', '#7796b2', '#8c2633', '#2b2b33']
        ],
        // Expert Performance -Youth Technical T-Shirt
        [
            ['#ffffff', '#97999b', '#1d4f91', '#b7312c', '#353f5b', '#78d64b'],
            ['#fcb514', '#213d30', '#5e366e', '#7796b2', '#8c2633', '#2b2b33']
        ]
    ];

    $("#input_1_21").spectrum({
        showPaletteOnly: true,
        showPalette: true,
        preferredFormat: "name",
        flat: true,
        allowEmpty: true,
        palette: colorPalettes[shirtStyle],
        change: function (color) {
            $('#input_1_21').attr('value', color.toHexString());

            SetTooltipsInSpectrum();
        }
    });
}

function SetTooltipsInSpectrum() {
    jQuery('.sp-palette span.sp-thumb-el').each(function () {
        jQuery(this).attr('title', colorNames[jQuery(this).attr('title')]);
    });
}
