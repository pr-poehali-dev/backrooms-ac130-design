import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const platforms = [
  {
    icon: "Monitor",
    name: "Windows",
    version: "10 / 11",
    size: "28.4 GB",
    requirements: "RTX 2060 / RX 6600 · 16 GB RAM · SSD",
  },
  {
    icon: "Cpu",
    name: "macOS",
    version: "13 Ventura+",
    size: "26.1 GB",
    requirements: "Apple M1 / M2 · 16 GB RAM · SSD",
  },
];

const requirements = [
  { label: "ПРОЦЕССОР", min: "Intel i5-9600K", rec: "Intel i9-12900K" },
  { label: "ВИДЕОКАРТА", min: "GTX 1070", rec: "RTX 3080" },
  { label: "ОПЕРАТИВНАЯ ПАМЯТЬ", min: "12 GB", rec: "32 GB" },
  { label: "МЕСТО НА ДИСКЕ", min: "28 GB SSD", rec: "50 GB NVMe" },
  { label: "ОС", min: "Windows 10 64-bit", rec: "Windows 11 64-bit" },
  { label: "DirectX", min: "Версия 11", rec: "Версия 12" },
];

export default function Download() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-war-dark text-[#e8e8e8] overflow-x-hidden">
      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{ background: "rgba(10,10,10,0.95)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(204,26,26,0.2)" }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={() => navigate("/")} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-2 h-2 rounded-full bg-war-red" />
            <span className="font-oswald text-xl tracking-widest text-white">AC-130</span>
            <span className="text-xs text-gray-500 tracking-widest hidden sm:block">// СПЕКТР</span>
          </button>
          <button onClick={() => navigate("/")} className="flex items-center gap-2 font-oswald text-sm tracking-widest text-gray-400 hover:text-white transition-colors">
            <Icon name="ArrowLeft" size={16} />
            <span className="hidden sm:block">НАЗАД</span>
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-16 px-6 relative">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at top center, rgba(100,0,0,0.12) 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-xs text-war-red font-roboto tracking-[0.4em] mb-3 animate-fade-in-up">// ЗАГРУЗКА</div>
          <h1 className="font-oswald text-5xl sm:text-6xl md:text-7xl font-bold text-white animate-fade-in-up-delay-1">
            СКАЧАТЬ AC-130
          </h1>
          <div className="mt-3 w-20 h-0.5 bg-war-red" />
          <p className="mt-6 font-roboto text-gray-400 text-lg max-w-xl animate-fade-in-up-delay-2">
            Выбери платформу и начни загрузку. Доступно бесплатно — никаких подписок и скрытых платежей.
          </p>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {platforms.map((p, i) => (
              <div key={i} className="group relative bg-[#111111] border border-[#1a1a1a] hover:border-war-red/50 transition-all duration-300 p-8 overflow-hidden">
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-war-red group-hover:w-full transition-all duration-500" />

                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-14 h-14 bg-[#1a1a1a] border border-[rgba(204,26,26,0.2)] flex items-center justify-center group-hover:border-war-red transition-colors duration-300"
                    style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}
                  >
                    <Icon name={p.icon} size={26} className="text-war-red" />
                  </div>
                  <div>
                    <div className="font-oswald text-2xl text-white font-bold">{p.name}</div>
                    <div className="font-roboto text-sm text-gray-500">{p.version}</div>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="font-oswald text-2xl text-war-red font-bold">{p.size}</div>
                    <div className="font-roboto text-xs text-gray-600">размер</div>
                  </div>
                </div>

                <div className="font-roboto text-xs text-gray-500 mb-6 p-3 bg-[#0d0d0d] border border-[#1a1a1a]">
                  <span className="text-gray-600 mr-2">МИНИМУМ:</span>{p.requirements}
                </div>

                <button
                  className="w-full font-oswald text-base tracking-widest py-4 bg-war-red text-white hover:bg-war-red-bright transition-colors duration-200 flex items-center justify-center gap-3"
                  style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}
                >
                  <Icon name="Download" size={18} />
                  СКАЧАТЬ ДЛЯ {p.name.toUpperCase()}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section className="py-16 px-6 relative" style={{ background: "#0d0d0d" }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, #cc1a1a, transparent)" }} />
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="text-xs text-war-red font-roboto tracking-[0.4em] mb-3">// СИСТЕМА</div>
            <h2 className="font-oswald text-3xl sm:text-4xl text-white font-bold">СИСТЕМНЫЕ ТРЕБОВАНИЯ</h2>
            <div className="mt-3 w-16 h-0.5 bg-war-red" />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[#1a1a1a]">
                  <th className="font-oswald text-xs tracking-widest text-gray-600 text-left py-3 pr-8 w-48">КОМПОНЕНТ</th>
                  <th className="font-oswald text-xs tracking-widest text-gray-600 text-left py-3 pr-8">
                    <span className="text-gray-600">МИНИМАЛЬНЫЕ</span>
                  </th>
                  <th className="font-oswald text-xs tracking-widest text-war-red text-left py-3">РЕКОМЕНДУЕМЫЕ</th>
                </tr>
              </thead>
              <tbody>
                {requirements.map((r, i) => (
                  <tr key={i} className="border-b border-[#141414] hover:bg-[#111111] transition-colors">
                    <td className="font-roboto text-xs text-gray-500 tracking-widest py-4 pr-8">{r.label}</td>
                    <td className="font-roboto text-sm text-gray-400 py-4 pr-8">{r.min}</td>
                    <td className="font-roboto text-sm text-white py-4">{r.rec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* BACK BUTTON */}
      <section className="py-12 px-6 bg-war-dark">
        <div className="max-w-7xl mx-auto text-center">
          <button
            onClick={() => navigate("/")}
            className="font-oswald text-sm tracking-widest px-8 py-3 border border-gray-700 text-gray-400 hover:border-war-red hover:text-white transition-all duration-200 flex items-center gap-2 mx-auto"
          >
            <Icon name="ArrowLeft" size={16} />
            ВЕРНУТЬСЯ НА ГЛАВНУЮ
          </button>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-war-red" />
            <span className="font-oswald text-gray-600 tracking-widest text-sm">AC-130 // СПЕКТР</span>
          </div>
          <p className="font-roboto text-gray-700 text-xs">© 2026 AC-130. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
