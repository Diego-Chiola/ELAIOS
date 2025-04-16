export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="flex justify-evenly items-center p-6 min-h-[var(--footer-height)] bg-primary text-primary-foreground">
        <div className="w-full">
          <img className="z-10 w-[150px]" src="./logo.svg" alt="ELAIOS logo" />
        </div>
        <p className="flex flex-col gap-3 w-full text-end text-base/4">
          <span className="font-semibold">University of Genova</span>
          <div className="flex flex-col gap-1">
            <span>Martina Biamino</span>
            <span>Diego Chiola</span>
          </div>
        </p>
      </div>
    </footer>
  );
}
