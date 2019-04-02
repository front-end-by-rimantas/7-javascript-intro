console.log('***************************************');
console.log('***************************************');
console.log('***************************************');
console.log('***************************************');
console.log('***************************************');

var x = 2;
console.log( x );

var y = 3;
console.log( y );

var z = 4;
console.log( z );

var x_tekstu = '2 gaideliai';
console.log( x_tekstu );

var y_tekstu = '3 visteles';
console.log( y_tekstu );

var z_tekstu = '4 ratai';
console.log( z_tekstu );

// -0.03 = -3e-2
// 1 = 1e0
// 10 = 1e1
// 100 = 1e2
// 1000 = 1e3
// 2019 = 2.019e3
// 1000000 = 1e6
var pirmasis_skaiciu_sarasas = [1, 2, 9.9e+307, 4, 5];
console.log( pirmasis_skaiciu_sarasas );

var antras_skaiciu_sarasas = [66, 66, 66, 69, 66];
console.log( antras_skaiciu_sarasas );

var trecias_skaiciu_sarasas = [5, 1, -2, 3, -4];
console.log( trecias_skaiciu_sarasas );


var pirmasis_tekstu_sarasas = ['1', '2', '9.9e+307', '4', '5'];
console.log( pirmasis_tekstu_sarasas );

var antras_tekstu_sarasas = ['66', '66', '66', '69', '66'];
console.log( antras_tekstu_sarasas );

var trecias_tekstu_sarasas = ['5', '1', '-2', '3', '-4'];
console.log( trecias_tekstu_sarasas );

var combo = [1, 'antras', true, false, pirmasis_skaiciu_sarasas];
console.log( combo );


var x_y_z_suma = x + y + z;
console.log( x_y_z_suma );


var x_y_z_tekstai = x_tekstu + ' ' + y_tekstu + ' ' + z_tekstu;
console.log( x_y_z_tekstai );


var t_1 = 'a';
var t_2 = 'b';
console.log( t_1 + ' ' + t_2 );

console.log('****************************');
console.log('****************************');
console.log('****************************');

var ilgas_tekstas = trecias_tekstu_sarasas[0] + ', '
                        + trecias_tekstu_sarasas[1] + ', '
                        + trecias_tekstu_sarasas[2] + ', '
                        + trecias_tekstu_sarasas[3] + ', '
                        + trecias_tekstu_sarasas[4];
console.log( ilgas_tekstas );

console.log('****************************');
console.log('****************************');
console.log('****************************');
console.log('IF');

// a > b
// >, <, >=, <=, ===, !==

// if ( a ? b ) { true } else { false }

if ( 2 > 4 ) {
    console.log('Du yra daugiau uz keturis.');
} else {
    console.log('Du yra NERA daugiau uz keturis.');
}

if ( 2 > 4 ) {
    console.log('Du yra daugiau uz keturis.');
}

if ( 2 < 4 ) {
    console.log('Du yra NERA daugiau uz keturis.');
}

if ( 2 === 4 ) {
    console.log('Du yra lygu keturi.');
}




var a = 2;

if ( a < 0 ) {
    console.log( 'Kintamasis a yra maziau uz nuli' );
} else if ( a < 5 ) {
    console.log( 'Kintamasis a nera maziau uz nuli, bet yra maziau uz 5' );
} else {
    console.log( 'Kintamasis a nera maziau uz nuli' );
}


var m = 5;
var n = '5';

if ( m != n ) {
    console.log('lengvas - ne');
} else {
    console.log('lengvas - taip');
}

if ( m !== n ) {
    console.log('grieztas - ne');
} else {
    console.log('grieztas - taip');
}

console.log('****************************');
console.log('****************************');
console.log('****************************');
console.log('FOR ciklas');

// suma nuo 0 iki 4 = 10

var suma = 0;
var skaiciai = [0,1,2,3,4,5,5,8,2,4];

console.log(skaiciai);
console.log('ilgis: ' + skaiciai.length );


for ( var i=0; i<skaiciai.length; i++ ) {
    // suma = suma + skaiciai[i];
    suma += skaiciai[i];

    console.log( i + ' - ' + suma );
}
// 0 - 0
// 1 - 1
// 2 - 3
// 3 - 6
// 4 - 10

console.log( 'suma: ' + suma );




