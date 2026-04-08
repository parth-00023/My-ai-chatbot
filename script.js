async function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  const userText = input.value;
  input.value = "";

  chatBox.innerHTML += `<p><b>You:</b> ${userText}</p>`;

  const response = await fetch("http://localhost:3000/chat", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ message: userText })
  });

  const data = await response.json();
  chatBox.innerHTML += `<p><b>AI:</b> ${data.reply}</p>`;
}
