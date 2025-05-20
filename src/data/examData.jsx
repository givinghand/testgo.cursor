import React from "react";
import { Award, TrendingUp, Users, FileText, CheckCircle, BookOpen, Brain, GraduationCap, Globe, BookCopy, Lightbulb, Atom, FlaskConical, Leaf, Landmark, Map, Scroll, Drama, HelpCircle, Sigma as SquareSigma, Compass, Edit, Briefcase } from 'lucide-react';

export const lgsSubjects = [
  { 
    id: "turkce", name: "Türkçe", icon: <BookOpen className="h-8 w-8 text-red-500" />, 
    image: "https://images.unsplash.com/photo-1513109209089-9430138987f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3N8ZW58MHx8MHx8fDA&auto=format&fit=crop&w=200&q=60",
    topics: ["Fiilimsiler", "Cümlenin Öğeleri", "Fiil Çatısı", "Sözcükte Anlam", "Cümlede Anlam", "Cümle Çeşitleri", "Yazım Kuralları", "Paragraf", "Noktalama İşaretleri", "Anlatım Bozuklukları"]
  },
  { 
    id: "matematik", name: "Matematik", icon: <SquareSigma className="h-8 w-8 text-blue-500" />, 
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWF0aGVtYXRpY3N8ZW58MHx8MHx8fDA&auto=format&fit=crop&w=200&q=60",
    topics: ["Çarpanlar Katlar", "Üslü İfadeler", "Kareköklü İfadeler", "Veri Analizi", "Basit Olayların Olma olasılığı", "Cebirsel İfadeler ve Özdeşlikler", "Doğrusal Denklemler", "Eşitsizlikler", "Üçgenler", "Eşlik ve Benzerlik", "Dönüşüm Geometrisi", "Geometrik Cisimler"]
  },
  { 
    id: "fen-bilgisi", name: "Fen Bilgisi", icon: <FlaskConical className="h-8 w-8 text-green-500" />, 
    image: "https://images.unsplash.com/photo-1627627256602-7909ad79d804?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2NpZW5jZXxlbnwwfHwwfHx8MA&auto=format&fit=crop&w=200&q=60",
    topics: ["Mevsimler ve İklim", "DNA ve Genetik Kod", "Basınç", "Madde ve Endüstri", "Basit Makineler", "Enerji Dönüşümleri ve Çevre Bilimi", "Elektrik Yükleri ve Elektrik Enerjisi"]
  },
  { 
    id: "din-kulturu", name: "Din Kültürü", icon: <HelpCircle className="h-8 w-8 text-yellow-500" />, 
    image: "https://images.unsplash.com/photo-1583795484071-3c453e137955?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVsaWdpb258ZW58MHx8MHx8fDA&auto=format&fit=crop&w=200&q=60",
    topics: ["Kader İnancı", "Zekat ve sadaka", "Din ve Hayat", "Hz. Muhammed'in Örnekliği", "Kur'anı-ı Kerim ve Özellikleri"]
  },
  { 
    id: "tarih", name: "T.C. İnkılap Tarihi ve Atatürkçülük", icon: <Landmark className="h-8 w-8 text-orange-500" />, 
    image: "https://images.unsplash.com/photo-1524041186354-96a0aac636a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGlzdG9yeXxlbnwwfHwwfHx8MA&auto=format&fit=crop&w=200&q=60",
    topics: ["Bir Kahraman Doğuyor", "Milli Uyanış-Bağımsızlık Yolunda Atılan Adımlar", "Milli Bir Destan-Ya İstiklal Ya Ölüm", "Atatürkçülük ve Çağdaşlaşan Türkiye", "Demokratikleşme Çabaları", "Atatürk Dönemi Türk dış Politikası", "Atatürk'ün Ölümü ve Sonrası"]
  },
  { 
    id: "ingilizce", name: "İngilizce", icon: <Globe className="h-8 w-8 text-purple-500" />, 
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c7da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZW5nbGlzaHxlbnwwfHwwfHx8MA&auto=format&fit=crop&w=200&q=60",
    topics: ["Friendship", "Teen Life", "İn The Kitchen", "On The Phone", "The Internet", "Adventures", "Tourism", "Chores", "Science", "Natural Forces"]
  },
];

