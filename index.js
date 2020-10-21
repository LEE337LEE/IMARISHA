  //form validation
  $("form#formInput").submit(function(event){

    let name = $("input#name").val();
    let email = $("input#email").val();
    let parent = $("input#parent").val();
    let gender = $("input#gender").val();
    let form = $("input#form1").val();
    let contact = $("input#contact").val();
    let town = $("input#town").val();
    let school = $("input#school").val();
    let reason = $("input#reason").val();
    let dateOfBirth = $("input#dateofbirth").val();
    let county = $("input#county").val();
   
    
    
    

    if ($("input#name").val() && $("input#email").val() &&  $("input#parent").val() &&  $("input#gender").val() ){
     
     
    alert (name + ", we have received your information. Thank you for reaching out to us.");
    }

    else {
      alert("Please complete filling the form!");
    };

    event.preventDefault();
  })