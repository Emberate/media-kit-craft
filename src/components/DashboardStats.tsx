
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Download, TrendingUp, Users, Heart, Share2 } from "lucide-react";
import { motion } from "framer-motion";

const DashboardStats = () => {
  const stats = [
    {
      title: "Total Views",
      value: "24,567",
      change: "+12%",
      icon: Eye,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Downloads",
      value: "3,421",
      change: "+8%",
      icon: Download,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Followers",
      value: "18.2K",
      change: "+23%",
      icon: Users,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Engagement",
      value: "8.4%",
      change: "+2.1%",
      icon: Heart,
      gradient: "from-red-500 to-orange-500"
    },
    {
      title: "Shares",
      value: "1,234",
      change: "+15%",
      icon: Share2,
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      title: "Growth Rate",
      value: "24.5%",
      change: "+5.2%",
      icon: TrendingUp,
      gradient: "from-teal-500 to-green-500"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${stat.gradient} flex items-center justify-center`}>
                <stat.icon className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default DashboardStats;
