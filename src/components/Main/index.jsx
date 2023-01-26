import styles from "src/components/Main/Main.module.css";
import { Headline } from "../Headline";
import { Links } from "../Links";
import { useCallback, useState } from "react";

const ITEMS = [
  {
    href: "https://nextjs.org/docs",
    title: "Documentation \u2192",
    description: "Find in-depth information about Next.js features...",
  },
  {
    href: "https://nextjs.org/learn",
    title: "Learn →",
    description: "Find in-depth information about Next.js features...",
  },
  {
    href: "https://nextjs.org/docss",
    title: "Learn →",
    description: "Find in-depth information about Next.js features...",
  },
  {
    href: "https://nextjs.org/learnn",
    title: "Learn →",
    description: "Find in-depth information about Next.js features...",
  },
];


export function Main(props) {
  const [items, setItems] = useState(ITEMS);
  const handleReduce = useCallback(() => {
    setItems(prevItems => {
      return prevItems.slice(0, prevItems.length - 1);
    });
  }, []);

  return (
    <main className={styles.main}>
      <Headline page={props.page} handleReduce={handleReduce}>
        <code className={styles.code}>pages/{props.page}.js{items.length}</code>
      </Headline>
      <Links items={items} handleReduce={handleReduce} />
    </main>
  );
}