export const yksTytSubjects = [
  { 
    id: "turkce", name: "Türkçe", icon: <Edit className="h-8 w-8 text-red-500" />, 
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlicmFyeXxlbnwwfHwwfHx8MA&auto=format&fit=crop&w=200&q=60",
    topics: ["Sözcükte Anlam", "Cümlede Anlam", "Paragrafta Anlam", "Sözcükte Yapı", "Ses Bilgisi", "Yazım Kuralları", "Noktalama İşaretleri", "İsim - Zamir", "Sıfat - Zarf", "Edat, Bağlaç, Ünlem", "Fiil – Ek Fiil – Fiilimsi", "Cümle Ögeleri", "Fiil Çatısı", "Cümle Türleri", "Anlatım Bozuklukları"]
  },
  { 
    id: "matematik", name: "Matematik", icon: <SquareSigma className="h-8 w-8 text-blue-500" />, 
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWF0aGVtYXRpY3N8ZW58MHx8MHx8fDA&auto=format&fit=crop&w=200&q=60",
    topics: ["Temel Kavramlar", "Sayı Basamakları", "Bölme ve Bölünebilme", "EBOB - EKOK", "Rasyonel Sayılar", "Basit Eşitsizlik", "Mutlak Değer", "Üslü Sayılar", "Köklü Sayılar", "Çarpanlara Ayırma", "Oran - Orantı", "Denklem Çözme", "Sayı Problemleri", "Kesir Problemleri", "Yaş Problemleri", "Hız Problemleri", "İşçi Problemleri", "Yüzde Problemleri", "Kâr – Zarar Problemleri", "Karışım Problemleri", "Rutin Olmayan Problemi", "Grafik Problemi", "Mantık", "Kümeler", "Fonksiyonlar", "Polinomlar", "Dereceden Denklemler", "Karmaşık Sayılar", "Permütasyon-Kombinasyon", "Binom – Olasılık", "Veri – İstatistik"]
  },
  { 
    id: "geometri", name: "Geometri", icon: <Compass className="h-8 w-8 text-teal-500" />, 
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdlb21ldHJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=60",
    topics: ["Doğruda Açılar", "Üçgende Açılar", "İkizkenar Üçgen", "Eşkenar Üçgen", "Dik Üçgen ve Trigonometri", "Üçgende Yardımcı Elemanlar", "Üçgende Eşlik ve Benzerlik", "Üçgende Alan", "Açı – Kenar Bağıntıları", "Çokgenler", "Dörtgenler", "Yamuk", "Deltoid", "Paralelkenar Dörtgen", "Eşkenar Dörtgen", "Dikdörtgen", "Prizma", "Piramit"]
  },
  { 
    id: "fizik", name: "Fizik", icon: <Atom className="h-8 w-8 text-indigo-500" />, 
    image: "https://images.unsplash.com/photo-1532187863486-abf9db50d0d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNjaWVuY2V8ZW58MHx8MHx8fDA&auto=format&fit=crop&w=200&q=60",
    topics: ["Fizik Bilimine Giriş", "Madde ve Özellikleri", "Kuvvet ve Hareket", "Enerji", "Isı ve Sıcaklık", "Elektrostatik", "Optik", "Elektrik ve Manyetizma", "Basınç ve Kaldırma Kuvveti", "Dalgalar"]
  },
  { 
    id: "kimya", name: "Kimya", icon: <FlaskConical className="h-8 w-8 text-green-500" />, 
    image: "https://images.unsplash.com/photo-1554475901-4538ddfbccc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlbWlzdHJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=60",
    topics: ["Kimya Bilimi", "Atom Modelleri ve Yapısı", "Periyodik Sistem", "Maddenin Hâlleri", "Doğa ve Kimya", "Kimyanın Temel Kanunları", "Mol Kavramı", "Kimyasal Tepkime Denklemleri", "Kimyasal Tepkimelerde Hesaplamalar", "Karışımlar", "Karışımların Ayrılması", "Asitler, Bazlar, Tuzlar", "Kimya Her Yerde"]
  },
  { 
    id: "biyoloji", name: "Biyoloji", icon: <Leaf className="h-8 w-8 text-lime-500" />, 
    image: "https://images.unsplash.com/photo-1582573648322-55e80736560d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlvbG9neXxlbnwwfHwwfHx8MA&auto=format&fit=crop&w=200&q=60",
    topics: ["Canlıların Ortak Özellikleri", "Canlıların Yapısında Bulunan Temel Bileşikler", "Hücre ve Organeller", "Hücre Zarından Madde Geçişi", "Canlıların Sınıflandırılması", "Hücre Bölünmeleri", "Üreme Çeşitleri", "Kalıtım", "Ekosistem Ekolojisi", "Güncel Çevre Sorunları"]
  },
  { 
    id: "tarih", name: "Tarih", icon: <Landmark className="h-8 w-8 text-orange-500" />, 
    image: "https://images.unsplash.com/photo-1569014999900-6ea12c359560?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGlzdG9yeSUyMGJvb2tzfGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=60",
    topics: ["Tarih Bilimi", "İlk Çağ Uygarlıklar", "İlk ve Orta Çağlarda Türk Dünyası", "İslam Medeniyetinin Doğuşu ve İlk İslam Devletleri", "Türklerin İslamiyet'i Kabulü ve İlk Türk İslam Devletleri", "Orta Çağda Dünya", "Yerleşme ve Devletleşme Sürecinde Selçuklu Türkiye'si", "Beylikten Devlete Osmanlı", "Devletleşme Sürecinde Savaşçılar ve Askerler", "Beylikten Devlete Osmanlı Medeniyeti", "Dünya Gücü Osmanlı", "Sultan ve Osmanlı Merkez Teşkilatı", "Klasik Çağda Osmanlı Toplum Düzeni"]
  },
  { 
    id: "cografya", name: "Coğrafya", icon: <Map className="h-8 w-8 text-cyan-500" />, 
    image: "https://images.unsplash.com/photo-1580600147977-9b9f5c50f6b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2VvZ3JhcGh5fGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=60",
    topics: ["Doğa ve İnsan", "Dünyanın Şekli ve Hareketleri", "Dünyanın Günlük ve Yıllık Hareketleri", "Coğrafi Konum", "Harita Bilgisi", "İklim Bilgisi (Atmosfer ve Sıcaklık)", "İklim Bilgisi (Basınç ve Rüzgarlar)", "İklim Bilgisi (Nemlilik ve Yağış)", "Büyük İklim Tipleri", "Türkiye'nin İklimi", "İç Kuvvetler", "Dış Kuvvetler", "Türkiye'nin Yer Şekilleri", "Yeryüzünde ve Türkiye'de Sular", "Doğal Afetler", "Çevre ve Toplum", "Dünyada Nüfus", "Türkiye'de Nüfus", "Dünyada Göç", "Türkiye'de Göç", "Dünyada ve Türkiye'de Yerleşmeler", "Ekonomik Faaliyetlerin Sınıflandırılması", "Dünyayı Birbirine Bağlayan Ağlar", "Bölgeler ve Ülkeler"]
  },
  { 
    id: "felsefe", name: "Felsefe", icon: <Brain className="h-8 w-8 text-purple-500" />, 
    image: "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhpbG9zb3BoeXxlbnwwfHwwfHx8MA&auto=format&fit=crop&w=200&q=60",
    topics: ["Felsefeye Giriş", "Bilgi Felsefesi", "Varlık Felsefesi", "Ahlak Felsefesi", "Sanat Felsefesi", "Din Felsefesi", "Siyaset Felsefesi", "Bilim Felsefesi"]
  },
  { 
    id: "din-kulturu", name: "Din Kültürü", icon: <HelpCircle className="h-8 w-8 text-yellow-500" />, 
    image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVsaWdpb3VzJTIwdGV4dHxlbnwwfHwwfHx8MA&auto=format&fit=crop&w=200&q=60",
    topics: ["Bilgi ve İnanç", "Din ve İslam", "İslam ve İbadet", "Gençlik ve Değerler", "Gönül Coğrafyamız", "Allah, İnsan İlişkisi", "Muhammed ve Gençlik", "Din ve Hayat", "Ahlaki Tutum ve Davranışlar"]
  },
];

