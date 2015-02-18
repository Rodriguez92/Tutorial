var TableManaged = function () {

    var initTable1 = function () {

        var table = $('#tabla_noticias');

        // begin first table
        table.dataTable({

            // Internationalisation. For more info refer to http://datatables.net/manual/i18n
            "language": {
                "emptyTable": "No hay noticias registradas",
                "infoEmpty": "No hay noticias registradas",
                "infoFiltered": "(foltrados de _MAX_ registros totales)",
                "lengthMenu": "Mostrando _MENU_ entries",
                "search": "Buscar:",
                "zeroRecords": "No matching records found",
                "search": "Buscar: ",
                "lengthMenu": "  _MENU_ registros",
                "info": "Mostrados _START_ de _END_ de _TOTAL_ de registros",
                "paginate": {
                    "previous":"Prev",
                    "next": "Next",
                    "last": "Last",
                    "first": "First"
                }
            },

            // Uncomment below line("dom" parameter) to fix the dropdown overflow issue in the datatable cells. The default datatable layout
            // setup uses scrollable div(table-scrollable) with overflow:auto to enable vertical scroll(see: assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.js). 
            // So when dropdowns used the scrollable div should be removed. 
            //"dom": "<'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r>t<'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",

            "bStateSave": true, // save datatable state(pagination, sort, etc) in cookie.

            "columns": [
                {"orderable": true},
                {"orderable": true},
                {"orderable": true},
                {"orderable": true}
            ],
            "lengthMenu": [
                [5, 15, 20, -1],
                [5, 15, 20, "Todas"] // change per page values here
            ],
            // set the initial value
            "pageLength": 5,            
            "pagingType": "bootstrap_full_number",
            "columnDefs": [{  // set default column settings
                'orderable': false,
                'targets': [0]
            }, {
                "searchable": false,
                "targets": [0]
            }],
            "order": [
                [1, "asc"]
            ] // set first column as a default sort by asc
        });

        var tableWrapper = jQuery('#sample_1_wrapper');

        tableWrapper.find('.dataTables_length select').addClass("form-control input-xsmall input-inline"); // modify table per page dropdown
    }


    return {

        //main function to initiate the module
        init: function () {
            if (!jQuery().dataTable) {
                return;
            }

            initTable1();
        }

    };

}();