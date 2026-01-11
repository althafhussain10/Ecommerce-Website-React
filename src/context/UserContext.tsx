import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

export interface UserProfile {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  avatar?: string;
}

interface UserContextType {
  user: UserProfile | null;
  isLoggedIn: boolean;
  login: (email: string, password: string) => boolean;
  signup: (email: string, password: string, fullName: string) => boolean;
  logout: () => void;
  updateProfile: (profile: Partial<UserProfile>) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const STORAGE_KEY = "sitthi_user";

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  const login = (email: string, password: string): boolean => {
    // Simple frontend login - check if user exists in localStorage
    const storedUsers = JSON.parse(localStorage.getItem("sitthi_users") || "{}");
    if (storedUsers[email] && storedUsers[email].password === password) {
      const profile = storedUsers[email].profile;
      setUser(profile);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
      return true;
    }
    return false;
  };

  const signup = (email: string, password: string, fullName: string): boolean => {
    const storedUsers = JSON.parse(localStorage.getItem("sitthi_users") || "{}");
    if (storedUsers[email]) {
      return false; // User already exists
    }
    
    const newProfile: UserProfile = {
      fullName,
      email,
      phone: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
    };
    
    storedUsers[email] = { password, profile: newProfile };
    localStorage.setItem("sitthi_users", JSON.stringify(storedUsers));
    setUser(newProfile);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newProfile));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  const updateProfile = (updates: Partial<UserProfile>) => {
    if (!user) return;
    
    const updatedProfile = { ...user, ...updates };
    setUser(updatedProfile);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProfile));
    
    // Also update in users storage
    const storedUsers = JSON.parse(localStorage.getItem("sitthi_users") || "{}");
    if (storedUsers[user.email]) {
      storedUsers[user.email].profile = updatedProfile;
      localStorage.setItem("sitthi_users", JSON.stringify(storedUsers));
    }
  };

  return (
    <UserContext.Provider value={{ user, isLoggedIn: !!user, login, signup, logout, updateProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};