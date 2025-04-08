export default function Footer() {
  return (
    <footer className="mt-auto pt-16">
      <div className="flex justify-evenly p-6 bg-blue-800 text-gray-100">
        <div className="w-full">
          <div className="w-fit">
            <h1 className="font-serif font-bold text-lg/3">Bombo</h1>
            <h2 className="font-serif text-xs/3 text-end">Enterprise</h2>
          </div>
        </div>
        <p className="w-full text-end text-base/4">
          <span className="font-semibold">University of Genova</span>
          <br /> project for Martina Biamino
        </p>
      </div>
    </footer>
  );
}
