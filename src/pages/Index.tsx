
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Users, TrendingUp, Download, Eye, Palette } from "lucide-react";
import MediaKitBuilder from "@/components/MediaKitBuilder";
import AuthForm from "@/components/AuthForm";
import Dashboard from "@/components/Dashboard";

const Index = () => {
  const [showBuilder, setShowBuilder] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("signup");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthSubmit = (email: string, password: string, name?: string) => {
    console.log("Auth submitted:", { email, password, name });
    setIsAuthenticated(true);
    setShowAuth(false);
    setShowDashboard(true);
  };

  const handleAuthToggle = () => {
    setAuthMode(authMode === "login" ? "signup" : "login");
  };

  const handleGetStarted = () => {
    setAuthMode("signup");
    setShowAuth(true);
  };

  const handleLogin = () => {
    setAuthMode("login");
    setShowAuth(true);
  };

  const handleCreateMediaKit = () => {
    setShowDashboard(false);
    setShowBuilder(true);
  };

  const handleBackToDashboard = () => {
    setShowBuilder(false);
    setShowDashboard(true);
  };

  if (showBuilder && isAuthenticated) {
    return <MediaKitBuilder onBack={handleBackToDashboard} />;
  }

  if (showDashboard && isAuthenticated) {
    return <Dashboard onBack={() => setShowDashboard(false)} onCreateMediaKit={handleCreateMediaKit} />;
  }

  if (showAuth) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="font-bold text-3xl text-purple-600 mb-2">
              MediaKit Pro
            </div>
            <Button 
              variant="ghost" 
              onClick={() => setShowAuth(false)}
              className="text-gray-600 hover:text-gray-900"
            >
              ← Back to home
            </Button>
          </div>
          <AuthForm 
            mode={authMode}
            onSubmit={handleAuthSubmit}
            onToggleMode={handleAuthToggle}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center border-b border-gray-200">
        <div className="font-bold text-2xl text-purple-600">
          MediaKit Pro
        </div>
        <div className="space-x-4">
          <Button variant="ghost" onClick={handleLogin} className="text-gray-600 hover:text-gray-900">
            Login
          </Button>
          <Button onClick={handleGetStarted} className="bg-purple-600 hover:bg-purple-700">
            Sign Up
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <Badge className="mb-6 bg-purple-100 text-purple-600 hover:bg-purple-200">
          The Future of Influencer Marketing
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
          Create Stunning
          <br />
          <span className="text-purple-600">Media Kits</span> in Minutes
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Professional media kits that convert. Connect your social accounts, showcase your best work, 
          and land bigger brand deals with our beautiful templates.
        </p>
        
        <div className="space-x-4">
          <Button 
            size="lg" 
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg"
            onClick={handleGetStarted}
          >
            Start Building <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
            <Eye className="mr-2 h-5 w-5" />
            View Examples
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { icon: Users, value: "50,000+", label: "Active Creators" },
            { icon: TrendingUp, value: "$10M+", label: "Deals Closed" },
            { icon: Star, value: "4.9/5", label: "Creator Rating" }
          ].map((stat, index) => (
            <Card key={index} className="p-6 text-center">
              <div className="flex items-center justify-center mb-4 w-12 h-12 rounded-full bg-purple-100 mx-auto">
                <stat.icon className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 py-20 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Everything You Need to Succeed</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional tools designed specifically for content creators and influencers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Palette,
              title: "Beautiful Templates",
              description: "Choose from dozens of professionally designed templates that make you stand out"
            },
            {
              icon: TrendingUp,
              title: "Social Integration",
              description: "Connect Instagram, YouTube, TikTok and more to automatically pull your best metrics"
            },
            {
              icon: Download,
              title: "Export Anywhere",
              description: "Download as PDF or share a live link. Perfect for email pitches or social bios"
            },
            {
              icon: Eye,
              title: "Analytics Dashboard",
              description: "Track views, downloads, and engagement to optimize your media kit performance"
            },
            {
              icon: Users,
              title: "Collaboration Tools",
              description: "Add testimonials, case studies, and brand partnerships to build credibility"
            },
            {
              icon: Star,
              title: "Premium Support",
              description: "Get help from our team of creator marketing experts whenever you need it"
            }
          ].map((feature, index) => (
            <Card key={index} className="p-6 h-full">
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-purple-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Level Up Your Creator Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of creators who've already transformed their brand partnerships
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="px-8 py-4 text-lg bg-white text-purple-600 hover:bg-gray-100"
            onClick={handleGetStarted}
          >
            Create Your Media Kit <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="font-bold text-xl text-purple-600 mb-4">
                MediaKit Pro
              </div>
              <p className="text-gray-600 mb-4">
                The professional platform for content creators to showcase their work and land bigger deals.
              </p>
            </div>
            {[
              {
                title: "Product",
                links: ["Templates", "Analytics", "Integrations", "Pricing"]
              },
              {
                title: "Support",
                links: ["Help Center", "Contact Us", "Creator Resources", "API Docs"]
              },
              {
                title: "Company",
                links: ["About", "Blog", "Careers", "Privacy"]
              }
            ].map((column, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-4 text-gray-900">{column.title}</h4>
                <div className="space-y-2 text-gray-600">
                  {column.links.map((link, linkIndex) => (
                    <div key={linkIndex} className="hover:text-gray-900 cursor-pointer">
                      {link}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
            <p>&copy; 2024 MediaKit Pro. All rights reserved. Built with ❤️ for creators.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
