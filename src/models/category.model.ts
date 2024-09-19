export interface CategoryResponse {
  id: number;
  parentId: number;
  name: string;
  isActive: boolean;
  position: number;
  level: number;
  productCount: number;
  childrenData: CategoryResponse[];
  message?: string;
}
