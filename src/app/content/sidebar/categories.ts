export const Categories: CategoryItem[] = [
  {
    name: 'Combat',
    subcategories: ['Combat', 'Shift Actions', 'Action Points']
  },
  {
    name: 'Life',
    subcategories: ['Resting']
  }
];
export interface CategoryItem {
  name: string;
  subcategories?: string[];
}
