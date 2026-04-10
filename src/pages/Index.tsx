import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/8285aaae-1c53-493c-a1f9-07e07b4a64d2/files/c488bcf2-d640-49d8-883d-167932847112.jpg";

const mechanics = [
  {
    icon: "Crosshair",
    title: "Орудийные системы",
    desc: "105-мм гаубица M102, 40-мм пушка Bofors и 25-мм пушка GAU-12. Три системы вооружения для точного уничтожения целей на любой дистанции.",
  },
  {
    icon: "Eye",
    title: "Тепловизионный прицел",
    desc: "Многоспектральные оптические системы: дневная ТВ-камера, ИК-прицел и радар бокового обзора. Враг не спрячется ни в темноте, ни в дыму.",
  },
  {
    icon: "Radio",
    title: "Система наведения",
    desc: "Координируй удары в реальном времени с наземными войсками. Лазерное целеуказание и GPS-навигация для хирургической точности.",
  },
  {
    icon: "Shield",
    title: "Защита экипажа",
    desc: "Бронированный корпус, системы РЭБ и ложные тепловые ловушки. Выживай под зенитным огнём и продолжай выполнять задачу.",
  },
];

const modes = [
  {
    label: "РЕЖИМ 01",
    title: "Огневая поддержка",
    desc: "Обеспечивай непрерывное огневое прикрытие наземных операций. Работай в зонах интенсивных боевых действий, поражая бронетехнику и укреплённые позиции.",
    tag: "CO-OP",
  },
  {
    label: "РЕЖИМ 02",
    title: "Охота на конвои",
    desc: "Перехватывай колонны снабжения противника. Анализируй маршруты, выбирай оптимальные точки атаки и уничтожай транспортную инфраструктуру врага.",
    tag: "ОДИНОЧНЫЙ",
  },
  {
    label: "РЕЖИМ 03",
    title: "Оборона базы",
    desc: "Защищай стратегические объекты от массированных атак. Расставляй приоритеты целей и управляй несколькими орудийными расчётами одновременно.",
    tag: "ВЫЖИВАНИЕ",
  },
];

