import React from 'react'

interface Props {
    name: string;
    description: string;
    version: string;
    downloads: number;
    size: number;
}

const ListItem: React.FC<Props> = (props) => {
    let {name, description, version, downloads, size} = props;

    return (
        <div className="ListItem mb-3">
            <div className="card">
                <div className="card-body">
                    <h5
                        style={{ color: '#54b77d' }}
                        className="card-title mb-3"
                    >
                        {name}
                    </h5>
                    <h6
                        style={{ color: '#df8230' }}
                        className="card-subtitle mb-2"
                    >
                        {description}
                    </h6>

                    <p>
                        <em>v{version}</em>
                    </p>

                    <hr />

                    <p>
                        Downloads: {downloads}
                        <br />
                        Size: {size}kb
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ListItem