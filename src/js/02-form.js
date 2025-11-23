const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

// 1️⃣ Sayfa yüklendiğinde localStorage'daki veriyi getir ve formu doldur
const savedData = localStorage.getItem(STORAGE_KEY);
let formData = savedData ? JSON.parse(savedData) : { email: "", message: "" };

emailInput.value = formData.email;
messageInput.value = formData.message;

// 2️⃣ Input delegasyonu: form üzerinde input eventini dinle
form.addEventListener("input", (event) => {
  const { name, value } = event.target;
  // sadece email veya message alanlarını güncelle
  formData[name] = value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// 3️⃣ Form submit
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  // Alanların dolu olup olmadığını kontrol et
  if (!email || !message) {
    alert("Both fields must be filled!");
    return;
  }

  // Konsola nesneyi yazdır
  console.log({ email, message });

  // Formu temizle
  form.reset();

  // localStorage temizle ve formData sıfırla
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: "", message: "" };
});
