
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

type SubMenuItem = {
  name: string;
  href: string;
};

type MenuItem = {
  name: string;
  href: string;
  submenu?: SubMenuItem[];
};

const mainMenuItems: MenuItem[] = [
  {
    name: "Contemporary Art",
    href: "/contemporary-art",
    submenu: [
      { name: "Yearly outcome Art Show", href: "/contemporary-art/yearly-outcome" },
      { name: "Multidisciplinary Art Show", href: "/contemporary-art/multidisciplinary" },
    ],
  },
  {
    name: "Environmental Art",
    href: "/environmental-art",
    submenu: [
      { name: "Harith", href: "/environmental-art/harith" },
      { name: "Environmental Art camp", href: "/environmental-art/camp" },
      { name: "Dharitri Eco-tourism project", href: "/environmental-art/dharitri" },
    ],
  },
  {
    name: "Art Education",
    href: "/art-education",
    submenu: [
      { name: "Kalpapuri", href: "/art-education/kalpapuri" },
      { name: "Kalpaloker Citra", href: "/art-education/kalpaloker-citra" },
      { name: "Kalpapuri School of Arts & Crafts", href: "/art-education/school" },
    ],
  },
  {
    name: "Folk & Community Art",
    href: "/folk-community-art",
    submenu: [
      { name: "Shikar", href: "/folk-community-art/shikar" },
      { name: "Karnaphuli Folk Triennial", href: "/folk-community-art/karnaphuli" },
      { name: "Kandrabindu", href: "/folk-community-art/kandrabindu" },
    ],
  },
  {
    name: "Art for Young",
    href: "/art-for-young",
    submenu: [
      { name: "Artist residency", href: "/art-for-young/residency" },
      { name: "Young Art exhibition", href: "/art-for-young/exhibition" },
    ],
  },
  {
    name: "Other Activities",
    href: "/other-activities",
    submenu: [
      { name: "Art exchange", href: "/other-activities/art-exchange" },
      { name: "Seminar & Presentation", href: "/other-activities/seminar" },
      { name: "Research program", href: "/other-activities/research" },
    ],
  },
  {
    name: "Publication",
    href: "/publication",
    submenu: [
      { name: "All publications", href: "/publication/all" },
    ],
  },
  {
    name: "Shopping & Tour",
    href: "/shopping-tour",
    submenu: [
      { name: "Kandrabindu (Shop)", href: "/shopping-tour/kandrabindu" },
      { name: "Dharitri (eco-tourism project)", href: "/shopping-tour/dharitri" },
    ],
  },
  { name: "About us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Upcoming events", href: "/events" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/95 shadow-md backdrop-blur-sm py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 m-0 ">
        <div className="flex items-center justify-between p-2">
          <a href="/" className="text-2xl font-playfair font-bold text-santaran-teal p-5">
            Santaran
            <span className="text-santaran-terracotta ml-1">Art</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-santaran-charcoal hover:text-santaran-teal transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6">
            {mainMenuItems.map((item) => (
              <div
                key={item.name}
                className="relative group "
                onMouseEnter={() => setActiveItem(item.name)}
                onMouseLeave={() => setActiveItem(null)}
              >
               <a
                  href={item.href}
                  className={cn(
                    "nav-link transition-colors duration-200",
                    scrolled ? "text-santaran-charcoal hover:text-santaran-teal" : "text-white hover:text-santaran-cream",
                    activeItem === item.name && "font-semibold "
                  )}
                >
                  {item.name}
                </a>

                {item.submenu && (
                  <div className="absolute left-0 mt-1 w-64 hidden group-hover:block">
                    <div className="p-3 bg-white rounded-lg shadow-lg border border-slate-100">
                      <ul className="space-y-2">
                        {item.submenu.map((subItem) => (
                          <li key={subItem.name}>
                            <a
                              href={subItem.href}
                              className="block px-4 py-2 text-sm hover:bg-santaran-cream rounded-md transition-colors hover:text-santaran-teal"
                            >
                              {subItem.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 bg-white border-t">
            {mainMenuItems.map((item) => (
              <div key={item.name} className="mb-2">
                <div
                  className="flex items-center justify-between px-4 py-2 hover:bg-santaran-cream cursor-pointer"
                  onClick={() => setActiveItem(activeItem === item.name ? null : item.name)}
                >
                  <a href={item.href} className="font-medium">{item.name}</a>
                  {item.submenu && (
                    <span>{activeItem === item.name ? "−" : "+"}</span>
                  )}
                </div>
                {item.submenu && activeItem === item.name && (
                  <ul className="ml-4 mt-2 border-l-2 border-santaran-cream pl-4">
                    {item.submenu.map((subItem) => (
                      <li key={subItem.name} className="mb-2">
                        <a
                          href={subItem.href}
                          className="block py-2 text-sm hover:text-santaran-teal"
                        >
                          {subItem.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
