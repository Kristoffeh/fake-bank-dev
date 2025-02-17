    $(document).ready(function() {
    /*$('#login').on('click', function() {
        $("#login_form").show();
        $("#register_form").hide();
    });
    $('#register').on('click', function() {
        $("#register_form").show();
        $("#login_form").hide();
    });*/
    $('#btnreg').on('click', function(){
        $("#btnreg").attr("disabled", "disabled");
        var name = $('#name').val();
        var email = $('#email').val();
        var ssn = $('#ssn').val();
        var password = $('#password').val();

        if(name != "" && email != "" && ssn != "" && password != "" ){
            $.ajax({
                url: "save.php",
                type: "POST",
                data: {
                    type: 1,
                    name: name,
                    email: email,
                    ssn: ssn,
                    password: password                      
                },
                cache: false,
                success: function(dataResult){
                    var dataResult = JSON.parse(dataResult);
                    if(dataResult.statusCode==200){
                        $('#register_form').find('input:text').val('');

                        $("#error").hide();
                        $("#success").show();
                        $('#success').html('Registration successful.');
                    }
                    else if(dataResult.statusCode==201){
                    	$("#btnreg").removeAttr("disabled");

                        $("#success").hide();
                        $("#error").show();
                        $('#error').html('E-mail address already exists. Try another address.');
                    }
                }
            });
        }
        else{
            alert('Please fill all the fields!');
        }
    });
    $('#btncreateacc').on('click', function() {
        $("#btncreateacc").attr("disabled", "disabled");
        var accountname = $('#accountname').val();
        var accounttype = $('#accounttype').val();

        if(accountname != "" && accounttype != ""){
            $.ajax({
                url: "../save.php",
                type: "POST",
                data: {
                    type: 3,
                    accountname: accountname,
                    accounttype: accounttype
                },
                cache: false,
                success: function(dataResult){
                    var dataResult = JSON.parse(dataResult);
                    if(dataResult.statusCode==200){
                        $('#createaccount_form').find('input:text').val('');

                        $("#err").hide();
                        $("#succ").show();
                        $('#succ').html('Account successfully created.');
                    }
                    else if(dataResult.statusCode==201){
                        $("#btncreateacc").removeAttr("disabled");

                        $("#succ").hide();
                        $("#err").show();
                        $('#err').html('Something went wrong.');
                    }
                }
            });
        }
        else{
            alert('Please fill all the fields!');
        }
    });
    $('#btntransfer').on('click', function() {
        $("#btntransfer").attr("disabled", "disabled");
        var accountfrom = $('#accountfrom').val();
        var accountto = $('#accountto').val();
        var message = $('#message').val();
        var quantity = $('#qua').val();

        if(accountfrom != "" && accountto != ""){
            $.ajax({
                url: "../save.php",
                type: "POST",
                data: {
                    type: 4,
                    accountfrom: accountfrom,
                    accountto: accountto,
                    message: message,
                    quantity: quantity
                },
                cache: false,
                success: function(dataResult){
                    var dataResult = JSON.parse(dataResult);
                    if(dataResult.statusCode==200){
                        $('#transfer_form').find('input:text').val('');

                        $("#err").hide();
                        $("#trsuccess").show();
                        $('#trsuccess').html('Success');
                    }
                    else if(dataResult.statusCode==201){
                        $("#btntransfer").removeAttr("disabled");

                        $("#trsuccess").hide();
                        $("#trerror").show();
                        $('#trerror').html('Something went wrong.');
                    }
                }
            });
        }
        else{
            alert('Please fill all the fields!');
        }
    });
    $('#btnlogin').on('click', function() {
        var email = $('#email').val();
        var ssn = $('#ssn').val();
        var password = $('#password').val();

        if(email!="" && password!="" ){
            $.ajax({
                url: "save.php",
                type: "POST",
                data: {
                    type: 2,
                    email: email,
                    ssn: ssn,
                    password: password
                },
                cache: false,
                success: function(dataResult){
                    var dataResult = JSON.parse(dataResult);
                    if(dataResult.statusCode==200){
                        location.href = "portal/home.php";
                    }
                    else if(dataResult.statusCode==201){
                        $("#error").show();
                        $('#error').html('Invalid e-mail address, password or ssn');
                    }
                }
            });
        }
        else{
            alert('Please fill all the fields.');
        }
    });
});