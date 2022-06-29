import Navigation from './src/Navigation';
import { AuthenticatedUserProvider } from './src/Navigation';

export default function App() { 
    return (
        <AuthenticatedUserProvider>
        <Navigation /> 
        </AuthenticatedUserProvider>
    )
}

