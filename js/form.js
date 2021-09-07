const button = document.querySelector("#btn-add");

button.addEventListener("click", function (event) {
  event.preventDefault();

  const form = document.querySelector("#form");
  const item = createItem(form);

  // add itens on table

  const errors = checkItem(item);

  if (errors.length > 0) {
    showErrorsMsg(errors);
    return;
  }

  var table = document.querySelector("#item-table");

  addItemOntable(item);

  form.reset();
});

function createItem(form) {
  let item = {
    quantidade: form.quantidade.value,
    item: form.item.value,
  };
  return item;
}

function checkItem(item) {
  let errors = [];
  if (item.quantidade.length == 0) {
    errors.push("quantidade não pode ficar em branco");
  }
  if (item.item.length == 0) {
    errors.push("Item não pode ficar em branco");
  }

  return errors;
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

function addItemOntable(item) {
  let itemTr = makeTr(item);
  let table = document.querySelector("#item-table");
  table.appendChild(itemTr);
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
