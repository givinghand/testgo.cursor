
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, FileText, Lock, Users } from "lucide-react";

export function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <ShieldCheck className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
          KVKK & Gizlilik Politikası
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Verilerinizin güvenliği ve gizliliğiniz bizim için önemlidir.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-3xl mx-auto bg-card p-8 md:p-10 rounded-xl shadow-xl space-y-8"
      >
        <section>
          <h2 className="text-2xl font-semibold text-primary mb-3 flex items-center">
            <FileText className="h-6 w-6 mr-2" /> Giriş
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            TESTGO olarak, kullanıcılarımızın kişisel verilerinin korunmasına büyük önem veriyoruz. Bu gizlilik politikası, platformumuzu kullandığınızda hangi kişisel verileri topladığımızı, bu verileri nasıl kullandığımızı, kimlerle paylaştığımızı ve haklarınızı nasıl kullanabileceğinizi açıklamaktadır. Bu politika, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve ilgili diğer yasal düzenlemelere uygun olarak hazırlanmıştır.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-3 flex items-center">
            <Lock className="h-6 w-6 mr-2" /> Topladığımız Kişisel Veriler
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Platformumuza üye olurken veya hizmetlerimizi kullanırken sizden adınız, soyadınız, e-posta adresiniz, TC Kimlik numaranız (isteğe bağlı ve belirli hizmetler için), eğitim seviyeniz gibi bilgileri toplayabiliriz. Ayrıca, platformu kullanımınız sırasında test sonuçlarınız, ilerlemeniz ve etkileşimleriniz gibi veriler de otomatik olarak kaydedilebilir.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-3 flex items-center">
            <ShieldCheck className="h-6 w-6 mr-2" /> Verilerin Kullanım Amaçları
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Topladığımız kişisel veriler, hizmetlerimizi sunmak, platformu geliştirmek, kullanıcı deneyimini kişiselleştirmek, destek sağlamak, yasal yükümlülüklerimizi yerine getirmek ve sizinle iletişim kurmak amacıyla kullanılır. Verileriniz, size daha iyi hizmet sunabilmemiz için analiz edilebilir ve istatistiksel amaçlarla kullanılabilir.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold text-primary mb-3 flex items-center">
            <Users className="h-6 w-6 mr-2" /> Verilerin Paylaşımı
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Kişisel verileriniz, yasal zorunluluklar olmadıkça veya açık rızanız alınmadıkça üçüncü taraflarla paylaşılmaz. Hizmetlerimizi sunabilmek için çalıştığımız iş ortaklarımızla (örneğin, sunucu sağlayıcıları) veri paylaşımı yapılması durumunda, bu paylaşımlar KVKK'ya uygun olarak ve gizlilik sözleşmeleri çerçevesinde gerçekleştirilir.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-3 flex items-center">
            <FileText className="h-6 w-6 mr-2" /> Haklarınız
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            KVKK kapsamında, kişisel verilerinizle ilgili olarak bilgi talep etme, düzeltme, silme, işlenmesine itiraz etme gibi haklara sahipsiniz. Bu haklarınızı kullanmak için bizimle iletişime geçebilirsiniz.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-3 flex items-center">
            <Lock className="h-6 w-6 mr-2" /> Veri Güvenliği
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Kişisel verilerinizin güvenliğini sağlamak için gerekli teknik ve idari tedbirleri alıyoruz. Verilerinizi yetkisiz erişime, kayba veya hasara karşı korumak için endüstri standardı güvenlik önlemleri uyguluyoruz.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-3 flex items-center">
            <FileText className="h-6 w-6 mr-2" /> Politika Güncellemeleri
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Bu gizlilik politikası zaman zaman güncellenebilir. Güncellemeler platformumuzda yayınlandığı anda yürürlüğe girer. Politikadaki önemli değişiklikler hakkında sizi bilgilendireceğiz.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-2">
            Son Güncelleme: 15 Mayıs 2025
          </p>
        </section>

        <section>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Bu politika metni genel bilgilendirme amaçlıdır ve yasal bir belge niteliği taşımaz. Detaylı ve hukuki geçerliliği olan metinler için lütfen profesyonel danışmanlık alınız.
          </p>
        </section>
      </motion.div>
    </div>
  );
}
