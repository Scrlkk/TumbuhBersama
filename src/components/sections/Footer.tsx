import { TreePine, Globe, Share2, MessageCircle, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-forest-dark text-brand-cream border-t border-white/10 pt-16 pb-8">
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 text-left md:grid-cols-12">
          <div className="space-y-4 md:col-span-5">
            <div className="flex items-center gap-2.5">
              <div className="bg-brand-leaf text-brand-forest-dark flex h-9 w-9 items-center justify-center rounded-full">
                <TreePine className="h-5 w-5 stroke-[2.5]" />
              </div>
              <span className="font-serif text-2xl font-bold text-white">
                Tumbuh<span className="text-brand-leaf">Bersama</span>
              </span>
            </div>

            <p className="max-w-sm text-xs leading-relaxed text-white/70 sm:text-sm">
              Platform aksi iklim dan pelestarian alam inklusif. Menghubungkan
              kepedulian masyarakat dengan dampak ekologis yang terukur dan
              berkelanjutan.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="hover:bg-brand-leaf hover:text-brand-forest-dark flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors"
                aria-label="Website"
              >
                <Globe className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="hover:bg-brand-leaf hover:text-brand-forest-dark flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="hover:bg-brand-leaf hover:text-brand-forest-dark flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors"
                aria-label="Pesan"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="hover:bg-brand-leaf hover:text-brand-forest-dark flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors"
                aria-label="Bagikan"
              >
                <Share2 className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="space-y-3 md:col-span-3">
            <h4 className="text-brand-leaf text-sm font-bold tracking-wider uppercase">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-xs text-white/75 sm:text-sm">
              <li>
                <a
                  href="#hero"
                  className="hover:text-brand-leaf transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-brand-leaf transition-colors"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="hover:text-brand-leaf transition-colors"
                >
                  Program Reboisasi
                </a>
              </li>
              <li>
                <a
                  href="#action-volunteer"
                  className="hover:text-brand-leaf transition-colors"
                >
                  Gabung Relawan
                </a>
              </li>
              <li>
                <a
                  href="#action-donate"
                  className="hover:text-brand-leaf transition-colors"
                >
                  Donasi Pohon
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3 md:col-span-4">
            <h4 className="text-brand-leaf text-sm font-bold tracking-wider uppercase">
              Kategori Aksi
            </h4>
            <ul className="space-y-2 text-xs text-white/75 sm:text-sm">
              <li>Reboisasi & Pemulihan Hutan Lindung</li>
              <li>Restorasi Ekosistem Mangrove Pesisir</li>
              <li>Edukasi Lingkungan & Bank Sampah Sekolah</li>
              <li>Clean-up Daerah Aliran Sungai (DAS)</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} TumbuhBersama. Seluruh Hak Cipta
            Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
