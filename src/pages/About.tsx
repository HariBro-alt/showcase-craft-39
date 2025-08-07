import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Calendar, MapPin } from "lucide-react";
import Layout from "@/components/layout/Layout";

const About = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB",
    "Next.js", "Tailwind CSS", "Docker", "AWS", "Git", "Figma"
  ];

  const experience = [
    {
      role: "Senior Frontend Developer",
      company: "Tech Company",
      period: "2022 - Present",
      location: "San Francisco, CA"
    },
    {
      role: "Full Stack Developer",
      company: "Startup Inc",
      period: "2020 - 2022",
      location: "New York, NY"
    },
    {
      role: "Junior Developer",
      company: "Digital Agency",
      period: "2019 - 2020",
      location: "Los Angeles, CA"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="text-xl text-foreground-secondary leading-relaxed animate-slide-up">
            I'm a passionate full-stack developer with 5+ years of experience creating 
            digital solutions that make a difference. I love turning complex problems 
            into simple, beautiful, and intuitive solutions.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Biography */}
          <div className="space-y-8">
            <Card className="card-gradient border-card-border hover-lift">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4 flex items-center">
                  <span className="text-gradient">My Story</span>
                </h2>
                <div className="space-y-4 text-foreground-secondary">
                  <p>
                    My journey into tech started during college when I built my first website. 
                    What began as curiosity quickly became a passion for creating digital experiences 
                    that solve real-world problems.
                  </p>
                  <p>
                    Over the years, I've had the privilege of working with startups and established 
                    companies, helping them bring their visions to life through clean code and 
                    thoughtful design.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, contributing 
                    to open source projects, or sharing knowledge through my blog and speaking 
                    at developer meetups.
                  </p>
                </div>
                <Button className="mt-6" size="lg">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Skills & Experience */}
          <div className="space-y-8">
            {/* Skills */}
            <Card className="card-gradient border-card-border hover-lift">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-6 text-gradient">Skills & Technologies</h2>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="card-gradient border-card-border hover-lift">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-6 text-gradient">Experience</h2>
                <div className="space-y-6">
                  {experience.map((job, index) => (
                    <div key={index} className="border-l-2 border-primary/20 pl-4">
                      <h3 className="font-semibold text-lg">{job.role}</h3>
                      <p className="text-primary font-medium">{job.company}</p>
                      <div className="flex items-center gap-4 text-sm text-foreground-secondary mt-1">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {job.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {job.location}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;