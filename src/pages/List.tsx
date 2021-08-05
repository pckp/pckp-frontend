import ListItem from 'components/ListItem'
import React from 'react'


const List: React.FC = () => {
    return (
        <>
            <div className="container">
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
                    name="spwnum"
                    description="The one and only tensor library for spwn"
                    version="0.0.8"
                    downloads={69}
                    size={42}
                    added_at="23/23/56"
                    versions={2}
                    author="feverdreme"
                />
            </div>
        </>
    )
}

export default List
