const sendBtn = document.getElementById("sendBtn");
const input = document.getElementById("message");

sendBtn.addEventListener("click", () => {
  let msg = encodeURIComponent(input.value); // safe URL text
  if (msg.trim() !== "") {
    // Apna number yahan likho
    let phone = "923378613278";  
    let url = `https://wa.me/${phone}?text=${msg}`;
    window.open(url, "_blank"); // WhatsApp chat open
  }
});
