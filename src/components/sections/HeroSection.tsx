import { motion } from "motion/react";
import { ArrowRight, Leaf, ShieldCheck, HeartHandshake, MapPin, TreePine } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="from-brand-cream-dark via-brand-cream to-brand-cream relative overflow-hidden bg-linear-to-b pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div className="bg-brand-leaf/15 absolute top-10 right-0 -z-10 h-96 w-96 rounded-full blur-3xl" />
      <div className="bg-brand-terracotta/10 absolute bottom-0 left-10 -z-10 h-80 w-80 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6 text-left lg:col-span-7"
          >
            <h1 className="text-brand-forest-dark text-4xl leading-[1.15] font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Menanam Harapan, <br />
              <span className="text-brand-forest relative inline-block">
                Merawat Bumi
                <svg
                  className="text-brand-leaf absolute -bottom-2 left-0 h-3 w-full"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 15 Q 50 0 100 15"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                </svg>
              </span>{" "}
              Bersama.
            </h1>

            <p className="text-brand-forest-dark/80 max-w-2xl text-lg leading-relaxed font-normal sm:text-xl">
              TumbuhBersama hadir membangun kesadaran kolektif, mereboisasi
              hutan terdegradasi, dan memfasilitasi gerakan nyata demi masa
              depan nusantara yang hijau dan berkelanjutan.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-brand-forest text-brand-cream hover:bg-brand-forest-dark w-full sm:w-auto rounded-full px-7 py-6 font-bold shadow-lg transition-all"
                >
                  <a
                    href="#action-volunteer"
                    className="flex items-center justify-center gap-2 text-base"
                  >
                    Gabung Relawan <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-brand-terracotta hover:bg-brand-terracotta-hover w-full sm:w-auto rounded-full px-7 py-6 font-bold text-white shadow-md transition-all"
                >
                  <a
                    href="#action-donate"
                    className="flex items-center justify-center gap-2 text-base"
                  >
                    Donasi Pohon
                  </a>
                </Button>
              </motion.div>
            </div>

            <div className="border-brand-forest-dark/10 grid max-w-lg grid-cols-3 gap-4 border-t pt-6">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-brand-forest h-5 w-5" />
                <span className="text-brand-forest-dark/80 text-xs font-medium sm:text-sm">
                  Transparan & Terverifikasi
                </span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="text-brand-terracotta h-5 w-5" />
                <span className="text-brand-forest-dark/80 text-xs font-medium sm:text-sm">
                  Aksi 100% Komunitas
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="text-brand-leaf h-5 w-5" />
                <span className="text-brand-forest-dark/80 text-xs font-medium sm:text-sm">
                  Dampak Berkelanjutan
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="from-brand-forest to-brand-leaf absolute inset-0 scale-105 rotate-3 rounded-[2.5rem] bg-linear-to-tr opacity-80 blur-sm" />
              <div className="bg-brand-forest-dark relative space-y-6 overflow-hidden rounded-[2.5rem] border-4 border-white/20 p-6 text-left text-white shadow-2xl">
                <div className="bg-brand-forest/50 relative flex h-64 items-center justify-center overflow-hidden rounded-2xl sm:h-72">
                  <img
                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80"
                    alt="Aksi Penanaman Pohon Bersama"
                    className="h-full w-full object-cover"
                  />
                  <div className="from-brand-forest-dark absolute inset-0 bg-linear-to-t via-transparent to-transparent opacity-80" />
                  <div className="text-brand-cream/90 absolute right-4 bottom-3 left-4 flex items-center gap-1 text-xs font-medium">
                    <MapPin className="h-3.5 w-3.5 text-brand-leaf shrink-0" />
                    <span>Aksi Reboisasi Hutan Mangrove, Kendal</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-brand-leaf flex items-center justify-between text-xs font-semibold tracking-wider uppercase">
                    <span>Program Unggulan Bulan Ini</span>
                    <span>85% Target</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Target 50.000 Mangrove Pesisir
                  </h3>
                  <p className="line-clamp-2 text-xs text-white/80">
                    Menyelamatkan garis pantai dari abrasi sekaligus memulihkan
                    ekosistem biota laut lokal.
                  </p>
                </div>
                <div className="space-y-1.5">
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/20">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "85%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="bg-brand-leaf h-full rounded-full"
                    />
                  </div>
                  <div className="flex justify-between text-xs font-medium text-white/70">
                    <span>42.500 Bibit Terkumpul</span>
                    <span>Sisa 12 Hari</span>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -bottom-6 -left-0 sm:-left-6 right-0 sm:right-auto mx-4 sm:mx-0 flex items-center justify-center sm:justify-start gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-xl"
              >
                <div className="bg-brand-terracotta/15 text-brand-terracotta flex h-12 w-12 items-center justify-center rounded-xl font-bold">
                  <TreePine className="h-6 w-6 text-brand-terracotta" />
                </div>
                <div>
                  <div className="text-brand-forest-dark text-xl font-black">
                    128.400+
                  </div>
                  <div className="text-xs font-medium text-gray-500">
                    Pohon Berhasil Ditanam
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
