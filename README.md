# Berkay Yılmaz | Kişisel Portfolyo

Düzce Üniversitesi **Yönetim Bilişim Sistemleri (YBS) 4. sınıf** öğrencisi Berkay Yılmaz’ın veri bilimi, makine öğrenmesi ve yapay zekâ odaklı kişisel portfolyo sitesi.

**Canlı site:** [berkayylmz53.github.io/berkayyilmaz](https://berkayylmz53.github.io/berkayyilmaz/)

---

## Özellikler

- Premium koyu tema (Linear / modern developer portfolio dili)
- Çok sayfalı yapı: Ana Sayfa, Hakkımda, Projeler
- 15 proje kartı, kategori filtreleri ve erişilebilir detay modalları
- Mobil uyumlu sticky navigasyon
- Scroll reveal animasyonları (`prefers-reduced-motion` destekli)
- SEO meta etiketleri, Open Graph ve semantic HTML
- Saf HTML, CSS ve vanilla JavaScript — framework yok

---

## Proje Yapısı

```
berkayyilmaz/
├── index.html      # Ana sayfa
├── hakkimda.html   # Biyografi, eğitim, beceriler
├── projeler.html   # 15 proje + filtre + modal
├── style.css       # Tasarım sistemi
├── script.js       # Menü, filtre, modal, reveal
├── profil.jpg      # Profil fotoğrafı
├── assets/
│   └── favicon.svg
└── README.md
```

---

## Teknolojiler

- HTML5
- CSS3 (custom properties, glassmorphism, responsive breakpoints)
- Vanilla JavaScript
- Google Fonts: Outfit, Inter, JetBrains Mono
- GitHub Pages

---

## Yerel Çalıştırma

1. Depoyu klonlayın:
   ```bash
   git clone https://github.com/BerkayYLMZ53/berkayyilmaz.git
   cd berkayyilmaz
   ```
2. `index.html` dosyasını tarayıcıda açın veya basit bir statik sunucu kullanın:
   ```bash
   npx serve .
   ```

---

## İletişim

- **GitHub:** [github.com/BerkayYLMZ53](https://github.com/BerkayYLMZ53)
- **LinkedIn:** [linkedin.com/in/berkay-yilmaz-253ab0292](https://www.linkedin.com/in/berkay-yilmaz-253ab0292/)
- **E-posta:** berkayy580@gmail.com

---

<p align="center"><i>© 2026 Berkay Yılmaz. Tüm hakları saklıdır.</i></p>

## NeuroScan canlı demo

- **Canlı uygulama:** https://berkay-neuroscan.streamlit.app/
- **Kaynak kodu:** https://github.com/BerkayYLMZ53/NeuroScan-Brain-Tumor-Classification
- **Modeller:** Custom CNN ve MobileNetV2
- **Test doğruluğu (proje sonuç CSV'sinden):** Custom CNN %69,19; MobileNetV2 %91,69
- **Uyarı:** Uygulama eğitim ve araştırma içindir; tıbbi teşhis amacı taşımaz.

Proje kartı ana sayfada ve Projeler sayfasında bulunur; yeni proje eklendiğinde toplam sayı 15 olur.

## Portfolyo V2 — Yeni özellikler

- **15 proje**: Önceki 14 çalışma korunur; NeuroScan canlı Streamlit demosu eklenir.
- **Özgeçmiş**: `assets/cv/` içinde herkese açık Türkçe ve İngilizce PDF dosyaları. Telefon ve referans bilgileri bu dosyalarda bulunmaz.
- **Sertifikalar**: `data/certificates.json` içinde CV'de belirtilen 4 gerçek eğitim/sertifika kaydı. Yeni kayıt eklemek için JSON listesine `name`, `issuer`, `year` ekleyin. `url` yalnızca gerçek doğrulama adresiniz varsa eklenmelidir.
- **Teknoloji haritası**: `data/projects.json` içindeki teknoloji alanlarından otomatik proje eşleştirme.
- **GitHub**: Herkese açık GitHub API üzerinden güncel repo bilgileri; API erişimi yoksa açık hata durumu gösterilir.
- **Portfolyo asistanı**: Kayıtlı CV ve proje bilgileri üzerinden anahtar kelimeli soru-cevap rehberi. **Bir LLM değildir**, harici ücretli API veya gizli anahtar gerektirmez.
- **Demo**: NeuroScan harici Streamlit uygulamasına bağlantı ve tarayıcıda çalışan eğitsel regresyon görselleştirmesi. Regresyon görseli gerçek eğitilmiş model sonucu değildir.
- **Dil**: TR/EN seçicisi ve genişletilebilir sözlük `enhancements.js` içinde. Yeni içerikler için `data-i18n` ve `dictionary.en` eşleştirmesi eklenebilir. İlk sürümde bazı eski proje açıklamaları özgün Türkçe içerikleriyle korunur.

### GitHub Pages kurulumu

Bu klasörün **içeriğini** GitHub repository kök dizinine yükleyin. `index.html`, `style.css`, `script.js`, `enhancements.js`, `data/` ve `assets/` aynı kök altında bulunmalı. GitHub Pages yayın kaynağı `main` / root olmalıdır.

### CV güncelleme

`assets/cv/Berkay_Yilmaz_CV_TR.pdf` ve `assets/cv/Berkay_Yilmaz_Resume_EN.pdf` dosyalarını yenileyebilirsiniz. Herkese açık PDF'lere telefon, kişisel adres veya üçüncü kişilerin referans bilgilerini izin almadan koymayın.

### Sınırlar

Tam yapay zekâ sohbeti, çalışır dış model servisi ve doğrulanmamış sertifika bağlantıları otomatik olarak üretilmez. GitHub API erişimi ve Streamlit demosunun uyanması ağ koşullarına bağlıdır. Tarayıcıda yapılan ağ entegrasyonları yayın sonrası test edilmelidir.


## V3 güncellemeleri
- **Dil:** Sağ üstte TR/EN düğmesi; temel sayfa arayüzü, proje özetleri, asistan ve blog iki dilli. Dinamik proje vaka çalışması metinlerinin bazıları yalnızca kaynak dilinde kalabilir; GitHub README kaynaklarını doğrulamadan birebir çevrilmiş teknik iddia eklenmedi.
- **Tema:** Güneş/ay düğmesi ile açık/koyu görünüm; tercih tarayıcıda saklanır.
- **Blog:** `blog.html` üzerinde veri sızıntısı, CNN/transfer öğrenme ve Python analizi hakkında özgün giriş yazıları; iki dilde. Yeni içerik için bu dosyadaki `blog-article` yapısını izleyin.
- **Portfolyo asistanı:** Gerçek üretken yapay zekâ değil; yerel bilgileri eşleştiren kural tabanlı rehber. Projeler, sertifikalar, CV, eğitim, iletişim ve blog sorularını yanıtlar. Gizli anahtar kullanılmaz.
- **Çeviri verisi:** `data/translations.json` genel metinleri, `data/projects.json` İngilizce proje özetlerini tutar.
- **Yayınlama:** ZIP içindeki dosyaları GitHub Pages yayın köküne yükleyin; `file://` üzerinden JSON fetch düzgün çalışmayabilir, test için `python -m http.server 8000` kullanın.


## V3.1 yayınlama notu

**Önemli:** GitHub repository kök dizinine ZIP dosyasını değil, ZIP içindeki **tüm dosya ve klasörleri** yükleyin. Özellikle `blog.html`, `script.js`, `enhancements.js`, `theme.js`, `data/` ve `assets/` klasörleri eksiksiz bulunmalı. GitHub deposunda yalnızca temel altı dosyanın kalması, tema ve dil etkileşimleri gibi özelliklerin çalışmamasına neden olur.

GitHub Pages ayarlarında `main` / `(root)` yayını açık olmalıdır. Yayın sonrası `https://berkayylmz53.github.io/berkayyilmaz/blog.html` adresini ayrıca test edin. Tarayıcı önbelleği nedeniyle eski görünüm sürerse `Ctrl+F5` ile zorla yenileyin.


## Google Analytics (isteğe bağlı)

- GA4 ölçüm kimliği: `G-5K2YL4PE1L`.
- `analytics-consent.js` ziyaretçi analitik iznini vermeden Google etiketini yüklemez.
- Site alt bilgisindeki **Çerez tercihleri** bağlantısı izni değiştirmek için kullanılabilir.
- İzin verildiğinde sayfa görüntüleme ve özel `neuroscan_demo_click`, `resume_open`, `github_click`, `linkedin_click` olayları izlenir.
- Canlı ziyaretleri Google Analytics **Gerçek zamanlı** raporunda, onay vererek test edin. Bu entegrasyon tarayıcıda uçtan uca doğrulanmalıdır.
- Veri koruma mevzuatı uyarınca sitenin ayrıca uygun gizlilik aydınlatma metnine ihtiyacı olabilir. Bu basit onay paneli tek başına hukuki uyum garantisi değildir.
