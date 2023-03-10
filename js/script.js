const nameInput = document.getElementById("name");
const kmInput = document.getElementById("km");

const generateBtn = document.getElementById("bottone")
generateBtn.addEventListener("click", function(){
  const name = nameInput.value;

  const km = parseInt(kmInput.value);

  const ageRange = ageRangeInput.value;

  // Calcolo offerta e costo del biglietto
  const basePrice = km * 0.21;
  let finalPrice = basePrice;
  let offer = "nessuna offerta;"

  if (ageRange === "minorenne"){
      finalPrice = basePrice -(basePrice * 20 / 100 );
      offer = "Under 18";
  } else if ( ageRange === "over65"){
      finalPrice = basePrice -( baseprice * 40 /100);
      offer = "Over 65";
  }
  // generazione  numero cabina
  const cabin = Math.floor(Math.random() 9*)+1;
    

  // STAMPIAMO IL PREZZO IN PAGINA
  document.getElementById("nome").innerHTML = `${name}`;
  document.getElementById("offerta applicata ").innerHTML = `${offer}`;
  document.getElementById("carrozza").innerHTML = `${cabin}`;
  document.getElementById("costo").innerHTML = `€${finalPrice.toFixed(2)}`;
})