import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Info & Map placeholder */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-forest-dark font-serif">
                Mari Berkolaborasi Demi Kelestarian Alam
              </h2>
              <p className="text-sm sm:text-base text-brand-forest-dark/75 leading-relaxed">
                Punya pertanyaan tentang program, kemitraan CSR perusahaan, atau ingin mengundang TumbuhBersama ke sekolah/komunitas Anda?
              </p>
            </div>

            {/* Contact Details List */}
            <div className="space-y-4 pt-2">
              <Card className="shadow-sm">
                <CardContent className="flex items-start gap-4 p-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-forest/10 text-brand-forest flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-forest-dark text-sm">Kantor Operasional</h4>
                    <p className="text-xs text-brand-forest-dark/75 mt-0.5">
                      Jl. Rimba Hijau No. 42, Candisari, Kota Semarang, Jawa Tengah 50257
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardContent className="flex items-start gap-4 p-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-forest/10 text-brand-forest flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-forest-dark text-sm">Email Resmi</h4>
                    <p className="text-xs text-brand-forest-dark/75 mt-0.5">
                      halo@tumbuhbersama.org / kerjasama@tumbuhbersama.org
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardContent className="flex items-start gap-4 p-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-forest/10 text-brand-forest flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-forest-dark text-sm">Telepon & WhatsApp</h4>
                    <p className="text-xs text-brand-forest-dark/75 mt-0.5">
                      +62 811-2345-6789 (Senin - Sabtu, 08.00 - 17.00 WIB)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <Card className="lg:col-span-7 p-8 sm:p-10 shadow-lg text-left bg-white">
            <h3 className="text-2xl font-bold text-brand-forest-dark mb-2">Kirim Pesan</h3>
            <p className="text-xs sm:text-sm text-brand-forest-dark/70 mb-6">
              Tim kami akan membalas pesan Anda dalam kurun waktu 1x24 jam kerja.
            </p>

            {sent ? (
              <div className="p-6 bg-brand-leaf/20 border border-brand-leaf rounded-2xl flex items-center gap-3 text-brand-forest font-semibold text-sm">
                <CheckCircle className="w-6 h-6 shrink-0" />
                <span>Pesan Anda berhasil terkirim. Terima kasih!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-brand-forest-dark">Nama Anda</label>
                    <Input
                      required
                      type="text"
                      placeholder="Nama Lengkap"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-brand-forest-dark">Email Anda</label>
                    <Input
                      required
                      type="email"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-brand-forest-dark">Subjek Pesan</label>
                  <Input
                    required
                    type="text"
                    placeholder="Contoh: Penawaran Kerjasama CSR Reboisasi"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-brand-forest-dark">Isi Pesan</label>
                  <Textarea
                    required
                    rows={4}
                    placeholder="Tuliskan detail pertanyaan atau rencana pesan Anda..."
                    className="resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-brand-forest hover:bg-brand-forest-dark text-white font-bold rounded-xl py-6 shadow-md"
                >
                  Kirim Pesan Sekarang <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            )}
          </Card>

        </div>

      </div>
    </section>
  );
}
