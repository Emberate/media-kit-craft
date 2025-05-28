
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, Share2, Instagram, Youtube, Mail, TrendingUp, Users, Heart } from "lucide-react";
import { motion } from "framer-motion";

interface MediaKitData {
  name: string;
  title: string;
  bio: string;
  email: string;
  instagram: {
    handle: string;
    followers: string;
    engagement: string;
  };
  youtube: {
    handle: string;
    subscribers: string;
    views: string;
  };
  pricing: {
    post: string;
    story: string;
    video: string;
  };
  collaborations: Array<{
    brand: string;
    description: string;
  }>;
  selectedTemplate: string;
}

interface MediaKitPreviewProps {
  data: MediaKitData;
  onBack: () => void;
}

const getTemplateStyles = (template: string) => {
  const styles = {
    modern: {
      bg: "bg-gradient-to-br from-purple-50 via-white to-blue-50",
      accent: "from-purple-600 to-blue-600",
      cards: "bg-white/70 backdrop-blur-sm"
    },
    creative: {
      bg: "bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50",
      accent: "from-pink-600 to-orange-600",
      cards: "bg-white/70 backdrop-blur-sm"
    },
    professional: {
      bg: "bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50",
      accent: "from-gray-600 to-blue-600",
      cards: "bg-white/80 backdrop-blur-sm"
    },
    lifestyle: {
      bg: "bg-gradient-to-br from-green-50 via-teal-50 to-emerald-50",
      accent: "from-green-600 to-teal-600",
      cards: "bg-white/70 backdrop-blur-sm"
    },
    fashion: {
      bg: "bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50",
      accent: "from-rose-600 to-pink-600",
      cards: "bg-white/70 backdrop-blur-sm"
    },
    tech: {
      bg: "bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50",
      accent: "from-indigo-600 to-purple-600",
      cards: "bg-white/70 backdrop-blur-sm"
    }
  };
  return styles[template as keyof typeof styles] || styles.modern;
};

const MediaKitPreview = ({ data, onBack }: MediaKitPreviewProps) => {
  const styles = getTemplateStyles(data.selectedTemplate);

  return (
    <div className={`min-h-screen ${styles.bg}`}>
      {/* Header */}
      <div className="border-b bg-white/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Editor
          </Button>
          <div className="flex items-center space-x-3">
            <Button variant="outline">
              <Share2 className="h-4 w-4 mr-2" />
              Share Link
            </Button>
            <Button className={`bg-gradient-to-r ${styles.accent} text-white`}>
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
            <span className="text-4xl font-bold text-white">
              {data.name ? data.name.charAt(0).toUpperCase() : "?"}
            </span>
          </div>
          <h1 className={`text-4xl font-bold mb-2 bg-gradient-to-r ${styles.accent} bg-clip-text text-transparent`}>
            {data.name || "Your Name"}
          </h1>
          <p className="text-xl text-gray-600 mb-4">{data.title || "Your Title"}</p>
          <div className="flex items-center justify-center space-x-4 text-gray-600">
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-1" />
              {data.email || "your@email.com"}
            </div>
          </div>
        </motion.div>

        {/* Bio Section */}
        {data.bio && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <Card className={`p-8 ${styles.cards} border-0 shadow-lg`}>
              <h2 className="text-2xl font-bold mb-4">About Me</h2>
              <p className="text-gray-700 leading-relaxed">{data.bio}</p>
            </Card>
          </motion.div>
        )}

        {/* Social Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Social Media Presence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Instagram */}
            {data.instagram.handle && (
              <Card className={`p-6 ${styles.cards} border-0 shadow-lg`}>
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-2 rounded-lg mr-3">
                    <Instagram className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Instagram</h3>
                    <p className="text-gray-600">{data.instagram.handle}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{data.instagram.followers}</div>
                    <div className="text-sm text-gray-600">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{data.instagram.engagement}</div>
                    <div className="text-sm text-gray-600">Engagement</div>
                  </div>
                </div>
              </Card>
            )}

            {/* YouTube */}
            {data.youtube.handle && (
              <Card className={`p-6 ${styles.cards} border-0 shadow-lg`}>
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-red-500 to-red-600 p-2 rounded-lg mr-3">
                    <Youtube className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">YouTube</h3>
                    <p className="text-gray-600">{data.youtube.handle}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">{data.youtube.subscribers}</div>
                    <div className="text-sm text-gray-600">Subscribers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">{data.youtube.views}</div>
                    <div className="text-sm text-gray-600">Monthly Views</div>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </motion.div>

        {/* Pricing */}
        {(data.pricing.post || data.pricing.story || data.pricing.video) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Collaboration Rates</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.pricing.post && (
                <Card className={`p-6 ${styles.cards} border-0 shadow-lg text-center`}>
                  <h3 className="font-semibold mb-2">Instagram Post</h3>
                  <div className={`text-3xl font-bold bg-gradient-to-r ${styles.accent} bg-clip-text text-transparent`}>
                    {data.pricing.post}
                  </div>
                </Card>
              )}
              {data.pricing.story && (
                <Card className={`p-6 ${styles.cards} border-0 shadow-lg text-center`}>
                  <h3 className="font-semibold mb-2">Instagram Story</h3>
                  <div className={`text-3xl font-bold bg-gradient-to-r ${styles.accent} bg-clip-text text-transparent`}>
                    {data.pricing.story}
                  </div>
                </Card>
              )}
              {data.pricing.video && (
                <Card className={`p-6 ${styles.cards} border-0 shadow-lg text-center`}>
                  <h3 className="font-semibold mb-2">YouTube Video</h3>
                  <div className={`text-3xl font-bold bg-gradient-to-r ${styles.accent} bg-clip-text text-transparent`}>
                    {data.pricing.video}
                  </div>
                </Card>
              )}
            </div>
          </motion.div>
        )}

        {/* Collaborations */}
        {data.collaborations.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Past Collaborations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.collaborations.map((collab, index) => (
                <Card key={index} className={`p-6 ${styles.cards} border-0 shadow-lg`}>
                  <h3 className="font-semibold mb-2">{collab.brand}</h3>
                  <p className="text-gray-600">{collab.description}</p>
                </Card>
              ))}
            </div>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <Card className={`p-8 bg-gradient-to-r ${styles.accent} text-white border-0 shadow-xl`}>
            <h2 className="text-3xl font-bold mb-4">Let's Collaborate!</h2>
            <p className="text-xl mb-6 opacity-90">
              Ready to create amazing content together? Get in touch!
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">
              Contact Me
            </Button>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default MediaKitPreview;
