// Select elements
const fileInput = document.getElementById("file-input");
const readerContainer = document.getElementById("reader");

// Initialize ePub.js variables
let book, rendition;

fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file && file.name.endsWith(".epub")) {
    loadBook(file);
  } else {
    alert("Please upload a valid EPUB file.");
  }
});

function loadBook(file) {
  const reader = new FileReader();
  reader.onload = function (e) {
    try {
      // Destroy previous instance if it exists
      if (book) {
        book.destroy();
      }

      // Load the new book
      book = ePub(e.target.result);
      rendition = book.renderTo("reader", {
        width: "100%",
        height: "100%",
      });

      // Display the first chapter
      rendition.display();

      console.log("Book loaded successfully.");
    } catch (error) {
      console.error("Error loading book:", error);
      alert("Failed to load eBook. Please check the console for details.");
    }
  };

  reader.onerror = function (e) {
    console.error("File could not be read:", e);
    alert("Failed to read file. Please try again.");
  };

  reader.readAsArrayBuffer(file);
}

// Optional: Handle keyboard navigation (e.g., left/right arrows)
document.addEventListener("keydown", (event) => {
  if (rendition) {
    if (event.key === "ArrowRight") {
      rendition
        .next()
        .catch((error) => console.error("Error going to next page:", error));
    } else if (event.key === "ArrowLeft") {
      rendition
        .prev()
        .catch((error) =>
          console.error("Error going to previous page:", error)
        );
    }
  }
});
