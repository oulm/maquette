new DataTable("#example", {
    dom: 'Bfrtip',
    buttons: [
      'copy', 'csv', 'excel', 'pdf', 'print'
    ],
    lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
    pageLength: 5,
    order: [[0, "asc"]],
    language: {
      url: "//cdn.datatables.net/plug-ins/1.10.25/i18n/English.json"
    },
    columnDefs: [
      { "orderable": false, "targets": [3, 4] }
    ],
    rowCallback: function(row, data, index){
      // Apply the dark theme to the row
      var cells = row.getElementsByTagName('td');
      for (var i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = 'black';
        cells[i].style.borderColor = 'gray';
      }
    }, 
    responsive: true
  });


