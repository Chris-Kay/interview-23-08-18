import React from 'react';
import './MetaData.css';

const metaData = props => {
    return (
        <aside className="meta-data">
          <time className="meta-data__item meta-data__item--date">{props.date}</time>
          <span className="meta-data__item meta-data__item--league">{props.league}</span>
        </aside>
    );
}

export default metaData;
