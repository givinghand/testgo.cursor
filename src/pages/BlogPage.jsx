
import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarDays, UserCircle, BookOpen, BarChart2, Filter, Search, ExternalLink, Rss } from "lucide-react";
import { blogPostsData, examCategoriesForBlog, generateBlogPostsForCategory } from "@/data/blogPosts";
import { Input } from "@/components/ui/input";

const getUnsplashImageUrl = (slug, category) => {
  const keywords = slug.split('-').slice(0, 2).join(',') + ',' + category.split(' ')[0].toLowerCase();
  return `https://source.unsplash.com/300x200/?${keywords},study,education,learning,${Math.random()}`;
}

export function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const allPosts = useMemo(() => {
    let initialPosts = [...blogPostsData];
    
    examCategoriesForBlog.forEach(category => {
      if (category.id !== 'all' && category.id !== 'genel' && category.id !== 'puan-hesaplama' && category.id !== 'sinav-konulari' && category.id !== 'tercih-rehberi') {
        const existingPostsForCat = initialPosts.filter(post => post.categoryKey === category.id);
        const postsToGenerate = Math.max(0, 5 - existingPostsForCat.length); 
        if (postsToGenerate > 0) {
          const generated = generateBlogPostsForCategory(category.id, category.name, postsToGenerate, existingPostsForCat.length);
          initialPosts = initialPosts.concat(generated);
        }
      }
    });
    
    return Array.from(new Set(initialPosts.map(a => a.id))).map(id => {
      return initialPosts.find(a => a.id === id)
    }).sort((a, b) => new Date(b.date) - new Date(a.date)); // En yeni postlar başta
  }, []);


  const filteredPosts = useMemo(() => {
    return allPosts
    .filter(post => selectedCategory === "all" || post.categoryKey === selectedCategory)
    .filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [allPosts, selectedCategory, searchTerm]);

  return (
    <div className="container mx-auto px-4 py-12 bg-background">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center"
      >
        <Rss className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl font-bold text-foreground mb-3">
          <span className="text-primary">TEST</span><span className="text-[hsl(var(--secondary))]">GO</span> Blog & Kaynaklar
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Sınav hazırlığı, puan hesaplama, konu listeleri ve stratejiler hakkında en güncel yazılarımız.
        </p>
      </motion.div>

      <div className="mb-8 p-4 bg-card rounded-lg shadow sticky top-20 z-40">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="relative flex-grow w-full sm:w-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Blog ve kaynaklarda ara..."
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
                className="whitespace-nowrap flex-shrink-0"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id + '-' + index} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.03 }}
              className="flex"
            >
              <Card className="h-full flex flex-col overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg border border-border card-hover bg-card">
                <Link to={post.linkTo || `/blog/${post.id}`} className="block aspect-[16/10] overflow-hidden">
                  <img-replace src={getUnsplashImageUrl(post.imageSlug || post.title, post.category)} alt={post.title} class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" />
                </Link>
                <CardHeader className="p-3">
                  <span className="text-xs font-medium uppercase text-primary mb-1 tracking-wide">{post.category}</span>
                  <CardTitle className="text-base font-semibold hover:text-primary transition-colors duration-200 cursor-pointer leading-tight">
                    <Link to={post.linkTo || `/blog/${post.id}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow p-3 pt-0">
                  <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="flex flex-col items-start space-y-2 p-3 pt-2 border-t border-border/50">
                  <div className="flex items-center text-xs text-muted-foreground w-full">
                    <CalendarDays className="h-3.5 w-3.5 mr-1.5 flex-shrink-0" /> <span className="truncate text-xs">{post.date}</span>
                  </div>
                  <div className="w-full flex justify-between items-center">
                    <Button variant="link" asChild className="p-0 h-auto text-primary hover:underline text-xs">
                      <Link to={post.linkTo || `/blog/${post.id}`}>
                        Devamını Oku <ArrowRight className="ml-1 h-3.5 w-3.5" />
                      </Link>
                    </Button>
                    {post.linkTo && post.linkText && post.id.toString().startsWith(post.categoryKey + "-generated") && (
                      <Button variant="ghost" size="sm" asChild className="text-primary hover:bg-primary/10 text-xs px-2 py-1 h-auto">
                        <Link to={post.linkTo}>
                           <ExternalLink className="mr-1 h-3.5 w-3.5" />
                          {post.linkText.split(' ')[0]}
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
            Aradığınız kriterlere uygun yazı bulunamadı.
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
