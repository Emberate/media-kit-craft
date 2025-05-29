
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Users, TrendingUp, Download, Eye, Palette } from "lucide-react";
import { motion } from "framer-motion";
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
    // Simulate authentication
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

  // Show builder if coming from dashboard
  if (showBuilder && isAuthenticated) {
    return <MediaKitBuilder onBack={handleBackToDashboard} />;
  }

  // Show dashboard if authenticated
  if (showDashboard && isAuthenticated) {
    return <Dashboard onBack={() => setShowDashboard(false)} onCreateMediaKit={handleCreateMediaKit} />;
  }

  // Show auth form
  if (showAuth) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="font-bold text-3xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
              MediaKit Pro
            </div>
            <Button 
              variant="ghost" 
              onClick={() => setShowAuth(false)}
              className="text-gray-300 hover:text-white hover:bg-gray-800"
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center border-b border-gray-800">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-bold text-2xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
        >
          MediaKit Pro
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-x-4"
        >
          <Button variant="ghost" onClick={handleLogin} className="text-gray-300 hover:text-white hover:bg-gray-800">
            Login
          </Button>
          <Button onClick={handleGetStarted} className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            Sign Up
          </Button>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-6 bg-purple-900/50 text-purple-300 hover:bg-purple-800/50 border-purple-500/30">
            ✨ The Future of Influencer Marketing
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-300 bg-clip-text text-transparent leading-tight">
            Create Stunning
            <br />
            Media Kits in Minutes
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Professional media kits that convert. Connect your social accounts, showcase your best work, 
            and land bigger brand deals with our beautiful templates.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-x-4"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg"
              onClick={handleGetStarted}
            >
              Start Building <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white">
              View Examples
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <Card className="p-6 bg-gray-800/50 backdrop-blur-sm border-gray-700 shadow-xl">
            <div className="flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">10,000+</h3>
            <p className="text-gray-400">Active Creators</p>
          </Card>
          <Card className="p-6 bg-gray-800/50 backdrop-blur-sm border-gray-700 shadow-xl">
            <div className="flex items-center justify-center mb-4">
              <TrendingUp className="h-8 w-8 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">$2M+</h3>
            <p className="text-gray-400">Deals Closed</p>
          </Card>
          <Card className="p-6 bg-gray-800/50 backdrop-blur-sm border-gray-700 shadow-xl">
            <div className="flex items-center justify-center mb-4">
              <Star className="h-8 w-8 text-yellow-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">4.9/5</h3>
            <p className="text-gray-400">Creator Rating</p>
          </Card>
        </motion.div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Everything You Need to Succeed</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional tools designed specifically for content creators and influencers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Palette,
              title: "Beautiful Templates",
              description: "Choose from dozens of professionally designed templates that make you stand out",
              gradient: "from-pink-500 to-purple-600"
            },
            {
              icon: TrendingUp,
              title: "Social Integration",
              description: "Connect Instagram, YouTube, TikTok and more to automatically pull your best metrics",
              gradient: "from-blue-500 to-purple-600"
            },
            {
              icon: Download,
              title: "Export Anywhere",
              description: "Download as PDF or share a live link. Perfect for email pitches or social bios",
              gradient: "from-green-500 to-blue-600"
            },
            {
              icon: Eye,
              title: "Analytics Dashboard",
              description: "Track views, downloads, and engagement to optimize your media kit performance",
              gradient: "from-orange-500 to-pink-600"
            },
            {
              icon: Users,
              title: "Collaboration Tools",
              description: "Add testimonials, case studies, and brand partnerships to build credibility",
              gradient: "from-purple-500 to-blue-600"
            },
            {
              icon: Star,
              title: "Premium Support",
              description: "Get help from our team of creator marketing experts whenever you need it",
              gradient: "from-yellow-500 to-orange-600"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full bg-gray-800/50 backdrop-blur-sm border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800/70">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-center text-white shadow-2xl"
        >
          <h2 className="text-4xl font-bold mb-4">Ready to Level Up Your Creator Business?</h2>
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
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="font-bold text-xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                MediaKit Pro
              </div>
              <p className="text-gray-400">
                The professional platform for content creators to showcase their work and land bigger deals.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Product</h4>
              <div className="space-y-2 text-gray-400">
                <div className="hover:text-white cursor-pointer transition-colors">Templates</div>
                <div className="hover:text-white cursor-pointer transition-colors">Analytics</div>
                <div className="hover:text-white cursor-pointer transition-colors">Integrations</div>
                <div className="hover:text-white cursor-pointer transition-colors">Pricing</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Support</h4>
              <div className="space-y-2 text-gray-400">
                <div className="hover:text-white cursor-pointer transition-colors">Help Center</div>
                <div className="hover:text-white cursor-pointer transition-colors">Contact Us</div>
                <div className="hover:text-white cursor-pointer transition-colors">Creator Resources</div>
                <div className="hover:text-white cursor-pointer transition-colors">API Docs</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <div className="space-y-2 text-gray-400">
                <div className="hover:text-white cursor-pointer transition-colors">About</div>
                <div className="hover:text-white cursor-pointer transition-colors">Blog</div>
                <div className="hover:text-white cursor-pointer transition-colors">Careers</div>
                <div className="hover:text-white cursor-pointer transition-colors">Privacy</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MediaKit Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
