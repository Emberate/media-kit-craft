
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

interface AuthFormProps {
  mode: "login" | "signup";
  onSubmit: (email: string, password: string, name?: string) => void;
  onToggleMode: () => void;
}

const AuthForm = ({ mode, onSubmit, onToggleMode }: AuthFormProps) => {
  const handleLoginSubmit = (email: string, password: string) => {
    onSubmit(email, password);
  };

  const handleSignupSubmit = (email: string, password: string, name: string) => {
    onSubmit(email, password, name);
  };

  if (mode === "login") {
    return (
      <LoginForm 
        onSubmit={handleLoginSubmit}
        onSwitchToSignup={onToggleMode}
      />
    );
  }

  return (
    <SignupForm 
      onSubmit={handleSignupSubmit}
      onSwitchToLogin={onToggleMode}
    />
  );
};

export default AuthForm;
