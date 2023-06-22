//task 1
$('h2.head').addClass('green-background');
$('h2.head .inner').addClass('font-size-35');

//task 2
$('a[href^="https://"]').attr('target', '_blank');

//task 3
$('h3 + div').each(function() {
    $(this).insertBefore($(this).prev('h3'));
});

//task 4
$(document).ready(function() {
    $('.checkbox').change(function() {
        let checkedCount = $('.checkbox:checked').length;
        if (checkedCount >= 3) {
            $('.checkbox').not(':checked').prop('disabled', true);
        } else {
            $('.checkbox').prop('disabled', false);
        }
    });
});
