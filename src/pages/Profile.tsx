import React from 'react'

interface Props {
    author: string;
    gh_url?: string;
    verified: boolean;
}

const Profile: React.FC<Props> = (props) => {
    let {author, verified, gh_url} = props;

    return (
        <div className="profile">
            
        </div>
    );
}

export default Profile;