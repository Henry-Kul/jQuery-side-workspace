$(function () {
  $("#form").submit(function () {
    var name = $("#name").val();
    var password = $("#password").val();
    var message = $("#message").val();
    var checked = $("#checkbox").is(":checked");

    validateNameField(name, event);
    validatePasswordField(password, event);
    validateMessageField(message, event);
    validateCheckboxField(checked, event);
    // validatePasswordField(password, event);
    // validateMessageField(message, event);
    // validateCheckBox(event);
  });
});

function isValidName(name) {
  return name.length >= 2;
}

function isValidPassword(password) {
  return password.length >= 6 && /.*[0-9]*/.test(password);
}

function isValidMessage(message) {
  return message.trim() != "";
}

/*
function isValidPassword(password) {
  return password.length >= 8;
}

function isValidMessage(message) {
  return name.length >= 8;
}
*/

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

/*function validatePasswordField(password, event) {
  if (!isValidPassword(password)) {
    $("#password-feedback").text("Please enter at least eight characters");
    event.preventDefault();
  } else {
    $("#password-feedback").text("");
  }
}

function validateMessageField(message, event) {
  if (!isValidMessage(message)) {
    $("#message-feedback").text("Please enter at least eight characters");
    event.preventDefault();
  } else {
    $("#message-feedback").text("");
  }
}

function validateCheckBox(event) {
  if ($("#checkbox").is(":checked")) {
    event.preventDefault();
  }
}
*/
