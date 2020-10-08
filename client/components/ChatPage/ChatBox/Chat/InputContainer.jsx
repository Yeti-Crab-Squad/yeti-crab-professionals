import React from 'react';

export function InputContainer() {
	return (
		<div className='input-container'>
			<form id="chat-form">
				<input id="msg" type="text" autoComplete="off" required/>
				<button className="btn">Woof</button>
			</form>
		</div>
	);
}
