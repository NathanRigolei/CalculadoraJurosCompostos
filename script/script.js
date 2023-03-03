let inpInit = document.getElementById("value-init");
let inpRate = document.getElementById("value-rate");
let inpMth = document.getElementById("value-mth");
let result = document.getElementById("result");
let valorNumerico = 0;

function formatMol(input) {
  let valueMol = input.value.replace(/\D/g, "");
  let formatMol = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  input.value = formatMol.format(valueMol / 100);
  valueNumber = parseFloat(
    input.value.replace(/[^\d,]/g, "").replace(",", ".")
  );
}

function calc() {
  let init = valueNumber;
  let rate = inpRate.value / 100;
  let mth = inpMth.value;
  let juCom = init * (1 + rate) ** mth;
  let rateTotal = juCom - init;

  const ratet = rateTotal;
  const valueFormat = Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(init);
  const number = juCom;
  result.innerHTML = number.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  intires.innerHTML = valueFormat;
  rateres.innerHTML = ratet.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  document.querySelector("#displno").style.display = "inline";
}
