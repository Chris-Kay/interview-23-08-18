import React from 'react';
import ReactDOM from 'react-dom';

import MetaData from './MetaData';

const renderMetaData = (props) => mount(<MetaData {...props} />);

describe('<MetaData />', () => {
    it('renders without crashing', () => {
        renderMetaData("blach", "test");
    })
});
