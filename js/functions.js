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

console.log('----------------------');


function skaitmenuKiekisSkaiciuje( skaicius ) {
    if ( typeof(skaicius) !== 'number' ) {
        return 'Pateikta netinkamo tipo reikšmė.';
    }
    if ( isNaN(skaicius) === true ) {
        return 'Pateikta netinkamo tipo reikšmė.';
    }

    var skaitmenu_kiekis = 0;
    // skaiciuojame skaitmenu kieki duotame skaiciuje "skaicius"
    skaitmenu_kiekis = (''+skaicius).length;

    // eliminuojame minuso zenkla
    // if ( skaicius < 0 ) {
    //     skaitmenu_kiekis--;
    // }

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
    if ( (''+skaicius).indexOf('.') >= 0 ) {
        skaitmenu_kiekis--;
    }
    if ( (''+skaicius).indexOf('-') >= 0 ) {
        skaitmenu_kiekis--;
    }
    if ( (''+skaicius).indexOf(',') >= 0 ) {
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
console.log( skaitmenuKiekisSkaiciuje( 3.7060123456e+10 ) );
console.log( skaitmenuKiekisSkaiciuje( true ) );
console.log( skaitmenuKiekisSkaiciuje( 'asd' ) );
console.log( skaitmenuKiekisSkaiciuje( NaN ) );

console.log('----------------------');

function didziausiasSkaiciusSarase( sarasas ) {
    // ar gautas tinkamas formatas
    if ( typeof(sarasas) !== 'object' ) {
        return 'Pateikta netinkamo tipo reikšmė.';
    }
    if ( sarasas.length === 0 ) {
        return 'Pateiktas sąrašas negali būti tuščias.';
    }

    // ieskome didziausio skaiciaus sarase
    var didziausias = sarasas[0];
    console.log(sarasas);
    
    for ( var i=0; i<sarasas.length; i++ ) {
        if ( typeof(didziausias) !== 'number' ) {
            didziausias = sarasas[i];
        }

        if ( typeof(didziausias) === 'number' &&
             sarasas[i] > didziausias ) {
            didziausias = sarasas[i];
        }
    }

    if ( typeof(didziausias) !== 'number' ) {
        return 'Pateikta netinkamo tipo reikšmės.';
    }

    return didziausias;
}

console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
console.log( didziausiasSkaiciusSarase( [ -5, 'pomidoras', '1a', true, [1, 2, 3, 4, 5] ] ) );
console.log( didziausiasSkaiciusSarase( [ -5, 'pomidoras', '1a'] ) );
console.log( didziausiasSkaiciusSarase( [ 'pomidoras', -5, 78, 0, 18 ] ) );
console.log( didziausiasSkaiciusSarase( [ 'a', 'b', 1, 2 ] ) );
console.log( didziausiasSkaiciusSarase( [ 'a', 'b', 'c', 'd' ] ) );
console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
console.log( didziausiasSkaiciusSarase( 'pomidoras' ) );
console.log( didziausiasSkaiciusSarase( [] ) );

console.log( 'don\'t be lame with ""' );