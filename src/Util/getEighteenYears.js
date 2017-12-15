//создал функцию для расчета восемнадцатилетнего возраста но не знаю как её интегрировать в приложение
const getEighteenYears = () => {
	let current = new Date();
	return new Date(current.setFullYear(current.getFullYear() - 19))
}

export default getEighteenYears;