export const yksAytSubjects = [
  {
    id: "matematik", name: "Matematik", icon: <SquareSigma className="h-8 w-8 text-blue-600" />,
    image: "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWF0aGVtYXRpY3N8ZW58MHx8MHx8fDA&auto=format&fit=crop&w=200&q=60",
    topics: ["Temel Kavramlar", "Sayı Basamakları", "Bölme ve Bölünebilme", "EBOB – EKOK", "Rasyonel Sayılar", "Basit Eşitsizlikler", "Mutlak Değer", "Üslü Sayılar", "Köklü Sayılar", "Çarpanlara Ayırma", "Oran Orantı", "Denklem Çözme", "Problemler", "Kümeler", "Kartezyen Çarpım", "Mantık", "Fonskiyonlar", "Polinomlar", "2.Dereceden Denklemler", "Permütasyon ve Kombinasyon", "Binom ve Olasılık", "İstatistik", "Karmaşık Sayılar", "2.Dereceden Eşitsizlikler", "Parabol", "Trigonometri", "Logaritma", "Diziler", "Limit", "Türev", "İntegral"]
  },
  {
    id: "geometri", name: "Geometri", icon: <Compass className="h-8 w-8 text-teal-600" />,
    image: "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2VvbWV0cnl8ZW58MHx8MHx8fDA&auto=format&fit=crop&w=200&q=60",
    topics: ["Temel Kavramlar", "Doğruda Açılar", "Üçgende Açılar", "Özel Üçgenler", "Açıortay", "Kenarortay", "Üçgende Alan", "Üçgende Benzerlik", "Açı Kenar Bağıntıları", "Çokgenler", "Özel Dörtgenler", "Dörtgenler", "Çember ve Daire", "Analitik Geometri", "Katı Cisimler (Uzay Geometri)", "Çemberin Analitiği"]
  },
  {
    id: "fizik", name: "Fizik", icon: <Atom className="h-8 w-8 text-indigo-600" />,
    image: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGh5c2ljc3xlbnwwfHwwfHx8MA&auto=format&fit=crop&w=200&q=60",
    topics: ["Vektörler", "Kuvvet, Tork ve Denge", "Kütle Merkezi", "Basit Makineler", "Hareket", "Newton'un Hareket Yasaları", "İş, Güç ve Enerji II", "Atışlar", "İtme ve Momentum", "Elektrik Alan ve Potensiyel", "Paralel Levhalar ve Sığa", "Manyetik Alan ve Manyetik Kuvvet", "İndüksiyon, Alternatif Akım ve Transformatörler", "Çembersel Hareket", "Dönme, Yuvarlanma ve Açısal Momentum", "Kütle Çekim ve Kepler Yasaları", "Basit Harmonik Hareket", "Dalga Mekaniği ve Elektromanyetik Dalgalar", "Atom Modelleri", "Büyük Patlama ve Parçacık Fiziği", "Radyoaktivite", "Özel Görelilik", "Kara Cisim Işıması", "Fotoelektrik Olay ve Compton Olayı", "Modern Fiziğin Teknolojideki Uygulamaları"]
  },
  {
    id: "kimya", name: "Kimya", icon: <FlaskConical className="h-8 w-8 text-green-600" />,
    image: "https://images.unsplash.com/photo-1628370424572-aa0eb35e7110?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hlbWlzdHJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=60",
    topics: ["Kimya Bilimi", "Atom ve Periyodik Sistem", "Kimyasal Türler Arası Etkileşimler", "Kimyasal Hesaplamalar", "Kimyanın Temel Kanunları", "Asit, Baz ve Tuz", "Maddenin Halleri", "Karışımlar", "Doğa ve Kimya", "Kimya Her Yerde", "Modern Atom Teorisi", "Gazlar", "Sıvı Çözeltiler", "Kimyasal Tepkimelerde Enerji", "Kimyasal Tepkimelerde Hız", "Kimyasal Tepkimelerde Denge", "Asit-Baz Dengesi", "Çözünürlük Dengesi", "Kimya ve Elektrik", "Organik Kimyaya Giriş", "Organik Kimya", "Enerji Kaynakları ve Bilimsel Gelişmeler"]
  },
  {
    id: "biyoloji", name: "Biyoloji", icon: <Leaf className="h-8 w-8 text-lime-600" />,
    image: "https://images.unsplash.com/photo-1530026405186-451395217530?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlvbG9neXxlbnwwfHwwfHx8MA&auto=format&fit=crop&w=200&q=60",
    topics: ["Sinir Sistemi", "Endokrin Sistem ve Hormonlar", "Duyu Organları", "Destek ve Hareket Sistemi", "Sindirim Sistemi", "Dolaşım ve Bağışıklık Sistemi", "Solunum Sistemi", "Üriner Sistem (Boşaltım Sistemi)", "Üreme Sistemi ve Embriyonik Gelişim", "Komünite Ekolojisi", "Popülasyon Ekolojisi", "Genden Proteine", "Canlılarda Enerji Dönüşümleri", "Bitki Biyolojisi", "Canlılar ve Çevre"]
  },
  {
    id: "tarih", name: "Tarih", icon: <Landmark className="h-8 w-8 text-orange-600" />,
    image: "https://images.unsplash.com/photo-1461360370896-922624d1d240?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGlzdG9yeXxlbnwwfHwwfHx8MA&auto=format&fit=crop&w=200&q=60",
    topics: ["Tarih ve Zaman", "İnsanlığın İlk Dönemleri", "Orta Çağ'da Dünya", "İlk ve Orta Çağlarda Türk Dünyası", "İslam Medeniyetinin Doğuşu", "Türklerin İslamiyet'i Kabulü ve İlk Türk İslam Devletleri", "Yerleşme ve Devletleşme Sürecinde Selçuklu Türkiyesi", "Beylikten Devlete Osmanlı Siyaseti", "Devletleşme Sürecinde Savaşçılar ve Askerler", "Beylikten Devlete Osmanlı Medeniyeti", "Dünya Gücü Osmanlı", "Sultan ve Osmanlı Merkez Teşkilatı", "Klasik Çağda Osmanlı Toplum Düzeni", "Değişen Dünya Dengeleri Karşısında Osmanlı Siyaseti", "Değişim Çağında Avrupa ve Osmanlı", "Uluslararası İlişkilerde Denge Stratejisi (1774-1914)", "Devrimler Çağında Değişen Devlet-Toplum İlişkileri", "Sermaye ve Emek", "XIX. ve XX. Yüzyılda Değişen Gündelik Hayat", "XX. Yüzyıl Başlarında Osmanlı Devleti ve Dünya", "Milli Mücadele", "Atatürkçülük ve Türk İnkılabı", "İki Savaş Arasındaki Dönemde Türkiye ve Dünya", "II. Dünya Savaşı Sürecinde Türkiye ve Dünya", "II. Dünya Savaşı Sonrasında Türkiye ve Dünya", "Toplumsal Devrim Çağında Dünya ve Türkiye", "XXI. Yüzyılın Eşiğinde Türkiye ve Dünya"]
  },
  {
    id: "cografya", name: "Coğrafya", icon: <Map className="h-8 w-8 text-cyan-600" />,
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2VvZ3JhcGh5fGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=60",
    topics: ["Ekosistem", "Biyoçeşitlilik", "Biyomlar", "Ekosistemin Unsurları", "Enerji Akışı ve Madde Döngüsü", "Ekstrem Doğa Olayları", "Küresel İklim Değişimi", "Nüfus Politikaları", "Türkiye'de Nüfus ve Yerleşme", "Ekonomik Faaliyetler ve Doğal Kaynaklar", "Göç ve Şehirleşme", "Türkiye Ekonomisi", "Türkiye'nin Ekonomi Politikaları", "Türkiye Ekonomisinin Sektörel Dağılımı", "Türkiye'de Tarım", "Türkiye'de Hayvancılık", "Türkiye'de Madenler ve Enerji Kaynakları", "Türkiye'de Sanayi", "Türkiye'de Ulaşım", "Türkiye'de Ticaret ve Turizm", "Geçmişten Geleceğe Şehir ve Ekonomi", "Türkiye'nin İşlevsel Bölgeleri ve Kalkınma Projeleri", "Hizmet Sektörünün Ekonomideki Yeri", "Küresel Ticaret", "Bölgeler ve Ülkeler", "İlk Uygarlıklar", "Kültür Bölgeleri ve Türk Kültürü", "Sanayileşme Süreci: Almanya", "Tarım ve Ekonomi İlişkisi Fransa – Somali", "Ülkeler Arası Etkileşim", "Jeopolitik Konum", "Çatışma Bölgeleri", "Küresel ve Bölgesel Örgütler", "Çevre ve Toplum", "Çevre Sorunları ve Türleri", "Madenler ve Enerji Kaynaklarının Çevreye Etkisi", "Doğal Kaynakların Sürdürülebilir Kullanımı", "Ekolojik Ayak İzi", "Doğal Çevrenin Sınırlılığı", "Çevre Politikaları", "Çevresel Örgütler", "Çevre Anlaşmaları", "Doğal Afetler"]
  },
  {
    id: "edebiyat", name: "Türk Dili ve Edebiyatı", icon: <Scroll className="h-8 w-8 text-purple-600" />,
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=60",
    topics: ["Anlam Bilgisi", "Dil Bilgisi", "Güzel Sanatlar ve Edebiyat", "Metinlerin Sınıflandırılması", "Şiir Bilgisi", "Edebi Sanatlar", "Türk Edebiyatı Dönemleri", "İslamiyet Öncesi Türk Edebiyatı ve Geçiş Dönemi", "Halk Edebiyatı", "Divan Edebiyatı", "Tanzimat Edebiyatı", "Servet-i Fünun Edebiyatı", "Fecr-i Ati Edebiyatı", "Milli Edebiyat", "Cumhuriyet Dönemi Edebiyatı", "Edebiyat Akımları", "Dünya Edebiyatı"]
  },
  {
    id: "felsefe", name: "Felsefe Grubu", icon: <Brain className="h-8 w-8 text-pink-600" />,
    image: "https://images.unsplash.com/photo-1505664194779-8beace626db1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhpbG9zb3BoeXxlbnwwfHwwfHx8MA&auto=format&fit=crop&w=200&q=60",
    topics: ["Felsefe'nin Konusu", "Bilgi Felsefesi", "Varlık Felsefesi", "Ahlak Felsefesi", "Sanat Felsefesi", "Din Felsefesi", "Siyaset Felsefesi", "Bilim Felsefesi", "İlk Çağ Felsefesi", "MÖ 6. Yüzyıl – MS 2. Yüzyıl Felsefesi", "MS 2. Yüzyıl – MS 15. Yüzyıl Felsefesi", "15. Yüzyıl – 17. Yüzyıl Felsefesi", "18. Yüzyıl – 19. Yüzyıl Felsefesi", "20. Yüzyıl Felsefesi", "Mantığa Giriş", "Klasik Mantık", "Mantık ve Dil", "Sembolik Mantık", "Psikoloji Bilimini Tanıyalım", "Psikolojinin Temel Süreçleri", "Öğrenme Bellek Düşünme", "Ruh Sağlığının Temelleri", "Sosyolojiye Giriş", "Birey ve Toplum", "Toplumsal Yapı", "Toplumsal Değişme ve Gelişme", "Toplum ve Kültür", "Toplumsal Kurumlar"]
  },
  {
    id: "din-kulturu", name: "Din Kültürü ve Ahlak Bilgisi", icon: <HelpCircle className="h-8 w-8 text-yellow-600" />,
    image: "https://images.unsplash.com/photo-1541535503160-11959c267c10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVsaWdpb3VzJTIwdGV4dHxlbnwwfHwwfHx8MA&auto=format&fit=crop&w=200&q=60",
    topics: ["Dünya ve Ahiret", "Kur'an'a Göre Hz. Muhammed", "Kur'an'da Bazı Kavramlar", "İnançla İlgili Meseleler", "Yahudilik ve Hristiyanlık", "İslam ve Bilim", "Anadolu'da İslam", "İslam Düşüncesinde Tasavvufi Yorumlar", "Güncel Dini Meseleler", "Hint ve Çin Dinleri"]
  }
];

