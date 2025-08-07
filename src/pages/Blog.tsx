import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Blog = () => {
  const posts = [
    {
      title: "Building Scalable React Applications with TypeScript",
      excerpt: "Learn how to structure large React applications using TypeScript, best practices for component architecture, and performance optimization techniques.",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["React", "TypeScript", "Architecture"],
      slug: "scalable-react-typescript",
      featured: true
    },
    {
      title: "The Complete Guide to Modern CSS Grid",
      excerpt: "Master CSS Grid with practical examples, responsive layouts, and advanced techniques for creating flexible web designs.",
      date: "2024-01-10",
      readTime: "12 min read",
      tags: ["CSS", "Web Design", "Frontend"],
      slug: "complete-css-grid-guide",
      featured: true
    },
    {
      title: "Optimizing Node.js Performance for Production",
      excerpt: "Discover advanced techniques for optimizing Node.js applications, from memory management to clustering and monitoring.",
      date: "2024-01-05",
      readTime: "10 min read",
      tags: ["Node.js", "Performance", "Backend"],
      slug: "nodejs-performance-optimization",
      featured: false
    },
    {
      title: "Understanding React Server Components",
      excerpt: "Deep dive into React Server Components, their benefits, limitations, and how they're changing the way we think about React applications.",
      date: "2023-12-28",
      readTime: "6 min read",
      tags: ["React", "SSR", "Web Development"],
      slug: "react-server-components",
      featured: false
    },
    {
      title: "Database Design Patterns for Modern Applications",
      excerpt: "Explore common database design patterns, normalization strategies, and how to choose the right database for your project.",
      date: "2023-12-20",
      readTime: "15 min read",
      tags: ["Database", "Architecture", "Backend"],
      slug: "database-design-patterns",
      featured: false
    },
    {
      title: "Introduction to WebAssembly with Rust",
      excerpt: "Learn how to use Rust with WebAssembly to build high-performance web applications and when to choose this technology stack.",
      date: "2023-12-15",
      readTime: "11 min read",
      tags: ["WebAssembly", "Rust", "Performance"],
      slug: "webassembly-rust-intro",
      featured: false
    }
  ];

  const featuredPosts = posts.filter(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            My <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-xl text-foreground-secondary leading-relaxed animate-slide-up">
            Thoughts, tutorials, and insights about web development, technology trends, 
            and lessons learned from building modern applications.
          </p>
        </div>

        {/* Featured Posts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="text-gradient">Featured Posts</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {featuredPosts.map((post, index) => (
              <Card key={index} className="card-gradient border-card-border hover-lift group cursor-pointer">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 text-sm text-foreground-secondary mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-smooth">
                    {post.title}
                  </h3>
                  
                  <p className="text-foreground-secondary mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary-dark transition-smooth group">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-smooth" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Regular Posts */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="text-gradient">All Posts</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {regularPosts.map((post, index) => (
              <Card key={index} className="card-gradient border-card-border hover-lift group cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 text-sm text-foreground-secondary mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(post.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-smooth">
                        {post.title}
                      </h3>
                      
                      <p className="text-foreground-secondary text-sm mb-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-1">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary-dark transition-smooth group md:mt-0">
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-smooth" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Blog;