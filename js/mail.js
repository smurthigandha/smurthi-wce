document
  .getElementById("contactForm-1")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "royjayroy00@gmail.com",
      Password: "343F2FDB45479E495BEF59D392EE82875AC7",
      To: "mayuruikey5678@gmail.com",
      From: "royjayroy00@gmail.com",
      Subject: "Awebsite.com Contact Form",
      Body:
        "Name: " +
        document.getElementById("from-name-1").value +
        "<br>" +
        "Email: " +
        document.getElementById("from-email-1").value +
        "<br>" +
        "Subject: " +
        document.getElementById("from-subject-1").value +
        "<br>" +
        "Comments: " +
        document.getElementById("from-comment-1").value,
    }).then((message) => alert(message));
  });
