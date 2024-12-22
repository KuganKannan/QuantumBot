function checkEmotion(emotion) {
  const response = document.getElementById("response");
  switch (emotion) {
    case "happy":
      response.textContent = "That's wonderful! Keep spreading joy!";
      break;
    case "sad":
      response.textContent =
        "I'm here for you. It's okay to feel sad sometimes. Why not watch this video? (https://www.youtube.com/watch?v=hBzP8MtJf04)";
      break;
    case "anxious":
      response.textContent = "Take a deep breath. Everything will be alright.";
      break;
    case "angry":
      response.textContent =
        "It's good to acknowledge your feelings. Try some relaxation techniques.";
      break;
    case "tired":
      response.textContent = "Remember to rest. Self-care is important!";
      break;
    default:
      response.textContent =
        "I'm here to listen to you. Why not check if QuantumBot can help you?";
  }
}
