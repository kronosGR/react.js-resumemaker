import React, { FC, useState } from 'react';

export interface ITheme {
  color: string;
  font: string;
  fontSize: string;
}

export interface IThemeType {
  theme: ITheme;
  saveTheme: (theme: ITheme) => void;
}

interface Props {
  children: JSX.Element;
}

const ThemeContext = React.createContext<IThemeType | null>(null);

export const ThemeProvider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<ITheme>({
    color: '',
    font: '',
    fontSize: '',
  });

  const saveTheme = (theme: ITheme) => {
    const newTheme: ITheme = {
      color: theme.color,
      font: theme.color,
      fontSize: theme.fontSize,
    };
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, saveTheme }}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
