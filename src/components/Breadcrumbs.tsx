import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbsProps {
  items?: {
    label: string;
    path: string;
  }[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const location = useLocation();
  
  // Generate breadcrumbs from current path if no items provided
  const breadcrumbs = items || location.pathname.split('/')
    .filter(Boolean)
    .map((path, index, array) => ({
      label: path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' '),
      path: '/' + array.slice(0, index + 1).join('/')
    }));

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        <li>
          <Link
            to="/"
            className="text-ilight-400 hover:text-ilight-500 transition-colors"
          >
            Home
          </Link>
        </li>
        {breadcrumbs.map((item, index) => (
          <li key={item.path} className="flex items-center">
            <ChevronRight className="w-4 h-4 text-ilight-300 mx-2" />
            {index === breadcrumbs.length - 1 ? (
              <span className="text-ilight-600 font-medium">{item.label}</span>
            ) : (
              <Link
                to={item.path}
                className="text-ilight-400 hover:text-ilight-500 transition-colors"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}