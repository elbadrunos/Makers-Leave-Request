nexigo.widget({
    text: 'My Document',
    toolbars: [
        {
            text: 'Save',
            icon: 'fa-save',
            action: 'save'
        }
    ],
    views: [
        {
            name: 'panel1',
            type: 'panel',
            fields: [
                { name: 'inline', text: 'Inline Text', type: 'text', disabled: true, value:'Cobain' },
                { name: 'inline2', text: 'Inline Text', type: 'text' }
            ]
        },
        {
            type: 'panel',
            text: 'Grid panel',
            fields: [
                {
                    type: 'grid',
                    name: 'gridCustomer',
                    text: 'grid',
                    fields: [
                        {
                            name: 'Name',
                            text: 'Name',
                            type: 'text',
                        },
                        {
                            name: 'Address',
                            text: 'Alamat',
                            type: 'text',
                        }
                    ],
                    url: 'http://localhost:31602/api/Example/GetGridData'
                    //    , data: [
                    //    {
                    //        Name: 'Alfa',
                    //        Address: 'Jalan-jalan'
                    //    },
                    //    {
                    //        Name: 'Indo',
                    //        Address: 'Kuda-kuda'
                    //    }
                    //]
                },
                {
                    type: 'button',
                    text: 'Hide',
                    action: 'hideGrid'
                },
                {
                    type: 'button',
                    text: 'Show',
                    action: 'showGrid'
                }
            ]

        },
        {
            type: 'content',
            contents: [
                '<div>edit here</div>'
            ]
        }, {
            type: 'fieldRow',
            fields: [
                {
                    type: 'select',
                    name: 'dropdownList',
                    data: 'http://localhost:31602/api/Example/getSelect',
                    //data: [
                    //    {
                    //        value: 'val',
                    //        text: 'text1'
                    //    }
                    //],
                    onChange: function (val, text) {
                        alert(val + " " + text);
                    }
                }]
        }
    ],
    functions: {
        init: function () {
            xg.ajax({
                url: 'http://localhost:31602/api/Example/GetNumber',
                type: 'GET',
                data: 'text',
            }).done(function (resp, status, xhr) {
                xg.populate({
                    inline: resp
                })
            }).fail(function (err) {
                console.error(err);
            });

        },
        hideGrid: function () {
            $('[xg-field="gridCustomer"]').hide();
        },
        showGrid: function () {
            $('[xg-field="gridCustomer"]').show();
        }

    }
});