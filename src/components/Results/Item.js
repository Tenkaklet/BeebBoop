import React from 'react';

const Item = props => {
    console.log(props);
    if (props.type === 'user') {
        return <div className="ui feed">
            <div className="event">
                <div className="label">
                    <img src={props.data.avatar_url} alt={props.data.description} />
                </div>
                <div className="content">
                    <p>{props.data.full_name} <a href={props.data.permalink_url} target="_blank">Go to artist </a></p>
                </div>
            </div>
        </div>
    } else if (props.type === 'track') {
        return <div className="ui feed">
            <div className="event">
                <div className="label">
                    <img src={props.data.artwork_url} alt={props.data.description} />
                </div>
                <div className="content">
                    <p>{props.data.title} <a href={props.data.permalink_url} target="_blank">Go to Song</a></p>
                </div>
            </div>
        </div>
    } else {
        return <div><p>Playlist</p></div>
    }
};

export default Item;