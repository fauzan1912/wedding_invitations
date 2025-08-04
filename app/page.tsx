"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Calendar, MapPin, Clock, Gift, Users, Phone, Mail, CalendarPlus, Navigation, ExternalLink } from "lucide-react"
import Image from "next/image"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

interface FloatingHeart {
  id: number
  left: string
  animationDelay: string
}

interface LocationData {
  name: string
  address: string
  googleMapsUrl: string
  coordinates: {
    lat: number
    lng: number
  }
}

export default function WeddingInvitation() {
  const [showInvitation, setShowInvitation] = useState(false)
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [floatingHearts, setFloatingHearts] = useState<FloatingHeart[]>([])
  const [rsvpForm, setRsvpForm] = useState({
    name: "",
    attendance: "",
    guests: "",
    message: "",
  })

  // Wedding date
  const weddingDate = new Date("2025-08-28T08:00:00")

  // Initialize floating hearts on client side only
  useEffect(() => {
    const hearts = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDelay: `${i * 2}s`,
    }))
    setFloatingHearts(hearts)
  }, [])

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = weddingDate.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // ===== KONFIGURASI LOKASI =====
  const weddingLocation: LocationData = {
    name: "Kediaman Mempelai Wanita",
    address: "Jeruklegi, RT01/RW05, Katongan, Nglipar, Gunungkidul",
    googleMapsUrl: "https://maps.app.goo.gl/RdTDu9zscmAT4fhv9",
    coordinates: {
      lat: -7.863848692333188,
      lng: 110.663056256334,
    },
  }

  // Navigation functions
  const openGoogleMaps = (location: LocationData) => {
    window.open(location.googleMapsUrl, "_blank")
  }


  const openDirections = (location: LocationData) => {
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${location.coordinates.lat},${location.coordinates.lng}`
    window.open(directionsUrl, "_blank")
  }

  // Add to calendar function
  const addToCalendar = () => {
    const startDate = "20250828T020000Z"
    const endDate = "20250828T060000Z"
    const title = "Pernikahan Eva & Anang"
    const details = "Akaad dan Repsepsi :Kediaman Mempelai Wanita"
    const location = "Jeruklegi, Katongan, Nglipar, Gunungkidul"

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      title,
    )}&dates=${startDate}/${endDate}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`

    window.open(googleCalendarUrl, "_blank")
  }

  const handleRSVPSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Terima kasih atas konfirmasi kehadiran Anda!")
    setRsvpForm({ name: "", attendance: "", guests: "", message: "" })
  }

  const openInvitation = () => {
    setShowInvitation(true)
  }

  const copyAddress = (location: LocationData) => {
    navigator.clipboard.writeText(location.address)
    alert("Alamat berhasil disalin!")
  }

  // Landing Page Component
  if (!showInvitation) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-900 via-rose-800 to-pink-900 flex items-center justify-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-rose-300/20 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-pink-300/20 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute bottom-20 left-32 w-24 h-24 bg-rose-400/20 rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-32 right-16 w-12 h-12 bg-pink-400/20 rounded-full animate-bounce delay-700"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
          <div className="animate-fade-in-up">
            {/* Decorative elements */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-0.5 bg-rose-300"></div>
                <Heart className="w-8 h-8 text-rose-300 animate-pulse" />
                <div className="w-16 h-0.5 bg-rose-300"></div>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-light text-rose-100 mb-2 tracking-wider animate-slide-in-left">
              THE WEDDING OF
            </h1>

            {/* Couple Photo */}
            <div className="w-48 h-48 md:w-64 md:h-64 mx-auto mb-8 rounded-full overflow-hidden border-4 border-rose-300/50 shadow-2xl animate-scale-in">
              <Image
                src="/images/couple/depan.jpg"
                alt="Eva & Anang"
                width={256}
                height={256}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            <h2 className="text-5xl md:text-7xl font-serif text-white mb-4 animate-slide-in-right">Eva & Anang</h2>

            <p className="text-rose-200 text-lg md:text-xl mb-8 font-light animate-fade-in delay-500">
              Kamis, 28 Agustus 2025
            </p>

            <Button
              onClick={openInvitation}
              className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 animate-bounce-in delay-700"
            >
              <Heart className="w-5 h-5 mr-2" />
              Buka Undangan
            </Button>
          </div>
        </div>

        {/* Floating hearts animation - only render on client */}
        {floatingHearts.length > 0 && (
          <div className="absolute inset-0 pointer-events-none">
            {floatingHearts.map((heart) => (
              <Heart
                key={heart.id}
                className={`absolute w-4 h-4 text-rose-300/30 animate-float-${heart.id + 1}`}
                style={{
                  left: heart.left,
                  animationDelay: heart.animationDelay,
                }}
              />
            ))}
          </div>
        )}
      </div>
    )
  }

  // Main Invitation Content
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-pink-50 animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 via-pink-50 to-rose-50">
        <div className="absolute inset-0 bg-[url('/images/couple/bg.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-slide-up">
          <div className="mb-8">
            <Heart className="w-16 h-16 text-rose-500 mx-auto mb-6 animate-pulse" />
            <h1 className="text-6xl md:text-8xl font-serif text-rose-800 mb-4 animate-slide-in-left">Eva & Anang</h1>
            <div className="w-32 h-1 bg-rose-400 mx-auto mb-6 animate-expand"></div>
            <p className="text-xl md:text-2xl text-rose-600 mb-8 font-light animate-fade-in delay-300">
              Dengan penuh sukacita, kami mengundang Anda untuk merayakan hari bahagia kami
            </p>
            <div className="flex items-center justify-center gap-4 text-rose-700 animate-slide-in-right delay-500">
              <Calendar className="w-6 h-6" />
              <span className="text-lg font-medium">Kamis, 28 Agustus 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Timer Section */}
      <section className="py-16 px-4 bg-rose-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-8 animate-fade-in">Menuju Hari Bahagia</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Hari", value: timeLeft.days },
              { label: "Jam", value: timeLeft.hours },
              { label: "Menit", value: timeLeft.minutes },
              { label: "Detik", value: timeLeft.seconds },
            ].map((item, index) => (
              <div
                key={item.label}
                className={`bg-rose-700 rounded-lg p-4 transform hover:scale-105 transition-all duration-300 animate-bounce-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">{item.value}</div>
                <div className="text-rose-200 text-sm uppercase tracking-wide">{item.label}</div>
              </div>
            ))}
          </div>
          <Button
            onClick={addToCalendar}
            className="bg-white text-rose-800 hover:bg-rose-50 transform hover:scale-105 transition-all duration-300"
          >
            <CalendarPlus className="w-5 h-5 mr-2" />
            Tambah ke Kalender
          </Button>
        </div>
      </section>

      {/* About Couple Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-serif text-rose-800 mb-4">Tentang Kami</h2>
            <div className="w-24 h-1 bg-rose-400 mx-auto animate-expand"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card className="bg-white/80 backdrop-blur-sm border-rose-200 shadow-lg transform hover:scale-105 transition-all duration-500 animate-slide-in-left">
              <CardHeader className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-rose-200 transform hover:rotate-6 transition-transform duration-300">
                  <Image
                    src="/images/couple/cewek.jpg"
                    alt="Eva"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-2xl font-serif text-rose-800">Eva Ismanida</CardTitle>
                <CardDescription className="text-rose-600">Putri dari Bapak Mujianto & Ibu Marsinah</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  Jeruklegi, RT 01/RW 05, Katongan, Nglipar, Gunungkidul, Yogyakarta.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-rose-200 shadow-lg transform hover:scale-105 transition-all duration-500 animate-slide-in-right">
              <CardHeader className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-rose-200 transform hover:rotate-6 transition-transform duration-300">
                  <Image
                    src="/images/couple/cowok.jpg"
                    alt="Anang"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-2xl font-serif text-rose-800">Anang Ariwibowo</CardTitle>
                <CardDescription className="text-rose-600">Putra dari Bapak Sumaryo (Alm) & Ibu Sutarni</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  Jeruklegi, RT 01/RW 05, Katongan, Nglipar, Gunungkidul, Yogyakarta.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Wedding Details */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-serif text-rose-800 mb-4">Detail Acara</h2>
            <div className="w-24 h-1 bg-rose-400 mx-auto animate-expand"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white border-rose-200 shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-500 animate-slide-in-left">
              <CardHeader className="text-center bg-rose-50">
                <CardTitle className="text-2xl font-serif text-rose-800 flex items-center justify-center gap-2">
                  <Heart className="w-6 h-6 animate-pulse" />
                  Akad Nikah
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3 transform hover:translate-x-2 transition-transform duration-300">
                  <Calendar className="w-5 h-5 text-rose-500" />
                  <span>Kamis, 28 Agustus 2025</span>
                </div>
                <div className="flex items-center gap-3 transform hover:translate-x-2 transition-transform duration-300">
                  <Clock className="w-5 h-5 text-rose-500" />
                  <span>09:00 WIB</span>
                </div>
                <div className="flex items-start gap-3 transform hover:translate-x-2 transition-transform duration-300">
                  <MapPin className="w-5 h-5 text-rose-500 mt-1" />
                  <div>
                    <p className="font-medium">Kediaman Mempelai Wanita</p>
                    <p className="text-sm text-gray-600">Jeruklegi, RT 01/RW 05, Katongan, Nglipar, Gunungkidul, Yogyakarta.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-rose-200 shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-500 animate-slide-in-right">
              <CardHeader className="text-center bg-rose-50">
                <CardTitle className="text-2xl font-serif text-rose-800 flex items-center justify-center gap-2">
                  <Users className="w-6 h-6 animate-pulse" />
                  Resepsi
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3 transform hover:translate-x-2 transition-transform duration-300">
                  <Calendar className="w-5 h-5 text-rose-500" />
                  <span>Sabtu, 28 Agustus 2025</span>
                </div>
                <div className="flex items-center gap-3 transform hover:translate-x-2 transition-transform duration-300">
                  <Clock className="w-5 h-5 text-rose-500" />
                  <span>10:00 - Selesai WIB</span>
                </div>
                <div className="flex items-start gap-3 transform hover:translate-x-2 transition-transform duration-300">
                  <MapPin className="w-5 h-5 text-rose-500 mt-1" />
                  <div>
                    <p className="font-medium">Kediaman Mempelai Wanita</p>
                    <p className="text-sm text-gray-600">Jeruklegi, RT 01/RW 05, Katongan, Nglipar, Gunungkidul, Yogyakarta.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-serif text-rose-800 mb-4">Galeri Kami</h2>
            <div className="w-24 h-1 bg-rose-400 mx-auto animate-expand"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className={`aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-110 hover:rotate-2 animate-scale-in`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <Image
                  src={`/images/gallery/gallery-${i}.jpg`}
                  alt={`Gallery ${i}`}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gift Section */}
      <section className="py-20 px-4 bg-white/50 ">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-serif text-rose-800 mb-4">Amplop Digital</h2>
            <div className="w-24 h-1 bg-rose-400 mx-auto mb-4 animate-expand"></div>
            <p className="text-gray-600">Doa restu Anda adalah hadiah yang sangat berarti bagi kami</p>
          </div>

          <div className="grid md:grid-cols-1 gap-8">
            <Card className="bg-white border-rose-200 shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-500 animate-slide-in-left">
              <CardHeader className="text-center">
                <Gift className="w-12 h-12 text-rose-500 mx-auto mb-4 animate-bounce" />
                <CardTitle className="text-xl font-serif text-rose-800">Mandiri</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-2">
                <p className="text-2xl font-mono font-bold text-gray-800">1370024396620</p>
                <p className="text-gray-600">Eva Ismanida</p>
                <Button
                  variant="outline"
                  className="mt-4 bg-white text-rose-600 border-rose-300 hover:bg-rose-50 transform hover:scale-105 transition-all duration-300"
                  onClick={() => navigator.clipboard.writeText("1370024396620")}
                >
                  Salin Nomor Rekening
                </Button>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Location Section - Replacing Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-serif text-rose-800 mb-4">Lokasi Acara</h2>
            <div className="w-24 h-1 bg-rose-400 mx-auto animate-expand"></div>
            <p className="text-gray-600 mt-4">Akad nikah dan resepsi akan dilaksanakan di lokasi yang sama</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Card className="bg-white border-rose-200 shadow-lg transform hover:scale-105 transition-all duration-500 animate-slide-in-left">
              <CardHeader className="text-center">
                <MapPin className="w-12 h-12 text-rose-500 mx-auto mb-4 animate-bounce" />
                <CardTitle className="text-2xl font-serif text-rose-800">{weddingLocation.name}</CardTitle>
                <CardDescription className="text-rose-600">{weddingLocation.address}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center space-y-3">
                  <div className="bg-rose-50 p-4 rounded-lg">
                    <p className="font-semibold text-rose-800 mb-2">Jadwal Acara:</p>
                    <p className="text-gray-700">🕰️ Akad Nikah: 08:00 - 10:00 WIB</p>
                    <p className="text-gray-700">🎉 Resepsi: 11:00 - 15:00 WIB</p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Button
                      onClick={() => openDirections(weddingLocation)}
                      className="bg-rose-500 hover:bg-rose-600 text-white transform hover:scale-105 transition-all duration-300"
                    >
                      <Navigation className="w-5 h-5 mr-2" />
                      Buka Petunjuk Arah
                    </Button>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => openGoogleMaps(weddingLocation)}
                        className="flex-1 text-rose-600 border-rose-300 hover:bg-rose-50"
                      >
                        <MapPin className="w-4 h-4 mr-1" />
                        Google Maps
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyAddress(weddingLocation)}
                        className="flex-1 text-rose-600 border-rose-300 hover:bg-rose-50"
                      >
                        <MapPin className="w-4 h-4 mr-1" />
                        Salin Alamat
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="animate-slide-in-right">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  // src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.0!2d${weddingLocation.coordinates.lng}!3d${weddingLocation.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNTInMDIuNSJTIDExMMKwMzknNDUuMyJF!5e0!3m2!1sen!2sid!4v1640995200000!5m2!1sen!2sid`}
                  src={`https://www.google.com/maps?q=${weddingLocation.coordinates.lat},${weddingLocation.coordinates.lng}&hl=id&z=16&output=embed`}
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${weddingLocation.name}`}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-rose-800 text-white">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <Heart className="w-8 h-8 mx-auto mb-4 text-rose-200 animate-pulse" />
          <h3 className="text-2xl font-serif mb-4">Eva & Anang</h3>
          <p className="text-rose-200 mb-4">
            "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri,
            supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang."
          </p>
          <p className="text-sm text-rose-300">QS. Ar-Rum: 21</p>
          <div className="mt-8 pt-8 border-t border-rose-700">
            <p className="text-rose-300">© 2025 - Dibuat dengan ❤️ untuk Eva & Anang</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
