type HeadingProps = {
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "h7" | "h8";
  label: string;
};

export default ({ label, level = "h1" }: HeadingProps) =>
  `<${level}>${label}</${level}>`;
