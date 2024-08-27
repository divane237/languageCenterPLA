import NavBar from "@/components/NavBar";
import { getUserSession } from "@/lib/actions/user";

export default async function Layout({ children }) {
  const results = await getUserSession();
  const { session, message } = JSON.parse(results);

  return (
    <main className="">
      <NavBar session={session} />

      {children}
    </main>
  );
}
