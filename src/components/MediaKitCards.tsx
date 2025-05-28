
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Download, Edit, Trash2, Plus, ExternalLink, Share2 } from "lucide-react";
import { motion } from "framer-motion";

interface MediaKitCardsProps {
  onCreateNew: () => void;
}

const MediaKitCards = ({ onCreateNew }: MediaKitCardsProps) => {
  const mediaKits = [
    {
      id: 1,
      title: "Fashion & Lifestyle",
      description: "Complete portfolio showcasing fashion content and lifestyle photography",
      views: 1234,
      downloads: 89,
      status: "Published",
      lastUpdated: "2 days ago",
      thumbnail: "bg-gradient-to-br from-pink-400 to-purple-600"
    },
    {
      id: 2,
      title: "Tech Reviews",
      description: "Technology content creation and product review portfolio",
      views: 856,
      downloads: 45,
      status: "Published",
      lastUpdated: "1 week ago",
      thumbnail: "bg-gradient-to-br from-blue-400 to-cyan-600"
    },
    {
      id: 3,
      title: "Travel Adventures",
      description: "Travel photography and destination content showcase",
      views: 2341,
      downloads: 123,
      status: "Published",
      lastUpdated: "3 days ago",
      thumbnail: "bg-gradient-to-br from-green-400 to-teal-600"
    },
    {
      id: 4,
      title: "Food & Cooking",
      description: "Culinary content and recipe development portfolio",
      views: 567,
      downloads: 23,
      status: "Draft",
      lastUpdated: "5 days ago",
      thumbnail: "bg-gradient-to-br from-orange-400 to-red-600"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Your Media Kits</h2>
          <p className="text-gray-600">Manage and share your professional portfolios</p>
        </div>
        <Button onClick={onCreateNew} className="bg-gradient-to-r from-purple-600 to-blue-600">
          <Plus className="h-4 w-4 mr-2" />
          Create New
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mediaKits.map((kit, index) => (
          <motion.div
            key={kit.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader className="pb-3">
                <div className={`w-full h-32 rounded-lg ${kit.thumbnail} mb-4 flex items-center justify-center`}>
                  <div className="text-white text-lg font-semibold">{kit.title}</div>
                </div>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{kit.title}</CardTitle>
                  <Badge variant={kit.status === "Published" ? "default" : "secondary"}>
                    {kit.status}
                  </Badge>
                </div>
                <CardDescription>{kit.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {kit.views}
                    </span>
                    <span className="flex items-center">
                      <Download className="h-4 w-4 mr-1" />
                      {kit.downloads}
                    </span>
                  </div>
                  <span>Updated {kit.lastUpdated}</span>
                </div>
                
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  <Button size="sm" variant="outline">
                    <Share2 className="h-4 w-4 mr-1" />
                    Share
                  </Button>
                  <Button size="sm" variant="outline">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MediaKitCards;
