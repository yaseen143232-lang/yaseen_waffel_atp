export interface CustomizationOption {
  id: string;
  name: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'waffles' | 'brownies' | 'pancakes' | 'chicken' | 'fries' | 'shakes';
  price: number;
  description: string;
  image: string;
  badge?: string;
  badgeType?: 'bestseller' | 'chef' | 'fan' | 'crave' | 'fresh' | 'crunchy' | 'classic' | 'shake' | 'trendy';
  isVeg: boolean;
  prepTime: string;
  subtitle: string;
  customizations?: CustomizationOption[];
}

export interface CartItem {
  cartItemId: string;
  item: MenuItem;
  quantity: number;
  selectedCustomizations: CustomizationOption[];
  totalItemPrice: number;
}

export type CategoryKey = 'all' | 'waffles' | 'brownies' | 'pancakes' | 'chicken' | 'fries' | 'shakes';
