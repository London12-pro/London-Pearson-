import { auth } from '../firebase_1/firebase-init.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Sign up user
export async function signUp(email, password) {
  try {
    const userCred = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User signed up:", userCred.user.uid);
  } catch (error) {
    console.error("Signup error:", error.message);
  }
}

// Login user
export async function login(email, password) {
  try {
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in:", userCred.user.uid);
  } catch (error) {
    console.error("Login error:", error.message);
  }
}
