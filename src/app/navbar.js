import Image from "next/image";
export default function Navbar() {
  return (
    <header className="flex items-center justify-between py-6">
      <div className=" uppercase font-bold flex items-center">
        <Image
          src="/gwkind.png"
          className="me-4"
          alt="Logo GWK"
          width={40}
          height={40}
        />
        Global Wujud Kreasi
      </div>
      <button className="text-white hover:bg-gray-800 px-6 py-2">
        Sign in
      </button>
    </header>
  );
}
