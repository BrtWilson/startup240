function loadBagItems() {
    let bagItems = [];
    const bagItemsText = localStorage.getItem('bagItems');
    if (bagItemsText) {
        bagItems = JSON.parse(bagItemsText);
    }

    const tableBodyEl = document.querySelector('#bag_items_list');

    if (bagItems.length) {
        for (const [i, item] of bagItems.entries()) {
            const iconTdEl = document.createElement('td');
            const nameEl = document.createElement('td');
            const descTdEl = document.createElement('td');

            iconTdEl.textContent = item.icon; // todo: make image
            nameEl.textContent = item.name;
            descTdEl.textContent = item.level;
            
            const rowEl = document.createElement('tr');
            rowEl.appendChild(iconTdEl);
            rowEl.appendChild(nameEl);
            rowEl.appendChild(descTdEl);
            
            tableBodyEl.appendChild(rowEl);
        }
    }
    else {
        tableBodyEl.innerHTML = '<tr><td colSpan=4>Your bag is empty!</td></tr>';
    }
}

loadBagItems();