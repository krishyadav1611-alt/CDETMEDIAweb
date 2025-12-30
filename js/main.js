document.addEventListener("submit", function (e) {
  if (e.target.id === "submitForm") {
    e.preventDefault();
    alert("Submission received. CDET MEDIA will contact you if selected.");
    e.target.reset();
  }
});
