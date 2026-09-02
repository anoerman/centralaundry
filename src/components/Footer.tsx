export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm">
        <p className="font-semibold">CentralLaundry</p>
        <p className="mt-1 text-gray-300">
          Laundry appliances &amp; business packages for laundromats, hotels, and industrial use.
        </p>
        <p className="mt-4 text-gray-400">
          &copy; {new Date().getFullYear()} CentralLaundry. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
