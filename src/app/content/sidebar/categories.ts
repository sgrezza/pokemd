export interface CategoryItem {
  name: string;
  children?: CategoryItem[];
  [propName: string]: any;
}
