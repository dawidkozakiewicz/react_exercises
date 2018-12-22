function DegeneratJurek({ bobik }) {
	return (
		<div>
			<h4> Deneracie, ale z Ciebie jebany {bobik}!</h4>
		</div>
	);
}

function App({ login, name, department, zwierze }) {
	return (
		<div>
			<h1> Jesteś {name} </h1>
			<h2> kutasem {login} </h2> <h3>fiucie {department} </h3>
			<DegeneratJurek bobik={zwierze} />
		</div>
	);
}

ReactDOM.render(
	<App login="Jurek" name="Jerzy Sum" department="Wieczór Wrocławia" zwierze="Mrowkojad" />,
	document.getElementById('app')
);
