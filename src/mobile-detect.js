import { windowVar } from 'windowVar';

export default function() {
  return windowVar.innerWidth <= 800 && windowVar.innerHeight <= 600;
}
