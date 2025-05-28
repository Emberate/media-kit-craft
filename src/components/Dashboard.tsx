
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  BarChart3, 
  Eye, 
  Download, 
  Plus, 
  Settings, 
  Bell,
  Search,
  TrendingUp,
  Users,
  Heart,
  Share2,
  Calendar,
  Star,
  Edit,
  Trash2,
  ExternalLink
} from "lucide-react";
import { motion } from "framer-motion";
import DashboardStats from "./DashboardStats";
import RecentActivity from "./RecentActivity";
import MediaKitCards from "./MediaKitCards";

interface DashboardProps {
  onBack: () => void;
  onCreateMediaKit: () => void;
}

const Dashboard = ({ onBack, onCreateMediaKit }: DashboardProps) => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="font-bold text-2xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                MediaKit Pro
              </div>
              <Badge className="bg-purple-100 text-purple-700">Pro</Badge>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input 
                  type="text" 
                  placeholder="Search media kits..." 
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/50"
                />
              </div>
              <Button variant="ghost" size="sm">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-5 w-5" />
              </Button>
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, Creator! 👋
          </h1>
          <p className="text-gray-600">
            Manage your media kits, track performance, and grow your brand partnerships.
          </p>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 bg-white/50 backdrop-blur-sm rounded-lg p-1 w-fit">
          {[
            { id: "overview", label: "Overview", icon: BarChart3 },
            { id: "mediakits", label: "Media Kits", icon: Eye },
            { id: "analytics", label: "Analytics", icon: TrendingUp },
            { id: "profile", label: "Profile", icon: User }
          ].map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "ghost"}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id 
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white" 
                  : "text-gray-600"
              }`}
            >
              <tab.icon className="h-4 w-4 mr-2" />
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Content based on active tab */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === "overview" && (
            <div className="space-y-8">
              <DashboardStats />
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <RecentActivity />
                </div>
                <div>
                  <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                        Quick Actions
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button onClick={onCreateMediaKit} className="w-full bg-gradient-to-r from-purple-600 to-blue-600">
                        <Plus className="h-4 w-4 mr-2" />
                        Create Media Kit
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share Portfolio
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Download className="h-4 w-4 mr-2" />
                        Export Data
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}

          {activeTab === "mediakits" && <MediaKitCards onCreateNew={onCreateMediaKit} />}
          
          {activeTab === "analytics" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Total Views</CardTitle>
                  <CardDescription>Last 30 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-purple-600">12,543</div>
                  <div className="text-sm text-green-600 flex items-center mt-2">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    +23% from last month
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Downloads</CardTitle>
                  <CardDescription>Media kit downloads</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600">1,234</div>
                  <div className="text-sm text-green-600 flex items-center mt-2">
                    <Download className="h-4 w-4 mr-1" />
                    +15% from last month
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Engagement Rate</CardTitle>
                  <CardDescription>Average across platforms</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600">8.4%</div>
                  <div className="text-sm text-green-600 flex items-center mt-2">
                    <Heart className="h-4 w-4 mr-1" />
                    +2.1% from last month
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
          
          {activeTab === "profile" && (
            <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-lg max-w-2xl">
              <CardHeader>
                <CardTitle>Profile Settings</CardTitle>
                <CardDescription>Manage your creator profile</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                    <User className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Creator Name</h3>
                    <p className="text-gray-600">content@creator.com</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Display Name</label>
                    <input 
                      type="text" 
                      defaultValue="Creator Name"
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      defaultValue="content@creator.com"
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Bio</label>
                  <textarea 
                    defaultValue="Content creator passionate about lifestyle and technology..."
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 h-24 resize-none"
                  />
                </div>
                
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
