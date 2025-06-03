import { storage } from './firebase-config.js';
import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-storage.js";

document.getElementById('uploadBtn').addEventListener('click', async () => {
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];

  if (!file) {
    alert("Please choose a file first.");
    return;
  }

  const storageRef = ref(storage, 'uploads/' + file.name);

  try {
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);

    document.getElementById('uploadStatus').textContent = "Upload successful!";
    const img = document.getElementById('uploadedImage');
    img.src = downloadURL;
    img.style.display = "block";
  } catch (error) {
    console.error("Upload failed:", error);
    document.getElementById('uploadStatus').textContent = "Upload failed.";
  }
});
