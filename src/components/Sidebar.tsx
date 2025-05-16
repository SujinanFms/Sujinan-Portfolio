import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-64 bg-sky-500 text-white p-6 flex flex-col">
      <div className="text-center mb-8">
        <Image
          src="/images/suji.jpg"
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto"
        />
        <h2 className="text-2xl font-bold mt-2">ชื่อ-สกุล</h2>
        <p className="text-sm">Front-end Developer</p>
      </div>
      <nav>
        <ul>
          <li>
            <Link
              href="#personal-info"
              className="text-white hover:bg-sky-600 p-2 rounded-md"
            >
              Personal Info
            </Link>
          </li>
          <li>
            <Link
              href="#languages-skills"
              className="text-white hover:bg-sky-600 p-2 rounded-md"
            >
              Languages & Skills
            </Link>
          </li>
          <li>
            <Link
              href="#services"
              className="text-white hover:bg-sky-600 p-2 rounded-md"
            >
              My Services
            </Link>
          </li>
          <li>
            <Link
              href="#portfolio"
              className="text-white hover:bg-sky-600 p-2 rounded-md"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="text-white hover:bg-sky-600 p-2 rounded-md"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
