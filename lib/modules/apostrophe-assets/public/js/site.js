$(function () {
    // Start with your project-level client-side javascript here.
    // JQuery and lodash (_) are both included with Apostrophe, so no need to
    // worry about including them on your own.


    var regForm = $("#registerForm");

    if (regForm[0]) {

        regForm.submit(function () {
            console.log("Submit called");
            $.post('/modules/registration/submit', regForm.serialize(), function (result) {
                console.log("Registration submitted");
                console.log(result);

                $(".alert").remove();

                if (result.success) {
                    setTimeout(function () {
                        window.location.href = '/login';
                    }, 2000);
                    $("#errorContainer").append(
                        "<div class=\"alert alert-dismissible alert-success\">\n" +
                        "  <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n" +
                        "  User successfully created!\n" +
                        "</div>"
                    )
                } else {

                    result.errors.forEach(function (error) {

                        $("#errorContainer").append(
                            "<div class=\"alert alert-dismissible alert-danger\">\n" +
                            "    <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n" +
                            error +
                            "  </div>"
                        )

                    });

                }

                $("#errorContainer").append("<br>");

            });
            return false;
        });

    }


});
