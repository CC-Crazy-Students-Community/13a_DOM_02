// function alertTest1(){ alert( "Window wurde geladen" ); }
// function alertTest2(){ alert( "Dokument wurde geladen" ); }
// function alertTest3(){ alert( "Body wurde geladen" ); }
// function alertTest4(){ alert( "Div wurde geladen" ); }
// window.addEventListener("load", alertTest1);
// document.addEventListener("load", alertTest2);
// window.document.body.addEventListener("load", alertTest3);
// window.document.getElementById("test").addEventListener("load", alertTest4);

var body = document.getElementsByTagName("body")[0];

body.addEventListener("load", init(), false);

function init() {
        alert("it works!");
};



// let meinDiv = document.getElementById( "accordion" );
// window.addEventListener( "load", bodyDingens );
// function bodyDingens() {
//     alert( "tewrt" );
//     let meinH3 = document.createElement( "h3" );
//     meinH3.innerHTML = "Test";
//     meinDiv.appendChild( meinH3 );
// }
// let listen1 = document.getElementsByTagName("body");
// let listen2 = document.getElementById( "myBody" );
// window.addEventListener("load", addSection);
// window.addEventListener("load", addSection);
// document.getElementById( "myBody" )
// window.addEventListener("click", alertTest)

document.body.addEventListener("load", alertTest)
function alertTest(){ alert( "TEST" ); }
// function addSection(){
//         alert( "tewrt" );
//         let tmpElementTitle = document.createElement("h3");
//         tmpElementTitle.innerHTML = "test";

//         // let tmpElementSection = document.createElement("div");
//         // let tmpElementText = document.createTextNode("Organisation");

//         // tmpElementSection.appendChild(tmpElementText);
//         // tmpElementTitle.appendChild(tmpElementSection);

//         document.getElementById("accordion").appendChild(tmpElementTitle);
// }