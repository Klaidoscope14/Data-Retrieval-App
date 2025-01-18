function saveText() {
    const textInput = document.getElementById("text-input").value;
    localStorage.setItem('savedtext', textInput);
    document.getElementById('text-input').value = '';
  }

  function RetrieveText() {
    const savedText = localStorage.getItem('savedtext');

    if (savedText) {
      document.getElementById('output').textContent = savedText;
    } else {
      document.getElementById('output').textContent = "No Saved Text";
    }
  }