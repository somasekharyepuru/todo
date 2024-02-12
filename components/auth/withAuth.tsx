import React from 'react';
import { MSSpinner } from '@/components';
import { useAuthentication } from './hooks/useAuthentication';
export const withAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.ComponentType<P> => {
  const WithAuth: React.FC<P> = (props: P) => {
    const isAuthenticated = useAuthentication();
    if (isAuthenticated) {
      return <WrappedComponent {...props} />;
    }

    return <MSSpinner loading={true} />;
  };
  WithAuth.displayName = `withAuthHotel(${getDisplayName(WrappedComponent)})`;
  return WithAuth;
};

function getDisplayName<T>(Component: React.ComponentType<T>) {
  return Component.displayName || Component.name || 'Component';
}
