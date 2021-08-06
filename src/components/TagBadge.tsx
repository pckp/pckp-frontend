import React from 'react'

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
        <button type="button" className="btn btn-outline-primary mt-3">
            {tagName} <span className="badge bg-secondary">{count}</span>
        </button>
    )
}

export default TagBadge