import NavBar from "@/components/NavBar";

export default async function Layout({ children }) {
  return (
    <>
      <main className="">
        <NavBar />

        {children}
      </main>

      <footer className="bg-black text-white p-2 w-full static bottom-0">
        Footer
      </footer>
    </>
  );
}
