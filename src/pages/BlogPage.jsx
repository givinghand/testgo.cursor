
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarDays, UserCircle, BookOpen, BarChart2 } from "lucide-react";
import { blogPostsData } from "@/data/blogPosts";

const getUnsplashImageUrl = (slug, category) => {
  const keywords = slug.split('-').slice(0, 2).join(',') + ',' + category.split(' ')[0].toLowerCase();
  return `https://source.unsplash.com/400x300/?${keywords},study,education,learning`;
}

export function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12 bg-background">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center"
      >
        <h1 className="text-4xl font-bold text-foreground mb-3">
          <span className="text-primary">TEST</span><span className="text-[hsl(var(--secondary))]">GO</span> Blog
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Sınav hazırlığı, motivasyon ve öğrenme stratejileri hakkında en güncel yazılarımız.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPostsData.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="flex"
          >
            <Card className="h-full flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg border border-border card-hover">
              <Link to={`/blog/${post.id}`} className="block aspect-[4/3] overflow-hidden">
                <img  alt={post.title} class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
              </Link>
              <CardHeader className="p-4">
                <span className="text-xs font-semibold uppercase text-primary mb-1">{post.category}</span>
                <CardTitle className="text-lg font-bold hover:text-primary transition-colors duration-200 cursor-pointer leading-tight">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow p-4">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="flex flex-col items-start space-y-3 p-4 pt-2 border-t border-border">
                <div className="flex items-center text-xs text-muted-foreground w-full">
                  <CalendarDays className="h-4 w-4 mr-1.5 flex-shrink-0" /> <span className="truncate">{post.date}</span>
                  <span className="mx-1.5">|</span>
                  <UserCircle className="h-4 w-4 mr-1.5 flex-shrink-0" /> <span className="truncate">{post.author}</span>
                </div>
                <div className="w-full flex justify-between items-center">
                   <Button variant="link" asChild className="p-0 h-auto text-primary hover:underline">
                     <Link to={`/blog/${post.id}`}>
                       Devamını Oku <ArrowRight className="ml-1.5 h-4 w-4" />
                     </Link>
                   </Button>
                   {post.linkTo && post.linkText && (
                     <Button variant="outline" size="sm" asChild className="border-primary text-primary hover:bg-primary/10">
                       <Link to={post.linkTo}>
                         {post.category.includes("YKS") || post.category.includes("LGS") || post.category.includes("KPSS") ? <BarChart2 className="mr-1.5 h-4 w-4" /> : <BookOpen className="mr-1.5 h-4 w-4" />}
                         {post.linkText}
                       </Link>
                     </Button>
                   )}
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
