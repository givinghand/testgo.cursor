
import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Youtube, BookOpen, ExternalLink } from "lucide-react";

const getTopicDetails = (examId, subjectId, topicId) => {
  const topicName = topicId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  return {
    name: topicName,
    summary: `Bu bölümde ${topicName} konusu hakkında temel bilgileri bulabilirsiniz. ${subjectId.toUpperCase()} dersinin önemli bir parçası olan bu konu, ${examId.toUpperCase()} sınavında karşınıza çıkabilecek temel kavramları içerir. Konuyu daha iyi anlamak için aşağıdaki kaynakları inceleyebilirsiniz. TESTGO platformunda bu konuyla ilgili testleri çözerek bilginizi pekiştirebilirsiniz.`,
    videos: [
      { title: `${topicName} - Konu Anlatımı Video 1 (Örnek Kaynak)`, url: "https://www.youtube.com/results?search_query=" + encodeURIComponent(`${subjectId} ${topicName} konu anlatımı`), source: "YouTube (Genel Arama)" },
      { title: `${topicName} - Soru Çözümü Video (Örnek Kaynak)`, url: "https://www.youtube.com/results?search_query=" + encodeURIComponent(`${subjectId} ${topicName} soru çözümü`), source: "YouTube (Genel Arama)" },
      { title: `Khan Academy - ${subjectId} Dersleri (Örnek Kaynak)`, url: "https://www.khanacademy.org.tr/", source: "Khan Academy Türkiye" },
    ],
    relatedTestLink: `/test-coz/${examId}/${subjectId}/${topicId}`
  };
};

export function TopicDetailPage() {
  const { examId, subjectId, topicId } = useParams();
  const topicDetails = getTopicDetails(examId, subjectId, topicId);

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Button variant="outline" asChild className="mb-8">
          <Link to="/konu-calis">
            <ArrowLeft className="mr-2 h-4 w-4" /> Konu Listesine Dön
          </Link>
        </Button>

        <Card className="shadow-xl overflow-hidden">
          <CardHeader className="bg-primary/10 p-6">
            <div className="flex items-center mb-2">
              <BookOpen className="h-8 w-8 text-primary mr-3" />
              <div>
                <p className="text-sm font-medium text-muted-foreground">{subjectId.toUpperCase()} / {examId.toUpperCase()}</p>
                <CardTitle className="text-3xl font-bold text-primary">{topicDetails.name}</CardTitle>
              </div>
            </div>
            <CardDescription className="text-muted-foreground pt-1">
              Bu konu hakkında detaylı bilgiler ve öğrenme kaynakları.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-3">Konu Özeti</h2>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {topicDetails.summary}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Önerilen Video Kaynakları</h2>
              <div className="space-y-4">
                {topicDetails.videos.map((video, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <a href={video.url} target="_blank" rel="noopener noreferrer" className="block">
                      <Card className="hover:shadow-lg transition-shadow duration-200 hover:border-primary card-hover">
                        <CardContent className="p-4 flex items-center space-x-4">
                          <Youtube className="h-10 w-10 text-red-600 flex-shrink-0" />
                          <div className="flex-grow">
                            <h3 className="font-semibold text-foreground group-hover:text-primary">{video.title}</h3>
                            <p className="text-sm text-muted-foreground">{video.source}</p>
                          </div>
                          <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                        </CardContent>
                      </Card>
                    </a>
                  </motion.div>
                ))}
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Bilgini Test Et</h2>
              <p className="text-muted-foreground mb-4">
                Bu konuyla ilgili ne kadar öğrendiğini görmek için hemen bir test çöz!
              </p>
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link to={topicDetails.relatedTestLink}>
                  {topicDetails.name} Testini Çöz <ArrowLeft className="mr-2 h-4 w-4 rotate-180 ml-2" />
                </Link>
              </Button>
            </section>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
