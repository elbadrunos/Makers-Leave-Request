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
                cols: 6,
                disabled: true,
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
                cols: 6,
                disabled: true,
            }]
        }, {
            type: 'fieldRow',
            fields: [{
                name: 'BasicText4',
                text: 'Location',
                cols: 6,
                disabled: true,
            }, {
                name: 'BasicText5',
                text: 'Joined Date',
                cols: 6,
                disabled: true,
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
                        placeholder: 'Please Select Leave Type',
                        disabled: true,
                        tooltip: 'Media list',
                        data: [
                            {
                                value: 'value1',
                                text: 'Annual Leave'
                            },
                            {
                                value: 'value2',
                                text: 'Maternity Leave'
                            },
                            {
                                value: 'value3',
                                text: 'Menstruation Leave',
                            },
                            {
                                value: 'value4',
                                text: 'Employees marriage Leave',
                            },
                            {
                                value: 'value5',
                                text: 'Marriage of Employees children',
                            },
                            {
                                value: 'value6',
                                text: 'Demise of wife / husband / child / parents / parents in-law',
                            },
                            {
                                value: 'value7',
                                text: 'Circumcision/Baptism of the Employees children',
                            },
                            {
                                value: 'value8',
                                text: 'Maternity of Employees wife',
                            },
                            {
                                value: 'value9',
                                text: 'Demise of Employees grandfather / grandmother',
                            },
                            {
                                value: 'value10',
                                text: 'Demise of sibling and / or family member registered in the Family Card',
                            },
                            {
                                value: 'value11',
                                text: 'Hajj (First time)',
                            },
                            {
                                value: 'value12',
                                text: 'Request from Government / Court / Police',
                            },
                            {
                                value: 'value13',
                                text: 'Medical Leave',
                            }

                        ],
                        onChange: function (val, text) {
                            xg.call('Log', 'Value changed - ' + val + ' - ' + text);
                        }
                    },
                    { name: 'Balance', text: 'Balance', cols: 2, disabled: true },
                ]
            },
            //ROW 2
            {
                type: 'fieldRow',
                fields: [
                    { name: 'BirthDate', text: 'Start Date', type: 'picker', cols: 5, format: 'DD-MMM-YYYY', readonly: true, },
                    { name: 'BirthDate', text: 'End Date', type: 'picker', cols: 5, format: 'DD-MMM-YYYY', readonly: true, },
                ]
            },
            //ROW 3
            {
                type: 'fieldRow',
                fields: [
                    {
                        name: 'select_normal2',
                        text: 'Days',
                        type: 'select',
                        cols: 3,
                        disabled: true,
                        placeholder: 'Please Select Day',
                        data: [{
                            value: 'days1',
                            text: '1 Day',
                        }, {
                            value: 'days2',
                            text: '0.5 Day',
                        }, {
                            value: 'days3',
                            text: '0.25 Day',
                        }
                        ],
                        onChange: function (val, text) {
                            xg.call('Log', 'Value changed - ' + val + ' - ' + text);
                        }
                    },
                ]
            },
            ////////////////////////-------------------------- ROW 4 --------------------------////////////////////////
            { name: 'Balance', text: 'Number Of Days Leave', cols: 2, disabled: true },
            ////////////////////////-------------------------- ROW 5 --------------------------////////////////////////
            { name: 'Summary', text: 'Remarks', type: 'textarea', readonly: true },
            ////////////////////////-------------------------- ROW 5 --------------------------////////////////////////
            { name: 'Balance', text: 'Submission Date', cols: 4, disabled: true },
            ////////////////////////-------------------------- Button--------------------------////////////////////////
            {
                type: 'panel',
                inline: true,
                name: 'SinglePanel',
                text: 'Leave Approval',
                collapsible: true,
                fields: [
                    {
                        name: 'select_normal',
                        text: 'Action',
                        type: 'select',
                        cols: 4,
                        tooltip: 'Media list',
                        data: [{
                            value: 'action1',
                            text: 'Approve',
                        }, {
                            value: 'action2',
                            text: 'Reject',
                        }
                        ],
                        onChange: function (val, text) {
                            xg.call('Log', 'Value changed - ' + val + ' - ' + text);
                        }
                    },
                    { name: 'Summary', text: 'Approval Remarks', type: 'textarea' },
                    { name: 'Balance', text: 'Approval Date', cols: 4 },
                    {
                        type: 'buttons',
                        buttons: [
                            { name: 'save', text: 'Submit', icon: 'fa-save', cssClass: 'xg-btn-info' },
                            { name: 'undo', text: 'Reset', icon: 'fa-undo', cssClass: 'xg-btn-danger' },
                        ]
                    }


                ]
            }
        ]

    }],
    functions: {
        init: function () {
            xg.ajax({
                url: 'http://localhost:31602/api/Example/GetText',
                type: 'GET',
                data: 'text'
            }).done(function (resp, status, xhr) {
                //console.log('resp', resp, 'status', status, 'xhr', xhr);
                xg.populate({
                    undefined: resp
                })
            }).fail(function (err) {
                console.error(err);
            });
        },
        goToProfile: function () {

        },
        signOut: function () {

        },
        doubleClick: function (row) {
            alert(row);
        },
        hideGrid: function () {
            $('[xg-field="gridCustomer"]').hide();
        },
        showGrid: function () {
            $('[xg-field="gridCustomer"]').show();
        },
        hideRow: function () {
            xg.hideRow('undefinedRow');
        },
        showRow: function () {
            xg.showRow('undefinedRow');
        }
    }
});