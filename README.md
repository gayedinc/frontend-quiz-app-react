# 🧠 Frontend Quiz App – React

> Kullanıcıların frontend konularında kendilerini test edebileceği, kategori bazlı soru sistemi, anlık geri bildirim ve tema desteği sunan modern bir React quiz uygulaması.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5)

## 🔍 Proje Genel Bakış

**Frontend Quiz App** kullanıcıların HTML, CSS, JavaScript ve Accessibility gibi farklı frontend kategorilerinde quiz çözmesini sağlayan bir uygulamadır.  
Vanilla JS sürümünün ardından React ile yeniden geliştirilen bu versiyon bileşen tabanlı mimarisiyle daha esnek, yönetilebilir ve kullanıcı dostu bir deneyim sunar.

![image](https://github.com/user-attachments/assets/858825dc-7076-4467-94f6-dde0c6c1e55f)

## 🚀 Temel Özellikler

### 📂 Dinamik Soru Kategorileri
- Kullanıcı başlangıç ekranında HTML, CSS, JavaScript ve Accessibility konularını içeren **kategori seçeneklerinden** birini seçebilir.
- Her kategoriye ait sorular farklı dosyalarda tutulur ve dinamik olarak yüklenir.

![image](https://github.com/user-attachments/assets/27469877-adec-4fa0-a210-be9b1dcba4f5)

### 🌗 Tema Seçimi (Dark/Light)
- Kullanıcılar arayüzü karanlık veya aydınlık modda kullanabilir.
- Tercihler `localStorage`'da saklanır, sayfa yenilense bile aynı tema korunur.

![image](https://github.com/user-attachments/assets/c081bed1-7bc0-490f-93bc-b84dc9121462)

### 📊 Anında Geri Bildirim & Sonuç Ekranı
- Her soruya verilen yanıtın doğru veya yanlış olduğu **hemen gösterilir**.

![image](https://github.com/user-attachments/assets/3b1a680e-9973-4559-bd7d-a929c9786816)

- Quiz sonunda kullanıcıya toplam doğru sayısı ve görsel başarı durumu sunulur.

![image](https://github.com/user-attachments/assets/8943e626-cf33-4da5-a55b-fc39e8b38993)

### ⚛️ React Bileşen Yapısı
- Uygulama tamamen **bileşen tabanlı** geliştirildi.
- Kategoriler, sorular, cevap şıkları ve sonuç ekranı gibi her bölüm kendi bileşeninde yönetilir.
- State yönetimi ve event handling işlemleri sade ve etkili biçimde yürütülür.

### 💾 Kalıcı Ayarlar
- Tema tercihleri gibi kullanıcı ayarları `localStorage` kullanılarak saklanır.

### 📱 Responsive Tasarım
- Tüm cihazlarda sorunsuz çalışır: mobil, tablet ve masaüstü uyumludur.
- Duyarlı tasarım sayesinde kullanıcı deneyimi her platformda tutarlıdır.

## 💡 Kullanıcı Deneyimi & Hedeflerim

- **Akıcı ve hızlı quiz deneyimi** sunmak  
- Kullanıcının kategori bazlı ilerlemesini desteklemek  
- Tema tercihlerinin kalıcı olmasını sağlamak  
- Yanıtlara anında geri bildirim vererek kullanıcıyı teşvik etmek  
- Kodun sürdürülebilir ve anlaşılır yapıda kalmasına özen göstermek  

## 🛠️ Kullanılan Teknolojiler

- React  
- JavaScript (ES6+)  
- CSS3  
- localStorage  
- Responsive Design (Media Queries, Flexbox)

🟢 **Canlı Demo:**  
🔗 [https://frontend-quiz-app-react.vercel.app](https://frontend-quiz-app-react.vercel.app)

## 📂 Proje Yapısı

📁 public  
📁 src  
 ┣ 📁 assets  
 ┃ ┣ 📄 css                    # Stil dosyaları  
 ┃ ┗ 📄 images                 # UI ikonları ve logolar  
 ┣ 📁 components               # Reusable React bileşenleri  
 ┣ 📁 data                     # Soru verileri (JSON formatında)  
 ┣ 📄 App.jsx                  # Ana uygulama bileşeni  
 ┣ 📄 main.jsx                 # React DOM entry point  
 ┗ 📄 index.html               # HTML şablonu  

📄 package.json                # Proje bağımlılıkları  
📄 README.md                   # Proje açıklamaları  
