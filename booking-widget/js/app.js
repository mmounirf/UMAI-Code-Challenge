$(function() {
    $('.modal').modal('show');

    $('#datePicker').datetimepicker({
        format: 'L',
        defaultDate: new Date(),
    });
    
    
    $('#timePicker').datetimepicker({
        format: 'LT',
        defaultDate: new Date(),
    });

})