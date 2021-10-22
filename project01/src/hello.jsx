import React from 'react';

function Hello({color,name}) {
    return (
        <div>
        <div style={{ color : color }}>안녕하세여{name}</div>
        </div>
    );

}
Hello.defaultProps = {
    name: '이름없음'
    }

export default Hello;