export default function Index() {
  const navigate = useNavigate();
  const [activeMode, setActiveMode] = useState(0);
  const [navVisible, setNavVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setNavVisible(current < lastScroll || current < 80);
      setLastScroll(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <div className="min-h-screen bg-war-dark text-[#e8e8e8] overflow-x-hidden">
      {/* NAV */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${navVisible ? "translate-y-0" : "-translate-y-full"}`}
        style={{ background: "rgba(10,10,10,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(204,26,26,0.2)" }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-war-red animate-pulse-red" />
            <span className="font-oswald text-xl tracking-widest text-white">AC-130</span>
            <span className="text-xs text-gray-500 tracking-widest hidden sm:block">// СПЕКТР</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#mechanics" className="font-oswald text-sm tracking-widest text-gray-400 hover:text-war-red transition-colors hidden md:block">МЕХАНИКИ</a>
            <a href="#modes" className="font-oswald text-sm tracking-widest text-gray-400 hover:text-war-red transition-colors hidden md:block">РЕЖИМЫ</a>
            <button
              onClick={() => navigate("/download")}
              className="font-oswald text-sm tracking-widest px-5 py-2 bg-war-red text-white hover:bg-war-red-bright transition-colors"
              style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}
            >
              СКАЧАТЬ
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="AC-130"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.35) saturate(0.6)" }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.0) 40%, rgba(10,10,10,0.9) 85%, #0a0a0a 100%)" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(100,0,0,0.3) 100%)" }} />
        </div>

        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "linear-gradient(#cc1a1a 1px, transparent 1px), linear-gradient(90deg, #cc1a1a 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 border border-[rgba(204,26,26,0.4)] text-war-red text-xs font-roboto tracking-[0.3em]">
              <span className="w-1 h-1 bg-war-red rounded-full animate-pulse-red" />
              ЛОКХИД AC-130 // СПЕКТР
            </div>
          </div>

          <h1 className="font-oswald text-7xl sm:text-8xl md:text-9xl font-bold text-white leading-none tracking-tight animate-fade-in-up-delay-1">
            АС-130
          </h1>
          <div className="font-oswald text-2xl sm:text-3xl md:text-4xl tracking-[0.15em] text-war-red animate-fade-in-up-delay-2">
            ГОСПОДСТВО В ВОЗДУХЕ
          </div>

          <p className="mt-6 text-gray-400 text-base sm:text-lg font-roboto max-w-2xl mx-auto leading-relaxed animate-fade-in-up-delay-2">
            Тяжеловооружённый штурмовой самолёт. Три орудийные системы. Полное воздушное доминирование.
            Там, где проходит AC-130 — не остаётся ничего.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-3">
            <button
              onClick={() => navigate("/download")}
              className="font-oswald text-base tracking-widest px-8 py-4 bg-war-red text-white hover:bg-war-red-bright transition-all duration-200 flex items-center justify-center gap-3"
              style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))" }}
            >
              <Icon name="Download" size={18} />
              СКАЧАТЬ ИГРУ
            </button>
            <a
              href="#mechanics"
              className="font-oswald text-base tracking-widest px-8 py-4 border border-gray-600 text-gray-300 hover:border-war-red hover:text-white transition-all duration-200 flex items-center justify-center gap-3"
            >
              <Icon name="ChevronDown" size={18} />
              УЗНАТЬ БОЛЬШЕ
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto animate-fade-in-up-delay-3">
            {[["3", "ОРУДИЯ"], ["360°", "ОБЗОР"], ["7+ч", "ПОЛЁТ"]].map(([num, label]) => (
              <div key={label} className="text-center">
                <div className="font-oswald text-3xl font-bold text-war-red">{num}</div>
                <div className="font-roboto text-xs text-gray-500 tracking-widest mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse-red">
          <Icon name="ChevronDown" size={20} className="text-war-red" />
        </div>
      </section>

      {/* MECHANICS */}
      <section id="mechanics" className="py-24 px-6 bg-war-dark relative">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, #cc1a1a, transparent)" }} />
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="text-xs text-war-red font-roboto tracking-[0.4em] mb-3">// 01</div>
            <h2 className="font-oswald text-4xl sm:text-5xl text-white font-bold">МЕХАНИКИ ИГРЫ</h2>
            <div className="mt-3 w-16 h-0.5 bg-war-red" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a]">
            {mechanics.map((m, i) => (
              <div key={i} className="group p-8 bg-[#111111] hover:bg-[#141414] transition-colors duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-war-red group-hover:w-full transition-all duration-500" />
                <div className="flex items-start gap-5">
                  <div
                    className="w-12 h-12 border border-[rgba(204,26,26,0.3)] flex items-center justify-center flex-shrink-0 group-hover:border-war-red transition-colors duration-300"
                    style={{ clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))" }}
                  >
                    <Icon name={m.icon} size={22} className="text-war-red" />
                  </div>
                  <div>
                    <h3 className="font-oswald text-xl text-white font-semibold mb-2 group-hover:text-war-red transition-colors">{m.title}</h3>
                    <p className="font-roboto text-gray-400 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODES */}
      <section id="modes" className="py-24 px-6 relative" style={{ background: "#0d0d0d" }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, #cc1a1a, transparent)" }} />
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="text-xs text-war-red font-roboto tracking-[0.4em] mb-3">// 02</div>
            <h2 className="font-oswald text-4xl sm:text-5xl text-white font-bold">ИГРОВЫЕ РЕЖИМЫ</h2>
            <div className="mt-3 w-16 h-0.5 bg-war-red" />
          </div>

          <div className="flex gap-px mb-0">
            {modes.map((mode, i) => (
              <button
                key={i}
                onClick={() => setActiveMode(i)}
                className={`flex-1 py-4 px-4 font-oswald text-sm tracking-widest transition-all duration-200 ${activeMode === i ? "bg-war-red text-white" : "bg-[#1a1a1a] text-gray-500 hover:text-gray-300"}`}
              >
                {mode.label}
              </button>
            ))}
          </div>

          <div className="bg-[#111111] p-8 sm:p-12 border-l-2 border-war-red">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <h3 className="font-oswald text-3xl sm:text-4xl text-white font-bold">{modes[activeMode].title}</h3>
              <span className="inline-block px-3 py-1 border border-[rgba(204,26,26,0.5)] text-war-red font-roboto text-xs tracking-widest self-start">
                {modes[activeMode].tag}
              </span>
            </div>
            <p className="font-roboto text-gray-400 text-base leading-relaxed max-w-2xl">{modes[activeMode].desc}</p>
            <div className="mt-8 flex gap-6">
              {modes.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveMode(i)}
                  className={`w-8 h-1 transition-all duration-300 ${activeMode === i ? "bg-war-red" : "bg-gray-700 hover:bg-gray-500"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative overflow-hidden bg-war-dark">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, #cc1a1a, transparent)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center bottom, rgba(100,0,0,0.15) 0%, transparent 70%)" }} />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="font-oswald text-5xl sm:text-6xl text-white font-bold mb-4">ГОТОВ К БОЮ?</div>
          <p className="font-roboto text-gray-400 mb-10">Займи место за штурвалом. AC-130 ждёт своего пилота.</p>
          <button
            onClick={() => navigate("/download")}
            className="font-oswald text-lg tracking-widest px-12 py-5 bg-war-red text-white hover:bg-war-red-bright transition-all duration-200 flex items-center justify-center gap-3 mx-auto red-border-glow"
            style={{ clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))" }}
          >
            <Icon name="Download" size={22} />
            СКАЧАТЬ AC-130
          </button>
        </div>
      </section>

      {/* FOOTER */}
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