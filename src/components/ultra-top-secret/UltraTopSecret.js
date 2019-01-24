import React from 'react';

const UltraTopSecret = ({ text }) => (
    <div>
        { 'HELLO I AM NOT SUPPOSED TO SHOW UP -> ' }
        <label>{ text }</label>
    </div>
);

export default UltraTopSecret;
