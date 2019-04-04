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


console.log('----------------------');


function isrinktiRaides( text, exclude ) {
    console.log('-----');
    console.log(text+' - '+exclude);
    
    var rezultatas = '';
    if ( typeof(text) !== 'string' ) {
        return 'Pirmasis kintamasis yra netinkamo tipo.';
    }
    if ( text.length < 1 || text.length > 100 ) {
        return 'Pirmojo kintamojo reikšmė yra netinkamo dydžio.';
    }
    if ( typeof(exclude) !== 'number' ||
        //  isNaN(exclude) === true ||
         isNaN(exclude) ||
        //  isFinite(exclude) !== true ||
         !isFinite(exclude) ) {
        return 'Antrasis kintamasis yra netinkamo tipo.';
    }
    if ( exclude < 1 ) {
        return 'Antrasis kintamasis turi būti didesnis už nulį.';
    }
    if ( exclude > text.length ) {
        return 'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.';
    }
    if ( exclude % 1 > 0 ) {
        return 'Antrasis kintamasis negali būti ne sveikasis skaičius.';
    }

    // isrenkame kas kelinta raide is duoto teksto
    for ( var i=exclude-1; i<text.length; i=i+exclude ) {
        rezultatas += text[i];
        // rezultatas += text.charAt(i);
    }

    return rezultatas;
}

// nelabai teisingi
console.log( isrinktiRaides( "abc", 0 ) );
console.log( isrinktiRaides( "", 0 ) );
console.log( isrinktiRaides( "", 4 ) );
console.log( isrinktiRaides( 1561, 2 ) );
console.log( isrinktiRaides( false, 2 ) );
console.log( isrinktiRaides( "text", NaN ) );
console.log( isrinktiRaides( "text", Infinity ) );
console.log( isrinktiRaides( "text", Math.PI ) );
console.log( isrinktiRaides( "abc", 4 ) );
// teisingi
console.log( isrinktiRaides( "abcdefg", 2 ) );
console.log( isrinktiRaides( "abcdefghijkl", 3 ) );
console.log( isrinktiRaides( "3.1415e0", 2 ) );


console.log('----------------------');


function dalyba( a, b, precision ) {
    if ( typeof(a) !== 'number' ||
         typeof(b) !== 'number' ||
         isNaN(a) ||
         isNaN(b) ) {
        return 'Dalyba galima tik su tikrais skaiciais.';
    }
    if ( b === 0 ) {
        return 'Dalyba is nulio negalima.'
    }

    return a / b;
}

// nelabai teisingi
console.log( dalyba( true, false ) );
console.log( dalyba( 'true', 'false' ) );
console.log( dalyba( ['true'], ['false'] ) );
console.log( dalyba( 5, NaN ) );
console.log( dalyba( NaN, 5 ) );
console.log( dalyba( 5, 0 ) );
console.log( dalyba( 0, 0 ) );
console.log( dalyba( '5', '5' ) );
console.log( dalyba( -'5', -'asd' ) );
console.log( dalyba( +'2+2', 2 ) );
console.log( dalyba( +'2'+'2', 2 ) );
// teisingi
console.log( dalyba( +('2'+'2'), 2 ) );
console.log( dalyba( -'5', -'5' ) );
console.log( dalyba( +'5', +'5' ) );
console.log( dalyba( 10, 2 ) );
console.log( dalyba( 0.5, -.2 ) );
console.log( dalyba( 0, -.2 ) );
console.log( dalyba( 5, 5 ) );
console.log( dalyba( 5, 5e0 ) );
console.log( dalyba( 2+2, Math.PI ) );
console.log( dalyba( -1050, -50 ) );
console.log( dalyba( -1050, Infinity ) );
console.log( dalyba( Infinity, -1050 ) );