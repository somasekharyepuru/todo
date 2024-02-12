import React, { Fragment } from 'react';

/**
 * Items.
 * @property {string} label - The label is content or title.
 * @property {string} id - The unique identifier of the tab.
 */
interface TabItem {
  label: string;
  id: string;
}
interface tabProps {
  items?: TabItem[];
  classNameStyle?: {
    className?: string;
    overrideClassName?: boolean;
  };
  onTabClick?: (id: string) => void;
  activeTab?: string;
  activeClassName?: string;
  overrideActiveClassName?: boolean;
}

export const Inn3Tabs = ({
  items,
  classNameStyle = {},
  onTabClick,
  activeTab,
  activeClassName,
  overrideActiveClassName,
}: tabProps) => {
  const { className = '', overrideClassName = true } = classNameStyle;
  const getClassName = () => (overrideClassName ? className : '');
  const getActiveClassName = () =>
    overrideActiveClassName
      ? `${activeClassName} active-tab border-b-2 border-solid border-blue text-blue`
      : 'active-tab border-b-2 border-solid border-blue text-blue';

  const handleClick = (id: string) => {
    if (onTabClick) {
      onTabClick(id);
    }
  };

  return (
    <>
      <div className={`${getClassName()} flex gap-8 tabs-wrapper`}>
        {items &&
          items.map((item: any, index: number) => {
            const isActive = item.id === activeTab;
            const tabClassName = isActive ? getActiveClassName() : '';
            return (
              <Fragment key={index}>
                <div
                  onClick={() => handleClick(item.id)}
                  className={`text-sm font-normal font-poppins pt-4 pb-4 cursor-pointer ${tabClassName}`}
                >
                  {item?.label} {item?.tableLength && `(${item?.tableLength})`}
                </div>
              </Fragment>
            );
          })}
      </div>
    </>
  );
};
