
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Download, Eye, Instagram, Youtube, TrendingUp, Users, Heart, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import TemplateSelector from "@/components/TemplateSelector";
import MediaKitPreview from "@/components/MediaKitPreview";

interface MediaKitBuilderProps {
  onBack: () => void;
}

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

const MediaKitBuilder = ({ onBack }: MediaKitBuilderProps) => {
  const [activeTab, setActiveTab] = useState("basic");
  const [showPreview, setShowPreview] = useState(false);
  const [mediaKitData, setMediaKitData] = useState<MediaKitData>({
    name: "",
    title: "",
    bio: "",
    email: "",
    instagram: { handle: "", followers: "", engagement: "" },
    youtube: { handle: "", subscribers: "", views: "" },
    pricing: { post: "", story: "", video: "" },
    collaborations: [],
    selectedTemplate: "modern"
  });

  const updateData = (section: string, field: string, value: string) => {
    setMediaKitData(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof MediaKitData],
        [field]: value
      }
    }));
  };

  const addCollaboration = () => {
    setMediaKitData(prev => ({
      ...prev,
      collaborations: [...prev.collaborations, { brand: "", description: "" }]
    }));
  };

  if (showPreview) {
    return <MediaKitPreview data={mediaKitData} onBack={() => setShowPreview(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <div className="border-b bg-white/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={onBack}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Media Kit Builder
            </h1>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" onClick={() => setShowPreview(true)}>
              <Eye className="h-4 w-4 mr-2" />
              Preview
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Builder Panel */}
          <div className="lg:col-span-2">
            <Card className="p-6 bg-white/50 backdrop-blur-sm border-0 shadow-lg">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-5 w-full mb-6">
                  <TabsTrigger value="basic">Basic Info</TabsTrigger>
                  <TabsTrigger value="social">Social</TabsTrigger>
                  <TabsTrigger value="pricing">Pricing</TabsTrigger>
                  <TabsTrigger value="collabs">Collabs</TabsTrigger>
                  <TabsTrigger value="template">Template</TabsTrigger>
                </TabsList>

                <TabsContent value="basic" className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl font-semibold">Basic Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Full Name</label>
                        <Input 
                          placeholder="Your full name"
                          value={mediaKitData.name}
                          onChange={(e) => setMediaKitData(prev => ({ ...prev, name: e.target.value }))}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Title/Niche</label>
                        <Input 
                          placeholder="e.g., Lifestyle Influencer"
                          value={mediaKitData.title}
                          onChange={(e) => setMediaKitData(prev => ({ ...prev, title: e.target.value }))}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input 
                        type="email"
                        placeholder="your@email.com"
                        value={mediaKitData.email}
                        onChange={(e) => setMediaKitData(prev => ({ ...prev, email: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Bio</label>
                      <Textarea 
                        placeholder="Tell brands about yourself, your content style, and what makes you unique..."
                        rows={5}
                        value={mediaKitData.bio}
                        onChange={(e) => setMediaKitData(prev => ({ ...prev, bio: e.target.value }))}
                      />
                    </div>
                  </motion.div>
                </TabsContent>

                <TabsContent value="social" className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-semibold">Social Media Stats</h3>
                    
                    <Card className="p-4 bg-gradient-to-r from-pink-50 to-purple-50">
                      <div className="flex items-center mb-4">
                        <Instagram className="h-5 w-5 text-pink-600 mr-2" />
                        <h4 className="font-semibold">Instagram</h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Handle</label>
                          <Input 
                            placeholder="@yourusername"
                            value={mediaKitData.instagram.handle}
                            onChange={(e) => updateData('instagram', 'handle', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Followers</label>
                          <Input 
                            placeholder="50K"
                            value={mediaKitData.instagram.followers}
                            onChange={(e) => updateData('instagram', 'followers', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Avg Engagement</label>
                          <Input 
                            placeholder="5.2%"
                            value={mediaKitData.instagram.engagement}
                            onChange={(e) => updateData('instagram', 'engagement', e.target.value)}
                          />
                        </div>
                      </div>
                    </Card>

                    <Card className="p-4 bg-gradient-to-r from-red-50 to-pink-50">
                      <div className="flex items-center mb-4">
                        <Youtube className="h-5 w-5 text-red-600 mr-2" />
                        <h4 className="font-semibold">YouTube</h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Channel</label>
                          <Input 
                            placeholder="Your Channel Name"
                            value={mediaKitData.youtube.handle}
                            onChange={(e) => updateData('youtube', 'handle', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Subscribers</label>
                          <Input 
                            placeholder="25K"
                            value={mediaKitData.youtube.subscribers}
                            onChange={(e) => updateData('youtube', 'subscribers', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Monthly Views</label>
                          <Input 
                            placeholder="500K"
                            value={mediaKitData.youtube.views}
                            onChange={(e) => updateData('youtube', 'views', e.target.value)}
                          />
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </TabsContent>

                <TabsContent value="pricing" className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl font-semibold">Pricing Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card className="p-4">
                        <h4 className="font-semibold mb-2">Instagram Post</h4>
                        <Input 
                          placeholder="$500"
                          value={mediaKitData.pricing.post}
                          onChange={(e) => updateData('pricing', 'post', e.target.value)}
                        />
                      </Card>
                      <Card className="p-4">
                        <h4 className="font-semibold mb-2">Instagram Story</h4>
                        <Input 
                          placeholder="$200"
                          value={mediaKitData.pricing.story}
                          onChange={(e) => updateData('pricing', 'story', e.target.value)}
                        />
                      </Card>
                      <Card className="p-4">
                        <h4 className="font-semibold mb-2">YouTube Video</h4>
                        <Input 
                          placeholder="$1000"
                          value={mediaKitData.pricing.video}
                          onChange={(e) => updateData('pricing', 'video', e.target.value)}
                        />
                      </Card>
                    </div>
                  </motion.div>
                </TabsContent>

                <TabsContent value="collabs" className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-semibold">Past Collaborations</h3>
                      <Button onClick={addCollaboration} variant="outline">
                        Add Collaboration
                      </Button>
                    </div>
                    {mediaKitData.collaborations.map((collab, index) => (
                      <Card key={index} className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">Brand Name</label>
                            <Input 
                              placeholder="Brand name"
                              value={collab.brand}
                              onChange={(e) => {
                                const newCollabs = [...mediaKitData.collaborations];
                                newCollabs[index].brand = e.target.value;
                                setMediaKitData(prev => ({ ...prev, collaborations: newCollabs }));
                              }}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">Description</label>
                            <Input 
                              placeholder="Brief description of the collaboration"
                              value={collab.description}
                              onChange={(e) => {
                                const newCollabs = [...mediaKitData.collaborations];
                                newCollabs[index].description = e.target.value;
                                setMediaKitData(prev => ({ ...prev, collaborations: newCollabs }));
                              }}
                            />
                          </div>
                        </div>
                      </Card>
                    ))}
                  </motion.div>
                </TabsContent>

                <TabsContent value="template">
                  <TemplateSelector 
                    selectedTemplate={mediaKitData.selectedTemplate}
                    onSelectTemplate={(template) => setMediaKitData(prev => ({ ...prev, selectedTemplate: template }))}
                  />
                </TabsContent>
              </Tabs>
            </Card>
          </div>

          {/* Progress Panel */}
          <div className="space-y-6">
            <Card className="p-6 bg-white/50 backdrop-blur-sm border-0 shadow-lg">
              <h3 className="font-semibold mb-4">Completion Progress</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Basic Info</span>
                  <Badge variant={mediaKitData.name && mediaKitData.bio ? "default" : "secondary"}>
                    {mediaKitData.name && mediaKitData.bio ? "Complete" : "Pending"}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Social Media</span>
                  <Badge variant={mediaKitData.instagram.handle || mediaKitData.youtube.handle ? "default" : "secondary"}>
                    {mediaKitData.instagram.handle || mediaKitData.youtube.handle ? "Complete" : "Pending"}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Pricing</span>
                  <Badge variant={mediaKitData.pricing.post ? "default" : "secondary"}>
                    {mediaKitData.pricing.post ? "Complete" : "Pending"}
                  </Badge>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
              <h3 className="font-semibold mb-2">Pro Tips</h3>
              <ul className="text-sm space-y-2 opacity-90">
                <li>• Use high-quality photos</li>
                <li>• Include recent metrics</li>
                <li>• Showcase best collaborations</li>
                <li>• Keep pricing competitive</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaKitBuilder;
