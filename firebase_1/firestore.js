import { db } from '../firebase_1/firebase-init.js';
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const usersRef = collection(db, "users");

// Create
export async function createUserData(userId, data) {
  await addDoc(usersRef, { userId, ...data });
}

// Read
export async function readUsers() {
  const snapshot = await getDocs(usersRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

// Update
export async function updateUser(docId, data) {
  const userDoc = doc(db, "users", docId);
  await updateDoc(userDoc, data);
}

// Delete
export async function deleteUser(docId) {
  const userDoc = doc(db, "users", docId);
  await deleteDoc(userDoc);
}
