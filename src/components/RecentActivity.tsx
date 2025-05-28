
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Download, Share2, Heart, Calendar } from "lucide-react";

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: "view",
      title: "Fashion Brand Media Kit viewed",
      description: "Someone viewed your fashion portfolio",
      time: "2 hours ago",
      icon: Eye,
      badge: "View"
    },
    {
      id: 2,
      type: "download",
      title: "Media Kit downloaded",
      description: "Brand X downloaded your tech media kit",
      time: "4 hours ago",
      icon: Download,
      badge: "Download"
    },
    {
      id: 3,
      type: "share",
      title: "Portfolio shared",
      description: "Your portfolio was shared on LinkedIn",
      time: "1 day ago",
      icon: Share2,
      badge: "Share"
    },
    {
      id: 4,
      type: "engagement",
      title: "High engagement post",
      description: "Your latest Instagram post got 500+ likes",
      time: "2 days ago",
      icon: Heart,
      badge: "Engagement"
    },
    {
      id: 5,
      type: "meeting",
      title: "Brand meeting scheduled",
      description: "Nike wants to discuss partnership",
      time: "3 days ago",
      icon: Calendar,
      badge: "Meeting"
    }
  ];

  const getBadgeColor = (type: string) => {
    switch (type) {
      case "view": return "bg-blue-100 text-blue-700";
      case "download": return "bg-green-100 text-green-700";
      case "share": return "bg-purple-100 text-purple-700";
      case "engagement": return "bg-pink-100 text-pink-700";
      case "meeting": return "bg-orange-100 text-orange-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-lg">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Your latest media kit interactions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-4 p-4 rounded-lg bg-white/50 hover:bg-white/80 transition-colors">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 flex items-center justify-center">
                <activity.icon className="h-5 w-5 text-purple-600" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                  <Badge className={`${getBadgeColor(activity.type)} text-xs`}>
                    {activity.badge}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-1">{activity.description}</p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
