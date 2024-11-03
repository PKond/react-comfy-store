import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"; 
import { clearCart } from "../features/cart/cartSlice";
import { logoutUser } from "../features/user/userSlice";
import { useQueryClient, useQuery } from '@tanstack/react-query';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  // Fetching user from Redux store
  const user = useSelector((state) => state.userState.user); 

  const handleLogout = () => {
	navigate('/');
	dispatch(clearCart());
	dispatch(logoutUser());
	queryClient.removeQueries();
  }
  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="align-element flex justify-center sm:justify-end">
        {/* If user is logged in */}
        {user ? (
          <div className="flex gap-x-2 sm:gap-x-8 items-center">
            <p className="text-xs sm:text-sm">Hello, {user.username}</p>
			<button className="btn btn-xs btn-outline btn-primary uppercase" onClick={handleLogout}>
				Logout
			</button>
            {/* Add more actions for logged-in users if needed */}
          </div>
        ) : (
          /* If user is not logged in, show sign-in and registration links */
          <div className="flex gap-x-6 justify-center items-center">
            <Link to="/login" className="link link-hover text-xs sm:text-sm">
              Sign in / Guest
            </Link>
            <Link to="/register" className="link link-hover text-xs sm:text-sm">
              Create Account
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
