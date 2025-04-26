import { useAppDispatch } from "@/store/hooks";
import { logout } from "@/store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import ButtonCustom from "./ButtonCustom";
import toast from "react-hot-toast";

const LogoutButton = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Berhasil Logout");
    navigate("/login");
  };

  return (
    <ButtonCustom onClick={handleLogout} variant="danger">
      Logout
    </ButtonCustom>
  );
};

export default LogoutButton;
