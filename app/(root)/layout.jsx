import NavBar from "@/components/NavBar";
import { getUserSession } from "@/lib/actions/user";

export default async function Layout({ children }) {
  return (
    <main className="">
      <NavBar />

      {children}
    </main>
  );
}
