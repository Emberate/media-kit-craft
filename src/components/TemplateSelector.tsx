
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface TemplateSelectorProps {
  selectedTemplate: string;
  onSelectTemplate: (template: string) => void;
}

const templates = [
  {
    id: "modern",
    name: "Modern",
    description: "Clean, minimalist design with bold typography",
    color: "from-purple-500 to-blue-500",
    preview: "bg-gradient-to-br from-purple-100 to-blue-100"
  },
  {
    id: "creative",
    name: "Creative",
    description: "Vibrant colors and artistic layouts",
    color: "from-pink-500 to-orange-500",
    preview: "bg-gradient-to-br from-pink-100 to-orange-100"
  },
  {
    id: "professional",
    name: "Professional",
    description: "Corporate-friendly with sophisticated styling",
    color: "from-gray-600 to-blue-600",
    preview: "bg-gradient-to-br from-gray-100 to-blue-100"
  },
  {
    id: "lifestyle",
    name: "Lifestyle",
    description: "Warm tones perfect for lifestyle influencers",
    color: "from-green-500 to-teal-500",
    preview: "bg-gradient-to-br from-green-100 to-teal-100"
  },
  {
    id: "fashion",
    name: "Fashion",
    description: "Elegant and stylish for fashion content",
    color: "from-rose-500 to-pink-500",
    preview: "bg-gradient-to-br from-rose-100 to-pink-100"
  },
  {
    id: "tech",
    name: "Tech",
    description: "Sleek design for tech and gaming influencers",
    color: "from-indigo-500 to-purple-500",
    preview: "bg-gradient-to-br from-indigo-100 to-purple-100"
  }
];

const TemplateSelector = ({ selectedTemplate, onSelectTemplate }: TemplateSelectorProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <h3 className="text-xl font-semibold">Choose Your Template</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template, index) => (
          <motion.div
            key={template.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card 
              className={`p-4 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                selectedTemplate === template.id 
                  ? 'ring-2 ring-purple-500 shadow-lg' 
                  : 'hover:shadow-md'
              }`}
              onClick={() => onSelectTemplate(template.id)}
            >
              <div className={`h-32 rounded-lg mb-4 ${template.preview} relative overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-r ${template.color} opacity-20`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="w-16 h-2 bg-white/50 rounded mx-auto" />
                    <div className="w-12 h-2 bg-white/30 rounded mx-auto" />
                    <div className="w-20 h-2 bg-white/50 rounded mx-auto" />
                  </div>
                </div>
                {selectedTemplate === template.id && (
                  <div className="absolute top-2 right-2 bg-purple-500 text-white rounded-full p-1">
                    <Check className="h-4 w-4" />
                  </div>
                )}
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">{template.name}</h4>
                  {template.id === "modern" && (
                    <Badge variant="secondary" className="text-xs">Popular</Badge>
                  )}
                </div>
                <p className="text-sm text-gray-600">{template.description}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TemplateSelector;