var suma_2 = 0;
var skaiciai_2 = [0,1,2,3,4];

for ( var i=25; i<30; i++ ) {
    suma_2 += skaiciai_2[i-25];
    console.log( i + ' - ' + suma_2 );
}
console.log( 'suma_2: ' + suma_2 );




console.log('****************************');
console.log('****************************');
console.log('****************************');
console.log('FOR ciklo uzdaviniai');

var suma = 0;
var nuo = 10;
var iki = 10;
for ( var i=nuo; i<=iki; i++ ) {
    suma += i;
}
console.log( 'Suma intervale [' + nuo + ' - ' + iki + '] yra ' + suma );

console.log('****************************');

var pradinis_tekstas = 'Labas rytas :)';
var galutinis_tekstas = '';
var ilgis = pradinis_tekstas.length;

for ( var i=0; i<ilgis; i++ ) {
    galutinis_tekstas += pradinis_tekstas[ilgis-i-1];
}
console.log( galutinis_tekstas );

console.log('****************************');

var nuo = 0;
var iki = 15;
var be_liekanos_3 = 0;
var be_liekanos_5 = 0;
var be_liekanos_7 = 0;

// ciklas FOR
for ( var i=nuo; i<=iki; i++ ) {
    // tikriname ar einamasis skaicius dalinasi is 3 be liekanos
    if ( i%3 === 0 ) {
        be_liekanos_3++;
    }
}
console.log( 'Skaičių intervale tarp '+nuo+' ir '+iki+', besidalinančių be liekanos iš 3 yra '+be_liekanos_3+' vienetai.' );

for ( var i=nuo; i<=iki; i++ ) {
    // tikriname ar einamasis skaicius dalinasi is 5 be liekanos
    if ( i%5 === 0 ) {
        be_liekanos_5++;
    }
}
console.log( 'Skaičių intervale tarp '+nuo+' ir '+iki+', besidalinančių be liekanos iš 5 yra '+be_liekanos_5+' vienetai.' );

for ( var i=nuo; i<=iki; i++ ) {
    // tikriname ar einamasis skaicius dalinasi is 7 be liekanos
    if ( i%7 === 0 ) {
        be_liekanos_7++;
    }
}
console.log( 'Skaičių intervale tarp '+nuo+' ir '+iki+', besidalinančių be liekanos iš 7 yra '+be_liekanos_7+' vienetai.' );





console.log('****************************');

var nuo = 0;
// var iki = 150000000;
var iki = 15;
var dalikliai = [2,3,5,7,11];
var be_liekanos = 0;

for ( var d=0; d<dalikliai.length; d++ ) {
    be_liekanos = 0;
    for ( var i=nuo; i<=iki; i++ ) {
        if ( i % dalikliai[d] === 0 ) {
            be_liekanos++;
        }
    }
    console.log( 'Skaičių intervale tarp '+nuo+' ir '+iki+', besidalinančių be liekanos iš '+dalikliai[d]+' yra '+be_liekanos+' vienetai.' );
}

console.log('****************************');

var nuo = 0;
var iki = 6;
// var dalikliai = [2,3,5,7,11];
var dalikliai = [3];
var be_liekanos = 0;
var intervalo_dydis = iki - nuo;
var ats_pilnas = 0;
var ats_pradzia = 0;
var ar_dubliuojasi = 0;

for ( var d=0; d<dalikliai.length; d++ ) {
    if ( dalikliai[d] !== 0 ) {
        ats_pilnas = (iki - iki % dalikliai[d]) / dalikliai[d] + 1;
        ats_pradzia = (nuo - nuo % dalikliai[d]) / dalikliai[d] + 1;
        ar_dubliuojasi = 0;
        if ( nuo % dalikliai[d] === 0 ) {
            ar_dubliuojasi++;
        }
        if ( nuo < 0 ) {
            if ( nuo % dalikliai[d] !== 0 ) {
                ar_dubliuojasi++;
            }
        }
        if ( iki < 0 ) {
            if ( iki % dalikliai[d] !== 0 ) {
                ar_dubliuojasi--;
            }
        }
        var ats = ats_pilnas - ats_pradzia + ar_dubliuojasi;
        console.log( 'Skaičių intervale tarp '+nuo+' ir '+iki+', besidalinančių be liekanos iš '+dalikliai[d]+' yra '+ats+' vienetai.' );
    }
}

