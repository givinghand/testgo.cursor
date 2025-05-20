
import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { blogPostsData, generateBlogPostsForCategory, examCategoriesForBlog } from "@/data/blogPosts";
import { CalendarDays, UserCircle, ArrowLeft, BookOpen, BarChart2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ExamSubjectsContent from "@/components/blog/ExamSubjectsContent";
import ScoreCalculatorContent from "@/components/blog/ScoreCalculatorContent";

const findPostById = (postId) => {
  const standardPost = blogPostsData.find((p) => p.id.toString() === postId);
  if (standardPost) return standardPost;

  // Check generated posts
  for (const category of examCategoriesForBlog) {
    if (category.id !== 'all' && category.id !== 'genel' && !postId.startsWith(category.id + "-generated-")) continue;
    
    // Try to find if the postId matches a generated post ID format
    // e.g., "yks-generated-1000"
    if (postId.startsWith(category.id + "-generated-")) {
        const generatedPosts = generateBlogPostsForCategory(category.id, category.name, 15); // Generate a decent number to check against
        const foundGenerated = generatedPosts.find(p => p.id === postId);
        if (foundGenerated) return foundGenerated;
    }
  }
  return null;
};


export function BlogPostPage() {
  const { postId } = useParams();
  const post = findPostById(postId);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <AlertTriangle className="mx-auto h-16 w-16 text-destructive mb-4" />
        <h1 className="text-3xl font-bold text-destructive mb-4">Yazı Bulunamadı</h1>
        <p className="text-muted-foreground mb-6">Aradığınız blog yazısı mevcut değil veya kaldırılmış olabilir.</p>
        <Button asChild>
          <Link to="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> Bloga Geri Dön
          </Link>
        </Button>
      </div>
    );
  }
  
  const isScoreCalculatorPage = post.categoryKey === "puan-hesaplama";
  const isExamSubjectsPage = post.categoryKey === "sinav-konulari";
  let examKeyForContent = null;
  if (isScoreCalculatorPage || isExamSubjectsPage) {
      if (post.title.toLowerCase().includes("yks")) examKeyForContent = "yks";
      else if (post.title.toLowerCase().includes("lgs")) examKeyForContent = "lgs";
      else if (post.title.toLowerCase().includes("kpss-lisans") || (post.title.toLowerCase().includes("kpss") && post.title.toLowerCase().includes("lisans"))) examKeyForContent = "kpss-lisans";
      else if (post.title.toLowerCase().includes("kpss-önlisans") || (post.title.toLowerCase().includes("kpss") && post.title.toLowerCase().includes("önlisans"))) examKeyForContent = "kpss-onlisans";
      else if (post.title.toLowerCase().includes("kpss")) examKeyForContent = "kpss"; // Genel KPSS
      else if (post.title.toLowerCase().includes("yds")) examKeyForContent = "yds";
      else if (post.title.toLowerCase().includes("yökdil")) examKeyForContent = "yokdil";
  }


  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <Button variant="outline" asChild className="mb-6">
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" /> Tüm Yazılara Dön
            </Link>
          </Button>
          <span className="block text-sm font-semibold uppercase text-primary mb-2">{post.category}</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 leading-tight">{post.title}</h1>
          <div className="flex items-center text-muted-foreground text-sm space-x-4">
            <div className="flex items-center">
              <CalendarDays className="h-4 w-4 mr-1.5" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <UserCircle className="h-4 w-4 mr-1.5" />
              <span>{post.author}</span>
            </div>
          </div>
        </div>

        {!isScoreCalculatorPage && !isExamSubjectsPage && (
          <div className="aspect-video rounded-lg overflow-hidden mb-8 shadow-lg">
            <img  alt={post.title} class="w-full h-full object-cover" src={`https://source.unsplash.com/800x450/?${post.imageSlug || post.title.split(" ")[0]},education`} src="https://images.unsplash.com/photo-1504983875-d3b163aba9e6" />
          </div>
        )}

        <article className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground">
          <p className="lead text-xl text-foreground mb-6">{post.excerpt}</p>
          
          {isScoreCalculatorPage && examKeyForContent && <ScoreCalculatorContent examKey={examKeyForContent} />}
          {isExamSubjectsPage && examKeyForContent && <ExamSubjectsContent examKey={examKeyForContent} />}

          {!isScoreCalculatorPage && !isExamSubjectsPage && (
            <>
              <p>Bu yazıda, {post.title.toLowerCase()} konusunu derinlemesine inceleyeceğiz. Öğrencilerin sıkça karşılaştığı zorlukları ve bu zorlukların üstesinden gelmek için TESTGO'nun sunduğu çözümleri ele alacağız. Sınav hazırlık sürecinde doğru stratejilerle ilerlemek, hedeflerinize ulaşmanızda kritik bir rol oynar.</p>
              <h2 className="text-2xl font-semibold mt-8 mb-4">Neden Bu Konu Önemli?</h2>
              <p>{post.category} sınavına hazırlanan adaylar için {post.title.split(':')[0]} gibi konular temel yapı taşlarından biridir. Bu konulardaki eksiklikler, genel başarıyı olumsuz etkileyebilir. TESTGO platformu, bu tür eksiklikleri tespit etmenize ve gidermenize yardımcı olmak için tasarlanmıştır. Kapsamlı konu testleri ve deneme sınavları ile kendinizi değerlendirebilir, performansınızı takip edebilirsiniz.</p>
              {post.linkTo && post.linkText && !post.linkTo.startsWith('/blog/') && ( // Sadece harici linkler için kart göster
                <Card className="my-8 bg-primary/5 border-primary/20">
                  <CardContent className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-1">Pratiğe Dökün!</h3>
                      <p className="text-sm text-muted-foreground">Hemen şimdi TESTGO'da ilgili testleri çözerek veya konuları çalışarak bilginizi pekiştirin.</p>
                    </div>
                    <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shrink-0">
                      <Link to={post.linkTo}>
                        {post.category.includes("YKS") || post.category.includes("LGS") || post.category.includes("KPSS") ? <BarChart2 className="mr-2 h-4 w-4" /> : <BookOpen className="mr-2 h-4 w-4" />}
                        {post.linkText}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )}
              <h2 className="text-2xl font-semibold mt-8 mb-4">TESTGO ile Nasıl Daha İyi Hazırlanabilirsiniz?</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="font-semibold">Kişiselleştirilmiş Çalışma Planları:</strong> Zayıf olduğunuz konulara odaklanan, size özel çalışma programları.</li>
                <li><strong className="font-semibold">Detaylı Performans Analizi:</strong> Her test sonrası güçlü ve zayıf yönlerinizi gösteren ayrıntılı raporlar.</li>
                <li><strong className="font-semibold">Gerçek Sınav Deneyimi:</strong> Süreli denemeler ve Türkiye geneli sıralamalar ile kendinizi test edin.</li>
                <li><strong className="font-semibold">Zengin Soru Bankası:</strong> Binlerce güncel soru ile farklı soru tiplerine aşina olun.</li>
              </ul>
              <p className="mt-6">Unutmayın, düzenli çalışma ve doğru kaynak kullanımı başarının anahtarıdır. TESTGO, bu yolculukta size rehberlik etmek ve hedeflerinize ulaşmanızı sağlamak için burada. Sınavlara hazırlık sürecinizi daha verimli ve etkili hale getirmek için platformumuzu keşfedin.</p>
              <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-8">
                "Başarının sırrı, hazırlıklı olmaktır." - Benjamin Disraeli. TESTGO ile her zaman bir adım önde olun.
              </blockquote>
              <p>Daha fazla ipucu ve strateji için blogumuzu takip etmeye devam edin. Başarılar dileriz!</p>
            </>
          )}
        </article>
      </motion.div>
    </div>
  );
}
