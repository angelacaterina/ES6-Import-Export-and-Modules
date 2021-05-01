import React from "react";
import ReactDOM from "react-dom";

/** singola esportazione prefefinita e integrazione di funzioni specifiche
 * l'esportazione prefedinita può essere importata con qualsiasi nome assegnato all'interno di un altro file
 */
import PI, { doublePi, triplePi } from "./math";

ReactDOM.render(
  <ul>
    <li>{PI}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>,
  document.getElementById("root")
);

/** importazione Jolly (utilizzo sconsigliato )
 * import * as pi from "./math";
 * ReactDOM.render(
    <ul>
      <li>{pi.default}</li>
      <li>{pi.doublePi()}</li>
      <li>{pi.triplePi()}</li>
    </ul>,
    document.getElementById("root")
  );

 * importiamo tutto ciò che è presente nel file math.js, utilizzando * e dandogli un nome "pi" per poterlo utilizzare.
 * "pi" è un oggetto che ha determinate proprietà, in questo caso ha due funzioni doublePi e triplePi, e ha una proprietà predefinita.
 */
