import NavBar from "@/components/NavBar";

export default function Layout({ children }) {
  return (
    // <main>
    <main className="">
      <NavBar />

      {children}
    </main>
  );
}
