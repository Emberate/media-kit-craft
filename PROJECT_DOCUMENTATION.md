
# MediaKit Pro - Project Documentation

## Overview
MediaKit Pro is a modern React-based web application that allows content creators and influencers to create professional media kits for brand partnerships and collaborations.

## Tech Stack
- **Frontend Framework**: React 18+ with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Component Library**: Shadcn/UI
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Routing**: React Router DOM

## Project Structure

### Pages (`src/pages/`)

#### `Index.tsx` (Main Landing Page)
- **Purpose**: The main entry point and landing page of the application
- **Features**:
  - Hero section with compelling copy and call-to-action
  - Statistics showcase (10,000+ creators, $2M+ deals closed, 4.9/5 rating)
  - Feature highlights with animated cards
  - Navigation between different app states (auth, dashboard, builder)
  - Responsive design with gradient backgrounds
- **State Management**: Handles authentication flow, page navigation, and user session
- **Components Used**: AuthForm, Dashboard, MediaKitBuilder, various UI components

### Components (`src/components/`)

#### Authentication Components

##### `AuthForm.tsx` (Main Auth Container)
- **Purpose**: Acts as a wrapper/controller for authentication flows
- **Functionality**: 
  - Switches between login and signup modes
  - Handles authentication callbacks
  - Manages form state transitions
- **Dependencies**: LoginForm, SignupForm

##### `LoginForm.tsx` (Login Interface)
- **Purpose**: Dedicated login form component
- **Features**:
  - Email/password authentication
  - Social login options (Google, GitHub)
  - Password visibility toggle
  - Form validation and submission
  - Responsive card design with glassmorphism effects
- **UI Elements**: Input fields, social buttons, toggle links

##### `SignupForm.tsx` (Registration Interface)
- **Purpose**: Dedicated signup form component
- **Features**:
  - User registration with name, email, password
  - Social signup options (Google, GitHub)
  - Password visibility toggle
  - Form validation and submission
  - Matches login form styling for consistency
- **UI Elements**: Additional name field, same social options as login

#### Dashboard Components

##### `Dashboard.tsx` (Main Dashboard)
- **Purpose**: Central hub for authenticated users
- **Features**:
  - User profile section with avatar and stats
  - Quick action buttons (Create Media Kit, View Analytics, Settings)
  - Integration of stats, activity, and media kit management
  - Responsive grid layout
- **Sections**: Stats overview, recent activity feed, media kit gallery

##### `DashboardStats.tsx` (Statistics Display)
- **Purpose**: Displays key performance metrics for creators
- **Metrics Shown**:
  - Total Views (24,567)
  - Downloads (3,421)
  - Followers (18.2K)
  - Engagement Rate (8.4%)
  - Shares (1,234)
  - Growth Rate (24.5%)
- **Features**:
  - Animated cards with gradient backgrounds
  - Trend indicators with percentage changes
  - Staggered animation on load
  - Responsive grid layout (1-3 columns based on screen size)

##### `RecentActivity.tsx` (Activity Feed)
- **Purpose**: Shows recent interactions and activities
- **Activity Types**:
  - Media kit views
  - Downloads by brands
  - Social media shares
  - High engagement notifications
  - Meeting requests from brands
- **Features**:
  - Color-coded badges for different activity types
  - Timestamp display (relative time)
  - Icon representation for each activity type
  - Hover effects and smooth transitions

##### `MediaKitCards.tsx` (Media Kit Management)
- **Purpose**: Displays and manages user's media kits
- **Features**:
  - Grid layout of media kit cards
  - Status indicators (Published/Draft)
  - Performance metrics (views, downloads)
  - Action buttons (Edit, Share, View)
  - Create new media kit functionality
- **Card Information**:
  - Thumbnail with gradient background
  - Title and description
  - View and download counts
  - Last updated timestamps
  - Quick action buttons

### UI Components (`src/components/ui/`)
These are pre-built components from Shadcn/UI library providing:
- **Form Elements**: Button, Input, Label, Select, Textarea
- **Layout**: Card, Sheet, Dialog, Tabs, Accordion
- **Feedback**: Toast, Alert, Badge, Progress
- **Navigation**: Dropdown Menu, Context Menu, Breadcrumb
- **Data Display**: Table, Avatar, Calendar, Chart

### Styling and Design System

#### Color Scheme
- **Primary**: Purple to Blue gradients (`from-purple-600 to-blue-600`)
- **Backgrounds**: Gradient overlays (`from-purple-50 via-white to-blue-50`)
- **Cards**: Semi-transparent white with backdrop blur (`bg-white/50 backdrop-blur-sm`)
- **Text**: Gray scale for hierarchy (`text-gray-900`, `text-gray-600`, `text-gray-500`)

#### Design Patterns
- **Glassmorphism**: Semi-transparent backgrounds with blur effects
- **Gradient Accents**: Used for buttons, icons, and highlights
- **Card-based Layout**: Consistent card components throughout
- **Responsive Design**: Mobile-first approach with breakpoints
- **Animations**: Framer Motion for smooth transitions and micro-interactions

#### Animation Strategy
- **Staggered Animations**: Cards and elements animate in sequence
- **Hover Effects**: Scale and shadow transitions on interactive elements
- **Page Transitions**: Smooth enter/exit animations
- **Loading States**: Skeleton screens and progressive loading

### Key Features

#### 1. Authentication System
- Dual-mode authentication (login/signup)
- Social authentication integration
- Form validation and error handling
- Secure password handling with visibility toggle

#### 2. Dashboard Analytics
- Real-time statistics display
- Performance tracking and metrics
- Activity monitoring and notifications
- Growth indicators and trend analysis

#### 3. Media Kit Management
- Multiple media kit creation and management
- Template-based design system
- Performance tracking per media kit
- Easy sharing and collaboration tools

#### 4. User Experience
- Responsive design across all devices
- Smooth animations and transitions
- Intuitive navigation and user flows
- Professional design aesthetic

### Development Notes

#### State Management
- Component-level state using React hooks
- Props-based communication between components
- Simple state lifting for shared data

#### Performance Considerations
- Component lazy loading for large views
- Optimized animations with Framer Motion
- Tree-shaking enabled for icon imports
- Responsive images and assets

#### Accessibility
- ARIA labels and semantic HTML
- Keyboard navigation support
- Screen reader compatible
- Color contrast compliance

### Future Enhancements
- Backend integration for real data persistence
- Advanced analytics and reporting
- Template customization system
- Real-time collaboration features
- Email integration for media kit sharing
- Advanced user management and teams

## File Dependencies

```
Index.tsx
├── AuthForm.tsx
│   ├── LoginForm.tsx
│   └── SignupForm.tsx
├── Dashboard.tsx
│   ├── DashboardStats.tsx
│   ├── RecentActivity.tsx
│   └── MediaKitCards.tsx
└── MediaKitBuilder.tsx (referenced but not created)
```

This architecture ensures:
- **Separation of Concerns**: Each component has a single responsibility
- **Reusability**: Components can be used in different contexts
- **Maintainability**: Clear structure makes updates and debugging easier
- **Scalability**: Easy to add new features and components
