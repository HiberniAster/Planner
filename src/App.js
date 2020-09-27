import React from "react";
import { Route, HashRouter } from "react-router-dom";
import LeftBox from "./Components/LeftBox";
import Index from "./routes/Index";
import PiePlan from "./routes/PiePlan";
import WeekPlan from "./routes/WeekPlan";
import "./Style/App.css";

function App() {
	return (
		<HashRouter>
			<LeftBox />
			<Route path="/" exact={true} component={Index} />
			<Route path="/pieplan" component={PiePlan} />
			<Route path="/weekplan" component={WeekPlan} />
		</HashRouter>
	);
}

export default App;
