xg.widget({
    text:'Leave Request Form',
    views: [{
            name: 'panel1',
            text: 'Leave Details',
            inline: true,
//ROW 1
            fields: [
                {
                    type: 'fieldRow',
                    fields: [
                        {
                            name: 'select_normal',
                            text: 'Leave Type',
                            type: 'select',
                            cols: 5,
                            tooltip: 'Media list',
                            data: 'api/select/media',
                            onChange: function (val, text) {
                                xg.call('Log', 'Value changed - ' + val + ' - ' + text);
                            }
                        },
                        { name: 'Balance', text: 'Balance', cols: 2 },
                    ]
                },
//ROW 2
                {
                    type: 'fieldRow',
                    fields: [
                        { name: 'BirthDate', text: 'Start Date', type: 'picker', cols: 5, format: 'DD-MMM-YYYY' },
                        { name: 'BirthDate', text: 'End Date', type: 'picker', cols: 5, format: 'DD-MMM-YYYY' },
                    ]
                },
//ROW 3
                {
                    type: 'fieldRow',
                    fields: [
                        {
                                    name: 'select_normal',
                                    text: 'Days',
                                    type: 'select',
                                    cols: 2,
                                    tooltip: 'Media list',
                                    data: 'api/select/media',
                                    onChange: function (val, text) {
                                        xg.call('Log', 'Value changed - ' + val + ' - ' + text);
                                    }
                        },
                        {
                            name: 'select_normal',
                            text: 'Days',
                            type: 'select',
                            cols: 2,
                            tooltip: 'Media list',
                            data: 'api/select/media',
                            onChange: function (val, text) {
                                xg.call('Log', 'Value changed - ' + val + ' - ' + text);
                            }
                        },
                            ]
                },
////////////////////////-------------------------- ROW 4 --------------------------////////////////////////
                { name: 'Balance', text: 'Number Of Days Leave', cols: 2 },
////////////////////////-------------------------- ROW 5 --------------------------////////////////////////
                { name: 'Summary', text: 'Summary', type: 'textarea' },
////////////////////////-------------------------- ROW 5 --------------------------////////////////////////
                { name: 'Balance', text: 'Submission Date', cols: 6 },
////////////////////////-------------------------- Button--------------------------////////////////////////
                {
                    type: 'buttons',
                    buttons: [
                        { name: 'save', text: 'Submit', icon: 'fa-save', cssClass: 'xg-btn-info' },
                        { name: 'undo', text: 'Reset', icon: 'fa-undo', cssClass: 'xg-btn-danger' },
                    ]
                }
            ]
        }]

})