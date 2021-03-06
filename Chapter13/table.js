/**
 * Date: Fri Jun 17 16:44:18 2016
 * @auther: Rujie Jiang jrjbear@gmail.com
 * @fileoverview Generate a table and insert it into DOM
 */

function buildTable(data) {
    if (data.length == 0) {
        return;
    }
    var table = document.createElement('table');
    var row = document.createElement('tr');
    var fields = Object.keys(data[0]);
    fields.forEach(function(name) {
        var th = document.createElement('th');
        th.textContent = name.charAt(0).toUpperCase() + name.substr(1);
        row.appendChild(th);
    });
    table.appendChild(row);

    // The order of keys returned by Object.keys is same as forEach
    data.forEach(function(obj) {
        var tr = document.createElement('tr');
        fields.forEach(function(key) {
            var td = document.createElement('td');
            var value = obj[key];
            td.textContent = value;
            if (typeof value == 'number') {
                td.style.textAlign = 'right';
            }                
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });
                 
    return table;
}

var MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
    {name: "Everest", height: 8848, country: "Nepal"},
    {name: "Mount Fuji", height: 3776, country: "Japan"},
    {name: "Mont Blanc", height: 4808, country: "Italy/France"},
    {name: "Vaalserberg", height: 323, country: "Netherlands"},
    {name: "Denali", height: 6168, country: "United States"},
    {name: "Popocatepetl", height: 5465, country: "Mexico"}
];

var table = buildTable(MOUNTAINS);
document.body.appendChild(table);

