import React from 'react';

export function Message({ messageInfo }) {
	return (
    <div className='message'>
      <p className="meta">{messageInfo.username}</p>
        <span>{messageInfo.time}</span>
      <p className="text">{messageInfo.text}</p>
    </div>
	);
}
