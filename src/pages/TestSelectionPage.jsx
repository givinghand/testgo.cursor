
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ChevronRight, Filter } from "lucide-react";

const subjects = [
  { name: "Matematik", topics: 25, iconColor: "text-blue-500", bgColor: "bg-blue-50" },
  { name: "Türkçe", topics: 18, iconColor: "text-red-500", bgColor: "bg-red-50" },
  { name: "Fizik", topics: 22, iconColor: "text-purple-500", bgColor: "bg-purple-50" },
  { name: "Kimya", topics: 15, iconColor: "text-green-500", bgColor: "bg-green-50" },
  { name: "Biyoloji", topics: 19, iconColor: "text-yellow-500", bgColor: "bg-yellow-50" },
  { name: "Tarih", topics: 12, iconColor: "text-orange-500", bgColor: "bg-orange-50" },
  { name: "Coğrafya", topics: 10, iconColor: "text-teal-500", bgColor: "bg-teal-50" },
  { name: "Felsefe", topics: 8, iconColor: "text-indigo-500", bgColor: "bg-indigo-50" },
];

export function TestSelectionPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-3">Testini Seç, Hemen Başla!</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Aşağıdaki derslerden birini seçerek ilgili konulara ait testleri çözmeye başlayabilirsin.
        </p>
      </motion.div>

      <div className="mb-8 flex justify-end">
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" /> Filtrele
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {subjects.map((subject, index) => (
          <motion.div
            key={subject.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Card className={`hover:shadow-xl transition-shadow duration-300 border-l-4 ${subject.bgColor.replace('bg-', 'border-')}`}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-semibold">{subject.name}</CardTitle>
                <div className={`p-2 rounded-lg ${subject.bgColor}`}>
                  <BookOpen className={`h-6 w-6 ${subject.iconColor}`} />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{subject.topics} farklı konu başlığı</p>
                <Button className="w-full group">
                  Konuları Gör <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
