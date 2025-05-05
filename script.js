function showMessage(type) {
    // Hide all messages
    document.getElementById('message-sorry').style.display = 'none';
    document.getElementById('message-stupid').style.display = 'none';
    document.getElementById('message-forgive').style.display = 'none';
    
    // Show the clicked message
    document.getElementById(`message-${type}`).style.display = 'block';
  }
  