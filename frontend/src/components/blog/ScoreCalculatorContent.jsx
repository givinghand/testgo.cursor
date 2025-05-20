
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider'; // Shadcn Slider
import { AlertTriangle, Calculator, Info, CheckCircle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";


const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.3 },
  }),
};

const ScoreCalculatorContent = ({ examKey }) => {
  const examName = examKey.toUpperCase();
  const [inputs, setInputs] = useState({});
  const [calculatedScore, setCalculatedScore] = useState(null);
  const [diplomaGrade, setDiplomaGrade] = useState(75); // OBP/Diploma notu için

  const handleInputChange = (section, field, value) => {
    const numericValue = parseInt(value, 10);
    if (isNaN(numericValue) && value !== "") return; 

    setInputs(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value === "" ? "" : Math.max(0, numericValue) 
      }
    }));
    setCalculatedScore(null); // Yeni giriş yapıldığında skoru sıfırla
  };

  const handleSliderChange = (value) => {
    setDiplomaGrade(value[0]);
    setCalculatedScore(null);
  };
  
  const calculateNet = (correct, incorrect, totalQuestions) => {
      const c = parseInt(correct, 10) || 0;
      const i = parseInt(incorrect, 10) || 0;
      const t = parseInt(totalQuestions, 10) || 0;
      
      if (c + i > t) return { net: 0, error: "Doğru ve yanlış sayısı toplam soru sayısını aşamaz."};
      if (c < 0 || i < 0) return { net: 0, error: "Negatif değer girilemez."};

      return { net: c - (i / 4), error: null };
  };


  const getExamConfig = () => {
    // Bu kısım her sınav için özelleştirilebilir
    switch (examKey.toLowerCase()) {
      case 'yks':
        return {
          title: "YKS (TYT & AYT) Puan Hesaplama",
          sections: [
            { id: 'tyt_turkce', name: 'TYT Türkçe', total: 40, weight: 1.32 },
            { id: 'tyt_sosyal', name: 'TYT Sosyal Bilimler', total: 20, weight: 1.36 },
            { id: 'tyt_mat', name: 'TYT Temel Matematik', total: 40, weight: 1.32 },
            { id: 'tyt_fen', name: 'TYT Fen Bilimleri', total: 20, weight: 1.36 },
            { id: 'ayt_mat', name: 'AYT Matematik', total: 40, weight: 3.00, group: 'say' }, // SAY
            { id: 'ayt_fizik', name: 'AYT Fizik', total: 14, weight: 2.85, group: 'say' }, // SAY
            { id: 'ayt_kimya', name: 'AYT Kimya', total: 13, weight: 3.07, group: 'say' }, // SAY
            { id: 'ayt_biyo', name: 'AYT Biyoloji', total: 13, weight: 3.07, group: 'say' }, // SAY
            { id: 'ayt_edebiyat', name: 'AYT Türk Dili ve Edb.', total: 24, weight: 3.00, group: 'ea_soz' }, // EA-SÖZ
            { id: 'ayt_tarih1', name: 'AYT Tarih-1', total: 10, weight: 2.80, group: 'ea_soz' }, // EA-SÖZ
            { id: 'ayt_cografya1', name: 'AYT Coğrafya-1', total: 6, weight: 3.33, group: 'ea_soz' }, // EA-SÖZ
            { id: 'ayt_tarih2', name: 'AYT Tarih-2', total: 11, weight: 2.91, group: 'soz' }, // SÖZ
            { id: 'ayt_cografya2', name: 'AYT Coğrafya-2', total: 11, weight: 2.91, group: 'soz' }, // SÖZ
            { id: 'ayt_felsefe', name: 'AYT Felsefe Grubu', total: 12, weight: 3.00, group: 'ea_soz' }, // EA-SÖZ
            { id: 'ayt_din', name: 'AYT Din Kültürü (veya ek Felsefe)', total: 6, weight: 3.33, group: 'ea_soz' }, // EA-SÖZ
          ],
          baseScoreTYT: 100,
          baseScoreAYT: 100, // Her puan türü için ayrı
          includeOBP: true,
        };
      case 'lgs':
        return {
          title: "LGS Puan Hesaplama",
          sections: [
            { id: 'turkce', name: 'Türkçe', total: 20, weight: 4 },
            { id: 'mat', name: 'Matematik', total: 20, weight: 4 },
            { id: 'fen', name: 'Fen Bilimleri', total: 20, weight: 4 },
            { id: 'inkilap', name: 'T.C. İnkılap Tarihi ve Atatürkçülük', total: 10, weight: 1 },
            { id: 'din', name: 'Din Kültürü ve Ahlak Bilgisi', total: 10, weight: 1 },
            { id: 'ingilizce', name: 'Yabancı Dil (İngilizce)', total: 10, weight: 1 },
          ],
          baseScore: 100, // Örnek taban puan
          maxScore: 500,
        };
      case 'kpss':
         return {
          title: "KPSS (Lisans/Önlisans) Puan Hesaplama",
          sections: [
            { id: 'gk_turkce', name: 'Genel Yetenek - Türkçe', total: 30, weight: 0.5 }, // Ağırlıklar P1,P2,P3 için değişir
            { id: 'gk_mat', name: 'Genel Yetenek - Matematik', total: 30, weight: 0.5 },
            { id: 'gy_tarih', name: 'Genel Kültür - Tarih', total: 27, weight: 0.3 },
            { id: 'gy_cografya', name: 'Genel Kültür - Coğrafya', total: 18, weight: 0.3 },
            { id: 'gy_vatandaslik', name: 'Genel Kültür - Vatandaşlık', total: 9, weight: 0.15 },
            { id: 'gy_guncel', name: 'Genel Kültür - Güncel Bilgiler', total: 6, weight: 0.10 },
          ],
          baseScore: 40, // Ham puanlar standart puana çevrilir, bu basit bir örnek
        };
      case 'yds':
      case 'yokdil':
         return {
          title: `${examName} Puan Hesaplama`,
          sections: [
            { id: 'main', name: 'Toplam Soru', total: 80, weight: 1.25 }, // 100/80
          ],
          baseScore: 0,
        };
      default:
        return null;
    }
  };

  const config = getExamConfig();

  const handleCalculate = () => {
    if (!config) return;
    let totalWeightedNet = 0;
    let totalNet = 0;
    let calculationError = null;

    config.sections.forEach(section => {
      const correct = inputs[section.id]?.correct || 0;
      const incorrect = inputs[section.id]?.incorrect || 0;
      const { net, error } = calculateNet(correct, incorrect, section.total);
      if (error) {
        calculationError = error;
        return;
      }
      totalWeightedNet += net * (section.weight || 1); // Ağırlık yoksa 1 al
      totalNet += net;
    });

    if (calculationError) {
        setCalculatedScore({ error: calculationError });
        return;
    }

    let finalScore = (config.baseScore || 0) + totalWeightedNet;

    if (examKey.toLowerCase() === 'yks' && config.includeOBP) {
        const obpContribution = (diplomaGrade * 0.6); // OBP'nin %60'ı (0.12 katsayısı ile çarpılır)
        // YKS'de TYT ve AYT puanları ayrı hesaplanır ve sonra birleştirilir, bu daha basit bir genel yaklaşım.
        // Gerçek hesaplama çok daha karmaşıktır ve puan türüne (SAY, EA, SÖZ, DİL) göre değişir.
        // Bu örnekte genel bir fikir vermesi amacıyla OBP'yi ekliyoruz.
        finalScore += obpContribution; 
        setCalculatedScore({
            TYT: ((inputs['tyt_turkce']?.net || 0) * 1.32 + (inputs['tyt_sosyal']?.net || 0) * 1.36 + (inputs['tyt_mat']?.net || 0) * 1.32 + (inputs['tyt_fen']?.net || 0) * 1.36 + config.baseScoreTYT + obpContribution).toFixed(3),
            // AYT Puanları için daha detaylı mantık gerekir, şimdilik genel bir toplam gösterilebilir veya seçime göre.
            GenelToplam: finalScore.toFixed(3), 
            OBPContribution: obpContribution.toFixed(3)
        });
    } else if (examKey.toLowerCase() === 'lgs' && config.maxScore) {
        finalScore = Math.min(finalScore, config.maxScore); // LGS'de maksimum puan 500'dür.
        finalScore = Math.max(config.baseScore, finalScore); // Minimum puanı da taban puan olarak alalım.
        setCalculatedScore({ score: finalScore.toFixed(3) });
    } else if ((examKey.toLowerCase() === 'yds' || examKey.toLowerCase() === 'yokdil')) {
        const correct = inputs['main']?.correct || 0;
        finalScore = correct * (config.sections[0].weight || 1.25);
        finalScore = Math.min(100, Math.max(0, finalScore)); // 0-100 arası
        setCalculatedScore({ score: finalScore.toFixed(0) });
    } else {
        // KPSS ve diğerleri için daha karmaşık standart sapma ve ortalama hesaplamaları gerekir.
        // Bu örnek basit bir ağırlıklı net toplamıdır.
        setCalculatedScore({ score: finalScore.toFixed(3), note: "Bu tahmini bir puandır. Gerçek KPSS puanı standart sapma ve ortalama ile hesaplanır." });
    }

  };

  if (!config) {
    return (
      <Card className="mt-6 bg-destructive/10 border-destructive/30">
        <CardHeader>
          <CardTitle className="flex items-center text-destructive">
            <AlertTriangle className="mr-2 h-6 w-6" /> Hesaplama Aracı Bulunamadı
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-destructive-foreground">
            "{examName}" sınavı için puan hesaplama aracı şu anda mevcut değil veya yapılandırılmamış.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
      <Card className="w-full max-w-2xl mx-auto shadow-xl">
        <CardHeader className="text-center bg-primary/5">
          <Calculator className="mx-auto h-12 w-12 text-primary mb-3" />
          <CardTitle className="text-2xl font-bold text-primary">{config.title}</CardTitle>
          <CardDescription>
            Doğru ve yanlış sayılarınızı girerek {examName} puanınızı yaklaşık olarak hesaplayın.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          {config.sections.map((section, index) => (
            <motion.div key={section.id} custom={index} initial="hidden" animate="visible" variants={fadeIn} className="p-4 border rounded-lg bg-background shadow-sm">
              <h3 className="text-lg font-semibold text-foreground mb-3">{section.name} <span className="text-xs text-muted-foreground">({section.total} Soru)</span></h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor={`${section.id}-correct`} className="text-sm font-medium">Doğru Sayısı</Label>
                  <Input 
                    type="number" 
                    id={`${section.id}-correct`} 
                    value={inputs[section.id]?.correct ?? ""}
                    onChange={(e) => handleInputChange(section.id, 'correct', e.target.value)}
                    placeholder="0"
                    min="0"
                    max={section.total}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor={`${section.id}-incorrect`} className="text-sm font-medium">Yanlış Sayısı</Label>
                  <Input 
                    type="number" 
                    id={`${section.id}-incorrect`} 
                    value={inputs[section.id]?.incorrect ?? ""}
                    onChange={(e) => handleInputChange(section.id, 'incorrect', e.target.value)}
                    placeholder="0"
                    min="0"
                    className="mt-1"
                  />
                </div>
              </div>
               {(inputs[section.id]?.correct || 0) + (inputs[section.id]?.incorrect || 0) > section.total && (
                 <p className="text-xs text-red-500 mt-1">Doğru ve yanlış toplamı, toplam soru sayısını ({section.total}) geçemez.</p>
               )}
            </motion.div>
          ))}

          {config.includeOBP && (
            <motion.div custom={config.sections.length} initial="hidden" animate="visible" variants={fadeIn} className="p-4 border rounded-lg bg-background shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <Label htmlFor="diploma-grade" className="text-lg font-semibold text-foreground">Ortaöğretim Başarı Puanı (OBP)</Label>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Info className="h-5 w-5 text-muted-foreground cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Diploma notunuzu (100'lük sistemde) girin veya kaydırıcıyı kullanın. OBP = Diploma Notu x 5.</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex items-center space-x-4">
                <Slider
                  id="diploma-grade-slider"
                  min={50}
                  max={100}
                  step={0.01}
                  value={[diplomaGrade]}
                  onValueChange={handleSliderChange}
                  className="flex-grow"
                />
                <Input
                  type="number"
                  id="diploma-grade-input"
                  value={diplomaGrade}
                  onChange={(e) => {
                      let val = parseFloat(e.target.value);
                      if (isNaN(val)) val = 50;
                      setDiplomaGrade(Math.max(50, Math.min(100, val)));
                      setCalculatedScore(null);
                  }}
                  min="50"
                  max="100"
                  step="0.01"
                  className="w-24"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">Seçilen Diploma Notu: {diplomaGrade.toFixed(2)} (OBP: {(diplomaGrade * 5).toFixed(2)})</p>
            </motion.div>
          )}

          <Button onClick={handleCalculate} size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-base">
            <Calculator className="mr-2 h-5 w-5" /> Puanı Hesapla
          </Button>
        </CardContent>

        {calculatedScore && (
          <CardFooter className="p-6 bg-green-500/10 border-t">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full">
              <h3 className="text-xl font-bold text-green-700 mb-3 flex items-center">
                <CheckCircle className="mr-2 h-6 w-6"/> Tahmini {examName} Sonucunuz:
              </h3>
              {calculatedScore.error && (
                <p className="text-red-600 font-semibold text-lg">{calculatedScore.error}</p>
              )}
              {!calculatedScore.error && (
                <>
                    {Object.entries(calculatedScore).map(([key, value]) => {
                        if (key === 'error' || key === 'note') return null;
                        let label = key;
                        if (key === 'score') label = "Toplam Puan";
                        else if (key === 'TYT') label = "TYT Puanı";
                        else if (key === 'OBPContribution') label = "OBP Katkısı";
                        else if (key === 'GenelToplam' && examKey.toLowerCase() === 'yks') label = "Yaklaşık Yerleştirme Puanı (OBP Dahil)";


                        return (
                           <p key={key} className="text-lg text-green-800">
                            <span className="font-semibold">{label}:</span> {value}
                           </p>
                        );
                    })}
                    {calculatedScore.note && <p className="text-sm text-muted-foreground mt-2 italic">{calculatedScore.note}</p>}
                     <p className="text-xs text-muted-foreground mt-3">
                        Bu hesaplama tahmini bir değerdir ve ÖSYM'nin resmi hesaplamalarından farklılık gösterebilir.
                        Sınavın zorluk derecesi, standart sapma gibi faktörler sonucu etkileyebilir.
                     </p>
                </>
              )}
            </motion.div>
          </CardFooter>
        )}
      </Card>
    </motion.div>
  );
};

export default ScoreCalculatorContent;
