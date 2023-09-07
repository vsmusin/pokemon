import { ListItem } from "@/interfaces/ListItem";
import Link from "next/link";

interface Props {
  mode: "pokemon" | "type",
  items: ListItem[];
}

export default function List({ mode, items }: Props) {
  if (!items?.length) return "Empty list";

  return (
    <div className="border-2 rounded-lg p-5 flex flex-wrap justify-between gap-3">
      {items.map(item => (
        <Link
          href={`/${mode}/${item.id}`}
          key={item.id}
          className="border-2 rounded-lg p-1 px-4"
        >
          {item.name}
        </Link>
      ))}
    </div>
  )
};