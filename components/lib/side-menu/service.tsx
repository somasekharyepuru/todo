import { MSLink } from '../base';
import { ISideMenuItem } from './side-menu-interface';
export const getFormattedItems = (items: ISideMenuItem[]) =>
  items.map(getFormattedItem);

export const getFormattedItem = (item: ISideMenuItem) => {
  const updatedItem = { ...item };
  updatedItem.label = item?.children ? (
    <div className={`capitalize ${item.className}`}>
      <span className={item.labelClassName || ''}>{item.label}</span>
    </div>
  ) : (
    <div>
      {item.disabled ? (
        <span className={item.labelClassName || ''}>{item.label}</span>
      ) : (
        <MSLink
          href={item.url || '/'}
          className={`capitalize ${item.className}`}
        >
          <span className={item.labelClassName || ''}>{item.label}</span>
        </MSLink>
      )}
    </div>
  );
  if (item.children) {
    updatedItem.children = item.children.map(getFormattedItem);
  }
  delete updatedItem?.labelClassName;
  return updatedItem;
};

export const getSelectedKey = (items: any[], path: string): any => {
  if (path === '/') {
    return 'dashboard';
  }
  for (let i = 0; i < items.length; i++) {
    if (items[i].url === '/') {
      continue;
    }
    if (items[i].children) {
      // Recursively check the children
      const childKey: any = getSelectedKey(items[i].children, path);
      if (childKey !== null) {
        // If a matching key is found in the children, return it
        return childKey;
      }
    }
    if (path.indexOf(items[i]?.url) !== -1) {
      return items[i].key;
    }
  }
  return null; // If no match is found in this subtree, return null
};

export const getParentMenu = (
  items: any[],
  selectedKey: string,
  parentKey = '',
  parentArray: string[] = []
): string[] | undefined => {
  for (let i = 0; i < items.length; i++) {
    if (items[i].children) {
      getParentMenu(items[i].children, selectedKey, items[i].key, parentArray);
    }
    if (items[i].key === selectedKey && parentKey) {
      parentArray.push(parentKey);
    }
  }
  parentArray.push('projects');
  return parentArray;
};
