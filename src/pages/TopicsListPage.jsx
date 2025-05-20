
import React from "react";
import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, ChevronRight, BookOpen, Brain } from "lucide-react";
import { examFlowData } from "@/data/examData";

export function TopicsListPage() {
  const { examId, subExamId, subjectId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const pageType = queryParams.get('type') || 'study'; // 'study' or 'test'

  let exam = examFlowData[examId];
  let subject;
  let pageTitlePrefix = exam?.name || "Sınav";
  let backLink = pageType === 'test' ? "/test-coz" : "/konu-calis";

  if (exam?.subExams && subExamId) {
    const subExamDetails = exam.subExams.find(se => se.id === subExamId);
    if (subExamDetails) {
      subject = subExamDetails.subjects.find(s => s.id === subjectId);
      pageTitlePrefix = `${exam.name} - ${subExamDetails.name}`;
    }
  } else if (exam) {
    subject = exam.subjects?.find(s => s.id === subjectId);
  }

  if (!exam || !subject) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-destructive mb-4">Hata!</h1>
        <p className="text-muted-foreground mb-6">Seçilen sınav veya ders bulunamadı.</p>
        <Button asChild variant="outline">
          <Link to="/">Ana Sayfaya Dön</Link>
        </Button>
      </div>
    );
  }

  const handleTopicClick = (topic) => {
    const topicSlug = topic.toLowerCase().replace(/\s+/g, '-');
    let path;
    if (pageType === 'test') {
      path = subExamId 
        ? `/test-coz/${examId}/${subExamId}/${subjectId}/${topicSlug}` 
        : `/test-coz/${examId}/${subjectId}/${topicSlug}`;
    } else {
      path = subExamId
        ? `/konu-calis/${examId}/${subExamId}/${subjectId}/${topicSlug}`
        : `/konu-calis/${examId}/${subjectId}/${topicSlug}`;
    }
    navigate(path);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Button variant="outline" asChild className="mb-8 group">
          <Link to={backLink}>
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" /> 
            <span className="group-hover:text-primary transition-colors">Ders Seçimine Dön</span>
          </Link>
        </Button>

        <Card className="shadow-xl overflow-hidden">
          <CardHeader className="bg-primary/10 p-6">
            <div className="flex items-center mb-2">
              {React.cloneElement(subject.icon || <BookOpen />, { className: "h-8 w-8 text-primary mr-3" })}
              <div>
                <p className="text-sm font-medium text-muted-foreground">{pageTitlePrefix}</p>
                <CardTitle className="text-3xl font-bold text-primary">{subject.name} Konuları</CardTitle>
              </div>
            </div>
            <CardDescription className="text-muted-foreground pt-1">
              Aşağıdaki konulardan birini seçerek {pageType === 'test' ? 'test çözmeye başlayabilir' : 'konu anlatımlarına ulaşabilir'}siniz.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            {subject.topics && subject.topics.length > 0 ? (
              <div className="space-y-3">
                {subject.topics.map((topic, index) => (
                  <motion.div
                    key={topic}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    onClick={() => handleTopicClick(topic)}
                  >
                    <Button variant="outline" className="w-full justify-start text-left h-auto py-3.5 group hover:bg-primary/5 hover:border-primary transition-all duration-200 ease-in-out transform hover:scale-[1.01]">
                      <FileText className="mr-3 h-5 w-5 text-primary/80 group-hover:text-primary transition-colors" />
                      <span className="flex-grow text-foreground group-hover:text-primary transition-colors text-base">{topic}</span>
                      <ChevronRight className="ml-auto h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </Button>
                  </motion.div>
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground py-10">Bu ders için henüz konu eklenmemiş.</p>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
