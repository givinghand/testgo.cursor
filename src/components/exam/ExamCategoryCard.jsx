import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ExamCategoryCard({ category }) {
  return (
    <Card className={`hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden group relative border-2 ${category.borderColor} hover:border-secondary card-hover`}>
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-300 z-10"></div>
      <div className={`absolute inset-0 ${category.gradient} transition-all duration-300 group-hover:opacity-90`}></div>
      <img-replace src={category.image} alt={category.name} class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300 opacity-40" />
      <CardHeader className="relative z-20 flex flex-col items-center justify-center text-center p-6 min-h-[240px] bg-gradient-to-t from-black/90 via-black/60 to-transparent">
        <div className={`p-4 rounded-full ${category.bgColor} mb-4 shadow-lg`}>{React.cloneElement(category.icon, { className: category.icon.props.className.replace(/text-\w+-\d+/, 'text-primary') })}</div>
        <CardTitle className="text-2xl font-bold text-white group-hover:text-secondary transition-colors duration-300 mb-2">{category.name}</CardTitle>
        <CardDescription className="text-sm text-slate-200 group-hover:text-slate-50 transition-colors duration-300 line-clamp-2">{category.description}</CardDescription>
      </CardHeader>
    </Card>
  );
}