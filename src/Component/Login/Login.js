import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';


const Login = () => {

    const [error, setError] = useState('');
    const { signIn, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
              navigate(from, { replace: true });
                
                
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }


    return (
        <div className="flex flex-col max-w-md mx-auto p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                <p className="text-sm dark:text-gray-400">Sign in to access your account</p>
            </div>
            <form onSubmit={handleSubmit} action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                        <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <label htmlFor="password" className="text-sm">Password</label>
                            <a  href="#" className="text-xs hover:underline dark:text-gray-400">Forgot password?</a>
                        </div>
                        <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                    </div>
                </div>
                <div className="space-y-2">
                    <div>
                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Sign in</button>
                    </div>
                    <p className="px-6 text-sm text-center dark:text-gray-400">Don't have an account yet?
                        <a   href="#" className="hover:underline dark:text-violet-400">Sign up</a>.
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;