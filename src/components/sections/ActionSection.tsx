import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Heart,
  Users,
  CheckCircle2,
  Send,
  User,
  Phone,
  Mail,
  Compass,
  Sparkles,
  TreePine,
  CreditCard,
  Award,
  QrCode,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ActionSection() {
  const [activeTab, setActiveTab] = useState<"volunteer" | "donate">("volunteer");
  const [donationAmount, setDonationAmount] = useState<number>(50000);
  const [customDonation, setCustomDonation] = useState<string>("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"qris" | "bank" | "ewallet">("qris");

  const calculatedTrees = Math.floor((donationAmount || 0) / 25000);

  const handleSubmitVolunteer = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const handleSubmitDonation = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <section id="action" className="relative overflow-hidden bg-brand-forest-dark py-20 text-white md:py-28">
      {/* Ambient Atmospheric Glows */}
      <div className="bg-brand-leaf/10 pointer-events-none absolute -top-20 -right-20 h-125 w-125 rounded-full blur-3xl" />
      <div className="bg-brand-terracotta/10 pointer-events-none absolute -bottom-20 -left-20 h-125 w-125 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl space-y-4 text-center"
        >
          <h2 className="text-brand-cream font-serif text-3xl font-extrabold sm:text-5xl">
            Satu Aksi Anda, Beribu Pohon untuk Masa Depan
          </h2>
          <p className="text-base text-white/80 sm:text-lg">
            Pilihlah bagaimana Anda ingin berkontribusi: meluangkan waktu & tenaga sebagai relawan atau menyumbangkan bibit pohon.
          </p>

          {/* Premium Segmented Toggle Switch */}
          <div className="mt-6 inline-flex rounded-full border border-white/15 bg-white/10 p-1.5 backdrop-blur-md shadow-inner">
            <button
              id="action-volunteer"
              onClick={() => setActiveTab("volunteer")}
              className={`flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 ${
                activeTab === "volunteer"
                  ? "bg-brand-leaf text-brand-forest-dark shadow-lg shadow-brand-leaf/20 scale-[1.02]"
                  : "text-white/80 hover:text-white hover:bg-white/5"
              }`}
            >
              <Users className="h-4 w-4" /> Jadi Relawan
            </button>
            <button
              id="action-donate"
              onClick={() => setActiveTab("donate")}
              className={`flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 ${
                activeTab === "donate"
                  ? "bg-brand-terracotta text-white shadow-lg shadow-brand-terracotta/20 scale-[1.02]"
                  : "text-white/80 hover:text-white hover:bg-white/5"
              }`}
            >
              <Heart className="h-4 w-4 fill-current" /> Donasi Pohon
            </button>
          </div>
        </motion.div>

        {/* Tab Content Box - Glassmorphic Card */}
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-6 text-left shadow-2xl backdrop-blur-xl sm:p-10">
          <AnimatePresence mode="wait">
            {/* Volunteer Form */}
            {activeTab === "volunteer" && (
              <motion.div
                key="volunteer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="border-b border-white/10 pb-4 text-center">
                  <h3 className="flex items-center justify-center gap-2 text-2xl font-bold text-white">
                    <Users className="h-6 w-6 text-brand-leaf" />
                    Formulir Pendaftaran Relawan
                  </h3>
                  <p className="mx-auto mt-1 max-w-xl text-sm text-white/70">
                    Isi data di bawah ini. Tim TumbuhBersama akan menghubungi Anda melalui WhatsApp/Email untuk koordinasi aksi terdekat.
                  </p>
                </div>

                {formSubmitted ? (
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex items-center gap-4 rounded-2xl border border-brand-leaf bg-brand-leaf/20 p-6 text-brand-leaf shadow-lg"
                  >
                    <CheckCircle2 className="h-10 w-10 shrink-0 text-brand-leaf" />
                    <div>
                      <h4 className="text-lg font-bold text-white">Terima Kasih Telah Mendaftar!</h4>
                      <p className="mt-0.5 text-xs text-white/80">
                        Pendaftaran Anda berhasil kami terima. Tim relawan akan segera menghubungi Anda dalam 1x24 jam.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmitVolunteer} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="flex items-center gap-1.5 text-xs font-semibold text-white/90">
                          <User className="h-3.5 w-3.5 text-brand-leaf" /> Nama Lengkap
                        </label>
                        <div className="relative">
                          <Input
                            required
                            type="text"
                            placeholder="Contoh: Budi Santoso"
                            className="border-white/20 bg-black/20 px-4 py-3 text-white placeholder:text-white/40 focus-visible:border-brand-leaf focus-visible:ring-brand-leaf/30"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="flex items-center gap-1.5 text-xs font-semibold text-white/90">
                          <Phone className="h-3.5 w-3.5 text-brand-leaf" /> Nomor WhatsApp
                        </label>
                        <Input
                          required
                          type="tel"
                          placeholder="081234567890"
                          className="border-white/20 bg-black/20 px-4 py-3 text-white placeholder:text-white/40 focus-visible:border-brand-leaf focus-visible:ring-brand-leaf/30"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="flex items-center gap-1.5 text-xs font-semibold text-white/90">
                          <Mail className="h-3.5 w-3.5 text-brand-leaf" /> Alamat Email
                        </label>
                        <Input
                          required
                          type="email"
                          placeholder="budi@example.com"
                          className="border-white/20 bg-black/20 px-4 py-3 text-white placeholder:text-white/40 focus-visible:border-brand-leaf focus-visible:ring-brand-leaf/30"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="flex items-center gap-1.5 text-xs font-semibold text-white/90">
                          <Compass className="h-3.5 w-3.5 text-brand-leaf" /> Pilihan Aksi
                        </label>
                        <Select defaultValue="reboisasi">
                          <SelectTrigger className="border-white/20 bg-black/20 text-white focus:ring-brand-leaf/30">
                            <SelectValue placeholder="Pilih aksi relawan..." />
                          </SelectTrigger>
                          <SelectContent className="border-white/15 bg-brand-forest-dark text-white">
                            <SelectItem value="reboisasi">
                              Penanaman Pohon / Reboisasi
                            </SelectItem>
                            <SelectItem value="edukasi">
                              Pengajar Tim Edukasi Sekolah
                            </SelectItem>
                            <SelectItem value="sungai">
                              Aksi Bersih Sungai & Pesisir
                            </SelectItem>
                            <SelectItem value="media">
                              Dokumentasi & Media Sosial
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="pt-2">
                      <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          type="submit"
                          size="lg"
                          className="bg-brand-leaf text-brand-forest-dark hover:bg-brand-leaf-hover shadow-brand-leaf/20 hover:shadow-brand-leaf/40 w-full rounded-2xl py-6 text-base font-extrabold shadow-lg transition-all"
                        >
                          Kirim Pendaftaran Relawan <Send className="ml-2 h-4 w-4" />
                        </Button>
                      </motion.div>
                    </div>
                  </form>
                )}
              </motion.div>
            )}

            {/* Donation Box */}
            {activeTab === "donate" && (
              <motion.div
                key="donate"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="border-b border-white/10 pb-4 text-center">
                  <h3 className="flex items-center justify-center gap-2 text-2xl font-bold text-white">
                    <Heart className="text-brand-terracotta fill-brand-terracotta h-6 w-6" />
                    Donasi Bibit Pohon
                  </h3>
                  <p className="mx-auto mt-1 max-w-xl text-sm text-white/70">
                    Setiap <span className="text-brand-terracotta font-bold">Rp 25.000</span> mencakup 1 bibit pohon berkualitas, pemeliharaan 2 tahun oleh warga lokal, dan sertifikat digital.
                  </p>
                </div>

                {formSubmitted ? (
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex items-center gap-4 rounded-2xl border border-brand-terracotta bg-brand-terracotta/20 p-6 text-white shadow-lg"
                  >
                    <CheckCircle2 className="text-brand-terracotta h-10 w-10 shrink-0" />
                    <div>
                      <h4 className="text-lg font-bold text-white">Terima Kasih atas Donasi Anda!</h4>
                      <p className="mt-0.5 text-xs text-white/80">
                        Instruksi pembayaran dan e-sertifikat penanaman digital telah dikirimkan ke WhatsApp/Email Anda.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmitDonation} className="space-y-6">
                    {/* Donator Information */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="flex items-center gap-1.5 text-xs font-semibold text-white/90">
                          <User className="text-brand-terracotta h-3.5 w-3.5" /> Nama Donatur (E-Sertifikat)
                        </label>
                        <Input
                          required
                          type="text"
                          placeholder="Nama lengkap donatur..."
                          className="focus-visible:border-brand-terracotta focus-visible:ring-brand-terracotta/30 border-white/20 bg-black/20 px-4 py-3 text-white placeholder:text-white/40"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="flex items-center gap-1.5 text-xs font-semibold text-white/90">
                          <Mail className="text-brand-terracotta h-3.5 w-3.5" /> Email / WhatsApp Donatur
                        </label>
                        <Input
                          required
                          type="text"
                          placeholder="Email atau No. WA..."
                          className="focus-visible:border-brand-terracotta focus-visible:ring-brand-terracotta/30 border-white/20 bg-black/20 px-4 py-3 text-white placeholder:text-white/40"
                        />
                      </div>
                    </div>

                    {/* Quick Nominal Chips with Badges */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-semibold text-white/90">Pilih Nominal Donasi Pohon</label>
                        <span className="text-[11px] font-medium text-brand-terracotta">Rp 25.000 / Pohon</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                        {[
                          { amt: 25000, label: "1 Pohon" },
                          { amt: 50000, label: "2 Pohon", popular: true },
                          { amt: 100000, label: "4 Pohon" },
                          { amt: 250000, label: "10 Pohon" },
                        ].map((item) => {
                          const isSelected = donationAmount === item.amt && customDonation === "";
                          return (
                            <motion.button
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              key={item.amt}
                              type="button"
                              onClick={() => {
                                setDonationAmount(item.amt);
                                setCustomDonation("");
                              }}
                              className={`relative rounded-2xl border p-3.5 text-center transition-all duration-300 ${
                                isSelected
                                  ? "border-brand-terracotta bg-brand-terracotta/25 text-white shadow-lg shadow-brand-terracotta/20 ring-2 ring-brand-terracotta/50"
                                  : "border-white/20 bg-black/20 text-white/90 hover:border-white/40 hover:bg-white/10"
                              }`}
                            >
                              {item.popular && (
                                <span className="absolute -top-2.5 right-2 rounded-full bg-brand-terracotta px-2 py-0.5 text-[9px] font-extrabold uppercase text-white shadow-sm">
                                  Populer
                                </span>
                              )}
                              <div className="flex justify-center">
                                <TreePine className={`h-5 w-5 ${isSelected ? "text-brand-terracotta" : "text-white/70"}`} />
                              </div>
                              <div className="mt-1.5 text-sm font-bold">
                                Rp {item.amt.toLocaleString("id-ID")}
                              </div>
                              <div className="text-[11px] font-medium opacity-80">
                                {item.label}
                              </div>
                            </motion.button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Custom Amount Input with Currency Prefix */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-white/90">Atau Nominal Custom (Rp)</label>
                      <div className="relative flex items-center">
                        <div className="absolute left-3.5 flex items-center text-sm font-bold text-white/60">
                          Rp
                        </div>
                        <Input
                          type="number"
                          placeholder="Masukkan nominal custom (cth: 75000)..."
                          value={customDonation}
                          onChange={(e) => {
                            setCustomDonation(e.target.value);
                            setDonationAmount(Number(e.target.value));
                          }}
                          className="focus-visible:border-brand-terracotta focus-visible:ring-brand-terracotta/30 border-white/20 bg-black/20 pl-11 pr-4 py-3 text-white placeholder:text-white/40"
                        />
                      </div>
                    </div>

                    {/* Payment Method Quick Selector */}
                    <div className="space-y-2.5">
                      <label className="text-xs font-semibold text-white/90">Metode Pembayaran</label>
                      <div className="grid grid-cols-3 gap-3">
                        <button
                          type="button"
                          onClick={() => setPaymentMethod("qris")}
                          className={`flex items-center justify-center gap-2 rounded-xl border py-2.5 px-3 text-xs font-bold transition-all ${
                            paymentMethod === "qris"
                              ? "border-brand-terracotta bg-brand-terracotta/20 text-white ring-1 ring-brand-terracotta/40"
                              : "border-white/15 bg-black/20 text-white/70 hover:bg-white/5"
                          }`}
                        >
                          <QrCode className="h-4 w-4 text-brand-terracotta" /> QRIS Instant
                        </button>
                        <button
                          type="button"
                          onClick={() => setPaymentMethod("bank")}
                          className={`flex items-center justify-center gap-2 rounded-xl border py-2.5 px-3 text-xs font-bold transition-all ${
                            paymentMethod === "bank"
                              ? "border-brand-terracotta bg-brand-terracotta/20 text-white ring-1 ring-brand-terracotta/40"
                              : "border-white/15 bg-black/20 text-white/70 hover:bg-white/5"
                          }`}
                        >
                          <CreditCard className="h-4 w-4 text-brand-terracotta" /> Bank Transfer
                        </button>
                        <button
                          type="button"
                          onClick={() => setPaymentMethod("ewallet")}
                          className={`flex items-center justify-center gap-2 rounded-xl border py-2.5 px-3 text-xs font-bold transition-all ${
                            paymentMethod === "ewallet"
                              ? "border-brand-terracotta bg-brand-terracotta/20 text-white ring-1 ring-brand-terracotta/40"
                              : "border-white/15 bg-black/20 text-white/70 hover:bg-white/5"
                          }`}
                        >
                          <Wallet className="h-4 w-4 text-brand-terracotta" /> E-Wallet
                        </button>
                      </div>
                    </div>

                    {/* Dynamic Impact Summary Card */}
                    <div className="rounded-2xl border border-brand-terracotta/30 bg-brand-terracotta/15 p-4 text-white">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-terracotta/30 text-brand-terracotta">
                            <Sparkles className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <div className="text-xs font-medium text-white/80">Rincian Dampak Donasi Anda</div>
                            <div className="text-sm font-extrabold text-white">
                              {calculatedTrees > 0 ? (
                                <span className="flex items-center gap-1.5">
                                  <TreePine className="h-4 w-4 text-brand-terracotta shrink-0" />
                                  <span>
                                    <strong className="text-brand-terracotta">{calculatedTrees} Bibit Pohon</strong> Ditanam & Dirawat 2 Tahun
                                  </span>
                                </span>
                              ) : (
                                <span className="text-white/60">Pilih atau isi nominal donasi</span>
                              )}
                            </div>
                          </div>
                        </div>

                        {calculatedTrees > 0 && (
                          <Badge variant="terracotta" className="hidden items-center gap-1 text-xs sm:inline-flex">
                            <Award className="h-3.5 w-3.5" /> + E-Sertifikat
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-1">
                      <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          type="submit"
                          size="lg"
                          className="bg-linear-to-r from-brand-terracotta to-[#d97c5f] hover:from-brand-terracotta-hover hover:to-brand-terracotta shadow-brand-terracotta/25 hover:shadow-brand-terracotta/40 flex w-full items-center justify-center gap-2 rounded-2xl py-6 text-base font-extrabold text-white shadow-lg transition-all"
                        >
                          <Heart className="h-5 w-5 fill-white" /> Donasi Sekarang (Rp {donationAmount > 0 ? donationAmount.toLocaleString("id-ID") : 0})
                        </Button>
                      </motion.div>
                    </div>
                  </form>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
