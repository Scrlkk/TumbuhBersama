import { motion } from "motion/react";
import { TreePine, Users, MapPin, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  const stats = [
    {
      icon: TreePine,
      value: "128.400+",
      label: "Pohon Ditanam",
      description: "Tersebar di 14 titik reboisasi di Indonesia",
    },
    {
      icon: Users,
      value: "15.200+",
      label: "Relawan Aktif",
      description: "Bergabung dalam gerakan kebaikan lingkungan",
    },
    {
      icon: MapPin,
      value: "42 Program",
      label: "Aksi Lapangan",
      description: "Termasuk pembersihan pantai & edukasi sekolah",
    },
    {
      icon: Award,
      value: "98%",
      label: "Kelangsungan Hidup",
      description: "Bibit dirawat berkelanjutan oleh warga lokal",
    },
  ];

  return (
    <section id="about" className="bg-brand-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-white shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=800&q=80"
                alt="Aksi Komunitas TumbuhBersama"
                className="h-100 w-full object-cover md:h-120"
              />
              <div className="from-brand-forest-dark/80 absolute inset-0 bg-linear-to-t via-transparent to-transparent" />
              <div className="absolute right-6 bottom-6 left-6 text-left text-white">
                <p className="text-brand-leaf text-sm font-semibold">
                  Visi Kami
                </p>
                <h4 className="text-xl font-bold">
                  Membangun Ekosistem Hijau Yang Berkelanjutan
                </h4>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-brand-forest-dark border-brand-leaf absolute -right-6 -bottom-8 hidden w-64 rounded-2xl border-2 p-5 text-left text-white shadow-2xl sm:block"
            >
              <div className="text-brand-leaf mb-1 text-2xl font-bold">
                Misi 2030
              </div>
              <p className="text-xs text-white/80">
                Menanam 1 Juta pohon dan mengedukasi 500 sekolah tentang
                pemilahan sampah & daur ulang.
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-left"
          >
            <h2 className="text-brand-forest-dark font-serif text-3xl leading-tight font-extrabold sm:text-4xl">
              Menghubungkan Hati yang Peduli dengan Aksi Nyata untuk Bumi
            </h2>

            <p className="text-brand-forest-dark/80 text-base leading-relaxed sm:text-lg">
              <strong>TumbuhBersama</strong> berawal dari komitmen sekelompok
              pemuda dan penggiat lingkungan yang prihatin atas ancaman krisis
              iklim dan alih fungsi lahan di berbagai wilayah Indonesia.
            </p>

            <p className="text-brand-forest-dark/75 text-sm leading-relaxed sm:text-base">
              Kami percaya bahwa pemulihan alam tidak dapat dilakukan secara
              parsial. Dengan mengombinasikan transparansi teknologi, pelibatan
              warga lokal, dan semangat gotong royong relawan, kami memastikan
              setiap bibit yang ditanam memiliki dampak nyata jangka panjang.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-brand-forest/5 border-brand-forest/10 rounded-xl border p-4">
                <h4 className="text-brand-forest-dark mb-1 flex items-center gap-1.5 text-base font-bold">
                  <TreePine className="h-4 w-4 text-brand-forest shrink-0" />
                  <span>Pendekatan Organik</span>
                </h4>
                <p className="text-brand-forest-dark/70 text-xs">
                  Pemilihan bibit lokal sesuai ekosistem setempat.
                </p>
              </div>
              <div className="bg-brand-terracotta/5 border-brand-terracotta/10 rounded-xl border p-4">
                <h4 className="text-brand-forest-dark mb-1 flex items-center gap-1.5 text-base font-bold">
                  <Users className="h-4 w-4 text-brand-terracotta shrink-0" />
                  <span>Pemberdayaan Warga</span>
                </h4>
                <p className="text-brand-forest-dark/70 text-xs">
                  Melibatkan kelompok tani hutan & masyarakat lokal.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="space-y-3 text-left transition-shadow hover:shadow-md">
                  <CardContent className="space-y-3 p-6">
                    <div className="bg-brand-forest/10 text-brand-forest flex h-12 w-12 items-center justify-center rounded-xl">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-brand-forest-dark text-3xl font-black">
                        {stat.value}
                      </div>
                      <div className="text-brand-forest text-sm font-bold">
                        {stat.label}
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">{stat.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
