nexigo.widget({
    text: 'Supervisor Page',
    toolbars: [
        {
            text: 'Profile',
            action: 'goToProfile'
        },
        {
            text: 'Sign Out',
            action: 'signOut'
        }
    ],
    views: [
        {
            type: 'panel',
            text: 'Leave Request Task List',
            fields: [
                {
                    type: 'grid',
                    text: 'Grid',
                    name: 'gridCustomer',
                    dblClick: 'doubleClick',
                    fields: [
                        {
                            name: 'StaffId',
                            text: 'Staff Id',
                            type: 'text',
                        },
                        {
                            name: 'Name',
                            text: 'Nama',
                            type: 'text',
                        },
                        {
                            name: 'LeaveType',
                            text: 'Leave Type',
                            type: 'text',
                        },
                        {
                            name: 'SubmissionDate',
                            text: 'Submission Date',
                            type: 'text',
                        },
                        {
                            name: 'Action',
                            text: 'Action',
                            type: 'text',
                        }
                    ],

                    data: [
                        {
                            StaffId: '1',
                            Name: 'Razak',
                            LeaveType: 'Annual Leave',
                            SubmissionDate: '10-07-2017',
                            Action:'View Details'
                        },
                        {
                            StaffId: '2',
                            Name: 'Galih',
                            LeaveType: 'Medical Leave',
                            SubmissionDate: '11-07-2017',
                            Action: 'View Details'
                        }
                    ]
                }
            ]
        }
    ],
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