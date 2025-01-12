// app/page.js
import { permanentRedirect } from 'next/navigation';

export default function HomeRedirect() {
    permanentRedirect('/home')
}
