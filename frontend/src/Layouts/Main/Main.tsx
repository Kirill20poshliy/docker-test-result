import { useState, type FC } from "react";
import styles from "./Main.module.scss";
import type { IPost } from "../../shared/models/posts";

export const Main: FC<{ data?: IPost[] }> = ({ data = [] }) => {
    const [searchString, setSearchString] = useState<string>("");

    return (
        <div className={styles.list}>
            <header className={styles.header}>
                <h2>JSONPlaceholder Posts Holder</h2>
                <input
                    type="text"
                    name="search"
                    className={styles.search}
                    placeholder="Search..."
                    onChange={(e) => setSearchString(e.target.value)}
                />
            </header>
            {data
                .filter(
                    (item) =>
                        item.title
                            .toLowerCase()
                            .includes(searchString.toLowerCase()) ||
                        item.body
                            .toLowerCase()
                            .includes(searchString.toLowerCase())
                )
                .map((item) => (
                    <div key={item.id} className={styles.item}>
                        <h4>{item.title}</h4>
                        <p>{item.body}</p>
                    </div>
                ))}
        </div>
    );
};
