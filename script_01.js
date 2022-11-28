let meinDiv = document.getElementById( "accordion" );
window.addEventListener( "load", bodyDingens );
function bodyDingens() {
    alert( "tewrt" );
    let meinH3 = document.createElement( "h3" );
    meinH3.innerHTML = "Test";
    meinDiv.appendChild( meinH3 );
}
