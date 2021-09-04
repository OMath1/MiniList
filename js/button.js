var button = document.querySelector("#btn-add");

button.addEventListener("click", function (event) {
  event.preventDefault();

  var form = document.querySelector("#form");
  var item = getItem(form);

  // add itens on table

  var errors = checkItem(item);

  if (errors.length > 0) {
    showErrorsMsg(errors);
    return;
  }

  var table = document.querySelector("#item-table");

  addItemOntable(item);

  form.reset();
});

function addItemOntable(item) {
  let itemTr = makeTr(item);
  let table = document.querySelector("#item-table");
  table.appendChild(itemTr);
}

function showErrorsMsg(errors) {
  let ul = document.querySelector("#error-msg");
  ul.innerHTML = "";

  errors.forEach(function (error) {
    let li = document.createElement("li");
    li.textContent = error;
    ul.appendChild(li);
  });
}

function getItem(form) {
  let item = {
    quantidade: form.quantidade.value,
    item: form.item.value,
  };
  return item;
}

function makeTr(item) {
  let itemTr = document.createElement("tr");
  itemTr.classList.add("item");

  itemTr.appendChild(makeTd(item.quantidade, "info-quantidade"));
  itemTr.appendChild(makeTd(item.item, "info-item"));

  return itemTr;
}

function makeTd(data, classe) {
  var td = document.createElement("td");
  td.textContent = data;
  td.classList.add(classe);

  return td;
}

function checkItem(item) {
  let errors = [];

  if (item.quantidade.length == 0) {
    errors.push("A quantidade não pode ficar em branco");
  }
  if (item.item.length == 0) {
    errors.push("Item não pode ficar em branco");
  }

  return errors;
}
