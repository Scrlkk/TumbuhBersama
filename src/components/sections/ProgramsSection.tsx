import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TreePine, Waves, GraduationCap, MapPin, Users, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface Program {
  id: string;
  category: "reboisasi" | "edukasi" | "komunitas";
  title: string;
  location: string;
  image: string;
  description: string;
  targetCount: number;
  currentCount: number;
  volunteersNeeded: number;
  unit: string;
}

const programsData: Program[] = [
  {
    id: "prog-1",
    category: "reboisasi",
    title: "Tanam 1.000 Pohon Mangrove Pesisir",
    location: "Pantai Tirto, Kendal",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80",
    description: "Restorasi vegetasi pesisir pantai untuk mengurangi erosi air laut dan menjaga habitat biota pesisir.",
    targetCount: 1000,
    currentCount: 850,
    volunteersNeeded: 40,
    unit: "Bibit",
  },
  {
    id: "prog-2",
    category: "edukasi",
    title: "Program Sekolah Hijau & Bank Sampah",
    location: "15 SD/SMP di Kota Semarang",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80",
    description: "Edukasi praktis komposting dan pemilahan sampah sejak dini kepada generasi muda.",
    targetCount: 15,
    currentCount: 11,
    volunteersNeeded: 25,
    unit: "Sekolah",
  },
  {
    id: "prog-3",
    category: "komunitas",
    title: "Clean-up & Restorasi Daerah Aliran Sungai",
    location: "Sungai Banjir Kanal Barat",
    image: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=600&q=80",
    description: "Aksi gotong royong membersihkan sampah plastik dan pembenahan bantaran sungai bersama warga.",
    targetCount: 500,
    currentCount: 380,
    volunteersNeeded: 60,
    unit: "Kg Sampah",
  },
  {
    id: "prog-4",
    category: "reboisasi",
    title: "Penanaman Pohon Pinus Hutan Lindung",
    location: "Lereng Gunung Ungaran",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80",
    description: "Menjaga daya serap air di area resapan pegunungan guna mencegah potensi banjir bandang.",
    targetCount: 2500,
    currentCount: 1900,
    volunteersNeeded: 50,
    unit: "Pohon",
  },
];

export function ProgramsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredPrograms =
    activeCategory === "all"
      ? programsData
      : programsData.filter((p) => p.category === activeCategory);

  return (
    <section id="programs" className="py-20 md:py-28 bg-brand-cream-dark/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3 max-w-2xl"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-forest-dark font-serif">
              Program & Kampanye Berjalan
            </h2>
            <p className="text-base text-brand-forest-dark/75">
              Pilih aksi lingkungan yang paling sesuai dengan kepedulian Anda. Setiap partisipasi memberi arti besar.
            </p>
          </motion.div>

          {/* Filter Categories */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "Semua Program" },
              { id: "reboisasi", label: "Reboisasi", icon: TreePine },
              { id: "edukasi", label: "Edukasi", icon: GraduationCap },
              { id: "komunitas", label: "Bersih Sungai", icon: Waves },
            ].map((cat) => {
              const Icon = cat.icon;
              const isSelected = activeCategory === cat.id;
              return (
                <Button
                  key={cat.id}
                  variant={isSelected ? "default" : "outline"}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-brand-forest text-white shadow-md scale-105"
                      : "bg-white text-brand-forest-dark/80 hover:bg-white/80 border-brand-forest-dark/10"
                  }`}
                >
                  {Icon && <Icon className="w-3.5 h-3.5" />} {cat.label}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Program Cards Grid with AnimatePresence */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredPrograms.map((program) => {
              const percentage = Math.round(
                (program.currentCount / program.targetCount) * 100
              );

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={program.id}
                >
                  <Card className="rounded-3xl overflow-hidden border border-brand-forest-dark/10 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between group text-left h-full">
                    <div>
                      {/* Image Header */}
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={program.image}
                          alt={program.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <Badge className="absolute top-4 left-4 bg-brand-forest-dark/80 backdrop-blur-md text-brand-cream text-xs font-semibold px-3 py-1 flex items-center gap-1 border-none">
                          <MapPin className="w-3.5 h-3.5 text-brand-leaf" /> {program.location}
                        </Badge>
                      </div>

                      {/* Card Content */}
                      <div className="p-6 space-y-4">
                        <h3 className="text-xl font-bold text-brand-forest-dark group-hover:text-brand-forest transition-colors leading-snug">
                          {program.title}
                        </h3>
                        <p className="text-sm text-brand-forest-dark/75 line-clamp-2">
                          {program.description}
                        </p>

                        {/* Progress Bar */}
                        <div className="space-y-2 pt-2">
                          <div className="flex justify-between text-xs font-bold text-brand-forest-dark">
                            <span>Capaian: {program.currentCount} / {program.targetCount} {program.unit}</span>
                            <span className="text-brand-forest">{percentage}%</span>
                          </div>
                          <Progress value={percentage} className="h-2.5" />
                        </div>
                      </div>
                    </div>

                    {/* Footer Action */}
                    <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-gray-100 mt-auto">
                      <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                        <Users className="w-4 h-4 text-brand-terracotta" /> Butuh {program.volunteersNeeded} relawan
                      </div>

                      <Button
                        asChild
                        size="sm"
                        className="bg-brand-forest hover:bg-brand-forest-dark text-white font-semibold rounded-full px-4 text-xs flex items-center gap-1"
                      >
                        <a href="#action-volunteer" className="flex items-center gap-1">
                          Ikuti Program <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
