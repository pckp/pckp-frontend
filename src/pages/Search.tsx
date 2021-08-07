import ListItem from 'components/ListItem'
import TagList from 'components/TagList'
import useQuery from 'hooks/useQuery'
import React from 'react'
import styles from 'scss/modules/Search.module.scss'

const Search: React.FC = () => {
    const query = useQuery().get('q')

    return (
        <>
            <div className="container-fluid">
                <div className={styles.searchBox}>
                    <p className={styles.searchBoxText}>
                        Search Results for:{' '}
                        <strong>
                            <em>{query}</em>
                        </strong>
                    </p>
                </div>

                <div className={styles.searchResults}>
                    <div className={styles.searchResultsTags}>
                        <TagList />
                    </div>

                    <div className={styles.searchResultsList}>
                        <ListItem
                            name="example package"
                            description="Dolor mollit eiusmod irure culpa dolore incididunt laborum."
                            version="3.4"
                            downloads={5}
                            size={512}
                            added_at="25/25/25"
                            versions={3}
                            author="spu7nix"
                        />

                        <ListItem
                            name={'a'.repeat(255)}
                            description="The one and only tensor library for spwn"
                            version="0.0.8"
                            downloads={69}
                            size={42}
                            added_at="23/23/56"
                            versions={2}
                            author={'a'.repeat(255)}
                        />

                        <ListItem
                            name={'a'.repeat(255)}
                            description="The one and only tensor library for spwn"
                            version="0.0.8"
                            downloads={69}
                            size={42}
                            added_at="23/23/56"
                            versions={2}
                            author={'a'.repeat(255)}
                        />
                    </div>
                </div>
            </div>

            {/* <div className="container"></div> */}
        </>
    )
}

export default Search
