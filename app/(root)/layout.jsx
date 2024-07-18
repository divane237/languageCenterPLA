import NavBar from "@/components/NavBar";

export default function RootLayout({ children }) {
  return (
    // <main>
    <main className="">
      <NavBar />

      {children}
    </main>
  );
}
