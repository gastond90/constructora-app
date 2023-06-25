import { Link } from "react-router-dom";


export default function NavLink({ active = false, className = '', ...props }) {
    return (
        <div
            {...props}
            className={
                'inline-flex cursor-pointer items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'border-indigo-400 cursor-pointer text-gray-900 focus:border-indigo-700 '
                    : 'border-transparent text-gray-500  cursor-pointer hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 ') +
                className
            }
        >        
        </div>
    );
}
