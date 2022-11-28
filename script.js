let body = document.getElementsByTagName( "body" )[ 0 ];
let accordion = document.getElementById( "accordion" );

body.addEventListener( "load", addSection(), false );

function addSection() {
        let hElem = document.createElement( "h3" );
        let pElem = document.createElement( "p" );
        let iElem = [
                document.createElement( "input" ),
                document.createElement( "input" ),
                document.createElement( "input" )
        ]

        accordion.appendChild( hElem );
        accordion.appendChild( pElem );
        iElem.forEach(input => {
                pElem.appendChild( input );
        });

        let hElemText = document.createTextNode( "Organisation" );
        hElem.appendChild( hElemText );
}


// let meinDiv = document.getElementById( "accordion" );
// window.addEventListener( "load", bodyDingens, false );
// function bodyDingens() {
//     alert( "tewrt" );
//     let meinH3 = document.createElement( "h3" );
//     meinH3.innerHTML = "Test";
//     meinDiv.appendChild( meinH3 );
// }