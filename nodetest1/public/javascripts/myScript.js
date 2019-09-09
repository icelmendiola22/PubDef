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
// Edit Row for Activity Log tab
function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";

 var user=document.getElementById("user_row"+no);
 var date=document.getElementById("date_row"+no);
 var des=document.getElementById("des_row"+no);

 var user_data=user.innerHTML;
 var date_data=date.innerHTML;
 var des_data=des.innerHTML;

 user.innerHTML="<input type='text' id='user_text"+no+"' value='"+user_data+"'>";
 date.innerHTML="<input type='text' id='date_text"+no+"' value='"+date_data+"'>";
 des.innerHTML="<input type='text' id='des_text"+no+"' value='"+des_data+"'>";
}

// Save Row for Activity Log tab
function save_row(no)
{
 var user_val=document.getElementById("user_text"+no).value;
 var date_val=document.getElementById("date_text"+no).value;
 var des_val=document.getElementById("des_text"+no).value;

 document.getElementById("user_row"+no).innerHTML=user_val;
 document.getElementById("date_row"+no).innerHTML=date_val;
 document.getElementById("des_row"+no).innerHTML=des_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

// Delete Row for Activity Log tab
function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

// Add Row for Activity Log tab
function add_row()
{
 var new_user=document.getElementById("new_user").value;
 var new_date=document.getElementById("new_date").value;
 var new_des=document.getElementById("new_des").value;

 var d = new Date()
 var new_date = d.toDateString()

 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='user_row"+table_len+"'>"+new_user+"</td><td id='date_row"+table_len+"'>"+new_date+"</td><td id='des_row"+table_len+"'>"+new_des+"</td><td><input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 var d = new Date()
 var date = d.toDateString()

 document.getElementById("new_user").value="";
 document.getElementById("new_date").value= date;
 document.getElementById("new_des").value="";
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
