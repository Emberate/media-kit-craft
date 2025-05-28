
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Users, TrendingUp, Download, Eye, Palette } from "lucide-react";
import { motion } from "framer-motion";
import MediaKitBuilder from "@/components/MediaKitBuilder";

const Index = () => {
  const [showBuilder, setShowBuilder] = useState(false);

  if (showBuilder) {
    return <MediaKitBuilder onBack={() => setShowBuilder(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-bold text-2xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
        >
          MediaKit Pro
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-x-4"
        >
          <Button variant="ghost">Login</Button>
          <Button>Sign Up</Button>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-6 bg-purple-100 text-purple-700 hover:bg-purple-200">
            ✨ The Future of Influencer Marketing
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 bg-clip-text text-transparent leading-tight">
            Create Stunning
            <br />
            Media Kits in Minutes
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
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
              onClick={() => setShowBuilder(true)}
            >
              Start Building <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
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
          <Card className="p-6 bg-white/50 backdrop-blur-sm border-0 shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">10,000+</h3>
            <p className="text-gray-600">Active Creators</p>
          </Card>
          <Card className="p-6 bg-white/50 backdrop-blur-sm border-0 shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <TrendingUp className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">$2M+</h3>
            <p className="text-gray-600">Deals Closed</p>
          </Card>
          <Card className="p-6 bg-white/50 backdrop-blur-sm border-0 shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <Star className="h-8 w-8 text-yellow-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">4.9/5</h3>
            <p className="text-gray-600">Creator Rating</p>
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
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Everything You Need to Succeed</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
              <Card className="p-6 h-full bg-white/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
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
          className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-4">Ready to Level Up Your Creator Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of creators who've already transformed their brand partnerships
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="px-8 py-4 text-lg bg-white text-purple-600 hover:bg-gray-100"
            onClick={() => setShowBuilder(true)}
          >
            Create Your Media Kit <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="font-bold text-xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
                MediaKit Pro
              </div>
              <p className="text-gray-600">
                The professional platform for content creators to showcase their work and land bigger deals.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2 text-gray-600">
                <div>Templates</div>
                <div>Analytics</div>
                <div>Integrations</div>
                <div>Pricing</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-gray-600">
                <div>Help Center</div>
                <div>Contact Us</div>
                <div>Creator Resources</div>
                <div>API Docs</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-gray-600">
                <div>About</div>
                <div>Blog</div>
                <div>Careers</div>
                <div>Privacy</div>
              </div>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center text-gray-600">
            <p>&copy; 2024 MediaKit Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
