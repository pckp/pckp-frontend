import ListItem from 'components/ListItem'
import React from 'react'


const List: React.FC = () => {
    return (
        <>
            <div className="container mt-3">
                <ListItem
                    name="example package"
                    description="Dolor mollit eiusmod irure culpa dolore incididunt laborum."
                    version="3.4"
                    downloads={5}
                    size={512}
                />

                <ListItem
                    name="spwnum"
                    description="The one and only tensor library for spwn"
                    version="0.0.8"
                    downloads={69}
                    size={42}
                />
            </div>
        </>
    )
}

export default List
