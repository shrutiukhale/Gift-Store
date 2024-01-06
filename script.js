// ORDER PLACEEE

function orderPlace() {
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var state = document.getElementById('state').value;
    var city = document.getElementById('city').value;
    var phone_no = document.getElementById('phone_no').value;

    if (email === '') {
        alert("Please Enter an E-mail ID");
        return false;
    }

    if (address === '') {
        alert("Please Enter Your address");
        return false;
    }

    if (fname === '') {
        alert("Please Enter Your First Name");
        return false;
    }

    if (lname === '') {
        alert("Please Enter Your Last Name");
        return false;
    }

    if (state === '') {
        alert("Please Enter Your State");
        return false;
    }

    if (City === '') {
        alert("Please Enter Your City");
        return false;
    }
    if (phone_no === '') {
        alert("Enter Phone Number");
        return false;
    }
    else {
        alert("Your Order Placed Successfully...");
        return false;
    }
}


// FEEDBACKKKKK
function feedback() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var phone_no = document.getElementById('phone_no').value;

    if(fname===''){
        alert('First Name is required');
        return false;
    }

    if(lname===''){
        alert('Last Name is required');
        return false;
    }
    if(email===''){
        alert('E-mail is required');
        return false;
    }

    if(phone_no===''){
        alert('Contact No. / phone no. is required');
        return false;
    }
    if(fname || lname || email || phone_no !== ''){
        alert('Thanks For Your Contact. Our team give you response on your mail Id As Soon As possible...');
    }


}