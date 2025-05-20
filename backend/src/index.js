// 1) Ortam değişkenlerini yükle
require('dotenv').config();

// 2) Gerekli paketleri import et
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// 3) Route dosyalarını import et
//    (import etme sırası: önce değişkenler, sonra app tanımı, sonra use)
const authRoutes      = require('./routes/auth.routes');
const questionRoutes  = require('./routes/question.routes');
const blogRoutes      = require('./routes/blog.routes');

// 4) Express uygulamasını oluştur
const app = express();

// 5) Global orta katmanlar (middleware)
app.use(cors());
app.use(express.json());

// 6) Route’ları app’e kaydet
app.use('/api/auth',     authRoutes);
app.use('/api/questions',questionRoutes);
app.use('/api/blog',     blogRoutes);

// 7) Veritabanı bağlantısı ve sunucu başlatma
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser:    true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('🗄️ MongoDB bağlı');
    app.listen(PORT, () => {
      console.log(`🚀 Sunucu ${PORT} portunda çalışıyor`);
    });
  })
  .catch(err => console.error('DB bağlantı hatası:', err));
