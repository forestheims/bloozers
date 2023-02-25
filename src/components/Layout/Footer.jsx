import { useTheme } from '../../context/themeProvider';

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer>
      <a href="https://www.facebook.com/Bloozers/">
        <img src="./images/facebook.png" />
      </a>
    </footer>
  );
}
