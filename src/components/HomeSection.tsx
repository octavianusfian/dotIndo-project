import { useAppSelector } from "@/store/hooks";
import { Link } from "react-router-dom";

const HomeSection = () => {
  const user = useAppSelector((state) => state.authState.user);

  return (
    <section className="min-h-full flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold mb-6">Welcome to Dot Indonesia!</h1>
      <p className="text-lg mb-8 text-gray-600">
        Manage your tasks, explore products, and shop easily.
      </p>

      <div className="w-full max-w-4xl">
        {user ? (
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <Link
              to="/task-management"
              className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition text-center"
            >
              Task Management
            </Link>
            <Link
              to="/catalog-products"
              className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition text-center"
            >
              All Products
            </Link>
            <Link
              to="/cart"
              className="bg-yellow-500 text-white py-3 px-6 rounded-lg hover:bg-yellow-600 transition text-center"
            >
              Cart
            </Link>
          </div>
        ) : (
          <div className="flex justify-center gap-4">
            <Link
              to="/login"
              className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition text-center"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition text-center"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeSection;
