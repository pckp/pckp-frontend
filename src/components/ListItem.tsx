import React from 'react'
import styles from 'scss/modules/ListItem.module.scss'

interface Props {
    name: string
    description: string
    version: string
    downloads: number
    size: number
    added_at: string
    versions: number
    author: string
}

const ListItem: React.FC<Props> = (props) => {
    let {
        name,
        description,
        version,
        downloads,
        size,
        added_at,
        versions,
        author,
    } = props

    return (
        <div className="mb-3">
            <div className="card">
                <div className="card-body w-100">
                    <h5 className={styles.cardTitle}>
                        {name}
                        <sup>
                            <em>v{version}</em>
                        </sup>
                    </h5>
                    <h6 className={styles.cardDesc}>{description}</h6>

                    <p>Versions: {versions}</p>

                    <hr />

                    <p className={styles.cardAuthor}>
                        <span>
                            {author}
                            <sup>✓</sup>
                        </span>
                    </p>

                    <p>
                        Downloads: {downloads}
                        <br />
                        Size: {size}kb
                        <br />
                        Added {added_at}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ListItem
