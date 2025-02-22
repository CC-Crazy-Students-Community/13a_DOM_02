/***** DOM und JavaScript II *******/

/* Webseite Ergänzen um 2. p + ul/li */
/* p-Tags mit id ergänzen / ersterText / zweiterText */

/* DOM-Suche mit IDs */
    console.log(document.getElementById("ersterText"))
    console.log(document.getElementById("ersterText").innerText)

    console.log(document.getElementById("zweiterText"))
    console.log(document.getElementById("zweiterText").innerText)

/* Neuen Text setzen */
    document.getElementById("ersterText").innerText = "hallo1";
    document.getElementById("zweiterText").innerText = "hallo2";

/*  ul/li */

/* DOM-Suche mit TagNamen */
    console.log(document.getElementsByTagName("li"))
    console.log(document.getElementsByTagName("li")[0])
    console.log(document.getElementsByTagName("li")[0].innerText)

/*  Neues <li></li> Element anlegen */
    let newLi = document.createElement("li");
    console.log(newLi);

// innerText / innerHTML anlegen / in Seite noch NICHT sichtbar
    newLi.innerText = "Topic 4";
    console.log(newLi.innerText);

// insertPoint (wo soll das Element eingefügt werden?)
    console.log(document.getElementsByTagName("ul")[0])
    let insertPoint = document.getElementsByTagName("ul")[0];
    console.log(insertPoint);

// Element in DOM "einhängen" / in Seite sichtbar
    insertPoint.appendChild(newLi)

/********************************************************/
/*******                Example 01                *******/
/********************************************************/
    newLi.style.color = "red";
    // ändert die Farbe des neuen Elements;
