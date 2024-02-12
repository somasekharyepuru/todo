import { MSLink } from '@/components';

const Inn404 = () => {
  return (
    <>
      <div className="pagenot-found-wrapper h-96 flex items-center justify-center">
        <div className="pagenot-found-content-wrap w-96 mx-auto text-center">
          <h1 className="text-base font-semibold">404 - Page Not Found </h1>
          <MSLink
            href={'/'}
            className="text-base px-4 py-3 hover:opacity-80 hover:transition-all   bg-blue    transition-all  rounded-md mx-auto bg-blue-600 text-white block mt-4 w-max"
          >
            Home page
          </MSLink>
        </div>
      </div>
    </>
  );
};
export default Inn404;
