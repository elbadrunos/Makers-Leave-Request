nexigo.widget({
    text: 'Form Input Leave Request',
    toolbars: [{
        text: 'Alert',
        icon: 'fa-bolt',
        name: 'tAlert',
        action: 'Alert'
    }, {
        text: 'Refresh',
        icon: 'fa-refresh',
        name: 'tRefresh',
        action: 'Refresh'
    }, {
        name: 'tSave',
        icon: 'fa-save',
        action: 'Save'
    }],
    views: [{
        type: 'panel',
        inline: true,
        name: 'SinglePanel',
        text: 'Employee Information',
        collapsible: true,
        fields: [{
            type: 'fieldRow',
            fields: [{
                name: 'BasicText2',
                text: 'Name',
                cols: 6,
                disabled: true,
            }, {
                name: 'BasicText3',
                text: 'Staff Id',
                cols: 6
            }]
        }, {
            type: 'fieldRow',
            fields: [{
                name: 'BasicText2_2',
                text: 'Supervisor',
                disabled: true,
                cols: 6
            }, {
                name: 'BasicText3_2',
                text: 'Email',
                cols: 6
            }]
        }, {
            type: 'fieldRow',
            fields: [{
                name: 'BasicText4',
                text: 'Location',
                cols: 6
            }, {
                name: 'BasicText5',
                text: 'Joined Date',
                cols: 6
            }]
        }]
    }, {
            type: 'panel',
            inline: true,
            name: 'SinglePanel',
            text: 'Leave Details',
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
                        { name: 'BirthDate', text: 'End Date', type: 'picker', cols: 5, format: 'DD-MMM-YYYY'},
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
                    ]
                },
                ////////////////////////-------------------------- ROW 4 --------------------------////////////////////////
                { name: 'Balance', text: 'Number Of Days Leave', cols: 2 },
                ////////////////////////-------------------------- ROW 5 --------------------------////////////////////////
                { name: 'Summary', text: 'Remarks', type: 'textarea' },
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

        }],
    functions: {
        init: function (xg, callback) {
            callback();
        },
        Action1: function () {
            alert('Action called');
        },
        Refresh: function () {
            alert('Refresh action');
        },
        Alert: function () {
            alert('Alert');
        },
        Save: function () {
            alert('Save action');
        },
        Log: function (data) {
            $('[xg-field="TextLog"]').val($('[xg-field="TextLog"]').val() + data + '\n');
        }
    }
});