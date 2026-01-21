import './style.css';
import { formScreen } from './components/App.ts';

document.querySelector<HTMLDivElement>('#app')?.append(formScreen()!);
