function Quadrat() {
    let Eingabe  = document.getElementById('Eingabe');
    lt Ergebnis = Eingabe.value * Eingabe.value;
    alert('Das Quadrat von ' + Eingabe.value + ' = ' + Ergebnis);
    Eingabe.value = 0;
   }
  
  let los  = document.getElementById('los');
  los.addEventListener ('click', Quadrat, true);