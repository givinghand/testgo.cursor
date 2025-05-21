import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export function ExamCategoryCard({ category }) {
  return (
    <Card className={`hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden group relative border-2 ${category.borderColor} hover:scale-105 hover:rotate-1 hover:border-2 card-hover`}>
      <div className={`absolute inset-0 ${category.gradient} opacity-95 group-hover:opacity-100 transition-all duration-500 z-10`}></div>
      <div className="absolute inset-0 bg-black/20 z-10"></div>
      <img-replace src={category.image} alt={category.name} class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
      <CardHeader className="relative z-20 flex flex-col items-center justify-center text-center p-6 h-48">
        <div className="p-3 rounded-full bg-white/90 shadow-lg mb-3 group-hover:scale-110 transition-transform duration-500">{React.cloneElement(category.icon, { className: category.icon.props.className })}</div>
        <CardTitle className="text-2xl font-bold text-white drop-shadow-lg">{category.name}</CardTitle>
      </CardHeader>
    </Card>
  );
}