console.log('***************************************');
console.log('***************************************');
console.log('***************************************');
console.log('***************************************');
console.log('***************************************');
console.log('FUNCTIONS');

function tusciaFunkcija() {
    return false;
}
console.log( tusciaFunkcija() );


function daugyba( a, b ){
    // ar "a" yra skaicius?
    if ( typeof(a) !== 'number' ) {
        return 'Pirma reiksme nera skaiciaus tipo. Tu ivedei: '+a;
    }
    // ar "b" yra skaicius?
    if ( typeof(b) !== 'number' ) {
        return 'Antra reiksme nera skaiciaus tipo. Tu ivedei: '+b;
    }
    var sandauga = a * b;
    return sandauga;
}
console.log( daugyba( 2, 3 ) );
console.log( daugyba( 1.5, 3.6 ) );
console.log( daugyba( 0, -8 ) );
console.log( daugyba( '6', 6 ) );
console.log( daugyba( '6', '5' ) );
console.log( daugyba( 6, 'a' ) );


function skaitmenuKiekisSkaiciuje( skaicius ) {
    if ( typeof(skaicius) !== 'number' ) {
        return 'Pateikta netinkamo tipo reikšmė.';
    }
    var skaitmenu_kiekis = 0;
    // skaiciuojame skaitmenu kieki duotame skaiciuje "skaicius"
    skaitmenu_kiekis = (''+skaicius).length;

    // eliminuojame minuso zenkla
    if ( skaicius < 0 ) {
        skaitmenu_kiekis--;
    }

    // eliminuojame kablelio zenkla
    // 1. variantas
    // if ( skaicius % 1 !== 0 ) {
    //     skaitmenu_kiekis--;
    // }

    // 2. variantas
    // for ( var i=0; i<(''+skaicius).length; i++) {
    //     if ( (''+skaicius)[i] === '.' ) {
    //         skaitmenu_kiekis--;
    //     }
    //     if ( (''+skaicius)[i] === '-' ) {
    //         skaitmenu_kiekis--;
    //     }
    //     if ( (''+skaicius)[i] === ',' ) {
    //         skaitmenu_kiekis--;
    //     }
    // }

    // 3. variantas
    if ( (''+skaicius).search('.') ) {
        skaitmenu_kiekis--;
    }
    if ( (''+skaicius).search('-') ) {
        skaitmenu_kiekis--;
    }
    if ( (''+skaicius).search(',') ) {
        skaitmenu_kiekis--;
    }

    return skaitmenu_kiekis;
}

console.log( skaitmenuKiekisSkaiciuje( 5 ) );
console.log( skaitmenuKiekisSkaiciuje( 781 ) );
console.log( skaitmenuKiekisSkaiciuje( -8 ) );
console.log( skaitmenuKiekisSkaiciuje( 3.1415 ) );
console.log( skaitmenuKiekisSkaiciuje( -3.1415 ) );
console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
console.log( skaitmenuKiekisSkaiciuje( true ) );
console.log( skaitmenuKiekisSkaiciuje( 'asd' ) );
console.log( skaitmenuKiekisSkaiciuje( NaN ) );