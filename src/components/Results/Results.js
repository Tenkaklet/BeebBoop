import React from 'react';
import Item from './Item';
const Results = props => {
    const results = props.results.map(res => {
        return <Item key={res.id} data={res} type={res.kind} />
    });

    return (
        <div>
            <div className="ui container">
                {results}
            </div>
        </div>);
};

export default Results;