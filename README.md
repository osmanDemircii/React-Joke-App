# 😂 Şaka Uygulaması

React ve Vite kullanarak yapılmış bir şaka uygulaması. Uygulamada JokeAPI'den şakalar çekilir ve My Memory Translated API'si kullanılarak otomatik çeviri yapılır.

---

## 🚀 Kurulum

### Gereksinimler
- Node.js 16+
- npm 8+

### Adımlar
```bash
# 1. Bağımlılıkları yükle
npm install

# 2. Development sunucusunu başlat
npm run dev

# 3. http://localhost:5173 adresine git
```

---

## 📖 Nasıl Kullanılır?

1. **Dil seçin:** Sol üstteki butondan TR (Türkçe) veya ENG (İngilizce) seçin
2. **Kategori seçin:** Dropdown'tan şaka kategorisini seçin
3. **Şaka türü seçin:** Tek veya Çift parça şaka seçin
4. **Şaka yükle:** "Yeni Şaka Ürет" butonuna tıklayın

---

## 🎲 Şaka Kategorileri

- **Any** - Herhangi bir kategori
- **Misc** - Karışık şakalar
- **Programming** - Programlama şakalar
- **Dark** - Kara mizah
- **Pun** - Kelime oyunları
- **Spooky** - Korkunç şakalar
- **Christmas** - Noel şakalar

---

## 📝 Şaka Türleri

- **Tek:** Tek cümleden oluşan şakalar
- **Çift:** Soru-cevap formatında şakalar (Setup + Delivery)

---

## 🏗️ Dosya Yapısı

```
src/
├── Comp/
│   ├── BtnComp.jsx           # Şaka yükleme butonu
│   ├── CardComp.jsx          # Şakayı gösteren kart
│   ├── SelectComp.jsx        # Kategori seçimi
│   └── ToggleBtnComp.jsx     # Dil ve şaka türü seçimi
├── CssComp/
│   ├── BtnCssComp.css
│   ├── CardCssComp.css
│   ├── SelectCssComp.css
│   └── ToggleBtnCssComp.css
├── App.jsx                   # Ana bileşen
├── App.css                   # Ana stiller
├── index.css                 # Global stiller
└── main.jsx                  # Uygulama giriş noktası
```

---

## 🛠️ Kullanılan Teknolojiler

- **React 18** - Arayüz kütüphanesi
- **Vite** - Build aracı ve dev server
- **JokeAPI** - Şaka verisi kaynağı
- **My Memory Translated** - Çeviri hizmeti
- **CSS3** - Stil oluşturma

---

## 🔌 API'ler

### JokeAPI
```
https://v2.jokeapi.dev/joke/{category}?type={type}
```
- `category`: Any, Misc, Programming, Dark, Pun, Spooky, Christmas
- `type`: single, twopart

### My Memory Translated
```
https://api.mymemory.translated.net/get?q={metin}&langpair=en|tr
```

---

## 📱 Bileşenler

### BtnComp.jsx
Şaka yükleme butonunu gösterir. Yükleme sırasında "⏳ Hazırlanıyor..." yazısı gösterilir.

### CardComp.jsx
Seçilen şakayı ekranda gösterir. Şaka kategorisi ve türü bilgisini de gösterir.

### SelectComp.jsx
7 kategoriden şaka seçimi yapılır. Dropdown menüdür ve Türkçe/İngilizce öğeleri vardır.

### ToggleBtnComp.jsx
İki seçenek arasında geçiş yapar. Dil seçimi (TR/ENG) ve şaka türü seçimi (Tek/Çift) için kullanılır.

---

## 💾 State Yönetimi

```javascript
category      // Seçili kategori
jokeType      // Seçili şaka türü (Tek/Çift)
displayLang   // Gösterim dili (TR/ENG)
jokeData      // API'den gelen şaka verisi
loading       // Yükleme durumu
translatedJoke // Çevrilen şaka
```

---

## 🎨 Renk Şeması

```
Arka Plan:    #242424 (Koyu gri)
Yazı:         #fff (Beyaz)
Açık yazı:    #ccc (Açık gri)
Border:       #ccc (Açık gri)
Toggle aktif: #555 (Gri)
```

---

## 🔄 Nasıl Çalışır?

1. Kullanıcı kategori ve şaka türü seçer
2. "Yeni Şaka Ürет" butonuna tıklar
3. JokeAPI'ye istek gönderilir
4. Şaka verisi alınır ve `jokeData` state'ine kaydedilir
5. Eğer Türkçe seçiliyse, şaka My Memory API'si ile çevrilir
6. Çevrilen şaka `translatedJoke` state'ine kaydedilir
7. CardComp seçili dile göre şakayı gösterir

---

## 🐛 Sık Sorunlar ve Çözümleri

**Port 5173 zaten kullanılıyor**
```bash
npm run dev -- --port 3000
```

**Şaka yüklenmedi**
- Tarayıcıyı yenile (Ctrl+F5 veya Cmd+Shift+R)
- İnternet bağlantısını kontrol et
- Tarayıcı konsolunu aç (F12) ve hataları kontrol et

**Çeviri çalışmıyor**
- İnternet bağlantısını kontrol et
- My Memory API sunucusunun çalıştığını kontrol et

**Stil yüklenmedi**
- Tarayıcıyı sabit yenile (Ctrl+F5)
- Vite sunucusunu yeniden başlat

---

## 📦 Production Build

```bash
# Optimize edilmiş build oluştur
npm run build

# Oluşturulan dosyalar dist/ klasöründe olacak
npm run preview
```

---

## 📄 Lisans

Bu proje MIT Lisansı altında yayınlanmıştır.

---

## 📚 Kaynaklar

- **JokeAPI:** https://jokeapi.dev/
- **My Memory Translated:** https://mymemory.translated.net/
- **React Dokümantasyonu:** https://react.dev/
- **Vite Dokümantasyonu:** https://vitejs.dev/

---

<div align="center">

**Keyifli Şakalar! 😄**

</div>
