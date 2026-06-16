import { useAuth } from "@/lib/store/authStore";
import css from "./AuthNavigation.module.css";
import Link from "next/link";
import { logOut } from "@/lib/api/clientApi";
import { useRouter } from "next/navigation";

export const AuthNavigation = () => {
  const { isAuth, user, clearAuth } = useAuth();

  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error("Помилка виходу", error);
    } finally {
      clearAuth();
      router.replace(`/login`);
    }
  };

  return isAuth ? (
    <>
      <li className={css.navigationItem}>
        <Link href="/profile" prefetch={false} className={css.navigationLink}>
          Profile
        </Link>
      </li>
      <li className={css.navigationItem}>
        <>{user?.email}</>
        <p className={css.userEmail}>User email</p>
        <button onClick={handleLogout} className={css.logoutButton}>
          LogOut
        </button>
      </li>
    </>
  ) : (
    <>
      <li className={css.navigationItem}>
        <Link href="/sign-up" prefetch={false} className={css.navigationLink}>
          Register
        </Link>
      </li>
      <li className={css.navigationItem}>
        <Link href="/sign-in" prefetch={false} className={css.navigationLink}>
          Login
        </Link>
      </li>

      <li className={css.navigationItem}>
        <Link href="/sign-up" prefetch={false} className={css.navigationLink}>
          Sign up
        </Link>
      </li>
    </>
  );
};
