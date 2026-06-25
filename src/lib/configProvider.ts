"use client";
import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { useAppSelector } from "@lib/redux/store";

export type Config = {
  controlSize?: "default" | "compact";
  loading: boolean;
  setLoading: (v: boolean) => void;
  direction: "ltr" | "rtl";
};

export const defaultConfig: Config = {
  loading: false,
  setLoading: () => {},
  direction: "ltr",
};

export const ConfigContext = createContext<Config>(defaultConfig);
ConfigContext.displayName = "ConfigContext";

export function ConfigProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("localeChanging") === "true";
    }
    return false;
  });
  const direction = useAppSelector((state) => state.root.direction);

  const mode = useAppSelector((state) => state.root.mode);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(mode);
  }, [mode]);

  const value: Config = {
    loading,
    setLoading,
    direction,
  };

  return React.createElement(ConfigContext.Provider, { value }, children);
}

export function useConfig() {
  return useContext(ConfigContext);
}

export default ConfigProvider;
