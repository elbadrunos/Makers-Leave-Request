nexigo.widget({
    text: 'Grid',
    views: [{
        type: 'panel',
        text: 'Basic Grid',
        name: 'SinglePanel',
        fields: [{
            type: 'grid',
            name: 'sampleGrid',
            data: sampleData,
            toolbar: ['create'],
            onClick: function (evt, idx, row) {
                console.log(evt);
                console.log(idx);
                console.log(row);
            },
            onDataBound: function (e) {
                console.log(e);
            },
            options: {
                pageSize: 10,
                sortable: true,
                editable: true,
                // pageable: false,
                // showAggregates: true,
                selectionMode: 'singlerow',
                // freezeColumn: ['ProductName'],
                // autorowheight: true,
                autoheight: true,
                groupable: true,
                altrows: true,
            },
            fields: [{
                name: 'ProductName',
                text: 'Product Name',
                type: 'string',
            }, {
                name: 'Quantity',
                text: 'Qty',
                type: 'numeric',
                // aggregates: [{'Total': function(total, currentValue) {
                //     return total+currentValue;
                // }}]
            }, {
                name: 'ExpiredDate',
                text: 'Expired Date',
                type: 'date',
            }, {
                name: 'Status',
                text: 'Status',
                headerAlignment: 'center',
                alignment: 'center',
                cellsRenderer: function (row, columnfield, value, defaulthtml, columnproperties) {
                    var prefix = defaulthtml.substr(0, defaulthtml.indexOf('>') + 1);
                    var suffix = defaulthtml.substr(defaulthtml.indexOf('</'));
                    var html = '';
                    html += '<div style="width: 100%;">';
                    html += 'CUSTOM CONTENT';
                    html += '</div>';
                    return prefix + html + suffix;
                }
            }, {
                name: 'Image',
                text: 'Image',
                type: 'link',
            }, {
                name: 'Info',
                text: 'Info',
                type: 'button',
                width: 80,
                cssClass: 'xg-btn-info',
                action: 'InfoButton'
            },]
        }]
    }],
    functions: {
        LinkClicked: function (url) {
            alert('Clicked URL: ' + url);
        },
        InfoButton: function (btn) {
            xg.message('Show row info');
        },
        ActionButton: function (btn, url) {
            xg.message('Action url: ' + url);
        }
    }
});