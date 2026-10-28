<div align="center">

# 👨‍💻 Berkay Yılmaz | Kişisel Portfolyo

**Yönetim Bilişim Sistemleri 4. Sınıf Öğrencisi**  
Düzce Üniversitesi · Veri Bilimi · Makine Öğrenmesi · Yapay Zekâ

Kişisel çalışmalarımı, teknik becerilerimi, sertifikalarımı ve canlı proje demolarımı bir araya getirdiğim modern ve etkileşimli portfolyo web sitesi.

[![Web Sitesi](https://img.shields.io/badge/🌐_Web_Sitesini_Ziyaret_Et-2563EB?style=for-the-badge)](https://berkayylmz53.github.io/berkayyilmaz/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github)](https://github.com/BerkayYLMZ53)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/berkay-yilmaz-253ab0292/)

</div>

---

## ✨ Proje Hakkında

Bu portfolyo, Yönetim Bilişim Sistemleri eğitimim sırasında geliştirdiğim projeleri ve teknik gelişimimi anlaşılır, erişilebilir ve güncel bir biçimde sunmak için hazırlandı. **HTML, CSS ve vanilla JavaScript** ile geliştirildi; **GitHub Pages** üzerinde yayınlanmak üzere tasarlandı.

## 🚀 Özellikler

- **15 proje:** Makine öğrenmesi, yapay zekâ, veri analizi ve yazılım alanlarındaki çalışmalar; kategori filtreleri ve proje detayları.
- **Canlı NeuroScan demosu:** Beyin MR görüntülerini Custom CNN ve MobileNetV2 modelleriyle sınıflandıran ayrı Streamlit uygulamasına bağlantı.
- **TR / EN dil desteği:** Ana arayüz, blog, proje özetleri ve asistan için iki dilli içerikler. Bazı ayrıntılı eski proje metinleri henüz tamamen çevrilmemiş olabilir.
- **Açık / koyu tema:** Ziyaretçinin seçimini tarayıcıda hatırlayan tema geçişi.
- **CV:** Türkçe ve İngilizce indirilebilir PDF özgeçmişler.
- **Sertifikalar:** BTK Akademi ve Udemy kaynaklı dört eğitim/sertifika kaydı; yeni sertifikalara açık veri yapısı.
- **GitHub verileri:** Herkese açık GitHub API üzerinden repo bilgileri; erişim hatalarında açıklayıcı durum mesajları.
- **Teknoloji haritası:** Teknolojilerin ilgili projelerle ilişkilendirilmesi.
- **Portfolyo asistanı:** Eğitimim, projelerim, CV'm ve sertifikalarım hakkında yerel içerikten yanıt veren **kural tabanlı rehber** (üretken yapay zekâ/LLM değildir).
- **Teknik blog:** Veri sızıntısı, CNN ve transfer öğrenme, Python ile veri analizi üzerine başlangıç yazıları.
- **Mobil uyum:** Responsive düzen, animasyonlar ve erişilebilirlik odaklı arayüz.

## 🧠 Öne Çıkan Proje: NeuroScan

**NeuroScan**, beyin MR görüntülerini dört sınıfta (*Glioma, Meningioma, Pituitary, No Tumor*) sınıflandırmak için geliştirdiğim derin öğrenme projesidir.

| Model | Test doğruluğu |
|---|---:|
| Custom CNN | %69,19 |
| MobileNetV2 | %91,69 |

Bu değerler proje sonuç dosyasındaki test doğruluklarıdır; klinik geçerlilik göstergesi değildir.

**Teknolojiler:** Python, TensorFlow/Keras, Streamlit

- 🎮 **[NeuroScan canlı demo](https://berkay-neuroscan.streamlit.app/)**
- 💻 **[NeuroScan kaynak kodları](https://github.com/BerkayYLMZ53/NeuroScan-Brain-Tumor-Classification)**

> ⚠️ **Uyarı:** NeuroScan yalnızca eğitim ve araştırma amacıyla geliştirilmiştir. Tıbbi teşhis veya tedavi kararı için kullanılmamalıdır.

## 🛠️ Teknolojiler

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=flat-square&logo=githubpages&logoColor=white)

Web sitesi için harici bir frontend framework veya zorunlu build aşaması kullanılmaz. Proje içeriklerimde Python, Pandas, Scikit-learn, Streamlit ve farklı makine öğrenmesi teknikleri de yer alır.

## 📂 Proje Yapısı

```text
berkayyilmaz/
├── index.html                 # Ana sayfa
├── hakkimda.html              # Biyografi, eğitim, beceriler ve sertifikalar
├── projeler.html              # Proje kartları, filtreleme ve detaylar
├── blog.html                  # Teknik blog
├── style.css                  # Tasarım ve responsive stil sistemi
├── script.js                  # Temel site etkileşimleri
├── enhancements.js            # Portfolyo özellikleri ve etkileşimler
├── theme.js                   # Açık/koyu tema yönetimi
├── profil.jpg                 # Profil fotoğrafı
├── data/
│   ├── projects.json          # Proje verileri
│   ├── certificates.json      # Sertifika verileri
│   └── translations.json      # Dil içerikleri
├── assets/
│   ├── favicon.svg
│   └── cv/
│       ├── Berkay_Yilmaz_CV_TR.pdf
│       └── Berkay_Yilmaz_Resume_EN.pdf
└── README.md
```

## 💻 Yerel Kurulum

Projeyi klonlayın:

```bash
git clone https://github.com/BerkayYLMZ53/berkayyilmaz.git
cd berkayyilmaz
```

JSON dosyalarını tarayıcının güvenli biçimde yükleyebilmesi için yerel bir HTTP sunucusu başlatın:

```bash
python -m http.server 8000
```

Ardından tarayıcıda **http://localhost:8000** adresini açın.

> `index.html` dosyasını doğrudan `file://` üzerinden açmak bazı JSON isteklerinde tarayıcı güvenlik kısıtlamasına takılabilir.

## 🌍 GitHub Pages ile Yayınlama

1. Dosyaları `berkayyilmaz` reposunun **kök dizinine** yükleyin (`index.html` kökte olmalı).
2. Repository **Settings → Pages** bölümünü açın.
3. Yayın kaynağını **Deploy from a branch**, dalı **main** ve klasörü **/(root)** olacak şekilde ayarlayın.
4. Yayın sonrasında [canlı siteyi](https://berkayylmz53.github.io/berkayyilmaz/) ziyaret edin.

GitHub API verileri ve Streamlit demosu gibi dış bağlantılar ağ koşullarına ve ilgili servislerin kullanılabilirliğine bağlıdır.

## 📝 İçerikleri Güncelleme

| Güncellenecek içerik | Dosya / konum |
|---|---|
| Proje bilgileri | `data/projects.json` ve ilgili sayfa içerikleri |
| Sertifikalar | `data/certificates.json` |
| Dil metinleri | `data/translations.json` ve ilgili arayüz metinleri |
| Blog yazıları | `blog.html` |
| Türkçe CV | `assets/cv/Berkay_Yilmaz_CV_TR.pdf` |
| İngilizce CV | `assets/cv/Berkay_Yilmaz_Resume_EN.pdf` |
| Tema görünümü | `style.css`, `theme.js` |

Yeni sertifika eklerken mevcut JSON yapısında **`name`**, **`issuer`**, **`year`** alanlarını kullanın. Belge doğrulama adresini yalnızca gerçekten varsa ekleyin. Herkese açık CV'lere özel telefon, açık adres veya üçüncü kişilere ait izinsiz referans bilgileri eklemeyin.

## 🎓 Eğitim ve İlgi Alanları

- **Düzce Üniversitesi:** Yönetim Bilişim Sistemleri, 4. sınıf (CV'deki eğitim dönemi: 2024–2027)
- **Anadolu Üniversitesi (Açıköğretim):** Bilgisayar Programcılığı (CV'de belirtilen dönem: 2024–2026)
- **Odak alanları:** Veri bilimi, veri analitiği, makine öğrenmesi, yapay zekâ uygulamaları

## 📫 İletişim

- 🌐 [Kişisel Web Sitesi](https://berkayylmz53.github.io/berkayyilmaz/)
- 💼 [LinkedIn](https://www.linkedin.com/in/berkay-yilmaz-253ab0292/)
- 🐙 [GitHub](https://github.com/BerkayYLMZ53)
- ✉️ [E-posta Gönder](mailto:berkayy580@gmail.com)

---

<div align="center">

**Öğrenmeye, geliştirmeye ve üretmeye devam ediyorum.**

<sub>© 2026 Berkay Yılmaz</sub>

</div>
