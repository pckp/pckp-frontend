import React from 'react'
import styles from "scss/modules/TagBadge.module.scss"

export interface Tag {
    tagName: string;
    count: number
};

export const tagsList: Tag[]  = [
    {
        tagName: "graphics",
        count: 5
    },
    {
        tagName: "utility",
        count: 2
    }
];

const TagBadge: React.FC<Tag> = (props) => {
    let {tagName, count} = props;

    return (
        <button type="button" className={styles.tagButton}>
            {tagName} <span className={styles.tagBadge}>{count}</span>
        </button>
    )
}

export default TagBadge