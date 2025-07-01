
interface AuthToggleProps {
  isLogin: boolean;
  onToggle: () => void;
}

export const AuthToggle = ({ isLogin, onToggle }: AuthToggleProps) => {
  return (
    <div className="mt-6 text-center">
      <button
        onClick={onToggle}
        className="text-orange-400 hover:text-orange-300 transition-colors"
      >
        {isLogin ? "Need an account? Sign up" : "Already have an account? Sign in"}
      </button>
    </div>
  );
};
