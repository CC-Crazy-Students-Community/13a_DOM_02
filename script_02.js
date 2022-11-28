let listen = document.getElementsByTagName( "body" );
listen.addEventListener( "load", addSection );

function addSection(){​​
        let tmpElementTitle = document.createElement( "h3" );
        tmpElementTitle.innerHtml = "test";

        // let tmpElementSection = document.createElement( "div" );
        // let tmpElementText = document.createTextNode( "Organisation" );

        // tmpElementSection.appendChild( tmpElementText );
        // tmpElementTitle.appendChild( tmpElementSection );
        document.getElementById( "accordion" ).appendChild( tmpElementTitle );
}​​
