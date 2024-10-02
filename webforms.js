function validateInputForm(form){
  let reqDatePattern= /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;

  if (!reqDatePattern.test(form.ReqDate.value)){
    alert("Invalid request date. Please enter a valid date in mm/dd/yyyy format.")
    form.ReqDate.focus();
    return false;
  }

  let empIDPattern= /^[A-Z][0-9]{5}$/;
  if (!empIDPattern.test(form.EmpID.value)) {
    alert("Invalid employee ID. It should be capital letter followed by 5 digits.");
    form.EmpID.focus();
    return false;
  }
  
  let namePattern = /^[A-Z][a-zA-Z]*$/;
  if(!namePattern.test(form.FName.value)){
    alert("Invalid first name. It should start with a capital letter.");
    form.FName.foucus();
    return false;
  }
  
  if(!namePattern.test(form.LName.value)){
    alert("Invalid last name. It should start with a capital letter.");
    form.LName.focus();
    return false;
  }

  if (form.ProbDesc.value.trim() === "") {
    alert("Problem description is required.");
    form.ProbDesc.focus();
    return false;
  }
  // if all returns valid,
  
  return true;
}