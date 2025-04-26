import { Link } from "react-router-dom";

const ErrorPage = ({ message }: { message?: string }) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 p-8 w-full">
      <div className="max-w-md w-full text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-6">Oops!</h1>
        <p className="text-lg text-gray-600 mb-4">
          {message || "Halaman yang kamu cari tidak ditemukan."}
        </p>
        <Link
          to="/"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
        >
          Kembali ke Home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
