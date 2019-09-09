//Get the button
var mybutton = document.getElementById("topBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Edit button for AB109 form
function handleEdit() {
  document.getElementById('inputDate').disabled = false;
  document.getElementById('checkbox1').disabled = false;
  document.getElementById('checkbox2').disabled = false;
  document.getElementById('checkbox3').disabled = false;
  document.getElementById('checkbox4').disabled = false;
  document.getElementById('checkbox5').disabled = false;
  document.getElementById('inputCDCNumber').disabled = false;
  document.getElementById('inputBookingNumber').disabled = false;
  document.getElementById('inputName1').disabled = false;
  document.getElementById('inputName2').disabled = false;
  document.getElementById('inputName3').disabled = false;
  document.getElementById('inputPhoneNumber').disabled = false;
  document.getElementById('radio1').disabled = false;
  document.getElementById('radio2').disabled = false;
  document.getElementById('inputAltContactNumber').disabled = false;
  document.getElementById('inputAltContactName').disabled = false;
  document.getElementById('inputAltContactRelationship').disabled = false;
  document.getElementById('inputClientEmail').disabled = false;
  document.getElementById('inputAddressStreet').disabled = false;
  document.getElementById('inputAddressCity').disabled = false;
  document.getElementById('inputAddressState').disabled = false;
  document.getElementById('inputAddressZipcode').disabled = false;
  document.getElementById('inputBirthday').disabled = false;
  document.getElementById('inputBirthCity').disabled = false;
  document.getElementById('inputBirthState').disabled = false;
  document.getElementById('inputBirthCounty').disabled = false;
  document.getElementById('inputBirthHospital').disabled = false;
  document.getElementById('inputBirthCountry').disabled = false;
  document.getElementById('inputID').disabled = false;
  document.getElementById('inputSocialSecurity').disabled = false;
  document.getElementById('inputProgram').disabled = false;
  document.getElementById('inputTimeLeft').disabled = false;
  document.getElementById('inputMotherName').disabled = false;
  document.getElementById('inputFatherName').disabled = false;
  document.getElementById('checkbox6').disabled = false;
  document.getElementById('checkbox7').disabled = false;
  document.getElementById('checkbox8').disabled = false;
  document.getElementById('checkbox9').disabled = false;
  document.getElementById('checkbox10').disabled = false;
  document.getElementById('checkbox11').disabled = false;
  document.getElementById('checkbox12').disabled = false;
  document.getElementById('checkbox13').disabled = false;
  document.getElementById('checkbox14').disabled = false;
  document.getElementById('checkbox15').disabled = false;
  document.getElementById('checkbox16').disabled = false;
  document.getElementById('checkbox17').disabled = false;
  document.getElementById('checkbox18').disabled = false;
  document.getElementById('checkbox19').disabled = false;
  document.getElementById('checkbox20').disabled = false;
  document.getElementById('checkbox21').disabled = false;
  document.getElementById('inputNotes').disabled = false;

  document.getElementById('btnEdit1').hidden = true;
  document.getElementById('btnSubmit1').hidden = false;
  document.getElementById('btnEdit2').hidden = true;
  document.getElementById('btnSubmit2').hidden = false;

  return false;
}
