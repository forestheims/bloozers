import { useTheme } from '../../context/themeProvider';

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer>
      <p>{theme}</p>
    </footer>
  );
}
