import './style.css';
// import { formScreen } from './components/App.ts';
import { formDiv } from './components/App.ts';

document.querySelector<HTMLDivElement>('#app')?.append(formDiv!);
