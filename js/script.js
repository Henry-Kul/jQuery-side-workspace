$(function () {
  var form = $("#form");
  enableFastFeedback(form);

  $("#form").submit(function () {
    var name = $("#name").val();
    var password = $("#password").val();
    var message = $("#message").val();
    var checked = $("#checkbox").is(":checked");

    validateNameField(name, event);
    validatePasswordField(password, event);
    validateMessageField(message, event);
    validateCheckboxField(checked, event);
  });
});

function isValidName(name) {
  return name.length >= 2;
}

function isValidPassword(password) {
  return password.length >= 6 && /.*[0-9].*/.test(password);
}

function isValidMessage(message) {
  return message.trim() != "";
}

function enableFastFeedback(formElement) {
  var nameInput = formElement.find("#name");
  var passwordInput = formElement.find("#password");
  var messageInput = formElement.find("#message");
  var checkboxInput = formElement.find("#checkbox");

  nameInput.blur(function (event) {
    var name = $(this).val();
    validateNameField(name, event);

    if (!isValidName(name)) {
      $(this).css({ "box-shadow": "0 0 4px #811", border: "1px sp;od #600" });
    } else {
      $(this).css({ "box-shadow": "0 0 4px #181", border: "1px sp;od #060" });
    }
  });

  passwordInput.blur(function (event) {
    var password = $(this).val();
    validatePasswordField(password, event);

    if (!isValidPassword(password)) {
      $(this).css({ "box-shadow": "0 0 4px #811", border: "1px sp;od #600" });
    } else {
      $(this).css({ "box-shadow": "0 0 4px #181", border: "1px sp;od #060" });
    }
  });

  messageInput.blur(function (event) {
    var message = $(this).val();
    validateMessageField(message, event);

    if (!isValidMessage(message)) {
      $(this).css({ "box-shadow": "0 0 4px #811", border: "1px sp;od #600" });
    } else {
      $(this).css({ "box-shadow": "0 0 4px #181", border: "1px sp;od #060" });
    }
  });

  checkboxInput.change(function (event) {
    var isChecked = $(this).is(":checked");
    validateCheckboxField(isChecked, event);

    if (!isChecked) {
      $(this).add("label[for='cb']").css({ "box-shadow": "0 0 4px #811", border: "1px sp;od #600" });
    } else {
      $(this).add("label[for='cb']").css({ "box-shadow": "0 0 4px #181", border: "1px sp;od #060" });
    }
  });
}

function validateNameField(name, event) {
  if (!isValidName(name)) {
    $("#name-feedback").text("Please enter at least two characters");
    event.preventDefault();
  } else {
    $("#name-feedback").text("");
  }
}

function validatePasswordField(password, event) {
  if (!isValidPassword(password)) {
    $("#password-feedback").text(
      "The password should have at least 6 characters and contain a number"
    );
    event.preventDefault();
  } else {
    $("#password-feedback").text("");
  }
}

function validateMessageField(message, event) {
  if (!isValidMessage(message)) {
    $("#message-feedback").text("Please enter a message");
    event.preventDefault();
  } else {
    $("#message-feedback").text("");
  }
}

function validateCheckboxField(isChecked, event) {
  if (!isChecked) {
    $("#checkbox-feedback").text("Please agree to this");
    event.preventDefault();
  } else {
    $("#checkbox-feedback").text("");
  }
}
