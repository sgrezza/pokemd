export interface CategoryItem {
  name: string;
  children?: CategoryItem[];
  urlName: string;
  [propName: string]: any;
}
