
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Users, TrendingUp, Download, Eye, Palette, Check, Quote, Zap, Shield, Globe, Sparkles } from "lucide-react";
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
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="font-bold text-3xl bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-2"
            >
              MediaKit Pro
            </motion.div>
            <Button 
              variant="ghost" 
              onClick={() => setShowAuth(false)}
              className="text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-300"
            >
              ← Back to home
            </Button>
          </div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <AuthForm 
              mode={authMode}
              onSubmit={handleAuthSubmit}
              onToggleMode={handleAuthToggle}
            />
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-x-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 p-6 flex justify-between items-center border-b border-gray-800 backdrop-blur-sm bg-black/20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-bold text-2xl bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
        >
          MediaKit Pro
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-x-4"
        >
          <Button variant="ghost" onClick={handleLogin} className="text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-300">
            Login
          </Button>
          <Button onClick={handleGetStarted} className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
            Sign Up
          </Button>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <Badge className="mb-6 bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 hover:from-purple-500/30 hover:to-blue-500/30 border-purple-500/30 backdrop-blur-sm transition-all duration-300">
              <Sparkles className="w-4 h-4 mr-2" />
              ✨ The Future of Influencer Marketing
            </Badge>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-300 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Create Stunning
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
            >
              Media Kits
            </motion.span> in Minutes
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Professional media kits that convert. Connect your social accounts, showcase your best work, 
            and land bigger brand deals with our beautiful templates.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="space-x-4"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              onClick={handleGetStarted}
            >
              <Zap className="mr-2 h-5 w-5" />
              Start Building <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300 hover:border-purple-500">
              <Eye className="mr-2 h-5 w-5" />
              View Examples
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { icon: Users, value: "50,000+", label: "Active Creators", color: "from-purple-400 to-purple-600" },
            { icon: TrendingUp, value: "$10M+", label: "Deals Closed", color: "from-blue-400 to-blue-600" },
            { icon: Star, value: "4.9/5", label: "Creator Rating", color: "from-yellow-400 to-orange-600" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1, type: "spring" }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-gray-700 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
                <div className={`flex items-center justify-center mb-4 w-12 h-12 rounded-full bg-gradient-to-r ${stat.color} mx-auto`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Features */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Everything You Need to Succeed</h2>
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
              icon: Shield,
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
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="p-6 h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-purple-500/50">
                <motion.div 
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="h-6 w-6 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors">{feature.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">What Creators Say</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join thousands of successful creators who've transformed their brand partnerships
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Johnson",
              role: "Fashion Influencer",
              content: "MediaKit Pro helped me increase my brand deal value by 300%. The templates are stunning!",
              avatar: "SJ",
              rating: 5
            },
            {
              name: "Mike Chen",
              role: "Tech Reviewer",
              content: "The analytics dashboard gives me insights I never had before. Game-changer!",
              avatar: "MC",
              rating: 5
            },
            {
              name: "Emma Davis",
              role: "Lifestyle Creator",
              content: "Professional media kits in minutes. My clients are always impressed!",
              avatar: "ED",
              rating: 5
            }
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300">
                <Quote className="h-8 w-8 text-purple-400 mb-4" />
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Choose Your Plan</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Start free and upgrade as you grow. All plans include our core features.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: "Starter",
              price: "Free",
              period: "forever",
              features: ["3 Media Kits", "Basic Templates", "Email Support", "Basic Analytics"],
              popular: false
            },
            {
              name: "Pro",
              price: "$19",
              period: "per month",
              features: ["Unlimited Media Kits", "Premium Templates", "Priority Support", "Advanced Analytics", "Custom Branding"],
              popular: true
            },
            {
              name: "Enterprise",
              price: "$49",
              period: "per month",
              features: ["Everything in Pro", "Team Collaboration", "API Access", "White Label", "Dedicated Manager"],
              popular: false
            }
          ].map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`relative ${plan.popular ? 'z-10' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              <Card className={`p-8 h-full ${plan.popular ? 'bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/50 shadow-2xl' : 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700'} backdrop-blur-sm transition-all duration-300`}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-1">{plan.price}</div>
                  <p className="text-gray-400">{plan.period}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Check className="h-5 w-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700' : 'bg-gray-700 hover:bg-gray-600'} transition-all duration-300`}
                  onClick={handleGetStarted}
                >
                  Get Started
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl"></div>
          <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-center text-white shadow-2xl">
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Level Up Your Creator Business?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of creators who've already transformed their brand partnerships
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                className="px-8 py-4 text-lg bg-white text-purple-600 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                onClick={handleGetStarted}
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Create Your Media Kit <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="font-bold text-xl bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
                MediaKit Pro
              </div>
              <p className="text-gray-400 mb-4">
                The professional platform for content creators to showcase their work and land bigger deals.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <Globe className="h-4 w-4 text-white" />
                </div>
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <Star className="h-4 w-4 text-white" />
                </div>
              </div>
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
                <h4 className="font-semibold mb-4 text-white">{column.title}</h4>
                <div className="space-y-2 text-gray-400">
                  {column.links.map((link, linkIndex) => (
                    <div key={linkIndex} className="hover:text-white cursor-pointer transition-colors duration-200 hover:translate-x-1 transform">
                      {link}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MediaKit Pro. All rights reserved. Built with ❤️ for creators.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
