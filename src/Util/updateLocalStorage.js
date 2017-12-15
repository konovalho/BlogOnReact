const updateLocalStorage = (state) => {
	const filds = JSON.stringify(state);
  localStorage.setItem('filds', filds);
}

export {updateLocalStorage};