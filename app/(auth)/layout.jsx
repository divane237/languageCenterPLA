export default function RootLayout({ children }) {
  return (
    <main className="sm:grid sm:grid-cols-2 h-screen bg-gradient-to-b from-[#27dee1a7] from-18% via-25% to-50% via-[#DBD8E3] to-[#fff]">
      {children}

      <div className="bg-[url('/images/loginImage.jpg')] w-full h-screen bg-clip-padding bg-no-repeat bg-cover bg-right-top max-sm:hidden">
        <div className="bg-gradient-to-b from-[#27dee1a7] from-18% via-25% to-50% via-[#DBD8E3] to-[#fff] h-screen w-full opacity-50"></div>
      </div>
    </main>
  );
}
