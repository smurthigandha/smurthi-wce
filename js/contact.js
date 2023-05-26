function validateForm(event) {
  event.preventDefault();

  var name = document.getElementById("from-name-1").value;
  var email = document.getElementById("from-email-1").value;
  var subject = document.getElementById("from-subject-1").value;
  var comment = document.getElementById("from-comment-1").value;

  if (name === "" || email === "" || subject === "" || comment === "") {
    alert("Please fill in all the required fields.");
  } else {
    // Form submission logic here
    document.getElementById("contactForm-1").submit();

    // Clear the form fields
    document.getElementById("from-name-1").value = "";
    document.getElementById("from-email-1").value = "";
    document.getElementById("from-subject-1").value = "";
    document.getElementById("from-comment-1").value = "";
  }
}
