# 📚 Task Management and Catalog Products

Aplikasi Task management dan Catalog Products

## 🚀 Features

- User Authentication (Login, Register Dummy User)
- Task Management
- Product Catalog
- Single Product Details
- Cart System
- Protected Routes
- Responsive Design (Mobile & Desktop)

## 📦 Tech Stack

- React + TypeScript
- Redux Toolkit
- Tailwind CSS
- React Router DOM
- Faker.js (Dummy Data)

## 📥 Installation

Ikuti langkah-langkah berikut untuk menjalankan project ini secara lokal:

### 1. Clone repository

```bash
git clone https://github.com/your-username/your-repo-name.git
```

### 2. Masuk ke folder project

```bash
cd your-repo-name
```

### 3. Install semua dependencies

```bash
npm install
```
atau
```bash
yarn install
```

### 4. Jalankan development server

```bash
npm run dev
```
atau
```bash
yarn dev
```

### 5. Buka di browser

Buka alamat:

```
http://localhost:5173
```

## Deployment

Project ini sudah live di Vercel: [Lihat di sini]([https://your-project.vercel.app](https://dot-indo-project-123.vercel.app/))

## 🛠️ Scripts

| Perintah          | Fungsi                      |
| ----------------- | ---------------------------- |
| `npm run dev`      | Menjalankan project lokal     |
| `npm run build`    | Build production version     |
| `npm run preview`  | Preview hasil build          |

## 👤 Dummy Accounts

Untuk login ke aplikasi, gunakan salah satu akun dummy berikut:

```javascript
export const dummyUsers = [
  {
    id: "1",
    name: "John Doe",
    email: "johndoe@example.com",
    password: "123456",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "janesmith@example.com",
    password: "123456",
  },
];
```

**Atau** kamu bisa mendaftar akun baru lewat halaman Register (akan disimpan di localStorage).

## 🧩 Folder Structure

```
src/
  components/
  features/
  pages/
  routes/
  store/
  utils/
  App.tsx
  main.tsx
```

## 📝 Notes

- Login dan Register menggunakan **dummy user** yang disimpan di `localStorage`.
- Proteksi halaman dilakukan melalui **Protected Routes**.
- Data produk juga disimpan di **localStorage**.
- Tidak ada backend, semua data dummy.
- Refresh browser tetap mempertahankan sesi login.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