export const ydsSubjects = [
  { 
    id: "ingilizce", name: "İngilizce", icon: <Globe className="h-8 w-8 text-purple-500" />, 
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c7da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZW5nbGlzaHxlbnwwfHwwfHx8MA&auto=format&fit=crop&w=200&q=60",
    topics: ["Phrasal Verb", "Tense – Preposition – Dilbilgisi", "Cloze", "Cümle Tamamlama", "Çeviri", "Paragraf", "Diyalog Tamamlama", "Yakın Anlamlı Cümle", "Paragraf Tamamlama", "Anlatım Bütünlüğünü Bozan Cümle"]
  },
];

export const yokdilFenSubjects = [
  { id: "kelime", name: "Kelime", icon: <BookOpen className="h-8 w-8 text-green-500" />, topics: ["Akademik Kelimeler", "Eş Anlamlılar", "Zıt Anlamlılar"], image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dm9jYWJ1bGFyeXxlbnwwfHwwfHx8MA&auto=format&fit=crop&w=200&q=60"},
  { id: "gramer", name: "Gramer", icon: <BookOpen className="h-8 w-8 text-green-600" />, topics: ["Tense", "Preposition", "Bağlaçlar", "Cümle Yapıları"], image: "https://images.unsplash.com/photo-1503551663394-176a24f3d572?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JhbW1hcnxlbnwwfHwwfHx8MA&auto=format&fit=crop&w=200&q=60" },
  { id: "cloze", name: "Cloze Test", icon: <BookOpen className="h-8 w-8 text-green-700" />, topics: ["Boşluk Doldurma Teknikleri", "Kelime Seçimi"], image: "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVzdHxlbnwwfHwwfHx8MA&auto=format&fit=crop&w=200&q=60" },
  { id: "cumle-tamamlama", name: "Cümle Tamamlama", icon: <BookOpen className="h-8 w-8 text-teal-500" />, topics: ["Anlam Bütünlüğü", "Yapısal Uygunluk"], image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3N8ZW58MHx8MHx8fDA&auto=format&fit=crop&w=200&q=60" },
  { id: "ceviri", name: "Çeviri (İng-Tr / Tr-İng)", icon: <BookOpen className="h-8 w-8 text-teal-600" />, topics: ["Doğru Çeviri Teknikleri", "Anlam Kaybını Önleme"], image: "https://images.unsplash.com/photo-1551029506-08079613602e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhbnNsYXRpb258ZW58MHx8MHx8fDA&auto=format&fit=crop&w=200&q=60"},
  { id: "paragraf-tamamlama", name: "Paragraf Tamamlama", icon: <BookOpen className="h-8 w-8 text-cyan-500" />, topics: ["Paragraf Yapısı", "Fikir Akışı"], image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhZGluZ3xlbnwwfHwwfHx8MA&auto=format&fit=crop&w=200&q=60" },
  { id: "anlatim-butunlugu", name: "Anlatım Bütünlüğünü Bozan Cümle", icon: <BookOpen className="h-8 w-8 text-cyan-600" />, topics: ["Konu Sapması", "Mantık Hataları"], image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3R1ZHl8ZW58MHx8MHx8fDA&auto=format&fit=crop&w=200&q=60" },
  { id: "okuma", name: "Okuma Parçaları", icon: <BookOpen className="h-8 w-8 text-sky-500" />, topics: ["Ana Fikir Bulma", "Detay Anlama", "Çıkarım Yapma"], image: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bm90ZWJvb2t8ZW58MHx8MHx8fDA&auto=format&fit=crop&w=200&q=60" }
];

export const yokdilSaglikSubjects = [...yokdilFenSubjects].map(subject => ({ ...subject, icon: React.cloneElement(subject.icon, { className: subject.icon.props.className.replace(/text-\w+-500|text-\w+-600|text-\w+-700/, 'text-red-500') }) }));
export const yokdilSosyalSubjects = [...yokdilFenSubjects].map(subject => ({ ...subject, icon: React.cloneElement(subject.icon, { className: subject.icon.props.className.replace(/text-\w+-500|text-\w+-600|text-\w+-700/, 'text-blue-500') }) }));


export const kpssLisansGenelKulturSubjects = [
  { id: "tarih", name: "Tarih", icon: <Landmark className="h-8 w-8 text-orange-500" />, topics: ["İslamiyet'ten Önceki Türk Devletleri", "İlk Müslüman Türk Devletleri", "Osmanlı Devleti Siyasi", "Osmanlı Devleti Kültür ve Uygarlık", "Kurtuluş Savaşı Hazırlık Dönemi", "Kurtuluş Savaşı Cepheleri", "Devrim Tarihi", "Atatürk Dönemi İç ve Dış Politika", "Atatürk İlkeleri Konusu", "Çağdaş Türk ve Dünya Tarihi"], image: "https://images.unsplash.com/photo-1550034182-0a8a77c5c996?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGlzdG9yeXxlbnwwfHwwfHx8MA&auto=format&fit=crop&w=200&q=60"},
  { id: "cografya", name: "Coğrafya", icon: <Map className="h-8 w-8 text-cyan-500" />, topics: ["Türkiye Coğrafi Konumu", "Türkiye'nin Yer şekilleri Su Örtüsü", "Türkiye'nin İklimi Ve Bitki Örtüsü", "Toprak Ve Doğa Çevre", "Türkiye'nin Beşeri Coğrafyası", "Tarım Konusu", "Madenler Ve Enerji Kaynakları", "Sanayi Konusu", "Ulaşım Konusu", "Turizm Konusu"], image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2VvZ3JhcGh5fGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=60"},
  { id: "vatandaslik", name: "Vatandaşlık", icon: <Users className="h-8 w-8 text-indigo-500" />, topics: ["Hukuka Giriş", "Genel Esaslar", "Yasama", "Yürütme", "İdari Yapı", "Güncel Olaylar"], image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2l0aXplbnNoaXB8ZW58MHx8MHx8fDA&auto=format&fit=crop&w=200&q=60"},
  { id: "guncel-bilgiler", name: "Güncel Bilgiler", icon: <TrendingUp className="h-8 w-8 text-green-500" />, topics: [], image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV3c3xlbnwwfHwwfHx8MA&auto=format&fit=crop&w=200&q=60"}
];
export const kpssLisansGenelYetenekSubjects = [
  { id: "turkce", name: "Türkçe", icon: <Edit className="h-8 w-8 text-red-500" />, topics: ["Sözcükte Anlam", "Cümlenin Anlam", "Sözcük Türleri", "Sözcükte Yapı", "Cümlenin Ögeleri", "Ses Olayları", "Yazım Kuralları", "Noktalama İşaretleri", "Paragrafta Anlam", "Paragrafta Anlatım Yolları, Biçimleri", "Sözel Mantık"], image: "https://images.unsplash.com/photo-1455390587153-c28a07603a3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHVya2lzaCUyMGxhbmd1YWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=60"},
  { id: "matematik", name: "Matematik", icon: <SquareSigma className="h-8 w-8 text-blue-500" />, topics: ["Temel Kavramlar", "Rasyonel Sayılar", "Ondalık Sayılar", "Basit Eşitsizlikler", "Mutlak Değer", "Üslü Sayılar", "Köklü Sayılar", "Çarpanlara Ayırma", "Denklem Çözme", "Sayı Problemleri", "Yaş Problemleri", "Hareket Problemleri", "Yüzde Kar-Zarar, Faiz Problemleri", "Bağıntı ve Fonksiyon", "İşlem", "Olasılık", "Sayısal Mantık"], image: "https://images.unsplash.com/photo-1518133893747-c8f2016311e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWF0aGVtYXRpY3N8ZW58MHx8MHx8fDA&auto=format&fit=crop&w=200&q=60"},
  { id: "geometri", name: "Geometri", icon: <Compass className="h-8 w-8 text-teal-500" />, topics: ["Özel Üçgenler", "Dörtgenler", "Çokgenler", "Analitik Geometri"], image: "https://images.unsplash.com/photo-1596371984546-11fc5f8075e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2VvbWV0cnl8ZW58MHx8MHx8fDA&auto=format&fit=crop&w=200&q=60"}
];

export const kpssOnlisansGenelKulturSubjects = [
  { id: "tarih", name: "Tarih", icon: <Landmark className="h-8 w-8 text-orange-600" />, topics: ["İslamiyet Öncesi Türk Tarihi", "Türk-İslam Tarihi", "İlk Müslüman Türk Devletleri", "Anadolu Selçuklu Devleti Siyasi Tarihi", "Osmanlı Devleti Kültür ve Medeniyeti", "Osmanlı Devleti Kuruluş, Yükselme, Duraklama Dönemleri", "Osmanlı Devleti Gerileme ve Dağılma Dönemleri", "Trablusgarp Savaşı (1911-1912)", "I. ve II. Balkan Savaşları", "I. Dünya Savaşı", "Kurtuluş Savaşına Hazırlık Dönemi", "Kurtuluş Savaşı Muharebeler ve Antlaşmalar Dönemi", "Atatürk İlke ve İnkılapları", "Atatürk Dönemi Türk Dış Politikası", "Çağdaş Türk ve Dünya Tarihi"], image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhpc3Rvcnl8ZW58MHx8MHx8fDA&auto=format&fit=crop&w=200&q=60"},
  { id: "cografya", name: "Coğrafya", icon: <Map className="h-8 w-8 text-cyan-600" />, topics: ["Türkiye'nin Coğrafi Konumu ve Yer Şekilleri", "Türkiye'nin İklimi ve Bitki Örtüsü", "Türkiye'de Nüfus, Yerleşme ve Göç", "Türkiye'nin Ekonomik Coğrafyası", "Türkiye'nin Coğrafi Bölgeleri"], image: "https://images.unsplash.com/photo-1528184039020-bd9917616771?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdlb2dyYXBoeXxlbnwwfHwwfHx8MA&auto=format&fit=crop&w=200&q=60"},
  { id: "vatandaslik", name: "Vatandaşlık", icon: <Users className="h-8 w-8 text-indigo-600" />, topics: ["Hukukun Temel Kavramları", "Genel Esaslar", "Temel Haklar", "Yasama", "Yürütme", "Yargı", "Anayasal Gelişmeler", "İdare Hukuku", "Uluslararası Örgütler"], image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2l0aXplbnNoaXB8ZW58MHx8MHx8fDA&auto=format&fit=crop&w=200&q=60"},
  { id: "guncel-bilgiler", name: "Güncel Bilgiler", icon: <TrendingUp className="h-8 w-8 text-green-600" />, topics: [], image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmV3c3xlbnwwfHwwfHx8MA&auto=format&fit=crop&w=200&q=60"}
];
export const kpssOnlisansGenelYetenekSubjects = [
  { id: "turkce", name: "Türkçe", icon: <Edit className="h-8 w-8 text-red-600" />, topics: ["Sözcükte Anlam", "Cümlede Anlam", "Paragrafta Anlam", "Noktalama İşaretleri", "Yapı Bilgisi", "Ses Bilgisi", "Sözcük Bilgisi", "Cümle Bilgisi", "Yazım Kuralları", "Anlatım Bozuklukları", "Sözel Mantık ve Akıl Yürütme"], image: "https://images.unsplash.com/photo-1587033808065-7c855a91888d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHVya2lzaCUyMGxhbmd1YWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=60"},
  { id: "matematik", name: "Matematik", icon: <SquareSigma className="h-8 w-8 text-blue-600" />, topics: ["Temel Kavramlar", "Sayılar", "Bölme ve Bölünebilme Kuralları", "Asal Çarpanlara Ayırma", "EBOB-EKOK", "Birinci Dereceden Denklemler", "Rasyonel Sayılar", "Eşitsizlik", "Mutlak Değer", "Üslü Sayılar", "Köklü Sayılar", "Çarpanlara Ayırma", "Oran-Orantı", "Problemler", "Kümeler", "İşlem ve Modüler Aritmetik", "Permütasyon, Kombinasyon ve Olasılık", "Tablo ve Grafikler"], image: "https://images.unsplash.com/photo-1472766870938-a27c08d5c24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWF0aGVtYXRpY3N8ZW58MHx8MHx8fDA&auto=format&fit=crop&w=200&q=60"}
];


export const examFlowData = {
  lgs: {
    name: "LGS",
    icon: <GraduationCap className="h-10 w-10 text-primary" />,
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500",
    gradient: "bg-gradient-to-br from-orange-400 to-orange-600",
    image: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2Nob29sJTIwY2hpbGRyZW58ZW58MHx8MHx8fDA&auto=format&fit=crop&w=300&q=60",
    subjects: lgsSubjects
  },
  yks: {
    name: "YKS",
    icon: <Brain className="h-10 w-10 text-primary" />,
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-500",
    gradient: "bg-gradient-to-br from-teal-400 to-teal-600",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dW5pdmVyc2l0eSUyMHN0dWRlbnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=300&q=60",
    subExams: [
      { id: "tyt", name: "TYT", subjects: yksTytSubjects, icon: <BookOpen className="h-8 w-8 text-sky-500" />, image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0dWR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=60" },
      { id: "ayt", name: "AYT", subjects: yksAytSubjects, icon: <BookCopy className="h-8 w-8 text-amber-500" />, image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWR1Y2F0a W9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=60" },
    ]
  },
  "kpss-lisans": {
    name: "KPSS Lisans",
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500",
    gradient: "bg-gradient-to-br from-yellow-400 to-yellow-600",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=300&q=60",
    subExams: [
      { id: "genel-kultur", name: "Genel Kültür", subjects: kpssLisansGenelKulturSubjects, icon: <BookOpen className="h-8 w-8 text-red-500" />, image: "https://images.unsplash.com/photo-1513109209089-9430138987f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3N8ZW58MHx8MHx8fDA&auto=format&fit=crop&w=200&q=60" },
      { id: "genel-yetenek", name: "Genel Yetenek", subjects: kpssLisansGenelYetenekSubjects, icon: <Lightbulb className="h-8 w-8 text-blue-500" />, image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWF0aGVtYXRpY3N8ZW58MHx8MHx8fDA&auto=format&fit=crop&w=200&q=60" },
    ]
  },
  "kpss-onlisans": {
    name: "KPSS Önlisans",
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    bgColor: "bg-blue-700/10",
    borderColor: "border-blue-700",
    gradient: "bg-gradient-to-br from-blue-600 to-blue-800",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2Zlc3Npb25hbHN8ZW58MHx8MHx8fDA&auto=format&fit=crop&w=300&q=60",
    subExams: [
      { id: "genel-kultur", name: "Genel Kültür", subjects: kpssOnlisansGenelKulturSubjects, icon: <BookOpen className="h-8 w-8 text-red-600" />, image: "https://images.unsplash.com/photo-1560420026-993b164b7a82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2tzfGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=60" },
      { id: "genel-yetenek", name: "Genel Yetenek", subjects: kpssOnlisansGenelYetenekSubjects, icon: <Lightbulb className="h-8 w-8 text-blue-600" />, image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3R1ZHl8ZW58MHx8MHx8fDA&auto=format&fit=crop&w=200&q=60" },
    ]
  },
  yds: {
    name: "YDS",
    icon: <Globe className="h-10 w-10 text-primary" />,
    bgColor: "bg-rose-500/10",
    borderColor: "border-rose-500",
    gradient: "bg-gradient-to-br from-rose-400 to-rose-600",
    image: "https://images.unsplash.com/photo-1516410529446-21e7e7565119?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2xvYmFsJTIwY29tbXVuaWNhdGlvbnxlbnwwfHwwfHx8MA&auto=format&fit=crop&w=300&q=60",
    subjects: ydsSubjects
  },
  yokdil: {
    name: "YÖKDİL",
    icon: <BookCopy className="h-10 w-10 text-primary" />,
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500",
    gradient: "bg-gradient-to-br from-red-400 to-red-600",
    image: "https://images.unsplash.com/photo-1491841550275-5fd78501832d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWNhZGVtaWN8ZW58MHx8MHx8fDA&auto=format&fit=crop&w=300&q=60",
    subExams: [
      { id: "fen-bilimleri", name: "Fen Bilimleri (İngilizce)", subjects: yokdilFenSubjects, icon: <FlaskConical className="h-8 w-8 text-green-500" />, image: "https://images.unsplash.com/photo-1627627256602-7909ad79d804?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2NpZW5jZXxlbnwwfHwwfHx8MA&auto=format&fit=crop&w=200&q=60" },
      { id: "saglik-bilimleri", name: "Sağlık Bilimleri (İngilizce)", subjects: yokdilSaglikSubjects, icon: <Leaf className="h-8 w-8 text-red-500" />, image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRofGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=60" },
      { id: "sosyal-bilimler", name: "Sosyal Bilimler (İngilizce)", subjects: yokdilSosyalSubjects, icon: <Users className="h-8 w-8 text-blue-500" />, image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29jaWFsJTIwc2NpZW5jZXN8ZW58MHx8MHx8fDA&auto=format&fit=crop&w=200&q=60" },
    ]
  },
};

export const examCategoriesData = Object.keys(examFlowData).map(key => ({
  id: key,
  name: examFlowData[key].name,
  icon: examFlowData[key].icon,
  bgColor: examFlowData[key].bgColor,
  borderColor: examFlowData[key].borderColor,
  gradient: examFlowData[key].gradient,
  image: examFlowData[key].image,
  description: `${examFlowData[key].name} için özel olarak hazırlanmış içerikler ve testler.`
}));

export const sampleExams = [
  { id: "deneme1", title: "TESTGO Türkiye Geneli TYT Deneme Sınavı - 1", date: "25 Mayıs 2025", time: "10:00 - 12:15", participants: 12580, subject: "TYT" },
  { id: "deneme2", title: "TESTGO AYT Matematik Denemesi - Özel Seri", date: "28 Mayıs 2025", time: "14:00 - 16:00", participants: 8750, subject: "AYT" },
  { id: "deneme3", title: "TESTGO LGS Son Prova Denemesi - 3", date: "1 Haziran 2025", time: "09:30 - 11:30", participants: 15200, subject: "LGS" },
  { id: "deneme4", title: "TESTGO KPSS Lisans Genel Yetenek Denemesi - 5", date: "5 Haziran 2025", time: "10:00 - 12:00", participants: 9500, subject: "KPSS-Lisans" },
  { id: "deneme5", title: "TESTGO YDS İngilizce Denemesi - Bahar Dönemi", date: "8 Haziran 2025", time: "14:00 - 17:00", participants: 7200, subject: "YDS" },
  { id: "deneme6", title: "TESTGO KPSS Önlisans Deneme Sınavı - 1", date: "12 Haziran 2025", time: "10:00 - 12:00", participants: 6500, subject: "KPSS-Önlisans"},
  { id: "deneme7", title: "TESTGO YÖKDİL Fen Bilimleri Denemesi", date: "18 Haziran 2025", time: "14:00 - 17:00", participants: 5500, subject: "YÖKDİL"},
];

export const upcomingTestgoExamDate = "15 Haziran 2025 Cumartesi, Saat 10:00 - TESTGO Türkiye Geneli YKS Deneme Sınavı";