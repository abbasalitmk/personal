let submit = document.getElementById("submit");
submit.addEventListener("click", validateform);

function validateform() {
  let name = document.contact.name.value;
  let email = document.contact.email.value;
  let subject = document.contact.subject.value;
  let message = document.contact.message.value;

  if (name == "" && email == "" && message == "") {
    alert("field can't be blank");
  } else {
    $("#submit-form").submit((e) => {
      e.preventDefault();
      $.ajax({
        url: "https://script.google.com/macros/s/AKfycbw6vzxmQq6J5pSe5tF1DtBiMQJxOz37uG6KfMIeYdsfsZlYMi7JBxqXcYe1EnR2wGzb/exec",
        data: $("#submit-form").serialize(),
        method: "post",
        success: function (response) {
          alert("Form submitted successfully");
          window.location.reload();
          //window.location.href="https://google.com"
        },
        error: function (err) {
          alert("Something Error");
        },
      });
    });
  }
}
