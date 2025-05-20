
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarDays, UserCircle, BookOpen, BarChart2, Filter, Search } from "lucide-react";
import { blogPostsData, examCategoriesForBlog, generateBlogPostsForCategory } from "@/data/blogPosts";
import { Input } from "@/components/ui/input";

const getUnsplashImageUrl = (slug, category) => {
  const keywords = slug.split('-').slice(0, 2).join(',') + ',' + category.split(' ')[0].toLowerCase();
  return `https://source.unsplash.com/400x300/?${keywords},study,education,learning,${Math.random()}`;
}

export function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const allPostsWithGenerated = examCategoriesForBlog.reduce((acc, category) => {
    if (category.id !== 'all') { // 'all' için özel üretim yapmıyoruz
      const existingPosts = blogPostsData.filter(post => post.categoryKey === category.id);
      const postsToGenerate = 10 - existingPosts.length;
      if (postsToGenerate > 0) {
        const generated = generateBlogPostsForCategory(category.id, category.name, postsToGenerate, existingPosts.length +1);
        return acc.concat(existingPosts, generated);
      }
      return acc.concat(existingPosts);
    }
    return acc;
  }, blogPostsData.filter(post => !post.categoryKey)); // Kategori anahtarı olmayanları da ekle (genel)

   const uniqueAllPosts = Array.from(new Set(allPostsWithGenerated.map(a => a.id)))
    .map(id => {
      return allPostsWithGenerated.find(a => a.id === id)
    });


  const filteredPosts = uniqueAllPosts
    .filter(post => selectedCategory === "all" || post.categoryKey === selectedCategory)
    .filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="container mx-auto px-4 py-12 bg-background">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center"
      >
        <BookOpen className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl font-bold text-foreground mb-3">
          <span className="text-primary">TEST</span><span className="text-[hsl(var(--secondary))]">GO</span> Blog
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Sınav hazırlığı, motivasyon ve öğrenme stratejileri hakkında en güncel yazılarımız.
        </p>
      </motion.div>

      <div className="mb-8 p-4 bg-card rounded-lg shadow sticky top-20 z-40">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="relative flex-grow w-full sm:w-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Blog yazılarında ara..."
              className="pl-10 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
            <Filter className="h-5 w-5 text-primary flex-shrink-0" />
            {examCategoriesForBlog.map(category => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="whitespace-nowrap"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id + '-' + index} // Ensure unique keys if IDs can repeat due to generation strategy
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex"
            >
              <Card className="h-full flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg border border-border card-hover bg-background">
                <Link to={`/blog/${post.id}`} className="block aspect-[4/3] overflow-hidden">
                  <img-replace src={getUnsplashImageUrl(post.imageSlug || post.title, post.category)} alt={post.title} class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" />
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
                          {post.categoryKey && (["yks", "lgs", "kpss"].includes(post.categoryKey)) ? <BarChart2 className="mr-1.5 h-4 w-4" /> : <BookOpen className="mr-1.5 h-4 w-4" />}
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
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <Search className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
          <p className="text-xl text-muted-foreground">
            Aradığınız kriterlere uygun blog yazısı bulunamadı.
          </p>
          {selectedCategory !== "all" && (
             <Button variant="link" onClick={() => setSelectedCategory("all")} className="mt-4">
                Tüm Yazıları Göster
             </Button>
          )}
        </motion.div>
      )}
    </div>
  );
}
