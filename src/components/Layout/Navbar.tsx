import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Menu,
  Bell,
  Settings,
  Moon,
  Sun,
  Flame,
  Zap,
  ChevronLeft,
  ChevronRight,
  LogIn,
  LogOut,
  LayoutDashboard,
  Shield,
  Coins,
} from 'lucide-react';
import { useUserStore } from '../../stores/userStore';
import { useSettingsStore } from '../../stores/settingsStore';
import { useAuthStore } from '../../stores/authStore';
import { useCustomizationStore, avatarItems } from '../../stores/customizationStore';
import { AppLogo } from '../Common';

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  const navigate = useNavigate();
  const { user } = useUserStore();
  const { theme, setTheme, sidebarCollapsed, toggleSidebar, getEffectiveTheme } =
    useSettingsStore();
  const { authUser, isAuthenticated, logout } = useAuthStore();
  const { coins, avatarConfig, getAvatarItem } = useCustomizationStore();
  const effectiveTheme = getEffectiveTheme();
  const expProgress = useUserStore((state) => state.getExpProgress());

  const currentAvatar = getAvatarItem(avatarConfig.character);

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const toggleTheme = () => {
    setTheme(effectiveTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white dark:bg-dark-surface border-b border-slate-200 dark:border-dark-border z-50">
      <div className="h-full px-4 flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-dark-surfaceHover"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Desktop Sidebar Toggle */}
          <button
            onClick={toggleSidebar}
            className="hidden lg:flex p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-dark-surfaceHover"
          >
            {sidebarCollapsed ? (
              <ChevronRight className="w-5 h-5" />
            ) : (
              <ChevronLeft className="w-5 h-5" />
            )}
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <AppLogo size="sm" />
            <span className="hidden sm:block font-bold text-xl gradient-text">
              코딩마루
            </span>
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 md:gap-4">
          {user && (
            <>
              {/* Streak */}
              <div className="hidden sm:flex items-center gap-1 px-3 py-1.5 bg-orange-100 dark:bg-orange-900/30 rounded-full">
                <Flame className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-medium text-orange-700 dark:text-orange-300">
                  {user.streak}일
                </span>
              </div>

              {/* Level & EXP */}
              <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                <Zap className="w-4 h-4 text-primary-500" />
                <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                  Lv.{user.level}
                </span>
                <div className="w-16 h-1.5 bg-primary-200 dark:bg-primary-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary-500 transition-all duration-300"
                    style={{ width: `${expProgress.percentage}%` }}
                  />
                </div>
              </div>

              {/* Coins */}
              <Link
                to="/avatar"
                className="hidden sm:flex items-center gap-1 px-3 py-1.5 bg-yellow-100 dark:bg-yellow-900/30 rounded-full hover:bg-yellow-200 dark:hover:bg-yellow-800/40 transition-colors"
              >
                <Coins className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-medium text-yellow-700 dark:text-yellow-300">
                  {coins.toLocaleString()}
                </span>
              </Link>
            </>
          )}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-dark-surfaceHover"
          >
            {effectiveTheme === 'dark' ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* Notifications */}
          <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-dark-surfaceHover relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          {/* Settings */}
          <Link
            to="/settings"
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-dark-surfaceHover"
          >
            <Settings className="w-5 h-5" />
          </Link>

          {/* Auth Buttons */}
          {isAuthenticated && authUser ? (
            <>
              {/* Dashboard Link */}
              {authUser.role === 'teacher' && (
                <Link
                  to="/teacher"
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800/40 transition-colors"
                >
                  <LayoutDashboard className="w-4 h-4" />
                  <span className="text-sm font-medium">대시보드</span>
                </Link>
              )}
              {authUser.role === 'admin' && (
                <Link
                  to="/admin"
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg hover:bg-red-200 dark:hover:bg-red-800/40 transition-colors"
                >
                  <Shield className="w-4 h-4" />
                  <span className="text-sm font-medium">관리자</span>
                </Link>
              )}

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-dark-surfaceHover text-slate-600 dark:text-slate-400"
                title="로그아웃"
              >
                <LogOut className="w-5 h-5" />
              </button>

              {/* User Avatar */}
              <Link to="/avatar" className="flex items-center gap-2 group">
                <div className="w-9 h-9 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform shadow-lg">
                  {currentAvatar?.image || '🐱'}
                </div>
              </Link>
            </>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors"
            >
              <LogIn className="w-4 h-4" />
              <span className="text-sm font-medium">로그인</span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
