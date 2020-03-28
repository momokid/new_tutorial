$(function() {
  //Click event of the save button

  $('#interestRate').blur(function() {
    let fullName = $('#fullName').val();

    //Using vanilla javascript
    let fname = document.getElementById('fullName').value;

    let location = $('#location').val();
    let Principal = parseFloat($('#amount').val());
    let duration = parseInt($('#duration').val());
    let iRate = parseFloat($('#interestRate').val());
    //let iAmount = $('#interestAmount').val();

    let iAmount = (Principal * iRate * duration) / 100;
    alert;
    $('#interestAmount').val(iAmount);
  });

  //Javascript Event
  //click, blur, focus, keyUp, keyDown
  //Onclick, Onblur, Onfocus, Onchange,
});
