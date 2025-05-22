import { storage } from '../firebase_1/firebase-init.js';
import {
  ref,
  uploadBytes,
  getDownloadURL
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js";

// Upload media
export async function uploadMedia(file, folder = "uploads") {
  const fileRef = ref(storage, `${folder}/${file.name}`);
  await uploadBytes(fileRef, file);
  return await getDownloadURL(fileRef);
}
